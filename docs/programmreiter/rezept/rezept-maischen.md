---
layout: page
title: Maischen
parent: Rezept
grand_parent: Programmreiter
order: 3
nav_order: 3
---

1. TOC
{:toc}

## Submenü Maischen

In diesem Submenü wird die Schüttung zusammengestellt. Die Daten hierfür werden manuell eingegeben oder importiert und ergeben sich aus dem **Submenü Malz** im Reiter Rohstoffe. Vergärbare Zusätze werden gleichbehandelt; ihr Vergärungsgrad ergibt sich aus den Einstellungen im **Submenü Zusätze** im Reiter Rohstoffe.

![image](/assets/images/pictorial/0103_maischen_web.png)

### Malz und Zusätze hinzufügen

Mit Klick auf das Pluszeichen oder die Liste vorhandener Sude (Pfeil) öffnet sich die Rohstoffliste Malz. Um ein Malz auszuwählen muss es mit Pfeiltasten oder Maus ausgewählt werden, zu erkennen an blauer Markierung. Vergisst man dies, erscheint kein Malz in der Liste. Mehrere Malze per Shift oder Command auszuwählen ist nicht möglich.

Mit den Zusätzen verfährt man identisch.

### Menge, Prozent, Extrakt, g/l - Verstehen der Felder Maischen

Die Felder für die Malzgabe sind unterteilt in Menge/kg, Menge/% und Extrakt/°P. Jedes Malz und jedwede Zutat lässt sich aus der Rohstoffliste oder der Sammlung gebrauter Rezepte hinzufügen, erkennbar am Pluszeichen und schrägem Pfeil am unteren Fensterrand.

Die erste Hopfengabe wird mit 100 % eingetragen und ist nicht bearbeitbar gesperrt, bis nicht eine zweite Hopfengabe hinzugefügt wurde. Dies gilt auch für den Prozentwert. Selbst ein Zusatz ändert daran nichts.

Mit der zweiten Malzgabe wird in allen Schüttungsanteilen zusätzlich der prozentuale Anteil des Extraktes pro Malz eingeblendet.

Liegt dagegen der Schüttungsanteil über 100 %, erscheint ein rot unterlegtes Feld mit vorangestelltem Minuszeichen. Ein Klick darauf korrigiert die Gesamtschüttung auf 100 %, indem der Anteil der einzelnen Gabe abgezogen wird.

Das Feld für die Zusätze berechnet zusätzlich den Anteil am Extrakt von Beginn an. Dies ist im Zusammenspiel mit auch nur einem Malz sinnvoll, da Zusätze höchst unterschiedliche Vergärungsgrade haben.

Bei jeder Gabe besteht die Möglichkeit die Gesamtmenge im Rohstofflager im **Submenü Malz** des Reiters Rohstoffe über den Pfeil rechts hinzufügen; dies dürfte indes nur bei Restbeständen Sinn machen.

Die einzelnen Zutaten können über die Pfeile rechts nach oben oder unten sortiert werden.

#### Submenü Malz – Warnmeldungen

Wird der empfohlene Schüttungsanteil eines _einzelnen Malzes_ überschritten, erscheint unter diesem die Warnmeldung <span style="color: #f44336">Der maximal empfohlene Schüttungsanteil (%) wurde überschritten</span>. Dies kann ignoriert werden, wenn bestimmte Gründe dafür sprechen oder man nutzt das rot hinterlegte Feld **Ausgleichen** oben im Submenü rechts. Diese Funktion verteilt die Differenz gleichmäßig auf alle anderen Schüttungsanteile. Alternativ kann die Differenz manuell bei jeder oder einer einzelnen Gabe vorgenommen werden. Setzt man den Schüttungsanteil auf oder unter den empfohlenen Wert, Fall verschwindet die Warnmeldung.

Der empfohlene Schüttungsanteil der Mälzereien und Braushops wird im **Submenü Malz** im Reiter Rohstoffe definiert und kann dort jederzeit geändert werden. Dies sollte jedoch mit Bedacht geschehen.

Jede Schüttung orientiert sich an der im Abschnitt Rezept festgelegten Stammwürze und Sudhausausbeute. Wird der dafür berechnete Wert aller Schüttungsanteile unter- oder überschritten, erscheint die Warnmeldung <span style="color: #f44336">Die Summe der angegebenen Malzmengen entspricht nicht der Gesamtschüttung</span>. In diesem Fall muss die gesamte Schüttung korrigiert werden. Entweder macht man das manuell bei jeder einzelnen Zutat oder man nutzt das Feld Ausgleichen oben rechts. Bei Schüttungen mit festgelegten Anteilen empfiehlt sich das manuelle Vorgehen