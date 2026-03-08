import { ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const ImageQualityFeature = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-2xl">
        <BackButton />
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 animate-fade-in text-center space-y-4">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--agro-sky))] to-[hsl(var(--secondary))] inline-flex">
            <ImageIcon className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Image Quality Analyzer</h1>
          <p className="text-muted-foreground">Automatically checks if your uploaded crop image is blurry and asks you to re-upload for better accuracy.</p>
          <div className="rounded-lg bg-muted p-6 text-sm text-muted-foreground">
            🚧 This feature is coming soon. We're integrating advanced image quality detection.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImageQualityFeature;
