import { useState } from "react";
import { RefreshCw, Loader2, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const soilTypes = ["Alluvial", "Black (Regur)", "Red", "Laterite", "Sandy", "Clay", "Loamy"];
const seasons = ["Kharif (June–Oct)", "Rabi (Nov–Mar)", "Zaid (Mar–Jun)"];

const rotationResults = [
  {
    crop: "Green Gram (Moong)",
    benefit: "Fixes nitrogen in soil, restoring fertility after cereal crops.",
    season: "Zaid (Summer)",
    soilRecovery: "High",
  },
  {
    crop: "Mustard",
    benefit: "Deep root system breaks compacted soil layers. Good oil crop rotation.",
    season: "Rabi (Winter)",
    soilRecovery: "Medium",
  },
  {
    crop: "Sorghum (Jowar)",
    benefit: "Drought-resistant, reduces pest carry-over from previous crop.",
    season: "Kharif (Monsoon)",
    soilRecovery: "Medium",
  },
];

const CropRotationFeature = () => {
  const [currentCrop, setCurrentCrop] = useState("");
  const [soilType, setSoilType] = useState("");
  const [season, setSeason] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof rotationResults | null>(null);

  const handleSubmit = () => {
    if (!currentCrop.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResults(rotationResults);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-3xl">
        <BackButton />
        <div className="text-center mb-8">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--agro-earth))] inline-flex mb-4">
            <RefreshCw className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Crop Rotation & Soil Recovery Planner</h1>
          <p className="text-muted-foreground mt-1">Get the next best crop to plant after harvesting</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Current/Last Harvested Crop</label>
              <Input placeholder="e.g., Rice, Wheat, Cotton..." value={currentCrop} onChange={(e) => setCurrentCrop(e.target.value)} />
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
                <label className="text-sm font-medium mb-1.5 block">Next Season</label>
                <Select value={season} onValueChange={setSeason}>
                  <SelectTrigger><SelectValue placeholder="Select season" /></SelectTrigger>
                  <SelectContent>
                    {seasons.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={handleSubmit} disabled={loading || !currentCrop.trim()} className="w-full gradient-hero border-0">
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <RefreshCw className="h-4 w-4 mr-2" />}
              Get Rotation Suggestions
            </Button>
          </CardContent>
        </Card>

        {results && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-heading font-bold text-lg flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" /> Suggested Next Crops
            </h2>
            {results.map((r, i) => (
              <Card key={i} className="hover:shadow-agro transition-shadow">
                <CardContent className="pt-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-primary/10 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">{r.crop}</p>
                      <p className="text-sm text-muted-foreground mt-1">{r.benefit}</p>
                      <div className="flex gap-4 mt-3 text-xs">
                        <span className="px-2 py-1 rounded bg-muted font-medium">🌤 {r.season}</span>
                        <span className="px-2 py-1 rounded bg-muted font-medium">🌱 Soil Recovery: {r.soilRecovery}</span>
                      </div>
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

export default CropRotationFeature;
