---
layout: page_math
title: Refraktometer
parent: Formelsammlung
nav_order: 1
---

<details markdown="block">
  <summary>
    Inhaltsverzeichnis
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

# Refraktometer

<table>
  <tr><td>Stammw&uuml;rze</td><td>\(sw\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Relative Dichte</td><td>\(sg\)</td><td>\([-]\)</td></tr>
  <tr><td>Brechnungsindex </td><td>\(brix\)</td><td>\([&deg;Brix]\)</td></tr>
</table>

**Quelle:** [MaischeMalzundMehr](http://www.maischemalzundmehr.de/index.php?inhaltmitte=toolsrefraktorechner)

## Stammw&uuml;rze messen (unvergorene W&uuml;rze)

Ein Refraktometer misst &uuml;ber den Brechnungsindex den Zuckergehalt einer L&ouml;sung.
Da Bierw&uuml;rze keine reine Zuckerl&ouml;sung ist, muss der gemessene Wert um einen Faktor korrigiert werden.

$$ sw = \frac{brix}{f_{Korrektur}} $$

$$ brix = sw \cdot f_{Korrektur} $$

Der Korrekturfaktor \(f_{Korrektur}\) liegt, je nach Literatur, zwischen 1.02 und 1.06. Der Standardwert liegt der Wert bei 1.03.


## Restextrakt messen (vergorene W&uuml;rze)

Der Brechungsindex wird bei vergorener W&uuml;rze durch den Alkoholgehalt verf&auml;lscht. Es wurden verschiedene Formeln dazu ermittelt.


\(sw\) ist der w&uuml;rzekorrigierte Wert am Anfang der G&auml;rung.<br>
\(brix\) ist der unkorrigierte Wert w&auml;hrend der der G&auml;rung.<br>
\(\tilde brix\) ist der w&uuml;rzekorrigierte Wert w&auml;hrend der der G&auml;rung (\(\tilde brix = brix/f_{Korrektur}\)).

Die spezifische Dichte muss noch in einem Extraktwert gem&auml;&szlig; ["plato → sg"](umrechnungen.html#plato--sg-spezifisches-gewicht-1) umgerechnet werden.


### Standardformel

$$ sg = 1.001843 - 0.002318474 \cdot sw - 0.000007775 \cdot sw^2 - 0.000000034 \cdot sw^3 + 0.00574 \cdot brix + 0.00003344 \cdot brix^2 + 0.000000086 \cdot brix^3 $$

Die Standardformel liefert gleichm&auml;&szlig;ig gute Werte, in endvergorenen Proben aber etwas zu hoch.


### Sean Terrill

$$ sg = 1 - 0.0044993 \cdot sw + 0.0117741 \cdot \tilde brix + 0.000275806 \cdot sw^2 - 0.00127169 \cdot \tilde brix^2 - 0.00000727999 \cdot sw^3 + 0.0000632929 \cdot \tilde brix^3 $$

Die Terrill-Formel arbeitet in endvergorenen Proben genauer, in wenig oder unvergorenen Proben zum Teil nicht zu gebrauchen.


### Sean Terrill Linear

$$ sg = 1.0000 - 0.00085683 \cdot sw + 0.0034941 \cdot \tilde brix $$

Dies ist eine linearisierte Version der Terrill-Formel.
