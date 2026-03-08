import { useState } from "react";
import { CalendarDays, Loader2, Droplets, Bug, FlaskConical, Scissors } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const scheduleData = [
  { week: "Week 1-2", title: "Land Preparation", icon: "🌍", desc: "Plough the field 2-3 times. Add organic manure (FYM) at 10 tonnes/hectare.", type: "prep" },
  { week: "Week 2-3", title: "Sowing / Transplanting", icon: "🌱", desc: "Sow seeds at recommended spacing. Ensure proper irrigation after sowing.", type: "sow" },
  { week: "Week 3-4", title: "First Irrigation", icon: "💧", desc: "Provide adequate water. Maintain 2-3 cm standing water for paddy crops.", type: "water" },
  { week: "Week 4-5", title: "First Fertilizer Application", icon: "🧪", desc: "Apply Urea (46 kg/ha) + DAP (50 kg/ha). Spread evenly in moist soil.", type: "fertilizer" },
  { week: "Week 5-7", title: "Weeding & Pest Watch", icon: "🐛", desc: "Remove weeds manually or use herbicides. Monitor for early pest signs.", type: "pest" },
  { week: "Week 7-9", title: "Second Fertilizer Dose", icon: "🧪", desc: "Apply top-dressing of Urea (30 kg/ha). Ensure timely irrigation.", type: "fertilizer" },
  { week: "Week 9-12", title: "Flowering & Pest Control", icon: "🌸", desc: "Monitor for stem borer, leaf folder. Apply Neem-based pesticide if needed.", type: "pest" },
  { week: "Week 12-14", title: "Grain Formation", icon: "🌾", desc: "Reduce irrigation frequency. Watch for grain discoloration or fungal attack.", type: "water" },
  { week: "Week 14-16", title: "Pre-Harvest", icon: "✂️", desc: "Stop irrigation 10 days before harvest. Check grain moisture (20-22%).", type: "prep" },
  { week: "Week 16-18", title: "Harvesting", icon: "🎉", desc: "Harvest when 80% grains are golden. Dry harvested crop to 14% moisture.", type: "harvest" },
];

const typeColors: Record<string, string> = {
  prep: "border-l-[hsl(var(--agro-earth))]",
  sow: "border-l-[hsl(var(--primary))]",
  water: "border-l-[hsl(var(--agro-sky))]",
  fertilizer: "border-l-[hsl(var(--agro-gold))]",
  pest: "border-l-[hsl(var(--destructive))]",
  harvest: "border-l-[hsl(var(--secondary))]",
};

const CropScheduleFeature = () => {
  const [cropName, setCropName] = useState("");
  const [sowDate, setSowDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState<typeof scheduleData | null>(null);

  const handleGenerate = () => {
    if (!cropName.trim() || !sowDate) return;
    setLoading(true);
    setTimeout(() => {
      setSchedule(scheduleData);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-3xl">
        <BackButton />
        <div className="text-center mb-8">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--agro-gold))] to-[hsl(var(--secondary))] inline-flex mb-4">
            <CalendarDays className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Crop Growth Schedule</h1>
          <p className="text-muted-foreground mt-1">Enter sowing date & crop to get a full schedule from sowing to harvest</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Crop Name</label>
              <Input placeholder="e.g., Rice, Wheat, Maize..." value={cropName} onChange={(e) => setCropName(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Sowing Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !sowDate && "text-muted-foreground")}>
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {sowDate ? format(sowDate, "PPP") : "Pick sowing date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={sowDate} onSelect={setSowDate} initialFocus className={cn("p-3 pointer-events-auto")} />
                </PopoverContent>
              </Popover>
            </div>
            <Button onClick={handleGenerate} disabled={loading || !cropName.trim() || !sowDate} className="w-full gradient-hero border-0">
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <CalendarDays className="h-4 w-4 mr-2" />}
              Generate Schedule
            </Button>
          </CardContent>
        </Card>

        {schedule && (
          <div className="space-y-3 animate-fade-in">
            <h2 className="font-heading font-bold text-lg mb-4">
              📋 Complete Schedule for <span className="text-primary">{cropName}</span>
              {sowDate && <span className="text-sm font-normal text-muted-foreground ml-2">(Sown: {format(sowDate, "dd MMM yyyy")})</span>}
            </h2>
            {schedule.map((step, i) => (
              <Card key={i} className={`border-l-4 ${typeColors[step.type] || ""}`}>
                <CardContent className="py-4 flex items-start gap-4">
                  <span className="text-2xl">{step.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{step.title}</p>
                      <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">{step.week}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CropScheduleFeature;
