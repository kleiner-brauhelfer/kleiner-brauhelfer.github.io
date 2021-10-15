---
layout: page_math
title: Maischprozess
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

# Maischprozess

<table>
  <tr><td>Volumen</td><td>\(V\)</td><td>\([l]\)</td></tr>
  <tr><td>Masse</td><td>\(m\)</td><td>\([kg]\)</td></tr>
  <tr><td>Spezifische Dichte</td><td>\(sg\)</td><td>\([kg/l]\)</td></tr>
  <tr><td>Dichte</td><td>\(\rho\)</td><td>\([kg/l]\)</td></tr>
  <tr><td>Stammw&uuml;rze</td><td>\(sw\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Sudhausausbeute</td><td>\(SHA\)</td><td>\([\%]\)</td></tr>
</table>

**Quelle:** [MaischeMalzundMehr](http://www.maischemalzundmehr.de/index.php?inhaltmitte=toolssudhausausbeute)

## Sch&uuml;ttungsberechnung

Um die erforderliche Malzmenge (Sch&uuml;ttung) zu berechnen, muss zuerst die Masse der Ausschlagw&uuml;rze ermittelt werden

$$ m_{Ziel} = V_{Ziel} \cdot sg(sw_{Malz} + sw_{ZutatenMaischen} + sw_{ZutatenKochen}) $$

Die Ausschlagw&uuml;rze enth&auml;lt die Stammw&uuml;rze Anteile aus den Malzgaben und den weiteren Zutaten aus den Maische- und Kochprozesse.
Die spezifische Dichte wird gem&auml;&szlig; ["plato → sg"](umrechnungen.html#plato--sg-spezifisches-gewicht-1) berechnet.


Damit ergibt sich die Malzmenge, um die gew&uuml;nschte Stammw&uuml;rze zu erreichen

$$ m_{Malz} = \frac{sw_{Malz} \cdot m_{Ziel}}{SHA} \label{eq:Schuettung} $$


**Bemerkung:** Die Art des Malzes wird nicht unterschieden. Die Berechnung geht davon aus, dass das Extraktpotential bei allen Malzen gleich ist.
Hier besteht Verbesserungspotenzial.


## Wassermengen

### Hauptguss

Der (empfohlene) Hauptguss ist direkt proportional zu einem frei w&auml;hlbaren Faktor

$$ V_{Hauptguss} = f_{Hauptguss} \cdot m_{Malz} $$


Die Faktorempfehlung entspricht dabei

$$ f_{Hauptguss,Empfohlen} = \begin{cases} 4.0 - \frac{ebc}{50} & \text{wenn } ebc &lt; 50 \\ 3.0 & \text{sonst} \end{cases} $$


Werden im Maischplan Einmaisch- oder Infusionsschritte eingefügt, so setzt sich der Hauptguss aus den einzelnen Mengen Zusammen

$$ V_{Hauptguss} = V_{Einmaischen} + \sum  V_{Wasserinfusion} $$

### Nachguss

Der Nachguss dient dazu die Zielmenge bei Kochbeginn zu erreichen.

$$ V_{Nachguss} = V_{Kochbeginn} + V_{Treberwasser} - V_{Hauptguss} + V_{KorrekturNachguss} $$

Der Nachguss kann mit einem Korrekturwert aus den Anlagedaten korrigiert werden.


Das Treberwasser ist dabei das Wasser, das nach dem Abl&auml;utern in den Treben verbleibt

$$  V_{Treberwasser} = 0.96 \cdot m_{Malz} $$

Dabei wird angenommen, dass 50kg Malzschrot 60kg Na&szlig;treber mit 80% Wassergehalt ergeben.

**Quelle:** [Die Bierbrauerei.net](http://www.bierbrauerei.net/Technikum/bierbrauerei-net_kleinsudberechnungen.pdf)

### Wasserverschneidung

Die Ausgangsformel für einen Mischkreuz, damit eine Zielstammw&uuml;rze erreicht wird, lautet

$$ sw_{Ist} \cdot V_{Wuerze} + sw_{Wasser} \cdot V_{Wasser} = (V_{Wuerze} + V_{Wasser}) \cdot sw_{Ziel} $$

$$ sw_{Wasser} = 0$$


Die ben&ouml;tigte Menge Wasser, um auf eine Zielstammw&uuml;rze zu verd&uuml;nnen ist demnach

$$ V_{Wasser} = V_{Wuerze} \cdot \left(\frac{sw_{Ist}}{sw_{Ziel}} - 1\right) \label{eq:wasserverschneidung} $$

### High Gravity Verschneidung

Wird mit High Gravity gebraut, kann mit \eqref{eq:wasserverschneidung} die Wassermenge berechnet werden, um auf die Zielstammw&uuml;rze zu kommen.

$$ \begin{align}
V_{HighGravity} &= V_{Kochende} \cdot \left(\frac{sw_{Kochende}}{sw_{Anstellen}} - 1\right)
= V_{Kochende} \cdot \left(\frac{sw_{Anstellen} \cdot f_{HighGravity}}{sw_{Anstellen}} - 1\right) \nonumber \\
&= V_{Kochende} \cdot f_{HighGravity} - V_{Kochende} \nonumber = V_{Ziel} - V_{Kochende} \nonumber \\
&= V_{Ziel} - \frac{V_{Ziel}}{f_{HighGravity}} = V_{Ziel} \cdot \left( 1 - \frac{1}{f_{HighGravity}} \right) \nonumber
\end{align} $$

### Gesamte Wassermenge

Die gesamte (voraussichtlich) ben&ouml;tigte Wassermenge ergibt sich aus den Einzelkomponenten

$$ \begin{align}
V_{Gesamt} &= V_{Hauptguss} +  V_{Nachguss} + V_{HighGravity} \\
&= \left( V_{Hauptguss} \right) + \left( V_{Kochbeginn} + V_{Treberwasser} - V_{Hauptguss} + V_{KorrekturNachguss} \right) + \left( V_{Ziel} - V_{Kochende} \right) \nonumber \\
&= V_{Kochbeginn} + V_{Treberwasser} + V_{KorrekturNachguss} +  V_{Ziel} - V_{Kochende} \nonumber \\
&= V_{Kochende} + V_{Verdampfung} + V_{Treberwasser} + V_{KorrekturNachguss} +  V_{Ziel} - V_{Kochende} \nonumber \\
&= V_{Ziel} + V_{Verdampfung} + V_{Treberwasser} + V_{KorrekturNachguss}
\end{align} $$

Die Gesamtwassermenge ist also unabh&auml;ngig von der High Gravity.

### Grainfather G30

$$ V_{Hauptguss} = 2.7 \cdot m_{Malz} + 3.5 $$

$$ V_{Nachguss} = \begin{cases}
V_{Kochbeginn} + 0.8 \cdot m_{Malz} - V_{Hauptguss} + V_{KorrekturNachguss} & \text{wenn } m_{Malz} &gt; 4.5 \\
V_{Kochbeginn} + 0.8 \cdot m_{Malz} - 2 - V_{Hauptguss} + V_{KorrekturNachguss} & \text{sonst}
\end{cases} $$

**Quelle:** [Grainfather](http://grainfather.com/wp-content/uploads/2019/09/V7_G30_GERMAN.pdf)

### Klarstein Brauheld Pro

$$ V_{Hauptguss} = 2.7 \cdot m_{Malz} + 3.2 $$

$$ V_{Nachguss} = V_{Kochbeginn} + 0.8 \cdot m_{Malz} - V_{Hauptguss} + V_{KorrekturNachguss}  $$

**Quelle:** User aus [Hobbybrauer.de](http://hobbybrauer.de)

## Einmaischtemperatur

Die Einmaischtemperatur ergibt sich aus der Mischungstemperatur gem&auml;&szlig; ["Mischungstemperatur"](sonstiges.html#mischungstemperatur)

$$ T_{Wasser} = T_{Rast} + \frac{m_{Malz} \cdot c_{Malz}}{V_{Wasser} \cdot \rho_{Wasser} \cdot c_{Wasser}} \cdot (T_{Rast} - T_{Malz}) $$

mit folgenden Annahmen

$$ T_{Malz} = 18 $$

$$ \rho_{Wasser} = \rho_{Wasser}(20) = 0.998 $$

## Sudhausausbeute

Die Sudhausausbeute wird nach Kochende ermittelt.

$$ m_{Kochende} = V_{Kochende} \cdot sg(sw_{Kochende}) $$

Die spezifische Dichte wird gem&auml;&szlig; ["plato → sg"](umrechnungen.html#plato--sg-spezifisches-gewicht-1) berechnet.

F&uuml;r die Sudhausausbeute interessiert nur der Stammw&uuml;rz Anteil aus dem Malz.
Deswegen werden vom gemessenen Wert die Anteile aus den weiteren Zutaten abgezogen.

$$ SHA = \frac{\left(sw_{Kochende} - sw_{ZutatenMaischen} - sw_{ZutatenKochen}\right) \cdot m_{Kochende}}{m_{Malz}} $$

## Effektive Sudhausausbeute

Die effektive Sudhausausbeute wird vor dem Anstellen ermittelt.
Dieser Wert dient als Richtwert f&uuml;r zuk&uuml;nftige Sude und kann f&uuml;r die Sch&uuml;ttungsberechnung \eqref{eq:Schuettung} herangezogen werden.

$$ m_{Anstellen} = V_{Anstellen} \cdot sg(sw_{Anstellen}) $$

Die spezifische Dichte wird gem&auml;&szlig; ["plato → sg"](umrechnungen.html#plato--sg-spezifisches-gewicht-1) berechnet.


F&uuml;r die Sudhausausbeute interessiert nur der Stammw&uuml;rze Anteil aus dem Malz.
Deswegen werden vom gemessenen Wert die Anteile aus den weiteren Zutaten abgezogen.

$$ SHA_{Effektiv} = \frac{\left(sw_{Anstellen} - sw_{ZutatenMaischen} - sw_{ZutatenKochen}\right) \cdot m_{Anstellen}}{m_{Malz}} $$
