import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { getStates, getDistricts, getSeasons } from "@/data/cropDataset";

const SimpleMode = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ state: "", district: "", season: "" });
  const [states, setStates] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [seasons, setSeasons] = useState<string[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    Promise.all([getStates(), getSeasons()]).then(([s, se]) => {
      setStates(s);
      setSeasons(se);
      setLoadingData(false);
    });
  }, []);

  useEffect(() => {
    if (form.state) {
      getDistricts(form.state).then(setDistricts);
      setForm((f) => ({ ...f, district: "" }));
    }
  }, [form.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/results", { state: { mode: "simple", ...form } });
  };

  if (loadingData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary mb-3" />
            <p className="text-muted-foreground">Loading crop production data...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-lg">
        <BackButton />
        <h1 className="text-2xl font-heading font-extrabold text-center mb-8">Simple Mode — Crop Recommendation</h1>
        <form onSubmit={handleSubmit} className="space-y-5 gradient-card rounded-xl border border-border shadow-card p-8 animate-fade-in">
          <div>
            <Label>State</Label>
            <Select value={form.state} onValueChange={(v) => setForm({ ...form, state: v })}>
              <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
              <SelectContent>
                {states.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>District (Optional)</Label>
            <Select value={form.district} onValueChange={(v) => setForm({ ...form, district: v })} disabled={!form.state}>
              <SelectTrigger><SelectValue placeholder={form.state ? "Select district" : "Select state first"} /></SelectTrigger>
              <SelectContent>
                {districts.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Season (Optional)</Label>
            <Select value={form.season} onValueChange={(v) => setForm({ ...form, season: v })}>
              <SelectTrigger><SelectValue placeholder="Select season" /></SelectTrigger>
              <SelectContent>
                {seasons.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={!form.state} className="w-full gradient-hero border-0 text-lg py-5">
            Get Recommendation 🌱
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SimpleMode;
