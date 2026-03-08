import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Phone, Mail, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";
import IndiaMap from "@/components/IndiaMap";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
];

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mapPosition, setMapPosition] = useState<[number, number] | null>(null);

  // Login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup form
  const [signupName, setSignupName] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupState, setSignupState] = useState("");
  const [signupDistrict, setSignupDistrict] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(loginEmail, loginPassword);
    setLoading(false);
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Welcome back!" });
      navigate("/dashboard");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupEmail || !signupPassword || !signupName) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await signUp(signupEmail, signupPassword, {
      full_name: signupName,
      phone: signupPhone,
      state: signupState,
      district: signupDistrict,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Signup failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Account created!", description: "Please check your email to verify." });
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-muted">
      {/* Map Section */}
      <div className="lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
        <h2 className="text-xl font-heading font-bold text-primary mb-3 text-center">{t('mapTitle')}</h2>
        <p className="text-sm text-muted-foreground text-center mb-4">{t('selectLocation')}</p>
        <IndiaMap
          selectedPosition={mapPosition}
          onPositionSelect={(lat, lng) => setMapPosition([lat, lng])}
          height="400px"
        />
        {mapPosition && (
          <p className="text-xs text-muted-foreground text-center mt-2">
            📍 Lat: {mapPosition[0].toFixed(4)}, Lng: {mapPosition[1].toFixed(4)}
          </p>
        )}
      </div>

      {/* Login/Signup Form */}
      <div className="lg:w-1/2 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md gradient-card rounded-xl shadow-agro border border-border p-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="rounded-full bg-primary p-2">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-heading font-extrabold text-primary">{t('appName')}</span>
          </div>

          <Tabs defaultValue="login" onValueChange={(v) => setIsLogin(v === "login")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">{t('login')}</TabsTrigger>
              <TabsTrigger value="signup">{t('signup')}</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label>{t('emailOrPhone')}</Label>
                  <div className="relative">
                    <Input placeholder={t('emailOrPhone')} className="pl-10" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <Label>{t('password')}</Label>
                  <div className="relative">
                    <Input type={showPass ? "text" : "password"} placeholder={t('password')} className="pr-10" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                    <button type="button" className="absolute right-3 top-2.5" onClick={() => setShowPass(!showPass)}>
                      {showPass ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full gradient-hero border-0" disabled={loading}>
                  {loading ? "..." : t('login')}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-3">
                <div>
                  <Label>{t('fullName')} *</Label>
                  <Input placeholder={t('fullName')} value={signupName} onChange={(e) => setSignupName(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>{t('phone')}</Label>
                    <div className="relative">
                      <Input placeholder="+91" className="pl-10" value={signupPhone} onChange={(e) => setSignupPhone(e.target.value)} />
                      <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <Label>{t('email')} *</Label>
                    <Input placeholder={t('email')} type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>{t('state')}</Label>
                    <Select onValueChange={setSignupState}>
                      <SelectTrigger><SelectValue placeholder={t('selectState')} /></SelectTrigger>
                      <SelectContent>
                        {indianStates.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>{t('district')}</Label>
                    <Input placeholder={t('yourDistrict')} value={signupDistrict} onChange={(e) => setSignupDistrict(e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label>{t('createPassword')} *</Label>
                  <div className="relative">
                    <Input type={showPass ? "text" : "password"} placeholder={t('createPassword')} className="pr-10" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
                    <button type="button" className="absolute right-3 top-2.5" onClick={() => setShowPass(!showPass)}>
                      {showPass ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full gradient-hero border-0" disabled={loading}>
                  {loading ? "..." : t('createAccount')}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
