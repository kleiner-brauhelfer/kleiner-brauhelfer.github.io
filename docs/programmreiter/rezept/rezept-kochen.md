---
layout: page
title: Kochen
parent: Rezept
grand_parent: Programmreiter
order: 4
nav_order: 4
---

1. TOC
{:toc}

## Submenü Kochen

In diesem Submenü wird die Hopfengabe zusammengestellt. Die Daten hierfür werden manuell eingegeben oder importiert und ergeben sich aus dem **Submenü Hopfen** im Reiter Rohstoffe. Vergärbare Zusätze werden gleichbehandelt; ihr Vergärungsgrad ergibt sich aus den Einstellungen im **Submenü Zusätze** im Reiter Rohstoffe.

![image](/assets/images/pictorial/0104_kochen-1_web.png)

### Hopfen und Zusätze hinzufügen

Mit Klick auf das Pluszeichen oder die Liste vorhandener Sude (Pfeil) öffnet sich eine Rohstoffliste verfügbarer Hopfen. Um eine Gabe auszuwählen muss sie mit Pfeiltasten oder Maus ausgewählt werden, zu erkennen an blauer Markierung. Vergisst man dies, erscheint kein Hopfen in der Liste im Submenü Kochen. Mehrere Hopfen per Shift oder Command auszuwählen ist nicht möglich.

![image](/assets/images/pictorial/0104_kochen-2_web.png)

Mit den Zusätzen verfährt man identisch.

### Menge, Bittere, Kochdauer - Verstehen der Felder Kochen

<span style="color: #3978A6">**Gut zu wissen:**</span> Die Berechnung bezieht sich nur auf die IBU, nicht auf das Aroma.

Die Felder für die Hopfengabe sind unterteilt in

| Menge/g und g/l |
| Bittere/IBU und % |
| Kochdauer/min |
| Gabenart |
| Alphawert/% |
| Ausbeute/% |
| Lagerbestand/g |

Jeder Hopfen und jedwede Zutat lässt sich aus der Rohstoffliste oder der Sammlung gebrauter Rezepte hinzufügen, erkennbar am Pluszeichen und schrägem Pfeil am unteren Fensterrand.

Ein wichtiges Pop-up-Feld befindet sich neben dem Ausdruck **Prozentanteil entspricht** am oberen Fensterrand: Mit _ignorieren_, _Gewicht_ und _Bittere (IBU)_ wird die Berechnungsart gewählt.

<span style="color: #3978A6">**Zu beachten:**</span> Importierte Rezepte werden oft mit Hopfenberechnung _ignorieren_ angezeigt. Vor einer Bearbeitung ist daher als erstes die Berechnungsart _Gewicht_ oder _Bittere (IBU)_ zu wählen. <span style="color: #3978A6">**Gut zu wissen:**</span> Beide Berechnungsarten – _Gewicht_ und _Bittere (IBU)_ – gehen vom gleichen Gewicht aus, unterscheiden sich bei zwei und mehr Hopfengaben aber in der Verteilung. Mehr dazu im folgenden Abschnitt.

Die einzelnen Zutaten können über die Pfeile rechts nach oben oder unten sortiert werden.

Die erste Hopfengabe wird mit 100 % eingetragen und ist als nicht bearbeitbar gesperrt, bis zum Zeitpunkt einer zwingenden zweiten Hopfengabe. Selbst ein Zusatz ändert daran nichts! Lediglich die Kochdauer und die Gabenart (Vorderwürze, Kochbeginn, Kochen, Kochende, Ausschlagen) kann bei Single-Hop-Suden geändert werden.

Liegt der Gabenanteil unter dem Lagerbestand, wird das Feld _Vorhanden_ rot markiert.

Liegt die Gesamtmenge mehrerer Gaben unter oder über 100 %, erscheint ein rot unterlegtes Korrekturfeld mit dem prozentualen Fehlbetrag. Ein Klick bei einem einzelnen Hopfen korrigiert die Gabe um den Fehlbetrag und das Feld verschwindet wieder. Alternativ erscheint oben im Fenster das rot unterlegte Feld **Ausgleichen**; ein Klick darauf verteilt die Fehlmenge gleichmäßig auf _alle_ Gaben.

Bei jeder Gabe besteht die Möglichkeit die Gesamtmenge im Rohstofflager im **Submenü Hopfen** des Reiters Rohstoffe über den Pfeil rechts hinzufügen; dies dürfte indes nur bei Restbeständen Sinn machen.

Das Feld Zusatz importiert Gaben zum Hopfen aus der Liste gebrauter Sude (Pfeil) oder dem gesamten Zusatzlager, etwa Irish Moos oder Hefenahrung.

#### Diskussion Berechnungsart Hopfen

Die Berechnungsart Gewicht berechnet die Gesamtbittere über das **Gewicht**, die **Bittere (IBU)** berechnet die Gesamtbittere über die IBU der einzelnen Hopfen. Am Ende kommt bei beiden Berechnungsarten der gleiche IBU-Wert heraus, das Gewicht und seine Verteilung variieren aber.

Ein Beispiel erklärt die **Berechnungsunterschiede** am besten. Ziel sei es 30 IBU zu erreichen. Man nehme:

> 1. Hopfen mit 6 % Alphasäure
> 2. Gewichtsverteilung 50 : 50 %
> 3. Kochdauer 70 min und 10 min

Der KBH muss jetzt die Hopfenmenge so ausrechnen, das mit gleichem Gewichtsanteil 50 % für beide Hopfengaben 30 IBU am Ende erreicht werden.

Für die Berechnung für 30 IBU nach Gewichtsverteilung werden bei einem Standardsud 20 l dazu 31,6 g Hopfen mit 6 % Alpha benötigt. Die Einstellung 50 : 50 % bedeutet, dass je 15,8 g verteilt werden, die erste Hopfengabe durch die längere Zeit einen höheren Anteil an der Bittere hat und damit mehr gewichtet wird:

> 1. Hopfengabe nach Gewicht 18,3 IBU
> 2. Hopfengabe nach Gewicht 11, 7 IBU

Für die Berechnung für 30 IBU nach IBU-Verteilung werden bei einem Standardsud 20 l dagegen 66,5 g Hopfen benötigt. Jetzt bedeutet die Einstellung 50 : 50 %, das von 30 IBU mit der ersten Hopfengabe 15 IBU erreicht werden soll und ebenfalls 15 IBU mit der zweiten, die zweite Hopfengabe durch die kürzere Zeit mehr gewichtet wird:

> 1. Hopfengabe 15 IBU benötigt 25,9 g
> 2. Hopfengabe 15 IBU benötigt 40,6 g benötigt

Das Fazinierende ist, dass beide Sude am Ende die gleiche Gesamtbittere haben, aber eine gänzlich andere Betrachtungsweise der Bittere.

Wozu und für wen ist diese Unterscheidung nun nützlich? Klar ersichtlich ist, dass die _Berechnung nach Gewicht_ die wirtschaftlichere ist, weil Gewicht über die Zeit Hopfen mehr isomerisiert und damit Bittereanteil einträgt. 
Gewicht macht Sinn bei Bierstilen, bei denen es vornehmlich auf die <span style="color: #3978A6">Bitterung</span> ankommt und Hopfen ansonsten nicht im Zentrum steht, wie etwa bei einem Weizen oder Münchener Hellem.

Bei der _Berechnung nach IBU_ ist die Hopfenmenge dagegen annähernd doppelt so hoch. Sie macht Sinn bei Bierstilen, bei denen es vornehmlich auf <span style="color: #3978A6">**Hopfenaromen und Hopfenöle**</span> ankommt und der Hopfen im Zentrum des Bierstils steht, wie etwa ein Pale Ale oder IPA.

Wenn es um darum geht, die Ziel-IBU zu erreichen, ist die Berechnungsart egal. Neben persönlichen Vorlieben des Braumeisters ist sie das beim Bierstil jedoch nicht.

#### Submenü Hopfen – Warnmeldungen

Jede Hopfengabe orientiert sich an der im Abschnitt Rezept festgelegten Bittere. Wird der dafür berechnete Wert aller Gaben unter- oder überschritten, erscheint oben im Submenü die Warnmeldung <span style="color: #f44336">Die Summe der angegebenen Hopfenmengen entspricht nicht der Gesamtmenge</span>. In diesem Fall müssen die Hopfengaben auf 100 % gesamt korrigiert werden. Entweder macht man das manuell bei jeder einzelnen Zutat oder man nutzt das Feld Ausgleichen oben rechts. Bei Rezepten mit festgelegtem Hopfenschema 

| Bitterung |
| Mittelgabe |
| Aromagabe |

wie (VWH)40-30-30 – empfiehlt sich das manuelle Vorgehen, um die prozentuale Verteilung beizubehalten.