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

interface LocationSuggestion {
  display_name: string;
  lat: string;
  lon: string;
}

const WeatherFeature = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestLoading, setSuggestLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Close dropdown on outside click
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
    setSuggestLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&limit=5&q=${encodeURIComponent(query)}`
      );
      const data: LocationSuggestion[] = await res.json();
      setSuggestions(data);
      setShowSuggestions(data.length > 0);
    } catch {
      setSuggestions([]);
    } finally {
      setSuggestLoading(false);
    }
  };

  const handleInputChange = (value: string) => {
    setLocation(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(value), 300);
  };

  const selectSuggestion = (s: LocationSuggestion) => {
    const name = s.display_name.split(",").slice(0, 3).join(", ");
    setLocation(name);
    setShowSuggestions(false);
    setSuggestions([]);
    fetchWeather(name);
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
        const loc = `Lat ${pos.coords.latitude.toFixed(2)}, Lng ${pos.coords.longitude.toFixed(2)}`;
        setLocation(loc);
        fetchWeather(loc);
      },
      () => {
        setLocation("Hyderabad, Telangana");
        fetchWeather("Hyderabad, Telangana");
      }
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
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                    className="pl-9"
                  />
                </div>
                <Button onClick={handleSearch} disabled={loading} className="gradient-hero border-0">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
                </Button>
              </div>

              {showSuggestions && (
                <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                  {suggestLoading && (
                    <div className="px-4 py-3 text-sm text-muted-foreground flex items-center gap-2">
                      <Loader2 className="h-3 w-3 animate-spin" /> Searching...
                    </div>
                  )}
                  {suggestions.map((s, i) => {
                    const parts = s.display_name.split(", ");
                    const primary = parts.slice(0, 2).join(", ");
                    const secondary = parts.slice(2).join(", ");
                    return (
                      <button
                        key={i}
                        className="w-full text-left px-4 py-3 hover:bg-muted/60 transition-colors flex items-start gap-3 border-b border-border last:border-0"
                        onClick={() => selectSuggestion(s)}
                      >
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{primary}</p>
                          {secondary && (
                            <p className="text-xs text-muted-foreground truncate">{secondary}</p>
                          )}
                        </div>
                      </button>
                    );
                  })}
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
