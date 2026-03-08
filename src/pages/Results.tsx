import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Sprout, Bug, Calendar, FlaskConical, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock results for demonstration
const mockCropResult = {
  crop: "Rice (Paddy)",
  confidence: "92%",
  reason: "Based on your black soil, kharif season, and high humidity conditions, Rice is the ideal crop.",
  nextCrop: "Wheat or Mustard (Rabi season)",
  schedule: [
    { step: "Land Preparation", time: "Week 1-2", desc: "Plough and level the field, add organic manure." },
    { step: "Sowing / Transplanting", time: "Week 3", desc: "Sow seeds in nursery or transplant seedlings." },
    { step: "First Fertilizer", time: "Week 4", desc: "Apply Urea at 40 kg/acre." },
    { step: "Weeding", time: "Week 5-6", desc: "Remove weeds manually or apply herbicide." },
    { step: "Irrigation", time: "Week 6-12", desc: "Maintain 2-3 cm standing water." },
    { step: "Harvest", time: "Week 16-18", desc: "Harvest when grains turn golden yellow." },
  ],
  fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)"],
};

const mockDiseaseResult = {
  disease: "Bacterial Leaf Blight",
  stage: "Moderate (Stage 2 of 4)",
  infection: "35% of leaf area affected",
  prevention: [
    "Remove and destroy infected leaves immediately.",
    "Apply copper-based bactericide (Copper oxychloride 50% WP at 2.5g/L).",
    "Avoid excess nitrogen fertilizer.",
    "Ensure proper drainage to reduce humidity.",
    "Use resistant varieties for next planting cycle.",
  ],
  fertilizer: "Reduce Urea; increase Potash (MOP) to strengthen plant immunity.",
};

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any;
  const isDisease = state?.mode === "disease";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-2xl">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>

        {isDisease ? (
          <div className="space-y-6 animate-fade-in">
            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-destructive/10 p-3">
                  <Bug className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h1 className="text-2xl font-heading font-extrabold">{mockDiseaseResult.disease}</h1>
                  <p className="text-sm text-muted-foreground">{mockDiseaseResult.stage}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm rounded-lg bg-destructive/5 p-3 border border-destructive/20 mb-4">
                <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
                <span>{mockDiseaseResult.infection}</span>
              </div>
            </div>

            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <h2 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Prevention & Treatment
              </h2>
              <ol className="space-y-3">
                {mockDiseaseResult.prevention.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <h2 className="text-lg font-heading font-bold mb-2 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-secondary" /> Fertilizer Suggestion
              </h2>
              <p className="text-sm text-muted-foreground">{mockDiseaseResult.fertilizer}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-heading font-extrabold">{mockCropResult.crop}</h1>
                  <p className="text-sm text-muted-foreground">Confidence: {mockCropResult.confidence}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{mockCropResult.reason}</p>
            </div>

            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <h2 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-agro-gold" /> Crop Schedule (Sow to Harvest)
              </h2>
              <div className="space-y-4">
                {mockCropResult.schedule.map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      {i < mockCropResult.schedule.length - 1 && <div className="w-0.5 h-10 bg-border" />}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{s.step} <span className="text-muted-foreground font-normal">— {s.time}</span></p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <h2 className="text-lg font-heading font-bold mb-2 flex items-center gap-2">
                <Sprout className="h-5 w-5 text-secondary" /> Next Crop Rotation
              </h2>
              <p className="text-sm text-muted-foreground">{mockCropResult.nextCrop}</p>
            </div>

            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <h2 className="text-lg font-heading font-bold mb-2 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-agro-earth" /> Recommended Fertilizers
              </h2>
              <ul className="space-y-1">
                {mockCropResult.fertilizers.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">• {f}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Results;
