import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const VoiceInputFeature = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "🙏 Namaste! I'm your AI farming assistant. You can type or use the mic to speak. Ask me about crops, diseases, fertilizers, weather, or any farming question!" },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Send conversation history for context
      const chatHistory = updatedMessages.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      }));

      const { data, error } = await supabase.functions.invoke("farming-chat", {
        body: { messages: chatHistory },
      });

      if (error) throw error;

      const botMsg: Message = { role: "assistant", text: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Sorry, I couldn't process that. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMessages((prev) => [...prev, { role: "assistant", text: "⚠️ Speech recognition is not supported in this browser. Please try Chrome or Edge." }]);
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

    recognition.onerror = (event: any) => {
      console.error("Speech error:", event.error);
      setIsListening(false);
      if (event.error === "not-allowed") {
        setMessages((prev) => [...prev, { role: "assistant", text: "⚠️ Microphone access denied. Please allow microphone permission in your browser settings." }]);
      }
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
          <p className="text-muted-foreground text-sm mt-1">Speak or type to get AI-powered crop advice</p>
        </div>

        <Card className="flex-1 flex flex-col min-h-[400px]">
          <CardContent className="flex-1 flex flex-col pt-4 pb-0">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-1" style={{ maxHeight: "400px" }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="rounded-full p-1.5 bg-primary/10 h-fit">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm whitespace-pre-wrap ${
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
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="rounded-full p-1.5 bg-primary/10 h-fit">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-2.5 text-sm">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
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
                disabled={isLoading}
              />
              <Button onClick={() => sendMessage(input)} disabled={!input.trim() || isLoading} className="gradient-hero border-0">
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
