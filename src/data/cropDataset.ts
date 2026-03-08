// KNN-based crop recommendation using the real CSV dataset
// The CSV is loaded at runtime from public/data/crop_recommendation.csv

export interface CropRecord {
  N: number;
  P: number;
  K: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
  label: string;
}

// Display-friendly names
const cropDisplayNames: Record<string, string> = {
  rice: "Rice (Paddy)",
  maize: "Maize (Corn)",
  chickpea: "Chickpea (Bengal Gram)",
  kidneybeans: "Kidney Beans (Rajma)",
  pigeonpeas: "Pigeon Peas (Tur/Arhar)",
  mothbeans: "Moth Beans",
  mungbean: "Mung Bean (Moong)",
  blackgram: "Black Gram (Urad)",
  lentil: "Lentil (Masoor)",
  pomegranate: "Pomegranate",
  banana: "Banana",
  mango: "Mango",
  grapes: "Grapes",
  watermelon: "Watermelon",
  muskmelon: "Muskmelon",
  apple: "Apple",
  orange: "Orange",
  papaya: "Papaya",
  coconut: "Coconut",
  cotton: "Cotton",
  jute: "Jute",
  coffee: "Coffee",
};

const cropDetails: Record<string, { schedule: { step: string; time: string; desc: string }[]; fertilizers: string[]; nextCrop: string }> = {
  rice: {
    schedule: [
      { step: "Land Preparation", time: "Week 1-2", desc: "Plough and level the field, add organic manure." },
      { step: "Sowing / Transplanting", time: "Week 3", desc: "Sow seeds in nursery or transplant seedlings." },
      { step: "First Fertilizer", time: "Week 4", desc: "Apply Urea at 40 kg/acre." },
      { step: "Weeding", time: "Week 5-6", desc: "Remove weeds manually or apply herbicide." },
      { step: "Irrigation", time: "Week 6-12", desc: "Maintain 2-3 cm standing water." },
      { step: "Harvest", time: "Week 16-18", desc: "Harvest when grains turn golden yellow." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)"],
    nextCrop: "Wheat or Mustard (Rabi season)",
  },
  maize: {
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Plough field and incorporate compost." },
      { step: "Sowing", time: "Week 2", desc: "Sow seeds at 5 cm depth with 60 cm row spacing." },
      { step: "Thinning", time: "Week 3", desc: "Thin plants to 20 cm apart." },
      { step: "Fertilizer", time: "Week 4-5", desc: "Apply Urea as top dressing." },
      { step: "Earthing Up", time: "Week 6", desc: "Mound soil around base of plants." },
      { step: "Harvest", time: "Week 14-16", desc: "Harvest when husks turn brown and dry." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)"],
    nextCrop: "Chickpea or Wheat (Rabi season)",
  },
  chickpea: {
    schedule: [
      { step: "Seed Treatment", time: "Before sowing", desc: "Treat with Rhizobium & Trichoderma." },
      { step: "Sowing", time: "Week 1", desc: "Sow at 8-10 cm depth with 30 cm spacing." },
      { step: "Weeding", time: "Week 3-4", desc: "One hand weeding at 25-30 DAS." },
      { step: "Irrigation", time: "Week 6-7", desc: "One irrigation at flowering if no rain." },
      { step: "Pest Management", time: "Week 8-10", desc: "Monitor for pod borer (Helicoverpa)." },
      { step: "Harvest", time: "Week 14-16", desc: "Harvest when plants turn yellow-brown." },
    ],
    fertilizers: ["DAP (18-46-0)", "Rhizobium Culture", "Zinc Sulphate"],
    nextCrop: "Rice or Maize (Kharif season)",
  },
  kidneybeans: {
    schedule: [
      { step: "Seed Treatment", time: "Before sowing", desc: "Treat with Rhizobium inoculant." },
      { step: "Sowing", time: "Week 1", desc: "Sow at 5 cm depth, 45×10 cm spacing." },
      { step: "Weeding", time: "Week 3-4", desc: "Hand weeding at 20-25 DAS." },
      { step: "Staking", time: "Week 4-5", desc: "Provide support for climbing varieties." },
      { step: "Irrigation", time: "Week 5-8", desc: "Irrigate at flowering and pod formation." },
      { step: "Harvest", time: "Week 12-14", desc: "Harvest when pods are fully mature and dry." },
    ],
    fertilizers: ["DAP (18-46-0)", "SSP (0-16-0)", "Rhizobium Culture"],
    nextCrop: "Wheat or Barley (Rabi season)",
  },
  pigeonpeas: {
    schedule: [
      { step: "Seed Treatment", time: "Before sowing", desc: "Treat with Rhizobium culture." },
      { step: "Sowing", time: "Week 1-2", desc: "Sow at 4-5 cm depth, 60-75 cm spacing." },
      { step: "Weeding", time: "Week 4-6", desc: "Two weedings at 25 and 45 DAS." },
      { step: "Nipping", time: "Week 6-7", desc: "Nip growing tip to encourage branching." },
      { step: "Pest Control", time: "Week 12-16", desc: "Monitor for pod borer (Helicoverpa)." },
      { step: "Harvest", time: "Week 22-26", desc: "Harvest when 80% pods turn brown." },
    ],
    fertilizers: ["DAP (18-46-0)", "Rhizobium Culture", "SSP (0-16-0)"],
    nextCrop: "Wheat or Sorghum (Rabi season)",
  },
  mothbeans: {
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Light ploughing in sandy/arid soil." },
      { step: "Sowing", time: "Week 2", desc: "Broadcast or line sow at 2-3 cm depth." },
      { step: "Thinning", time: "Week 3", desc: "Thin plants to 10 cm apart." },
      { step: "Weeding", time: "Week 4", desc: "One weeding at 20-25 DAS." },
      { step: "Irrigation", time: "Rainfed", desc: "Mostly rainfed; tolerates drought well." },
      { step: "Harvest", time: "Week 10-12", desc: "Harvest when pods turn brown." },
    ],
    fertilizers: ["DAP (18-46-0)", "SSP (0-16-0)"],
    nextCrop: "Mustard or Wheat (Rabi season)",
  },
  mungbean: {
    schedule: [
      { step: "Seed Treatment", time: "Before sowing", desc: "Treat with Rhizobium inoculant." },
      { step: "Sowing", time: "Week 1", desc: "Sow at 3-4 cm depth, 30 cm row spacing." },
      { step: "Weeding", time: "Week 3-4", desc: "One weeding at 20-25 DAS." },
      { step: "Irrigation", time: "If needed", desc: "One irrigation during flowering if dry." },
      { step: "Pest Monitoring", time: "Week 5-7", desc: "Watch for yellow mosaic virus." },
      { step: "Harvest", time: "Week 8-10", desc: "Pick pods when 80% turn black/brown." },
    ],
    fertilizers: ["DAP (18-46-0)", "Rhizobium Culture"],
    nextCrop: "Wheat or Rice (Rabi/Kharif)",
  },
  blackgram: {
    schedule: [
      { step: "Seed Treatment", time: "Before sowing", desc: "Treat with Rhizobium inoculant." },
      { step: "Sowing", time: "Week 1", desc: "Sow at 3-4 cm depth, 30 cm row spacing." },
      { step: "Weeding", time: "Week 3-4", desc: "One to two weedings." },
      { step: "Irrigation", time: "If dry", desc: "Light irrigation at flowering." },
      { step: "Pest Control", time: "Week 5-7", desc: "Monitor for pod borer and YMV." },
      { step: "Harvest", time: "Week 10-12", desc: "Harvest when pods turn black." },
    ],
    fertilizers: ["DAP (18-46-0)", "Rhizobium Culture", "PSB Culture"],
    nextCrop: "Wheat or Mustard (Rabi season)",
  },
  lentil: {
    schedule: [
      { step: "Seed Treatment", time: "Before sowing", desc: "Treat with Rhizobium and fungicide." },
      { step: "Sowing", time: "Week 1", desc: "Sow at 3-4 cm depth, 25 cm row spacing." },
      { step: "Weeding", time: "Week 3-4", desc: "One manual weeding." },
      { step: "Irrigation", time: "Week 6-7", desc: "One irrigation at flowering if needed." },
      { step: "Pest Management", time: "Week 8-10", desc: "Monitor for aphids and wilt." },
      { step: "Harvest", time: "Week 14-16", desc: "Harvest when pods turn brown and dry." },
    ],
    fertilizers: ["DAP (18-46-0)", "Rhizobium Culture", "Zinc Sulphate"],
    nextCrop: "Rice or Maize (Kharif season)",
  },
  pomegranate: {
    schedule: [
      { step: "Pit Preparation", time: "Month 1", desc: "Dig pits 60×60×60 cm, fill with compost." },
      { step: "Planting", time: "Month 2", desc: "Plant cuttings/grafts at 4×4 m spacing." },
      { step: "Training & Pruning", time: "Year 1-2", desc: "Shape plants with 3-4 main branches." },
      { step: "Fertilizer", time: "3 times/year", desc: "Apply NPK in splits." },
      { step: "Irrigation", time: "Regular", desc: "Drip irrigation recommended." },
      { step: "First Harvest", time: "Year 2-3", desc: "Harvest when fruits turn red and heavy." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Perennial (intercrop with vegetables)",
  },
  banana: {
    schedule: [
      { step: "Pit Preparation", time: "Week 1-2", desc: "Dig pits 45×45×45 cm, fill with compost." },
      { step: "Planting", time: "Week 3", desc: "Plant tissue culture or sucker at 1.8×1.8 m." },
      { step: "Fertilizer", time: "Monthly", desc: "Apply N-P-K in 5-6 split doses." },
      { step: "Desuckering", time: "Month 3-4", desc: "Remove unwanted suckers regularly." },
      { step: "Propping", time: "Month 7-8", desc: "Support bunch with bamboo prop." },
      { step: "Harvest", time: "Month 11-14", desc: "Harvest when fingers fill and round." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Ratoon crop or Vegetables",
  },
  mango: {
    schedule: [
      { step: "Pit Preparation", time: "Month 1", desc: "Dig pits 1×1×1 m, fill with topsoil and compost." },
      { step: "Planting", time: "Month 2", desc: "Plant grafted saplings at 8×8 m spacing." },
      { step: "Training", time: "Year 1-3", desc: "Shape canopy by removing unwanted branches." },
      { step: "Fertilizer", time: "Twice/year", desc: "Apply NPK before and after monsoon." },
      { step: "Irrigation", time: "Dry months", desc: "Irrigate during dry spells." },
      { step: "First Harvest", time: "Year 4-6", desc: "Harvest when fruits mature and colour develops." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Perennial plantation (intercrop with pulses)",
  },
  grapes: {
    schedule: [
      { step: "Pit & Pandal Setup", time: "Month 1-2", desc: "Prepare pits and trellis/pandal system." },
      { step: "Planting", time: "Month 3", desc: "Plant cuttings at 3×1.5 m spacing." },
      { step: "Training", time: "Year 1", desc: "Train vines on pandal structure." },
      { step: "Pruning", time: "Twice/year", desc: "April (back) and October (forward) pruning." },
      { step: "Fertilizer", time: "Split doses", desc: "Heavy NPK + micronutrients." },
      { step: "First Harvest", time: "Year 2-3", desc: "Harvest when berries reach desired Brix." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "SOP (0-0-50)", "Micronutrient mix"],
    nextCrop: "Perennial vineyard (continues 15-20 years)",
  },
  watermelon: {
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Prepare raised beds or channels." },
      { step: "Sowing", time: "Week 2", desc: "Sow seeds at 2-3 cm depth, 2×1.5 m spacing." },
      { step: "Thinning", time: "Week 3", desc: "Retain 1-2 plants per hill." },
      { step: "Fertilizer", time: "Week 4-5", desc: "Top dress with nitrogen and potash." },
      { step: "Vine Training", time: "Week 5-6", desc: "Direct vines in one direction." },
      { step: "Harvest", time: "Week 12-14", desc: "Harvest when tendril near fruit dries." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)"],
    nextCrop: "Onion or Vegetables (Rabi)",
  },
  muskmelon: {
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Prepare raised beds with FYM." },
      { step: "Sowing", time: "Week 2", desc: "Sow seeds at 2 cm depth, 1.5×1 m spacing." },
      { step: "Thinning", time: "Week 3", desc: "Keep 2 plants per pit." },
      { step: "Fertilizer", time: "Week 4", desc: "Apply NPK at vine running stage." },
      { step: "Irrigation", time: "Week 3-8", desc: "Regular light irrigation; avoid waterlogging." },
      { step: "Harvest", time: "Week 10-12", desc: "Harvest when fruit develops aroma and nets." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)"],
    nextCrop: "Vegetables or Pulses",
  },
  apple: {
    schedule: [
      { step: "Pit Preparation", time: "Month 1", desc: "Dig pits 1×1×1 m with organic matter." },
      { step: "Planting", time: "Month 2", desc: "Plant grafted saplings at 5×5 m spacing." },
      { step: "Training & Pruning", time: "Year 1-3", desc: "Shape tree with modified central leader." },
      { step: "Fertilizer", time: "Twice/year", desc: "Apply NPK in spring and after harvest." },
      { step: "Pest Management", time: "Year-round", desc: "Spray schedule for scab, codling moth." },
      { step: "First Harvest", time: "Year 4-6", desc: "Harvest when fruit colour and size develop." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Borax"],
    nextCrop: "Perennial orchard (continues 30+ years)",
  },
  orange: {
    schedule: [
      { step: "Pit Preparation", time: "Month 1", desc: "Dig pits 75×75×75 cm, fill with compost." },
      { step: "Planting", time: "Month 2", desc: "Plant grafted saplings at 6×6 m spacing." },
      { step: "Basin Management", time: "Year 1-3", desc: "Keep basin clean and weed-free." },
      { step: "Fertilizer", time: "3 times/year", desc: "Apply NPK in split doses." },
      { step: "Irrigation", time: "Regular", desc: "Drip or basin irrigation." },
      { step: "First Harvest", time: "Year 3-5", desc: "Harvest when fruits turn orange." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Zinc Sulphate"],
    nextCrop: "Perennial orchard (intercrop with vegetables)",
  },
  papaya: {
    schedule: [
      { step: "Pit Preparation", time: "Week 1", desc: "Dig pits 50×50×50 cm, mix compost." },
      { step: "Planting", time: "Week 2", desc: "Plant seedlings at 2×2 m spacing." },
      { step: "Fertilizer", time: "Monthly", desc: "Apply NPK in regular split doses." },
      { step: "Irrigation", time: "Regular", desc: "Irrigate every 4-5 days; avoid waterlogging." },
      { step: "Pest Management", time: "Month 3-6", desc: "Monitor for papaya ring spot virus." },
      { step: "Harvest", time: "Month 9-12", desc: "Harvest when skin shows yellow patches." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Replant or rotate with vegetables",
  },
  coconut: {
    schedule: [
      { step: "Pit Preparation", time: "Month 1", desc: "Dig pits 1×1×1 m, fill with topsoil and compost." },
      { step: "Planting", time: "Month 2", desc: "Plant seedlings at 7.5×7.5 m spacing." },
      { step: "Basin Management", time: "Year 1-3", desc: "Keep 2 m radius basin weed-free." },
      { step: "Fertilizer", time: "Twice/year", desc: "Apply NPK in two splits (June and December)." },
      { step: "Irrigation", time: "Year-round", desc: "Irrigate during dry months." },
      { step: "First Harvest", time: "Year 5-7", desc: "Start harvesting nuts every 45 days." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Intercrop with cocoa, pepper, or banana",
  },
  cotton: {
    schedule: [
      { step: "Land Preparation", time: "Week 1-2", desc: "Deep ploughing and harrowing." },
      { step: "Sowing", time: "Week 3", desc: "Sow seeds at 3-5 cm depth, 90 cm row spacing." },
      { step: "Thinning & Weeding", time: "Week 5-6", desc: "Remove extra seedlings and weeds." },
      { step: "Fertilizer Application", time: "Week 6-8", desc: "Apply NPK fertilizer in split doses." },
      { step: "Pest Management", time: "Week 8-12", desc: "Scout for bollworms; apply IPM as needed." },
      { step: "Harvest", time: "Week 20-24", desc: "Pick bolls when they open fully." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)", "Neem Cake"],
    nextCrop: "Wheat or Chickpea (Rabi season)",
  },
  jute: {
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Plough and level with standing water." },
      { step: "Sowing", time: "Week 2", desc: "Broadcast seeds after pre-monsoon showers." },
      { step: "Thinning", time: "Week 4", desc: "Thin to maintain 7-10 cm spacing." },
      { step: "Weeding", time: "Week 5-6", desc: "Two weedings at 15 and 30 DAS." },
      { step: "Top Dressing", time: "Week 6", desc: "Apply urea as top dressing." },
      { step: "Harvest & Retting", time: "Week 14-16", desc: "Harvest at flowering, ret in water for 15-20 days." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)"],
    nextCrop: "Rice or Potato (Rabi season)",
  },
  coffee: {
    schedule: [
      { step: "Nursery", time: "Month 1-6", desc: "Raise seedlings in shade nursery." },
      { step: "Planting", time: "Month 7", desc: "Plant during monsoon onset at 2×2 m." },
      { step: "Shade Management", time: "Year 1-3", desc: "Maintain silver oak or other shade trees." },
      { step: "Fertilizer", time: "2-3 times/year", desc: "Apply NPK in splits during monsoon." },
      { step: "Pruning", time: "Annually", desc: "Shape pruning after harvest." },
      { step: "First Harvest", time: "Year 3-4", desc: "Pick ripe red cherries selectively." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Lime"],
    nextCrop: "Perennial plantation (intercrop with pepper)",
  },
};

export function getDisplayName(label: string): string {
  return cropDisplayNames[label] || label.charAt(0).toUpperCase() + label.slice(1);
}

export function getCropDetails(label: string) {
  return cropDetails[label] || {
    schedule: [
      { step: "Sowing", time: "Week 1-2", desc: "Prepare land and sow seeds." },
      { step: "Management", time: "Week 3-12", desc: "Regular irrigation, weeding, and fertilizer." },
      { step: "Harvest", time: "Week 14-16", desc: "Harvest at maturity." },
    ],
    fertilizers: ["NPK Complex"],
    nextCrop: "Rotate with a different crop family",
  };
}

let cachedData: CropRecord[] | null = null;

export async function loadCropData(): Promise<CropRecord[]> {
  if (cachedData) return cachedData;

  const res = await fetch("/data/crop_recommendation.csv");
  const text = await res.text();
  const lines = text.trim().split("\n");

  cachedData = lines.slice(1).map((line) => {
    const [N, P, K, temperature, humidity, ph, rainfall, label] = line.split(",");
    return {
      N: parseFloat(N),
      P: parseFloat(P),
      K: parseFloat(K),
      temperature: parseFloat(temperature),
      humidity: parseFloat(humidity),
      ph: parseFloat(ph),
      rainfall: parseFloat(rainfall),
      label: label.trim(),
    };
  });

  return cachedData;
}

/**
 * KNN-based crop recommendation.
 * Normalizes features, finds K nearest neighbors, votes by crop label.
 */
export async function recommendCropsKNN(input: {
  nitrogen?: number;
  phosphorus?: number;
  potassium?: number;
  temperature?: number;
  humidity?: number;
  ph?: number;
  rainfall?: number;
}, k = 10): Promise<{ label: string; displayName: string; confidence: string; reason: string; details: ReturnType<typeof getCropDetails> }[]> {
  const data = await loadCropData();

  // Compute min/max for normalization
  const features: (keyof CropRecord)[] = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"];
  const inputKeys = ["nitrogen", "phosphorus", "potassium", "temperature", "humidity", "ph", "rainfall"] as const;

  const mins: number[] = [];
  const maxs: number[] = [];
  features.forEach((f) => {
    const vals = data.map((d) => d[f] as number);
    mins.push(Math.min(...vals));
    maxs.push(Math.max(...vals));
  });

  // Build input vector (normalized)
  const inputVec = inputKeys.map((key, i) => {
    const val = input[key];
    if (val === undefined || isNaN(val)) return 0.5; // default to center
    const range = maxs[i] - mins[i] || 1;
    return (val - mins[i]) / range;
  });

  // Compute distances
  const distances = data.map((record) => {
    let dist = 0;
    features.forEach((f, i) => {
      const range = maxs[i] - mins[i] || 1;
      const normVal = ((record[f] as number) - mins[i]) / range;
      const diff = inputVec[i] - normVal;
      dist += diff * diff;
    });
    return { record, dist: Math.sqrt(dist) };
  });

  distances.sort((a, b) => a.dist - b.dist);
  const neighbors = distances.slice(0, k);

  // Vote by label (weighted by inverse distance)
  const votes: Record<string, number> = {};
  neighbors.forEach(({ record, dist }) => {
    const weight = 1 / (dist + 0.001);
    votes[record.label] = (votes[record.label] || 0) + weight;
  });

  const totalWeight = Object.values(votes).reduce((a, b) => a + b, 0);
  const sorted = Object.entries(votes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return sorted.map(([label, weight]) => {
    const pct = Math.round((weight / totalWeight) * 100);
    // Find closest neighbor of this crop to build reason
    const closest = neighbors.find((n) => n.record.label === label)!;
    const r = closest.record;

    const reasons: string[] = [];
    if (input.nitrogen !== undefined) reasons.push(`N=${input.nitrogen} (dataset avg for ${getDisplayName(label)}: ~${Math.round(r.N)})`);
    if (input.phosphorus !== undefined) reasons.push(`P=${input.phosphorus} (match: ~${Math.round(r.P)})`);
    if (input.potassium !== undefined) reasons.push(`K=${input.potassium} (match: ~${Math.round(r.K)})`);
    if (input.temperature !== undefined) reasons.push(`Temp=${input.temperature}°C (match: ~${r.temperature.toFixed(1)}°C)`);
    if (input.rainfall !== undefined) reasons.push(`Rainfall=${input.rainfall}mm (match: ~${r.rainfall.toFixed(0)}mm)`);

    return {
      label,
      displayName: getDisplayName(label),
      confidence: `${pct}%`,
      reason: `Closest dataset match: ${reasons.slice(0, 4).join(", ")}.`,
      details: getCropDetails(label),
    };
  });
}
