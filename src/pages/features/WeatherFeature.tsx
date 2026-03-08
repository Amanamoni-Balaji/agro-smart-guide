import { useState, useRef, useEffect } from "react";
import { Cloud, MapPin, Thermometer, Droplets, Wind, Sun, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  rainfall: number;
  forecast: { day: string; temp: number; condition: string }[];
  suggestedCrops: { name: string; reason: string }[];
}

interface Suggestion {
  primary: string;
  secondary: string;
  full: string;
}

const WeatherFeature = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searching, setSearching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const fetchSuggestions = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Abort previous request
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setSearching(true);
    try {
      // Use Photon geocoder (by Komoot) - designed for autocomplete, much better than Nominatim
      // Biased toward India center (lat=22, lon=79)
      const res = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=7&lang=en&lat=22&lon=79&layer=city&layer=state&layer=district&layer=county`,
        { signal: controller.signal }
      );
      const data = await res.json();

      const results: Suggestion[] = (data.features || [])
        .filter((f: any) => {
          const country = f.properties?.country;
          return country === "India";
        })
        .map((f: any) => {
          const p = f.properties;
          const name = p.name || "";
          const state = p.state || "";
          const district = p.district || p.county || "";
          const type = p.osm_value || p.type || "";

          // Build secondary line like Google Maps
          const parts: string[] = [];
          if (district && district !== name) parts.push(district);
          if (state && state !== name && state !== district) parts.push(state);
          if (type) parts.push(type.charAt(0).toUpperCase() + type.slice(1));

          return {
            primary: name,
            secondary: parts.join(", "),
            full: [name, district, state].filter((v, i, a) => v && a.indexOf(v) === i).join(", "),
          };
        })
        // Deduplicate by full name
        .filter((s: Suggestion, i: number, arr: Suggestion[]) =>
          arr.findIndex((x) => x.full === s.full) === i
        );

      setSuggestions(results);
      setShowSuggestions(results.length > 0);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error(err);
      }
    } finally {
      setSearching(false);
    }
  };

  const handleInputChange = (value: string) => {
    setLocation(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(value), 250);
  };

  const selectSuggestion = (s: Suggestion) => {
    setLocation(s.full);
    setShowSuggestions(false);
    setSuggestions([]);
    fetchWeather(s.full);
  };

  const fetchWeather = async (loc: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("weather-crop-suggest", {
        body: { location: loc },
      });
      if (error) throw error;
      setWeatherData(data);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to fetch weather data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!location.trim()) return;
    setShowSuggestions(false);
    fetchWeather(location.trim());
  };

  const handleUseCurrentLocation = () => {
    setLocation("Detecting location...");
    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        // Reverse geocode using Photon
        fetch(
          `https://photon.komoot.io/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
        )
          .then((r) => r.json())
          .then((data) => {
            const p = data.features?.[0]?.properties;
            const name = p?.city || p?.name || p?.district || "";
            const state = p?.state || "";
            const loc = [name, state].filter(Boolean).join(", ") || "Your Location";
            setLocation(loc);
            fetchWeather(loc);
          })
          .catch(() => {
            setLocation("Hyderabad, Telangana");
            fetchWeather("Hyderabad, Telangana");
          });
      },
      () => {
        setLocation("Hyderabad, Telangana");
        fetchWeather("Hyderabad, Telangana");
      }
    );
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query || query.length < 2) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="font-bold">{text.slice(idx, idx + query.length)}</span>
        {text.slice(idx + query.length)}
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-3xl">
        <BackButton />
        <div className="text-center mb-8">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--agro-sky))] to-[hsl(var(--primary))] inline-flex mb-4">
            <Cloud className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Weather-Based Crop Suggestions</h1>
          <p className="text-muted-foreground mt-1">Get crop recommendations based on real-time weather conditions</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <div className="relative" ref={wrapperRef}>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search city, district, or state..."
                    value={location}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setShowSuggestions(false);
                        handleSearch();
                      }
                    }}
                    onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                    className="pl-9"
                    autoComplete="off"
                  />
                </div>
                <Button onClick={handleSearch} disabled={loading} className="gradient-hero border-0">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
                </Button>
              </div>

              {showSuggestions && (
                <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-xl shadow-xl overflow-hidden">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-start gap-3 border-b border-border/40 last:border-0"
                      onClick={() => selectSuggestion(s)}
                    >
                      <div className="mt-0.5 shrink-0 rounded-full bg-muted p-1.5">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-foreground">{highlightMatch(s.primary, location)}</p>
                        {s.secondary && (
                          <p className="text-xs text-muted-foreground mt-0.5 truncate">{s.secondary}</p>
                        )}
                      </div>
                    </button>
                  ))}
                  {searching && (
                    <div className="px-4 py-3 text-xs text-muted-foreground flex items-center gap-2 border-t border-border/40">
                      <Loader2 className="h-3 w-3 animate-spin" /> Searching...
                    </div>
                  )}
                </div>
              )}
            </div>
            <Button variant="outline" className="w-full gap-2" onClick={handleUseCurrentLocation} disabled={loading}>
              <MapPin className="h-4 w-4" /> Use My Current Location
            </Button>
          </CardContent>
        </Card>

        {loading && (
          <div className="text-center py-12">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary mb-3" />
            <p className="text-muted-foreground">Fetching weather data for {location}...</p>
          </div>
        )}

        {weatherData && !loading && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-4 text-center">
                  <Thermometer className="h-6 w-6 mx-auto text-destructive mb-1" />
                  <p className="text-2xl font-bold">{weatherData.temperature}°C</p>
                  <p className="text-xs text-muted-foreground">Temperature</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 text-center">
                  <Droplets className="h-6 w-6 mx-auto text-[hsl(var(--agro-sky))] mb-1" />
                  <p className="text-2xl font-bold">{weatherData.humidity}%</p>
                  <p className="text-xs text-muted-foreground">Humidity</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 text-center">
                  <Wind className="h-6 w-6 mx-auto text-muted-foreground mb-1" />
                  <p className="text-2xl font-bold">{weatherData.windSpeed} km/h</p>
                  <p className="text-xs text-muted-foreground">Wind Speed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 text-center">
                  <Sun className="h-6 w-6 mx-auto text-[hsl(var(--agro-gold))] mb-1" />
                  <p className="text-2xl font-bold">{weatherData.rainfall} mm</p>
                  <p className="text-xs text-muted-foreground">Rainfall</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3-Day Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {weatherData.forecast.map((f) => (
                    <div key={f.day} className="text-center p-3 rounded-lg bg-muted">
                      <p className="text-sm font-semibold">{f.day}</p>
                      <p className="text-lg font-bold">{f.temp}°C</p>
                      <p className="text-xs text-muted-foreground">{f.condition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-[hsl(var(--primary))]/30">
              <CardHeader>
                <CardTitle className="text-lg text-primary">🌾 Recommended Crops for Your Weather</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {weatherData.suggestedCrops.map((crop, i) => (
                  <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="font-semibold">{crop.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{crop.reason}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default WeatherFeature;
