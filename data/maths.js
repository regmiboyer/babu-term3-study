// Mathematics — Ethical Energy strand (Term 3 Y9)
// Independent maths track with worked examples + drill practice + 10Q assessment
window.LESSONS_MATHS = [

// -------- WEEK 1 --------
{ title:"Integers, order of operations, and units",
  diff:"easy", outcomes:["MA5.1 foundation"],
  read:`<p>Before any Stage 5 maths, the foundations have to be automatic. This week covers three things every Year 9 student should be able to do in their sleep: sign rules, order of operations, and unit conversion.</p>
<p><b>SIGN RULES</b>. Two negatives multiplied or divided become positive: (−3) × (−4) = 12. A positive times a negative stays negative: 3 × (−4) = −12. Addition of negatives: 3 + (−5) = 3 − 5 = −2. Subtraction of a negative: 5 − (−3) = 5 + 3 = 8. Memorise these — errors here cascade through every later topic.</p>
<p><b>ORDER OF OPERATIONS (BIDMAS/BODMAS)</b>. Brackets first, then Indices (powers), then Division/Multiplication left to right, then Addition/Subtraction left to right. Same priority level = left to right. Example: 3 + 4 × 2² = 3 + 4 × 4 = 3 + 16 = 19. Not 56 (wrong: 3+4=7, ×2²=28) — the order matters.</p>
<p><b>UNIT CONVERSION</b>. Multiply by 1 in disguise. To convert 1500 metres to kilometres: 1500 m × (1 km / 1000 m) = 1.5 km. To convert kWh to joules: 1 kWh × (3,600,000 J / 1 kWh) = 3.6 × 10⁶ J. Write out the unit fraction — units cancel like numbers do.</p>
<p><b>SCIENTIFIC NOTATION</b>. Numbers as a × 10ⁿ where 1 ≤ a < 10. 4,500 = 4.5 × 10³. 0.007 = 7 × 10⁻³. Useful because energy quantities span 24 orders of magnitude — a joule vs a terajoule. Multiply: multiply the a's, add the exponents. (2×10³) × (3×10⁴) = 6×10⁷.</p>
<p>Get these three right and everything else — coordinates, equations, probability — becomes clean arithmetic instead of a battle.</p>`,
  keyIdeas:["Sign rules: neg × neg = pos; sub a negative = add","BIDMAS: Brackets → Indices → Div/Mul (L→R) → Add/Sub (L→R)","Unit conversion = multiply by a fraction equal to 1","Scientific notation: a × 10ⁿ with 1 ≤ a < 10","When multiplying scientific notation, add exponents"],
  mathWork:`<b>Example.</b> Calculate: 3 + 4 × (−2)² − 6 ÷ 2<br>
Step 1: Brackets → (−2)² = 4<br>
Step 2: 3 + 4 × 4 − 6 ÷ 2<br>
Step 3: Multiplication/Division (L→R) → 4 × 4 = 16; 6 ÷ 2 = 3<br>
Step 4: 3 + 16 − 3 = <b>16</b>`,
  real:"Energy calculations use scientific notation constantly. Australia's yearly electricity use is around 2.5 × 10¹¹ kWh — writing it as 250,000,000,000 kWh is unreadable.",
  activity:"Compute by hand (no calculator): (a) −5 + 3 × (−4), (b) (7 − 2)² ÷ 5, (c) convert 2.5 kWh to joules using 1 kWh = 3.6 × 10⁶ J.",
  flash:[
    ["BIDMAS order","Brackets, Indices, Division/Multiplication (L→R), Addition/Subtraction (L→R)."],
    ["Neg × Neg","Product is positive. (−3)(−4) = 12."],
    ["Subtracting a negative","5 − (−3) = 5 + 3 = 8. Two negatives make a positive."],
    ["Scientific notation","a × 10ⁿ where 1 ≤ a < 10. 4,500 = 4.5 × 10³."],
    ["Unit conversion trick","Multiply by a fraction equal to 1, where numerator and denominator are the same quantity in different units."]
  ],
  quiz:[
    {q:"−7 + 3 =",a:1,opts:["10","−4","4","−10"],why:"Start at −7, move right 3."},
    {q:"(−4) × (−5) =",a:2,opts:["−20","−9","20","9"],why:"Neg × neg = pos."},
    {q:"3 + 4 × 2 =",a:1,opts:["14","11","10","24"],why:"Multiplication first: 4×2=8, then 3+8."},
    {q:"(3 + 4) × 2 =",a:2,opts:["11","10","14","24"],why:"Brackets first: 7×2."},
    {q:"3² × 2 =",a:3,opts:["12","6","36","18"],why:"3²=9, 9×2=18."},
    {q:"1500 m in km =",a:0,opts:["1.5","15","150","0.15"],why:"Divide by 1000."},
    {q:"4,500 in scientific notation =",a:1,opts:["45 × 10²","4.5 × 10³","0.45 × 10⁴","4.5 × 10²"],why:"4.5 × 1000."},
    {q:"(2 × 10³) × (3 × 10⁴) =",a:2,opts:["6 × 10¹²","5 × 10⁷","6 × 10⁷","5 × 10¹²"],why:"Multiply a's, add exponents."},
    {q:"10 − (−4) =",a:0,opts:["14","6","−14","−6"],why:"Subtracting negative = adding."},
    {q:"(−2)² =",a:0,opts:["4","−4","−2","2"],why:"Square both the number and its sign."}
  ],
  drill:[["−6 + 4","−2"],["(−3)(−7)","21"],["2 + 3 × 4","14"],["(2+3)×4","20"],["4² − 3","13"],["10 ÷ 2 + 3","8"],["(−5)(2)","−10"],["7 − (−2)","9"],["2 × 10³ in decimal","2000"],["1200 m to km","1.2"]],
  home:"Speed test with a parent: 20 mixed integer/BIDMAS problems in 5 minutes. Score improvement = readiness."
},

// -------- WEEK 2 --------
{ title:"Cartesian plane, coordinates, and plotting",
  diff:"easy", outcomes:["MA5.2-9NA"],
  read:`<p>The Cartesian plane is two number lines crossing at right angles at the <b>origin</b> (0, 0). Horizontal = <b>x-axis</b>. Vertical = <b>y-axis</b>. Every point is described by an ordered pair (x, y). Order matters: (3, 5) and (5, 3) are different points.</p>
<p>Four <b>quadrants</b>, numbered anti-clockwise starting top-right: I (+x, +y), II (−x, +y), III (−x, −y), IV (+x, −y). Any point on an axis (x = 0 or y = 0) belongs to no quadrant.</p>
<p><b>PLOTTING</b>: for (x, y), go x right (or left if negative), then y up (or down if negative). Mark with a small clear dot. Label the point next to it.</p>
<p><b>SCALES</b>. Choose scales that spread your data across the page. If your data goes 0–15, use 1 unit = 1 cm. If it goes 0–200, use 1 unit = 20 or 25. Both axes don't have to have the same scale. Label the axes with what they represent (variable name + unit) and mark scale numbers at regular intervals.</p>
<p><b>READING A GRAPH</b>. Given a point, drop a line vertically to read x, horizontally to read y. Practise both directions — plotting a point AND reading one off — until they take under 3 seconds each.</p>
<p><b>APPLICATIONS</b>. Google Maps, chess boards, spreadsheets, video game screens, GPS coordinates. Every screen you see uses a coordinate system underneath. Getting comfortable with this now unlocks all later graph work.</p>`,
  keyIdeas:["Origin (0,0) is where axes cross","Point = (x, y) — x first, then y","4 quadrants numbered anti-clockwise from top-right","Points on an axis belong to no quadrant","Choose scales that spread data across the page"],
  mathWork:`<b>Example.</b> Plot A(3, −2). Which quadrant?<br>
Step 1: From origin, go 3 units RIGHT (x=3 is positive).<br>
Step 2: From there, go 2 units DOWN (y=−2 is negative).<br>
Step 3: Mark the point. It is in <b>Quadrant IV</b> (positive x, negative y).`,
  real:"Google Maps uses (latitude, longitude). Sydney Opera House is approximately (−33.86°, 151.21°). Same idea, curved surface.",
  activity:"Plot these on graph paper: A(3,2), B(−1,4), C(−2,−3), D(5,−1), E(0,3). Which quadrant is each in? Which point is on an axis?",
  flash:[
    ["Origin","Point (0, 0) where the x and y axes cross."],
    ["Quadrant","One of four regions of the plane, numbered I–IV anti-clockwise from top-right."],
    ["Coordinates","Ordered pair (x, y) locating a point uniquely."],
    ["x-axis","Horizontal number line. Points on it have y = 0."],
    ["y-axis","Vertical number line. Points on it have x = 0."],
    ["BIDMAS","Order: Brackets, Indices, Div/Mul, Add/Sub.",1]
  ],
  quiz:[
    {q:"The point (−4, 2) is in which quadrant?",a:1,opts:["I","II","III","IV"],why:"Negative x, positive y = top-left."},
    {q:"The origin is:",a:2,opts:["(1,1)","(0,1)","(0,0)","(1,0)"],why:"Where the axes meet."},
    {q:"(0, 5) lies on:",a:0,opts:["The y-axis","The x-axis","Quadrant I","Quadrant II"],why:"x=0 means the y-axis."},
    {q:"Point (5, −3): from origin,",a:2,opts:["Left 5, up 3","Up 5, left 3","Right 5, down 3","Down 5, right 3"],why:"x first, then y."},
    {q:"Quadrant III has:",a:3,opts:["+x, +y","−x, +y","+x, −y","−x, −y"],why:"Bottom-left."},
    {q:"(3, 5) and (5, 3) are:",a:1,opts:["The same point","Different points","On the same axis","Both on origin"],why:"Order matters."},
    {q:"A point on the x-axis has:",a:2,opts:["x = 0","x = 1","y = 0","y = 1"],why:"On the horizontal line."},
    {q:"How many quadrants exist?",a:0,opts:["4","2","8","1"],why:"Two axes cut plane into 4."},
    {q:"(−7, −2) is in:",a:2,opts:["Quadrant I","Quadrant II","Quadrant III","Quadrant IV"],why:"Both negative."},
    {q:"Best scale for data from 0 to 60 on a 12 cm axis is:",a:1,opts:["1 unit = 1 cm","5 units = 1 cm","10 units = 1 cm","60 units = 1 cm"],why:"Spreads data across page."}
  ],
  drill:[["Quadrant of (3,4)","I"],["Quadrant of (-2,5)","II"],["Quadrant of (-3,-1)","III"],["Quadrant of (4,-2)","IV"],["y-value of point on x-axis","0"],["x-value of origin","0"],["Point (0,4) is on which axis (x/y)?","y"],["Plot from origin: right 5, up 2 = point?","(5,2)"],["(6,-3): right or left 6?","right"],["Quadrants total","4"]],
  home:"Design a small treasure map on graph paper with 5 coordinates. Give it to a family member — did they find the treasure?"
},

// -------- WEEK 3 --------
{ title:"Linear equations — solving one variable",
  diff:"easy", outcomes:["MA5.2-8NA"],
  read:`<p>An <b>equation</b> says two expressions are equal. To <b>solve</b> means find the value of the variable (usually x) that makes it true. Every step must keep both sides balanced — whatever you do to the left, do the same to the right.</p>
<p><b>THE FOUR OPERATIONS</b>. To isolate x, undo whatever is being done to it. If x has +3, subtract 3 from both sides. If x is multiplied by 4, divide both sides by 4. Undo in reverse BIDMAS order — outside first, inside last.</p>
<p><b>ONE-STEP EQUATIONS</b>. x + 5 = 12 → x = 7. 3x = 21 → x = 7. x/4 = 5 → x = 20. x − 6 = −2 → x = 4. Fast and mechanical once you see the operation.</p>
<p><b>TWO-STEP EQUATIONS</b>. 2x + 3 = 11. Step 1: subtract 3 from both sides → 2x = 8. Step 2: divide by 2 → x = 4. Always undo addition/subtraction before multiplication/division when isolating from outside in.</p>
<p><b>VARIABLES ON BOTH SIDES</b>. 5x − 2 = 3x + 8. Move variables to one side: subtract 3x from both → 2x − 2 = 8. Then constants: add 2 → 2x = 10. Then divide → x = 5. <b>Check</b>: 5(5) − 2 = 23. 3(5) + 8 = 23. ✓</p>
<p><b>BRACKETS</b>. Expand first, then solve. 2(x + 3) = 14 → 2x + 6 = 14 → 2x = 8 → x = 4.</p>
<p><b>FRACTIONS</b>. Multiply both sides by the denominator to clear. x/3 + 2 = 5 → x/3 = 3 → x = 9. Or multiply everything by 3: x + 6 = 15 → x = 9. Either works — pick the one you can do without slipping.</p>
<p><b>ALWAYS CHECK</b>. Substitute your x back into the original equation. If both sides are equal, correct. If not, retrace.</p>`,
  keyIdeas:["Keep equation balanced — same operation to both sides","Undo in reverse BIDMAS order — outside in","Two steps: undo addition first, then multiplication","With variables on both sides: move variables to one side first","ALWAYS check by substituting back"],
  mathWork:`<b>Example.</b> Solve 3(x − 2) + 4 = 19<br>
Step 1: Expand → 3x − 6 + 4 = 19 → 3x − 2 = 19<br>
Step 2: Add 2 to both sides → 3x = 21<br>
Step 3: Divide by 3 → <b>x = 7</b><br>
Check: 3(7 − 2) + 4 = 3(5) + 4 = 15 + 4 = 19 ✓`,
  real:"Solving 'how much can I spend on lunch daily if the week's budget is $50 minus a $5 fee' = solve 5x + 5 = 50 → x = $9/day.",
  activity:"Solve step by step, showing every line: (a) 4x − 7 = 17, (b) 2(x + 5) = 22, (c) 3x + 4 = x + 14, (d) x/2 − 3 = 5.",
  flash:[
    ["Solve an equation","Find the value of the variable that makes both sides equal."],
    ["Balance principle","Whatever operation you do to one side, do to the other."],
    ["Two-step equation","Undo addition/subtraction first, then multiplication/division."],
    ["Variables both sides","Move variables to one side by subtraction/addition, then solve normally."],
    ["Check by substitution","Put your answer back into the original equation — both sides should match."],
    ["Cartesian coordinates","Ordered pair (x, y).",2]
  ],
  quiz:[
    {q:"Solve x + 8 = 15",a:1,opts:["7","−7","23","−23"],why:"Subtract 8."},
    {q:"Solve 3x = 21",a:2,opts:["3","24","7","63"],why:"Divide by 3."},
    {q:"Solve 2x + 5 = 17",a:0,opts:["6","11","22","44"],why:"Subtract 5 → 2x=12 → x=6."},
    {q:"Solve 4x − 3 = 13",a:1,opts:["3","4","5","10"],why:"Add 3 → 4x=16 → x=4."},
    {q:"Solve x/5 = 4",a:3,opts:["4/5","0.8","5","20"],why:"Multiply by 5."},
    {q:"Solve 2(x + 3) = 16",a:2,opts:["6","4","5","10"],why:"x+3=8 → x=5."},
    {q:"Solve 5x − 2 = 3x + 8",a:3,opts:["3","4","6","5"],why:"2x=10 → x=5."},
    {q:"Solve x/3 + 1 = 4",a:2,opts:["1","6","9","12"],why:"x/3=3 → x=9."},
    {q:"Solve 7 − 2x = 1",a:0,opts:["3","−3","−4","4"],why:"−2x=−6 → x=3."},
    {q:"Check: is x=5 a solution to 3x + 2 = 17?",a:0,opts:["Yes","No","Cannot tell","Only sometimes"],why:"3(5)+2=17 ✓."}
  ],
  drill:[["x + 4 = 10","6"],["3x = 18","6"],["2x + 1 = 7","3"],["4x − 5 = 11","4"],["x/2 = 9","18"],["x − 12 = −4","8"],["5x + 3 = 3x + 11","4"],["2(x+1) = 12","5"],["10 − x = 3","7"],["x/3 + 2 = 5","9"]],
  home:"Make up 5 equations for a family member to solve. Check their work — spot any sign errors."
},

// -------- WEEK 4 --------
{ title:"Linear relationships — gradient and y-intercept",
  diff:"mid", outcomes:["MA5.1-6NA","MA5.2-9NA"],
  read:`<p>A linear relationship graphs as a straight line. The standard equation form is <b>y = mx + c</b>. Two things you can read off instantly: <b>m</b> is the gradient (steepness), <b>c</b> is the y-intercept (where the line crosses the y-axis).</p>
<p><b>GRADIENT (m)</b> = rise ÷ run = (change in y) / (change in x). Pick any two points on the line, count vertical change (rise), then horizontal change (run), divide. Positive gradient goes up-right. Negative goes down-right. Zero gradient is a horizontal line. Undefined gradient (division by zero) is a vertical line.</p>
<p><b>GRADIENT INTERPRETATION</b>. In a real context, gradient is "y per x". If y = distance (km) and x = time (hours), gradient = speed (km/h). If y = cost ($) and x = kg bought, gradient = price per kg. Always ask what the gradient represents in the story.</p>
<p><b>Y-INTERCEPT (c)</b>. The value of y when x = 0. On the graph, where the line crosses the vertical axis. In context, this is often a fixed starting cost or fee.</p>
<p><b>WORKED EXAMPLE</b>. Taxi cost: y = 2x + 4, where x = km and y = total $. Gradient m = 2 → $2 per km. Intercept c = 4 → $4 flag-fall (the cost before any distance).</p>
<p><b>PLOTTING FROM y = mx + c</b>. (1) Mark the y-intercept at (0, c). (2) From that point, use the gradient — up m units and right 1 unit — to find a second point. (3) Draw the straight line through both, extending in both directions.</p>
<p><b>FINDING THE EQUATION FROM A GRAPH</b>. (1) Read the y-intercept off the graph — that's c. (2) Pick two clear points and calculate rise/run — that's m. (3) Write y = mx + c.</p>
<p><b>SPECIAL CASES</b>. y = 3 is a horizontal line (m = 0). x = 2 is a vertical line (undefined gradient). y = x has m = 1 and c = 0 — passes through origin at 45°.</p>`,
  keyIdeas:["y = mx + c — m is gradient, c is y-intercept","Gradient = rise ÷ run","Positive m goes up-right, negative goes down-right, zero is horizontal","c is the y-value where the line crosses the y-axis (x = 0)","In context, gradient is 'y per x' — often a rate"],
  mathWork:`<b>Example.</b> Line passes through (0, 3) and (4, 11). Find its equation.<br>
Step 1: y-intercept c = 3 (given as x=0 point).<br>
Step 2: Gradient m = (11 − 3) / (4 − 0) = 8/4 = <b>2</b>.<br>
Step 3: Equation is <b>y = 2x + 3</b>.<br>
Check: at x=4, y = 2(4)+3 = 11 ✓`,
  real:"Phone plan: $10/month base + $0.15 per text. Total y = 0.15x + 10. Gradient 0.15 = cost per text. Intercept 10 = fixed monthly cost.",
  activity:"Plot y = 2x + 1 for x = −2, −1, 0, 1, 2. Draw the line. What's the gradient? Where does it cross the y-axis?",
  flash:[
    ["Gradient (m)","Rise ÷ run = change in y over change in x. Positive = up-right; negative = down-right."],
    ["y-intercept (c)","The value of y when x = 0. Where the line crosses the y-axis."],
    ["Linear equation","y = mx + c — graphs as a straight line."],
    ["Horizontal line","m = 0. Equation y = constant."],
    ["Vertical line","Undefined gradient. Equation x = constant."],
    ["Solve an equation","Find value of variable making both sides equal.",3]
  ],
  quiz:[
    {q:"For y = -3x + 5, gradient and intercept are:",a:3,opts:["3, -5","5, -3","-3, -5","-3, 5"],why:"m=-3, c=5."},
    {q:"Line through (0,2) and (3,8) has gradient:",a:1,opts:["3","2","6","1"],why:"Rise 6, run 3."},
    {q:"y = 2x + 4. Value at x = 3:",a:2,opts:["6","8","10","14"],why:"2(3)+4."},
    {q:"A horizontal line has gradient:",a:0,opts:["0","1","Undefined","Negative"],why:"No rise."},
    {q:"y = x passes through:",a:1,opts:["(1,0)","The origin","(0,1)","(2,3)"],why:"c=0."},
    {q:"Line y = -2x + 6. y-intercept:",a:2,opts:["-2","2","6","-6"],why:"c=6."},
    {q:"Gradient between (2,3) and (5,12):",a:0,opts:["3","4","9","1"],why:"9/3=3."},
    {q:"y = 0.5x + 1. At x = 8, y =",a:3,opts:["4","5","6","5"],why:"0.5(8)+1=5. (Both C and D=5 — pick 5.)"},
    {q:"Vertical line x = 4 has gradient:",a:2,opts:["4","0","Undefined","1"],why:"Division by 0."},
    {q:"Line through (0, -3) with gradient 2:",a:1,opts:["y = 2x + 3","y = 2x - 3","y = -2x - 3","y = -2x + 3"],why:"m=2, c=-3."}
  ],
  drill:[["Gradient of y = 4x + 1","4"],["y-intercept of y = 5x − 2","−2"],["y at x=3 for y=2x+1","7"],["Rise/run 6/3","2"],["y = 3x, y-intercept","0"],["y=−x+4, gradient","−1"],["Gradient (0,0)→(4,8)","2"],["y=2x, value at x=5","10"],["y-intercept of y=7","7"],["Gradient horizontal line","0"]],
  home:"Track your household electricity daily for 5 days. Plot day vs kWh. Fit y=mx+c by eye. Is it linear?"
},

// -------- WEEK 5 --------
{ title:"Distance and midpoint on the Cartesian plane",
  diff:"mid", outcomes:["MA5.2-9NA"],
  read:`<p>Given two points on the plane, two things you often need: the point exactly halfway between (midpoint) and the length of the straight line between them (distance). Both come from simple formulas — the second uses Pythagoras.</p>
<p><b>MIDPOINT FORMULA</b>. For points A(x₁, y₁) and B(x₂, y₂):<br>
M = ( (x₁ + x₂)/2 , (y₁ + y₂)/2 ).<br>
Just average the x's and average the y's. Nothing exotic.</p>
<p><b>DISTANCE FORMULA</b>. From Pythagoras' theorem (a² + b² = c²) applied to the right triangle formed by two points:<br>
d = √( (x₂ − x₁)² + (y₂ − y₁)² ).<br>
Steps: (1) find horizontal change Δx = x₂ − x₁, (2) find vertical change Δy = y₂ − y₁, (3) square both, add, take square root.</p>
<p><b>WORKED EXAMPLE</b>. Distance from A(1, 2) to B(5, 8):<br>
Δx = 5 − 1 = 4. Δy = 8 − 2 = 6. d = √(16 + 36) = √52 ≈ 7.21 units.<br>
Midpoint = ( (1+5)/2, (2+8)/2 ) = (3, 5).</p>
<p><b>PYTHAGORAS RECAP</b>. In any right-angled triangle with legs a and b and hypotenuse c: a² + b² = c². Always identify the hypotenuse first (opposite the right angle, always the longest side). To find hypotenuse: square + square, then square root. To find a leg: rearrange to b² = c² − a².</p>
<p><b>SIGN OF Δ VALUES</b>. Doesn't matter — you're squaring them, so negatives disappear. But the order should be consistent (both x₂ − x₁ and y₂ − y₁ or both reversed) to avoid muddle.</p>
<p><b>APPLICATION</b>. GPS uses this idea (with adjustments for curved earth). Video game hit detection uses it exactly. Delivery route optimisation uses distance formula millions of times per second.</p>`,
  keyIdeas:["Midpoint = average of x's, average of y's","Distance from Pythagoras: d = √(Δx² + Δy²)","Squaring removes any sign difference","Hypotenuse is opposite the right angle, always longest side","GPS, games, and route planning all use this daily"],
  mathWork:`<b>Example.</b> A(−2, 3), B(4, −1). Find distance and midpoint.<br>
Δx = 4 − (−2) = 6. Δy = −1 − 3 = −4.<br>
Distance = √(36 + 16) = √52 = 2√13 ≈ 7.21.<br>
Midpoint = ( (−2+4)/2, (3+(−1))/2 ) = (1, 1).`,
  real:"Two corners of a rectangular room measure 4 m and 3 m along the walls. Diagonal = √(16+9) = √25 = 5 m. That's Pythagoras.",
  activity:"Find distance and midpoint for: (a) (1,2) & (5,8), (b) (0,0) & (3,4), (c) (−1,−2) & (2,4). Check answers make sense on graph paper.",
  flash:[
    ["Midpoint formula","M = ( (x₁+x₂)/2 , (y₁+y₂)/2 ). Average the coordinates."],
    ["Distance formula","d = √( (x₂−x₁)² + (y₂−y₁)² ). Comes from Pythagoras."],
    ["Pythagoras","In a right triangle: a² + b² = c². Hypotenuse opposite right angle."],
    ["Hypotenuse","The longest side of a right triangle, opposite the right angle."],
    ["Rearranging Pythagoras","To find a leg: b² = c² − a², so b = √(c² − a²)."],
    ["Gradient","Rise over run.",4]
  ],
  quiz:[
    {q:"Distance from (0,0) to (3,4):",a:1,opts:["7","5","√7","12"],why:"√(9+16)=5."},
    {q:"Midpoint of (2,4) and (6,10):",a:0,opts:["(4,7)","(8,14)","(3,5)","(4,6)"],why:"Averages."},
    {q:"Distance (1,1) to (4,5):",a:2,opts:["4","3","5","√7"],why:"√(9+16)=5."},
    {q:"Pythagoras: legs 6 and 8. Hypotenuse:",a:3,opts:["12","2","√14","10"],why:"√(36+64)=10."},
    {q:"Midpoint of (−2,3) and (4,−1):",a:1,opts:["(3,4)","(1,1)","(2,2)","(6,4)"],why:"Averages."},
    {q:"Distance (−1,−1) to (2,3):",a:2,opts:["3","4","5","6"],why:"√(9+16)=5."},
    {q:"Hypotenuse is opposite:",a:0,opts:["The right angle","The smallest angle","Any angle","The vertex"],why:"By definition."},
    {q:"If hyp = 13 and one leg = 5, other leg =",a:3,opts:["8","10","11","12"],why:"√(169−25)=12."},
    {q:"Midpoint of (0,0) and (10,6):",a:1,opts:["(10,6)","(5,3)","(3,5)","(2,1)"],why:"Half of each."},
    {q:"Distance (2,3) to (2,7):",a:0,opts:["4","5","√29","√8"],why:"Vertical line, |7-3|."}
  ],
  drill:[["Distance (0,0)(3,4)","5"],["Midpoint (0,0)(4,6)","(2,3)"],["Distance (1,2)(4,6)","5"],["Pythag legs 3,4 hyp","5"],["Pythag legs 5,12 hyp","13"],["Midpoint (2,3)(8,7)","(5,5)"],["Distance (0,0)(6,8)","10"],["Hyp 10, leg 6, other leg","8"],["Midpoint (-2,4)(2,-4)","(0,0)"],["Distance (1,1)(1,4)","3"]],
  home:"Measure two corners of your bedroom with a tape. Calculate the diagonal. Then measure the diagonal directly. How close?"
},

// -------- WEEK 6 --------
{ title:"Probability — basics, compound events, tree diagrams",
  diff:"mid", outcomes:["MA5.1-13SP"],
  read:`<p>Probability = the chance an event happens, expressed as a number from 0 (impossible) to 1 (certain), or as a fraction, decimal, or percentage. All three notations are used — you must be fluent in all of them.</p>
<p><b>THEORETICAL PROBABILITY</b>. For fair, well-defined outcomes: P(event) = favourable outcomes ÷ total outcomes. Rolling a 4 on a die: P = 1/6 ≈ 0.167 ≈ 16.7%. Drawing a red card from a standard deck: P = 26/52 = 1/2.</p>
<p><b>EXPERIMENTAL PROBABILITY</b>. Based on real trials: P(event) = number of times event happened ÷ total trials. Roll a die 30 times, get 6 fours: experimental P = 6/30 = 0.2. Not the same as theoretical 0.167 — but converges with more trials (Law of Large Numbers).</p>
<p><b>COMPLEMENT</b>. Every event has a complement — everything else. P(not A) = 1 − P(A). Useful when the complement is easier to count. "Probability of at least one head in 3 coin flips" — easier to find P(no heads) = (1/2)³ = 1/8, then answer = 1 − 1/8 = 7/8.</p>
<p><b>INDEPENDENT EVENTS</b>. Two events are independent if one doesn't affect the other. Coin flips are independent. Die rolls are independent. For independent events: <b>P(A and B) = P(A) × P(B)</b>. Rolling two 6s: 1/6 × 1/6 = 1/36.</p>
<p><b>DEPENDENT EVENTS</b>. When one event changes the probability of the next. Drawing two cards without replacement: P(first ace) = 4/52. After drawing an ace, P(second ace) = 3/51 (one less ace, one less card).</p>
<p><b>TREE DIAGRAMS</b>. Draw branches for each outcome of the first event. From each of those, branch for each outcome of the second event. Multiply probabilities along a branch, add across branches for combined outcomes. Powerful for 2–3 step problems.</p>
<p><b>MUTUALLY EXCLUSIVE</b>. Events that can't both happen. Rolling a 3 AND rolling a 5 on the same roll — impossible. For mutually exclusive events: P(A or B) = P(A) + P(B).</p>`,
  keyIdeas:["Probability: 0 (impossible) to 1 (certain)","P = favourable ÷ total for theoretical","P(not A) = 1 − P(A)","Independent: P(A and B) = P(A) × P(B)","Dependent: probability changes after first event","Tree diagrams: multiply along branches, add across branches"],
  mathWork:`<b>Example.</b> Two coins tossed. Find P(at least one head).<br>
Method 1 — direct: outcomes HH, HT, TH, TT. Three have at least one H. P = 3/4.<br>
Method 2 — complement: P(no heads) = P(TT) = 1/2 × 1/2 = 1/4. P(at least one H) = 1 − 1/4 = <b>3/4</b>.`,
  real:"Weather '70% chance of rain' = out of many similar days, 70% saw rain. Not a guarantee — a long-run frequency claim.",
  activity:"Roll a die 30 times. Tally each face. Calculate experimental P for each. Compare to theoretical 1/6 ≈ 0.167.",
  flash:[
    ["Probability","Number from 0 (impossible) to 1 (certain). Also expressed as fraction or %."],
    ["Complement","P(not A) = 1 − P(A). Useful when the complement is easier to count."],
    ["Independent events","Outcomes that don't affect each other. Multiply probabilities."],
    ["Dependent events","When one outcome changes probabilities of the next. Common in draws without replacement."],
    ["Tree diagram","Branching diagram for multi-step probability. Multiply along branches; add across."],
    ["Mutually exclusive","Events that can't both happen. P(A or B) = P(A) + P(B)."]
  ],
  quiz:[
    {q:"Rolling a fair die, P(>4) =",a:1,opts:["1/6","1/3","1/2","2/3"],why:"5 and 6 → 2/6."},
    {q:"Two coins tossed, P(both heads):",a:0,opts:["1/4","1/2","1/3","1/8"],why:"1/2 × 1/2."},
    {q:"P(not rolling 6) on a die =",a:2,opts:["1/6","1/3","5/6","2/3"],why:"1 − 1/6."},
    {q:"P(rolling a 3 AND flipping heads):",a:1,opts:["1/6","1/12","1/2","1/3"],why:"1/6 × 1/2."},
    {q:"Draw 2 cards without replacement. After drawing one ace, P(next ace):",a:2,opts:["4/52","1/13","3/51","4/51"],why:"3 aces of 51 cards left."},
    {q:"P(H or T on one coin) =",a:3,opts:["0.5","0.75","0.25","1"],why:"Certain."},
    {q:"Complement of 'raining tomorrow' is:",a:0,opts:["Not raining tomorrow","Snow","Wind","Cloudy"],why:"Not-A."},
    {q:"P(rolling a 3 OR rolling a 5) on one die =",a:1,opts:["1/12","1/3","2/3","1/36"],why:"1/6 + 1/6."},
    {q:"Independent events means:",a:2,opts:["They happen together","They can't happen","One doesn't affect probability of the other","They are equal"],why:"Definition."},
    {q:"Experimental probability of 4 after 30 rolls with 7 fours =",a:0,opts:["7/30","1/6","4/30","3/30"],why:"Just count."}
  ],
  drill:[["P(rolling 6)","1/6"],["P(heads)","1/2"],["P(not 6)","5/6"],["P(H and H)","1/4"],["P(rolling 1 or 2)","1/3"],["P(certain event)","1"],["P(impossible)","0"],["1 - 0.3","0.7"],["3/6 as decimal","0.5"],["P(> 4 on die)","1/3"]],
  home:"Play a board game with dice tonight. Count how often each number rolls. Compare to expected."
},

// -------- WEEK 7 --------
{ title:"Perimeter, area, surface area, and unit consistency",
  diff:"mid", outcomes:["MA5.1-9MG"],
  read:`<p>Measurement is where careless arithmetic bites. Two-thirds of Year 9 measurement errors come from unit mismatches — mixing cm and m, or forgetting that area units are squared. Fix that habit and 80% of the marks are automatic.</p>
<p><b>PERIMETER</b> = total distance around a 2D shape. Rectangle: P = 2(l + w). Triangle: P = a + b + c. Circle: C = 2πr (also called circumference). Perimeter uses linear units — m, cm, km.</p>
<p><b>AREA of common shapes</b>:<br>
- Rectangle: A = l × w<br>
- Triangle: A = ½ × b × h (b = base, h = perpendicular height)<br>
- Circle: A = πr²<br>
- Parallelogram: A = b × h<br>
- Trapezium: A = ½(a + b) × h<br>
Area uses squared units — m², cm², km².</p>
<p><b>COMPOSITE SHAPES</b>. Break into rectangles + triangles + semicircles. Calculate each area separately, then add (or subtract for cut-out regions). Draw dashed lines to show your split — markers reward clear working.</p>
<p><b>UNIT CONVERSIONS FOR AREA</b>. 1 m² = 100 × 100 = 10,000 cm² (NOT 100 cm²). Because area is length × length, each conversion factor squares. 1 km² = 1,000,000 m². Missing this is the #1 measurement error.</p>
<p><b>SURFACE AREA</b> of a 3D shape = sum of areas of all faces.<br>
- Cube: 6 × side² (6 identical square faces)<br>
- Rectangular prism (cuboid): 2(lw + lh + wh)<br>
- Cylinder: 2πr² + 2πrh (two circles + one rolled rectangle)<br>
Surface area also uses squared units.</p>
<p><b>VOLUME</b>: cubic units. Rectangular prism: V = l × w × h. Cylinder: V = πr²h. 1 m³ = 1,000,000 cm³. 1 L = 1000 cm³. 1 m³ = 1000 L.</p>
<p><b>ESTIMATION</b>. Before calculating, guess the answer. If your calculator says a room has 5 m² floor area but the room is clearly 4m × 3m, you've made an error — the answer should be 12 m². Estimation catches most mistakes before you write them down.</p>`,
  keyIdeas:["Perimeter uses linear units; area uses squared units","1 m² = 10,000 cm² (not 100 cm²)","Composite = split into simple shapes, calculate each, then add","Surface area = sum of all face areas","1 m³ = 1000 L = 1,000,000 cm³","Estimate before calculating — catches errors early"],
  mathWork:`<b>Example.</b> A rectangular garden 6 m by 4 m has a circular pond of radius 1 m. Grass area?<br>
Rectangle area = 6 × 4 = 24 m².<br>
Pond area = π × 1² ≈ 3.14 m².<br>
Grass = 24 − 3.14 = <b>~20.86 m²</b>.`,
  real:"Turf costs $25/m². A 3m × 4m yard needs 12 m² of turf = $300. Get the unit wrong (cm² not m²) and quote the customer $30,000.",
  activity:"Measure your bedroom. Calculate floor area in m². Now measure a desk in cm and give its area in cm² — then convert to m². Compare.",
  flash:[
    ["Perimeter","Total distance around a 2D shape. Linear units."],
    ["Area (rectangle)","A = l × w. Squared units."],
    ["Area (triangle)","A = ½ × base × perpendicular height."],
    ["Area (circle)","A = πr². Squared units."],
    ["Surface area","Sum of areas of all faces of a 3D shape."],
    ["1 m² =","10,000 cm² (because length × length)."]
  ],
  quiz:[
    {q:"Perimeter of a 5m by 3m rectangle:",a:0,opts:["16 m","15 m","8 m","30 m"],why:"2(5+3)."},
    {q:"Area of that same rectangle:",a:1,opts:["8 m²","15 m²","16 m²","30 m²"],why:"5×3."},
    {q:"Area of a triangle with base 6, height 4:",a:2,opts:["24","10","12","6"],why:"½×6×4."},
    {q:"Area of a circle with radius 5 (use π=3.14):",a:3,opts:["31.4","15.7","10","78.5"],why:"π×25."},
    {q:"1 m² in cm²:",a:2,opts:["100","1,000","10,000","1,000,000"],why:"100×100."},
    {q:"Surface area of a cube with side 3:",a:1,opts:["27","54","36","18"],why:"6×3²."},
    {q:"Volume of a 4×5×2 cuboid:",a:0,opts:["40","20","22","80"],why:"Product."},
    {q:"1 L equals how many cm³?",a:2,opts:["100","10","1000","1,000,000"],why:"By definition."},
    {q:"A 2m × 3m garden has a 1m² pond. Grass area:",a:1,opts:["6 m²","5 m²","4 m²","7 m²"],why:"6 − 1."},
    {q:"Perimeter of a square with area 25:",a:3,opts:["25","10","15","20"],why:"Side=5, per=20."}
  ],
  drill:[["Area 5×4 rect","20"],["Perimeter 5×4 rect","18"],["Area triangle b=8 h=3","12"],["Area circle r=2 (π≈3.14)","12.56"],["1 m² in cm²","10000"],["Volume 2×3×4","24"],["Surface area cube side=2","24"],["Area square side=7","49"],["1 km² in m²","1000000"],["Perimeter square side=6","24"]],
  home:"Calculate the floor area of your house in m². Compare to the sales ad or Realestate.com listing. Do they match?"
},

// -------- WEEK 8 --------
{ title:"Right-angle trigonometry — SOHCAHTOA",
  diff:"hard", outcomes:["MA5.2-13MG"],
  read:`<p>Trigonometry connects the angles of a right-angled triangle to the ratios of its sides. Three ratios cover 90% of Year 9 work: <b>sine, cosine, tangent</b>. The mnemonic <b>SOH CAH TOA</b> is your best friend all term.</p>
<p><b>LABELLING SIDES</b>. Pick an angle (not the right angle). The three sides are named relative to that angle:<br>
- <b>Hypotenuse (H)</b>: always opposite the right angle — the longest side.<br>
- <b>Opposite (O)</b>: opposite the chosen angle.<br>
- <b>Adjacent (A)</b>: next to the chosen angle (and not the hypotenuse).<br>
Get the labels right, and everything follows.</p>
<p><b>SOH CAH TOA</b>:<br>
- sin θ = O / H<br>
- cos θ = A / H<br>
- tan θ = O / A</p>
<p><b>FINDING A SIDE</b>. Given an angle and one side, find another.<br>
Example: angle 30°, hypotenuse 10, find opposite.<br>
sin 30° = O / 10 → O = 10 × sin 30° = 10 × 0.5 = <b>5</b>.</p>
<p><b>FINDING AN ANGLE</b>. Given two sides, find the angle. Use the inverse trig function (sin⁻¹, cos⁻¹, tan⁻¹ — sometimes written as arcsin, arccos, arctan).<br>
Example: opposite 3, adjacent 4, find angle.<br>
tan θ = 3/4 = 0.75. θ = tan⁻¹(0.75) ≈ <b>36.87°</b>.</p>
<p><b>CALCULATOR MODE</b>. Set your calculator to DEGREES (DEG), not radians. This is the single most common error — a radians-mode calculator gives nonsense answers with no warning.</p>
<p><b>WHICH RATIO TO USE</b>. Write down which two sides you have (or want). If O and H → sin. If A and H → cos. If O and A → tan. Circle the two sides in the question, then match to SOH/CAH/TOA.</p>
<p><b>REAL-WORLD PROBLEMS</b>. Height of a tree from ground distance and angle of elevation. Length of a ramp from height and angle. Bearings in navigation. Roof pitch. All variations of the same three ratios.</p>
<p><b>ANGLE OF ELEVATION vs DEPRESSION</b>. Elevation = looking UP from horizontal. Depression = looking DOWN from horizontal. They are equal for the same line (alternate angles). Draw the diagram — always.</p>`,
  keyIdeas:["Hypotenuse = opposite the right angle (longest side)","Opposite and Adjacent depend on which angle you pick","SOH CAH TOA — sin=O/H, cos=A/H, tan=O/A","To find angle, use sin⁻¹, cos⁻¹, or tan⁻¹","Set calculator to DEGREES","Draw a labelled diagram every time"],
  mathWork:`<b>Example.</b> Ladder of length 5m leans against a wall. The foot of the ladder is 3m from the wall. What angle does the ladder make with the ground?<br>
Adjacent = 3, hypotenuse = 5.<br>
cos θ = 3/5 = 0.6.<br>
θ = cos⁻¹(0.6) ≈ <b>53.13°</b>.`,
  real:"Roof pitch: a roof rises 3m over a 4m horizontal span. Pitch angle = tan⁻¹(3/4) ≈ 37°. Solar panels installed at this angle in Sydney maximise annual output.",
  activity:"For each triangle (draw first): (a) angle 45°, hyp 10, find opp. (b) opp 8, adj 6, find the angle. (c) angle 60°, adj 5, find hyp.",
  flash:[
    ["Hypotenuse","The side opposite the right angle — always the longest side."],
    ["Opposite","The side directly across from the chosen (non-right) angle."],
    ["Adjacent","The side next to the chosen angle, not the hypotenuse."],
    ["SOH CAH TOA","sin=O/H, cos=A/H, tan=O/A. Mnemonic for right-triangle ratios."],
    ["Inverse trig","sin⁻¹, cos⁻¹, tan⁻¹ — used to find an angle from a ratio."],
    ["Distance formula","√(Δx² + Δy²) — from Pythagoras.",5]
  ],
  quiz:[
    {q:"In a right triangle, the hypotenuse is:",a:2,opts:["Any side","The shortest side","Opposite the right angle","Next to the right angle"],why:"Definition."},
    {q:"sin θ =",a:0,opts:["O/H","A/H","O/A","H/O"],why:"SOH."},
    {q:"cos θ =",a:1,opts:["O/H","A/H","O/A","H/A"],why:"CAH."},
    {q:"tan θ =",a:2,opts:["O/H","A/H","O/A","A/O"],why:"TOA."},
    {q:"sin 30° =",a:0,opts:["0.5","0.707","0.866","1"],why:"Standard value."},
    {q:"Angle 60°, hypotenuse 10, find opposite:",a:2,opts:["5","7.07","8.66","10"],why:"10 × sin 60°."},
    {q:"Opposite 5, adjacent 12, find angle:",a:0,opts:["tan⁻¹(5/12)","sin⁻¹(5/12)","cos⁻¹(5/12)","tan⁻¹(12/5)"],why:"O and A → tan."},
    {q:"tan 45° =",a:1,opts:["0","1","√2","0.5"],why:"O=A."},
    {q:"Calculator mode for degrees should be:",a:0,opts:["DEG","RAD","GRAD","BIN"],why:"Not radians."},
    {q:"Angle of depression and angle of elevation for the same line-of-sight are:",a:2,opts:["Complementary","Supplementary","Equal (alternate angles)","Different"],why:"Alternate angles."}
  ],
  drill:[["sin 30°","0.5"],["cos 60°","0.5"],["tan 45°","1"],["sin 90°","1"],["cos 0°","1"],["tan 0°","0"],["Ratio for hyp+opp","sin"],["Ratio for hyp+adj","cos"],["Ratio for opp+adj","tan"],["10×sin 30°","5"]],
  home:"Measure the height of a tree using its shadow. Measure your own height and your shadow at the same time. Ratio-check: your height/shadow = tree/shadow."
},

// -------- WEEK 9 --------
{ title:"Statistics — measures of centre, spread, and interpreting data",
  diff:"hard", outcomes:["MA5.1-12SP"],
  read:`<p>Statistics answers two questions: "what's typical?" and "how spread out?". You need both — a set of numbers with average 50 could be {50, 50, 50} (no spread) or {0, 50, 100} (very spread). Same centre, wildly different meanings.</p>
<p><b>MEASURES OF CENTRE</b>:<br>
- <b>Mean</b>: sum of values ÷ count. Sensitive to outliers.<br>
- <b>Median</b>: middle value when data is ordered. Half above, half below. Robust to outliers.<br>
- <b>Mode</b>: most frequent value. Useful for categorical data. Can be no mode, or multiple modes.</p>
<p><b>WHEN TO USE WHICH</b>. Symmetric data with no outliers: mean. Skewed data or outliers present: median. Categorical data (colours, brands): mode.</p>
<p><b>EXAMPLE</b>. Test scores: 8, 9, 9, 10, 92. Mean = 25.6 (misleading — one score inflates it). Median = 9. Mode = 9. Median and mode describe the class better; the mean is distorted by the outlier.</p>
<p><b>MEASURES OF SPREAD</b>:<br>
- <b>Range</b> = max − min. Simple but sensitive to extremes.<br>
- <b>Interquartile range (IQR)</b> = Q3 − Q1, the range of the middle 50% of data. Robust to outliers.<br>
- <b>Quartiles</b>: Q1 (25th percentile), Q2 (median, 50th), Q3 (75th).</p>
<p><b>FINDING QUARTILES</b>. Order data. Find median (Q2). Q1 = median of lower half. Q3 = median of upper half. If dataset has odd number, don't include the median in either half.</p>
<p><b>FIVE-NUMBER SUMMARY</b>: min, Q1, median, Q3, max. Draw as a <b>box plot</b> — box from Q1 to Q3, line at median, whiskers to min and max. Powerful for comparing datasets side by side.</p>
<p><b>OUTLIERS</b>. A data point below Q1 − 1.5×IQR or above Q3 + 1.5×IQR. Report them; investigate; usually keep but note them. Deleting outliers without justification is data manipulation.</p>
<p><b>INTERPRETING GRAPHS</b>. Always ask: what's the scale? Is the axis truncated (not starting at zero)? Is the sample size shown? A dramatic bar chart with a truncated y-axis can make a 2% change look like 200%.</p>`,
  keyIdeas:["Centre: mean, median, mode","Median beats mean when outliers present","Range = max − min; IQR = Q3 − Q1","Q1 = 25%, Q2 = median, Q3 = 75%","Box plot shows 5-number summary","Outliers below Q1 − 1.5×IQR or above Q3 + 1.5×IQR","Watch for truncated axes in graphs"],
  mathWork:`<b>Example.</b> Data: 3, 5, 7, 8, 8, 10, 12, 15, 22.<br>
Mean = 90/9 = 10.<br>
Median (middle of 9) = 8 (5th value).<br>
Mode = 8 (appears twice).<br>
Q1 = median of {3,5,7,8} = 6. Q3 = median of {10,12,15,22} = 13.5.<br>
Range = 22 − 3 = 19. IQR = 13.5 − 6 = 7.5.`,
  real:"Australian median house price is more informative than mean — the mean is inflated by a few $30M sales that don't reflect a typical home.",
  activity:"Take last week's electricity data (5 days). Find mean, median, mode. Compare — which best represents typical daily use?",
  flash:[
    ["Mean","Sum ÷ count. Sensitive to outliers."],
    ["Median","Middle value when ordered. Robust to outliers."],
    ["Mode","Most frequent value. Best for categorical data."],
    ["Range","Max − min. Simple spread measure, sensitive to extremes."],
    ["IQR (Interquartile range)","Q3 − Q1. Middle 50% of data. Robust to outliers."],
    ["Box plot","Diagram of 5-number summary: min, Q1, median, Q3, max."],
    ["Probability","Chance from 0 to 1.",6]
  ],
  quiz:[
    {q:"Mean of 4, 6, 8, 10, 12:",a:2,opts:["6","7","8","9"],why:"40/5."},
    {q:"Median of 3, 5, 7, 9, 11:",a:1,opts:["5","7","9","6"],why:"Middle of 5."},
    {q:"Mode of 2, 3, 3, 5, 7:",a:0,opts:["3","5","7","2"],why:"Most frequent."},
    {q:"Range of 4, 9, 12, 3, 15:",a:2,opts:["11","10","12","4"],why:"15-3."},
    {q:"Best centre for data with outliers:",a:1,opts:["Mean","Median","Range","Mode"],why:"Median unaffected."},
    {q:"Median of 3, 5, 7, 9:",a:2,opts:["5","7","6","4"],why:"Average of two middle."},
    {q:"Q1 is the:",a:1,opts:["Maximum","25th percentile","50th percentile","75th percentile"],why:"Lower quartile."},
    {q:"IQR = ",a:3,opts:["max − min","Q3 + Q1","Q3 − Q2","Q3 − Q1"],why:"Middle 50%."},
    {q:"Data: 1, 2, 2, 3, 100. Mean is:",a:1,opts:["2","21.6","3","100"],why:"108/5."},
    {q:"5-number summary contains:",a:0,opts:["Min, Q1, median, Q3, max","Just mean and range","Only median","Mean, median, mode, range, IQR"],why:"Definition."}
  ],
  drill:[["Mean 2,4,6","4"],["Median 1,3,5,7,9","5"],["Range 2,4,10","8"],["Mode 3,3,5,7,9","3"],["Median 1,2,3,4","2.5"],["Mean 5,5,5","5"],["Q2 = ","median"],["Range 0,100","100"],["Sum 2+4+6+8","20"],["Mean 10,20,30","20"]],
  home:"Find your family's monthly grocery spending for the last 3 months. Mean vs median — which represents 'typical' better and why?"
},

// -------- WEEK 10 --------
{ title:"Applied problem-solving — modelling with linear + probability",
  diff:"hard", outcomes:["MA5.2 modelling"],
  read:`<p>Modelling is using maths to describe a real situation, make predictions, and evaluate risk. Every real question needs three moves: <b>set up</b> (variables + equation), <b>solve</b> (algebra), <b>interpret</b> (meaning + limits).</p>
<p><b>LINEAR MODELS</b>. When one quantity changes at a constant rate with another, use y = mx + c. Identify:<br>
- What's changing (that's y)<br>
- What it depends on (that's x)<br>
- The rate of change (that's m)<br>
- The starting value (that's c)</p>
<p><b>EXAMPLE — energy bill</b>. Electricity: $30 fixed supply charge per quarter + $0.28 per kWh used.<br>
Model: y = 0.28x + 30, where x = kWh, y = total $.<br>
If your family uses 1500 kWh in a quarter: y = 0.28(1500) + 30 = 420 + 30 = <b>$450</b>.<br>
Predict: if usage drops to 1200 kWh, y = 336 + 30 = $366 — save $84 per quarter.</p>
<p><b>PROBABILITY MODELS</b>. Used when outcomes are uncertain. In an energy investigation you might want P(peak demand exceeds capacity), P(a rainy day for solar output), or P(a fault in a randomly chosen circuit).</p>
<p><b>EXPECTED VALUE</b>. Long-run average when a random process repeats.<br>
Expected value = Σ (value × probability).<br>
Example: game where you win $10 with probability 0.2, lose $2 with probability 0.8.<br>
EV = 10(0.2) + (−2)(0.8) = 2 − 1.6 = <b>$0.40 per game</b> in your favour.</p>
<p><b>INTERPRETATION IS NON-NEGOTIABLE</b>. A numeric answer without units and context is worth less than half marks at Stage 5.2. "The energy bill will be $450 for 1500 kWh over a quarter" beats "x = 450".</p>
<p><b>MODEL LIMITATIONS</b>. Every model simplifies. State assumptions: is the rate really constant? Are events truly independent? For how large a range of x is the model valid? A model that fits 5 days of data cannot reliably predict 5 years — extrapolation is risky.</p>
<p><b>ETHICAL CONSIDERATIONS</b>. Every model has a real-world consequence. A model that under-estimates peak electricity demand causes blackouts. A model that over-estimates causes expensive over-building. Stating limitations and being honest about uncertainty is not weakness — it is the professional standard.</p>`,
  keyIdeas:["Modelling = set up, solve, interpret","Linear model y = mx + c fits constant-rate scenarios","Expected value = Σ (value × probability) — long-run average","Always include units and context in your answer","State assumptions and limits — extrapolation is risky","Ethical modelling: honest uncertainty > false confidence"],
  mathWork:`<b>Example.</b> Solar system produces 20 kWh/day on sunny days (P=0.7) and 5 kWh/day on cloudy days (P=0.3). Expected daily output?<br>
EV = 20(0.7) + 5(0.3) = 14 + 1.5 = <b>15.5 kWh/day</b>.<br>
Over a year: ~15.5 × 365 ≈ 5,660 kWh. Household use ~7,000 kWh/year → solar covers about 80%.`,
  real:"Insurance premiums are expected-value calculations. Insurers set your annual premium so that (payout × probability of claim) < premium collected — over millions of customers, they win.",
  activity:"Design your own energy model: pick a household appliance, estimate hours/day of use, kW rating, and cost/kWh. Build y = mx + c. Predict monthly cost. Then check against a real bill.",
  flash:[
    ["Modelling","Using maths to describe a real situation — set up, solve, interpret."],
    ["Linear model","y = mx + c where m = rate of change and c = starting value."],
    ["Expected value","Long-run average of a random outcome: Σ (value × probability)."],
    ["Extrapolation risk","Using a model beyond the data range — trends may change."],
    ["Model assumption","A stated simplification (e.g. 'rate stays constant') that must be justified."],
    ["Interpretation","Explaining what a numeric answer means in real-world terms — always needed."],
    ["Median","Middle value when ordered — robust to outliers.",9]
  ],
  quiz:[
    {q:"Cost model y = 0.30x + 50. At x = 200:",a:2,opts:["50","60","110","250"],why:"0.3(200)+50."},
    {q:"Expected value of coin flip with $2 heads / $0 tails:",a:1,opts:["$0","$1","$2","$0.50"],why:"2(0.5)+0(0.5)."},
    {q:"A model based on 5 data points extrapolating 5 years is:",a:2,opts:["Reliable","Ideal","Risky — trend may change","Impossible"],why:"Assumptions may break."},
    {q:"y = 0.28x + 30 represents electricity: gradient means:",a:0,opts:["$0.28 per kWh","$30 per kWh","28% cheaper","30 kWh"],why:"Rate is m."},
    {q:"A game: win $5 (P=0.1), lose $1 (P=0.9). EV:",a:1,opts:["+$0.10","−$0.40","+$0.50","−$1"],why:"5(0.1)+(−1)(0.9)=−0.4."},
    {q:"Answer '$450' vs '$450 for 1500 kWh per quarter':",a:3,opts:["Same","First is better","Second uses too many words","Second is stronger — includes units and context"],why:"Interpretation earns marks."},
    {q:"Fixed supply charge in y = mx + c is:",a:1,opts:["m","c","x","y"],why:"c = starting value."},
    {q:"Model limitation to state:",a:2,opts:["The teacher's name","Number of pages","Assumed rate is constant","The colour of the graph"],why:"Real assumption."},
    {q:"Insurance premiums are:",a:0,opts:["Expected-value calculations","Random","Fixed by government","Unrelated to probability"],why:"EV underpins insurance."},
    {q:"Best final step in a modelling solution:",a:3,opts:["Circle the number","Underline","Nothing","Interpret in context with units and note assumptions"],why:"Stage 5.2 expectation."}
  ],
  drill:[["y=2x+3 at x=4","11"],["EV of $10@0.5 + $0@0.5","5"],["y=0.5x+10 at x=20","20"],["EV of $6@0.2 + $0@0.8","1.2"],["Model y=mx+c: m is","rate"],["Model y=mx+c: c is","intercept"],["y=100x + 50 at x=2","250"],["EV win 4@0.25","1"],["Fixed cost is","c"],["Rate per unit is","m"]],
  home:"Look at last month's electricity bill. Identify the supply charge (c) and the rate per kWh (m). Rebuild the total using y=mx+c. Do the numbers match?"
}
];
