---
layout: page_math
title: Wasseraufbereitung
parent: Formelsammlung
nav_order: 8
---

1. TOC
{:toc}

---

# Wasseraufbereitung
<table class="table-bordered">
  <tr><td>Restalkalit&auml;t</td><td>\(RA\)</td><td>\([&deg;dH]\)</td></tr>
  <tr><td>pH-Wert</td><td>\(pH\)</td><td>\([-]\)</td></tr>
  <tr><td>Molekulargewicht</td><td>\(M\)</td><td>\([g/mol]\)</td></tr>
  <tr><td>H&auml;rte</td><td></td><td>\([&deg;dH]\)</td></tr>
  <tr><td>Volumen</td><td>\(V\)</td><td>\([l]\)</td></tr>
  <tr><td>Volumen Milchs&auml;ure</td><td>\(V_{Milchsaeure,ml}\)</td><td>\([ml]\)</td></tr>
  <tr><td>Menge Sauermalz</td><td>\(m_{Sauermalz,g}\)</td><td>\([g]\)</td></tr>
  <tr><td>Konzentration</td><td>\(k\)</td><td>\([0..1]\)</td></tr>
  <tr><td>Malzfarbe</td><td>\(c\)</td><td>\([EBC]\)</td></tr>
</table>

**Bemerkung:** 1&deg;dH ist definiert als 10 mg CaO (Kalziumoxid) pro Liter Wasser, was einer Konzentration von 0.1783 mmol/l oder 0.3566 mVal/l entspricht.

**Bemerkung:** Die Wasseraufbereitung ist zurzeit sehr einfach gehalten.

**Quelle:** [MaischeMalzundMehr](http://www.maischemalzundmehr.de/index.php?inhaltmitte=toolswasserrechner)

**Quelle:** [brau!magazin](http://braumagazin.de/article/von-der-wasseranalyse-zum-brauwasser/)

**Quelle:** [Braukaiser.com](http://braukaiser.com/documents/effect_of_water_and_grist_on_mash_pH.pdf)

## Restalkalit&auml;t

Die Restalkalit&auml;t ist die Menge an HCO3- in mmol/l, die unter Einbeziehung der Kalzium- und Magnesiumkonzentration im System verbleiben.
Eine Restalkalit&auml;t von 0 entspricht 0 mmol/l HCO3- und entspricht den Verh&auml;ltnissen in frisch destilliertem Wasser.
Eine negative Restalkalit&auml;t beschreibt dann den durch die Kalzium- und Magnesiumionen hervorgerufenen &Uuml;berschuss an H+-Ionen.

$$ Kalzium_{mmol/l} = \frac{Kalzium_{mg/l}}{M_{Kalzium}} = \frac{Kalzium_{mg/l}}{40.08} $$

$$ Kalziumhaerte = \frac{Kalzium_{mmol/l}}{0.1783} $$

$$ Magnesium_{mmol/l} = \frac{Magnesium_{mg/l}}{M_{Magnesium}} = \frac{Magnesium_{mg/l}}{24.31} $$

$$ Magnesiumhaerte = \frac{Magnesium_{mmol/l}}{0.1783} $$

$$ Karbonathaerte = HCO3_{mmol/l} \cdot 2.8 $$

$$ RA = Karbonathaerte - \frac{Kalziumhaerte + 0.5 \cdot Magnesiumhaerte}{3.5} $$

## Zugabe von S&auml;uren
### Milchs&auml;ure

Durch Zugabe von Milchs&auml;ure verringert sich die Restalkalit&auml;t wie folgt

$$ \begin{align}
\Delta RA &= \frac{\rho_{Milchsaeure,g/ml} \cdot k \cdot 1000}{M_{Milchsaeure} \cdot 0.3566} \cdot \frac{V_{Milchsaeure,ml}}{V} \\
&= \frac{1.206 \cdot k \cdot 1000}{90.08 \cdot 0.3566} \cdot \frac{V_{Milchsaeure,ml}}{V} = \frac{k}{0.0266} \cdot \frac{V_{Milchsaeure,ml}}{V}
\end{align} $$


Die ben&ouml;tigte Menge Milchs&auml;ure, um eine gew&uuml;nschte Restalkalit&auml;t zu erreichen ergibt sich dann aus

$$ V_{Milchsaeure,ml} = \Delta RA \cdot \frac{0.0266}{k} \cdot V $$


Milchs&auml;ure 80%

$$ V_{Milchsaeure,ml} = \Delta RA \cdot 0.033 \cdot V $$


### Salzs&auml;ure

Salzs&auml;ure 10%

$$ V_{Salzsaeure,ml} = \Delta RA \cdot 0.124 \cdot V $$


Salzs&auml;ure beliebige Konzentration

$$ V_{Salzsaeure,ml} = \Delta RA \cdot \frac{0.0124}{k} \cdot V $$


### Schwefels&auml;ure

Schwefels&auml;ure 10%

$$ V_{Schwefelsauere,ml} = \Delta RA \cdot 0.164 \cdot V $$

Schwefels&auml;ure beliebige Konzentration

$$ V_{Schwefelsauere,ml} = \Delta RA \cdot \frac{0.0164}{k} \cdot V $$


### Phosphors&auml;ure

Phosphors&auml;ure 10%

$$ V_{Phosphorsaeure,ml} = \Delta RA \cdot 0.332 \cdot V $$


Phosphors&auml;ure beliebige Konzentration

$$ V_{Phosphorsaeure,ml} = \Delta RA \cdot \frac{0.0332}{k} \cdot V $$


## Zugabe von Natriumhydrogenkarbonat (Backsoda)

1 mmol/l NaHCO3 bzw. 0.084 g/l erh&ouml;hen die Restalkalit&auml;t um genau 1 mmol/l (=2.8°dH)

$$ \Delta RA = \frac{2.8}{0.084} \cdot \frac{m_{Natriumhydrogenkarbonat,g}}{V} $$


Die ben&ouml;tigte Menge Natriumhydrogenkarbonat, um eine gew&uuml;nschte Restalkalit&auml;t zu erreichen ergibt sich aus

$$ m_{Natriumhydrogenkarbonat,g} = \Delta RA \cdot 0.03 \cdot V $$


## Zugabe von Sauermalz

Es wird angenommen, dass Sauermalz 2% Milchs&auml;ure, also 2 g Milchs&auml;ure pro 100 g Sauermalz, enth&auml;lt.

$$ \Delta RA = \frac{0.02 \cdot 1000}{90.08 \cdot 0.3566} \cdot \frac{m_{Sauermalz,g}}{V} = \frac{1}{1.6061} \cdot \frac{m_{Sauermalz,g}}{V} $$


Die ben&ouml;tigte Menge Sauermalz, um eine gew&uuml;nschte Restalkalit&auml;t zu erreichen ergibt sich aus

$$ m_{Sauermalz,g} = \Delta RA \cdot 1.6061 \cdot V $$


## pH-Wert der Maische
### pH-Wert von Malz

Experimentelle Versuche haben einen Zusammenhang zwischen Malzfarbe und pH-Wert aufgezeigt.
Der Zusammenhang ist f&uuml;r verschiedene Malztypen unterschiedlich.


Nicht-Caramalze

$$ pH_{Nicht-Caramalz} = -0.255 \cdot ln(c) + 6.156 $$


Caramalze

$$ pH_{Caramalz} = -0.289 \cdot ln(c) + 6.069 $$


R&ouml;stmalze & -getreide

$$ pH_{Roestmalz/-getreide} = 4.65 $$


### pH-Wert der Gesamtsch&uuml;ttung

Die pH-Skala ist logarithmisch. Deshalb ist die Mittelung folgenderma&szlig;en

$$ pH_{Schuettung} = -log_{10} \sum \left( 10^{-pH_{Malz}} \cdot p_{Malz} \right) $$

$$ p_{Malz} = \frac{m_{Malz}}{m_{Gesamt}} $$


### pH-Wert der Maische

Der pH-Wert der Maische setzt sich zusammen aus dem pH-Wert der Gesamtsch&uuml;ttung und der Restalkalit&auml;t

$$ pH_{Maische} = pH_{Restalkalitaet} + pH_{Schuettung} $$


Mit

$$ pH_{Restalkalitaet} = S_{pH} \cdot RA_{mol/l} = \left( 0.013 \cdot Maischdicke + 0.013 \right)  \cdot RA_{mol/l} $$

$$ Maischdicke = \frac{V}{m_{Gesamt}} $$

$$ RA_{mol/l} = \frac{RA}{2.8} $$
