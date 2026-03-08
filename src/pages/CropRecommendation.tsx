import { useNavigate } from "react-router-dom";
import { Leaf, FlaskConical } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const modes = [
  {
    title: "Simple Mode",
    desc: "Enter basic info like soil type, budget, weather & season — perfect for quick recommendations.",
    icon: Leaf,
    path: "/recommend/simple",
    gradient: "gradient-hero",
  },
  {
    title: "Advanced Mode",
    desc: "Enter precise N, P, K values, temperature, humidity, pH & rainfall for detailed scientific analysis.",
    icon: FlaskConical,
    path: "/recommend/advanced",
    gradient: "gradient-gold",
  },
];

const CropRecommendation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn onLogout={() => navigate("/")} />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-heading font-extrabold text-center mb-2">Crop Recommendation</h1>
        <p className="text-center text-muted-foreground mb-10">Choose your preferred input mode</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {modes.map((m, i) => (
            <button
              key={m.title}
              onClick={() => navigate(m.path)}
              className="group gradient-card rounded-xl border border-border shadow-card hover:shadow-agro transition-all p-8 text-left animate-fade-in flex flex-col items-center gap-4"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`rounded-full p-4 ${m.gradient}`}>
                <m.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-heading font-bold">{m.title}</h2>
              <p className="text-sm text-muted-foreground text-center">{m.desc}</p>
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CropRecommendation;
