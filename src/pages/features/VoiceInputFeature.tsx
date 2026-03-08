import { Mic } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const VoiceInputFeature = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-2xl">
        <BackButton />
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 animate-fade-in text-center space-y-4">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] inline-flex">
            <Mic className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Voice-based Input</h1>
          <p className="text-muted-foreground">Speak to the app in your regional language. Our AI chatbot understands and responds with crop advice.</p>
          <div className="rounded-lg bg-muted p-6 text-sm text-muted-foreground">
            🚧 This feature is coming soon. We're building a voice-enabled AI chatbot for farmers.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VoiceInputFeature;
