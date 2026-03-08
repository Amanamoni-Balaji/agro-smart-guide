import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Language } from "@/i18n/translations";

const Settings = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t, languageNames } = useLanguage();
  const { updateProfile } = useAuth();

  const handleSave = async () => {
    await updateProfile({ preferred_language: language } as any);
    toast({ title: t('saveSettings') });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-md">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" /> {t('back')}
        </Button>
        <h1 className="text-2xl font-heading font-extrabold mb-8 flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" /> {t('settings')}
        </h1>
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 space-y-6 animate-fade-in">
          <div>
            <Label className="text-base font-semibold">{t('appLanguage')}</Label>
            <p className="text-sm text-muted-foreground mb-3">{t('chooseLanguage')}</p>
            <Select value={language} onValueChange={(v) => setLanguage(v as Language)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {(Object.entries(languageNames) as [Language, string][]).map(([code, name]) => (
                  <SelectItem key={code} value={code}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full gradient-hero border-0" onClick={handleSave}>{t('saveSettings')}</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
