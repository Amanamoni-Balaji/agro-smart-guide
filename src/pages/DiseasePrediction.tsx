import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Upload, ImageIcon, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const DiseasePrediction = () => {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [quality, setQuality] = useState<"good" | "blurry" | null>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10 MB");
      return;
    }
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      alert("Supported formats: JPG, PNG, WebP");
      return;
    }
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
      // Simple quality check based on file size (placeholder for real check)
      setQuality(file.size > 50000 ? "good" : "blurry");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!preview) return;
    navigate("/results", { state: { mode: "disease", image: preview } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-lg">
        <BackButton />
        <h1 className="text-2xl font-heading font-extrabold text-center mb-2">Crop Disease Prediction</h1>
        <p className="text-center text-muted-foreground mb-8">Upload or capture a photo of the affected crop</p>

        <div className="gradient-card rounded-xl border border-border shadow-card p-8 animate-fade-in space-y-6">
          {/* Upload Area */}
          <div
            onClick={() => fileRef.current?.click()}
            className="border-2 border-dashed border-primary/30 rounded-lg p-10 flex flex-col items-center gap-3 cursor-pointer hover:border-primary/60 transition-colors"
          >
            {preview ? (
              <img src={preview} alt="Crop preview" className="max-h-48 rounded-lg object-contain" />
            ) : (
              <>
                <ImageIcon className="h-12 w-12 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
              </>
            )}
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <input
            ref={cameraRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2" onClick={() => fileRef.current?.click()}>
              <Upload className="h-4 w-4" /> Upload Image
            </Button>
            <Button variant="outline" className="flex-1 gap-2" onClick={() => cameraRef.current?.click()}>
              <Camera className="h-4 w-4" /> Use Camera
            </Button>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>📐 Supported formats: JPG, PNG, WebP</p>
            <p>📦 Max file size: 10 MB</p>
            {fileName && <p>📄 {fileName}</p>}
          </div>

          {quality === "blurry" && (
            <div className="flex items-center gap-2 text-sm rounded-lg bg-accent/30 p-3 border border-accent">
              <AlertTriangle className="h-5 w-5 text-agro-gold shrink-0" />
              <span>Image may be blurry. For better accuracy, please re-upload a clearer photo.</span>
            </div>
          )}

          <Button
            onClick={handleSubmit}
            disabled={!preview}
            className="w-full gradient-hero border-0 text-lg py-5"
          >
            Predict Disease 🔍
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiseasePrediction;
