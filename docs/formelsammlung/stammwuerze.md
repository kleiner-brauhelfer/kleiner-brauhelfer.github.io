---
layout: page_math
title: Stammw&uuml;rze
parent: Formelsammlung
nav_order: 1
---

1. TOC
{:toc}

---

# Stammw&uuml;rze
<table>
  <tr><td>Stammw&uuml;rze</td><td>\(sw\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Ausbeute</td><td>\(Ausbeute\)</td><td>\([\%]\)</td></tr>
  <tr><td>Menge pro Liter</td><td>\(Menge\)</td><td>\([(l\:oder\:kg\:oder\:Stk)/l]\)</td></tr>
</table>
**Bemerkung:** Bei einer Temperatur von 20&deg;C entspricht 1&deg;P 1g Extrakt in 100g W&uuml;rze. Das entspricht n&auml;herungsweise 10g Extrakt pro Liter.

## Anteile der Stammw&uuml;rze
Die Stammw&uuml;rze besteht aus verschiedenen Anteilen. Die Anteile aus den weiteren Zutaten werden wie folgt berechnet

$$ sw_{ZutatenMaischen} = \sum_{ZutatenMaischen} Ausbeute \cdot Menge $$

$$ sw_{ZutatenKochen} = \sum_{ZutatenKochen} Ausbeute \cdot Menge $$

$$ sw_{ZutatenGaerung} = \sum_{ZutatenGaerung} Ausbeute \cdot Menge $$

**Bemerkung:** Dies ist eine stark vereinfachte Berechnung. Die Ausbeute muss dabei experimentell ermittelt werden.

Der Anteil aus den Malzgaben ergibt sich aus der Differenz zwischen der gew&uuml;nschten Stammw&uuml;rze und die Anteile aus den weiteren Zutaten.

$$ sw_{Malz} = sw_{Rezept} -  sw_{ZutatenMaischen} - sw_{ZutatenKochen} -  sw_{ZutatenGaerung} $$

## Zielstammw&uuml;rze
Die gew&uuml;nschte Stammw&uuml;rze setzt sich aus den einzelnen Anteilen zusammen.

$$ sw_{Rezept} = sw_{Malz} + sw_{ZutatenMaischen} + sw_{ZutatenKochen} +  sw_{ZutatenGaerung} $$

Die Zielstammw&uuml;rze bei Kochbeginn ber&uuml;cksichtigt den Verdampfungseffekt und den High Gravity Faktor ([Einflussfaktoren](einflussfaktoren)).

$$ sw_{Kochbeginn} = \left(sw_{Malz} + sw_{ZutatenMaischen}\right) \cdot \frac{f_{HighGravity}}{f_{Verdampfung}} $$

$$ sw_{KochbeginnMitZutatenKochen} = \left(sw_{Malz} + sw_{ZutatenMaischen} + sw_{ZutatenKochen}\right) \cdot \frac{f_{HighGravity}}{f_{Verdampfung}} $$

Die Zielstammw&uuml;rze bei Kochende ber&uuml;cksichtigt nur noch den High Gravity Faktor ([Einflussfaktoren](einflussfaktoren)).

$$ \begin{align}
sw_{Kochende} &= \left(sw_{Malz} + sw_{ZutatenMaischen} + sw_{ZutatenKochen}\right) \cdot f_{HighGravity} \label{eq:sw_Kochende} \\
              &= \left(sw_{Rezept} - sw_{ZutatenGaerung}\right) \cdot f_{HighGravity} \nonumber \\
              &= sw_{Anstellen} \cdot f_{HighGravity} \nonumber
\end{align} $$

Die Zielstammw&uuml;rze beim Anstellen ist gleich der gew&uuml;nschten Stammw&uuml;rze minus den Anteil aus der G&auml;rung.

$$ \begin{align}
sw_{Anstellen} &= sw_{Malz} + sw_{ZutatenMaischen} + sw_{ZutatenKochen} \\
               &= sw_{Rezept} - sw_{ZutatenGaerung} \nonumber
\end{align} $$
