import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
      <main className="flex-1 container py-12 max-w-2xl">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" /> {t('back')}
        </Button>
        <h1 className="text-2xl font-heading font-extrabold mb-2 flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" /> {t('settings')}
        </h1>
        <p className="text-sm text-muted-foreground mb-6">22 languages supported including all scheduled Indian languages</p>
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 space-y-6 animate-fade-in">
          <div>
            <Label className="text-base font-semibold">{t('appLanguage')}</Label>
            <p className="text-sm text-muted-foreground mb-4">{t('chooseLanguage')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(Object.entries(languageNames) as [Language, string][]).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`relative rounded-lg border p-3 text-sm text-left transition-all ${
                    language === code
                      ? 'border-primary bg-primary/10 ring-2 ring-primary/30 font-semibold'
                      : 'border-border hover:border-primary/40 hover:bg-muted'
                  }`}
                >
                  {name}
                  {language === code && (
                    <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <Button className="w-full gradient-hero border-0" onClick={handleSave}>{t('saveSettings')}</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
