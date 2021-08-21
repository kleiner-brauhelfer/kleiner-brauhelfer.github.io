---
layout: page_math
title: W&uuml;rzemenge
parent: Formelsammlung
nav_order: 2
---

1. TOC
{:toc}

---

# W&uuml;rzemenge
<table>
  <tr><td>Volumen</td><td>\(V\)</td><td>\([l]\)</td></tr>
</table>

## Zielw&uuml;rzemenge
Die gesamte Zielmenge setzt sich zusammen aus der gew&uuml;nschten Menge und der Korrekturmenge aus den Anlagedaten.

$$ V_{Ziel} = V_{Rezept} + V_{KorrekturMenge} $$

Die Zielmenge bei Kochbeginn ber&uuml;cksichtigt den Verdampfungseffekt und den High Gravity Faktor ([Einflussfaktoren](einflussfaktoren)).

$$ \begin{align}
V_{Kochbeginn} &= V_{Ziel} \cdot \frac{f_{Verdampfung}}{f_{HighGravity}} \\
               &= V_{Kochende} \cdot f_{Verdampfung} \nonumber
\end{align} $$

Durch Umformen kann die Zielmenge bei Kochbeginn auch so formuliert werden

$$ V_{Kochbeginn} = V_{Kochende} + V_{Verdampfung} = \frac{V_{Ziel}}{f_{HighGravity}} + \frac{Verdampfungsrate \cdot t_{Kochdauer}}{60} $$


Die Zielmenge bei Kochende ber&uuml;cksichtigt nur noch den High Gravity Faktor ([Einflussfaktoren](einflussfaktoren)).

$$ V_{Kochende} = \frac{V_{Ziel}}{f_{HighGravity}} $$


Die Zielmenge beim Anstellen kann nicht genau angegeben werden, da der Zeitpunkt f&uuml;r die Korrekturmenge nicht spezifiziert ist.
Geht man davon aus, dass die meisten Verluste nach dem Anstellen eintreffen, so gilt

$$ V_{Anstellen} \approx  V_{Ziel} $$


**Bemerkung:** Nicht ber&uuml;cksichtigt werden systematische Mengenverluste, wie zum Beispiel der Verlust durch den Hopfentreber.
Aktuell werden diese Verluste mehrheitlich durch die mittlere Sudhausausbeute aus den Anlagedaten kompensiert.
