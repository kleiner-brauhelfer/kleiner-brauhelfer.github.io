---
title: Eingabehilfen
layout: page
parent: Gärverlauf
grand_parent: Programmreiter
has_children: false
nav_order: 4
order: 4
---

1. TOC
{:toc}

## Helferlein

Der Button zum Hinzufügen einer Gärmessung öffnet eine Eingabehilfe als schwebendes Fenster.

Er ist nur so lange aktiv, wie der Sud im Reiter Braudaten als gebraut, nicht aber als abgefüllt im Reiter Abfülldaten markiert wurde.

In den Feldern werden gemesserner Restextrakt der Schnellgärprobe und die Temperatur eingegeben und der vom Alkohol verursachte Messfehler, der durch durch die verringerte Dichte und den veränderten Brechungsindex entsteht, korrigiert. 

Ein Messgerät muss zu Beginn ausgewählt werden:

1. Bei einer **Spindel** wird der ermittelte Wert in °Plato eingetragen und der Zuckerwert in Gramm pro Liter g/ml ausgegeben. Der Wert g/l wird automatisch berechnet und sollte unangetastet bleiben. Gleiches gilt für die Eichtemperatur, es sei denn, die Spindel ist auf einen anderen Wert als 20 °C geeicht.
		
2. **Refraktometer** messen den Stammwürzegehalt in °Brix. Ursprünglich aus der Wein- und Destillationsherstellung stammend, erfreuen sich Refraktometer auch bei der Bierherstellung großer Beliebtheit.
Ein Refraktometer misst die Brechungsindexes zweier transparenter Medien – hier Glas und Flüssigkeit – und verrechnet beide in einem Korrekturfaktor. Zusätzlich kommt die unterschiedliche Dichte durch den Alkohol und dessen veränderter Brechungsindex hinzu.
Die Terrill-Formel ist bei der Umrechnung bewährt. Ihr Korrekturfaktor von 1,030 sollte nur geändert werden, wenn man genau weiß, was man tut.
Die Stammwürze wird in °Plato umgerechnet und im Reiter Braudaten automatisch ausgegeben.

3. Das Feld **Andere** ist vorgesehen für Geräte mit anderen Messeinheiten, die in Zukunft implementiert werden.

Der ermittelte Restextrakt wird bereits unten im Helferlein angezeigt. Er wird automatisch im Submenü und im **Reiter Abfülldaten** eingetragen.

Mit dem Minussymbol entfernt man eine Messung. Jede Messung kann durch einen Doppelklick aufs Feld auch nachträglich verarbeitet werden.

Mit Version 2.5 ist es möglich, Messreihen externer Tools zu importieren. Diese Funktionalität wird stetig weiterentwickelt.

Der Button mit dem Pfeil öffnet ein Fenster, um eine CSV-Datei mit Messwerten zu importieren. Idealerweise sollte diese Tabelle die Spalten im **Reiter Gärverlauf** enthalten:

| Datum |
| scheinbarer Restextrakt SRE [°P] |
| Temperatur Temp. [°C] |
| Alkohol Alk. [%] |
| scheinbarer Endvergärungsgrad sEVG [%] |
| tatsächlicher Endvergärungsgrad tEVG [%] |
| Bemerkung |
