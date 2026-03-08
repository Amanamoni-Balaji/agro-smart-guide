import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CropRecommendation from "./pages/CropRecommendation";
import SimpleMode from "./pages/SimpleMode";
import AdvancedMode from "./pages/AdvancedMode";
import DiseasePrediction from "./pages/DiseasePrediction";
import Results from "./pages/Results";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import AdditionalFeatures from "./pages/AdditionalFeatures";
import WeatherFeature from "./pages/features/WeatherFeature";
import VoiceInputFeature from "./pages/features/VoiceInputFeature";
import CropRotationFeature from "./pages/features/CropRotationFeature";
import SmsAlertsFeature from "./pages/features/SmsAlertsFeature";
import CropScheduleFeature from "./pages/features/CropScheduleFeature";
import FertilizerFeature from "./pages/features/FertilizerFeature";
import DiseaseStageFeature from "./pages/features/DiseaseStageFeature";
import ImageQualityFeature from "./pages/features/ImageQualityFeature";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/recommend" element={<CropRecommendation />} />
              <Route path="/recommend/simple" element={<SimpleMode />} />
              <Route path="/recommend/advanced" element={<AdvancedMode />} />
              <Route path="/disease" element={<DiseasePrediction />} />
              <Route path="/results" element={<Results />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/features" element={<AdditionalFeatures />} />
              <Route path="/features/weather" element={<WeatherFeature />} />
              <Route path="/features/voice-input" element={<VoiceInputFeature />} />
              <Route path="/features/crop-rotation" element={<CropRotationFeature />} />
              <Route path="/features/sms-alerts" element={<SmsAlertsFeature />} />
              <Route path="/features/crop-schedule" element={<CropScheduleFeature />} />
              <Route path="/features/fertilizer" element={<FertilizerFeature />} />
              <Route path="/features/disease-stage" element={<DiseaseStageFeature />} />
              <Route path="/features/image-quality" element={<ImageQualityFeature />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
