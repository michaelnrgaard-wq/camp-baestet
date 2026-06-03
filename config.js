// ════════════════════════════════════════════════════════════════════════
//  RINGRIDNING PÅ CYKEL — GAME CONFIG
//  Skru på tallene herunder for at justere spillet.
//  Gem filen og genindlæs siden — ændringer virker med det samme.
// ════════════════════════════════════════════════════════════════════════
//
//  HURTIG OVERSIGT:
//    ① GENEREL TILFÆLDIGHED (RANDOMNESS)   ← start her
//    ② HASTIGHED
//    ③ HOP
//    ④ LIV & ØL
//    ⑤ FORHINDRINGER
//    ⑥ N1  — jord (ringe, telte, ravne)
//    ⑦ N2  — flyvende platform (ringe)
//    ⑧ N3  — høj platform (øl, bliver sværere)
//    ⑨ SVÆRHEDSGRAD
//
// ════════════════════════════════════════════════════════════════════════

const CONFIG = {

  // ════════════════════════════════════════════════════════════════════
  //  ① GENEREL TILFÆLDIGHED
  //     Én knap der styrer hvor uforudsigelig banen føles.
  //     Påvirker: afstande mellem objekter, ring-gruppe-størrelser,
  //               platform-størrelser, øl-chance-udsving.
  // ════════════════════════════════════════════════════════════════════

  RANDOMNESS: 1.4,
  //  0.5  = meget regelmæssig  (forudsigelig, pædagogisk)
  //  1.0  = standard
  //  1.4  = nuværende anbefaling  ← god balance
  //  2.0  = kaotisk  (store udsving, sjov og overraskende)


  // ════════════════════════════════════════════════════════════════════
  //  ② HASTIGHED
  // ════════════════════════════════════════════════════════════════════

  startSpeed:       1.8,    // px/frame ved start
  maxSpeed:         5.5,    // øvre grænse
  speedRampEvery:   150,    // frames mellem stigninger (60 frames = 1 sek)
  speedRampAmount:  0.14,   // fart-stigning pr. step


  // ════════════════════════════════════════════════════════════════════
  //  ③ HOP
  //     Kort tryk = lille hop (når IKKE op på N2/N3).
  //     Hold knappen = højt hop (når N2 og N3).
  // ════════════════════════════════════════════════════════════════════

  jumpSmall:          -4.0,   // initial hastighed ved hop (negativ = op)
  jumpBoostPerFrame:  -0.32,  // ekstra kraft pr. frame mens knappen holdes
  jumpBoostMaxFrames:  18,    // maks antal boost-frames
  // → max hop-vy = -4.0 - 18×0.32 = -9.76


  // ════════════════════════════════════════════════════════════════════
  //  ④ LIV & ØL
  // ════════════════════════════════════════════════════════════════════

  healthMax:    100,
  healthDrain:  0.032,   // liv/frame  (~1.9/sek)  →  ~52 sek til tom uden øl
  beerHeal:     30,      // liv genoprettet pr. øl (max = healthMax)


  // ════════════════════════════════════════════════════════════════════
  //  ⑤ FORHINDRINGER
  // ════════════════════════════════════════════════════════════════════

  tentDamage:    12,    // liv tabt ved telt-kollision
  tentSpeedLoss: 1.3,   // fart tabt ved telt-kollision


  // ════════════════════════════════════════════════════════════════════
  //  ⑥ N1 — JORDBANE
  //     Ringe, telte og ravne på jordbanen. INGEN øl (øl er kun N3).
  // ════════════════════════════════════════════════════════════════════

  gen: {

    minGap:        120,   // mindste afstand mellem to objekter (px)
    maxGap:        220,   // største afstand  (ganges med RANDOMNESS)
    gapAfterTent:  180,   // ekstra luft efter telt/ravn

    weightRing:    22,    // spawnvægt: ring
    weightBeer:    0,     // spawnvægt: øl  ← 0 = ingen øl på N1
    weightTent:    18,    // spawnvægt: telt
    weightBird:    14,    // spawnvægt: ravn

    ringGroupMin:      1,   // min antal ringe i gruppe
    ringGroupMax:      1,   // max antal ringe i gruppe på N1 (hold det sparsomt)
    ringGroupSpacing:  30,

    // Interne — rør ikke:
    minBeerGap:         999999,
    highRingChance:     0,


    // ════════════════════════════════════════════════════════════════
    //  ⑦ N2 — FLYVENDE PLATFORME (ringe)
    //     Kræver ét højt hop fra jordbanen.
    //     Indeholder kun ringe — øl er forbeholdt N3.
    // ════════════════════════════════════════════════════════════════

    platformSpawnChance: 0.50,
    //  Sandsynlighed for at en N2 overhovedet spawner ved hvert forsøg.
    //  0.3 = sjælden  •  0.5 = standard  •  0.8 = næsten altid

    platformMinW:    70,    // N2-bredde når der IKKE er N3
    platformMaxW:    110,
    n2WithN3MinW:    110,   // N2-bredde når der ER N3 (stor platform = god afsæt)
    n2WithN3MaxW:    160,
    platformGapMin:  160,   // afstand mellem N2-platforme
    platformGapMax:  300,
    platformY:       158,   // N2 overfladeY (ikke skift uden at tjekke fysik)

    n2RingMin:       2,     // ringe i række
    n2RingMax:       4,
    n2RingSpacing:   28,    // px mellem ringe i række


    // ════════════════════════════════════════════════════════════════
    //  ⑧ N3 — HØJE PLATFORME (øl)
    //     Kræver to hop: jord → N2 → N3.
    //     Kun øl. Første øl er altid garanteret (tutorial).
    //     Herefter faldende sandsynlighed med distancen.
    // ════════════════════════════════════════════════════════════════

    platformY3:      82,    // N3 overfladeY (ikke nåbar direkte fra jord)
    n3MinW:          55,    // N3 platform-bredde
    n3MaxW:          95,
    n3GapMin:        20,    // luft mellem N2's højrekant og N3's venstrekant
    n3GapMax:        60,

    //  Øl-chance falder med distancen:
    n3BeerStart:     0.35,  // startchance  (after første garanterede øl)
    n3BeerPer1000m:  0.06,  // reduktion pr. 1000 m
    n3BeerMin:       0.08,  // bundgrænse (spillet forbliver muligt)
    //
    //  Oversigt:  0 m → 35%  •  1000 m → 29%  •  2000 m → 23%
    //             3000 m → 17%  •  5000 m+ → 8%


    // ════════════════════════════════════════════════════════════════
    //  ⑨ SVÆRHEDSGRAD (stiger automatisk med distancen)
    // ════════════════════════════════════════════════════════════════

    difficultyDistance: 4000,   // worldX (px) hvor maks-sværhed nås
    gapTightenMax:      0.35,   // afstande krymper op til 35% ved maks
    tentWeightBonus:    14,     // ekstra telt-vægt ved maks sværhedsgrad
  },

};
