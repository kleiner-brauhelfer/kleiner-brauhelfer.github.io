---
title: Arbeitsblatt
layout: page
parent: Datenbank
grand_parent: Programmreiter
order: 1
nav_order: 1
---

1. TOC
{:toc}

## Das Arbeitsblatt

Vorab: Das Modul für die Datenbank erscheint über Ansicht => Datenbank als schwebendes Fenster und sollte nur von erfahrenen Anwendern und auch das nur mit Bedacht genutzt werden. Üblicherweise nutzt man die Datenbank, um Fehler in einem Rezept zu identifizieren, wie sie hin und wieder zu beobachten bei importierten Rezepten auftreten.

<span style="color: #f44336">**Achtung:**</span> Falsche Einträge können die ganze Datenbank zerstören und den Kleinen Brauhelfer 2 abstürzen lassen. Es empfiehlt sich vorab immer ein Backup der Datenbank zu machen!

### Zum Verständnis der Datenbank

Die folgenden Zeilen können nur eine gröbste Übersicht geben. Gegebenenfalls hilft es bei Problemen sich Hilfe im Forum von [hobbybrauer.de](https://hobbybrauer.de/forum/viewtopic.php?t=21510) zu holen.

![image](/assets/images/pictorial/1201_datenbank_web.png)

Zu sehen ist ein zweigeteiltes Fenster. Im oberen Bereich **Global** stehen **alle Daten** programmweit, im unteren nur solche, die den **Sud** direkt anlangen.

Über Global lassen sich sowohl weit- als auch engmaschige Datenbereiche auswählen. Ziel der Auswahlmenüs ist es, das Konvolut der Datensätze übersichtlich zu filtern und damit übersichtlicher zu machen.

#### Beispiel für Hopfen im Sud

Der Datenbereich _Sud_ öffnet den **Reiter Rezept** und zeigt pro Zeile eine Unmenge Spalten an. Wenn man jetzt einen Fehler bei _Hopfen_ auf die Spur kommen will, geht man in den unteren Bereich des Arbeitsblattes. Dort steht jetzt der gewählte Datenbereich Sud und daneben ein Auswahlmenü. Aus diesem wählt man den Bereich _Hopfengaben_ und hat voilà eine übersichtliche Darstellung der abhängigen Datensätze beim Hopfen. Den unteren Bereich kann man also auch als Filter vom Filter verstehen.

Wenn man dagegen in Global die Hopfengaben der Sud ID anwählt, macht der untere Teilbereich wenig Sinn; es sind zu wenige Informationen, um hier noch einmal sinnig zu filtern.

In den meisten Fällen wird der Anwender im Modul Datenbank mit dem Datensatz **Sud** arbeiten und diesen im unteren Arbeitsbereich filtern.