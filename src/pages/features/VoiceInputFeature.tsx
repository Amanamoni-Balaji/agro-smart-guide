import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

interface Message {
  role: "user" | "bot";
  text: string;
}

const botResponses: Record<string, string> = {
  default: "I can help you with crop recommendations, disease identification, and farming advice. Try asking about a specific crop or farming issue!",
  rice: "🌾 Rice grows best in warm, humid climates with temperatures between 20-35°C. For your region, consider varieties like IR-64 or Samba Masuri. Sowing season: June-July (Kharif). Ensure standing water of 2-3 cm during growth.",
  wheat: "🌾 Wheat thrives in cool weather (10-25°C). Best sown in November. Recommended varieties: HD-2967, PBW-550. Needs 4-5 irrigations. Apply Urea + DAP at sowing time.",
  cotton: "🌿 Cotton needs warm weather (25-35°C) and black soil. Sow in June. Use BT Cotton varieties for pest resistance. Avoid waterlogging. Apply potash during flowering.",
  disease: "🔬 For disease diagnosis, please go to our Disease Prediction page and upload a photo of the affected crop. Our AI will identify the disease, its stage, and suggest treatments.",
  fertilizer: "🧪 Fertilizer needs depend on your crop and soil type. Generally: Urea for nitrogen, DAP for phosphorus, MOP for potassium. Get detailed suggestions from our Fertilizer Feature page.",
  weather: "🌤 Weather-based recommendations are available on our Weather Feature page. Enter your location to get real-time weather data and crop suggestions.",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("rice") || lower.includes("paddy")) return botResponses.rice;
  if (lower.includes("wheat") || lower.includes("gahu")) return botResponses.wheat;
  if (lower.includes("cotton") || lower.includes("kapas")) return botResponses.cotton;
  if (lower.includes("disease") || lower.includes("roga") || lower.includes("bimari")) return botResponses.disease;
  if (lower.includes("fertilizer") || lower.includes("khad")) return botResponses.fertilizer;
  if (lower.includes("weather") || lower.includes("mausam")) return botResponses.weather;
  return botResponses.default;
};

const VoiceInputFeature = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "🙏 Namaste! I'm your farming assistant. You can type or use the mic to speak. Ask me about crops, diseases, fertilizers, or weather!" },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = { role: "bot", text: getResponse(text) };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const toggleListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMessages((prev) => [...prev, { role: "bot", text: "⚠️ Speech recognition is not supported in this browser. Please try Chrome or Edge." }]);
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      sendMessage(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-2xl flex flex-col">
        <BackButton />
        <div className="text-center mb-6">
          <div className="rounded-full p-4 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] inline-flex mb-3">
            <Mic className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold">Voice-Based Farming Assistant</h1>
          <p className="text-muted-foreground text-sm mt-1">Speak or type to get crop advice in your language</p>
        </div>

        <Card className="flex-1 flex flex-col min-h-[400px]">
          <CardContent className="flex-1 flex flex-col pt-4 pb-0">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-1" style={{ maxHeight: "400px" }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "bot" && (
                    <div className="rounded-full p-1.5 bg-primary/10 h-fit">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm ${
                    msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="rounded-full p-1.5 bg-muted h-fit">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="flex gap-2 pb-4 pt-2 border-t border-border">
              <Button
                variant={isListening ? "destructive" : "outline"}
                size="icon"
                onClick={toggleListening}
                className={isListening ? "animate-pulse" : ""}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Input
                placeholder={isListening ? "Listening..." : "Type your question..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                className="flex-1"
              />
              <Button onClick={() => sendMessage(input)} disabled={!input.trim()} className="gradient-hero border-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default VoiceInputFeature;
