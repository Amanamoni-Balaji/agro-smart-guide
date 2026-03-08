import { MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const SmsAlertsFeature = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-2xl">
        <BackButton />
        <div className="gradient-card rounded-xl border border-border shadow-card p-8 animate-fade-in text-center space-y-4">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--destructive))] inline-flex">
            <MessageSquare className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">SMS Alert System</h1>
          <p className="text-muted-foreground">Receive SMS alerts for weather warnings, disease risk notifications, and fertilizer reminders.</p>
          <div className="rounded-lg bg-muted p-6 text-sm text-muted-foreground">
            🚧 This feature is coming soon. We're integrating SMS gateways for real-time farmer alerts.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SmsAlertsFeature;
