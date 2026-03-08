import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { image } = await req.json();
    if (!image) {
      return new Response(JSON.stringify({ error: "Image is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    // Extract base64 data and mime type from data URL
    const match = image.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) throw new Error("Invalid image format");
    const mimeType = match[1];
    const base64Data = match[2];

    const systemPrompt = `You are an expert agricultural pathologist and entomologist. Analyze the provided crop/plant image and detect any diseases OR pest infestations.

You MUST respond using the "detect_disease" tool. Analyze carefully:
- Identify the crop/plant species
- Detect any visible disease symptoms (spots, discoloration, wilting, lesions, mold, rot, blight, rust, etc.)
- Detect any pest/insect infestations (worms, caterpillars, aphids, beetles, borers, mites, whiteflies, leaf miners, armyworms, bollworms, stem borers, fruit flies, thrips, etc.)
- Look for signs of pest damage: chewed leaves, holes in leaves/stems/fruits, webbing, frass/droppings, tunneling, curling, wilting from boring insects
- Determine disease/pest stage and severity of damage
- Provide actionable treatment and pest control recommendations (both chemical and organic/biological options)

IMPORTANT: A plant with visible worms, caterpillars, insects, or pest damage is NOT healthy. Report it as infected/infested with the appropriate pest name as the "diseaseName".

If the image does not show a plant/crop, indicate that. Only mark as healthy if there are truly NO signs of disease or pest damage.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: { url: `data:${mimeType};base64,${base64Data}` },
              },
              {
                type: "text",
                text: "Analyze this crop/plant image for diseases. Use the detect_disease tool to provide your structured analysis.",
              },
            ],
          },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "detect_disease",
              description: "Return structured crop disease detection results",
              parameters: {
                type: "object",
                properties: {
                  isPlant: { type: "boolean", description: "Whether the image shows a plant/crop" },
                  isHealthy: { type: "boolean", description: "Whether the plant appears healthy (no disease)" },
                  cropName: { type: "string", description: "Identified crop/plant name" },
                  diseaseName: { type: "string", description: "Detected disease name, or 'Healthy' if no disease" },
                  confidence: { type: "number", description: "Confidence percentage (0-100)" },
                  stage: { type: "string", description: "Disease stage description e.g. 'Early (Stage 1 of 4)'" },
                  infectionLevel: { type: "number", description: "Infection severity percentage (0-100)" },
                  symptoms: {
                    type: "array",
                    items: { type: "string" },
                    description: "List of observed symptoms",
                  },
                  prevention: {
                    type: "array",
                    items: { type: "string" },
                    description: "Prevention methods (3-5 items)",
                  },
                  fertilizers: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        reason: { type: "string" },
                      },
                      required: ["name", "reason"],
                    },
                    description: "Recommended fertilizers (2-3 items)",
                  },
                  treatments: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        dosage: { type: "string" },
                        method: { type: "string" },
                      },
                      required: ["name", "dosage", "method"],
                    },
                    description: "Treatment recommendations (2-3 items)",
                  },
                },
                required: ["isPlant", "isHealthy", "cropName", "diseaseName", "confidence", "stage", "infectionLevel", "symptoms", "prevention", "fertilizers", "treatments"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "detect_disease" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please add credits." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI error:", response.status, t);
      throw new Error("AI analysis failed");
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No analysis result returned");

    const result = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("detect-disease error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
