---
layout: page_math
title: Umrechnungen
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

# Umrechnungen

## plato &harr; sg (spezifisches Gewicht)

<table class="table-bordered">
  <tr><td>Extrakt</td><td>\(plato\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Spezifische Dichte</td><td>\(sg\)</td><td>\([-]\)</td></tr>
</table>

**Quelle:** [Brewer's Friend](http://www.brewersfriend.com/plato-to-sg-conversion-chart/)

### plato &rarr; sg (spezifisches Gewicht)

$$ sg = 1 + \frac{plato}{258.6–\frac{plato}{258.2} \cdot 227.1} \label{eq:plato2dichte} $$


Alternative Formel (wird nicht verwendet)

$$ sg = \frac{261.11}{261.53 - plato} $$

### sg (spezifisches Gewicht) &rarr; plato

$$ plato = -616.868 + 1111.14 \cdot sg – 630.272 \cdot sg^2 + 135.997 \cdot sg^3 \label{eq:dichte2plato} $$


## Scheinbarer &harr; tats&auml;chlicher Restextrakt

<table class="table-bordered">
  <tr><td>Stammw&uuml;rze</td><td>\(sw\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Scheinbarer Restextrakt</td><td>\(sre\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Tats&auml;chlicher Restextrakt</td><td>\(tre\)</td><td>\([&deg;P]\)</td></tr>
</table>

### Scheinbarer &rarr; tats&auml;chlicher Restextrakt

$$ tre = 0.1808 \cdot sw + 0.8192 \cdot sre \label{eq:tre} $$

### Tats&auml;chlicher &rarr; scheinbarer Restextrakt

$$ sre = \frac{tre - 0.1808 \cdot sw}{0.8192} \label{eq:sre} $$
