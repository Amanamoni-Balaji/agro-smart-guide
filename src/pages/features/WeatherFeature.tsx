import { useState } from "react";
import { Cloud, MapPin, Thermometer, Droplets, Wind, Sun, Loader2 } from "lucide-react";
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

const WeatherFeature = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const { toast } = useToast();

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
            <div className="flex gap-3">
              <Input
                placeholder="Enter your city or district..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch} disabled={loading} className="gradient-hero border-0">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
              </Button>
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
