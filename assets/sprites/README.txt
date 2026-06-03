═══════════════════════════════════════════════════════════════
  SPRITES TIL "RINGRIDNING PÅ CYKEL"
═══════════════════════════════════════════════════════════════

Læg dine færdige PNG-filer i DENNE mappe med PRÆCIS de filnavne der
står nedenfor. Spillet opdager dem automatisk: findes filen, bruges
den; mangler den, tegner spillet den indbyggede pixel-grafik i stedet.
Du kan altså lægge dem ind én ad gangen og teste løbende.

Krav til alle filer:
• PNG med gennemsigtig baggrund (undtagen baggrundslagene sky/castle/hills).
• Hårde pixels, ingen anti-aliasing. Tegnet i 1:1 spil-pixels (de mål der
  står i parentes). Spillet skalerer selv op.
• Animationer = ÉN vandret stribe: alle frames på én række, lige brede felter.
  (Spillet regner felt-bredden ud som billedbredde ÷ antal frames.)

───────────────────────────────────────────────────────────────
FIGURER (gennemsigtig baggrund)
───────────────────────────────────────────────────────────────
player_ride.png     ridder på cykel, vender mod HØJRE   (48×44 pr. frame, 4 frames)
player_thrust.png   samme, lanse stødt frem             (48×44 pr. frame, 2 frames)
player_hurt.png     samme, rød/blinkende efter telt-stød (48×44, 1 frame)
ring_shimmer.png    hul guldring set forfra              (20×20 pr. frame, 4 frames)
beer_bubble.png     ølkrus m. skum                       (18×24 pr. frame, 3 frames)
tent_flag.png       middelaldertelt m. blafrende flag    (36×40 pr. frame, 3 frames)
torch_flicker.png   fakkel m. flammende ild              (8×24 pr. frame, 4 frames)

───────────────────────────────────────────────────────────────
JORD (sømløst gentageligt vandret)
───────────────────────────────────────────────────────────────
ground.png          tværsnit af jorden: græs-kant øverst,
                    sten-blokke, muld nederst            (18×48, 1 frame, tile-bar)

───────────────────────────────────────────────────────────────
BAGGRUND (fyldt baggrund, sømløst vandret)  — valgfrit
───────────────────────────────────────────────────────────────
sky.png             nat-gradient                         (480×270)
moon.png            halvmåne m. skær (gennemsigtig bg)   (ca. 40×40)
castle.png          borg-silhuet                         (sømløs, ca. 480×140)
hills_back.png      bagerste bakke-lag                   (sømløs)
hills_mid.png       midterste bakke-lag                  (sømløs)
hills_front.png     forreste bakke-lag                   (sømløs)

(Giv besked når filerne ligger her — så finjusterer jeg placering/offset
 i koden, hvis en sprite sidder et par pixels skævt.)
