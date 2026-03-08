import { useState } from "react";
import { FlaskConical, Loader2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const soilTypes = ["Alluvial", "Black (Regur)", "Red", "Laterite", "Sandy", "Clay", "Loamy"];

const fertilizerResults = [
  {
    name: "Urea (46-0-0)",
    dosage: "120 kg/hectare",
    timing: "Apply in 2 splits — 50% at sowing, 50% after 30 days",
    purpose: "Primary nitrogen source for vegetative growth and leaf development.",
    type: "Nitrogen",
  },
  {
    name: "DAP (18-46-0)",
    dosage: "60 kg/hectare",
    timing: "Apply at the time of sowing as basal dose",
    purpose: "Provides phosphorus for root development and early plant establishment.",
    type: "Phosphorus",
  },
  {
    name: "MOP / Potash (0-0-60)",
    dosage: "40 kg/hectare",
    timing: "Apply at sowing. Second dose during flowering stage.",
    purpose: "Strengthens stems, improves disease resistance and grain quality.",
    type: "Potassium",
  },
  {
    name: "Zinc Sulphate",
    dosage: "25 kg/hectare",
    timing: "Apply once during land preparation",
    purpose: "Prevents zinc deficiency — common in paddy and wheat.",
    type: "Micronutrient",
  },
];

const FertilizerFeature = () => {
  const [crop, setCrop] = useState("");
  const [soilType, setSoilType] = useState("");
  const [area, setArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof fertilizerResults | null>(null);

  const handleSubmit = () => {
    if (!crop.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResults(fertilizerResults);
      setLoading(false);
    }, 1500);
  };

  const typeColor: Record<string, string> = {
    Nitrogen: "bg-primary/10 text-primary",
    Phosphorus: "bg-[hsl(var(--agro-gold))]/10 text-[hsl(var(--agro-earth))]",
    Potassium: "bg-destructive/10 text-destructive",
    Micronutrient: "bg-[hsl(var(--agro-sky))]/10 text-[hsl(var(--agro-sky))]",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-3xl">
        <BackButton />
        <div className="text-center mb-8">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--agro-earth))] to-[hsl(var(--primary))] inline-flex mb-4">
            <FlaskConical className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Fertilizer Suggestion for Crop Yield</h1>
          <p className="text-muted-foreground mt-1">Get tailored fertilizer recommendations to maximize your yield</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Crop Name</label>
              <Input placeholder="e.g., Rice, Wheat, Cotton..." value={crop} onChange={(e) => setCrop(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Soil Type</label>
                <Select value={soilType} onValueChange={setSoilType}>
                  <SelectTrigger><SelectValue placeholder="Select soil" /></SelectTrigger>
                  <SelectContent>
                    {soilTypes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Farm Area (hectares)</label>
                <Input type="number" placeholder="e.g., 2.5" value={area} onChange={(e) => setArea(e.target.value)} />
              </div>
            </div>
            <Button onClick={handleSubmit} disabled={loading || !crop.trim()} className="w-full gradient-hero border-0">
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <FlaskConical className="h-4 w-4 mr-2" />}
              Get Fertilizer Suggestions
            </Button>
          </CardContent>
        </Card>

        {results && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-heading font-bold text-lg flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" /> Recommended Fertilizers for <span className="text-primary">{crop}</span>
            </h2>
            {results.map((f, i) => (
              <Card key={i}>
                <CardContent className="pt-5">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold text-lg">{f.name}</p>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${typeColor[f.type] || "bg-muted"}`}>{f.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{f.purpose}</p>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                    <div className="p-2 rounded bg-muted">
                      <p className="text-xs text-muted-foreground">Dosage</p>
                      <p className="font-medium">{f.dosage}</p>
                    </div>
                    <div className="p-2 rounded bg-muted">
                      <p className="text-xs text-muted-foreground">When to Apply</p>
                      <p className="font-medium">{f.timing}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FertilizerFeature;
