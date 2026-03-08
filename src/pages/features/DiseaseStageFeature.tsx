import { useState, useRef } from "react";
import { ShieldAlert, Upload, Camera, Loader2, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type DiseaseResult = {
  isPlant: boolean;
  isHealthy: boolean;
  cropName: string;
  diseaseName: string;
  confidence: number;
  stage: string;
  infectionLevel: number;
  symptoms: string[];
  prevention: string[];
  fertilizers: { name: string; reason: string }[];
  treatments: { name: string; dosage: string; method: string }[];
};

const DiseaseStageFeature = () => {
  const { toast } = useToast();
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiseaseResult | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!preview) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("detect-disease", {
        body: { image: preview },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResult(data.result);
    } catch (err: any) {
      console.error("Disease analysis error:", err);
      toast({
        title: "Analysis Failed",
        description: err.message || "Could not analyze the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getInfectionColor = (level: number) => {
    if (level < 25) return "text-primary";
    if (level < 50) return "text-[hsl(var(--agro-gold))]";
    if (level < 75) return "text-accent";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-3xl">
        <BackButton />
        <div className="text-center mb-8">
          <div className="rounded-full p-4 bg-gradient-to-br from-destructive to-accent inline-flex mb-4">
            <ShieldAlert className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Disease Stage & Infection Analysis</h1>
          <p className="text-muted-foreground mt-1">Upload a crop image — AI will detect disease name, stage, infection level & treatments</p>
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
              {loading ? "Analyzing with AI..." : "Analyze Disease"}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <div className="space-y-5 animate-fade-in">
            {!result.isPlant ? (
              <Card className="border-accent/30">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                    <span>This image does not appear to show a plant. Please upload a crop/plant photo.</span>
                  </div>
                </CardContent>
              </Card>
            ) : result.isHealthy ? (
              <Card className="border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>This <strong>{result.cropName}</strong> plant appears healthy! No diseases detected. (Confidence: {result.confidence}%)</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
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
                        <p className="font-bold">{result.cropName}</p>
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

                    {/* Symptoms */}
                    {result.symptoms?.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">🔍 Observed Symptoms</p>
                        <ul className="space-y-1">
                          {result.symptoms.map((s, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-destructive">•</span> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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
              </>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseStageFeature;
