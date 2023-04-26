---
title: Editor
layout: page
parent: Etikett
grand_parent: Programmreiter
order: 1
nav_order: 1
---

1. TOC
{:toc}

## Der Editor

Der Reiter Etiketten ist ein optionales Modul. Um ihn zu nutzen, muss er vorher im Menü Einstellungen => Module aktiviert werden. 

Etiketten sind im Hobbybrauerbereich mit hohen Kosten und Aufwand verbunden. Nicht jedem Hobbybrauer liegt dieses Thema, das schnell zu einem Hobby im Hobby werden kann. Damit die Flaschen im Reifekühlschrank nicht verwechselt werden, gibt es die einfache Methode des Halsetiketts, auch Banderole genannt. Das ist zweckmäßig und schnell gemacht. Handelsübliches Druckerpapier 80 g/m₂ genügt hier vollkommen, geklebt wird beispielsweise mit verdünnter Milch.

![image](/assets/images/pictorial/0701_etikett-1_web.png)

### Mit Vorlagen arbeiten

Der kleine Brauhelfer bietet eine Reihe vorgefertigter Halsetiketten an, die über das Auswahlmenü oberhalb der Montagefläche festgelegt werden. 

| Streifen | simpel, farbig |
| Streifen | simpel, nummeriert |
| Halsspitz | simpel |
| Halsspitz | farbig |
| Streifen | simpel, farbig, nummeriert |

Anzahl, Breite und Höhe können im rechten Fensterbereich eingestellt werden; ebenso der Abstand für den späteren Zuschnitt.

Je nach Vorlage werden bestimmte Werte des Bieres automatisch aus dem Rezept übernommen. In der Regel sind dies

| Sudname |
| Sudnummer |
| Alkohol |
| Stammwürze |
| Bittere |
| Braudatum |
| Abfülldatum |

### Etiketten bearbeiten oder entwerfen

Die Etiketten können mit aller Arten Tags individuell gestaltet werden.

Anpassungen werden vor allem dann nötig sein, wenn der Brauer lange Namen für seine Biere bevorzugt. Dann reicht der Platz nicht.

Tags sind im **SVG-Editor** im unteren Bereich des Fensters in der rechten Hälfte an den Begriffen innerhalb Anführungszeichen zu erkennen, wie "CO₂" oder "Bittere" oder "Name". Dazu öffnet man mit Klick auf den Bleistift den Editor für die SVG-Datei. Im rechten Teilfenster sind alle Tags mit Werten im Ablauf des aktuelle Suds aufgelistet und in Kapiteln zu einer Tag-Familie zusammengefasst, beispielsweise "Rezept" oder "Sud". So gehört beispielsweise der Tag _Sudnummer_ zur Familie des Ober-Tags _Rezept_ und wird dort eingerückt aufgeführt.

Im linken Teilbereich steht der Code der SVG-Datei selbst, zu erkennen an den bunten Lettern. Hier werden die ausgelesenen Begriffe festgelegt und zwar jetzt mit  doppelgeschweiften Klammern. Der Tag Sudnummer wird also – auf den orangenen Begriff im Bild achten – so gesetzt :

![image](/assets/images/pictorial/0702_etikett-2_web.png)

Ein Tag im Etikett setzt sich also zusammen aus der Familie der Tags und dem Tag-Marker selbst. Im Fall der Sudnummer ist das einfach:

| [[Sud.Bittere]] | ausgegeben als | 104 |

Genauso gut könnte man jetzt die Sudnummer durch die Reifezeit ersetzen. Im Bild steht der Tag als "Reifezeit" unter der "Nummer".

Die Bittere und ihren Maßeinheit stellt man auf dem Etikett beispielsweise so dar:

| Bittere [[Sud.Bittere]] IBU | ausgegeben als | Bittere 41 IBU |

Die Vorlagen sind im **Inkscape-Format** gestaltet, einem Open Source Vektor-Programm. Sie finden sich im Ordner für den Kleinen Brauhelfer, der in den Einstellungen festgelegt wurde und sind dort unter dem Pfad Kleiner-Brauhelfer => data => Etiketten abgelegt.

Um grundständig neue Felder anzulegen, die Vorlagen umzugestalten oder ein Etikett von Grund auf zu machen, empfiehlt sich dringend eine externe Bearbeitung, an deren Ende man die Tags im Code definiert.

Für Fragen zur Benutzung von Inkscape hilft dessen Community. Inkscape ist für alle Plattformen verfügbar.

