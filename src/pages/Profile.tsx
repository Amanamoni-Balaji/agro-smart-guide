import { useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn onLogout={() => navigate("/")} />
      <main className="flex-1 container py-12 max-w-md">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-heading font-extrabold mb-8 flex items-center gap-2">
          <User className="h-6 w-6 text-primary" /> My Profile
        </h1>
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 space-y-4 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
          </div>
          <div>
            <Label>Full Name</Label>
            <Input defaultValue="Ramesh Kumar" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input defaultValue="+91 98765 43210" />
          </div>
          <div>
            <Label>Email</Label>
            <Input defaultValue="ramesh@gmail.com" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>State</Label>
              <Input defaultValue="Telangana" />
            </div>
            <div>
              <Label>District</Label>
              <Input defaultValue="Warangal" />
            </div>
          </div>
          <Button className="w-full gradient-hero border-0">Update Profile</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
