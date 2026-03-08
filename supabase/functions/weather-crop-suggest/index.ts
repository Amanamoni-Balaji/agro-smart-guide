import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { location } = await req.json();

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `You are a weather and agriculture expert for India. Given a location, provide realistic weather data and crop suggestions. Respond ONLY with valid JSON in this exact format:
{
  "temperature": <number>,
  "humidity": <number>,
  "windSpeed": <number>,
  "condition": "<string>",
  "rainfall": <number>,
  "forecast": [
    {"day": "Tomorrow", "temp": <number>, "condition": "<string>"},
    {"day": "Day 3", "temp": <number>, "condition": "<string>"},
    {"day": "Day 4", "temp": <number>, "condition": "<string>"}
  ],
  "suggestedCrops": [
    {"name": "<crop>", "reason": "<why this crop suits the weather>"},
    {"name": "<crop>", "reason": "<why this crop suits the weather>"},
    {"name": "<crop>", "reason": "<why this crop suits the weather>"}
  ]
}
Use realistic weather data appropriate for the given Indian location and current season (March). Suggest crops that are genuinely suitable for that region's climate and soil.`,
            },
            {
              role: "user",
              content: `Provide current weather data and crop suggestions for: ${location}, India`,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    let content = data.choices?.[0]?.message?.content || "";
    
    // Extract JSON from markdown code blocks if present
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      content = jsonMatch[1].trim();
    }
    
    const weatherData = JSON.parse(content);

    return new Response(JSON.stringify(weatherData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get weather data" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
