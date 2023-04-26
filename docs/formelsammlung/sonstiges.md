---
layout: page_math
title: Sonstige Berechnungen
parent: Formelsammlung
nav_order: 10
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

# Sonstige Berechnungen

## Wasserdichte
<table>
  <tr><td>Dichte</td><td>\(\rho\)</td><td>\([kg/l]\)</td></tr>
  <tr><td>Temperatur</td><td>\(T\)</td><td>\([&deg;C]\)</td></tr>
  <tr><td>Volumen</td><td>\(V\)</td><td>\([l]\)</td></tr>
</table>

Die Dichte von Wasser in Abh&auml;ngigkeit der Temperatur in &deg;C wird mit folgendem Polynom approximiert

$$ \rho_{Wasser}(T) = \frac{a_0 + a_1 \cdot T + a_2 \cdot T^2 + a_3 \cdot T^3 + a_4 \cdot T^4 + a_5 \cdot T^5}{1 + b \cdot T} \cdot 10^{-3}$$

$$ \begin{align}
a_0 &= 999.83952 \nonumber \\
a_1 &= 16.952577 \nonumber \\
a_2 &= -0.0079905127 \nonumber \\
a_3 &= -0.000046241757 \nonumber \\
a_4 &= 0.00000010584601 \nonumber \\
a_5 &= -0.00000000028103006 \nonumber \\
b &= 0.016887236 \nonumber
\end{align} $$


Dichte f&uuml;r 20&deg;C und 100&deg;C

$$ \rho_{Wasser}(20) = 0.998 \nonumber $$

$$ \rho_{Wasser}(100) = 0.958 \nonumber $$


Volumen&auml;nderung von 20&deg;C nach 100&deg;C

$$ V_{100}= V_{20} \cdot \frac{\rho_{Wasser}(20)}{\rho_{Wasser}(100)} = V_{20} \cdot 1.0416 \nonumber $$


Volumen&auml;nderung von 100&deg;C nach 20&deg;C

$$ V_{20}= V_{100} \cdot \frac{\rho_{Wasser}(100)}{\rho_{Wasser}(20)} = V_{100} \cdot 0.9601 \nonumber $$


## Spindel Temperaturkorrektur
**Quelle:** [Fabier](http://www.fabier.de/biercalcs.html)

Die Bierspindel ist bei einer bestimmten Temperatur geeicht (meist 20&deg;C).
Wird die Messung bei einer anderen Temperatur durchgef&uuml;hrt, so muss der Wert korrigiert werden.

Ausgang der Korrektur sind die Dichtedaten von Saccharose-L&ouml;sung bei verschiedenen Temperaturen.
<table>
 <tr><td></td><td>\(0&deg;P\)</td><td>\(5&deg;P\)</td><td>\(10&deg;P\)</td><td>\(15&deg;P\)</td><td>\(20&deg;P\)</td><td>\(25&deg;P\)</td><td>\(30&deg;P\)</td><td>\(35&deg;P\)</td><td>\(40&deg;P\)</td></tr>
 <tr><td>\(0&deg;C\)</td><td>1.0002</td><td>1.0204</td><td>1.0418</td><td>1.0632</td><td>1.0851</td><td>1.1088</td><td>1.1323</td><td>1.1574</td><td>1.1840</td></tr>
 <tr><td>\(10&deg;C\)</td><td>0.9997</td><td>1.0196</td><td>1.0402</td><td>1.0614</td><td>1.0835</td><td>1.1064</td><td>1.1301</td><td>1.1547</td><td>1.1802</td></tr>
 <tr><td>\(20&deg;C\)</td><td>0.9982</td><td>1.0178</td><td>1.0381</td><td>1.0591</td><td>1.0810</td><td>1.1035</td><td>1.1270</td><td>1.1513</td><td>1.1764</td></tr>
 <tr><td>\(30&deg;C\)</td><td>0.9957</td><td>1.0151</td><td>1.0353</td><td>1.0561</td><td>1.0777</td><td>1.1000</td><td>1.1232</td><td>1.1473</td><td>1.1723</td></tr>
 <tr><td>\(40&deg;C\)</td><td>0.9922</td><td>1.0116</td><td>1.0316</td><td>1.0522</td><td>1.0737</td><td>1.0958</td><td>1.1189</td><td>1.1428</td><td>1.1676</td></tr>
 <tr><td>\(50&deg;C\)</td><td>0.9881</td><td>1.0072</td><td>1.0271</td><td>1.0477</td><td>1.0690</td><td>1.0910</td><td>1.1140</td><td>1.1377</td><td>1.1624</td></tr>
 <tr><td>\(60&deg;C\)</td><td>0.9832</td><td>1.0023</td><td>1.0221</td><td>1.0424</td><td>1.0636</td><td>1.0856</td><td>1.1085</td><td>1.1321</td><td>1.1568</td></tr>
 <tr><td>\(70&deg;C\)</td><td>0.9778</td><td>0.9968</td><td>1.0165</td><td>1.0368</td><td>1.0579</td><td>1.0798</td><td>1.1026</td><td>1.1262</td><td>1.1507</td></tr>
 <tr><td>\(80&deg;C\)</td><td>0.9718</td><td>0.9908</td><td>1.0104</td><td>1.0306</td><td>1.0517</td><td>1.0735</td><td>1.0963</td><td>1.1198</td><td>1.1443</td></tr>
 <tr><td>\(90&deg;C\)</td><td>0.9653</td><td>0.9842</td><td>1.0038</td><td>1.0240</td><td>1.0450</td><td>1.0669</td><td>1.0896</td><td>1.1130</td><td>1.1375</td></tr>
 <tr><td>\(100&deg;C\)</td><td>0.9584</td><td>0.9773</td><td>0.9968</td><td>1.0169</td><td>1.0379</td><td>1.0599</td><td>1.0825</td><td>1.1058</td><td>1.1301</td></tr>
</table>

**Quelle:** Zuckertechniker-Taschenbuch, Albert Bartens Verlage, Berlin, 1966, 7. Auflage

Zuerst wird die Dichte ermittelt (2-fache Interpolation), die die W&uuml;rze h&auml;tte, wenn der gemessene Wert bei Eichtemperatur der Spindel abgelesen worden w&auml;re.


Danach wird die Dichteverteilung f&uuml;r die tats&auml;chliche Temperatur ermittelt (Interpolation).
Also sozusagen eine horizontale Linie bei der tats&auml;chlichen Temperatur.


Schlie&szlig;lich wird die tats&auml;chliche Dichte berechnet (Interpolation) und der entsprechende Plato Wert ausgegeben.


Beispiel:

$$ \begin{align}
plato_{gmessen} &= 10, T_{gemessen} = 30,  T_{geeicht} = 20 \nonumber \\
dichte(plato_{gmessen}, T_{geeicht}) &= 1.0381 \nonumber \\
dichteverteilung(T_{gemessen}) &=
\begin{bmatrix}
0.9957 & 1.0151 & 1.0353 & 1.0561 & 1.0777 & 1.1000 & 1.1232 & 1.1473 & 1.1723
\end{bmatrix} \nonumber \\
plato_{wirklich} &= interpolation(dichteverteilung(T_{gemessen}), dichte(plato_{gmessen}, T_{geeicht})) = 12.7 \nonumber
\end{align} $$

Die Interpolation erfolgt jeweils mit einer Lagrange-Interpolation mit k=3.


## Mischungstemperatur
<table>
  <tr><td>Masse</td><td>\(m\)</td><td>\([kg]\)</td></tr>
  <tr><td>Spezifischen W&auml;rmekapazit&auml;t</td><td>\(c\)</td><td>\([kJ/(kg \cdot &deg;C])]\)</td></tr>
  <tr><td>Temperatur</td><td>\(T\)</td><td>\([&deg;C]\)</td></tr>
  <tr><td>Volumen</td><td>\(V\)</td><td>\([l]\)</td></tr>
  <tr><td>Dichte</td><td>\(\rho\)</td><td>\([kg/l]\)</td></tr>
</table>
**Quelle:** [Wikipedia](http://de.wikipedia.org/wiki/Richmannsche_Mischungsregel)

Je nach gew&uuml;nschter Gr&ouml;&szlig;e kann eine dieser Formeln verwendet werden

$$ T_m = \frac{m_1 \cdot c_1 \cdot T_1 + m_2 \cdot c_2 \cdot T_2}{m_1 \cdot c_1 + m_2 \cdot c_2} \label{eq:mischungstemperatur_tm} $$

$$ T_2 = T_{m} + \frac{m_1 \cdot c_1}{m_2 \cdot c_2} \cdot (T_m - T_1) \label{eq:mischungstemperatur_t2} $$

$$ m_2 = \frac{m_1 \cdot c_1}{c_2} \cdot \frac{T_m - T_1}{T_2 - T_m} \label{eq:mischungstemperatur_m2} $$

### Spezifischen W&auml;rmekapazit&auml;ten

Folgende konstante Werte werden f&uuml;r die Berechnungen angenommen

$$ c_{Wasser} = 4.2 \nonumber $$

$$ c_{Malz} = 1.7 \nonumber $$

### Spezifische W&auml;rmekapazit&auml;t einer Maische

Die Maische setzt sich zusammen aus einem Wasser- und einem Malzanteil.

$$ c_{Maische} = \frac{m_{Wasser} \cdot c_{Wasser} + m_{Malz} \cdot c_{Malz}}{m_{Wasser} + m_{Malz}} $$

$$ m_{Wasser} = V_{Wasser} \cdot \rho_{Wasser} \nonumber $$

## Ben&ouml;tigtes Gef&auml;&szlig;volumen
<table class="table-bordered">
  <tr><td>Volumen</td><td>\(V\)</td><td>\([l]\)</td></tr>
  <tr><td>Masse</td><td>\(m\)</td><td>\([kg]\)</td></tr>
  <tr><td>Verdr&auml;ngung</td><td>\(f\)</td><td>\([l/kg]\)</td></tr>
  <tr><td>Dichte</td><td>\(\rho\)</td><td>\([kg/l]\)</td></tr>
</table>

### Maischekessel

$$ V_{MaxMaischen} = V_{Hauptguss} + f_{MalzVerdraengung} \cdot m_{Malz} = V_{Hauptguss} + 0.75 \cdot m_{Malz}$$

### Sudpfanne

$$ V_{MaxKochen} = V_{Kochbeginn} \cdot \frac{\rho_{Wasser}(20)}{\rho_{Wasser}(100)} = V_{Kochbeginn} \cdot 1.0416 $$
