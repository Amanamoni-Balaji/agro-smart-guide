import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const soilTypes = ["Black Soil", "Red Soil", "Alluvial Soil", "Laterite Soil", "Sandy Soil", "Clay Soil", "Loamy Soil"];
const seasons = ["Kharif (Monsoon)", "Rabi (Winter)", "Zaid (Summer)"];

const SimpleMode = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ soil: "", budget: "", weather: "", season: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/results", { state: { mode: "simple", ...form } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-lg">
        <h1 className="text-2xl font-heading font-extrabold text-center mb-8">Simple Mode — Crop Recommendation</h1>
        <form onSubmit={handleSubmit} className="space-y-5 gradient-card rounded-xl border border-border shadow-card p-8 animate-fade-in">
          <div>
            <Label>Soil Type</Label>
            <Select onValueChange={(v) => setForm({ ...form, soil: v })}>
              <SelectTrigger><SelectValue placeholder="Select soil type" /></SelectTrigger>
              <SelectContent>
                {soilTypes.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Budget (₹)</Label>
            <Input type="number" placeholder="e.g. 50000" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
          </div>
          <div>
            <Label>Current Weather / Location</Label>
            <Input placeholder="e.g. Hot & Humid, Telangana" value={form.weather} onChange={(e) => setForm({ ...form, weather: e.target.value })} />
          </div>
          <div>
            <Label>Season</Label>
            <Select onValueChange={(v) => setForm({ ...form, season: v })}>
              <SelectTrigger><SelectValue placeholder="Select season" /></SelectTrigger>
              <SelectContent>
                {seasons.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full gradient-hero border-0 text-lg py-5">
            Get Recommendation 🌱
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SimpleMode;
