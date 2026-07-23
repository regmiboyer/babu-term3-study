// Science — Ethical Energy strand (Term 3 Y9)
window.LESSONS_SCIENCE = [

// -------- WEEK 1 --------
{ title:"What is energy? Forms and conservation",
  diff:"easy", outcomes:["SC5-11PW"],
  read:`<p>Energy is the <b>capacity to do work</b> — to move things, heat things, light things, make sound, or drive chemical reactions. Every physical process involves energy changing form. Energy cannot be created or destroyed — only transformed. This is the <b>Law of Conservation of Energy</b>, and it is the single most important idea in this unit.</p>
<p><b>FORMS OF ENERGY</b>. Learn all eight. They come up constantly.<br>
- <b>Kinetic</b>: energy of movement. A rolling ball, wind, flowing water.<br>
- <b>Gravitational potential</b>: stored energy of height. A book on a shelf, water behind a dam.<br>
- <b>Elastic potential</b>: stored in stretched or compressed materials. A drawn bow, a compressed spring.<br>
- <b>Chemical</b>: stored in bonds between atoms. Food, petrol, batteries.<br>
- <b>Electrical</b>: energy carried by moving charges. Every plugged-in device.<br>
- <b>Thermal (heat)</b>: total kinetic energy of particles in a substance. Hot objects have more thermal energy than cold ones.<br>
- <b>Light (radiant)</b>: electromagnetic radiation. Sunlight, LED, laser.<br>
- <b>Sound</b>: vibrations travelling through a medium.<br>
- <b>Nuclear</b>: stored in atomic nuclei. Released in fission (uranium) and fusion (sun).</p>
<p><b>ENERGY TRANSFORMATIONS</b>. Every real process changes energy from one form to another. Eating cereal: chemical (food) → kinetic (movement) + thermal (body heat). Turning on a lamp: electrical → light + thermal (waste). Every transformation produces some thermal energy — usually unwanted. That's why nothing is 100% efficient.</p>
<p><b>UNITS</b>. The SI unit of energy is the <b>joule (J)</b>. Larger amounts use kilojoules (kJ = 1000 J), megajoules (MJ = 10⁶ J), and for electricity, the kilowatt-hour (kWh = 3.6 × 10⁶ J). Food labels use kJ. Electricity bills use kWh.</p>
<p><b>CONSERVATION EXAMPLE</b>. Drop a 1 kg ball from 2 m. Before drop: 20 J gravitational potential, 0 kinetic. Just before hitting ground: 0 potential, 20 J kinetic (converted). Bounces back to 1.5 m: 15 J potential — meaning 5 J became thermal and sound (heat + noise). Total energy still 20 J, just redistributed.</p>`,
  keyIdeas:["Energy is capacity to do work","Law of Conservation: energy cannot be created or destroyed","8 forms: kinetic, GPE, EPE, chemical, electrical, thermal, light, sound (plus nuclear)","Every transformation produces some waste thermal energy","SI unit: joule (J); electricity: kWh = 3.6×10⁶ J"],
  real:"You eat cereal (chemical) → your body converts to movement (kinetic) → muscles produce heat (thermal) → your feet make sound (sound). Same energy, four forms across breakfast.",
  activity:"For each appliance in your kitchen (fridge, kettle, microwave, toaster), name the ENERGY IN and the ENERGY OUT (useful + wasted). Which has the least waste?",
  flash:[
    ["Energy","The capacity to do work — move, heat, light, sound, or drive reactions."],
    ["Law of Conservation of Energy","Energy cannot be created or destroyed, only transformed from one form to another."],
    ["Kinetic energy","Energy of movement."],
    ["Gravitational potential energy","Stored energy due to height."],
    ["Chemical energy","Stored in bonds between atoms — food, fuels, batteries."],
    ["Joule","SI unit of energy. 1 kWh = 3.6 million joules."]
  ],
  quiz:[
    {q:"A stretched rubber band has:",a:1,opts:["Kinetic","Elastic potential","Thermal","Nuclear"],why:"Stored in stretched material."},
    {q:"Energy is measured in:",a:0,opts:["Joules","Kilograms","Amps","Metres"],why:"J is SI unit."},
    {q:"Conservation of energy means:",a:2,opts:["Energy is saved","Energy is stored","Energy cannot be created or destroyed","Energy is expensive"],why:"Total is fixed."},
    {q:"When a lamp is on, electrical energy becomes:",a:3,opts:["Only light","Only heat","Only sound","Light + heat (usually mostly heat)"],why:"Both, and heat dominates."},
    {q:"Which is stored energy?",a:1,opts:["Kinetic","Chemical","Sound","Light"],why:"In atomic bonds."},
    {q:"A book on a shelf has:",a:0,opts:["Gravitational potential energy","Kinetic energy","Chemical energy","Sound energy"],why:"Height above ground."},
    {q:"1 kilowatt-hour equals about:",a:2,opts:["3600 J","36,000 J","3,600,000 J","1000 J"],why:"1000 W × 3600 s."},
    {q:"Thermal energy in a substance is:",a:1,opts:["Chemical energy","Total kinetic energy of its particles","Nuclear energy","Sound"],why:"Hot = fast particles."},
    {q:"Solar panels convert:",a:0,opts:["Light → electrical","Heat → light","Electrical → chemical","Chemical → light"],why:"Photovoltaic effect."},
    {q:"A bouncing ball reaches lower each bounce because:",a:2,opts:["Gravity increases","Energy is created","Some energy becomes thermal + sound each bounce","Weight decreases"],why:"Not 100% efficient bounce."}
  ],
  home:"With a parent, list every energy source in your house (gas, electricity, batteries, food). Rank them by kJ per day. Which is biggest?"
},

// -------- WEEK 2 --------
{ title:"Electric current, voltage, resistance, and Ohm's Law",
  diff:"easy", outcomes:["SC5-11PW"],
  read:`<p>Electricity is <b>moving electric charge</b>. In wires, the charge carriers are electrons — negatively charged particles that drift when a voltage pushes them. Three quantities describe every circuit: <b>current</b>, <b>voltage</b>, and <b>resistance</b>. Understand these and 90% of electrical questions collapse into arithmetic.</p>
<p><b>WATER ANALOGY</b>. Think of a hose.<br>
- <b>Voltage (V, volts)</b> = water pressure. What pushes charge through the circuit.<br>
- <b>Current (I, amps A)</b> = flow rate. How much charge passes per second.<br>
- <b>Resistance (R, ohms Ω)</b> = how narrow the hose is. Higher resistance opposes flow.</p>
<p><b>OHM'S LAW</b>: <b>V = I × R</b>. The single most-used equation in this unit. Rearrangements:<br>
- I = V / R (current from voltage and resistance)<br>
- R = V / I (resistance from voltage and current)</p>
<p><b>WORKED EXAMPLE</b>. A 12 V battery drives current through a 4 Ω resistor.<br>
I = V / R = 12 / 4 = <b>3 A</b>.</p>
<p><b>REAL VALUES</b>. Household mains in Australia is 230 V AC. Torch battery is 1.5 V DC. USB is 5 V DC. A phone charging draws ~1–2 A. A hair dryer at 10 A. A car starter motor briefly draws several hundred amps.</p>
<p><b>WHY WIRES GET HOT</b>. Current through resistance dissipates energy as heat. Power lost = I² × R. Thick copper wires have very low resistance and stay cool. Thin high-resistance wires (like a toaster element) glow red hot on purpose. Faulty (loose or corroded) connections have unwanted resistance and can start fires.</p>
<p><b>SAFETY</b>. Mains voltage (230 V) drives lethal current through a body (a body has ~1000 Ω). I = 230 / 1000 = 0.23 A — more than enough to stop a heart. This is why cables have insulation, and why circuit breakers cut current above safe limits.</p>`,
  keyIdeas:["Current I = flow of charge (A); voltage V = pressure driving flow","Resistance R opposes current — measured in ohms","Ohm's Law: V = I × R (rearrange as needed)","Australian mains: 230 V AC. USB: 5 V DC","Wires heat up as I²R — thick wires stay cool"],
  real:"A phone charger printed '5V 2A' delivers up to 5 × 2 = 10 W of power. A laptop charger '19V 3A' delivers 57 W — that's why it charges faster.",
  activity:"For each of 3 chargers in your house, read the V and A. Multiply to get watts. Rank them.",
  flash:[
    ["Voltage (V)","Electrical 'pressure' that drives current through a circuit. Measured in volts."],
    ["Current (I)","Rate of charge flow. Measured in amperes (A)."],
    ["Resistance (R)","Opposition to current flow. Measured in ohms (Ω)."],
    ["Ohm's Law","V = I × R. Central equation of DC circuits."],
    ["Australian mains","230 V AC. Lethal if body contact."],
    ["Energy","Capacity to do work — 8 forms.",1]
  ],
  quiz:[
    {q:"If V = 10 and R = 2, I =",a:2,opts:["20","0.2","5","12"],why:"10/2."},
    {q:"Voltage is measured in:",a:0,opts:["Volts","Amps","Ohms","Watts"],why:"V."},
    {q:"Increasing resistance with fixed voltage causes current to:",a:1,opts:["Increase","Decrease","Stay same","Reverse"],why:"I=V/R."},
    {q:"USB delivers roughly:",a:0,opts:["5 V DC","12 V DC","230 V AC","1.5 V DC"],why:"Standard."},
    {q:"1 A × 1 V = ",a:1,opts:["1 Ω","1 W","1 J","1 kWh"],why:"Power in watts."},
    {q:"V = 24, I = 4. R =",a:0,opts:["6","20","96","28"],why:"24/4."},
    {q:"Household mains in Australia:",a:2,opts:["120 V","240 V","230 V","5 V"],why:"AS/NZS standard."},
    {q:"Ohm's Law is:",a:3,opts:["P = V × I","V = P × R","R = P × I","V = I × R"],why:"Standard form."},
    {q:"Circuit breaker function:",a:2,opts:["Increases voltage","Adds resistance permanently","Cuts current when it exceeds safe limits","Charges batteries"],why:"Safety cut-off."},
    {q:"Higher-resistance wire with same current:",a:0,opts:["Gets hotter (P = I²R)","Gets cooler","Stays same","Explodes"],why:"More energy dissipated."}
  ],
  home:"Look at 3 chargers at home. Read V and A ratings. Multiply for W. Which delivers most power?"
},

// -------- WEEK 3 --------
{ title:"Circuits — series, parallel, and drawing diagrams",
  diff:"easy", outcomes:["SC5-11PW"],
  read:`<p>A circuit is a closed loop that allows charge to flow. Components (cell, resistor, bulb, switch) connect to each other by wires so electrons can move from one terminal of the power source, through the components, and back to the other terminal. Break the loop anywhere, current stops.</p>
<p><b>CIRCUIT SYMBOLS</b>. Standard symbols save writing "battery" every time.<br>
- Cell: long line (+) / short line (−). Battery: multiple cells drawn in series.<br>
- Resistor: rectangle (or zigzag in older diagrams).<br>
- Bulb: circle with a cross.<br>
- Switch: line with a break.<br>
- Ammeter (A): circle A — measures current, connected in <b>series</b>.<br>
- Voltmeter (V): circle V — measures voltage, connected in <b>parallel</b>.</p>
<p><b>SERIES CIRCUITS</b>. Components on ONE loop. Current flows through every component in turn. Rules:<br>
- Same current through every component.<br>
- Voltage is shared across components (V_total = V1 + V2 + V3).<br>
- Break one component, all stop working.<br>
- Total resistance: R_total = R1 + R2 + R3 (add up).</p>
<p><b>PARALLEL CIRCUITS</b>. Components on separate branches. Current splits between branches. Rules:<br>
- Same voltage across every branch (equal to source).<br>
- Current splits: I_total = I1 + I2 + I3.<br>
- Break one branch, others still work.<br>
- Total resistance is LESS than the smallest branch (more paths = easier flow).</p>
<p><b>REAL EXAMPLES</b>. Cheap fairy lights are series — one dead bulb kills the string. Home wiring is parallel — unplugging a lamp doesn't kill the fridge. Cars use both: headlights in parallel with each other (one out, one still works), each in series with a fuse (fuse blows if bulb shorts).</p>
<p><b>DRAWING RULES</b>. Rectangular corners, no diagonals. Wires cross with a jump (little arch) or a dot for a connection. Left-to-right and top-to-bottom flow. Neat diagrams earn easy marks.</p>`,
  keyIdeas:["Circuit = closed loop for current","Series: one loop, same current, break one = all stop","Parallel: multiple loops, same voltage, break one = others work","Series total R = sum; parallel total R < smallest branch","Ammeter in series; voltmeter in parallel"],
  real:"Your fuse box wires everything at home in parallel — unplugging one appliance doesn't affect others. Series wiring in appliances (kettle heating element + thermostat) makes safety cutoffs work.",
  activity:"Draw a circuit with a battery, switch, and 2 bulbs in series. Then redraw with bulbs in parallel. What happens if you cover one bulb in each case?",
  flash:[
    ["Series circuit","Single loop. Current same throughout. Total resistance = sum. Break one = all stop."],
    ["Parallel circuit","Multiple branches. Voltage same across each. Currents add. Break one = others continue."],
    ["Ammeter","Measures current. Connected in series."],
    ["Voltmeter","Measures voltage. Connected in parallel."],
    ["Circuit diagram","Standardised drawing of components and connections."],
    ["Ohm's Law","V = I × R.",2]
  ],
  quiz:[
    {q:"In a parallel circuit, if one bulb burns out:",a:0,opts:["Others stay on","All go out","Battery drains twice as fast","Voltage doubles"],why:"Each branch independent."},
    {q:"In a series circuit with three 2Ω resistors, total R =",a:2,opts:["2","1","6","0.67"],why:"Sum."},
    {q:"Ammeter connects in:",a:1,opts:["Parallel with component","Series with component","Neither","Any"],why:"Measures current flow."},
    {q:"Voltmeter connects in:",a:0,opts:["Parallel with component","Series","Neither","Behind switch"],why:"Measures V across."},
    {q:"House wiring uses:",a:1,opts:["Series","Parallel","Neither","Random"],why:"Independence of appliances."},
    {q:"In parallel branches, total resistance is:",a:2,opts:["Sum of branches","Bigger than smallest","Smaller than smallest branch","Zero"],why:"More paths → easier flow."},
    {q:"Cheap fairy lights killed by one bulb are wired in:",a:0,opts:["Series","Parallel","Neither","Both"],why:"Break stops all."},
    {q:"Voltage across two parallel branches from a 12V battery:",a:2,opts:["6 V each","24 V each","12 V each","Depends on resistance"],why:"Same V, currents differ."},
    {q:"Symbol for switch is:",a:1,opts:["Circle with X","Line with a break","Zigzag","Long/short line"],why:"Open gap."},
    {q:"In series, current at three different points:",a:0,opts:["Is the same","Differs","Splits","Drops to zero"],why:"One loop = one current."}
  ],
  home:"Ask a parent to show you the household switchboard. Each circuit is a parallel branch. Sketch a rough map of which rooms are on which."
},

// -------- WEEK 4 --------
{ title:"Power, energy usage, and efficiency",
  diff:"mid", outcomes:["SC5-11PW"],
  read:`<p><b>POWER</b> is energy transferred per second. P = E / t. Measured in watts (W = joules/second). A 100 W bulb transfers 100 J every second. In circuits, P = V × I. A 230 V kettle drawing 10 A: P = 230 × 10 = 2300 W = 2.3 kW.</p>
<p><b>ENERGY USED</b> = power × time. E = P × t. In physics, joules. In electricity bills, kilowatt-hours (kWh). If a 100 W bulb runs 5 hours: E = 0.1 kW × 5 h = 0.5 kWh.</p>
<p><b>PRICE OF ELECTRICITY</b>. In NSW around 2025 the average residential tariff is $0.28–$0.40 per kWh, plus a daily supply charge. Peak periods cost more; off-peak (11pm–7am) cheaper. Solar households export at ~$0.05/kWh but pay $0.30 when drawing from grid — a 6× difference driving battery installation growth.</p>
<p><b>EFFICIENCY</b> = useful energy out ÷ total energy in × 100%. Nothing is 100% efficient. Typical values:<br>
- Incandescent bulb: 5% (95% waste heat).<br>
- LED bulb: 25–40%.<br>
- Petrol car engine: 20–25%.<br>
- Electric motor: 85–95%.<br>
- Solar panel: 15–22%.<br>
- Coal power plant: 33–40%.</p>
<p><b>WHY EFFICIENCY MATTERS</b>. A 5% efficient bulb wastes 95% of the electricity you pay for. LEDs use 80–90% less electricity for the same light output. Over the life of one LED bulb (~15 years), you save ~$100. Multiply by every bulb in a house.</p>
<p><b>SANKEY DIAGRAMS</b>. Arrows sized to energy flow. Wide arrow enters (input). Narrower useful arrow exits (useful output). Waste arrows branch off. Sum of output arrows = width of input arrow (conservation). Excellent for showing efficiency visually.</p>
<p><b>EMBODIED vs OPERATIONAL ENERGY</b>. Operational energy = what a device uses running. Embodied energy = what was needed to make and transport it. A solar panel's embodied energy is paid back in ~2 years of operation. A new car takes 10+ years' fuel savings to offset the embodied energy of building it — so 'buy a new efficient car' is not automatically the green choice.</p>`,
  keyIdeas:["Power P = E/t = V×I (watts)","Energy = P × t (joules or kWh)","Efficiency = useful out ÷ total in × 100%","LEDs 5–10× more efficient than incandescent","Sankey diagrams show flow proportional to width","Embodied energy = making + transporting the device"],
  real:"Fridge running at 150 W all year uses 150 × 24 × 365 / 1000 = 1314 kWh. At $0.30/kWh, cost ≈ $395/year. That's just for the fridge.",
  activity:"Fridge uses ~150W constantly. Over 24 hours: 150 × 24 = 3600 Wh = 3.6 kWh. At $0.30/kWh: $1.08/day. Calculate your family's annual fridge cost.",
  flash:[
    ["Power","Energy per second. P = E/t = V×I. Measured in watts."],
    ["Watt","One joule per second."],
    ["Kilowatt-hour (kWh)","Energy unit for electricity bills. 1 kWh = 3.6 × 10⁶ J."],
    ["Efficiency","Useful energy out ÷ total energy in × 100%."],
    ["Sankey diagram","Flow diagram with arrow widths proportional to energy amounts."],
    ["Embodied energy","Energy required to manufacture and transport a device — separate from operating energy."]
  ],
  quiz:[
    {q:"P = V × I. 230 V × 10 A =",a:2,opts:["23 W","230 W","2300 W","0.23 kW"],why:"Basic multiplication."},
    {q:"A 60 W lamp on for 5 hours uses:",a:2,opts:["12 Wh","60 Wh","300 Wh","3000 Wh"],why:"60 × 5."},
    {q:"1 kWh in joules:",a:3,opts:["3600","36000","360000","3,600,000"],why:"1000 W × 3600 s."},
    {q:"Efficiency of an incandescent bulb is roughly:",a:0,opts:["5%","25%","50%","90%"],why:"Mostly heat."},
    {q:"LED bulb efficiency roughly:",a:2,opts:["1%","5%","25–40%","90%"],why:"Much better than incandescent."},
    {q:"A 2 kW heater running 3 hours uses:",a:1,opts:["3 kWh","6 kWh","2 kWh","5 kWh"],why:"P×t."},
    {q:"Sankey diagram uses arrow WIDTH to show:",a:0,opts:["Energy amount","Time","Voltage","Direction only"],why:"Proportional flow."},
    {q:"Embodied energy of a product is:",a:2,opts:["Energy it uses running","Energy stored in it","Energy required to make and transport it","Same as operational"],why:"Manufacturing cost."},
    {q:"NSW residential electricity roughly:",a:1,opts:["$0.05/kWh","$0.28–0.40/kWh","$1.00/kWh","Free"],why:"Current tariff range."},
    {q:"Coal power plants are efficient at roughly:",a:2,opts:["10%","20%","35%","90%"],why:"Thermal loss."}
  ],
  home:"Find your electricity bill. Note price per kWh. Estimate the fridge's yearly cost using 150W × 24h × 365d ÷ 1000 × price."
},

// -------- WEEK 5 --------
{ title:"Renewable and non-renewable energy sources",
  diff:"mid", outcomes:["SC5-11PW","SC5-14LW"],
  read:`<p>Energy sources split into two big categories. <b>NON-RENEWABLE</b> sources deplete faster than they form — burning them uses a stock that took millions of years to build. <b>RENEWABLE</b> sources replenish naturally on human timescales.</p>
<p><b>NON-RENEWABLE</b>:<br>
- <b>Coal</b>: cheap, energy-dense, but emits ~1 kg CO₂ per kWh generated. Still dominant in Australia (~35% of grid in 2026).<br>
- <b>Natural gas</b>: ~0.5 kg CO₂/kWh. Cleaner than coal but methane leaks are a huge climate concern.<br>
- <b>Oil</b>: main transport fuel. Emits ~2.3 kg CO₂ per litre burnt.<br>
- <b>Nuclear</b>: uranium fission. Low emissions but produces radioactive waste. Australia has huge uranium reserves but no operating nuclear power.</p>
<p><b>RENEWABLE</b>:<br>
- <b>Solar photovoltaic (PV)</b>: sunlight → electricity via silicon panels. Efficiency 15–22%. Cost per kWh has dropped 90% since 2010 — now cheapest form in Australia.<br>
- <b>Wind</b>: turbines convert kinetic energy of wind to electricity. Large turbines produce 2–15 MW. Excellent when windy, zero when calm.<br>
- <b>Hydroelectric</b>: falling water spins turbines. Reliable, dispatchable, but geographically limited. Snowy 2.0 in NSW is Australia's biggest project.<br>
- <b>Geothermal</b>: heat from underground. Big in Iceland and NZ. Limited hot-spot geology in Australia.<br>
- <b>Biomass</b>: burning plants or biogas. Renewable if grown at replacement rate.</p>
<p><b>KEY CHALLENGES</b>:<br>
- <b>Intermittency</b>: solar produces zero at night; wind produces zero when calm. Requires storage (batteries, pumped hydro) or backup (gas peakers) to keep grid stable.<br>
- <b>Land use</b>: solar farms need ~2 hectares per MW. Wind farms are less intensive but visible.<br>
- <b>Materials</b>: solar panels need silicon + rare metals. Wind turbines need neodymium. Batteries need lithium + cobalt. Renewables aren't material-free.<br>
- <b>Grid</b>: existing electricity grids designed for centralised coal plants; renewables are distributed and variable.</p>
<p><b>AUSTRALIA'S GRID 2026</b>: roughly 40% renewable (largest single share is solar, then wind, then hydro), 35% coal, 15% gas, remainder oil and other. Trending renewable at ~2–3% per year.</p>`,
  keyIdeas:["Non-renewable: coal, gas, oil, uranium — finite, mostly emitting","Renewable: solar, wind, hydro, geothermal, biomass — replenishing","Solar PV is now cheapest per kWh in Australia","Intermittency: solar and wind aren't 24/7 — need storage or backup","Renewables need materials too — silicon, lithium, rare earths"],
  real:"A single 3 MW wind turbine can power ~2000 homes on windy days. On a still day it produces zero. That's why grids diversify: solar + wind + hydro + storage.",
  activity:"For each source (coal, gas, solar, wind, hydro): list one advantage and one disadvantage. That is your comparison table.",
  flash:[
    ["Non-renewable","Energy source depleting with use — coal, oil, gas, uranium."],
    ["Renewable","Energy source naturally replenished — sun, wind, water, geothermal, biomass."],
    ["Intermittency","Renewables that don't produce continuously (solar at night, wind when calm)."],
    ["Baseload","Steady minimum electrical demand — traditionally met by coal, gas, nuclear, or hydro."],
    ["Dispatchable","Energy source that can be turned on/off on demand — gas peakers, batteries, hydro."],
    ["Sankey diagram","Flow diagram with widths proportional to energy amounts.",4]
  ],
  quiz:[
    {q:"Main challenge of solar and wind:",a:2,opts:["Cost","Emissions","Intermittency — they don't produce constantly","Land"],why:"Central grid issue."},
    {q:"Which is renewable?",a:1,opts:["Coal","Wind","Uranium","Natural gas"],why:"Sun keeps wind blowing."},
    {q:"Coal emits roughly (per kWh):",a:2,opts:["0.01 kg CO₂","0.1 kg CO₂","1 kg CO₂","10 kg CO₂"],why:"Standard estimate."},
    {q:"Solar PV efficiency roughly:",a:1,opts:["1–5%","15–22%","50%","90%"],why:"Commercial panels."},
    {q:"Australian grid 2026 renewable share roughly:",a:2,opts:["10%","25%","40%","80%"],why:"Approximate."},
    {q:"Biggest source of renewable growth in Australia is:",a:0,opts:["Solar","Wind","Hydro","Geothermal"],why:"Rooftop + utility solar."},
    {q:"Dispatchable means:",a:0,opts:["Can be turned on/off on demand","Cheap","Renewable","Old"],why:"Grid flexibility."},
    {q:"Nuclear power in Australia currently:",a:2,opts:["Provides 30%","Provides 10%","Not currently operating for electricity","Provides 50%"],why:"None."},
    {q:"Materials needed for lithium batteries include:",a:1,opts:["Silicon only","Lithium and cobalt","Coal","Uranium"],why:"Chemistry."},
    {q:"Snowy 2.0 in NSW is what kind of project?",a:3,opts:["Solar","Wind","Nuclear","Pumped-hydro storage"],why:"Water reservoir storage."}
  ],
  home:"Check your electricity retailer's fuel mix online (or ask parent). What % of your household power comes from renewables?"
},

// -------- WEEK 6 --------
{ title:"Scientific method — hypothesis, variables, method design",
  diff:"mid", outcomes:["SC5-6WS"],
  read:`<p>Science works by testing ideas against evidence. The <b>scientific method</b> is not a rigid formula, but every good investigation follows the same logical spine: <b>question → hypothesis → method → data → analysis → conclusion → evaluation</b>.</p>
<p><b>HYPOTHESIS</b>. A testable prediction — not a wild guess. Structure: "If X, then Y, because Z." Example: "If we double the number of solar cells in series, then the output voltage will double, because voltages add in series." Must be falsifiable — data could prove it wrong.</p>
<p><b>VARIABLES</b>. Three kinds. Getting these clear is the single most examinable skill in Year 9 science.<br>
- <b>Independent variable (IV)</b>: what YOU change on purpose. Only ONE per investigation.<br>
- <b>Dependent variable (DV)</b>: what you MEASURE. Depends on the IV.<br>
- <b>Controlled variables</b>: everything else kept CONSTANT so it doesn't confuse results.</p>
<p><b>FAIR TEST</b>. An investigation where only the IV is changed, all controlled variables are actually held constant, and the DV is measured accurately. Fail any of these and you can't attribute changes in DV to the IV — you have confounding.</p>
<p><b>REPLICATION</b>. Repeat measurements at each IV setting (usually 3+ times). Averaging reduces random error. If replicate values are very different, something is uncontrolled — investigate before averaging.</p>
<p><b>SAFETY AND ETHICS</b>. Every method plan lists risks (electrical shock, hot surfaces, chemical splashes) and mitigation (insulated leads, safety glasses, controlled voltage). Ethical practice: no harm to animals, informed consent for surveys, honest reporting even of null results.</p>
<p><b>WORKED EXAMPLE — INVESTIGATION SETUP</b>. Question: does the length of a wire affect its resistance?<br>
- IV: wire length (10 cm, 20 cm, 30 cm, 40 cm, 50 cm).<br>
- DV: resistance (Ω), measured with a multimeter.<br>
- Controlled: wire material, wire thickness, temperature, connections, ambient conditions.<br>
- Replicates: 3 measurements per length, averaged.<br>
- Prediction: resistance increases linearly with length.</p>`,
  keyIdeas:["Hypothesis: 'If X then Y because Z' — testable and falsifiable","IV = you change; DV = you measure; controlled = kept constant","Fair test: only IV varies; controlled variables actually controlled","Replicate 3+ times per IV setting to reduce random error","List safety risks and mitigations before starting"],
  real:"Every clinical drug trial follows the same structure: IV = drug/no drug, DV = health outcome, controlled = age, sex, health status matched between groups. Rigour saves lives.",
  activity:"For your Term 3 investigation, list IV, DV, controlled variables, and 3 safety considerations. Write your hypothesis in 'if…then…because…' form.",
  flash:[
    ["Hypothesis","Testable prediction: 'If X then Y because Z.' Must be falsifiable."],
    ["Independent variable","What you change on purpose. Only one per investigation."],
    ["Dependent variable","What you measure. It changes in response to the IV."],
    ["Controlled variable","Kept constant so it doesn't confuse results."],
    ["Fair test","Only IV varies; controlled variables actually held constant; DV accurately measured."],
    ["Replication","Repeating measurements at each IV setting to reduce random error."]
  ],
  quiz:[
    {q:"A hypothesis should be:",a:2,opts:["A guess","A wish","A testable prediction","A fact"],why:"Must be falsifiable."},
    {q:"IV means:",a:1,opts:["Independent visual","Independent variable — what you change","Interior view","Instant volume"],why:"Standard term."},
    {q:"How many IVs per fair test?",a:0,opts:["One","Two","Any number","Zero"],why:"Isolate the effect."},
    {q:"Controlled variables are:",a:2,opts:["Changed","Measured","Kept constant","Random"],why:"Prevent confounding."},
    {q:"Replicate measurements are used to:",a:3,opts:["Waste time","Add complication","Prove hypothesis","Reduce random error and improve reliability"],why:"Averaging."},
    {q:"'If X then Y because Z' is the format for:",a:0,opts:["Hypothesis","Discussion","Conclusion","Method"],why:"Prediction with reason."},
    {q:"A confounded investigation:",a:2,opts:["Wins prizes","Is standard","Cannot attribute DV changes to the IV","Uses no variables"],why:"Multiple things changed."},
    {q:"Investigation of wire length effect on resistance: IV is:",a:1,opts:["Resistance","Wire length","Voltage","Time"],why:"You change length."},
    {q:"Investigation of wire length effect on resistance: DV is:",a:0,opts:["Resistance","Wire length","Time","Temperature"],why:"You measure R."},
    {q:"Safety planning happens:",a:2,opts:["After investigation","During data collection","Before starting","Never"],why:"Prevention."}
  ],
  home:"Read a science news article. Identify the IV, DV, and one controlled variable. If the article doesn't say — that's a red flag about the study."
},

// -------- WEEK 7 --------
{ title:"Investigation data — measurement, tables, graphs, reliability",
  diff:"mid", outcomes:["SC5-7WS","SC5-8WS"],
  read:`<p>Data quality decides investigation quality. Sloppy measurement wastes even the best-designed experiment. Three habits separate good data collection from bad: <b>precision, consistency, and honest recording</b>.</p>
<p><b>PRECISION</b>. Use instruments that can distinguish the differences you're looking for. If you want to detect a 0.1 V change, your voltmeter needs 0.01 V resolution. A metre ruler measuring to 0.5 mm won't detect a 0.1 mm difference.</p>
<p><b>CONSISTENCY</b>. Same reader, same instrument, same technique, same conditions across every measurement. Parallax error (viewing a scale from an angle) shifts readings — always eye-level. Environmental changes (temperature, humidity) affect many measurements — record them.</p>
<p><b>RECORDING</b>. Straight into a labelled table. Column headers include the quantity name AND unit — "voltage (V)" not just "V". Enter every reading, including anomalies. Never rewrite data "neatly" later — that introduces copying errors.</p>
<p><b>TABLES</b>. IV in leftmost column, DV in adjacent columns. If multiple replicates, use separate columns "Trial 1", "Trial 2", "Trial 3", then "Average". Uncertainty (e.g. ±0.05 V) can go in the header or beside each value.</p>
<p><b>GRAPHS</b>. Choose type based on data:<br>
- <b>Line graph</b> for continuous IV (temperature, time, length).<br>
- <b>Bar chart</b> for categorical IV (material types, brands).<br>
- <b>Scatter</b> when relationship isn't guaranteed to be linear.<br>
Every graph needs: title (specific — "Voltage vs Wire Length", not just "results"), axis labels with units, appropriate scale, clear plotted points, and if drawing a trend line, a line of best fit (not just dot-to-dot).</p>
<p><b>RELIABILITY vs VALIDITY</b>. These are different concepts:<br>
- <b>Reliability</b>: repeating gives similar results. Replication tests reliability.<br>
- <b>Validity</b>: measuring what you intended to measure. Depends on method design.<br>
A reliable but invalid experiment gives consistent nonsense. A valid but unreliable experiment gives noisy but truthful results.</p>
<p><b>ERROR SOURCES</b>. Random error (from noise, human variation) — reduced by replication. Systematic error (from calibration, method flaw) — reduced by better instruments and method. Outliers — investigate before discarding.</p>`,
  keyIdeas:["Precision: instrument resolution must exceed the change you want to detect","Consistency: same technique across all trials","Table: IV left, DV right, columns for trials + average","Line graph for continuous IV; bar for categorical","Reliability = repeatable; validity = measures what you meant","Random error → replicate; systematic error → recalibrate"],
  real:"Weather stations record temperature to 0.1°C every 10 minutes. A daily maximum of 34.2°C is more scientifically useful than 'hot' — precision enables comparison.",
  activity:"For your investigation, draft a data table with column headers (units included), then a blank graph with correct axis labels and scale. Take it to the experiment.",
  flash:[
    ["Precision","Fineness of measurement — instrument resolution must exceed the differences you want to detect."],
    ["Parallax error","Reading a scale from an angle rather than eye-level — introduces systematic error."],
    ["Reliability","Repeated measurements give similar results — tested by replication."],
    ["Validity","The experiment measures what it was designed to measure — depends on method design."],
    ["Line of best fit","Line drawn through scatter points to show overall trend — not dot-to-dot."],
    ["Random error","Small unpredictable variations — reduced by replication and averaging."],
    ["Hypothesis","'If X then Y because Z' — testable prediction.",6]
  ],
  quiz:[
    {q:"Reliability refers to:",a:1,opts:["Correctness","Consistency of repeated measurements","Cost","Speed"],why:"Repeatability."},
    {q:"Validity refers to:",a:2,opts:["Consistency","Cost","Whether you measured what you intended","Speed"],why:"Design integrity."},
    {q:"Replication mainly reduces:",a:0,opts:["Random error","Systematic error","Cost","Sample size"],why:"Averaging removes noise."},
    {q:"For continuous IV vs DV, use:",a:1,opts:["Bar chart","Line graph","Pie chart","No graph"],why:"Continuous relationship."},
    {q:"Parallax error is caused by:",a:2,opts:["Wrong instrument","Wrong material","Reading scales at an angle","Temperature"],why:"Eye position."},
    {q:"Axis labels should include:",a:3,opts:["Just the name","Just units","Colour","Name and units"],why:"Full information."},
    {q:"Systematic error is reduced by:",a:1,opts:["Replication","Better calibration or method redesign","More time","Larger sample"],why:"Structural fix."},
    {q:"An anomaly should be:",a:2,opts:["Deleted","Averaged","Investigated before discarding","Ignored"],why:"May be real signal."},
    {q:"Best graph for testing different materials as insulators:",a:0,opts:["Bar chart (categorical IV)","Line graph","Pie chart","Scatter"],why:"Discrete categories."},
    {q:"A reliable but invalid experiment produces:",a:2,opts:["Correct answers","Random results","Consistent but wrong answers","No results"],why:"Definition."}
  ],
  home:"Take 5 measurements of your own resting heart rate over 10 minutes. Note range. Are they reliable? What could improve them?"
},

// -------- WEEK 8 --------
{ title:"Analysing data — trends, uncertainty, and interpretation",
  diff:"hard", outcomes:["SC5-8WS"],
  read:`<p>Data becomes evidence only through analysis. Three questions to ask of every dataset: <b>what pattern is present, how confident am I in it, and what does it mean for the hypothesis?</b></p>
<p><b>IDENTIFYING TRENDS</b>. Plot the data. Look for direction: increasing, decreasing, stable, or curved. Look for relationships: linear (constant rate of change), proportional (passes through origin), or non-linear (exponential, quadratic, plateau).</p>
<p><b>LINEAR RELATIONSHIP</b>. Data points lie approximately on a straight line. In graphs, described by y = mx + c. Gradient tells you the rate. In our resistance-vs-length example, the gradient IS resistance per unit length.</p>
<p><b>PROPORTIONAL</b>. A linear relationship that passes through origin (c = 0). Doubling x doubles y. Ohm's Law V = IR is proportional if R is constant.</p>
<p><b>OUTLIERS AND ANOMALIES</b>. Data points that don't fit the trend. Do NOT delete without investigation. Common causes: measurement error, instrument fault, an actual real effect at that condition. Note them, describe them, explain them if you can.</p>
<p><b>UNCERTAINTY</b>. Every measurement has ± some range. When you say 5.0 V, you might really mean 5.0 ± 0.05 V (uncertainty comes from instrument precision or spread across replicates). Uncertainty tells the reader how confident to be in your numbers. Big uncertainty ranges = low confidence. Small ranges = high confidence.</p>
<p><b>EVALUATING THE HYPOTHESIS</b>. Does the data support the hypothesis? Two answers acceptable: <b>YES (with evidence)</b> or <b>NO (with evidence)</b>. A "yes" says "the observed trend matches the predicted trend within measurement uncertainty." A "no" says "the observed trend contradicts the prediction beyond what uncertainty can explain." Both are valid outcomes — a hypothesis proven wrong is still valuable science.</p>
<p><b>SOURCES OF DISCREPANCY</b>. When results don't match theory or hypothesis:<br>
- Random error (noise, human variation) — addressed with replication.<br>
- Systematic error (calibration, method) — addressed with instrument check or redesign.<br>
- The hypothesis itself was wrong — this is the interesting case.<br>
- The theory is incomplete — rare at Year 9 level, but real.</p>
<p><b>NEVER FUDGE</b>. If your data says X and theory predicts Y, report X. Adjust your discussion to explain the gap. Falsifying data to match expected results is scientific fraud — and pointless, because it teaches you nothing about your experiment.</p>`,
  keyIdeas:["Look for direction, shape, and relationship in every dataset","Linear = straight line; proportional = line through origin","Outliers: investigate, don't delete","Uncertainty tells the reader how much to trust numbers","A rejected hypothesis is a valid outcome","Fudging data is fraud — always report what you measured"],
  real:"COVID vaccine trials produced honest 'this candidate failed' results for many attempts before successes emerged. Publishing failures is essential science.",
  activity:"Take your dataset from the investigation. Plot it. Draw a line of best fit. Identify any anomalies. Write ONE sentence stating whether your hypothesis is supported.",
  flash:[
    ["Trend","Direction of change in data — increasing, decreasing, stable, or curved."],
    ["Linear relationship","Straight-line relationship between two variables — y = mx + c."],
    ["Proportional","Linear relationship passing through the origin — doubling x doubles y."],
    ["Outlier","Data point far from the trend — investigate before discarding."],
    ["Uncertainty","The range around a measured value — reflects instrument precision or replicate spread."],
    ["Falsification","Fabricating or altering data — scientific fraud."],
    ["Reliability","Repeated measurements give similar results.",7]
  ],
  quiz:[
    {q:"A hypothesis proven wrong is:",a:2,opts:["Failure","Useless","Valid science — still worth reporting","Fraud"],why:"Science advances by falsification."},
    {q:"Data passing through origin in linear graph is:",a:1,opts:["Non-linear","Proportional","Random","Curved"],why:"c=0."},
    {q:"Uncertainty ± indicates:",a:2,opts:["Fraud","Perfect measurement","Range of confidence in a measurement","Error"],why:"Precision indicator."},
    {q:"An outlier should be:",a:3,opts:["Deleted immediately","Averaged in silently","Ignored","Investigated and reported"],why:"Might be a signal."},
    {q:"Straight-line graph with c ≠ 0 shows:",a:0,opts:["Linear (but not proportional)","Proportional","Exponential","Random"],why:"y = mx + c."},
    {q:"Fudging data to match expected results is:",a:2,opts:["Standard","Encouraged","Scientific fraud","Optional"],why:"Ethics."},
    {q:"When observed contradicts predicted BEYOND uncertainty, the hypothesis is:",a:1,opts:["Confirmed","Rejected by the data","Random","Right anyway"],why:"Falsification."},
    {q:"Systematic error usually shows up as:",a:0,opts:["A consistent shift from expected","Random scatter","No error","Positive only"],why:"Same direction each trial."},
    {q:"Best evidence a relationship is linear:",a:2,opts:["One data point","Big numbers","Line of best fit through points with small scatter","Author's opinion"],why:"Visual + statistical."},
    {q:"'Doubling x doubles y' describes:",a:1,opts:["Linear only","Proportional","Curved","Random"],why:"Origin passing."}
  ],
  home:"Find any graph in a news article. Ask: does the trend hold across the whole range? Any anomalies? What's the uncertainty?"
},

// -------- WEEK 9 --------
{ title:"Ethical energy — decision-making with trade-offs",
  diff:"hard", outcomes:["SC5-9WS","SC5-14LW"],
  read:`<p>Ethical energy decisions balance <b>five competing goals</b>: cost, reliability, emissions, land use, and equity. No source is best on all five — every choice trades one off against another. Adult debate is often the difficulty of admitting these trade-offs honestly.</p>
<p><b>COST</b>. Levelised Cost of Energy (LCOE) is $ per MWh averaged over a plant's life. In Australia 2026: utility solar ~$50/MWh, wind ~$60/MWh, gas ~$100/MWh, coal ~$70/MWh (existing, more for new), nuclear ~$180+/MWh. Solar and wind are cheapest to build new.</p>
<p><b>RELIABILITY</b>. Not just uptime — the ability to match supply to demand at every moment. Coal and gas can dispatch reliably. Solar and wind can't. Batteries and pumped hydro can shift renewable production to when it's needed but add cost.</p>
<p><b>EMISSIONS</b>. Coal ~900 g CO₂ per kWh, gas ~450 g, solar ~50 g (lifetime, including manufacture), wind ~15 g, nuclear ~10 g, hydro ~10 g. Ten years ago coal was defended as necessary; today its cost + emissions combination is hard to defend.</p>
<p><b>LAND USE</b>. Solar farms need ~2 ha/MW. Wind farms need ~50 ha/MW but the land underneath can still farm. Nuclear plants need <1 ha/MW. Land conflicts with agriculture, ecology, and Indigenous heritage.</p>
<p><b>EQUITY</b>. Who benefits, who bears costs? Rooftop solar benefits homeowners (upfront capital, save on bills); renters miss out. Coal mine closures affect regional communities. Transition needs deliberate support for affected workers or you concentrate hardship on the least powerful.</p>
<p><b>DECISION FRAMEWORKS</b>. When comparing sources, list all five criteria in a table. Weight them according to your values (some communities weigh reliability highest; others emissions). Score each source 1–5 per criterion. Multiply by weight, sum. Highest total is the recommendation. Doing this openly forces honesty about what you value.</p>
<p><b>WHY 'ETHICAL' MATTERS</b>. Every energy decision affects people who didn't make it — future generations dealing with emissions, current workers losing jobs, coastal communities losing homes. Ethical means: consider all affected, be transparent about trade-offs, be honest about uncertainty, choose in a way you'd defend publicly.</p>`,
  keyIdeas:["Five criteria: cost, reliability, emissions, land use, equity","No source is best on all five — every choice is a trade-off","Solar/wind cheapest to build new; coal/gas more dispatchable","Emissions per kWh: coal ~900g; solar ~50g; nuclear ~10g","Equity: who benefits and who bears the cost","Ethical decisions are transparent about trade-offs and uncertainty"],
  real:"Germany closed nuclear power quickly after Fukushima. Emissions rose (more coal filled the gap) before renewables scaled. Well-intentioned decisions can produce mixed outcomes — that's why analysis matters.",
  activity:"Build a 5×5 decision table: rows = coal/gas/solar/wind/hydro; columns = cost/reliability/emissions/land/equity. Score each 1–5. What's your top pick? What's the closest runner-up?",
  flash:[
    ["Levelised Cost of Energy (LCOE)","$ per MWh averaged over a plant's operating life — enables fair source comparison."],
    ["Dispatchable","Can be turned on or off on demand — coal, gas, hydro, batteries. Solar and wind cannot."],
    ["Equity in energy","Who benefits and who bears the costs of an energy choice."],
    ["Ethical trade-off","Deciding between competing values (cost vs emissions vs reliability) transparently."],
    ["Just transition","Deliberate support for workers and communities affected by energy source change."],
    ["Trend","Direction of change in data.",8]
  ],
  quiz:[
    {q:"Coal emissions per kWh roughly:",a:2,opts:["10 g CO₂","100 g","900 g","5000 g"],why:"Standard estimate."},
    {q:"Solar PV lifetime emissions per kWh:",a:1,opts:["0 g","~50 g","500 g","1000 g"],why:"Manufacturing footprint."},
    {q:"Cheapest new-build source in Australia 2026:",a:2,opts:["Coal","Gas","Solar","Nuclear"],why:"LCOE."},
    {q:"Dispatchable means:",a:0,opts:["Can be turned on/off on demand","Renewable","Cheapest","Newest"],why:"Grid flexibility."},
    {q:"Equity in energy is about:",a:1,opts:["Same price everywhere","Who benefits and who bears cost","Same voltage","Same emissions"],why:"Fairness of outcomes."},
    {q:"Rooftop solar disproportionately benefits:",a:2,opts:["Renters","Coal miners","Homeowners with capital","Governments"],why:"Upfront cost + savings."},
    {q:"Nuclear emissions per kWh roughly:",a:0,opts:["~10 g","~500 g","~1000 g","Same as coal"],why:"Low operating emissions."},
    {q:"Just transition means:",a:1,opts:["Fast change","Deliberate support for workers and communities affected","Only clean energy","Deregulation"],why:"Fairness of change."},
    {q:"Best decision framework for competing sources:",a:2,opts:["Pick cheapest","Random","Weighted multi-criteria table","Ignore trade-offs"],why:"Transparent."},
    {q:"Germany's post-Fukushima experience shows:",a:3,opts:["Nuclear is best","Renewables scale instantly","Coal is fine","Well-intentioned decisions can produce mixed outcomes without careful transition planning"],why:"Real-world case."}
  ],
  home:"Discuss with a parent: is it fair to burn cheap coal today if the cost of emissions lands on your generation? Argue both sides."
},

// -------- WEEK 10 --------
{ title:"Investigation report — communicating scientific findings",
  diff:"hard", outcomes:["SC5-9WS"],
  read:`<p>A scientific report communicates your investigation so someone else can (a) understand what you did, (b) evaluate whether it was well done, and (c) reproduce it. Every section has a specific job. Skip any section and the report is weaker.</p>
<p><b>STRUCTURE</b> (Year 9 standard, in order):<br>
1. <b>Title</b> — specific, not vague.<br>
2. <b>Aim / Question</b> — one sentence stating what you tested.<br>
3. <b>Hypothesis</b> — 'If X then Y because Z.'<br>
4. <b>Variables</b> — IV, DV, controlled (list all controls).<br>
5. <b>Materials</b> — bulleted list.<br>
6. <b>Method</b> — numbered steps, past tense, precise.<br>
7. <b>Risk assessment</b> — hazards + mitigation.<br>
8. <b>Results</b> — data table + graph.<br>
9. <b>Analysis</b> — trend description + calculations.<br>
10. <b>Discussion</b> — supports/rejects hypothesis; sources of error; suggested improvements.<br>
11. <b>Conclusion</b> — brief answer to the aim.<br>
12. <b>References</b> — sources cited properly.</p>
<p><b>WRITING STYLE</b>. Third person, past tense. "The wire was connected to the multimeter" not "I connected the wire". Passive but not vague. Concise — every sentence must earn its place.</p>
<p><b>METHOD</b>. Enough detail that someone else could replicate exactly what you did. Include: quantities, temperatures, times, instrument settings. A common failing is writing "the wire was measured" — with what, how, to what precision?</p>
<p><b>DISCUSSION</b>. This is where marks are earned or lost. Don't just repeat results — INTERPRET them.<br>
- Does the pattern support your hypothesis? Say so with specific evidence.<br>
- What could have affected the results? Name sources of random and systematic error.<br>
- How would you improve the method next time? Specific fixes, not vague.<br>
- How do your results compare to theory or established science?</p>
<p><b>CONCLUSION</b>. One or two sentences answering the aim in light of the data. Not a summary — a directional answer. "The resistance of a copper wire was found to increase linearly with length, with a gradient of 0.5 Ω per 10 cm. This supports the hypothesis."</p>
<p><b>REFERENCES</b>. Any source used (textbook, website, video). Include author, year, title, publisher/URL. NESA has specific expectations — check your school's referencing guide. Uncited sources = plagiarism = malpractice.</p>
<p><b>MARKING RUBRIC</b>. Investigation reports are typically graded on: scientific accuracy, thoroughness of method, quality of analysis, honesty about limitations, and communication clarity. Even a "wrong" prediction can score full marks if honestly evaluated.</p>`,
  keyIdeas:["12-section standard structure: title through references","Third person, past tense — 'the wire was connected'","Method precise enough to replicate","Discussion interprets results — doesn't just repeat them","Conclusion answers the aim with specific evidence","Uncited sources = plagiarism"],
  real:"Peer-reviewed scientific journals follow the same structure. A Year 9 lab report is a scaled-down version of a Nature paper.",
  activity:"Draft the 12 headings on one page. Under each, write 2–3 dot points for your investigation. That's the skeleton — expand into full sentences afterwards.",
  flash:[
    ["Aim","Sentence stating what the investigation tested."],
    ["Method (report)","Numbered steps, past tense, precise enough that someone else could reproduce your work."],
    ["Discussion","Interpretation of results — support/reject hypothesis, sources of error, suggested improvements."],
    ["Conclusion (report)","Direct answer to the aim in light of the data — usually one or two sentences."],
    ["Reference","Cited source — author, year, title, publisher/URL. Uncited = plagiarism."],
    ["Standard scientific structure","Title → Aim → Hypothesis → Variables → Materials → Method → Risk → Results → Analysis → Discussion → Conclusion → References."],
    ["Ethical trade-off","Deciding between competing values transparently.",9]
  ],
  quiz:[
    {q:"Scientific reports are written in:",a:1,opts:["First person, present tense","Third person, past tense","First person, past","Third person, present"],why:"Convention."},
    {q:"The method should:",a:2,opts:["Be brief","Include your opinion","Enable reproduction","Match your friend's"],why:"Reproducibility."},
    {q:"Discussion mainly:",a:1,opts:["Repeats results","Interprets results — support hypothesis, errors, improvements","Adds jokes","Lists sources"],why:"Analytical section."},
    {q:"Conclusion length is typically:",a:0,opts:["1–2 sentences","1 page","10 sentences","No conclusion"],why:"Direct answer."},
    {q:"Uncited use of a source is:",a:2,opts:["Standard","Fine","Plagiarism","Encouraged"],why:"Malpractice."},
    {q:"A rejected hypothesis, when honestly reported, is:",a:3,opts:["Failure","Fraud","Only for weak students","Valid science worth full marks"],why:"Science advances by rejection."},
    {q:"Materials section format:",a:0,opts:["Bulleted list of items and quantities","Paragraph","Not needed","Only names"],why:"Scannable."},
    {q:"Best marks come from:",a:2,opts:["Length","Fancy words","Honest analysis and clear communication","Perfect results"],why:"Rubric."},
    {q:"'The multimeter was connected in series' is:",a:1,opts:["First person","Third person passive past","Present tense","Wrong tense"],why:"Standard style."},
    {q:"Improvements section should be:",a:0,opts:["Specific fixes to method or apparatus","Vague hope","About the teacher","Optional"],why:"Actionable."}
  ],
  home:"Draft the final version of your investigation report. Read it aloud once — sentences that trip you up need rewriting."
}
];
