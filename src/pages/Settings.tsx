import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const languages = [
  "English", "हिन्दी (Hindi)", "తెలుగు (Telugu)", "தமிழ் (Tamil)", "ಕನ್ನಡ (Kannada)",
  "मराठी (Marathi)", "বাংলা (Bengali)", "ગુજરાતી (Gujarati)", "ਪੰਜਾਬੀ (Punjabi)",
  "മലയാളം (Malayalam)", "ଓଡ଼ିଆ (Odia)", "অসমীয়া (Assamese)",
];

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn onLogout={() => navigate("/")} />
      <main className="flex-1 container py-12 max-w-md">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-heading font-extrabold mb-8 flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" /> Settings
        </h1>
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 space-y-6 animate-fade-in">
          <div>
            <Label className="text-base font-semibold">App Language</Label>
            <p className="text-sm text-muted-foreground mb-3">Choose your preferred language for the app interface.</p>
            <Select defaultValue="English">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {languages.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full gradient-hero border-0">Save Settings</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
