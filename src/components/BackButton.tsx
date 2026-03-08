import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
      <ArrowLeft className="h-4 w-4" /> {t('back')}
    </Button>
  );
};

export default BackButton;
