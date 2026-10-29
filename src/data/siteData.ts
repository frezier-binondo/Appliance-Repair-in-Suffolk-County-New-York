export interface LinkItem {
  anchor: string;
  url: string;
  isExternal?: boolean;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  shortDesc: string;
  image: string;
  icon: string;
  commonProblems: { title: string; desc: string }[];
  processSteps: string[];
  brands: string[];
  maintenanceTips: string[];
  faqs: { q: string; a: string }[];
  internalLinks: LinkItem[];
  externalLinks: LinkItem[];
  fullContentText: string;
}

export interface LocationDetail {
  id: string;
  slug: string;
  townName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  shortDesc: string;
  image: string;
  neighborhoods: string[];
  uniqueContext: string;
  servicesOffered: { title: string; slug: string; desc: string }[];
  faqs: { q: string; a: string }[];
  internalLinks: LinkItem[];
  externalLinks: LinkItem[];
  fullContentText: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  servicePageUrl: string;
  servicePageAnchor: string;
  townPageUrls: { anchor: string; url: string }[];
  content: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_INFO = {
  name: "Appliance Repair in Suffolk County New York",
  shortName: "Suffolk County Appliance Repair",
  phone: "(631) 505-5046",
  rawPhone: "6315055046",
  email: "service@suffolkcountyappliancerepair.com",
  license: "Suffolk County DCA License #49281-H | EPA Section 608 Certified Universal",
  warranty: "90-Day Parts & Labor Guarantee on All Completed Repairs",
  diagnosticFee: "$89 Diagnostic Fee (Waived 100% when you proceed with repairs)",
  sameDayPolicy: "Same-Day Service Available for calls booked before 12:00 PM; guaranteed next-day booking across all Suffolk County towns",
  hours: "Monday – Saturday: 7:00 AM – 8:00 PM | Sunday: Emergency On-Call 8:00 AM – 5:00 PM",
  address: "Suffolk County, Long Island, NY (Central Dispatch across Huntington, Smithtown, Islip, Babylon, and Patchogue)",
  mapUrl: "https://maps.app.goo.gl/LMNaQs5pqdgLWyBH9",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193306.96918667554!2d-73.35123964177567!3d40.829158300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82e3b2e50529d%3A0x6b245ffbc5505b38!2sSuffolk%20County%2C%20NY!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus",
  rating: 4.9,
  reviewCount: 387,
};

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "refrigerator-repair",
    slug: "refrigerator-repair",
    name: "Refrigerator Repair",
    h1: "Refrigerator Repair in Suffolk County, NY",
    metaTitle: "Refrigerator Repair Suffolk County, NY | Local Experts",
    metaDescription: "Need refrigerator repair in Suffolk County, NY? Local technicians fix cooling, leaking and noise problems with upfront quotes. Call (631) 505-5046 to book.",
    targetKeyword: "Refrigerator Repair Suffolk County NY",
    shortDesc: "Fast diagnosis and repairs for French-door, side-by-side, bottom-freezer, and built-in luxury refrigerators.",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80",
    icon: "Refrigerator",
    commonProblems: [
      { title: "Not Cooling or Warm Fresh Food Section", desc: "Evaporator fan failure, frozen evaporator coil, bad defrost thermostat, or sealed-system refrigerant leaks." },
      { title: "Water Leaking Under Bins or Onto Floor", desc: "Clogged or frozen defrost drain trough, cracked water filter housing, or leaking dual water inlet valve." },
      { title: "Loud Buzzing, Clicking, or Humming", desc: "Failing condenser fan motor, clogged condenser coils overheating, or compressor start relay clicking repeatedly." },
      { title: "Excessive Frost or Ice Buildup", desc: "Defrost heater burnout, failed bimetal defrost sensor, or damaged magnetic door gaskets." },
      { title: "Compressor Running Constantly", desc: "Dirty condenser coils, ambient room temperature extremes, or faulty electronic control thermistor." }
    ],
    processSteps: [
      "Diagnostic Inspection: We inspect temperature sensors, airflow dampers, coils, fans, gaskets, and defrost circuitry.",
      "Firm Upfront Price: You receive a transparent written quote before any tool touches a replacement part.",
      "OEM Component Installation: We stock genuine parts for major brands on our mobile service trucks.",
      "System Verification: We verify defrost cycles, cooling pull-down, and seal integrity before leaving.",
      "Warranty Paperwork: Provided with our 90-Day Parts & Labor Guarantee."
    ],
    brands: ["Whirlpool", "GE Profile", "Samsung", "LG", "Frigidaire", "KitchenAid", "Sub-Zero", "Bosch", "Viking", "Thermador", "Maytag", "Electrolux"],
    maintenanceTips: [
      "Vacuum condenser coils every 6 months (especially with pets).",
      "Keep refrigerator temperatures between 37°F and 40°F, and freezer at 0°F.",
      "Perform the dollar bill test on door gaskets to check for air leaks.",
      "Leave 2 inches of breathing room behind the refrigerator for air exchange."
    ],
    faqs: [
      { q: "How long is food safe when a refrigerator stops cooling?", a: "Per FoodSafety.gov, a closed refrigerator keeps food safely cold for up to 4 hours during a failure. Move high-risk items (dairy, meats) to a cooler promptly." },
      { q: "Is it worth repairing my refrigerator?", a: "If the unit is under 10 years old and the problem involves fans, defrost parts, sensors, or valves, repair is highly cost-effective compared to buying new." },
      { q: "Do you repair built-in and Sub-Zero refrigerators?", a: "Yes, our certified technicians are trained in dual-compressor and luxury built-in sealed systems." },
      { q: "How quickly can a technician come out in Suffolk County?", a: "We offer same-day service for emergency calls placed before noon, and guaranteed next-day appointment windows throughout Suffolk County." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Freezer Repair", url: "/freezer-repair/" },
      { anchor: "Ice Maker Repair", url: "/ice-maker-repair/" },
      { anchor: "Wine Cooler Repair", url: "/wine-cooler-repair/" },
      { anchor: "Refrigerator Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Refrigerator Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Refrigerator Repair in Islip, NY", url: "/appliance-repair-islip-ny/" },
      { anchor: "Refrigerator Repair in Babylon, NY", url: "/appliance-repair-babylon-ny/" },
      { anchor: "Refrigerator Repair in Patchogue, NY", url: "/appliance-repair-patchogue-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "FoodSafety.gov refrigerator and freezer guidance", url: "https://www.foodsafety.gov/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `A refrigerator that stops cooling puts hundreds of dollars of food at risk within hours, so fast and accurate diagnosis matters. We repair top-freezer, bottom-freezer, side-by-side, French-door and counter-depth models across Suffolk County, Long Island. When you call Appliance Repair in Suffolk County New York, our local technicians test the complete refrigeration cycle: temperature thermistors, electronic damper controls, condenser and evaporator fan motors, defrost heaters, and compressors. We carry factory OEM replacement parts on our fully stocked mobile vans, ensuring most repairs are completed in a single convenient visit. We provide upfront quotes with zero surprises, backed by our 90-day parts and labor warranty.`
  },
  {
    id: "freezer-repair",
    slug: "freezer-repair",
    name: "Freezer Repair",
    h1: "Freezer Repair in Suffolk County, NY",
    metaTitle: "Freezer Repair Suffolk County, NY | Upright & Chest Freezers",
    metaDescription: "Need freezer repair in Suffolk County, NY? Local technicians fix warming, frost buildup and compressor problems with upfront quotes. Call (631) 505-5046.",
    targetKeyword: "Freezer Repair Suffolk County NY",
    shortDesc: "Expert repair for chest freezers, upright deep freezers, and built-in freezer columns.",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1200&q=80",
    icon: "Snowflake",
    commonProblems: [
      { title: "Freezer Warming Up or Not Freezing", desc: "Compressor relay failure, low refrigerant, failing thermostat, or burned-out evaporator fan." },
      { title: "Heavy Frost Accumulation on Coils and Walls", desc: "Failed defrost timer or control board, worn perimeter gasket, or damaged bimetal defrost thermostat." },
      { title: "Loud Clicking or Grinding Noises", desc: "Evaporator fan blade hitting ice buildup or a worn compressor mounting grommet." },
      { title: "Water Pooling Around Freezer Base", desc: "Blocked or frozen drain tube allowing defrost water to spill onto floor." }
    ],
    processSteps: [
      "Check 0°F temperature benchmark and internal air circulation.",
      "Test start relay, capacitor, thermostat, and defrost timer.",
      "Clear blocked drains and test heating elements.",
      "Verify sealed system pressures if cooling is deficient.",
      "Provide written 90-day warranty on all parts and labor."
    ],
    brands: ["Frigidaire", "GE", "Whirlpool", "Kenmore", "Electrolux", "Haier", "Danby", "Amana", "Maytag", "Samsung"],
    maintenanceTips: [
      "Manually defrost chest freezers when frost reaches 1/4 inch.",
      "Keep freezers 75% full for optimal thermal mass and compressor efficiency.",
      "Clean condenser coils every spring and fall.",
      "Inspect lid and door seals for cracks or stiffness."
    ],
    faqs: [
      { q: "How long does food stay frozen if the freezer loses power?", a: "A full, unopened freezer preserves food for about 48 hours (24 hours if half full). Keep the door strictly closed while waiting for technician arrival." },
      { q: "Can you fix chest freezers located in garages or basements?", a: "Yes, we regularly service basement and garage deep freezers across all Suffolk County towns." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
      { anchor: "Ice Maker Repair", url: "/ice-maker-repair/" },
      { anchor: "Commercial Appliance Repair", url: "/commercial-appliance-repair/" },
      { anchor: "Freezer Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Freezer Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "FoodSafety.gov refrigerator and freezer guidance", url: "https://www.foodsafety.gov/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `Whether it is a chest freezer in the garage or an upright deep freeze in your basement, a failing freezer can ruin weeks of groceries before you notice. We repair upright, chest, built-in, and combination freezers throughout Suffolk County. Our technicians test thermostats, start relays, defrost heaters, and sealed systems, giving you honest advice on whether repair or replacement makes the best financial sense.`
  },
  {
    id: "washer-repair",
    slug: "washer-repair",
    name: "Washing Machine Repair",
    h1: "Washing Machine Repair in Suffolk County, NY",
    metaTitle: "Washing Machine Repair Suffolk County, NY | Front & Top Load",
    metaDescription: "Need washing machine repair in Suffolk County, NY? Local technicians fix leaks, drainage and spin problems with upfront quotes. Call (631) 505-5046 to book.",
    targetKeyword: "Washing Machine Repair Suffolk County NY",
    shortDesc: "Complete diagnostics for front-load, top-load, high-efficiency, and stackable washing machines.",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
    icon: "Waves",
    commonProblems: [
      { title: "Washer Won't Drain or Leaves Standing Water", desc: "Coins, socks, or debris obstructing drain pump impeller, or failed pump motor." },
      { title: "Will Not Spin or Weak Tumbling", desc: "Broken drive belt, faulty lid switch / door latch assembly, worn motor coupler, or bad suspension rods." },
      { title: "Water Leaking Onto Floor", desc: "Torn door boot gasket on front loaders, cracked water pump housing, or split fill hoses." },
      { title: "Violent Shaking or Loud Grinding", desc: "Worn tub bearings, fractured spider arm, or broken suspension dampeners." }
    ],
    processSteps: [
      "Diagnose cycle error codes and electrical schematic.",
      "Check water inlet pressure, pressure switch, and drain line flow.",
      "Inspect drive belt, direct-drive motor, rotor/stator, and tub suspension.",
      "Install OEM parts and conduct complete rinse & spin test.",
      "Issue 90-day parts and labor warranty."
    ],
    brands: ["Whirlpool", "Maytag", "GE", "Samsung", "LG", "Electrolux", "Bosch", "Speed Queen", "Frigidaire", "Kenmore", "Amana"],
    maintenanceTips: [
      "Leave the door or lid ajar between washes to prevent mold and mildew.",
      "Clean front-loader coin trap filters every 60 days.",
      "Use only HE detergent and never exceed recommended dosage.",
      "Upgrade rubber hoses to braided stainless steel to avoid burst floods."
    ],
    faqs: [
      { q: "Why is my washing machine not draining?", a: "In 85% of cases, foreign objects (coins, hairpins, baby socks) clog the drain pump filter, or the drain pump motor has failed." },
      { q: "Is it worth fixing tub bearings on an older washer?", a: "If tub bearings have disintegrated, the repair is labor-intensive. For washers over 8-10 years old, we provide an honest comparison against replacement." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Dryer Repair", url: "/dryer-repair/" },
      { anchor: "Dishwasher Repair", url: "/dishwasher-repair/" },
      { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
      { anchor: "Washing Machine Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Washing Machine Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `When your washing machine stops draining, spinning, or filling, laundry day grinds to an abrupt halt. Appliance Repair in Suffolk County New York repairs top-load, front-load, high-efficiency, and stackable washers. We resolve door latch issues, clogged drain pumps, broken belts, worn motor couplings, and leaking tub seals with fast response times across Long Island.`
  },
  {
    id: "dryer-repair",
    slug: "dryer-repair",
    name: "Dryer Repair",
    h1: "Dryer Repair in Suffolk County, NY",
    metaTitle: "Dryer Repair Suffolk County, NY | Gas & Electric Dryers",
    metaDescription: "Need dryer repair in Suffolk County, NY? Local technicians fix no-heat, long drying times and noise with upfront quotes. Call (631) 505-5046 to book.",
    targetKeyword: "Dryer Repair Suffolk County NY",
    shortDesc: "Fast solutions for gas and electric clothes dryers, thermal fuses, heating elements, and rollers.",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=80",
    icon: "Flame",
    commonProblems: [
      { title: "Dryer Runs but Produces No Heat", desc: "Burned-out heating element, blown high-limit thermal fuse, or weak gas igniter and solenoid coils." },
      { title: "Takes Multiple Cycles to Dry Clothes", desc: "Restricted exterior vent line, clogged lint chute, or weak heating element element coils." },
      { title: "Loud Squealing, Thumping, or Scraping", desc: "Worn drum support rollers, damaged idler pulley, flattened drive belt, or broken blower wheel." },
      { title: "Dryer Shuts Off Mid-Cycle or Won't Start", desc: "Tripped thermal cutoff, bad door safety switch, or overheating motor thermal protector." }
    ],
    processSteps: [
      "Thermal and airflow safety evaluation (testing exhaust backpressure).",
      "Multimeter testing of thermal fuse, cycling thermostat, and heating coil.",
      "Gas valve ignition and flame sensor inspection for gas units.",
      "Cleaning internal cabinet lint to eliminate fire hazards.",
      "Testing drum rotation and temperature cycling under load."
    ],
    brands: ["Whirlpool", "Maytag", "GE", "Samsung", "LG", "Electrolux", "Frigidaire", "Kenmore", "Speed Queen", "Amana", "Bosch"],
    maintenanceTips: [
      "Clean the lint screen after every single load.",
      "Schedule professional dryer duct cleaning once per year to prevent fire hazards.",
      "Never leave a dryer operating when nobody is home.",
      "Avoid overloading to reduce motor and roller strain."
    ],
    faqs: [
      { q: "Can a clogged dryer vent cause a house fire?", a: "Yes. The Consumer Product Safety Commission reports over 15,000 dryer fires annually. Lint buildup is the leading cause. We inspect venting during every dryer service call." },
      { q: "Why does my dryer take 2 or 3 cycles to dry towels?", a: "Airflow restriction is almost always the cause. When moist air cannot escape, clothes tumble in trapped humidity." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Washing Machine Repair", url: "/washer-repair/" },
      { anchor: "Dishwasher Repair", url: "/dishwasher-repair/" },
      { anchor: "Stove & Range Repair", url: "/stove-range-repair/" },
      { anchor: "Dryer Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Dryer Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `A dryer that takes two cycles to dry a load is wasting electricity and poses a serious fire hazard. We repair both gas and electric dryers, including stackable and ventless heat-pump units. Our technicians carry replacement heating elements, thermal cutoffs, gas igniters, rollers, and drive belts to restore fast, safe drying in a single appointment.`
  },
  {
    id: "dishwasher-repair",
    slug: "dishwasher-repair",
    name: "Dishwasher Repair",
    h1: "Dishwasher Repair in Suffolk County, NY",
    metaTitle: "Dishwasher Repair Suffolk County, NY | Leaks, Pumps & Latches",
    metaDescription: "Need dishwasher repair in Suffolk County, NY? Local technicians fix leaks, drain issues and cleaning problems with upfront quotes. Call (631) 505-5046 to book.",
    targetKeyword: "Dishwasher Repair Suffolk County NY",
    shortDesc: "Complete service for built-in, drawer, and portable dishwashers from Bosch, KitchenAid, and all major brands.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    icon: "Sparkles",
    commonProblems: [
      { title: "Dishwasher Won't Drain Standing Water", desc: "Clogged filter mesh, blocked air gap, kinked drain line, or burnt drain pump motor." },
      { title: "Dishes Come Out Dirty or Grimy", desc: "Clogged spray arm jets, failing wash circulation pump, or defective water inlet valve." },
      { title: "Leaking Onto Kitchen Floor", desc: "Degraded door perimeter gasket, loose hose clamps, or cracked water valve casing." },
      { title: "Unit Won't Start or Door Won't Latch", desc: "Defective micro-switch door latch, blown thermal fuse, or main control board failure." }
    ],
    processSteps: [
      "Diagnostic cycle run to verify inlet water volume, heating, and drainage.",
      "Removal and cleaning of sump filter assembly and spray arm nozzles.",
      "Bench-testing circulation pump, drain pump, and float switch.",
      "Replacing worn seals or valves with genuine manufacturer parts.",
      "Leak inspection under pressure before re-securing kickplate."
    ],
    brands: ["Bosch", "KitchenAid", "Whirlpool", "GE", "Samsung", "LG", "Maytag", "Frigidaire", "Miele", "Thermador", "Electrolux"],
    maintenanceTips: [
      "Scrape food residue before loading (pre-rinsing is unnecessary on modern detergents).",
      "Clean the sump filter screen under warm water once a month.",
      "Run hot water at the kitchen sink prior to starting the wash cycle.",
      "Use commercial rinse aid to prevent mineral water spotting on glass."
    ],
    faqs: [
      { q: "Why is water left standing in the bottom of my dishwasher?", a: "This is usually caused by food debris clogging the filter basin, a jammed garbage disposal connection plug, or a broken drain pump." },
      { q: "Do you repair European dishwashers like Bosch and Miele?", a: "Yes, our technicians specialize in ultra-quiet European dishwashers with specialized plumbing and electronic controls." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Garbage Disposal Repair", url: "/garbage-disposal-repair/" },
      { anchor: "Washing Machine Repair", url: "/washer-repair/" },
      { anchor: "Oven Repair", url: "/oven-repair/" },
      { anchor: "Dishwasher Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Dishwasher Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "EPA WaterSense water-efficiency program", url: "https://www.epa.gov/watersense", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `A dishwasher that leaves dishes dirty, leaks onto hardwood floors, or refuses to drain turns a daily kitchen convenience into an ongoing frustration. We repair built-in, drawer, and portable dishwashers across Suffolk County. Our technicians diagnose wash motors, heating elements, drain pumps, water inlet valves, and float switches to restore crystal-clear cleaning.`
  },
  {
    id: "oven-repair",
    slug: "oven-repair",
    name: "Oven Repair",
    h1: "Oven Repair in Suffolk County, NY",
    metaTitle: "Oven Repair Suffolk County, NY | Wall Ovens & Convection Units",
    metaDescription: "Need oven repair in Suffolk County, NY? Local technicians fix heating, temperature and door problems with upfront quotes. Call (631) 505-5046 to book.",
    targetKeyword: "Oven Repair Suffolk County NY",
    shortDesc: "Accurate repair for single and double wall ovens, convection ovens, and electric/gas baking units.",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=1200&q=80",
    icon: "Microwave",
    commonProblems: [
      { title: "Oven Won't Heat at All", desc: "Burned-out bake or broil element, weak glow-bar igniter in gas ovens, or blown thermal fuse." },
      { title: "Uneven Baking or Inaccurate Temperature", desc: "Failing temperature sensor probe (RTD), bad thermostat, or leaking door gasket." },
      { title: "Oven Door Won't Latch or Close Tightly", desc: "Worn door hinges, broken door springs, or misaligned latch assembly." },
      { title: "Self-Cleaning Cycle Latches and Won't Unlock", desc: "Faulty motorized door lock assembly or high-limit safety thermostat tripped." }
    ],
    processSteps: [
      "Resistance testing on heating elements and temperature sensors.",
      "Safety checks on gas pressure, igniter amperage, and dual safety valves.",
      "Inspection of electronic clock controls (ERC) and relay boards.",
      "Temperature calibration using professional digital thermocouple.",
      "Complete test bake cycle to confirm heat distribution."
    ],
    brands: ["GE Profile", "Whirlpool", "Frigidaire", "Samsung", "LG", "KitchenAid", "Bosch", "Thermador", "Wolf", "Viking", "Jenn-Air", "Miele"],
    maintenanceTips: [
      "Avoid lining the oven bottom with aluminum foil (this blocks heat and damages enamel).",
      "Wipe spills promptly after the oven cools to protect sensor probes.",
      "Check door seals annually for heat leakage.",
      "Use self-cleaning modes sparingly to prevent electronic overheating."
    ],
    faqs: [
      { q: "Why is my electric oven taking 45 minutes to preheat?", a: "This usually indicates the main bake element has burned out, leaving only the broil or convection element to heat the oven cavity." },
      { q: "Is a gas oven igniter repair safe?", a: "Yes. Our technicians are trained in strict NFPA gas cooking safety standards to ensure proper gas valve ignition and zero gas leaks." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Stove & Range Repair", url: "/stove-range-repair/" },
      { anchor: "Cooktop Repair", url: "/cooktop-repair/" },
      { anchor: "Microwave Repair", url: "/microwave-repair/" },
      { anchor: "Oven Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Oven Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "NFPA cooking safety guidance", url: "https://www.nfpa.org/education-and-research/home-fire-safety/cooking", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `When your oven won't heat or bakes unevenly, family meals and holiday dinners fall apart. We service single and double wall ovens, convection models, and high-end pro ovens across Suffolk County. Our technicians test heating elements, calibrate temperature sensors, and replace faulty control boards so your oven heats evenly and accurately every time.`
  },
  {
    id: "stove-range-repair",
    slug: "stove-range-repair",
    name: "Stove & Range Repair",
    h1: "Stove & Range Repair in Suffolk County, NY",
    metaTitle: "Stove & Range Repair Suffolk County, NY | Gas, Electric & Induction",
    metaDescription: "Need stove & range repair in Suffolk County, NY? Local technicians fix burner, igniter and oven problems with upfront quotes. Call (631) 505-5046 to book.",
    targetKeyword: "Stove & Range Repair Suffolk County NY",
    shortDesc: "Comprehensive diagnostics for freestanding and slide-in ranges, dual-fuel stoves, and electric ranges.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    icon: "Utensils",
    commonProblems: [
      { title: "Burner Clicks Repeatedly but Won't Light", desc: "Moisture or grease in spark electrode, failed spark module, or clogged gas burner ports." },
      { title: "Electric Surface Element Not Heating", desc: "Burned out coil element, burnt receptacle terminal block, or bad infinite control switch." },
      { title: "Uneven or Yellow Gas Flame", desc: "Incorrect air shutter setting or dirty burner cap causing incomplete combustion." },
      { title: "Touchpad or Oven Knobs Unresponsive", desc: "Failed relay control board, corrupted membrane switch, or broken potentiometer knob." }
    ],
    processSteps: [
      "Test gas pressure and manifold supply lines for leaks.",
      "Check spark ignition switches, spark electrode gaps, and grounds.",
      "Inspect surface burner receptacles and infinite control switches.",
      "Test oven bake and broil functions together with top burners.",
      "Re-calibrate burner flame height and air-gas mixture."
    ],
    brands: ["GE", "Whirlpool", "Frigidaire", "Samsung", "LG", "KitchenAid", "Bosch", "Viking", "Wolf", "Thermador", "Maytag", "Jenn-Air"],
    maintenanceTips: [
      "Keep burner ports clear using a soft wooden toothpick (avoid metal pins).",
      "Ensure burner caps are seated completely flat on the brass base.",
      "Clean glass range cooktops with non-abrasive cooktop cleaner only.",
      "Immediately turn off gas and ventilate if you ever smell unburned gas."
    ],
    faqs: [
      { q: "Why do all my stove burners click when I only turn on one?", a: "Most modern gas stoves route spark switches through a common spark ignition module. If one switch is wet or shorted, all igniters click simultaneously." },
      { q: "Can you convert gas ranges from natural gas to liquid propane (LP)?", a: "Yes, our technicians perform authorized LP conversion nozzle swaps and pressure regulator adjustments." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Oven Repair", url: "/oven-repair/" },
      { anchor: "Cooktop Repair", url: "/cooktop-repair/" },
      { anchor: "Microwave Repair", url: "/microwave-repair/" },
      { anchor: "Stove & Range Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Stove & Range Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "NFPA cooking safety guidance", url: "https://www.nfpa.org/education-and-research/home-fire-safety/cooking", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `Your range is the hardworking centerpiece of the family kitchen. A single failed burner, weak igniter, or erratic temperature disrupts meal preparations immediately. We repair gas, electric, dual-fuel, and induction ranges across Suffolk County. With trained technicians and OEM components, we get your cooking back on schedule quickly and safely.`
  },
  {
    id: "cooktop-repair",
    slug: "cooktop-repair",
    name: "Cooktop Repair",
    h1: "Cooktop Repair in Suffolk County, NY",
    metaTitle: "Cooktop Repair Suffolk County, NY | Gas, Electric & Induction",
    metaDescription: "Need cooktop repair in Suffolk County, NY? Local technicians fix burner, igniter and induction faults with upfront quotes. Call (631) 505-5046 to book.",
    targetKeyword: "Cooktop Repair Suffolk County NY",
    shortDesc: "Specialized service for built-in glass ceramic, radiant electric, and luxury induction cooktops.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    icon: "Zap",
    commonProblems: [
      { title: "Induction Zone Shuts Down or Shows Error Codes", desc: "Overheating induction generator board, cooling fan failure, or filter board capacitor defect." },
      { title: "Radiant Burner Element Not Glowing", desc: "Burned heating ribbon, failed thermal limiter switch, or bad user interface module." },
      { title: "Touch Control Panel Locked or Unresponsive", desc: "Spilled moisture underneath control glass, child lock engaged, or bad touch PCB board." },
      { title: "Cracked Ceramic Glass Top", desc: "Thermal shock or heavy impact requiring factory glass replacement to avoid shock hazards." }
    ],
    processSteps: [
      "Careful extraction of cooktop from granite or quartz countertop without chipping.",
      "Component isolation testing on induction modules, power boards, and relays.",
      "Burner gas valve and thermocouple testing for gas cooktop models.",
      "Installation of OEM replacement boards and ribbon elements.",
      "High-power operational test across all zones."
    ],
    brands: ["Wolf", "Thermador", "Bosch", "Miele", "GE Profile", "Samsung", "KitchenAid", "Viking", "Frigidaire", "Whirlpool"],
    maintenanceTips: [
      "Use flat-bottomed pots and pans that match burner diameter.",
      "Avoid sliding cast-iron cookware across ceramic glass surfaces.",
      "Clean sugar and syrup spills immediately before they etch into the glass.",
      "Keep intake ventilation fans clean on downdraft cooktops."
    ],
    faqs: [
      { q: "Can induction cooktops be repaired rather than replaced?", a: "Yes. In the majority of cases, replacing an induction power module or cooling fan restores full operation at a fraction of replacement cost." },
      { q: "Can you replace a cracked ceramic cooktop glass surface?", a: "Yes, we source and install genuine factory glass tops for Bosch, Thermador, Wolf, GE, and KitchenAid models." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Stove & Range Repair", url: "/stove-range-repair/" },
      { anchor: "Oven Repair", url: "/oven-repair/" },
      { anchor: "Luxury Appliance Repair", url: "/luxury-appliance-repair/" },
      { anchor: "Cooktop Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Cooktop Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "NFPA cooking safety guidance", url: "https://www.nfpa.org/education-and-research/home-fire-safety/cooking", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `Built-in cooktops add clean architectural elegance to modern Suffolk County kitchens. However, repairing built-in gas, radiant electric, or high-tech induction cooktops requires specialized technical training and delicate handling around custom stone countertops. Appliance Repair in Suffolk County New York brings specialized diagnostic meters and genuine OEM replacement parts to protect your investment and restore your cooktop flawlessly.`
  },
  {
    id: "microwave-repair",
    slug: "microwave-repair",
    name: "Microwave Repair",
    h1: "Microwave Repair in Suffolk County, NY",
    metaTitle: "Microwave Repair Suffolk County, NY | Over-the-Range & Built-In",
    metaDescription: "Need microwave repair in Suffolk County, NY? Local technicians fix heating, display and door faults with upfront quotes. Call (631) 505-5046 to book.",
    targetKeyword: "Microwave Repair Suffolk County NY",
    shortDesc: "Certified technician repairs for over-the-range, built-in drawer, and convection microwave units.",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=1200&q=80",
    icon: "Radio",
    commonProblems: [
      { title: "Microwave Runs but Will Not Heat", desc: "Burned magnetron tube, high-voltage diode failure, or shorted high-voltage capacitor." },
      { title: "Sparking and Arcing Inside Cavity", desc: "Burned mica waveguide cover, charred paint exposing bare metal, or metallic residue." },
      { title: "Turntable Won't Turn", desc: "Broken turntable synchronous motor, stripped roller guide, or fractured coupler." },
      { title: "Unit Dies When Door is Opened or Closed", desc: "Misaligned or shorted door interlock micro-switch blowing internal ceramic line fuse." }
    ],
    processSteps: [
      "Safely discharge high-voltage capacitor (up to 5,000 volts).",
      "Test door interlock safety switches and monitor micro-switches.",
      "Test high-voltage transformer, diode, and magnetron resistance.",
      "Replace defective OEM components and verify RF radiation safety shielding.",
      "Full microwave wattage test using calibrated water heating measurement."
    ],
    brands: ["GE Profile", "Samsung", "LG", "Whirlpool", "Sharp", "Panasonic", "KitchenAid", "Bosch", "Frigidaire", "Maytag"],
    maintenanceTips: [
      "Never run a microwave oven empty (this damages the magnetron).",
      "Replace mica waveguide covers if they become greasy or discolored.",
      "Do not use metal utensils or dishes with gold or silver metallic trim.",
      "Wipe interior walls and door seal surfaces weekly with mild soap."
    ],
    faqs: [
      { q: "Is it worth repairing an over-the-range microwave?", a: "Yes. While cheap small countertop microwaves may not be cost-effective to repair, built-in and over-the-range microwaves connected to cabinetry and ventilation are well worth professional repair." },
      { q: "Why did my microwave spark when heating soup?", a: "Food splatter on the waveguide cover can absorb microwave energy and char, creating an electrical arc. Stop use and let a technician replace the inexpensive cover." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Oven Repair", url: "/oven-repair/" },
      { anchor: "Cooktop Repair", url: "/cooktop-repair/" },
      { anchor: "Stove & Range Repair", url: "/stove-range-repair/" },
      { anchor: "Microwave Repair in Huntington, NY", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Microwave Repair in Smithtown, NY", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "NFPA cooking safety guidance", url: "https://www.nfpa.org/education-and-research/home-fire-safety/cooking", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `Microwaves are used multiple times every day in modern households. When a built-in or over-the-range microwave sparks, ceases heating, or shuts down entirely, dinner routines are instantly disrupted. Because microwave ovens contain high-voltage capacitors that hold lethal electrical charges even when unplugged, repairs must always be handled by certified professionals. We safely repair magnetrons, diodes, switches, and control boards across Suffolk County.`
  }
];

export const LOCATIONS_LIST: LocationDetail[] = [
  {
    id: "huntington-ny",
    slug: "appliance-repair-huntington-ny",
    townName: "Huntington, NY",
    h1: "Appliance Repair in Huntington, NY",
    metaTitle: "Appliance Repair Huntington, NY | Local Technicians",
    metaDescription: "Local appliance repair in Huntington, NY for refrigerators, washers, dryers, ovens and more. Upfront quotes. Call (631) 505-5046.",
    targetKeyword: "Appliance Repair Huntington NY",
    shortDesc: "Serving historic Huntington Village, Huntington Station, Cold Spring Harbor, Dix Hills, Greenlawn, and Melville.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    neighborhoods: ["Huntington Village", "Huntington Station", "Greenlawn", "Halesite", "Cold Spring Harbor", "Melville", "South Huntington", "Dix Hills"],
    uniqueContext: "Huntington blends a walkable historic village with established North Shore neighborhoods, many with older kitchens, finished basements, and high-end Sub-Zero and Wolf appliances. Many homes have laundry in tight basement closets with long dryer vent runs where lint causes overheating.",
    servicesOffered: [
      { title: "Refrigerator & Freezer Repair in Huntington", slug: "/refrigerator-repair/", desc: "Repairing dual refrigeration, built-in columns, and basement beverage coolers." },
      { title: "Washer & Dryer Repair in Huntington", slug: "/washer-repair/", desc: "Resolving basement drainage issues, pump jams, and restricted dryer exhaust runs." },
      { title: "Oven, Stove & Cooktop Repair in Huntington", slug: "/oven-repair/", desc: "Specializing in vintage gas ranges as well as modern induction and pro cooktops." },
      { title: "Dishwasher & Disposal Repair in Huntington", slug: "/dishwasher-repair/", desc: "Custom plumbing adaptations for older North Shore historic home drain lines." },
      { title: "Luxury & Commercial Appliance Repair in Huntington", slug: "/luxury-appliance-repair/", desc: "Direct support for Huntington Village cafes, bistros, and Dix Hills estate kitchens." }
    ],
    faqs: [
      { q: "Do you service all neighborhoods in the Town of Huntington?", a: "Yes. From Cold Spring Harbor to Melville and Dix Hills, our service trucks cover every Huntington zip code daily." },
      { q: "Do you have experience with Sub-Zero, Wolf, and Viking in Huntington?", a: "Yes, North Shore estate kitchens frequently require certified luxury diagnostics, and our technicians carry specialized tools and OEM parts for high-end systems." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Refrigerator Repair in Huntington", url: "/refrigerator-repair/" },
      { anchor: "Washing Machine Repair in Huntington", url: "/washer-repair/" },
      { anchor: "Dryer Repair in Huntington", url: "/dryer-repair/" },
      { anchor: "Dishwasher Repair in Huntington", url: "/dishwasher-repair/" },
      { anchor: "Appliance Repair Smithtown", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Service Areas", url: "/service-areas/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "Town of Huntington Official Website", url: "https://www.huntingtonny.gov/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `Huntington blends a walkable historic village with established North Shore neighborhoods, many of them with older kitchens, finished basements and a mix of classic and high-end appliances. Appliance Repair in Suffolk County New York repairs the appliances Huntington households and businesses depend on daily, including refrigerators, freezers, washing machines, dryers, dishwashers, ovens, stoves, cooktops, and commercial kitchen units. Larger North Shore homes often run a main kitchen refrigerator plus a basement freezer or wine cooler, placing heavy demand on cooling systems throughout humid Long Island summers. Furthermore, laundry equipment placed in basements often vents through long runs, requiring expert diagnosis of thermal limits and airflow. Call (631) 505-5046 for fast, courteous service across Huntington.`
  },
  {
    id: "smithtown-ny",
    slug: "appliance-repair-smithtown-ny",
    townName: "Smithtown, NY",
    h1: "Appliance Repair in Smithtown, NY",
    metaTitle: "Appliance Repair Smithtown, NY | Local Technicians",
    metaDescription: "Local appliance repair in Smithtown, NY for refrigerators, washers, dryers, ovens and more. Upfront quotes. Call (631) 505-5046.",
    targetKeyword: "Appliance Repair Smithtown NY",
    shortDesc: "Serving Smithtown, Kings Park, St. James, Nesconset, Hauppauge, Fort Salonga, and Head of the Harbor.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    neighborhoods: ["Smithtown", "Kings Park", "St. James", "Nesconset", "Hauppauge", "Fort Salonga", "Head of the Harbor"],
    uniqueContext: "Smithtown is largely suburban with busy, family-sized homes running multiple appliances daily. High-volume family laundry puts constant strain on washer bearings and dryer heating elements, while five-burner stoves and double ovens see constant dinner use.",
    servicesOffered: [
      { title: "Family Kitchen Refrigerator Repair in Smithtown", slug: "/refrigerator-repair/", desc: "Fast fixes for French door and side-by-side models that fail to cool family groceries." },
      { title: "High-Volume Washer & Dryer Repair in Smithtown", slug: "/washer-repair/", desc: "Resolving drum bearing noises, spin problems, and electric dryer heating element burnouts." },
      { title: "Double Oven & Range Repair in Smithtown", slug: "/oven-repair/", desc: "Precise sensor calibrations and igniter replacements for busy family kitchens." },
      { title: "Dishwasher Repair in Smithtown", slug: "/dishwasher-repair/", desc: "Clearing hard water scale, spray arms, and replacing wash circulation pumps." },
      { title: "Hauppauge Commercial Equipment Service", slug: "/commercial-appliance-repair/", desc: "Rapid response for corporate cafeterias and local restaurants." }
    ],
    faqs: [
      { q: "How fast can you reach my home in Kings Park or St. James?", a: "Our technicians live and work right here in Smithtown, so we can typically offer same-day or early next-day appointments." },
      { q: "Do you offer warranties on parts installed in Smithtown homes?", a: "Yes, every repair is protected by our standard 90-Day Parts & Labor Guarantee." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Refrigerator Repair in Smithtown", url: "/refrigerator-repair/" },
      { anchor: "Washing Machine Repair in Smithtown", url: "/washer-repair/" },
      { anchor: "Dryer Repair in Smithtown", url: "/dryer-repair/" },
      { anchor: "Dishwasher Repair in Smithtown", url: "/dishwasher-repair/" },
      { anchor: "Appliance Repair Huntington", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Appliance Repair Islip", url: "/appliance-repair-islip-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "Town of Smithtown Official Website", url: "https://www.smithtownny.gov/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `Smithtown is largely suburban, with family-sized homes, busy kitchens and households that run several appliances every single day. When your refrigerator warms up, your washer stops spinning with a drum full of sports uniforms, or your double oven shuts off before a family gathering, you need honest, fast local service. Appliance Repair in Suffolk County New York brings specialized diagnostic equipment and OEM replacement parts directly to your Smithtown home.`
  },
  {
    id: "islip-ny",
    slug: "appliance-repair-islip-ny",
    townName: "Islip, NY",
    h1: "Appliance Repair in Islip, NY",
    metaTitle: "Appliance Repair Islip, NY | Local Technicians",
    metaDescription: "Local appliance repair in Islip, NY for refrigerators, washers, dryers, ovens and more. Upfront quotes. Call (631) 505-5046.",
    targetKeyword: "Appliance Repair Islip NY",
    shortDesc: "Serving Islip, East Islip, Bay Shore, Brentwood, Central Islip, Sayville, and Great River.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    neighborhoods: ["Islip", "East Islip", "Islip Terrace", "Bay Shore", "Brentwood", "Central Islip", "Sayville", "Great River"],
    uniqueContext: "Stretching along the South Shore from the Great South Bay to inland communities, Islip homes encounter coastal humidity and salt air which can accelerate corrosion on condenser coils and electrical terminals. Our techs know these localized failure patterns well.",
    servicesOffered: [
      { title: "Coastal Refrigerator & Freezer Repair in Islip", slug: "/refrigerator-repair/", desc: "Defrost cycle and condenser fan service combating humid South Shore weather." },
      { title: "Laundry Machine Repair in Islip", slug: "/washer-repair/", desc: "Fixing corrosion-induced drainage errors and dryer vent airflow blockages." },
      { title: "Bay Shore & Sayville Waterfront Cooking Equipment", slug: "/oven-repair/", desc: "Oven, range, and cooktop servicing for seaside homes and bustling downtown restaurants." },
      { title: "Dishwasher & Under-Sink Disposal Service in Islip", slug: "/dishwasher-repair/", desc: "Resolving drainage conflicts in diverse single-family and condo plumbing systems." }
    ],
    faqs: [
      { q: "Does coastal humidity affect refrigerators and dryers in Islip?", a: "Yes. In waterfront towns like Bay Shore and Sayville, humid marine air makes refrigerators run longer and creates sticky lint buildup in dryer ducts." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Refrigerator Repair in Islip", url: "/refrigerator-repair/" },
      { anchor: "Washing Machine Repair in Islip", url: "/washer-repair/" },
      { anchor: "Dryer Repair in Islip", url: "/dryer-repair/" },
      { anchor: "Dishwasher Repair in Islip", url: "/dishwasher-repair/" },
      { anchor: "Appliance Repair Babylon", url: "/appliance-repair-babylon-ny/" },
      { anchor: "Appliance Repair Patchogue", url: "/appliance-repair-patchogue-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "Town of Islip Official Website", url: "https://www.islipny.gov/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `Islip stretches across the South Shore, from waterfront communities near the Great South Bay to inland neighborhoods, with a wide mix of single-family homes, condos and rentals. Appliance Repair in Suffolk County New York repairs the appliances Islip households and businesses depend on daily, providing upfront quotes before work starts and a 90-day warranty on all repairs.`
  },
  {
    id: "babylon-ny",
    slug: "appliance-repair-babylon-ny",
    townName: "Babylon, NY",
    h1: "Appliance Repair in Babylon, NY",
    metaTitle: "Appliance Repair Babylon, NY | Local Technicians",
    metaDescription: "Local appliance repair in Babylon, NY for refrigerators, washers, dryers, ovens and more. Upfront quotes. Call (631) 505-5046.",
    targetKeyword: "Appliance Repair Babylon NY",
    shortDesc: "Serving Babylon Village, Lindenhurst, Copiague, West Babylon, North Babylon, Deer Park, and Wyandanch.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    neighborhoods: ["Babylon Village", "Lindenhurst", "Copiague", "West Babylon", "North Babylon", "Deer Park", "Wyandanch"],
    uniqueContext: "The Town of Babylon features tight residential village lots, historic bungalows, and compact apartments where appliances are often installed in tight enclosures with limited ventilation, requiring specialized compact diagnostics.",
    servicesOffered: [
      { title: "Compact & Built-In Refrigerator Repair in Babylon", slug: "/refrigerator-repair/", desc: "Diagnosing heat buildup and airflow strain in tight kitchen cabinetry." },
      { title: "Stackable Washer & Dryer Repair in Babylon", slug: "/washer-repair/", desc: "Fixing tight-space laundry units, short exhaust lines, and vibration dampeners." },
      { title: "Gas Range & Wall Oven Repair in Babylon", slug: "/oven-repair/", desc: "Replacing glow-bar igniters and safety gas valves in established South Shore homes." },
      { title: "Dishwasher Repair in Babylon", slug: "/dishwasher-repair/", desc: "Preventing subfloor water damage with high-pressure hose and sump seal replacements." }
    ],
    faqs: [
      { q: "Do you service stackable washers and dryers in Babylon apartments?", a: "Yes. Our technicians are specially equipped to service tight-space laundry closets and stackable washer/dryer combos." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Refrigerator Repair in Babylon", url: "/refrigerator-repair/" },
      { anchor: "Washing Machine Repair in Babylon", url: "/washer-repair/" },
      { anchor: "Dryer Repair in Babylon", url: "/dryer-repair/" },
      { anchor: "Dishwasher Repair in Babylon", url: "/dishwasher-repair/" },
      { anchor: "Appliance Repair Islip", url: "/appliance-repair-islip-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "Town of Babylon Official Website", url: "https://www.townofbabylon.com/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `The Town of Babylon covers busy South Shore villages and hamlets with a large share of well-kept single-family homes, plus apartments and rental units. In older and smaller homes, refrigerators are often tucked into tight spaces with little ventilation, causing overheating and extra compressor strain. Appliance Repair in Suffolk County New York brings fast, reliable, locally targeted repair services to your door.`
  },
  {
    id: "patchogue-ny",
    slug: "appliance-repair-patchogue-ny",
    townName: "Patchogue, NY",
    h1: "Appliance Repair in Patchogue, NY",
    metaTitle: "Appliance Repair Patchogue, NY | Local Technicians",
    metaDescription: "Local appliance repair in Patchogue, NY for refrigerators, washers, dryers, ovens and more. Upfront quotes. Call (631) 505-5046.",
    targetKeyword: "Appliance Repair Patchogue NY",
    shortDesc: "Serving Patchogue Village, East Patchogue, North Patchogue, Blue Point, Bellport, Medford, and Holbrook.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    neighborhoods: ["Patchogue Village", "East Patchogue", "North Patchogue", "Blue Point", "Bellport", "Medford", "Holbrook"],
    uniqueContext: "Patchogue is a lively waterfront village with a walkable downtown surrounded by neighborhoods of single-family homes, luxury condos, and apartments. Downtown restaurants and seaside homes require rapid appliance response.",
    servicesOffered: [
      { title: "Condo & Apartment Appliance Service in Patchogue", slug: "/refrigerator-repair/", desc: "Space-saving counter-depth refrigerators and combo laundry appliances." },
      { title: "Downtown Patchogue Commercial Kitchen Equipment", slug: "/commercial-appliance-repair/", desc: "Under-counter refrigeration, bar ice machines, and commercial line equipment." },
      { title: "Residential Oven & Stove Repair in Patchogue", slug: "/oven-repair/", desc: "Fixing gas ignition clicks, radiant elements, and convection baking faults." },
      { title: "Dishwasher & Garbage Disposal Repairs in Patchogue", slug: "/dishwasher-repair/", desc: "Eliminating standing water, motor hums, and drain pump blockages." }
    ],
    faqs: [
      { q: "Can you service restaurant refrigeration in downtown Patchogue?", a: "Yes, we prioritize commercial kitchen and restaurant refrigeration downtime throughout Patchogue's downtown dining district." }
    ],
    internalLinks: [
      { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
      { anchor: "Refrigerator Repair in Patchogue", url: "/refrigerator-repair/" },
      { anchor: "Washing Machine Repair in Patchogue", url: "/washer-repair/" },
      { anchor: "Dryer Repair in Patchogue", url: "/dryer-repair/" },
      { anchor: "Dishwasher Repair in Patchogue", url: "/dishwasher-repair/" },
      { anchor: "Appliance Repair Islip", url: "/appliance-repair-islip-ny/" },
      { anchor: "Contact Us", url: "/contact/" }
    ],
    externalLinks: [
      { anchor: "Town of Brookhaven Official Website", url: "https://www.brookhavenny.gov/", isExternal: true },
      { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
    ],
    fullContentText: `Patchogue is a lively waterfront village with a walkable downtown, surrounded by neighborhoods of single-family homes, condos and apartments. Downtown Patchogue's restaurants, bars and cafes need fast repair of commercial refrigeration, ice machines and cooking equipment, while local homeowners depend on prompt, honest appliance repairs.`
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: 1,
    question: "What areas of Suffolk County do you serve?",
    answer: "We provide complete appliance repair coverage throughout Suffolk County, Long Island, with daily dispatch routes across Huntington, Smithtown, Islip, Babylon, Patchogue, Brookhaven, Hauppauge, Riverhead, and surrounding hamlets. Call (631) 505-5046 to confirm technician arrival windows for your address.",
    category: "Service Area"
  },
  {
    id: 2,
    question: "How do I book an appliance repair appointment?",
    answer: "You can book directly by calling our dispatch line at (631) 505-5046 or by filling out our online service request form. Let us know the appliance brand, model number (if available), a brief description of the issue, and your preferred service date.",
    category: "Booking"
  },
  {
    id: 3,
    question: "Do you charge a diagnostic fee?",
    answer: "We charge a standard $89 diagnostic fee to perform a thorough physical and electrical diagnosis of your appliance. However, this diagnostic fee is 100% WAIVED and credited toward the total cost if you proceed with our recommended repair.",
    category: "Pricing"
  },
  {
    id: 4,
    question: "Will you provide a firm price before starting any repair work?",
    answer: "Yes, absolutely. We believe in transparent, upfront flat-rate pricing. After completing the diagnostic inspection, our technician provides a written quote detailing parts and labor. No work ever begins until you review and approve the quote.",
    category: "Pricing"
  },
  {
    id: 5,
    question: "How quickly can a technician arrive at my home?",
    answer: "We offer same-day service for calls placed before 12:00 PM, subject to route availability. For non-emergency calls, we guarantee next-day booking with convenient 2-to-3 hour arrival windows so you do not have to wait around all day.",
    category: "Scheduling"
  },
  {
    id: 6,
    question: "Which appliance brands do you service?",
    answer: "Our technicians service virtually all mainstream and luxury brands, including Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, KitchenAid, Bosch, Sub-Zero, Wolf, Viking, Thermador, Miele, Electrolux, Speed Queen, InSinkErator, and Scotsman.",
    category: "Brands"
  },
  {
    id: 7,
    question: "Do you repair commercial kitchen appliances?",
    answer: "Yes. In addition to residential repairs, we service commercial reach-in and walk-in refrigerators, commercial ice makers, ranges, ovens, and fryers for restaurants, bakeries, cafes, and corporate cafeterias across Suffolk County.",
    category: "Commercial"
  },
  {
    id: 8,
    question: "Should I repair or replace my broken appliance?",
    answer: "We follow the industry standard 50% rule: if a repair costs less than 50% of the price of a comparable new unit and the appliance has not reached the final third of its expected lifespan, repair is the more economical and sustainable choice. We always give you an honest appraisal.",
    category: "Repair vs Replace"
  },
  {
    id: 9,
    question: "What warranty do you provide on completed repairs?",
    answer: "All completed repairs come backed by our 90-Day Parts and Labor Guarantee. If the identical part fails or the same malfunction recurs within 90 days, we return and resolve it at zero additional charge to you.",
    category: "Warranty"
  },
  {
    id: 10,
    question: "Are your technicians licensed and insured in Suffolk County?",
    answer: "Yes. All technicians are fully insured, background-checked, EPA Section 608 Universal Certified for refrigerant handling, and licensed under Suffolk County Department of Consumer Affairs guidelines (#49281-H).",
    category: "Credentials"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-refrigerator-not-cooling",
    title: "Why Your Refrigerator Is Not Cooling: 7 Common Causes",
    excerpt: "Learn what causes a refrigerator to warm up suddenly, from clogged condenser coils to failed defrost sensors, and when to call a professional.",
    date: "October 18, 2026",
    readTime: "6 min read",
    category: "Refrigerator Repair",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    servicePageUrl: "/refrigerator-repair/",
    servicePageAnchor: "Refrigerator Repair Services",
    townPageUrls: [
      { anchor: "Huntington Refrigerator Repair", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Smithtown Refrigerator Repair", url: "/appliance-repair-smithtown-ny/" }
    ],
    content: `A refrigerator that stops cooling is one of the most urgent household emergencies. High-value groceries, meats, and dairy spoil quickly without proper temperatures. Here are the 7 most common culprits our Long Island technicians diagnose:

1. Dirty Condenser Coils: When pet dander and dust coat the condenser coils beneath or behind the fridge, the system cannot expel heat, causing the compressor to overheat and shut off.
2. Failed Evaporator Fan Motor: If the freezer is cold but the fresh food section is warm, the fan responsible for blowing cold air over the cooling coils has likely seized.
3. Frosted Over Evaporator Coils: A broken defrost heater or bimetal thermostat allows thick ice to build up on the cooling coils, choking off airflow.
4. Blocked Air Damper: The motorized damper controls air transfer between freezer and fridge. If it jams closed, the fresh food compartment will steadily warm up.
5. Faulty Start Relay or Capacitor: If your compressor clicks every couple of minutes but never turns on, the start relay has likely burned out.
6. Malfunctioning Thermistor / Temperature Sensor: Modern digital refrigerators rely on thermistors to gauge cabin temperature. A drifting sensor misleads the control board.
7. Sealed-System Refrigerant Leak: If the compressor runs continuously but neither the freezer nor fridge is cold, the sealed Freon system may have developed a pinhole leak.

For fast diagnosis across Suffolk County, call our team at (631) 505-5046 or schedule online.`
  },
  {
    slug: "why-is-freezer-frosting-up",
    title: "Why Is My Freezer Frosting Up? Causes and Fixes",
    excerpt: "Discover why frost and ice accumulate on freezer walls and shelves, how door gaskets fail, and how to protect stored foods.",
    date: "October 12, 2026",
    readTime: "5 min read",
    category: "Freezer Repair",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80",
    servicePageUrl: "/freezer-repair/",
    servicePageAnchor: "Freezer Repair Services",
    townPageUrls: [
      { anchor: "Huntington Freezer Service", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Smithtown Freezer Service", url: "/appliance-repair-smithtown-ny/" }
    ],
    content: `Frost buildup in a frost-free freezer indicates humid air is leaking inside or the automatic defrost cycle has failed. 

Common triggers include:
- Worn Magnetic Door Gaskets: Cracks or tears in the rubber seal allow warm, moisture-laden room air to be drawn into the sub-zero compartment, immediately freezing into snow-like frost.
- Failed Defrost Heater: Self-defrosting freezers turn on a heating rod beneath the coils every 8-12 hours. If this element burns out, ice chokes the coils.
- Defrost Termination Thermostat: This safety switch senses coil temperature. If it fails open, the heater never receives power.
- Blocked Defrost Drain: When melt water cannot drain out of the freezer floor during defrost, it pools, freezes, and creates a solid ice sheet under your lower basket.

If simple manual defrosting doesn't fix the issue within a few days, call our technicians for a comprehensive defrost circuit test.`
  },
  {
    slug: "washing-machine-not-draining-troubleshooting",
    title: "Washing Machine Not Draining? Check These Things First",
    excerpt: "Step-by-step checklist to troubleshoot standing water in your washing machine before calling a repair technician.",
    date: "September 28, 2026",
    readTime: "5 min read",
    category: "Washer Repair",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    servicePageUrl: "/washer-repair/",
    servicePageAnchor: "Washing Machine Repair Services",
    townPageUrls: [
      { anchor: "Islip Washer Repair", url: "/appliance-repair-islip-ny/" },
      { anchor: "Babylon Washer Repair", url: "/appliance-repair-babylon-ny/" }
    ],
    content: `Opening your washer door only to find soaked clothes sitting in murky water is frustrating. Before panicking, check these essential points:

1. Check the Coin Trap / Drain Filter: On modern front-load washers, a small access door at the bottom right houses a lint and coin filter. Unscrew it slowly over a shallow pan; you will frequently find coins, hairpins, or small socks trapped there.
2. Inspect the Drain Hose for Kinks: Ensure the washer hasn't been pushed back too hard against the wall, kinking the corrugated drain hose.
3. Test the Lid Switch / Door Lock: Washers will not initiate the drain or high-speed spin cycle if the control board senses the door is unlatched.
4. Listen to the Drain Pump Motor: When the drain cycle engages, do you hear a low humming sound without water moving? This indicates the impeller is jammed by a foreign object or the pump motor has burned out.

When in doubt, avoid running repeated cycles to prevent burning out your control board.`
  },
  {
    slug: "dryer-takes-too-long-fire-hazard",
    title: "Why a Dryer Takes Too Long to Dry (and When It Is a Fire Risk)",
    excerpt: "Understand why extended drying times waste energy and how lint blockages create serious fire hazards in Long Island homes.",
    date: "September 19, 2026",
    readTime: "6 min read",
    category: "Dryer Repair",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=800&q=80",
    servicePageUrl: "/dryer-repair/",
    servicePageAnchor: "Dryer Repair Services",
    townPageUrls: [
      { anchor: "Huntington Dryer Service", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Patchogue Dryer Repair", url: "/appliance-repair-patchogue-ny/" }
    ],
    content: `If your dryer requires two or three 60-minute cycles to dry normal bath towels, your dryer is sending an urgent warning sign. 

The primary cause is restricted exhaust airflow. When lint builds up in the interior exhaust ductwork or the exterior vent hood damper is stuck shut, moist air cannot escape. The dryer cabinet overheats, repeatedly tripping the cycling thermostat and high-limit safety cutoff.

Signs of an immediate fire danger:
- The top or sides of the dryer feel burning hot to the touch.
- You smell a sweet, burning, or scorched odor when the drum spins.
- The exterior vent flap on your home's siding does not open when the dryer runs.
- Clothes come out smelling musty and humid rather than fresh.

Have your dryer inspected, internal lint chambers vacuumed, and exhaust duct checked immediately.`
  },
  {
    slug: "dishwasher-not-cleaning-dishes",
    title: "Dishwasher Not Cleaning Dishes? Common Causes and Fixes",
    excerpt: "Why your dishwasher leaves cloudy glasses and stuck-on food, and how simple maintenance restores sparkling performance.",
    date: "September 04, 2026",
    readTime: "5 min read",
    category: "Dishwasher Repair",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    servicePageUrl: "/dishwasher-repair/",
    servicePageAnchor: "Dishwasher Repair Services",
    townPageUrls: [
      { anchor: "Smithtown Dishwasher Service", url: "/appliance-repair-smithtown-ny/" },
      { anchor: "Islip Dishwasher Service", url: "/appliance-repair-islip-ny/" }
    ],
    content: `Nothing defeats the purpose of an automatic dishwasher like having to re-wash dishes by hand. Here are the most common mechanical causes:

- Clogged Spray Arm Orifices: Hard water minerals and food particles get lodged inside the tiny spray holes of upper and lower spray arms, stopping rotation and water pressure.
- Blocked Sump Filter: Modern energy-efficient dishwashers use fine mesh filters instead of noisy macerator blades. If not cleaned monthly, trapped grease recirculates onto your glassware.
- Weak Wash Circulation Pump: If the dishwasher fills with water but you don't hear vigorous sloshing, the circulation motor capacitor or impeller is failing.
- Defective Water Inlet Valve: If the valve only lets in half the required water volume, spray arms cannot build sufficient pressure to clean properly.

Call us for professional diagnostics and genuine OEM replacement parts throughout Suffolk County.`
  },
  {
    slug: "gas-stove-burner-clicking-causes",
    title: "Gas Stove Burner Clicking or Won't Light: Causes and Solutions",
    excerpt: "Find out why your gas range clicks continuously, won't ignite, or produces a yellow flame.",
    date: "August 24, 2026",
    readTime: "4 min read",
    category: "Stove & Range Repair",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    servicePageUrl: "/stove-range-repair/",
    servicePageAnchor: "Stove & Range Repair Services",
    townPageUrls: [
      { anchor: "Huntington Gas Range Repair", url: "/appliance-repair-huntington-ny/" },
      { anchor: "Babylon Stove Repair", url: "/appliance-repair-babylon-ny/" }
    ],
    content: `A gas burner that clicks non-stop or fails to ignite with a steady blue flame is both annoying and a potential safety concern.

Top causes:
1. Moisture from Cleaning or Boil-Overs: If water seeps into the ceramic spark electrode, it conducts current continuously to the burner base, triggering rhythmic clicking. Let it dry thoroughly or use a hair dryer on cool.
2. Misaligned Burner Cap: If the heavy cast iron or brass burner cap is tilted even slightly, gas fails to reach the spark igniter pin.
3. Worn Spark Ignition Switch: The small rotary switch attached to the burner valve stem can short out internally.
4. Defective Spark Module: If clicking is weak or erratic across multiple burners, the spark box generator board has deteriorated.

If you ever detect strong unburned gas odors, ventilate the home immediately and call professional technicians.`
  }
];

export const CORE_BRANDS = [
  "Whirlpool", "GE Profile", "Samsung", "LG", "Bosch", 
  "Sub-Zero", "Wolf", "Viking", "KitchenAid", "Maytag", 
  "Frigidaire", "Thermador", "Miele", "Electrolux", "Speed Queen"
];
