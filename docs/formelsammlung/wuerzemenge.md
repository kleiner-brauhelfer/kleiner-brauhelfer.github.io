---
layout: page_math
title: W&uuml;rzemenge
parent: Formelsammlung
nav_order: 3
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

# W&uuml;rzemenge


## Zielw&uuml;rzemenge

Diel Zielmenge setzt sich zusammen aus der gew&uuml;nschten Biermenge und der Korrekturmenge aus den Anlagedaten abz&uuml;glich der Hefestartermenge.

$$ V_{Ziel} = V_{Rezept} - V_{Hefestarter} + V_{KorrekturAnlage} $$

Zielmenge bei Kochbeginn

$$ V_{Kochbeginn} = V_{Kochende} + V_{Verdampfung} = \frac{V_{Ziel}}{f_{HighGravity}} + \dot{V}_{Verdampfung} \cdot t_{Kochdauer} $$

Zielmenge bei Kochende

$$ V_{Kochende} = \frac{V_{Ziel}}{f_{HighGravity}} $$

Die Zielmenge beim Anstellen kann nicht genau angegeben werden, da der Zeitpunkt f&uuml;r die Korrekturmenge nicht spezifiziert ist.
Geht man davon aus, dass die meisten Verluste vor dem Anstellen entstehen, so gilt

$$ V_{Anstellen} \approx  V_{Ziel} $$

**Bemerkung:** Nicht ber&uuml;cksichtigt werden systematische Mengenverluste, wie zum Beispiel der Verlust durch den Hopfentreber.
Aktuell werden diese Verluste mehrheitlich durch die mittlere Sudhausausbeute aus den Anlagedaten kompensiert.

## Nebenrechnungen

### High Gravity

$$ f_{HighGravity} = 1 + \frac{f_{HighGravity,\%}}{100} $$

$$ V_{HighGravity} = V_{Ziel} - V_{Kochende} = V_{Ziel} \cdot (1 - \frac{1}{f_{HighGravity}}) $$

### Verdampfung

$$ f_{Verdampfung} = 1 + \frac{\dot{V}_{Verdampfung} \cdot t_{Kochdauer}}{V_{Kochende}} $$

$$ V_{Verdampfung} = \dot{V}_{Verdampfung} \cdot t_{Kochdauer} $$
