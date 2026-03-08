import { Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary p-1">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-primary">{t('appName')}</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">{t('footerDesc')}</p>
        <p className="text-xs text-muted-foreground">{t('allRightsReserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;
