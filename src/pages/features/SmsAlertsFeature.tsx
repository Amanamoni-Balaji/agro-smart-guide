import { useState } from "react";
import { MessageSquare, Bell, Cloud, Bug, FlaskConical, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const alertTypes = [
  { id: "weather", label: "Weather Warnings", desc: "Get alerts for storms, heavy rain, heatwaves, and frost", icon: Cloud },
  { id: "disease", label: "Disease Risk Alerts", desc: "Notifications when disease risk is high in your area", icon: Bug },
  { id: "fertilizer", label: "Fertilizer Reminders", desc: "Timely reminders for fertilizer application schedules", icon: FlaskConical },
];

const languages = ["English", "Hindi", "Telugu", "Tamil", "Kannada", "Marathi", "Bengali", "Gujarati", "Punjabi", "Malayalam", "Odia"];

const SmsAlertsFeature = () => {
  const [phone, setPhone] = useState("");
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);
  const [language, setLanguage] = useState("");
  const [registered, setRegistered] = useState(false);

  const toggleAlert = (id: string) => {
    setSelectedAlerts((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleRegister = () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    if (selectedAlerts.length === 0) {
      toast.error("Please select at least one alert type");
      return;
    }
    setRegistered(true);
    toast.success("SMS alerts registered successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-2xl">
        <BackButton />
        <div className="text-center mb-8">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--destructive))] inline-flex mb-4">
            <MessageSquare className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">SMS Alert System</h1>
          <p className="text-muted-foreground mt-1">Register to receive important farming alerts via SMS</p>
        </div>

        {!registered ? (
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Mobile Number</label>
                <div className="flex gap-2">
                  <span className="flex items-center px-3 bg-muted rounded-md text-sm font-medium">+91</span>
                  <Input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    maxLength={10}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Select Alert Types</label>
                <div className="space-y-3">
                  {alertTypes.map((alert) => (
                    <div
                      key={alert.id}
                      onClick={() => toggleAlert(alert.id)}
                      className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedAlerts.includes(alert.id) ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                      }`}
                    >
                      <Checkbox checked={selectedAlerts.includes(alert.id)} className="mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <alert.icon className="h-4 w-4 text-muted-foreground" />
                          <p className="font-medium text-sm">{alert.label}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{alert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Preferred SMS Language</label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger><SelectValue placeholder="Select language" /></SelectTrigger>
                  <SelectContent>
                    {languages.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleRegister} className="w-full gradient-hero border-0">
                <Bell className="h-4 w-4 mr-2" /> Register for SMS Alerts
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-primary/30 animate-fade-in">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="rounded-full p-4 bg-primary/10 inline-flex">
                <Check className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-xl font-heading font-bold">Alerts Registered Successfully!</h2>
              <p className="text-muted-foreground">You will receive SMS alerts on <strong>+91 {phone}</strong></p>
              <div className="flex flex-wrap justify-center gap-2">
                {selectedAlerts.map((a) => {
                  const alert = alertTypes.find((at) => at.id === a);
                  return (
                    <span key={a} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                      ✓ {alert?.label}
                    </span>
                  );
                })}
              </div>
              <Button variant="outline" onClick={() => setRegistered(false)} className="mt-4">
                Edit Preferences
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SmsAlertsFeature;
