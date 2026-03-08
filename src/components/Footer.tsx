import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-1">
          <Leaf className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-heading font-bold text-primary">Agro_Guardian</span>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        AI-powered crop recommendation &amp; disease prediction for Indian farmers
      </p>
      <p className="text-xs text-muted-foreground">© 2026 Agro_Guardian. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
