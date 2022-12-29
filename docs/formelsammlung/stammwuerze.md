---
layout: page_math
title: Stammw&uuml;rze
parent: Formelsammlung
nav_order: 2
---

<details open markdown="block">
  <summary>
    Inhaltsverzeichnis
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

# Stammw&uuml;rze

## Anteile der Stammw&uuml;rze

Die Stammw&uuml;rze setzt sich aus den Anteile aus den Malzgaben und den Zus&auml;tzen

$$ sw = sw_{Malz} +  sw_{ZutatenMaischen} + sw_{ZutatenKochen} +  sw_{ZutatenGaerung} $$

$$ sw_{ZutatenMaischen} = \sum_{ZutatenMaischen} Ausbeute \cdot Menge $$

$$ sw_{ZutatenKochen} = \sum_{ZutatenKochen} Ausbeute \cdot Menge $$

$$ sw_{ZutatenGaerung} = \sum_{ZutatenGaerung} Ausbeute \cdot Menge $$

**Bemerkung:** Die Berechnung der Stammw&uuml;rze f&uuml;r die Zus&auml;tzen ist eine stark Vereinfachung. Die Ausbeute muss dabei experimentell ermittelt werden.

## Zielstammw&uuml;rze

Zielstammw&uuml;rze bei Kochbeginn

$$ sw_{Kochbeginn} = \frac{sw_{Kochende} - sw_{ZutatenKochen}}{f_{Verdampfung}} $$

$$ sw_{KochbeginnMitZutatenKochen} = \frac{sw_{Kochende}}{f_{Verdampfung}} $$

Zielstammw&uuml;rze bei Kochende

$$ sw_{Kochende} = sw_{Anstellen} \cdot f_{HighGravity} $$

Zielstammw&uuml;rze bei Kochende mit einem Hefestarter

$$ sw_{Kochende} = \frac{V_{Kochende} \cdot \left( sw_{Anstellen} \cdot f_{HighGravity} \right) - V_{Hefestarter} \cdot sw_{Hefestarter}}{V_{Kochende} + V_{Hefestarter}} $$

Zielstammw&uuml;rze beim Anstellen

$$ sw_{Anstellen} = sw_{Rezept} - sw_{ZutatenGaerung} $$

## Nebenrechnungen

### High Gravity

$$ f_{HighGravity} = 1 + \frac{f_{HighGravity,\%}}{100} $$

### Verdampfung

$$ f_{Verdampfung} = 1 + \frac{\dot{V}_{Verdampfung} \cdot t_{Kochdauer}}{V_{Kochende}} $$
