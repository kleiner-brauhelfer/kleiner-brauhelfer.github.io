---
layout: page
title: Wasser
parent: Rezept
grand_parent: Programmreiter
order: 9
nav_order: 9
---

1. TOC
{:toc}

## Kapitel Wasser

Die zentralen Werte alle Wassergüsse sind im Kapitel Wasser aufgelistet. Nicht alle Angaben sind dabei ständig verfügbar; einige werden nur im Fall bestimmter Konfigurationen angezeigt.

### Vom Hauptguss bis zum Nachguss

Die Gesamtwassermenge ist eine Schätzung anhand erprobter Faktoren. Die Schüttungsmenge bestimmt dabei nicht allein die Wassermenge des Brautages, auch technische Eigenheiten machen die Gesamtwassermenge zu einer individuellen Angelegenheit des Brauers. "Never touch a running system," heißt es deshalb in der IT nicht umsonst.

Folgende Tabelle gibt einen Überblick über die Abhängigkeiten; grundlegende Eckdaten wie **Menge**, **Stammwürze**, **Verdampfungsrate**, **Sudhausausbeute** und **Gesamtschüttung** stehen dabei in Bezug zu allen Wasseranteilen und werden daher nicht gesondert ausgewiesen:

| Art des Gusses          | Sichtbarkeit      | spezifische Abhängigkeit                                   |
|:---------------------  -|:------------------|:-----------------------------------------------------------|
| Gesamt                  | ständig           | Kochdauer, Nachisomerisierungszeit                         |
| Hauptguss               | ständig           | Hauptgussfaktor                                             |
| Empfohlen               | fakultativ        | Anteil % des empfohlenen Hauptgusses                       |
| Nachguss                | ständig           | Hauptgussfaktor, Kochdauer, High-Gravity-Faktor, Korrektur |
| High-Gravity-Verdünnung | fakultativ        | High-Gravity-Faktor                                        |

Die wichtigsten Berechnungen beim Wasser werden folgend berechnet:

| Hauptguss | Schüttung * Hauptgussfaktor                                 |
| Nachguss  | Wunschmenge + Gesamtschüttung + 1,7 - Hauptguss + Korrektur |

Die Korrektur kann im **Reiter Ausrüstung** unter Korrektur der berechneten Nachgussmenge eingestellt werden.

Beispiel: Für 25 Liter bei 90 min im Einkocher beträgt ein _Korrekturwert_ jedes Mal 3 Liter. Statt dies bei jedem Sud aufs Neue auszumessen, werden ab einem bestimmten Erfahrungswert 3 Liter Korrekturwert eingestellt.

Der Erfahrungswert auf einer Anlage kann sich bereits bei 3 bis 5 Suden einstellen, vorausgesetzt die Parameter bleiben hinreichend konstant. 10 Sude dürfen als gefestigte Datenquelle gelten, die auch weniger konstante Sude zu keinem Problem für die Wasserberechnung macht. Zwar beruhen die Wasserwerte auf einer Faustformel, die für sich allein entsprechend ungenau ist, jedoch wird im Reiter Ausrüstung mit fortschreitender Sudanzahl ein recht zuverlässiger Mittelwert gebildet.

<span style="color: #f44336">**Achtung:**</span> Bei übernommenen Rezepten wird der Wert der Gesamtwassermenge zumeist abweichen. Grund ist die Beschaffenheit der individuellen Brauanlage. Dies ist kein Fehler, im Gegenteil: Der Kleine Brauhelfer passt das Rezept an.

### High-Gravity-Verdünnung

Wenn die Sudpfanne an ihre Grenze kommt, kann mit High Gravity die Ausschlagmenge erhöht werden. Bei dem Verfahren wird stärker eingebraut, vor der Hefegabe wird dann wieder auf die gewünschte Stammwürze verdünnt.

Die eingestellte Prozentzahl reduziert die Menge des Nachgusses und erhöht Stammwürze und Bittere/IBU.

Die Methode eignet sich im Rahmen des Möglichen für zu kleine, limitierte Anlagen, um Sude mit hoher Stammwürze zu brauen, bei denen die Ausschlagmenge sonst zu gering wäre. Im Fachsprech werden solche Sude Platobomben genannt. 

Menge, Stammwürze und IBU werden also unverändert als Zielwerte für das fertige Bier eingetragen. Der Prozentwert von High Gravity wird dabei in der Theorie solange erhöht, bis die Würzemenge Pfanne voll in der Sudpfanne ist. Tatsächlich setzt diesem Ansinnen die Praxis eine Grenze, denn <span style="color: #3978A6">**zu beachten ist:**</span> Viele Hobbybrauer nutzen den Gravity-Bereich bei weitem nicht aus, sie nutzen lediglich zwischen 5 und 20 %, wobei 10 bis 15 % Durchschnitt sind. Bei High Gravity geht es denn oft nicht darum die Ausstoßmenge ins Unermessliche zu verlängern, sondern darum ein Fass oder vorhandene Flaschen vollzukriegen. Die Begrenzung hat vor allem geschmackliche Gründe und ist damit der Qualität geschuldet. Es wird empfohlen sich langsam an einen praktikablen Faktor heranzustasten

Die erreichten Werte werden nach dem Kochen im **Kapitel Anstellen** im _Reiter Braudaten_ wie bei einem normalen Brauvorgang als **Wassermenge für Verdünnung** eingetragen; die Stammwürze muss dabei imm gespindelt oder mit dem Refraktometer ermittelt werden.