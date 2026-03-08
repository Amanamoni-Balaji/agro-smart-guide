import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Sprout, Bug, Calendar, FlaskConical, AlertCircle, CheckCircle2, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { recommendCropsFromDataset } from "@/data/cropDataset";
import { useMemo } from "react";

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

  const recommendations = useMemo(() => {
    if (isDisease || !state) return [];
    return recommendCropsFromDataset({
      nitrogen: state.nitrogen ? parseFloat(state.nitrogen) : undefined,
      phosphorus: state.phosphorus ? parseFloat(state.phosphorus) : undefined,
      potassium: state.potassium ? parseFloat(state.potassium) : undefined,
      temperature: state.temperature ? parseFloat(state.temperature) : undefined,
      humidity: state.humidity ? parseFloat(state.humidity) : undefined,
      ph: state.ph ? parseFloat(state.ph) : undefined,
      rainfall: state.rainfall ? parseFloat(state.rainfall) : undefined,
    });
  }, [state, isDisease]);

  const topCrop = recommendations[0];

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
        ) : topCrop ? (
          <div className="space-y-6 animate-fade-in">
            {/* Top Recommendation */}
            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-heading font-extrabold">{topCrop.displayName}</h1>
                  <p className="text-sm text-muted-foreground">Confidence: {topCrop.confidence}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{topCrop.reason}</p>
            </div>

            {/* Other Recommendations */}
            {recommendations.length > 1 && (
              <div className="gradient-card rounded-xl border border-border shadow-card p-8">
                <h2 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                  <Medal className="h-5 w-5 text-[hsl(var(--agro-gold))]" /> Other Suitable Crops
                </h2>
                <div className="space-y-3">
                  {recommendations.slice(1).map((rec, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">{i + 2}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-sm">{rec.displayName}</p>
                          <span className="text-xs text-muted-foreground">{rec.confidence}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{rec.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Crop Schedule */}
            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <h2 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[hsl(var(--agro-gold))]" /> Crop Schedule — {topCrop.displayName}
              </h2>
              <div className="space-y-4">
                {topCrop.details.schedule.map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      {i < topCrop.details.schedule.length - 1 && <div className="w-0.5 h-10 bg-border" />}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{s.step} <span className="text-muted-foreground font-normal">— {s.time}</span></p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Crop Rotation */}
            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <h2 className="text-lg font-heading font-bold mb-2 flex items-center gap-2">
                <Sprout className="h-5 w-5 text-secondary" /> Next Crop Rotation
              </h2>
              <p className="text-sm text-muted-foreground">{topCrop.details.nextCrop}</p>
            </div>

            {/* Recommended Fertilizers */}
            <div className="gradient-card rounded-xl border border-border shadow-card p-8">
              <h2 className="text-lg font-heading font-bold mb-2 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-[hsl(var(--agro-earth))]" /> Recommended Fertilizers
              </h2>
              <ul className="space-y-1">
                {topCrop.details.fertilizers.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">• {f}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No recommendations found. Please go back and enter your crop parameters.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Results;
