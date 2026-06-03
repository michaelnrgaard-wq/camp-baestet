// ════════════════════════════════════════════════════════════════════════
//  RINGRIDNING — GAME CONFIG  (portræt-udgave, canvas 270×480)
//  Gem filen og genindlæs siden — ændringer virker med det samme.
// ════════════════════════════════════════════════════════════════════════
//
//  OVERSIGT:
//    ① RANDOMNESS       ← juster gameplay-følelse her
//    ② HASTIGHED
//    ③ HOP
//    ④ LIV & ØL
//    ⑤ FORHINDRINGER
//    ⑥ N1  jord (ringe, telte)
//    ⑦ N2  flyvende platform (ringe)
//    ⑧ N3  høj platform (øl)
//    ⑨ SVÆRHEDSGRAD
//
// ════════════════════════════════════════════════════════════════════════

const CONFIG = {

  // ── ① RANDOMNESS ────────────────────────────────────────────────────
  RANDOMNESS: 1.4,
  //  0.5 = regelmæssig  •  1.0 = standard  •  2.0 = kaotisk


  // ── ② HASTIGHED ─────────────────────────────────────────────────────
  startSpeed:       1.5,    // px/frame ved start
  maxSpeed:         4.5,    // øvre grænse
  speedRampEvery:   150,    // frames mellem stigninger
  speedRampAmount:  0.11,   // stigning pr. step


  // ── ③ HOP ────────────────────────────────────────────────────────────
  //  Kort tryk = lille hop  (kan IKKE nå N2/N3)
  //  Hold = højt hop        (når N2 og N3)
  //
  //  Lille hop stigning:   6² / (2×0.38) = 47 px
  //  Fuldt hop stigning:  (6 + 16×0.36)² / (2×0.38) = 182 px
  //  N2 er 80 px over ground → lille hop når ikke op  ✓
  //  N3 er 90 px over N2    → lille hop når ikke N3   ✓
  jumpSmall:          -6.0,
  jumpBoostPerFrame:  -0.36,
  jumpBoostMaxFrames:  16,


  // ── ④ LIV & ØL ──────────────────────────────────────────────────────
  healthMax:    100,
  healthDrain:  0.022,   // pr. frame — ~1.3/sek → tomt på ~76 sek uden øl
  beerHeal:     30,


  // ── ⑤ FORHINDRINGER ─────────────────────────────────────────────────
  tentDamage:    12,
  tentSpeedLoss: 1.3,


  // ── ⑥ N1 — JORDBANE ─────────────────────────────────────────────────
  gen: {

    minGap:        80,
    maxGap:        160,
    gapAfterTent:  140,

    weightRing:     22,
    weightBeer:     0,
    weightTent:     18,   // lille telt (lille hop over)
    weightTentTall: 14,   // højt telt  (fuldt hop over)

    ringGroupMin:      1,
    ringGroupMax:      2,
    ringGroupSpacing:  22,
    highRingChance:    0,
    minBeerGap:        999999,


    // ── ⑦ N2 — FLYVENDE PLATFORME (ringe) ───────────────────────────
    platformSpawnChance: 0.50,
    //  0.3 = sjælden  •  0.5 = standard  •  0.8 = hyppig

    platformMinW:    50,
    platformMaxW:    90,
    n2WithN3MinW:    80,    // N2 bredde når der ER N3 (større afsæt)
    n2WithN3MaxW:   115,
    platformGapMin: 120,
    platformGapMax: 230,
    platformY:      310,   // N2 overfladeY  (80 px over ground)

    n2RingMin:       2,
    n2RingMax:       4,
    n2RingSpacing:   22,


    // ── ⑧ N3 — HØJE PLATFORME (øl) ──────────────────────────────────
    platformY3:     220,   // N3 overfladeY  (90 px over N2)
    n3MinW:          40,
    n3MaxW:          65,
    n3GapMin:        15,   // luft mellem N2 højrekant og N3 venstrekant
    n3GapMax:        40,

    n3BeerStart:     0.35,
    n3BeerPer1000m:  0.06,
    n3BeerMin:       0.08,
    //  Øl-chance:  0 m → 35%  •  1000 m → 29%  •  3000 m → 17%  •  5000 m → 8%


    // ── ⑨ SVÆRHEDSGRAD ───────────────────────────────────────────────
    difficultyDistance: 3000,
    gapTightenMax:      0.35,
    tentWeightBonus:    14,
  },
};
