// Crop recommendation dataset based on N, P, K, temperature, humidity, pH, and rainfall
// Each crop has optimal ranges for all parameters

export interface CropData {
  name: string;
  nitrogen: [number, number];      // min-max kg/ha
  phosphorus: [number, number];    // min-max kg/ha
  potassium: [number, number];     // min-max kg/ha
  temperature: [number, number];   // min-max °C
  humidity: [number, number];      // min-max %
  ph: [number, number];            // min-max
  rainfall: [number, number];      // min-max mm
  season: string[];
  soilTypes: string[];
  schedule: { step: string; time: string; desc: string }[];
  fertilizers: string[];
  nextCrop: string;
}

export const cropDataset: CropData[] = [
  {
    name: "Rice (Paddy)",
    nitrogen: [60, 120],
    phosphorus: [35, 60],
    potassium: [35, 60],
    temperature: [20, 35],
    humidity: [70, 95],
    ph: [5.0, 7.0],
    rainfall: [150, 300],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Black Soil", "Alluvial Soil", "Clay Soil", "Loamy Soil"],
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
  {
    name: "Wheat",
    nitrogen: [80, 120],
    phosphorus: [40, 60],
    potassium: [30, 50],
    temperature: [12, 25],
    humidity: [50, 75],
    ph: [6.0, 7.5],
    rainfall: [50, 100],
    season: ["Rabi (Winter)"],
    soilTypes: ["Alluvial Soil", "Loamy Soil", "Clay Soil", "Black Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Deep ploughing and levelling, apply farmyard manure." },
      { step: "Sowing", time: "Week 2", desc: "Sow seeds at 3-5 cm depth with 20 cm row spacing." },
      { step: "First Irrigation", time: "Week 3-4", desc: "Crown root initiation stage — critical irrigation." },
      { step: "Fertilizer Application", time: "Week 5", desc: "Top dress with Urea at 30 kg/acre." },
      { step: "Second Irrigation", time: "Week 7-8", desc: "Tillering stage irrigation." },
      { step: "Harvest", time: "Week 16-18", desc: "Harvest when grains are hard and golden." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)", "Zinc Sulphate"],
    nextCrop: "Green Gram or Rice (Kharif season)",
  },
  {
    name: "Maize (Corn)",
    nitrogen: [60, 100],
    phosphorus: [35, 55],
    potassium: [30, 50],
    temperature: [18, 32],
    humidity: [50, 80],
    ph: [5.5, 7.5],
    rainfall: [60, 110],
    season: ["Kharif (Monsoon)", "Rabi (Winter)"],
    soilTypes: ["Loamy Soil", "Alluvial Soil", "Red Soil", "Black Soil"],
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
  {
    name: "Cotton",
    nitrogen: [80, 120],
    phosphorus: [40, 60],
    potassium: [40, 60],
    temperature: [25, 35],
    humidity: [50, 75],
    ph: [6.0, 8.0],
    rainfall: [60, 110],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Black Soil", "Alluvial Soil", "Loamy Soil"],
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
  {
    name: "Sugarcane",
    nitrogen: [100, 150],
    phosphorus: [50, 80],
    potassium: [50, 80],
    temperature: [25, 38],
    humidity: [60, 90],
    ph: [5.5, 8.0],
    rainfall: [100, 200],
    season: ["Kharif (Monsoon)", "Zaid (Summer)"],
    soilTypes: ["Loamy Soil", "Alluvial Soil", "Black Soil", "Clay Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1-2", desc: "Deep ploughing, level field, make furrows." },
      { step: "Planting", time: "Week 3", desc: "Plant setts in furrows at 90 cm spacing." },
      { step: "Gap Filling", time: "Week 5-6", desc: "Replace dead setts to maintain uniform stand." },
      { step: "Earthing Up", time: "Week 10-12", desc: "Mound soil around base of plants." },
      { step: "Irrigation", time: "Throughout", desc: "Regular irrigation every 10-15 days." },
      { step: "Harvest", time: "Month 10-12", desc: "Harvest when juice Brix reaches 18-20%." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Ratoon crop or Wheat (Rabi season)",
  },
  {
    name: "Groundnut (Peanut)",
    nitrogen: [10, 40],
    phosphorus: [40, 60],
    potassium: [30, 50],
    temperature: [25, 35],
    humidity: [50, 80],
    ph: [5.5, 7.0],
    rainfall: [50, 100],
    season: ["Kharif (Monsoon)", "Rabi (Winter)"],
    soilTypes: ["Sandy Soil", "Red Soil", "Loamy Soil", "Laterite Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Plough and harrow to get fine tilth." },
      { step: "Sowing", time: "Week 2", desc: "Sow kernels at 5 cm depth, 30 cm spacing." },
      { step: "Gypsum Application", time: "Week 5", desc: "Apply gypsum at flowering for pod development." },
      { step: "Weeding", time: "Week 4-6", desc: "Two weedings at 20 and 40 days after sowing." },
      { step: "Earthing Up", time: "Week 6", desc: "Mound soil to encourage pegging." },
      { step: "Harvest", time: "Week 14-17", desc: "Harvest when leaves turn yellow and pods mature." },
    ],
    fertilizers: ["DAP (18-46-0)", "Gypsum", "SSP (0-16-0)"],
    nextCrop: "Wheat or Sorghum (Rabi season)",
  },
  {
    name: "Soybean",
    nitrogen: [0, 30],
    phosphorus: [50, 80],
    potassium: [30, 50],
    temperature: [20, 32],
    humidity: [60, 85],
    ph: [5.5, 7.0],
    rainfall: [60, 120],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Black Soil", "Loamy Soil", "Alluvial Soil"],
    schedule: [
      { step: "Seed Treatment", time: "Before sowing", desc: "Treat seeds with Rhizobium culture." },
      { step: "Sowing", time: "Week 1-2", desc: "Sow at 3-4 cm depth with 45 cm row spacing." },
      { step: "Weeding", time: "Week 3-4", desc: "First weeding at 20 days, second at 35 days." },
      { step: "Pest Monitoring", time: "Week 5-8", desc: "Monitor for stem fly, girdle beetle." },
      { step: "Pod Development", time: "Week 8-12", desc: "Ensure adequate moisture during pod filling." },
      { step: "Harvest", time: "Week 13-15", desc: "Harvest when 95% pods turn brown." },
    ],
    fertilizers: ["DAP (18-46-0)", "SSP (0-16-0)", "Rhizobium Inoculant"],
    nextCrop: "Wheat or Chickpea (Rabi season)",
  },
  {
    name: "Chickpea (Bengal Gram)",
    nitrogen: [15, 40],
    phosphorus: [50, 80],
    potassium: [20, 40],
    temperature: [15, 30],
    humidity: [40, 65],
    ph: [6.0, 8.0],
    rainfall: [40, 80],
    season: ["Rabi (Winter)"],
    soilTypes: ["Black Soil", "Loamy Soil", "Red Soil", "Alluvial Soil"],
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
  {
    name: "Mustard",
    nitrogen: [60, 90],
    phosphorus: [30, 50],
    potassium: [20, 40],
    temperature: [10, 25],
    humidity: [40, 70],
    ph: [6.0, 7.5],
    rainfall: [30, 60],
    season: ["Rabi (Winter)"],
    soilTypes: ["Loamy Soil", "Sandy Soil", "Alluvial Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Fine tilth preparation with 2-3 ploughings." },
      { step: "Sowing", time: "Week 2", desc: "Sow at 1.5-2 cm depth, 30 cm row spacing." },
      { step: "Thinning", time: "Week 3", desc: "Thin seedlings to 10-15 cm apart." },
      { step: "Irrigation", time: "Week 5-6", desc: "First irrigation at flowering stage." },
      { step: "Aphid Control", time: "Week 7-8", desc: "Spray for mustard aphid if seen." },
      { step: "Harvest", time: "Week 14-16", desc: "Harvest when pods turn yellow-brown." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "Sulphur"],
    nextCrop: "Green Gram or Rice (Kharif season)",
  },
  {
    name: "Sunflower",
    nitrogen: [60, 90],
    phosphorus: [40, 60],
    potassium: [30, 50],
    temperature: [20, 30],
    humidity: [50, 75],
    ph: [6.0, 7.5],
    rainfall: [50, 90],
    season: ["Kharif (Monsoon)", "Rabi (Winter)", "Zaid (Summer)"],
    soilTypes: ["Black Soil", "Loamy Soil", "Alluvial Soil", "Red Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Deep ploughing and levelling." },
      { step: "Sowing", time: "Week 2", desc: "Sow at 4-5 cm depth, 60 cm row spacing." },
      { step: "Thinning", time: "Week 3", desc: "Thin to one plant per hill." },
      { step: "Fertilizer", time: "Week 4-5", desc: "Top dress with nitrogen." },
      { step: "Irrigation", time: "Week 6-8", desc: "Critical irrigation at flowering and seed filling." },
      { step: "Harvest", time: "Week 12-14", desc: "Harvest when back of head turns yellow." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "Borax"],
    nextCrop: "Wheat or Chickpea (Rabi season)",
  },
  {
    name: "Tomato",
    nitrogen: [80, 120],
    phosphorus: [60, 80],
    potassium: [60, 80],
    temperature: [20, 30],
    humidity: [50, 80],
    ph: [6.0, 7.0],
    rainfall: [40, 80],
    season: ["Kharif (Monsoon)", "Rabi (Winter)"],
    soilTypes: ["Loamy Soil", "Red Soil", "Sandy Soil", "Alluvial Soil"],
    schedule: [
      { step: "Nursery", time: "Week 1-3", desc: "Raise seedlings in nursery beds." },
      { step: "Transplanting", time: "Week 4", desc: "Transplant 4-week old seedlings at 60×45 cm." },
      { step: "Staking", time: "Week 5-6", desc: "Stake plants for support." },
      { step: "Fertilizer", time: "Week 6-8", desc: "Apply NPK in split doses." },
      { step: "Pest Management", time: "Week 8-10", desc: "Monitor for fruit borer and blight." },
      { step: "Harvest", time: "Week 10-16", desc: "Harvest when fruits turn red/pink." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)", "Calcium Nitrate"],
    nextCrop: "Cabbage or Onion",
  },
  {
    name: "Potato",
    nitrogen: [80, 120],
    phosphorus: [50, 70],
    potassium: [80, 120],
    temperature: [15, 25],
    humidity: [60, 85],
    ph: [5.0, 6.5],
    rainfall: [40, 80],
    season: ["Rabi (Winter)"],
    soilTypes: ["Loamy Soil", "Sandy Soil", "Alluvial Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Deep ploughing, ridge and furrow formation." },
      { step: "Planting", time: "Week 2", desc: "Plant seed tubers in ridges at 60×20 cm." },
      { step: "Earthing Up", time: "Week 4-5", desc: "Mound soil around emerging plants." },
      { step: "Fertilizer", time: "Week 3-6", desc: "Apply Urea and MOP in split doses." },
      { step: "Irrigation", time: "Week 6-10", desc: "Regular irrigation every 7-10 days." },
      { step: "Harvest", time: "Week 12-14", desc: "Harvest 10 days after haulm cutting." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Green Gram or Maize (Summer/Kharif)",
  },
  {
    name: "Onion",
    nitrogen: [80, 110],
    phosphorus: [50, 70],
    potassium: [60, 80],
    temperature: [15, 30],
    humidity: [60, 80],
    ph: [6.0, 7.5],
    rainfall: [40, 75],
    season: ["Rabi (Winter)", "Kharif (Monsoon)"],
    soilTypes: ["Loamy Soil", "Red Soil", "Alluvial Soil", "Sandy Soil"],
    schedule: [
      { step: "Nursery", time: "Week 1-6", desc: "Raise seedlings in nursery beds." },
      { step: "Transplanting", time: "Week 7", desc: "Transplant seedlings at 15×10 cm spacing." },
      { step: "Weeding", time: "Week 9-10", desc: "Two weedings at 20 and 40 days." },
      { step: "Fertilizer", time: "Week 8-12", desc: "Apply nitrogen in 2-3 split doses." },
      { step: "Irrigation", time: "Week 7-18", desc: "Light, frequent irrigation." },
      { step: "Harvest", time: "Week 18-20", desc: "Harvest when tops fall over and dry." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Sulphur"],
    nextCrop: "Tomato or Maize",
  },
  {
    name: "Turmeric",
    nitrogen: [60, 90],
    phosphorus: [30, 50],
    potassium: [80, 120],
    temperature: [25, 35],
    humidity: [70, 90],
    ph: [5.0, 7.0],
    rainfall: [150, 250],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Loamy Soil", "Alluvial Soil", "Red Soil", "Clay Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1-2", desc: "Fine tilth, form ridges and furrows." },
      { step: "Planting", time: "Week 3", desc: "Plant mother/finger rhizomes in ridges." },
      { step: "Mulching", time: "Week 3-4", desc: "Apply green leaf mulch." },
      { step: "Fertilizer", time: "Week 8-12", desc: "Apply NPK in 3 split doses." },
      { step: "Earthing Up", time: "Week 8, 12", desc: "Earth up at 60 and 90 days." },
      { step: "Harvest", time: "Month 8-9", desc: "Harvest when leaves dry and turn yellow." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Vegetables or Pulses",
  },
  {
    name: "Chilli (Pepper)",
    nitrogen: [80, 120],
    phosphorus: [40, 60],
    potassium: [50, 70],
    temperature: [20, 35],
    humidity: [60, 80],
    ph: [6.0, 7.0],
    rainfall: [50, 100],
    season: ["Kharif (Monsoon)", "Rabi (Winter)"],
    soilTypes: ["Loamy Soil", "Black Soil", "Red Soil", "Sandy Soil"],
    schedule: [
      { step: "Nursery", time: "Week 1-4", desc: "Raise seedlings in protected nursery." },
      { step: "Transplanting", time: "Week 5", desc: "Transplant at 60×45 cm spacing." },
      { step: "Staking", time: "Week 7-8", desc: "Stake plants if needed." },
      { step: "Fertilizer", time: "Week 6-10", desc: "Apply NPK in split doses." },
      { step: "Pest Control", time: "Week 8-14", desc: "Monitor thrips, mites, and fruit borer." },
      { step: "Harvest", time: "Week 12-20", desc: "Pick fruits at green or red stage." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)", "Neem Cake"],
    nextCrop: "Onion or Wheat",
  },
  {
    name: "Sorghum (Jowar)",
    nitrogen: [40, 80],
    phosphorus: [25, 45],
    potassium: [20, 40],
    temperature: [25, 35],
    humidity: [40, 70],
    ph: [6.0, 8.0],
    rainfall: [40, 80],
    season: ["Kharif (Monsoon)", "Rabi (Winter)"],
    soilTypes: ["Black Soil", "Red Soil", "Loamy Soil", "Sandy Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Plough and level the field." },
      { step: "Sowing", time: "Week 2", desc: "Sow at 3-5 cm depth, 45 cm row spacing." },
      { step: "Thinning", time: "Week 3", desc: "Thin to 15 cm plant spacing." },
      { step: "Fertilizer", time: "Week 4-5", desc: "Top dress with nitrogen at knee-high stage." },
      { step: "Weeding", time: "Week 4-6", desc: "Hand weeding or inter-cultivation." },
      { step: "Harvest", time: "Week 14-16", desc: "Harvest when grains are hard and dry." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "SSP (0-16-0)"],
    nextCrop: "Chickpea or Safflower (Rabi season)",
  },
  {
    name: "Pearl Millet (Bajra)",
    nitrogen: [40, 80],
    phosphorus: [20, 40],
    potassium: [15, 35],
    temperature: [25, 38],
    humidity: [30, 65],
    ph: [6.5, 8.5],
    rainfall: [25, 60],
    season: ["Kharif (Monsoon)", "Zaid (Summer)"],
    soilTypes: ["Sandy Soil", "Loamy Soil", "Red Soil", "Laterite Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Light ploughing and levelling." },
      { step: "Sowing", time: "Week 2", desc: "Sow at 2-3 cm depth, 45 cm row spacing." },
      { step: "Thinning", time: "Week 3", desc: "Thin plants to 10-15 cm apart." },
      { step: "Fertilizer", time: "Week 4", desc: "Top dress with nitrogen." },
      { step: "Weeding", time: "Week 3-5", desc: "One or two weedings." },
      { step: "Harvest", time: "Week 10-12", desc: "Harvest when earheads turn brown." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)"],
    nextCrop: "Mustard or Chickpea (Rabi season)",
  },
  {
    name: "Pigeon Pea (Tur/Arhar)",
    nitrogen: [10, 30],
    phosphorus: [40, 70],
    potassium: [15, 35],
    temperature: [20, 35],
    humidity: [50, 80],
    ph: [5.5, 7.5],
    rainfall: [60, 120],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Red Soil", "Black Soil", "Loamy Soil", "Laterite Soil"],
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
  {
    name: "Green Gram (Moong)",
    nitrogen: [10, 30],
    phosphorus: [30, 55],
    potassium: [15, 30],
    temperature: [25, 35],
    humidity: [50, 80],
    ph: [6.0, 7.5],
    rainfall: [40, 80],
    season: ["Kharif (Monsoon)", "Zaid (Summer)"],
    soilTypes: ["Loamy Soil", "Sandy Soil", "Red Soil", "Alluvial Soil"],
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
  {
    name: "Black Gram (Urad)",
    nitrogen: [10, 30],
    phosphorus: [35, 60],
    potassium: [15, 30],
    temperature: [25, 35],
    humidity: [60, 85],
    ph: [6.0, 7.5],
    rainfall: [50, 100],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Loamy Soil", "Black Soil", "Red Soil", "Alluvial Soil"],
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
  {
    name: "Sesame (Til)",
    nitrogen: [30, 50],
    phosphorus: [20, 40],
    potassium: [15, 30],
    temperature: [25, 35],
    humidity: [40, 65],
    ph: [5.5, 7.5],
    rainfall: [30, 65],
    season: ["Kharif (Monsoon)", "Zaid (Summer)"],
    soilTypes: ["Sandy Soil", "Loamy Soil", "Red Soil"],
    schedule: [
      { step: "Land Preparation", time: "Week 1", desc: "Light ploughing and levelling." },
      { step: "Sowing", time: "Week 2", desc: "Broadcast or line sow at 1-2 cm depth." },
      { step: "Thinning", time: "Week 3", desc: "Thin to 10 cm plant spacing." },
      { step: "Weeding", time: "Week 4-5", desc: "Hand weeding at 20-25 DAS." },
      { step: "Irrigation", time: "If dry", desc: "One irrigation at flowering." },
      { step: "Harvest", time: "Week 12-14", desc: "Harvest when lower capsules turn brown." },
    ],
    fertilizers: ["Urea (46-0-0)", "SSP (0-16-0)"],
    nextCrop: "Chickpea or Wheat (Rabi season)",
  },
  {
    name: "Jute",
    nitrogen: [40, 70],
    phosphorus: [20, 40],
    potassium: [20, 40],
    temperature: [25, 35],
    humidity: [70, 95],
    ph: [5.5, 7.0],
    rainfall: [150, 250],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Alluvial Soil", "Loamy Soil", "Clay Soil"],
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
  {
    name: "Banana",
    nitrogen: [100, 150],
    phosphorus: [30, 60],
    potassium: [100, 200],
    temperature: [25, 35],
    humidity: [70, 90],
    ph: [5.5, 7.0],
    rainfall: [100, 200],
    season: ["Kharif (Monsoon)", "Zaid (Summer)"],
    soilTypes: ["Loamy Soil", "Alluvial Soil", "Red Soil", "Clay Soil"],
    schedule: [
      { step: "Pit Preparation", time: "Week 1-2", desc: "Dig pits 45×45×45 cm, fill with compost." },
      { step: "Planting", time: "Week 3", desc: "Plant tissue culture or sucker at 1.8×1.8 m." },
      { step: "Fertilizer", time: "Monthly", desc: "Apply N-P-K in 5-6 split doses." },
      { step: "Desuckering", time: "Month 3-4", desc: "Remove unwanted suckers regularly." },
      { step: "Propping", time: "Month 7-8", desc: "Support bunch with bamboo prop." },
      { step: "Harvest", time: "Month 11-14", desc: "Harvest when fingers fill and round." },
    ],
    fertilizers: ["Urea (46-0-0)", "DAP (18-46-0)", "MOP (0-0-60)", "Farmyard Manure"],
    nextCrop: "Ratoon or Vegetables",
  },
  {
    name: "Coconut",
    nitrogen: [50, 80],
    phosphorus: [20, 40],
    potassium: [80, 150],
    temperature: [25, 35],
    humidity: [70, 95],
    ph: [5.5, 7.5],
    rainfall: [130, 250],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Laterite Soil", "Sandy Soil", "Loamy Soil", "Red Soil"],
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
  {
    name: "Tea",
    nitrogen: [80, 130],
    phosphorus: [20, 40],
    potassium: [40, 70],
    temperature: [15, 28],
    humidity: [70, 95],
    ph: [4.5, 5.5],
    rainfall: [150, 300],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Laterite Soil", "Loamy Soil", "Red Soil"],
    schedule: [
      { step: "Land Preparation", time: "Month 1-2", desc: "Clear land, plant shade trees." },
      { step: "Planting", time: "Month 3", desc: "Plant seedlings at 1.2×0.6 m spacing." },
      { step: "Pruning", time: "Year 2", desc: "Initial frame formation pruning." },
      { step: "Fertilizer", time: "3-4 times/year", desc: "Apply NPK in split doses." },
      { step: "Plucking Begins", time: "Year 3", desc: "Start regular plucking of two leaves and a bud." },
      { step: "Maintenance", time: "Ongoing", desc: "Regular pruning, pest management." },
    ],
    fertilizers: ["Urea (46-0-0)", "Rock Phosphate", "MOP (0-0-60)", "Dolomite"],
    nextCrop: "Perennial plantation (continues for 50+ years)",
  },
  {
    name: "Coffee",
    nitrogen: [70, 120],
    phosphorus: [20, 40],
    potassium: [60, 100],
    temperature: [18, 28],
    humidity: [70, 90],
    ph: [5.0, 6.5],
    rainfall: [150, 250],
    season: ["Kharif (Monsoon)"],
    soilTypes: ["Laterite Soil", "Red Soil", "Loamy Soil"],
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
];

/**
 * Recommend crops based on input parameters using distance-based scoring.
 * Each parameter's deviation from the crop's optimal range is scored.
 * Lower score = better match.
 */
export function recommendCrops(input: {
  nitrogen?: number;
  phosphorus?: number;
  potassium?: number;
  temperature?: number;
  humidity?: number;
  ph?: number;
  rainfall?: number;
  soil?: string;
  season?: string;
}): { crop: CropData; score: number; confidence: string; reason: string }[] {
  const results = cropDataset.map((crop) => {
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
        // Within range — perfect
        const closeness = 1 - Math.abs(value - mid) / spread;
        totalScore += closeness * 10;
        reasons.push(`${paramName} (${value}${unit}) is in optimal range (${range[0]}-${range[1]}${unit})`);
      } else {
        // Outside range — penalize proportionally
        const dist = value < range[0] ? range[0] - value : value - range[1];
        const penalty = Math.min(dist / spread, 3); // cap penalty
        totalScore += Math.max(0, 10 - penalty * 5);
        if (dist / spread < 0.5) {
          reasons.push(`${paramName} (${value}${unit}) is slightly outside optimal range (${range[0]}-${range[1]}${unit})`);
        }
      }
    };

    checkRange(input.nitrogen, crop.nitrogen, "Nitrogen", "");
    checkRange(input.phosphorus, crop.phosphorus, "Phosphorus", "");
    checkRange(input.potassium, crop.potassium, "Potassium", "");
    checkRange(input.temperature, crop.temperature, "Temperature", "°C");
    checkRange(input.humidity, crop.humidity, "Humidity", "%");
    checkRange(input.ph, crop.ph, "pH", "");
    checkRange(input.rainfall, crop.rainfall, "Rainfall", "mm");

    // Bonus for matching soil type
    if (input.soil) {
      paramCount++;
      if (crop.soilTypes.some((s) => input.soil!.toLowerCase().includes(s.toLowerCase()))) {
        totalScore += 10;
        reasons.push(`Suitable for ${input.soil}`);
      }
    }

    // Bonus for matching season
    if (input.season) {
      paramCount++;
      if (crop.season.some((s) => input.season!.toLowerCase().includes(s.toLowerCase().split(" ")[0]))) {
        totalScore += 10;
        reasons.push(`Grows well in ${input.season}`);
      }
    }

    const maxScore = paramCount * 10;
    const normalizedScore = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    const confidence =
      normalizedScore >= 85 ? "Very High" :
      normalizedScore >= 70 ? "High" :
      normalizedScore >= 55 ? "Moderate" :
      normalizedScore >= 40 ? "Low" : "Very Low";

    return {
      crop,
      score: normalizedScore,
      confidence: `${Math.round(normalizedScore)}%`,
      reason: reasons.slice(0, 4).join(". ") + ".",
    };
  });

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
