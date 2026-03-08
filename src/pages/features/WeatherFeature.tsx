import { Cloud } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const WeatherFeature = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-2xl">
        <BackButton />
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 animate-fade-in text-center space-y-4">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--agro-sky))] to-[hsl(var(--primary))] inline-flex">
            <Cloud className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Weather API Integration</h1>
          <p className="text-muted-foreground">Get real-time weather data for your region and receive crop suggestions based on current and forecasted conditions.</p>
          <div className="rounded-lg bg-muted p-6 text-sm text-muted-foreground">
            🚧 This feature is coming soon. We're integrating live weather APIs to provide hyper-local crop recommendations.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WeatherFeature;
