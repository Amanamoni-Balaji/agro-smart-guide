import { useNavigate } from "react-router-dom";
import { Sprout, Bug } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cropRecommendImg from "@/assets/crop-recommend.png";
import cropDiseaseImg from "@/assets/crop-disease.png";

const cards = [
  {
    title: "Crop Recommendation",
    desc: "Get AI-powered suggestions for the best crop to grow based on your soil, weather, and budget.",
    icon: Sprout,
    img: cropRecommendImg,
    path: "/recommend",
    color: "from-primary to-secondary",
  },
  {
    title: "Crop Disease Prediction",
    desc: "Upload an image of your crop and our AI will identify the disease and suggest treatments.",
    icon: Bug,
    img: cropDiseaseImg,
    path: "/disease",
    color: "from-secondary to-agro-sky",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn onLogout={() => navigate("/")} />

      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-heading font-extrabold text-center mb-2 animate-fade-in">
          Welcome, Farmer! 🌾
        </h1>
        <p className="text-center text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Choose a service to get started
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((c, i) => (
            <button
              key={c.title}
              onClick={() => navigate(c.path)}
              className="group gradient-card rounded-xl border border-border shadow-card hover:shadow-agro transition-all p-6 text-left animate-fade-in flex flex-col items-center gap-4"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img src={c.img} alt={c.title} className="w-40 h-40 object-contain group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 bg-gradient-to-br ${c.color}`}>
                  <c.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-heading font-bold">{c.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground text-center">{c.desc}</p>
            </button>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
