// ════════════════════════════════════════════════════════════════════════
//  RINGRIDNING — GAME CONFIG
//  To layouts: LANDSCAPE (desktop 480×270) og PORTRAIT (mobil 270×480)
//  Koden vælger automatisk baseret på skærmbredde.
// ════════════════════════════════════════════════════════════════════════

const isMobile = window.innerWidth <= 480;

// ── LANDSCAPE — desktop (480×270, som spillet var designet) ────────────
const CONFIG_LANDSCAPE = {
  RANDOMNESS: 1.4,
  startSpeed: 1.8, maxSpeed: 5.5, speedRampEvery: 150, speedRampAmount: 0.14,
  jumpSmall: -4.0, jumpBoostPerFrame: -0.32, jumpBoostMaxFrames: 18,
  healthMax: 100, healthDrain: 0.032, beerHeal: 30,
  tentDamage: 12, tentSpeedLoss: 1.3,
  gen: {
    minGap: 120, maxGap: 220, gapAfterTent: 180,
    weightRing: 22, weightBeer: 0, weightTent: 18, weightTentTall: 14,
    ringGroupMin: 1, ringGroupMax: 2, ringGroupSpacing: 28,
    highRingChance: 0, minBeerGap: 999999,
    platformSpawnChance: 0.50,
    platformMinW: 70, platformMaxW: 110,
    n2WithN3MinW: 110, n2WithN3MaxW: 160,
    platformGapMin: 160, platformGapMax: 300,
    platformY: 158,
    n2RingMin: 2, n2RingMax: 4, n2RingSpacing: 28,
    platformY3: 82,
    n3MinW: 55, n3MaxW: 95, n3GapMin: 20, n3GapMax: 60,
    n3BeerStart: 0.35, n3BeerPer1000m: 0.06, n3BeerMin: 0.08,
    difficultyDistance: 4000, gapTightenMax: 0.35, tentWeightBonus: 14,
  },
};

// ── PORTRAIT — mobil (270×480, portræt-telefon) ────────────────────────
const CONFIG_PORTRAIT = {
  RANDOMNESS: 1.4,
  startSpeed: 1.5, maxSpeed: 4.5, speedRampEvery: 150, speedRampAmount: 0.11,
  jumpSmall: -6.0, jumpBoostPerFrame: -0.36, jumpBoostMaxFrames: 16,
  healthMax: 100, healthDrain: 0.022, beerHeal: 30,
  tentDamage: 12, tentSpeedLoss: 1.3,
  gen: {
    minGap: 80, maxGap: 160, gapAfterTent: 140,
    weightRing: 22, weightBeer: 0, weightTent: 18, weightTentTall: 14,
    ringGroupMin: 1, ringGroupMax: 2, ringGroupSpacing: 22,
    highRingChance: 0, minBeerGap: 999999,
    platformSpawnChance: 0.50,
    platformMinW: 50, platformMaxW: 90,
    n2WithN3MinW: 80, n2WithN3MaxW: 115,
    platformGapMin: 120, platformGapMax: 230,
    platformY: 310,
    n2RingMin: 2, n2RingMax: 4, n2RingSpacing: 22,
    platformY3: 220,
    n3MinW: 40, n3MaxW: 65, n3GapMin: 15, n3GapMax: 40,
    n3BeerStart: 0.35, n3BeerPer1000m: 0.06, n3BeerMin: 0.08,
    difficultyDistance: 3000, gapTightenMax: 0.35, tentWeightBonus: 14,
  },
};

const CONFIG = isMobile ? CONFIG_PORTRAIT : CONFIG_LANDSCAPE;
