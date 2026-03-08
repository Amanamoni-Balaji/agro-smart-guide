import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Phone, Mail, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
];

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4 py-12">
      <div className="w-full max-w-md gradient-card rounded-xl shadow-agro border border-border p-8 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="rounded-full bg-primary p-2">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-heading font-extrabold text-primary">Agro_Guardian</span>
        </div>

        <Tabs defaultValue="login" onValueChange={(v) => setIsLogin(v === "login")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Email or Phone</Label>
                <div className="relative">
                  <Input placeholder="Enter email or phone" className="pl-10" />
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <Label>Password</Label>
                <div className="relative">
                  <Input type={showPass ? "text" : "password"} placeholder="Enter password" className="pr-10" />
                  <button type="button" className="absolute right-3 top-2.5" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full gradient-hero border-0">Login</Button>
              <Button type="button" variant="outline" className="w-full gap-2" onClick={handleSubmit}>
                <Mail className="h-4 w-4" /> Continue with Gmail
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Label>Full Name</Label>
                <Input placeholder="Enter your full name" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Phone</Label>
                  <div className="relative">
                    <Input placeholder="+91" className="pl-10" />
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <Label>Email (optional)</Label>
                  <Input placeholder="Email" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>State</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      {indianStates.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>District</Label>
                  <Input placeholder="Your district" />
                </div>
              </div>
              <div>
                <Label>Create Password</Label>
                <div className="relative">
                  <Input type={showPass ? "text" : "password"} placeholder="Create a strong password" className="pr-10" />
                  <button type="button" className="absolute right-3 top-2.5" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full gradient-hero border-0">Create Account</Button>
              <Button type="button" variant="outline" className="w-full gap-2" onClick={handleSubmit}>
                <Mail className="h-4 w-4" /> Sign up with Gmail
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
