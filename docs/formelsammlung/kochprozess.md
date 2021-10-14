---
layout: page_math
title: Kochprozess
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

# Kochprozess

<table>
  <tr><td>Hopfenmenge</td><td>\(m\)</td><td>\([g]\)</td></tr>
  <tr><td>Zeit</td><td>\(t\)</td><td>\([min]\)</td></tr>
  <tr><td>Stammw&uuml;rze</td><td>\(sw\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Apha</td><td>\(alpha\)</td><td>\([\%]\)</td></tr>
  <tr><td>Prozent</td><td>\(p\)</td><td>\([\%]\)</td></tr>
</table>

**Quelle:** [MaischeMalzundMehr](http://www.maischemalzundmehr.de/index.php?inhaltmitte=toolsiburechner)

## Hopfenausbeute

Die Ausbeute einer Hopfengabe wird mit der, von Glenn Tinseth empirisch ermittelten Formel, berechnet

$$ Ausbeute_{Tinseth}(t,sw) = 1.65 \cdot 0.000125^{0.004 \cdot sw} \cdot \frac{1 - e^{-0.04 \cdot t}}{4.15} $$

Die Tinseth Formel wurde mit Hopfendolden ermittelt. Es wird die Annahme getroffen, dass sich die Ausbeute bei Hopfenpellets um den Faktor \(1.1\) erh&ouml;ht.

Weiter wurde die Formel mit Hopfengaben direkt bei Kochbeginn ermittelt.
Um Ausscheidungen bei W&uuml;rzebruch zu kompensieren, wird bei Gaben nach dem W&uuml;rzebruch die Ausbeute ebenfalls um den Faktor \(1.1\) erh&ouml;ht.
Der W&uuml;rzebruch wird bei \(15min\) nach Kochbeginn angenommen.


Die Zeit \(t\) setzt sich aus der Kochdauer und der Nachisomerisierungszeit zusammen

$$ t = t_{Kochen} + t_{Nachisomerisierung} \cdot f_{Nachisomerisierung} $$


W&auml;hrend der Nachisomerisierung k&uuml;hlt sich die W&uuml;rze ab. Deswegen wird es um einen Faktor korrigiert

$$ f_{Nachisomerisierung} = 0.046 \cdot e^{0.031 \cdot T_{EndeNachisomerisierung}} $$

Als Vereinfachung wird von einer Temperatur am Ende der Nachisomerisierung von 80&deg;C ausgegangen

$$ T_{EndeNachisomerisierung} = 80^{\circ}C $$

$$ f_{Nachisomerisierung,80} = 0.046 \cdot e^{0.031 \cdot 80} = 0.549 $$

Die Stammw&uuml;rze wird aus dem Mittelwert zwischen der Stammw&uuml;rze bei der Hopfengaben und dem Wert bei Kochende berechnet

$$ sw_{Mittel} = \frac{sw_{Kochende} - sw_{Kochbeginn}}{t_{GesamteKochdauer}} \cdot \left(t_{GesamteKochdauer} - \frac{t_{Kochen}}{2} \right) + sw_{Kochbeginn} $$


Zusammen ergibt das

$$ Ausbeute = 1.65 \cdot 0.000125^{0.004 \cdot sw_{Mittel}} \cdot \frac{1 - e^{-0.04 \cdot (t_{Kochen} + 0.549 \cdot t_{Nachisomerisierung})}}{4.15} \cdot f_{Form} \cdot f_{Wuerzebruch} $$

$$ \begin{align}
f_{Form} &= \begin{cases} 1.1 & \text{Pellet} \\ 1.0 & \text{Dolden} \end{cases} \nonumber \\
f_{Wuerzebruch} &= \begin{cases} 1.1 & \text{wenn } t_{GesamteKochdauer} - t_{Kochen} > 15 \\ 1.0 & \text{sonst} \end{cases} \nonumber
\end{align} $$

Die Hopfenausnutzung (IBU) einer Gabe wird schlie&szlig;lich so berechnet

$$ IBU = \frac{10 \cdot m_{Hopfen} \cdot alpha}{V_{Ziel}} \cdot Ausbeute \label{eq:ibu} $$


## Hopfenaufteilung

Um Rezepte zu skalieren, k&ouml;nnen die Hopfengaben in Prozent angegeben werden.
Die Prozentangaben k&ouml;nnen sich entweder aufs Gewicht oder auf den IBU beziehen.


### Prozent des IBUs
Hier ist der Wert von 100% bekannt und entspricht dem gew&uuml;nschten IBU Wert aus dem Rezept. Durch umstellen von \eqref{eq:ibu} erh&auml;lt man

$$  m_{Hopfen}(p) = \frac{IBU \cdot V_{Ziel}}{10 \cdot alpha \cdot Ausbeute} = \frac{\frac{IBU_{Rezept} \cdot p}{100} \cdot V_{Ziel}}{10 \cdot alpha \cdot Ausbeute} $$

### Prozent des Gewichts

Hier muss der Wert von 100% (gesamte Hopfenmenge) &uuml;ber die Summe aller Hopfengaben zuerst berechnet werden

$$ m_{Gesamt} = \sum_{i} \frac{IBU_{Rezept} \cdot V_{Ziel}}{10 \cdot alpha_{i} \cdot Ausbeute_{i} \cdot \frac{p_i}{100}} $$


Die einzelne Hopfenmenge ist dann

$$  m_{Hopfen}(p) = m_{Gesamt} \cdot \frac{p}{100} $$


## Verdampfung
<table>
  <tr><td>Verdampfungsrate</td><td>\(Verdampfungsrate\)</td><td>\([l/h]\)</td></tr>
  <tr><td>Verdampfungsziffer</td><td>\(Verdampfungsziffer\)</td><td>\([\%/h]\)</td></tr>
  <tr><td>Kochzeit</td><td>\(t\)</td><td>\(min\)</td></tr>
  <tr><td>Volumen</td><td>\(V\)</td><td>\(l\)</td></tr>
</table>
### Verdampfungsrate

$$ Verdampfungsrate = (V_{Beginn} - V_{Ende}) \cdot \frac{60}{t} \label{eq:verdampfungsrate} $$

### Verdampfungsziffer

$$ \begin{align}
Verdampfungsziffer &= \frac{V_{Beginn} - V_{Ende}}{V_{Ende}} \cdot \frac{60}{t} \cdot 100  \label{eq:verdampfungsziffer} \\
&= \frac{Verdampfungsrate}{V_{Ende}} \cdot 100 \nonumber
\end{align} $$
