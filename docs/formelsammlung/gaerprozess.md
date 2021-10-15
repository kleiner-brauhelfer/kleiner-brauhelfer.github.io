---
layout: page_math
title: G&auml;rprozess
parent: Formelsammlung
nav_order: 1
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

# G&auml;rprozess
<table class="table-bordered">
  <tr><td>CO2</td><td>\(co2\)</td><td>\([g/l]\)</td></tr>
  <tr><td>Druck</td><td>\(p\)</td><td>\([bar]\)</td></tr>
  <tr><td>Temperatur</td><td>\(T\)</td><td>\([&deg;C]\)</td></tr>
  <tr><td>Extrakt</td><td>\(tre\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Speise pro Liter</td><td>\(Speise_{proLiter}\)</td><td>\([ml/l]\)</td></tr>
  <tr><td>Zucker pro Liter</td><td>\(Zucker_{proLiter}\)</td><td>\([g/l]\)</td></tr>
  <tr><td>Verg&auml;rungsgrad</td><td>\(vg\)</td><td>\([\%]\)</td></tr>
</table>
**Quelle:** [MaischeMalzundMehr](http://www.maischemalzundmehr.de/index.php?inhaltmitte=toolsspeiserechner)

Im Allgemeinen entsteht w&auml;hrend der Verg&auml;rung aus \(1g\) Extrakt (Zucker) \(0.468g\) CO2 und \(0.488g\) Ethanol.

$$ co2_{Vergaerung} =  0.468 \cdot 10 \cdot (sw - tre) \label{eq:co2_vergaerung} $$

$$ alk_{Vergaerung} =  0.488 \cdot 10 \cdot (sw - tre) \label{eq:alk_vergaerung} $$


## Alkohol
### Allgemeine Formel

Allgemeine Berechnung des Alkohols in Gewichtsprozent

$$ alk_{Gew.\%} = \frac{sw - tre}{2.0665 - 0.010665 \cdot sw} $$


Umrechnung in Volumenprozent

$$ alk_{Vol.\%} = alk_{Gew.\%} \cdot \frac{sg(tre)}{\rho_{Ethanol}} = alk_{Gew.\%} \cdot \frac{sg(tre)}{0.794} $$

**Bemerkung:** Die Dichte von reinem Ethanol betr&auml;gt \(0.7894 \frac{g}{cm^3}\). Da es sich hier um eine w&auml;ssrige L&ouml;sung handelt, wird ein Wert von \(0.794 \frac{g}{cm^3}\) angenommen, welcher sich f&uuml;r den Bereich 2-7Vol.% eignet.

### Anpassungen

Die Stammw&uuml;rze setzt sich zusammen aus dem gemessenen Anstellwert und den Anteil aus den weiteren Zutaten aus der G&auml;rung

$$ sw = sw_{Anstellen} + sw_{ZutatenGaerung} $$


Wurde mit Zucker karbonisiert, so erh&ouml;ht sich der Alkoholgehalt

$$ alk_{Zucker} = \frac{Zucker_{proLiter} \cdot 0.488}{10} $$


Wurde zus&auml;tzliches Wasser f&uuml;r eine Zuckerl&ouml;sung verwendet, so muss dies auch ber&uuml;cksichtigt werden

$$ f_{Verschneidung} =  \frac{1}{1 + \frac{V_{Verschneidung}}{V_{Wuerzemenge}}} $$


Zusammen ergibt das

$$ alk_{Vol.\%} = \left( alk_{Gew.\%} + alk_{Zucker} \right) \cdot \frac{sg(tre)}{0.794} \cdot f_{Verschneidung} $$


## CO2 & Druck

### CO2

Der Kohlens&auml;uregehalt bei gegebenem Druck und Temperatur ergibt sich aus

$$ co2(p, T) = 10 \cdot (1.013 + p) \cdot e^{-10.73797+\frac{2617.25}{T+273.15}} \label{eq:co2} $$


### Druck

Der Druck bei gegebenem Kohlens&auml;uregehalt und Temperatur ergibt sich aus

$$ p(co2, T) = \frac{co2}{10 \cdot e^{-10.73797+\frac{2617.25}{T+273.15}}} - 1.013 \label{eq:p} $$

**Quelle:** [Br&auml;uReKa!](http://braureka.de/berechnungen/spundung/)

### Spundungsdruck

Das ist der ben&ouml;tigte Druck, um den gew&uuml;nschten Kohlens&auml;uregehalt zu erreichen

$$ p_{Spundung} = p(co2_{Rezept}, T) $$


## Karbonisierung
### Karbonisierung mit Speisemenge

Die ben&ouml;tigte Speisemenge pro Liter W&uuml;rze wird folgenderma&szlig;en berechnet

$$ Speise_{proLiter} = \frac{co2_{Rezept} - co2_{JungbierGebunden} - co2_{JungbierRestvergaerung}}{co2_{Speise}} \cdot 1000 $$


Das Jungbier enth&auml;lt bereits eine gewisse Menge an CO2 \eqref{eq:co2}

$$ co2_{JungbierGebunden}(t) = co2(0,T) $$


Ist das Jungbier noch nicht endvergoren, entsteht daraus noch weiteres CO2 \eqref{eq:co2_vergaerung}

$$ co2_{JungbierRestvergaerung} = co2_{Vergaerung}(tre_{Jungbier},tre_{Schnellgaerprobe}) $$

Wird keine Schnellg&auml;rprobe durchgef&uuml;hrt, so wird davon ausgegangen, dass das Jungbier endvergoren ist und kein weiteres CO2 daraus entsteht.

Aus der Verg&auml;rung der Speise entsteht schlie&szlig;lich folgender CO2 Gehalt \eqref{eq:co2_vergaerung}

$$ co2_{Speise} = co2_{Vergaerung}(sw,tre_{Schnellgaerprobe}) $$

Wird keine Schnellg&auml;rprobe durchgef&uuml;hrt, so ist \(tre_{Schnellgaerprobe} = tre_{Jungbier}\).


Zusammengefasst ergibt das

$$ Speise_{proLiter} = \frac{co2_{Rezept} - co2(0,T) - co2_{Vergaerung}(tre_{Jungbier},tre_{Schnellgaerprobe})}{co2_{Vergaerung}(sw,tre_{Schnellgaerprobe})} \cdot 1000 $$

**Bemerkung:** Die Zugabe von Speise ver&auml;ndert den Alkoholgehalt nicht, da sich die Menge auch entsprechend erh&ouml;ht.

### Karbonisierung mit Zucker

Analog zur Speise wird die ben&ouml;tigte Zuckermenge pro Liter W&uuml;rze folgenderma&szlig;en berechnet

$$ \begin{align}
Zucker_{proLiter} &= \frac{co2_{Rezept} - co2_{JungbierGebunden} - co2_{JungbierRestvergaerung}}{0.468} \\
                  &= \frac{co2_{Rezept} - co2(0,T) - co2_{Vergaerung}(tre_{Jungbier},tre_{Schnellgaerprobe})}{0.468} \nonumber
\end{align} $$


### Gr&uuml;nschlauchzeitpunkt

Der Gr&uuml;nschlauchzeitpunkt ist erreicht wenn

$$ co2_{JungbierRestvergaerung} = co2_{Rezept} - co2_{JungbierGebunden} $$


Aufgel&ouml;st nach dem Restextrakt des Jungbiers

$$ tre_{Gruenschlauchzeitpunkt} = \frac{co2_{Rezept} - co2_{JungbierGebunden}}{0.468 \cdot 10} + tre_{Schnellgaerprobe} $$


## Verg&auml;rungsgrad

Der Verg&auml;rungsgrad berechnet sich wie folgt

$$ vg = \left(1 - \frac{tre}{sw}\right) \cdot 100 $$
