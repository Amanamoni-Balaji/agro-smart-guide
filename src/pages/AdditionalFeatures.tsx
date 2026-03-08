import { useNavigate } from "react-router-dom";
import { Cloud, Globe, Mic, RefreshCw, MessageSquare, CalendarDays, FlaskConical, ShieldAlert, ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useLanguage } from "@/contexts/LanguageContext";

const AdditionalFeatures = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      title: t('weatherIntegration'),
      desc: "Get crop suggestions based on real-time weather conditions for your region.",
      icon: Cloud,
      path: "/features/weather",
      gradient: "from-[hsl(var(--agro-sky))] to-[hsl(var(--primary))]",
    },
    {
      title: t('voiceInput'),
      desc: "Speak to the app in your language — our AI chatbot understands and responds.",
      icon: Mic,
      path: "/features/voice-input",
      gradient: "from-[hsl(var(--primary))] to-[hsl(var(--secondary))]",
    },
    {
      title: t('cropRotationPlanner'),
      desc: "Plan your next best crop after harvesting for optimal soil recovery.",
      icon: RefreshCw,
      path: "/features/crop-rotation",
      gradient: "from-[hsl(var(--secondary))] to-[hsl(var(--agro-earth))]",
    },
    {
      title: t('smsAlerts'),
      desc: "Receive SMS alerts for weather warnings, disease risks, and fertilizer reminders.",
      icon: MessageSquare,
      path: "/features/sms-alerts",
      gradient: "from-[hsl(var(--accent))] to-[hsl(var(--destructive))]",
    },
    {
      title: t('cropScheduleFeature'),
      desc: "Enter your sowing date and get a complete step-by-step schedule until harvest.",
      icon: CalendarDays,
      path: "/features/crop-schedule",
      gradient: "from-[hsl(var(--agro-gold))] to-[hsl(var(--secondary))]",
    },
    {
      title: t('fertilizerYield'),
      desc: "Get fertilizer suggestions tailored to maximize your crop yield.",
      icon: FlaskConical,
      path: "/features/fertilizer",
      gradient: "from-[hsl(var(--agro-earth))] to-[hsl(var(--primary))]",
    },
    {
      title: t('diseaseStage'),
      desc: "Detect disease stage, infection level, and get prevention methods.",
      icon: ShieldAlert,
      path: "/features/disease-stage",
      gradient: "from-[hsl(var(--destructive))] to-[hsl(var(--accent))]",
    },
    {
      title: t('imageQuality'),
      desc: "Automatically checks uploaded image quality and asks for re-upload if blurry.",
      icon: ImageIcon,
      path: "/features/image-quality",
      gradient: "from-[hsl(var(--agro-sky))] to-[hsl(var(--secondary))]",
    },
    {
      title: "Multi-language Support",
      desc: "Use the app in 12+ Indian regional languages including Hindi, Telugu, Tamil, and more.",
      icon: Globe,
      path: "/settings",
      gradient: "from-[hsl(var(--primary))] to-[hsl(var(--agro-sky))]",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <BackButton />
        <h1 className="text-3xl font-heading font-extrabold text-center mb-2">Additional Features</h1>
        <p className="text-center text-muted-foreground mb-10">Explore powerful tools built for Indian farmers</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <button
              key={f.title}
              onClick={() => navigate(f.path)}
              className="group gradient-card rounded-xl border border-border shadow-card hover:shadow-agro transition-all p-6 text-left animate-fade-in flex flex-col items-center gap-3"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`rounded-full p-3 bg-gradient-to-br ${f.gradient}`}>
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-base font-heading font-bold text-center">{f.title}</h2>
              <p className="text-xs text-muted-foreground text-center">{f.desc}</p>
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdditionalFeatures;
