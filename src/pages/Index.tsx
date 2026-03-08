import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-farm.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t('heroDesc')}
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/login")}
            className="gradient-gold text-foreground font-semibold text-lg px-8 py-6 shadow-agro animate-fade-in hover:scale-105 transition-transform"
            style={{ animationDelay: "0.4s" }}
          >
            {t('getStarted')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
