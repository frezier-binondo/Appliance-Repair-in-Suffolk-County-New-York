const fs = require('fs');
const path = require('path');

// 9 Core services from the main service pages
const SERVICES = [
  {
    slug: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    applianceName: 'Refrigerator',
    image: 'https://plus.unsplash.com/premium_photo-1661342490985-26da70d07a52?auto=format&fit=crop&w=1200&q=80',
    brands: ['Sub-Zero', 'Viking', 'Thermador', 'Whirlpool', 'GE Profile', 'Samsung', 'LG', 'KitchenAid', 'Bosch', 'Frigidaire', 'Maytag', 'Electrolux'],
    commonProblemTemplates: [
      {
        title: 'Fresh Food Compartment Warming Up',
        desc: (town) => `In ${town} homes, failing evaporator fan motors, frost-choked cooling fins, or malfunctioning electronic defrost sensors frequently cause refrigerator compartments to rise above 40°F while the freezer remains cold.`
      },
      {
        title: 'Water Pooling Beneath Crisper Bins or On Flooring',
        desc: (town) => `Clogged or frozen defrost drain troughs often cause condensation runoff to back up beneath vegetable drawers, eventually spilling onto kitchen floors across ${town} residences.`
      },
      {
        title: 'Continuous Compressor Cycling & Buzzing',
        desc: (town) => `Dirty condenser coils combined with failing start relays or thermistors force the compressor to run nonstop, increasing electricity consumption and threatening premature sealed system failure in ${town}.`
      },
      {
        title: 'Excessive Frost Coating Freezer Walls',
        desc: (town) => `Damaged magnetic door gaskets or defective bimetal defrost thermostats allow warm Long Island humidity to infiltrate, creating rapid frost crystallization and restricted internal air circulation.`
      },
      {
        title: 'Ice Maker & Dispenser Flow Failures',
        desc: (town) => `Hard mineral buildup in dual solenoid water inlet valves or frozen water supply lines prevent ice production and cause erratic water dispenser dripping in ${town} kitchens.`
      }
    ],
    protocolSteps: (town) => [
      `Precision Thermal & Airflow Diagnostics: We evaluate evaporator coils, thermistors, defrost heaters, and damper controls in your ${town} home.`,
      `Firm Upfront Written Quote: Complete transparent pricing including genuine factory OEM parts before any work begins.`,
      `OEM Component Installation: Replacement of failing start relays, fan motors, sensors, or gaskets using inventory stocked on our mobile trucks.`,
      `Defrost & Sealed-System Calibration: Full cycle verification and temperature pull-down tests ensuring safe food preservation standards.`,
      `90-Day Parts & Labor Guarantee: Complete protection on all completed repairs with official documentation provided upon completion.`
    ],
    maintenanceTips: (town) => [
      `Clean condenser coils every 6 months to prevent compressor strain, especially in pet-friendly ${town} homes.`,
      `Verify internal temperatures remain strictly between 37°F–40°F for fresh food and 0°F for the freezer.`,
      `Inspect magnetic door seals annually using the paper test to prevent humid coastal air infiltration.`,
      `Replace internal water filters every 6 months to protect delicate ice maker valves from Suffolk County groundwater minerals.`
    ],
    faqTemplates: (town) => [
      {
        q: `How quickly can a technician repair a warm refrigerator in ${town}?`,
        a: `We prioritize cooling emergencies with same-day dispatch for calls booked before 12:00 PM across ${town}, and guarantee next-day service across all surrounding Suffolk County neighborhoods.`
      },
      {
        q: `Do you repair built-in luxury refrigerators like Sub-Zero in ${town}?`,
        a: `Yes. Our factory-trained technicians regularly service luxury built-in and French-door units from Sub-Zero, Thermador, Viking, and Bosch throughout ${town} estates.`
      },
      {
        q: `Is the diagnostic fee applied toward my repair in ${town}?`,
        a: `Yes. Our flat $89 diagnostic fee is 100% waived whenever you proceed with the recommended repair.`
      },
      {
        q: `What warranty do you provide on refrigerator repairs in ${town}?`,
        a: `Every completed repair is covered by our comprehensive 90-day parts and labor guarantee, backed by DCA License #49281-H.`
      }
    ]
  },
  {
    slug: 'freezer-repair',
    name: 'Freezer Repair',
    applianceName: 'Freezer',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1200&q=80',
    brands: ['Sub-Zero', 'Whirlpool', 'Frigidaire', 'GE Profile', 'Samsung', 'LG', 'KitchenAid', 'Bosch', 'Maytag', 'Amana'],
    commonProblemTemplates: [
      {
        title: 'Freezer Thawing or Temperatures Hovering Above 0°F',
        desc: (town) => `Faulty start relays, seized evaporator fans, or defective temperature control thermostats allow freezer temperatures in ${town} homes to climb, risking thousands in spoiled frozen food.`
      },
      {
        title: 'Heavy Snow-Like Frost Accumulating on Walls and Shelves',
        desc: (town) => `Worn perimeter door gaskets or a burnt-out defrost heater element allow coastal humidity to freeze instantaneously across internal surfaces in ${town} properties.`
      },
      {
        title: 'Clicking or Loud Humming from Rear Compressor',
        desc: (town) => `Overheated start capacitors or failing PTC relays attempt to engage the motor repeatedly, causing distinct audible clicks and thermal safety tripping.`
      },
      {
        title: 'Frozen Drain Pan Causing Interior Base Ice Sheets',
        desc: (town) => `A blocked defrost drain tube traps melting water inside the freezer floor during defrost cycles, forming solid ice sheets that impede lower storage drawers in ${town}.`
      }
    ],
    protocolSteps: (town) => [
      `Sub-Zero Temperature Testing: Calibrated digital probes verify coil temperature, thermostat resistance, and compressor amperage in your ${town} residence.`,
      `Detailed Upfront Pricing: Transparent flat-rate quote before any repair work commences.`,
      `Direct OEM Part Replacement: Installation of genuine manufacturer defrost heaters, sensors, timers, or fan assemblies.`,
      `Seal Integrity & Cycle Inspection: Complete verification of magnetic door gaskets and auto-defrost cycling.`,
      `90-Day Parts & Labor Guarantee: Documented coverage ensuring reliable sub-zero preservation.`
    ],
    maintenanceTips: (town) => [
      `Keep freezers at least 70% full to maintain thermal mass and reduce compressor cycling frequency in ${town}.`,
      `Never use sharp metal tools or ice picks to scrape frost; manual defrosting prevents punctured evaporator lines.`,
      `Vacuum rear and bottom compressor vents twice yearly to prevent thermal overloads.`,
      `Verify the freezer door seals completely flush without gasket pinch points or tears.`
    ],
    faqTemplates: (town) => [
      {
        q: `How long will food remain frozen if my freezer breaks down in ${town}?`,
        a: `A sealed, full freezer safely retains sub-freezing temperatures for 24 to 48 hours if doors remain shut. Contact our ${town} dispatch immediately to arrange emergency arrival.`
      },
      {
        q: `Do you service standalone chest and upright freezers in ${town}?`,
        a: `Yes, we service standalone chest freezers, upright deep freezers, and built-in column freezers across all ${town} neighborhoods.`
      },
      {
        q: `What causes a freezer to continuously click without cooling?`,
        a: `Continuous clicking usually signals a failed compressor start relay or overload protector. Our technicians carry OEM replacement assemblies for immediate truckside repair.`
      }
    ]
  },
  {
    slug: 'washer-repair',
    name: 'Washing Machine Repair',
    applianceName: 'Washing Machine',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
    brands: ['Whirlpool', 'LG', 'Samsung', 'Maytag', 'Speed Queen', 'GE Profile', 'Bosch', 'Electrolux', 'KitchenAid', 'Kenmore'],
    commonProblemTemplates: [
      {
        title: 'Washer Failing to Drain or Halting with Standing Water',
        desc: (town) => `Clogged coin traps, jammed drain pump impellers, or worn drain pump motors leave laundry soaking wet and trigger drainage error codes in ${town} homes.`
      },
      {
        title: 'Violent Shaking, Banging, or Walking During Spin Cycle',
        desc: (town) => `Worn suspension rods, snapped counterbalance springs, or failing tub bearing assemblies cause dramatic vibrations and loud thumping during high-speed extraction in ${town}.`
      },
      {
        title: 'Drum Not Spinning or Agitating Under Load',
        desc: (town) => `Broken drive belts, stripped motor couplers, worn direct-drive splines, or failed electronic motor control boards prevent wash basket rotation.`
      },
      {
        title: 'Water Leaking Onto Laundry Room Floors',
        desc: (town) => `Cracked internal tub-to-pump hoses, perished front-loader door bellows gaskets, or split water inlet valves cause dangerous puddle formation in ${town} laundry areas.`
      }
    ],
    protocolSteps: (town) => [
      `Mechanical & Electronic Fault Scan: We test drain pumps, drive motors, suspension rods, and door lock assemblies at your ${town} home.`,
      `Transparent Flat-Rate Estimate: Clear quote presented before any tool turns a bolt.`,
      `OEM Factory Part Replacement: Installation of heavy-duty OEM pumps, belts, shocks, and valves directly from our mobile parts stock.`,
      `High-Speed Spin & Balance Calibration: Full operational test under spin load to confirm zero leaks and stable vibration balance.`,
      `90-Day Parts & Labor Warranty: Full warranty coverage ensuring flawless laundry cycles.`
    ],
    maintenanceTips: (town) => [
      `Never overload the wash drum; leave at least 4 to 5 inches of free space beneath the top rim in ${town}.`,
      `Run a monthly self-clean cycle with white vinegar or washing machine descaler to prevent Long Island mineral buildup.`,
      `Leave front-loader doors slightly ajar between cycles to prevent mold and mildew inside door gaskets.`,
      `Inspect braided stainless steel fill hoses annually for signs of bubbling, kinks, or corrosion.`
    ],
    faqTemplates: (town) => [
      {
        q: `Can you repair front-load and top-load washers in ${town}?`,
        a: `Yes, we repair all configurations including high-efficiency front-loaders, top-load impeller units, commercial Speed Queens, and traditional agitator models throughout ${town}.`
      },
      {
        q: `Why is my washing machine displaying an OE, 5E, or drain error code?`,
        a: `Drainage codes typically point to a foreign object trapped in the drain pump filter or a seized pump motor. We clean traps and replace faulty pumps on our first visit.`
      },
      {
        q: `How quickly can you dispatch a washing machine repair technician to ${town}?`,
        a: `Calls placed before 12:00 PM qualify for same-day dispatch throughout ${town}, preventing piles of wet laundry from sitting unattended.`
      }
    ]
  },
  {
    slug: 'dryer-repair',
    name: 'Dryer Repair',
    applianceName: 'Dryer',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=80',
    brands: ['Whirlpool', 'LG', 'Samsung', 'Maytag', 'GE Profile', 'Electrolux', 'Speed Queen', 'Bosch', 'KitchenAid', 'Kenmore'],
    commonProblemTemplates: [
      {
        title: 'Dryer Tumbling Completely Cold Without Heat',
        desc: (town) => `Burned-out heating elements on electric dryers or defective igniters, flame sensors, and gas valve coils on gas dryers prevent drum air from warming in ${town} residences.`
      },
      {
        title: 'Clothes Requiring Multiple Cycles to Dry',
        desc: (town) => `Restricted internal blower housings, clogged external exhaust vents, or cycling thermostat drift severely reduce drying efficiency and present serious home fire hazards in ${town}.`
      },
      {
        title: 'Loud Squeaking, Grinding, or Rumbling Sounds',
        desc: (town) => `Worn drum support rollers, dry idler pulley bearings, or cracked rear drum glide bearings generate high-pitched squeals and grinding noises as the drum rotates.`
      },
      {
        title: 'Dryer Will Not Start or Shuts Down Prematurely',
        desc: (town) => `Tripped thermal fuses (often caused by airflow blockage), broken door latch switches, or snapped drum drive belts trigger safety shutoffs preventing operation in ${town}.`
      }
    ],
    protocolSteps: (town) => [
      `Thermal Safety & Airflow Inspection: We inspect thermal cutoffs, heating coils, gas solenoids, and exhaust static pressure in your ${town} home.`,
      `Itemized Written Estimate: Upfront pricing with no surprise service add-ons.`,
      `Factory OEM Replacement: Installation of heavy-duty thermal fuses, elements, igniters, rollers, or belts from truck stock.`,
      `Operational Heat & Safety Test: Full test run measuring exhaust temperature and verifying safety cutoffs.`,
      `90-Day Parts & Labor Warranty: Guaranteed peace of mind on all completed dryer repairs.`
    ],
    maintenanceTips: (town) => [
      `Clean the lint screen after every single load to ensure unrestricted exhaust airflow in ${town}.`,
      `Have your exterior dryer vent duct professionally inspected and cleaned at least once per year.`,
      `Replace flexible plastic or foil transition ducts with rigid or semi-rigid metal ducting.`,
      `Avoid running dryers when leaving your ${town} home or sleeping for maximum household safety.`
    ],
    faqTemplates: (town) => [
      {
        q: `Do you service both gas and electric dryers in ${town}?`,
        a: `Yes, our certified technicians are licensed under Suffolk DCA License #49281-H to safely diagnose and repair both gas and 240V electric clothes dryers in ${town}.`
      },
      {
        q: `Why does my dryer get hot but clothes still take 2 hours to dry?`,
        a: `This is almost always caused by restricted vent ductwork or a lint-packed blower housing trapping moisture inside the drum. We clear internal blockages and check exhaust airflow.`
      },
      {
        q: `Is a screeching dryer safe to continue running?`,
        a: `No. Screeching indicates failing drum support rollers or an idler pulley. Running it can damage the drive motor or tear the drum belt, leading to more extensive repairs.`
      }
    ]
  },
  {
    slug: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    applianceName: 'Dishwasher',
    image: 'https://images.unsplash.com/photo-1556185781-a47769abb7ee?auto=format&fit=crop&w=1200&q=80',
    brands: ['Bosch', 'KitchenAid', 'Whirlpool', 'Miele', 'GE Profile', 'Samsung', 'LG', 'Thermador', 'Maytag', 'Cove'],
    commonProblemTemplates: [
      {
        title: 'Standing Water Pooling in Bottom Basin After Cycle',
        desc: (town) => `Jammed drain impellers, blocked check valves, clogged disposal knockouts, or failed drain pump motors leave dirty greywater standing in ${town} dishwasher tubs.`
      },
      {
        title: 'Dishes Coming Out Grimy with Cloudy White Film',
        desc: (town) => `Clogged wash arm spray jets, failing circulation wash pumps, or low water temperatures combined with Long Island hard water minerals leave film and residue on glassware in ${town}.`
      },
      {
        title: 'Water Leaking Around Door or Baseboard Under Counter',
        desc: (town) => `Perished door perimeter gaskets, cracked lower spray arms splitting seams, or leaking water inlet valve connections threaten hardwood floors and cabinetry in ${town}.`
      },
      {
        title: 'Dishwasher Not Starting or Beeping with Error Codes',
        desc: (town) => `Defective door latch microswitches, float switches stuck in flood-protection mode, or faulty electronic control modules prevent wash cycles from initiating.`
      }
    ],
    protocolSteps: (town) => [
      `Hydraulic & Electrical Analysis: We inspect wash circulation pumps, drain solenoids, float switches, and spray arms in your ${town} home.`,
      `Clear Written Price: Transparent flat-rate quote before any replacement parts are installed.`,
      `OEM Factory Component Installation: Replacement of faulty valves, pumps, gaskets, or boards with genuine factory parts.`,
      `Leak Check & Wash Cycle Test: Full test cycle under wash pressure to ensure 100% watertight operation.`,
      `90-Day Parts & Labor Warranty: Guaranteed performance on all dishwasher repairs across ${town}.`
    ],
    maintenanceTips: (town) => [
      `Remove and rinse the fine mesh basin filter monthly under warm water to clear trapped food particles in ${town}.`,
      `Clean spray arm spray holes with a toothpick to clear calcium and hard water deposits.`,
      `Use a quality rinse aid to counteract Long Island water hardness and eliminate spots on glassware.`,
      `Inspect perimeter rubber door gaskets every 6 months for food residue or cracking.`
    ],
    faqTemplates: (town) => [
      {
        q: `Do you repair luxury European dishwashers like Bosch and Miele in ${town}?`,
        a: `Yes, our technicians specialize in whisper-quiet European dishwashers from Bosch, Miele, Thermador, and Cove throughout ${town} homes.`
      },
      {
        q: `Why is water sitting in the bottom of my dishwasher after it finishes?`,
        a: `Standing water typically stems from a clogged drain filter, kinked drain loop under the sink, or a burnt-out drain pump. We resolve drainage issues truckside.`
      },
      {
        q: `How much does dishwasher repair cost in ${town}?`,
        a: `We charge a standard $89 diagnostic fee which is 100% waived when you proceed with the repair. Our pricing is flat-rate and provided in writing before work begins.`
      }
    ]
  },
  {
    slug: 'oven-repair',
    name: 'Oven Repair',
    applianceName: 'Oven',
    image: 'https://images.unsplash.com/photo-1614622394738-7e6df45fdfcd?auto=format&fit=crop&w=1200&q=80',
    brands: ['Viking', 'Wolf', 'Thermador', 'GE Monogram', 'GE Profile', 'Whirlpool', 'KitchenAid', 'Bosch', 'Samsung', 'LG', 'Frigidaire'],
    commonProblemTemplates: [
      {
        title: 'Oven Fails to Heat or Takes 45 Minutes to Pre-Heat',
        desc: (town) => `Weakened ceramic glow-bar igniters that fail to draw enough amperage to open the safety gas valve or burned-out electric bake elements leave ovens cold in ${town} kitchens.`
      },
      {
        title: 'Uneven Baking and Wild Temperature Inaccuracies',
        desc: (town) => `Faulty RTD temperature sensor probes, miscalibrated electronic thermostat boards, or failed convection fan motors lead to burned crusts and raw centers in ${town} baked goods.`
      },
      {
        title: 'Oven Door Latch Stuck Locked After Self-Clean',
        desc: (town) => `Extreme heat during self-cleaning cycles often warps motorized door lock mechanisms or trips thermal high-limit safety switches, sealing the oven shut in ${town} homes.`
      },
      {
        title: 'Gas Odor or F-Code Error Alerts on Digital Display',
        desc: (town) => `Slow gas ignition or damaged electronic control boards cause safety lockouts, audible alarm beeps, and distinct unburned gas aromas requiring prompt certified evaluation.`
      }
    ],
    protocolSteps: (town) => [
      `Precision Thermal & Electrical Diagnostics: We test bake igniters, safety gas valves, RTD sensor probes, and heating elements in your ${town} home.`,
      `Transparent Written Estimate: Full flat-rate quote before any repair work starts.`,
      `OEM Factory Part Installation: Replacement of faulty igniters, elements, thermostats, or safety switches from mobile stock.`,
      `Pyrometer Temperature Calibration: Digital oven temperature calibration ensuring exact degree-level precision.`,
      `90-Day Parts & Labor Guarantee: Complete protection on all completed oven repairs in ${town}.`
    ],
    maintenanceTips: (town) => [
      `Avoid running high-heat self-cleaning cycles right before major holidays to prevent blown thermal fuses in ${town}.`,
      `Never cover the bottom oven floor or vent louvers with aluminum foil; it disrupts airflow and damages elements.`,
      `Clean door gasket seals with a damp sponge to maintain tight thermal retention.`,
      `Schedule a calibration check if baked items are consistently undercooked or burning unevenly.`
    ],
    faqTemplates: (town) => [
      {
        q: `Do you service commercial-style luxury ovens like Wolf and Viking in ${town}?`,
        a: `Yes, our technicians are certified to service high-end gas, dual-fuel, and electric wall ovens from Wolf, Viking, Thermador, and Dacor throughout ${town}.`
      },
      {
        q: `Why does my gas oven glow orange at the bottom but not ignite?`,
        a: `An igniter can still glow orange while failing to draw sufficient electrical amperage (typically 3.2 to 3.6 amps) to open the bi-metal gas safety valve. We replace weakened igniters truckside.`
      },
      {
        q: `How fast can you repair an oven in ${town}?`,
        a: `We provide same-day service for calls placed before 12:00 PM and guaranteed next-day dispatch across ${town} and neighboring Suffolk communities.`
      }
    ]
  },
  {
    slug: 'stove-range-repair',
    name: 'Stove & Range Repair',
    applianceName: 'Stove & Range',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    brands: ['Viking', 'Wolf', 'Thermador', 'GE Profile', 'Whirlpool', 'KitchenAid', 'Samsung', 'LG', 'Frigidaire', 'Bosch', 'JennAir'],
    commonProblemTemplates: [
      {
        title: 'Gas Surface Burners Clicking Continuously Without Lighting',
        desc: (town) => `Moisture trapped inside burner caps, misaligned spark electrode pins, or shorted spark ignition switches cause endless clicking throughout ${town} kitchens.`
      },
      {
        title: 'Electric Radiant Surface Elements Not Heating',
        desc: (town) => `Burned ribbon elements beneath smooth ceramic glass, oxidized terminal wire blocks, or broken infinite heat switches leave range burners unresponsive in ${town} homes.`
      },
      {
        title: 'Weak Yellow Burner Flame or Uneven Gas Output',
        desc: (town) => `Clogged burner orifice jets, incorrect gas-to-air shutter ratios, or grease buildup in flame spreader ports cause inefficient combustion and soot in ${town}.`
      },
      {
        title: 'Range Control Panel Buttons Unresponsive or Error Beeping',
        desc: (town) => `Short-circuited membrane keypads, heat-damaged relay boards, or power surge damage from coastal electrical storms prevent range controls from operating.`
      }
    ],
    protocolSteps: (town) => [
      `Gas & Electrical Range Diagnostic: We test spark modules, infinite switches, dual-ring elements, and burner valves in your ${town} kitchen.`,
      `Clear Written Flat-Rate Quote: Complete pricing provided before any parts are replaced.`,
      `Factory OEM Replacement: Direct installation of genuine spark igniters, switches, elements, or touch boards.`,
      `Flame Quality & Thermal Calibration: Gas leak testing and electric heat response verification.`,
      `90-Day Parts & Labor Warranty: Fully warranted service backed by Suffolk DCA License #49281-H.`
    ],
    maintenanceTips: (town) => [
      `Clean gas burner caps and ports with a soft toothbrush rather than submerging in standing water in ${town}.`,
      `Use heavy-gauge flat-bottomed cookware on ceramic glass ranges to prevent thermal glass shock or scratches.`,
      `Never use abrasive scourers or razor blades directly on touch control panels or printed indicator markings.`,
      `Ensure range vent hoods are clean to prevent hot grease vapor accumulation on range controls.`
    ],
    faqTemplates: (town) => [
      {
        q: `Do you repair freestanding ranges and slide-in models in ${town}?`,
        a: `Yes, we repair freestanding gas and electric ranges, slide-in luxury models, and commercial-depth dual-fuel ranges across ${town}.`
      },
      {
        q: `What should I do if my gas stove continues clicking after the burner lights?`,
        a: `Persistent clicking usually indicates a wet spark igniter or a defective spark switch on the burner valve stem. Turn the burner off and let our ${town} technician inspect the switch harness.`
      },
      {
        q: `Can you replace cracked ceramic glass range cooktops in ${town}?`,
        a: `Yes, we order and install factory OEM replacement ceramic glass maintops for all major brands throughout ${town}.`
      }
    ]
  },
  {
    slug: 'cooktop-repair',
    name: 'Cooktop Repair',
    applianceName: 'Cooktop',
    image: 'https://images.unsplash.com/photo-1578845425669-b6562f83b11e?auto=format&fit=crop&w=1200&q=80',
    brands: ['Thermador', 'Wolf', 'Viking', 'Bosch', 'GE Profile', 'KitchenAid', 'JennAir', 'Miele', 'Whirlpool', 'Samsung', 'LG'],
    commonProblemTemplates: [
      {
        title: 'Induction Elements Not Detecting Pans or Cutting Out',
        desc: (town) => `Failing induction generator inverter boards, cracked magnetic pan detection sensors, or cooling fan failures cause induction zones to shut down mid-cooking in ${town} homes.`
      },
      {
        title: 'Gas Burner Sparks But Gas Fails to Ignite',
        desc: (town) => `Clogged burner jet orifices, defective flame safety solenoid valves, or misdirected spark electrodes prevent gas ignition across ${town} cooktop islands.`
      },
      {
        title: 'Infinite Switch Knob Turns But Element Stays Cold',
        desc: (town) => `Burned internal switch contact points or broken internal wire harness connections cut power to electric heating coils under the cooktop surface in ${town}.`
      },
      {
        title: 'Cooktop Glass Hot Surface Indicator Light Won’t Turn Off',
        desc: (town) => `A shorted residual heat thermistor switch stays permanently closed, leaving the red warning indicator illuminated even when the cooktop has cooled completely.`
      }
    ],
    protocolSteps: (town) => [
      `Under-Counter Electrical & Gas Analysis: We inspect low-voltage controls, spark modules, generator boards, and supply lines in your ${town} kitchen.`,
      `Clear Itemized Price Quote: Upfront estimate presented before any replacement work starts.`,
      `Genuine OEM Component Installation: Installation of factory coils, modules, switches, or gas valves from mobile truck stock.`,
      `Full Element & Burner Stress Test: Verification of rapid boiling response, simmer precision, and safety cutoffs.`,
      `90-Day Parts & Labor Warranty: Guaranteed reliability on all cooktop repairs in ${town}.`
    ],
    maintenanceTips: (town) => [
      `Use dedicated induction-compatible magnetic cookware to prevent inverter board strain on induction cooktops in ${town}.`,
      `Wipe spills promptly with ceramic glass cooktop cleaner to prevent baked-on sugary residue.`,
      `Keep heavy cast-iron cookware from dropping onto glass edges where chips and stress cracks start.`,
      `Ensure under-counter cabinet space has proper airflow clearance for induction fan cooling.`
    ],
    faqTemplates: (town) => [
      {
        q: `Do you repair luxury induction cooktops from Thermador, Wolf, and Bosch in ${town}?`,
        a: `Yes, our technicians are specially certified in advanced induction circuitry and high-performance gas cooktops throughout ${town}.`
      },
      {
        q: `Why does my cooktop burner only ignite when another burner is turned on?`,
        a: `This is caused by a broken rotary switch harness on that specific valve stem. When you turn another knob, the spark module fires all electrodes, allowing the burner to light. We replace faulty switch harnesses.`
      },
      {
        q: `Can you service island cooktops with downdraft ventilation in ${town}?`,
        a: `Yes, we service integrated gas and electric cooktops paired with motorized pop-up downdraft exhaust systems across ${town}.`
      }
    ]
  },
  {
    slug: 'microwave-repair',
    name: 'Microwave Repair',
    applianceName: 'Microwave',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=1200&q=80',
    brands: ['Sharp', 'GE Profile', 'KitchenAid', 'Panasonic', 'Whirlpool', 'Bosch', 'Thermador', 'Viking', 'Samsung', 'LG'],
    commonProblemTemplates: [
      {
        title: 'Microwave Runs and Turns But Food Remains Completely Cold',
        desc: (town) => `Burned-out high-voltage magnetron tubes, shorted high-voltage diodes, or failed high-voltage capacitors prevent microwave energy generation in ${town} kitchens.`
      },
      {
        title: 'Arcing Sparks and Crackling Noises Inside Cavity',
        desc: (town) => `Burned mica waveguide covers, carbonized grease residue, or chipped interior cavity enamel cause electrical arcing and loud buzzing during heating in ${town}.`
      },
      {
        title: 'Microwave Stops Immediately When Start Button is Pressed',
        desc: (town) => `Defective primary or secondary door interlock microswitches fail to register that the door is closed, triggering the internal thermal fuse safety shutoff in ${town} homes.`
      },
      {
        title: 'Turntable Roller Not Rotating or Making Loud Grinding Noise',
        desc: (town) => `Stripped glass turntable drive motor couplers, broken turntable support rings, or seized motor windings cause uneven heating and clicking noises.`
      }
    ],
    protocolSteps: (town) => [
      `High-Voltage Safety Discharge & Diagnostic: Safe discharge of high-voltage capacitor followed by component testing in your ${town} home.`,
      `Upfront Flat-Rate Estimate: Clear transparent pricing before any repair begins.`,
      `Factory OEM Replacement: Installation of genuine magnetrons, high-voltage diodes, door switches, or touch keypads.`,
      `Microwave Radiation Leakage Test: Precision RF emission meter testing to verify zero microwave leakage and 100% door seal safety.`,
      `90-Day Parts & Labor Guarantee: Total peace of mind on all completed microwave repairs across ${town}.`
    ],
    maintenanceTips: (town) => [
      `Never run a microwave completely empty; without moisture to absorb energy, the magnetron can burn out in seconds in ${town}.`,
      `Wipe interior walls and the mica waveguide cover promptly to prevent food splatter from carbonizing and sparking.`,
      `Avoid using metal twist ties, metallic-rimmed plates, or aluminum foil inside the microwave cavity.`,
      `Replace the grease and charcoal filters on over-the-range microwave vent fans every 6 to 12 months.`
    ],
    faqTemplates: (town) => [
      {
        q: `Do you service over-the-range and built-in drawer microwaves in ${town}?`,
        a: `Yes, we repair built-in microwave drawers (like Sharp, Wolf, and Thermador), over-the-range convection microwaves, and speed ovens across ${town}.`
      },
      {
        q: `Is it worth repairing a built-in or over-the-range microwave in ${town}?`,
        a: `Yes! Built-in drawer and over-the-range microwaves often cost $800 to $2,500+ to replace with custom cabinetry fitting. Replacing a diode, switch, or magnetron is far more cost-effective.`
      },
      {
        q: `How do you ensure microwave safety after a repair?`,
        a: `Every microwave repair includes a calibrated RF radiation survey with an electromagnetic meter to certify zero radiation leakage around door seals before leaving your ${town} home.`
      }
    ]
  }
];

// The 5 target towns
const TOWNS = [
  {
    slug: 'huntington-ny',
    name: 'Huntington, NY',
    shortName: 'Huntington',
    neighborhoods: ['Huntington Village', 'Huntington Station', 'Cold Spring Harbor', 'Greenlawn', 'Halesite', 'Dix Hills', 'Melville', 'Lloyd Harbor'],
    localContext: 'From historic North Shore colonials and waterfront estates in Cold Spring Harbor to busy households in Huntington Village and Dix Hills, our technicians navigate Route 110 and Route 25A daily for prompt same-day service.'
  },
  {
    slug: 'smithtown-ny',
    name: 'Smithtown, NY',
    shortName: 'Smithtown',
    neighborhoods: ['Smithtown', 'Kings Park', 'St. James', 'Nesconset', 'Hauppauge', 'Fort Salonga', 'Head of the Harbor'],
    localContext: 'Serving North Shore residences along Route 25A, Jericho Turnpike, and Route 347. Homeowners in St. James, Kings Park, and Hauppauge trust our factory-trained technicians for reliable same-day appliance dispatch.'
  },
  {
    slug: 'islip-ny',
    name: 'Islip, NY',
    shortName: 'Islip',
    neighborhoods: ['Islip', 'East Islip', 'Islip Terrace', 'Bay Shore', 'Sayville', 'Brentwood', 'Central Islip', 'Oakdale', 'Great River'],
    localContext: 'Providing South Shore appliance repair across Montauk Highway and Sunrise Highway. Our technicians handle coastal humidity considerations and hard groundwater nuances common throughout Islip, Bay Shore, and Sayville.'
  },
  {
    slug: 'babylon-ny',
    name: 'Babylon, NY',
    shortName: 'Babylon',
    neighborhoods: ['Babylon Village', 'Lindenhurst', 'West Babylon', 'North Babylon', 'Copiague', 'Deer Park', 'Wyandanch'],
    localContext: 'Centralized along the Great South Bay, our mobile service vehicles travel Sunrise Highway, Route 109, and Deer Park Avenue to deliver fast, same-day diagnosis and OEM repairs for Babylon and Lindenhurst homes.'
  },
  {
    slug: 'patchogue-ny',
    name: 'Patchogue, NY',
    shortName: 'Patchogue',
    neighborhoods: ['Patchogue Village', 'East Patchogue', 'North Patchogue', 'Blue Point', 'Bellport', 'Medford', 'Holbrook'],
    localContext: 'From vibrant Patchogue Village and Blue Point to Medford and Holbrook along Nicolls Road and Sunrise Highway, our local service vans carry genuine replacement parts to restore essential kitchen and laundry appliances promptly.'
  }
];

const parsedItems = [];

for (const serv of SERVICES) {
  for (const town of TOWNS) {
    const serviceSlug = serv.slug;
    const townSlug = town.slug;
    const rawSlug = `/${serviceSlug}/${townSlug}/`;
    const h1 = `${serv.name} in ${town.name}`;
    const metaTitle = `${h1} | Local Technicians`;
    const metaDescription = `Need ${serv.name.toLowerCase()} in ${town.name}? Same-day service, genuine OEM parts, upfront flat rates & 90-day warranty. Call (631) 505-5046.`;
    const targetKeyword = `${serv.name} ${town.name}`;

    const shortDesc = `Expert ${serv.name.toLowerCase()} in ${town.name}. ${town.localContext}`;

    const symptomsIntro = `Appliances rarely fail without warning signs. Addressing subtle operational abnormalities—such as minor temperature shifts, slow cycle times, or unusual clicking sounds—prevents severe mechanical breakdowns and eliminates costly emergency losses in ${town.name}.`;

    const commonProblems = serv.commonProblemTemplates.map(p => ({
      title: p.title,
      desc: p.desc(town.name)
    }));

    const processSteps = serv.protocolSteps(town.name);
    const maintenanceTips = serv.maintenanceTips(town.name);
    const faqs = serv.faqTemplates(town.name);

    // 5 clean internal links: main service silo, town hub, related appliance, services hub, contact
    const internalLinks = [
      { anchor: `${serv.name} in Suffolk County`, url: `/${serviceSlug}/` },
      { anchor: `Appliance Repair in ${town.shortName}`, url: `/appliance-repair-${townSlug}/` },
      { anchor: `Suffolk County Appliance Repair Services`, url: `/appliance-repair-services/` },
      { anchor: `Our Service Areas`, url: `/service-areas/` },
      { anchor: `Schedule Service in ${town.shortName}`, url: `/contact/` }
    ];

    // Authoritative external links tailored per service category
    let externalLink = { anchor: 'Energy Star Appliance Guidelines', url: 'https://www.energystar.gov/products/appliances', isExternal: true };
    if (serviceSlug.includes('refrigerator') || serviceSlug.includes('freezer')) {
      externalLink = { anchor: 'FDA Refrigerated Food Storage Safety Standards', url: 'https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety', isExternal: true };
    } else if (serviceSlug.includes('dryer')) {
      externalLink = { anchor: 'U.S. Fire Administration Clothes Dryer Safety', url: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/clothes-dryer/', isExternal: true };
    } else if (serviceSlug.includes('washer') || serviceSlug.includes('dishwasher')) {
      externalLink = { anchor: 'EPA WaterSense Household Appliance Guidelines', url: 'https://www.epa.gov/watersense', isExternal: true };
    }

    parsedItems.push({
      id: `${serviceSlug}_${townSlug}`,
      slug: rawSlug,
      serviceSlug,
      townSlug,
      serviceName: serv.name,
      applianceName: serv.applianceName,
      townName: town.name,
      townShortName: town.shortName,
      h1,
      metaTitle,
      metaDescription,
      targetKeyword,
      image: serv.image,
      neighborhoods: town.neighborhoods,
      shortDesc,
      symptomsIntro,
      commonProblems,
      processSteps,
      brands: serv.brands,
      maintenanceTips,
      faqs,
      internalLinks,
      externalLinks: [externalLink]
    });
  }
}

// Write JSON
fs.writeFileSync(path.join(__dirname, '../src/data/serviceLocationsData.json'), JSON.stringify(parsedItems, null, 2), 'utf8');

// Write TS
const tsContent = `// Auto-generated 45 Service-by-Town Pages
// 9 core services across 5 Suffolk County towns
import serviceLocationsJson from "./serviceLocationsData.json";

export interface ServiceLocationPage {
  id: string;
  slug: string;
  serviceSlug: string;
  townSlug: string;
  serviceName: string;
  applianceName: string;
  townName: string;
  townShortName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  image: string;
  neighborhoods: string[];
  shortDesc: string;
  symptomsIntro: string;
  commonProblems: { title: string; desc: string }[];
  processSteps: string[];
  brands: string[];
  maintenanceTips: string[];
  faqs: { q: string; a: string }[];
  internalLinks: { anchor: string; url: string; isExternal?: boolean }[];
  externalLinks: { anchor: string; url: string; isExternal?: boolean }[];
}

export const SERVICE_LOCATION_PAGES: ServiceLocationPage[] = serviceLocationsJson as ServiceLocationPage[];

export function getServiceLocationPage(serviceSlug: string, townSlug: string): ServiceLocationPage | undefined {
  return SERVICE_LOCATION_PAGES.find(
    (p) => p.serviceSlug === serviceSlug && p.townSlug === townSlug
  );
}

export function getPagesForService(serviceSlug: string): ServiceLocationPage[] {
  return SERVICE_LOCATION_PAGES.filter((p) => p.serviceSlug === serviceSlug);
}

export function getPagesForTown(townSlug: string): ServiceLocationPage[] {
  return SERVICE_LOCATION_PAGES.filter((p) => p.townSlug === townSlug);
}

export function getAllServiceLocationSlugs(): { service: string; town: string }[] {
  return SERVICE_LOCATION_PAGES.map((p) => ({
    service: p.serviceSlug,
    town: p.townSlug,
  }));
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/serviceLocationsData.ts'), tsContent, 'utf8');

console.log(`Successfully generated ${parsedItems.length} pages in serviceLocationsData.json and serviceLocationsData.ts!`);
