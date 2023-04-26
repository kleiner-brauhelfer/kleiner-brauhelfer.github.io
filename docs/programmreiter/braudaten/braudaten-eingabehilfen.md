---
title: Eingabehilfen
layout: page
parent: Braudaten
grand_parent: Programmreiter
has_children: false
nav_order: 7
order: 7
---

1. TOC
{:toc}

## Helferlein
Hinter den Kästchen mit den drei Punkten verstecken sich kleine Hilfsprogramme in diesem Reiter. Sie helfen, wenn es um die Umrechnung bei Messwerten der Stammwürze und der Dichte der Würze in Abhängigkeit von der Temperatur sowie bei mechanischen Mengenverlusten und Verdünnung geht.

Die Helferlein werden als schwebendes Fenster geöffnet. Es kann immer nur ein Fenster geöffnet sein. Bis zur Bestätigung oder Abbruch sind alle anderen Funktionen des Kleinen Brauhelfers gesperrt.

### **Stammwürze** bei Kochbeginn, Kochende und Anstellen
Mit diesen Zusatzfunktionen kann die Stammwürze _bei Kochbeginn_, _bei Kochende_ sowie _beim Anstellen_ anhand der Messdaten von **Bierspindel** oder **Refraktometer** berechnet werden. Dabei werden Eigenheiten der Messgeräte berücksichtigt. Das Messgerät wird in der Zeile "Messung mit" ausgewählt.

1. Bei einer Spindel wird der ermittelte Wert in °Plato eingetragen und der Zuckerwert in Gramm pro Liter g/ml ausgegeben. Zur Messung muss oben im Pop-up-Fenster **Spindel** ausgewählt und der gemessene Wert eingetragen werden. Der Wert g/l wird automatisch berechnet und sollte unangetastet bleiben. Gleiches gilt für die Eichtemperatur, es sei denn, die Spindel ist auf einen anderen Wert als 20 °C geeicht. Wichtig ist, die Temperatur der Schnellgärprobe einzutragen. Anhand der beiden Werte - Stammwürze in °P und Temperatur in °C - wird die reale Stammwürze im Reiter Braudaten automatisch eingetragen.
		
2. Refraktometer messen den Stammwürzegehalt überwiegend in °Brix. Ursprünglich aus der Wein- und Destillationsherstellung stammend, erfreuen sich Refraktometer auch bei der Bierherstellung großer Beliebtheit. Zur Messung muss oben im Pop-up-Fenster **Refraktometer** ausgewählt und der gemessene Wert eingetragen werden. Ein Refraktometer misst die Brechungsindexes zweier transparenter Medien – hier Glas und Flüssigkeit – und verrechnet beide in einem Korrekturfaktor. Daher sollte wider besseres Wissen der mit dem Wert 1,030 festgelegte Korrekturfaktor nur nach gründlicher Überlegung und Wissen geändert, ansonsten unangetastet werden lassen. Die Stammwürze wird in °Plato umgerechnet und im Reiter Braudaten automatisch ausgegeben.

3. Das Feld **Andere** ist vorgesehen für Geräte mit anderen Messeinheiten, die in Zukunft implementiert werden.

Der ermittelte Wert wird im Reiter Braudaten jeweils im Feld **Stammwürze bei Kochbeginn**, **Stammwürze bei Kochende** und **Stammwürze beim Anstellen** als korrigiertes Ergebnis in der linken Fensterhälfte ausgegeben.

### **Würzemenge** zu Kochbeginn (20 °C), Kochende (20 °C), Hopfenseihen

Mit den Zusatzfunktionen zumm Volumen kann die Würzemenge _bei Kochbeginn_, _bei Kochende_ sowie _beim Anstellen_ anhand von **Thermometers** und **Metermaß** o.ä. berechnet werden. Der Volumenunterschied der Würze bei 100 °C und 20 °C beträgt ungefähr 4 % oder in einem klassischen Einkocher 1,1 cm. Die Wärmebewegung kochenden Wassers eingerechnet, empfiehlt sich daher bei einem Standardsud von 20 l ein Abstand der Füllhöhe zur Oberkante von 3 cm in der Sudpfanne.

Gemessen wird das Würzevolumen mit einem Meterstab o.ä. vom Boden oder der Oberkante bis zur Füllhöhe aus. Die aktuelle Temperatur der Würzemenge ist einzutragen. Dies ist nötig, um das Volumen korrekt zu erfassen. Der Kleine Brauhelfer rechnet anschließend die Differenz der Temperatur auf das Standardvolumen bei 20 °C um. Der ermittelte Wert wird im Reiter Braudaten jeweils im Feld **Würzemenge bei Kochbeginn**, **Würzemenge bei Kochende** und **Würzemenge beim Anstellen** als korrigiertes Ergebnis in der linken Fensterhälfte ausgegeben.

### Würzemmenge nach dem Hopfenseihen

Die Würzmemge nach dem Hopfenseihen weicht generell von der Menge nach Kochende ab. Da das Hopfenseihen meist in den Fermenter oder einen anderen Behälter erfolgt, wird in diesem Helferlein nur der Volumenunterschied zwischen Basistemperatur 20 °C und gemessener Würzetemperatur ermittelt.
Die Abweichung ist abhängig vom Hopfentyp; Doldenhopfen bindet viel Flüssigkeit, Pellets weniger.

Sofern keine Messskala am Gärgefäß angebracht ist, muss das Volumen extern berechnet werden. Fermenter sind oft sehr unterschiedlich und gehren nicht mehr zur eigentlichen Brauanlage. Die Maße und damit der Inhalt können aber in externen Rechnern zum Bottichinhalt leicht berechnet werden.

Die Würzemenge nach dem Hopfenseihen ist ein Zwischenschritt, die die Ausstoßmenge im zuvor kalkulierten Rezept erkennen lassen sollte – abhängig von Verdünnung und weiteren Gaben zur Gärung. Sie liefert Informationen über Angaben zur Anlage und den Rezeptkalkulationen sowie der Sudarbeit selbst. Sie ist ein Wert, um abzuschätzen wie stark man in den kommenden Arbeitsschritten korrigierend eingreifen muss.

#### Tipp zur Volumenberechnung:

Hopbocks, Fermenter, Drucktanks und andere Gärgefäße ohne Skala kann man mit ihren Maßen im **Reiter Ausrüstung** bequem festhalten. Das Volumen der Würzemenge wird dann über einen Volumenrechner ermittelt. Beispiele für verschiedene Botticharten finden sich bei [Müggelland](http://brauerei.mueggelland.de/bottichinhalt.html). Noch genauer ist es, ein Gefäß vorab auszulitern und dann Markierungen anzubringen.

###  **Anstellmenge**
Die Würzmemge nach dem Hopfenseihen weicht generell von der Menge nach Kochende ab. Da das Hopfenseihen meist in den Fermenter oder einen anderen Behälter erfolgt, wird in diesem Helferlein nur der Volumenunterschied zwischen Basistemperatur 20 °C und gemessener Würzetemperatur ermittelt.
Die Abweichung ist abhängig vom Hopfentyp; Doldenhopfen bindet viel Flüssigkeit, Pellets weniger.

Die Anstellmenge ist die Menge Sud, der vergoren wird. Sie ist die Menge ab Gärungsbeginn.

Die Anstellmenge unterscheidet sich bei Entnahme von Speise für die spätere Karbonisierung signifikant von der Würzemenge. Die Speise wird später bei der Nachgärung wieder zugegeben. Dies wird im Tab Abfülldaten erfasst.

<span style="color: #3978A6">**Achtung:**</span> Speise neigt zur Infektion bei der Lagerung. Es besteht erhöhte Gefahr unerwünschter Keime oder Fehlgeschmäcker bei der späteren Gabe ins Jungbier einzutragen. Eine hygienische Aufbewahrung und eine baldige Kühlung schützt vor Enttäuschungen.