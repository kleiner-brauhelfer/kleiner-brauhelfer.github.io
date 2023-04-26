---
layout: page
title: Rezept
parent: Rezept
grand_parent: Programmreiter
order: 1
nav_order: 1
---

1. TOC
{:toc}

## Kapitel Rezept

Die Grundzüge eines jeden Braurezeptes werden in der linken Fensterhälfte entwickelt. In ihm werden die Grunddaten erfasst: Wie stark ist mein Bier, wie bitter, wie lange koche ich den Hopfen, wie stark karbonisiere ich? Alle diese Fragen inkludieren ein profundes Wissen über den Bierstil, die Bierkategorie, die Eckdaten eines Rezeptes, die den Raum für die Schüttung, die Hopfung und die Hefegabe im kreativen Mittelteil des Fensters Rezept skizzieren.

![image](/assets/images/pictorial/0101_grunddaten_web.png)

### Sudname, Sudnummer, Kategorie und Anlage

Der Name ist der erste Schritt zum eigenen Rezept. Biernamen sind bei Hobbybrauern oft Teil der Kreativität und werden oft als Gegenentwurf zu kommerziellen Bieren gewählt. 

Der Kleine Brauhelfer nummeriert die Sude nicht automatisch. Um späteren Verwechselungen vorzubeugen, sollte ein Sud zu nummeriert werden. Es empfiehlt sich eine fortlaufende Nummerierung.

Die Stilkategorie schließlich wird hier aus der Liste gewählt oder im eigenen Fenster, zu erreichen über das Bleistiftsymbol, angelegt und verwaltet. Auch hier ist der Brauer frei, seine eigenen Sortierregeln anzuwenden. Werden Rezepte jedoch getauscht, veröffentlicht oder diskutiert, empfiehlt es sich aus Gründen der Vergleichbarkeit eine anerkannte Taxonomie wie die Bierstile des BJCP zu verwenden, die nach Bierstilen und ihren Kategorien unterscheiden, beispielsweise American Pale Ale (18B) – Pale American Ale.

Schließlich muss die Brauanlage gewählt werden. Sie ist der erste Schritt zu den Berechnungen im Rezept. Ein Klick auf den Bearbeitungsbutton öffnet das **Modulfenster Ausrüstung**.

### Menge, Stammwürze, SHA, Hauptgussfaktor und High-Gravity

Im Bereich Stammwürze und Hauptgussfaktor werden alle Faktoren eingestellt, die vor allem für das Maischen wichtig sind. Angefangen mit der Menge, die exakterweise die angestrebte Ausstoßmenge beschreibt, über die Stammwürze und die Sudhausausbeute, werden hier grundlegende Rezepteinstellungen gemacht.

Indes wird die Sudhausausbeute vom Programm vorgeschlagen. Ursächlich ist dafür die gewählte Anlage, die ihre Daten wiederum vom **Reiter Ausrüstung** bezieht.

Viele Felder im Kleinen Brauhelfer arbeiten nur zuverlässig, wenn andere Rezeptteile mit Daten gefüttert wurden. So ist das auch mit dem Hauptgussfaktor, der das Verhältnis Einmaischwasser (Hauptguss) zur Schüttung beschreibt. Damit er konkret arbeitet, sollte die Schüttung im **Submenü Maischen** vorher eingetragen werden. Zusammen mit der Stammwürze errechnet sich der empfohlene Hauptgussfaktor. Es steht dem Anwender frei davon abzuweichen, allgemein sollte man aber den Empfehlungen folgen. Wird der Hauptgussfaktor erhöht, verringert sich der Nachguss und umgekehrt.

High-Gravity ist ein Verfahren, um den Sud stärker einzubrauen. Dazu wird Brauwasser zurückgehalten. Erst beim Anstellen wird mit Wasser auf die gewünschte Stammwürze verdünnt.

#### Hauptgussfaktor Diskussion

Die Empfehlung ergibt sich aus der Bierfarbe und sollte übernommen werden.

Beispiele:
<table>
  <tr><td>0 EBC</td><td>Faktor 4</td></tr>
  <tr><td>25 EBC</td><td>Faktor 3,5</td></tr>
  <tr><td>50 EBC</td><td>Fakor 3</td></tr>
</table>

Ausnahmen bestätigen die Regel: Bei mächtigen Schüttungen ist es oft nötig, den Hauptgussfaktor abzusenken. In vielen Fällen ist das tolerabel, Vor- und Nachteile sollten aber immer abgewogen werden.

Generell sollten die Werte um 3,0 und höher liegen. Gewarnt wird übereinstimmend vor einem Faktor tiefer als 2,5. Unter diesem Wert ist die Maische zu dick, das Malz wird schlecht gelöst, brennt leicht an.

Ist die Brauanlage limitiert, der Sud aber zu mächtig, ist eine Sudteilung oder High Gravity eine Überlegung wert.

#### High-Gravity-Faktor Diskussion

Die High-Gravity-Methode eignet sich im Rahmen des Möglichen für zu kleine, limitierte Anlagen, um Sude mit hoher Stammwürze zu brauen, bei denen die Ausstoßmenge sonst zu gering wäre. Im Fachsprech werden solche Sude Platobomben genannt.

Das Verfahren ist für eine größere Ausschlagmenge als auf der Brauanlage üblich geeignet. Da das später hinzugegebene Wasser ab einem gewissen Grad nachteilig auf den Geschmack wirkt, ist High Gravity im Kleinen Brauhelfer zwar auf 50% beschränkt, dies ist jedoch ein viel zu großzügig bemessener Wert, der in der Praxis nie erreicht werden sollte. Als Obergrenze der Verdünnung gelten 20 %, üblich sind zwischen 5 % und 15 %. Dies hat vor allem geschmackliche Gründe und ist damit der Qualität geschuldet.

Bei High Gravity handelt es sich also um kein Verfahren, dass das doppelte aus dem Maischebottich herausholt, sondern nur um eines, das die Grenze etwas weiter dehnt.

### Bittere, Kochdauer, Verdampfungsrate und Nachisomerisierungszeit

Im Bereich von Bittere und Kochdauer werden Faktoren eingestellt, die für das Hopfenkochen elementar sind. Angefangen von der Bittere in IBU, die je nach Bierstil von 15 bis weit über 100 IBU liegen kann, rücken hier Kochdauer und Verdampfungsrate in den Vordergrund. Die Bittere steuert hier zunächst die Berechnung auf 100% im **Submenü Kochen**; d.h. der Alphawert einer Hopfensorte bestimmt anhand der Einstellung hier die Menge

Unter Kochdauer ist hier die maximale Kochdauer mit Beginn 100 °C gemeint – die Angabe hier begrenzt die maximale Zeitspanne im **Submenü Kochen**.

Die _Verdampfungsrate_ wird vom **Reiter Ausrüstung** eingetragen und kann auch nur dort geändert werden. Voreingestellt ist ein Wert von 2,0 l/h, bei Gaskochern kann die Verdampfungsrate aber auch über 3,0 l/h steigen. Ist man sich unsicher, sollte man anfangs die voreingestellten Werte unverändert belassen.

Unter _Nachisomerisierungszeit_ versteht sich die Zeitspanne zwischen 100°C und 80°C, in der Hopfen nach dem Hopfenkochen in der Heißwürze noch nahezu Kochtemperatur ausgesetzt ist und mit der Würze auf 80°C abkühlt. In vielen englischen Rezepten wird dies Flame Out genannt. Dabei gibt der Hopfen noch einmal Bittere und Aroma ab. Bei 80°C endet die Bitterung und Hopfen gibt nur noch Aromastoffe ab. Dahinter steht eine Kurve, die für die Isomerisierung ab 85 °C stark abflacht und die vom Kleinen Brauhelfer über eine Formel nachvollzogen wird. Bei unter 80°C findet keine Nachisomerisierung mehr statt. Hobbybrauer nutzen diese Temperaturstufe oft für den gezielten Aromaeintrag. Die Nachisomerisierungszeit wird zur Kochdauer addiert. 

Die Zeitspanne der Nachisomerisierung ist abhängig von den Kühlmöglichkeiten. Sie reicht vom Abkühlen über Nacht zu 2 Minuten mit einer Kühlschlange oder einem Plattenkühler.

Verschiedentlich wird die Nachisomerisierungszeit auch Flame-Out genannt, ungenau oft auch als Whirlpool, da dieser Prozessschritt ein Trubabscheidungsverfahren nach dem Kochen beschreibt, der oft mit der Nachisomerisierung zusammenfällt.

### Vergärungsgad und CO<sub>2</sub>-Gehalt

Der erwartete scheinbare Endvergärungsgrad ist eine Annahme, der nichts mit der eigentlichen Gärtätigkeit im **Reiter Gärverlauf** zu tun hat. Er hat zu diesem Zeitpunkt informativen Charakter und dient der Abschätzung des Alkoholgehalts.

Allgemein können die Angaben der Hefehersteller über den Vergärungsgrad im **Submenü Hefe** im Reiter Rohstoffe übernommen werden. Bei Starksuden übersteigt der tatsächliche Vergärungsgrad dagegen oft die Herstellerangaben, daher ist hier etwas Erfahrung gefordert.

Der CO₂-Gehalt definiert im Bier garantiert das prickelnde Geschmackserlebnis, auch Rezenz genannt. Ziel ist es, das CO₂ gut im Bier einzubinden.
Um Kohlendioxid ins Bier einzutragen, sind Verfahren wie das Karbonisieren mit Speise oder Zucker, das Grünschlauchen oder der Ausbau im Fass (Spunden) gebräuchlich. Der Kohlensäuregehalt schwankt je nach Biertyp und ist Teil eines jeden Bierstils.

Typische Werte für einzelne Bierstile sind: 

<table>
  <tr><td>Bierstil</td><td>Karbonisierung</td></tr>
  <tr><td>Lager, Pilsner</td><td>4,00 - 5,50</td></tr>
  <tr><td>Weizenbier</td><td>6,50 - 9,00</td></tr>
  <tr><td>Britische Ales</td><td>3,00 - 4,00</td></tr>
  <tr><td>Porter, Stout</td><td>3,40 - 4,50</td></tr>
  <tr><td>Belgische Ales</td><td>3,80 - 4,80</td></tr>
</table>

### Reifezeit

Der Kleine Brauhelfer berechnet die Reifezeit erst ab dem Abfülldatum. Die Reifezeit wird dabei im **Reiter Sudauswahl** "reif in… Tagen" dargestellt und verschwindet, wenn erledigt.

Eine Reifezeit von vier Wochen gilt als üblich, leichte Sommerbiere können auch nach zwei Wochen fertig sein. Fassgelagerte Biere und Spezialbiere reifen dagegen auch schon einmal ein Jahr. Als Faustregel gilt: Je höher die Stammwürze, desto länger die Reifezeit. 