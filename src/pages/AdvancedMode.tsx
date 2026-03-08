import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fields = [
  { key: "nitrogen", label: "Nitrogen (N) %", placeholder: "e.g. 40" },
  { key: "phosphorus", label: "Phosphorus (P) %", placeholder: "e.g. 60" },
  { key: "potassium", label: "Potassium (K) %", placeholder: "e.g. 50" },
  { key: "temperature", label: "Temperature (°C)", placeholder: "e.g. 28" },
  { key: "humidity", label: "Humidity (%)", placeholder: "e.g. 80" },
  { key: "ph", label: "pH Value", placeholder: "e.g. 6.5" },
  { key: "rainfall", label: "Rainfall (mm)", placeholder: "e.g. 200" },
];

const AdvancedMode = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/results", { state: { mode: "advanced", ...form } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-lg">
        <h1 className="text-2xl font-heading font-extrabold text-center mb-8">Advanced Mode — Crop Recommendation</h1>
        <form onSubmit={handleSubmit} className="space-y-4 gradient-card rounded-xl border border-border shadow-card p-8 animate-fade-in">
          {fields.map((f) => (
            <div key={f.key}>
              <Label>{f.label}</Label>
              <Input
                type="number"
                step="any"
                placeholder={f.placeholder}
                value={form[f.key] || ""}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              />
            </div>
          ))}
          <Button type="submit" className="w-full gradient-hero border-0 text-lg py-5">
            Analyze & Recommend 🔬
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AdvancedMode;
