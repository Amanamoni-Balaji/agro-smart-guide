import { useState, useRef } from "react";
import { ShieldAlert, Upload, Camera, Loader2, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const mockResult = {
  diseaseName: "Bacterial Leaf Blight",
  crop: "Rice",
  stage: "Moderate (Stage 2 of 4)",
  infectionLevel: 42,
  confidence: 89,
  prevention: [
    "Drain excess water from the field immediately",
    "Apply Copper Oxychloride spray (3g/L water)",
    "Use resistant varieties like Swarna, IR-64 in next season",
    "Avoid excess nitrogen fertilizer application",
  ],
  fertilizers: [
    { name: "Potassium Chloride (MOP)", reason: "Strengthens plant cell walls and improves disease resistance" },
    { name: "Pseudomonas fluorescens", reason: "Bio-agent that suppresses bacterial pathogens in soil" },
  ],
  treatments: [
    { name: "Streptomycin Sulphate", dosage: "0.5 g/L + Copper Oxychloride 3g/L", method: "Foliar spray at 10-day intervals" },
    { name: "Neem Oil Spray", dosage: "5 ml/L water", method: "Spray on affected leaves during early morning" },
  ],
};

const DiseaseStageFeature = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<typeof mockResult | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
    setResult(null);
  };

  const handleAnalyze = () => {
    if (!preview) return;
    setLoading(true);
    setTimeout(() => {
      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  const getInfectionColor = (level: number) => {
    if (level < 25) return "text-primary";
    if (level < 50) return "text-[hsl(var(--agro-gold))]";
    if (level < 75) return "text-[hsl(var(--accent))]";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-3xl">
        <BackButton />
        <div className="text-center mb-8">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--destructive))] to-[hsl(var(--accent))] inline-flex mb-4">
            <ShieldAlert className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Disease Stage & Infection Analysis</h1>
          <p className="text-muted-foreground mt-1">Upload a crop image to detect disease name, stage, infection level & treatments</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <div
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-primary/30 rounded-lg p-8 flex flex-col items-center gap-3 cursor-pointer hover:border-primary/60 transition-colors"
            >
              {preview ? (
                <img src={preview} alt="Crop" className="max-h-48 rounded-lg object-contain" />
              ) : (
                <>
                  <Upload className="h-10 w-10 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload crop image</p>
                </>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
            <input ref={cameraRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 gap-2" onClick={() => fileRef.current?.click()}>
                <Upload className="h-4 w-4" /> Upload
              </Button>
              <Button variant="outline" className="flex-1 gap-2" onClick={() => cameraRef.current?.click()}>
                <Camera className="h-4 w-4" /> Camera
              </Button>
            </div>

            <Button onClick={handleAnalyze} disabled={!preview || loading} className="w-full gradient-hero border-0">
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <ShieldAlert className="h-4 w-4 mr-2" />}
              Analyze Disease
            </Button>
          </CardContent>
        </Card>

        {result && (
          <div className="space-y-5 animate-fade-in">
            {/* Disease Info */}
            <Card className="border-destructive/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" /> Disease Detected
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-muted">
                    <p className="text-xs text-muted-foreground">Disease Name</p>
                    <p className="font-bold text-destructive">{result.diseaseName}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted">
                    <p className="text-xs text-muted-foreground">Affected Crop</p>
                    <p className="font-bold">{result.crop}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted">
                    <p className="text-xs text-muted-foreground">Disease Stage</p>
                    <p className="font-bold">{result.stage}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted">
                    <p className="text-xs text-muted-foreground">AI Confidence</p>
                    <p className="font-bold text-primary">{result.confidence}%</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium">Infection Level</p>
                    <p className={`font-bold ${getInfectionColor(result.infectionLevel)}`}>{result.infectionLevel}%</p>
                  </div>
                  <Progress value={result.infectionLevel} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Prevention */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" /> Prevention Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.prevention.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Fertilizer Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🧪 Fertilizer Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {result.fertilizers.map((f, i) => (
                  <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="font-semibold text-sm">{f.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{f.reason}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Treatment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💊 Treatment Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {result.treatments.map((t, i) => (
                  <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                      <div><span className="text-muted-foreground">Dosage:</span> {t.dosage}</div>
                      <div><span className="text-muted-foreground">Method:</span> {t.method}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseStageFeature;
