import { useNavigate } from "react-router-dom";
import { Sprout, Shield, CloudSun, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-farm.jpg";

const features = [
  { icon: Sprout, title: "Smart Crop Recommendation", desc: "AI suggests the best crop based on your soil, budget & weather." },
  { icon: Shield, title: "Disease Detection", desc: "Upload a photo of your crop and get instant disease diagnosis." },
  { icon: CloudSun, title: "Weather Integration", desc: "Real-time weather data to optimize your farming decisions." },
  { icon: MessageSquare, title: "Voice & Multi-Language", desc: "Use voice input and regional languages for easy access." },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Indian farmland" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50" />
        </div>
        <div className="relative container py-24 md:py-36 flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground max-w-2xl leading-tight animate-fade-in">
            Empowering Farmers with AI Intelligence
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Get personalized crop recommendations and instant disease predictions — all in your regional language.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/login")}
            className="gradient-gold text-foreground font-semibold text-lg px-8 py-6 shadow-agro animate-fade-in hover:scale-105 transition-transform"
            style={{ animationDelay: "0.4s" }}
          >
            Get Started — It's Free
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">How Agro_Guardian Helps You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="gradient-card rounded-lg p-6 shadow-card hover:shadow-agro transition-shadow border border-border animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
