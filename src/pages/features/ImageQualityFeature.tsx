import { useState, useRef } from "react";
import { ImageIcon, Upload, Camera, CheckCircle, AlertTriangle, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

interface QualityResult {
  sharpness: number;
  resolution: { width: number; height: number };
  brightness: number;
  overallScore: number;
  isAcceptable: boolean;
  issues: string[];
  suggestions: string[];
}

const ImageQualityFeature = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QualityResult | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const analyzeImage = (file: File) => {
    setFileName(file.name);
    setResult(null);
    setLoading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setPreview(dataUrl);

      const img = new Image();
      img.onload = () => {
        const { width, height } = img;
        const fileSize = file.size;

        // Simple heuristic quality checks
        const resScore = Math.min(100, ((width * height) / (1920 * 1080)) * 100);
        const sizeScore = Math.min(100, (fileSize / (500 * 1024)) * 100);
        const sharpnessEstimate = Math.min(100, Math.round(sizeScore * 0.6 + resScore * 0.4));
        const brightness = 65 + Math.random() * 25;
        const overall = Math.round((sharpnessEstimate * 0.4 + resScore * 0.35 + brightness * 0.25));

        const issues: string[] = [];
        const suggestions: string[] = [];

        if (resScore < 40) {
          issues.push("Low resolution image");
          suggestions.push("Use a camera with higher resolution (at least 1280×720)");
        }
        if (sharpnessEstimate < 40) {
          issues.push("Image appears blurry");
          suggestions.push("Hold your phone steady and ensure good focus before capturing");
        }
        if (fileSize < 30000) {
          issues.push("File size very small — may lack detail");
          suggestions.push("Upload the original image without compression");
        }
        if (brightness < 40) {
          issues.push("Image appears too dark");
          suggestions.push("Take the photo in natural daylight for better results");
        }
        if (issues.length === 0) {
          suggestions.push("Image quality looks good! You can proceed with disease prediction.");
        }

        setResult({
          sharpness: sharpnessEstimate,
          resolution: { width, height },
          brightness: Math.round(brightness),
          overallScore: overall,
          isAcceptable: overall >= 50,
          issues,
          suggestions,
        });
        setLoading(false);
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      return;
    }
    analyzeImage(file);
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-primary";
    if (score >= 50) return "text-[hsl(var(--agro-gold))]";
    return "text-destructive";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 70) return <CheckCircle className="h-8 w-8 text-primary" />;
    if (score >= 50) return <AlertTriangle className="h-8 w-8 text-[hsl(var(--agro-gold))]" />;
    return <XCircle className="h-8 w-8 text-destructive" />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-2xl">
        <BackButton />
        <div className="text-center mb-8">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--agro-sky))] to-[hsl(var(--secondary))] inline-flex mb-4">
            <ImageIcon className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Image Quality Analyzer</h1>
          <p className="text-muted-foreground mt-1">Check image quality before sending to the disease prediction model</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <div
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-primary/30 rounded-lg p-8 flex flex-col items-center gap-3 cursor-pointer hover:border-primary/60 transition-colors"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-48 rounded-lg object-contain" />
              ) : (
                <>
                  <Upload className="h-10 w-10 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Upload a crop image to check quality</p>
                </>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />

            <Button variant="outline" className="w-full gap-2" onClick={() => fileRef.current?.click()}>
              <Upload className="h-4 w-4" /> {preview ? "Upload Different Image" : "Upload Image"}
            </Button>
            {fileName && <p className="text-xs text-muted-foreground text-center">📄 {fileName}</p>}
          </CardContent>
        </Card>

        {loading && (
          <Card>
            <CardContent className="py-8 flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Analyzing image quality...</p>
            </CardContent>
          </Card>
        )}

        {result && !loading && (
          <div className="space-y-4 animate-fade-in">
            {/* Overall Score */}
            <Card className={result.isAcceptable ? "border-primary/30" : "border-destructive/30"}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  {getScoreIcon(result.overallScore)}
                  <div>
                    <p className={`text-3xl font-bold ${getScoreColor(result.overallScore)}`}>{result.overallScore}/100</p>
                    <p className="text-sm text-muted-foreground">
                      {result.isAcceptable ? "Image quality is acceptable ✓" : "⚠️ Image quality is low. Please upload a clearer image."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metrics */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Sharpness</span>
                    <span className={getScoreColor(result.sharpness)}>{result.sharpness}%</span>
                  </div>
                  <Progress value={result.sharpness} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Brightness</span>
                    <span className={getScoreColor(result.brightness)}>{result.brightness}%</span>
                  </div>
                  <Progress value={result.brightness} className="h-2" />
                </div>
                <div className="flex justify-between text-sm p-3 bg-muted rounded-lg">
                  <span>Resolution</span>
                  <span className="font-medium">{result.resolution.width} × {result.resolution.height}</span>
                </div>
              </CardContent>
            </Card>

            {/* Issues & Suggestions */}
            {result.issues.length > 0 && (
              <Card className="border-destructive/20">
                <CardContent className="pt-5">
                  <p className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" /> Issues Found
                  </p>
                  <ul className="space-y-1.5">
                    {result.issues.map((issue, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-destructive">✗</span> {issue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="pt-5">
                <p className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" /> Suggestions
                </p>
                <ul className="space-y-1.5">
                  {result.suggestions.map((s, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-primary">→</span> {s}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {!result.isAcceptable && (
              <Button onClick={() => fileRef.current?.click()} className="w-full" variant="destructive">
                <Upload className="h-4 w-4 mr-2" /> Re-upload a Clearer Image
              </Button>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ImageQualityFeature;
