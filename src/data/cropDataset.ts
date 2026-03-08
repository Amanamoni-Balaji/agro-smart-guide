// Auto-generated from user-provided Crop_recommendation.csv dataset
// Each crop's optimal ranges are derived from the real dataset (min-max per parameter)

export interface CropDataEntry {
  label: string;
  nitrogen: [number, number];
  phosphorus: [number, number];
  potassium: [number, number];
  temperature: [number, number];
  humidity: [number, number];
  ph: [number, number];
  rainfall: [number, number];
}

// Ranges extracted from the CSV dataset (100 samples per crop, min-max values)
export const cropRanges: CropDataEntry[] = [
  { label: "rice", nitrogen: [60, 99], phosphorus: [35, 60], potassium: [35, 60], temperature: [20, 27], humidity: [80, 85], ph: [5.0, 7.9], rainfall: [183, 299] },
  { label: "maize", nitrogen: [55, 99], phosphorus: [35, 60], potassium: [15, 25], temperature: [18, 27], humidity: [55, 75], ph: [5.5, 7.0], rainfall: [60, 110] },
  { label: "chickpea", nitrogen: [20, 50], phosphorus: [55, 80], potassium: [72, 82], temperature: [17, 21], humidity: [14, 20], ph: [7.0, 7.5], rainfall: [65, 95] },
  { label: "kidneybeans", nitrogen: [0, 30], phosphorus: [55, 70], potassium: [18, 28], temperature: [15, 22], humidity: [18, 25], ph: [5.5, 6.0], rainfall: [60, 150] },
  { label: "pigeonpeas", nitrogen: [0, 40], phosphorus: [55, 75], potassium: [18, 28], temperature: [18, 36], humidity: [30, 70], ph: [4.5, 7.5], rainfall: [120, 200] },
  { label: "mothbeans", nitrogen: [0, 25], phosphorus: [40, 55], potassium: [15, 25], temperature: [24, 32], humidity: [40, 65], ph: [3.5, 8.0], rainfall: [30, 55] },
  { label: "mungbean", nitrogen: [15, 30], phosphorus: [40, 60], potassium: [18, 25], temperature: [27, 30], humidity: [80, 90], ph: [6.0, 7.2], rainfall: [40, 60] },
  { label: "blackgram", nitrogen: [25, 60], phosphorus: [55, 80], potassium: [12, 25], temperature: [25, 35], humidity: [55, 72], ph: [6.5, 8.0], rainfall: [55, 75] },
  { label: "lentil", nitrogen: [12, 40], phosphorus: [55, 80], potassium: [12, 20], temperature: [18, 30], humidity: [55, 70], ph: [6.5, 8.0], rainfall: [35, 55] },
  { label: "pomegranate", nitrogen: [0, 40], phosphorus: [5, 30], potassium: [35, 42], temperature: [18, 32], humidity: [85, 96], ph: [5.5, 7.2], rainfall: [100, 115] },
  { label: "banana", nitrogen: [75, 120], phosphorus: [70, 100], potassium: [45, 55], temperature: [25, 30], humidity: [75, 85], ph: [5.5, 6.8], rainfall: [90, 115] },
  { label: "mango", nitrogen: [0, 35], phosphorus: [15, 45], potassium: [25, 35], temperature: [27, 36], humidity: [45, 60], ph: [4.9, 7.5], rainfall: [89, 105] },
  { label: "grapes", nitrogen: [15, 40], phosphorus: [120, 145], potassium: [195, 210], temperature: [8, 42], humidity: [80, 84], ph: [5.5, 6.8], rainfall: [60, 75] },
  { label: "watermelon", nitrogen: [80, 130], phosphorus: [15, 30], potassium: [45, 60], temperature: [24, 27], humidity: [80, 90], ph: [6.0, 6.8], rainfall: [40, 60] },
  { label: "muskmelon", nitrogen: [80, 120], phosphorus: [5, 20], potassium: [45, 55], temperature: [27, 30], humidity: [90, 95], ph: [6.0, 6.8], rainfall: [20, 30] },
  { label: "apple", nitrogen: [5, 40], phosphorus: [125, 150], potassium: [195, 210], temperature: [21, 24], humidity: [90, 95], ph: [5.5, 6.5], rainfall: [110, 130] },
  { label: "orange", nitrogen: [10, 40], phosphorus: [5, 30], potassium: [5, 15], temperature: [10, 35], humidity: [90, 95], ph: [6.0, 8.0], rainfall: [100, 115] },
  { label: "papaya", nitrogen: [35, 65], phosphorus: [45, 70], potassium: [48, 58], temperature: [23, 44], humidity: [90, 95], ph: [6.5, 7.0], rainfall: [140, 250] },
  { label: "coconut", nitrogen: [0, 40], phosphorus: [5, 30], potassium: [25, 35], temperature: [25, 30], humidity: [90, 99], ph: [5.5, 6.5], rainfall: [130, 230] },
  { label: "cotton", nitrogen: [100, 150], phosphorus: [35, 60], potassium: [15, 25], temperature: [22, 27], humidity: [75, 85], ph: [6.8, 8.0], rainfall: [60, 115] },
  { label: "jute", nitrogen: [60, 100], phosphorus: [35, 55], potassium: [35, 45], temperature: [23, 27], humidity: [70, 90], ph: [6.0, 7.5], rainfall: [150, 200] },
  { label: "coffee", nitrogen: [90, 120], phosphorus: [15, 40], potassium: [25, 35], temperature: [23, 28], humidity: [50, 70], ph: [6.0, 7.0], rainfall: [120, 195] },
];

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

// Crop schedules, fertilizers, and rotation suggestions
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

/**
 * Recommend crops based on input N, P, K, temperature, humidity, pH, rainfall.
 * Uses distance-from-optimal-range scoring derived from real CSV dataset.
 */
export function recommendCropsFromDataset(input: {
  nitrogen?: number;
  phosphorus?: number;
  potassium?: number;
  temperature?: number;
  humidity?: number;
  ph?: number;
  rainfall?: number;
}): { label: string; displayName: string; score: number; confidence: string; reason: string; details: ReturnType<typeof getCropDetails> }[] {
  const results = cropRanges.map((crop) => {
    let totalScore = 0;
    let paramCount = 0;
    const reasons: string[] = [];

    const checkRange = (
      value: number | undefined,
      range: [number, number],
      paramName: string,
      unit: string
    ) => {
      if (value === undefined || isNaN(value)) return;
      paramCount++;
      const mid = (range[0] + range[1]) / 2;
      const spread = (range[1] - range[0]) / 2 || 1;

      if (value >= range[0] && value <= range[1]) {
        const closeness = 1 - Math.abs(value - mid) / spread;
        totalScore += closeness * 10;
        reasons.push(`${paramName} (${value}${unit}) is in optimal range (${range[0]}-${range[1]}${unit})`);
      } else {
        const dist = value < range[0] ? range[0] - value : value - range[1];
        const penalty = Math.min(dist / spread, 3);
        totalScore += Math.max(0, 10 - penalty * 5);
        if (dist / spread < 0.5) {
          reasons.push(`${paramName} (${value}${unit}) is close to optimal (${range[0]}-${range[1]}${unit})`);
        }
      }
    };

    checkRange(input.nitrogen, crop.nitrogen, "Nitrogen", " kg/ha");
    checkRange(input.phosphorus, crop.phosphorus, "Phosphorus", " kg/ha");
    checkRange(input.potassium, crop.potassium, "Potassium", " kg/ha");
    checkRange(input.temperature, crop.temperature, "Temperature", "°C");
    checkRange(input.humidity, crop.humidity, "Humidity", "%");
    checkRange(input.ph, crop.ph, "pH", "");
    checkRange(input.rainfall, crop.rainfall, "Rainfall", " mm");

    const maxScore = paramCount * 10;
    const normalizedScore = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    const confidence =
      normalizedScore >= 85 ? "Very High" :
      normalizedScore >= 70 ? "High" :
      normalizedScore >= 55 ? "Moderate" :
      normalizedScore >= 40 ? "Low" : "Very Low";

    return {
      label: crop.label,
      displayName: getDisplayName(crop.label),
      score: normalizedScore,
      confidence: `${Math.round(normalizedScore)}%`,
      reason: reasons.slice(0, 4).join(". ") + (reasons.length > 0 ? "." : ""),
      details: getCropDetails(crop.label),
    };
  });

  return results.sort((a, b) => b.score - a.score).slice(0, 5);
}
