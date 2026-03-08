import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const { profile, updateProfile, user } = useAuth();
  const { t } = useLanguage();
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
  });

  useEffect(() => {
    if (profile) {
      setForm({
        full_name: profile.full_name || "",
        phone: profile.phone || "",
        email: profile.email || user?.email || "",
        state: profile.state || "",
        district: profile.district || "",
      });
    }
  }, [profile, user]);

  const handleSave = async () => {
    const { error } = await updateProfile(form as any);
    if (error) {
      toast({ title: "Error", description: String(error), variant: "destructive" });
    } else {
      toast({ title: t('updateProfile') });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-md">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" /> {t('back')}
        </Button>
        <h1 className="text-2xl font-heading font-extrabold mb-8 flex items-center gap-2">
          <User className="h-6 w-6 text-primary" /> {t('myProfile')}
        </h1>
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 space-y-4 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
          </div>
          <div>
            <Label>{t('fullName')}</Label>
            <Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
          </div>
          <div>
            <Label>{t('phoneNumber')}</Label>
            <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <Label>{t('email')}</Label>
            <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>{t('state')}</Label>
              <Input value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
            </div>
            <div>
              <Label>{t('district')}</Label>
              <Input value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} />
            </div>
          </div>
          <Button className="w-full gradient-hero border-0" onClick={handleSave}>{t('updateProfile')}</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
