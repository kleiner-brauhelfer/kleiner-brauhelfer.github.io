---
layout: page
title: Maischplan
parent: Rezept
grand_parent: Programmreiter
order: 6
nav_order: 6
---

1. TOC
{:toc}

## Submenü Maischplan

In diesem Submenü wird der Maischablauf festgelegt. Es können beliebig viele Rasten angelegt werden. Die Comboauswahl stellt die gebräuchlichsten Rastnamen und ihre Temperaturbereiche zur Verfügung, es kann aber jeder beliebige Text eingetragen werden.

Der kleine Brauhelfer unterscheidet **drei Maischverfahren**:

<table>
<tr><td>1. Aufheizen (Kesselmaische)</td></tr>
<tr><td>2. Zubrühen (Bottichmaische, aufsteigende Infusion)</td></tr>
<tr><td>3. Dekoktion</td></tr>
</table>

Alle drei Maischverfahren können miteinander _kombiniert_ werden. Auch **Sonderformen** wie das _Earlsche Kochmaischverfahren_ als Form einer einfachen Dekoktion oder die **Mischform** aus Aufheizen und Zubrühen beim _Hermannschen Maischverfahren_ können komfortabel umgesetzt werden.

Wird ein Eintrag ausgewählt, wird eine Temperatur und Zeit vorgeschlagen, die dann nur noch angepasst werden muss.

#### Kleine Einführung: Warum Rasten und was das mit den Amylasen ist

Für das Verständnis der Rasten beim Maischen ist es hilfreich zu wissen, was Temperatur und Zeit im Malzschrot für Prozesse in Gang setzen. Damit nämlich aus Malz Bier wird, darf sich der Brauer nur in einem eng gesteckten Temperaturkorridor bewegen.

Damit aus Malz Würze wird, muss die Stärke des Malzes in kleinere Bruchstücke für den Hefestoffwechsel zerlegt werden. Diese Bruchstücke braucht die Hefe als Substrat, um später daraus Ethanol, Kohlendioxid, Phenole, Ester und andere Aromen zu machen. Hierzu katalysieren Enzyme, die sogenannten Amylasen, die wasserunlösliche Stärke, ein Polysaccharid, in hefefreundliche Zweifachzucker und weniger hefefreundliche Mehrfachzucker.

Die Amylasen werden bei bestimmten Temperaturen aktiviert und deaktiviert. Daraus ergeben sich beim Maischen die Rasten, mit denen man steuert, ob ein Bier trockener oder süßer wird, malziger oder hopfiger, stärker oder leichter wird oder malzfremde Zusätze gut verarbeitet werden. Oft helfen nämlich die Basismalze – Pilsener, Pale Ale, Wiener und Münchener – mit ihren Enzymen aus, wenn einer Zutat wie etwa Rohfrucht das Enzym zur Verzuckerung fehlt (weil die Spelze fehlt).

Die ß-Amylase spaltet aus der Stärke den vergärbaren Zucker, die Maltose oder Malzzucker, ab, ein Disaccharid, aus dem später Alkohol entsteht, die α-Amylase hingegen unvergärbare Mehrfachzucker, sogenannte Dextrine, der dem Bier seine Süße geben; sie sorgen für Vollmundigkeit und Restsüße.

Die folgenden Erläuterungen betrachten die gängigen Raststufen und Maischverfahren, angefangen beim Aufheizen, über das Zubrühen bis hin zur Dekoktion.


### Das Einmaischen
Allen drei Maischverfahren ist die Malzschüttung, Einmaischen genannt, vorgeschaltet. Beim Einmaischen unterscheidet man die **reine Wassertemperatur** und die **Einmaischtemperatur**.

![image](/assets/images/pictorial/0106_einmaischen_web.png)

Der Schritt des Einmaischens ist obligatorisch. Wird dieser Schritt vergessen, erscheint die Warnmeldung <span style="color: #f44336">Der erste Schritt sollte "Eimaischen" sein</span>. Das Einmaischen ist durch sechs Werte charakterisiert:

<table>
<tr><td>Wassermenge</td></tr>
<tr><td>Anteil in % des empfohlenen Hauptgusses</td></tr>
<tr><td>erforderliche Wassertemperatur für die:</td></tr>
<tr><td>a) Einmaischtemperatur in °C für die erste Rast</td></tr>
<tr><td>b) Malztemperatur in °C</td></tr>
</table>

Die erforderliche Wassertemperatur ergibt sich a) aus der Schüttung, b) aus dem Anteil des Hauptgusses und c) aus der Malztemperatur. Sie liegt immer über der Einmaischtemperatur.

Der _Anteil_ in _% des empfohlenen Hauptgusses_ ist abhängig vom gewählten Maischverfahren. Beim meistgenutzten Aufheizen ist er immer 100%.

Das Einmaischen kann man mit der ersten Raststufe zusammenlegen, in diesem Fall gibt man man den Wert bei der Einmaischdauer an. Bevorzugt man eine Trennung zwischen Einmaischen und 1. Raststufe, setzt man die Einmaischdauer auf Null.

### Die Raststufen beim Aufheizverfahren (Kesselmaische)

So das Maischverfahren mit Aufheizen gewählt ist, wählt man nach dem Einmaischen als zweiten Schritt die erste Raststufe aus. Dies ist stark abhängig vom Rezept und seinen Zutaten.

![image](/assets/images/pictorial/0106_aufheizen_web.png)

Der Kleine Brauhelfer bietet in der Comboauswahl geläufige und weniger geläufige vordefinierte Raststufen an, beileibe aber nicht alle.

Jede Raststufe beinhaltet die Werte

<table>
<tr><td>Rasttemperatur</td></tr>
<tr><td>Rastdauer</td></tr>
</table>

Bei vordefinierten Raststufen setzt der Kleine Brauhelfer übliche Werte ein.

β-Amylasen arbeiten am besten bei 62 °C, wegen der besseren Verkleisterung des Malzes werden aber meist 63 °C bevorzugt. Schon eine Abweichung um 3 °C schränkt die Produktivität der β-Amylasen um 50% ein. Die beliebte Kombirast (korrekt: Diastaserast, Single Infusion Mash) bei Hobbybrauern ist daher ein Zeit und Aufwand sparender Kompromiss - effektiver sind einzelne Rasten in Abfolge.

Beim Aufheizen wird für jede Raststufe  die Rasttemperatur in °C und die Rastdauer in Minuten benötigt.

Die vordefinierten Raststufen im Kleinen Brauhelfer beim Aufheizen (Kesselmaischverfahren) sind:

1. **Gummirast (Glukanaserast)**
Sie dient dem Abbau der Glucane (Gummistoffe aus den Zellwänden → Viskositätserniedrigung). Empfohlen bei Roggenbier und Bieren mit viskosen und pektinhaltigen Zutaten wie Kürbis.
Temperaturbereich: 35 - 40 °C 
Dauer: 20 min - 12 Std.

2. **Maltaserast (Hermann-Maischverfahren)**
Sie dient dem Bananenaroma in Weizenbieren. Erhöht den Glucosegehalt beträchtlich und verringert die Gärnebenprodukte. Maltase kann, als einziges Malzenzym, Glucoseeinheiten abspalten.
Temperaturbereich: 35° - 45°
Dauer: 30–45 min

3. **Weizenrast (Ferulasäurerast)**
Produziert das Nelkenaroma in Weizenbieren. Baut Ferulasäure-Pentan-Komplexe zu Ferulasäure ab, die Weizenbieren den typischen Geschmack gibt. Diese Rast wird oft in zwei Temperaturschritte aufgeteilt.
Temperaturbereiche: 45 °C und 48 °C
Dauer: je ca. 15 min

4. **Eiweissrast (Proteaserast)**
Diese Rast wird oft verwendet bei Bieren mit größeren Anteilen Rohfrucht wie Weizen. Baut Proteine in kleine Bruchstücke (Peptide, Aminosäuren, Stickstoffverbindungen) ab und bildet freiem Aminostickstoff als Hefenährstoff. eine Vorstufe, um die Amylasen von Gerstenmalz zu nutzen.
Temperaturbereich: 50 - 58 °C
Dauer: 10 - 20 min

5. **Maltoserast (1. Verzuckerung)**
Temperaturbereich: 60 - 65 °C
Die wichtigste Rast. Aktiviert die β-Amylasen, um langkettige Stärkemoleküle in Maltose vom Kettenende zu zerlegen. Der vergärbare Malzzucker ist die Hefenahrung schlechthin. Je länger diese Rast dauert, um so alkoholreicher und trockener wird das Bier und weniger Dextrine für die Vollmundigkeit bleiben übrig. Für ein eher süßes, vollmundiges Bier genügen 30 Minuten Rast. Bei spätestens 70 °C werden β-Amylasen inaktiviert. 
Dauer: 30 - 90 min

6. **Zwischenrast**
Die optionale Rast für einen höheren Vergärungsgrad macht mit einer vorherigen niedrigtemperaturigen Maltoserast und folgender Verzuckerungsrast bei einem mehrstufigen Rastverfahren Sinn.
Temperaturbereich: 65 - 70 °C
Dauer: 5 min - 30 min

7. **Verzuckerungsrast (2. Verzuckerung)**
Aktiviert die α-Amylasen, die durch Dextrine für Aromenbildung und Mundgefühl wesentlich zur Vollmundigkeit beitragen. Dextrine sind zwischen Stärke und Zucker angesiedelt und dienen als Trägerstoff für flüchtige Aromen. Nach dem Ende der Verzuckerungsrast ist oft Jodnormalität erreicht. Ist sie nicht erreicht, kann sie verlängert werden oder zum Abmaischen hochgeheizt werden.
Temperaturbereich: 68° - 76°
Dauer: 15 - 45 min

8. **Kombirast**
Dieses zeitsparendes Rastverfahren dient der gleichzeitigen Denaturierung der β-Amylasen und Verzuckerung durch  α-Amylasen. Beliebt ist 67°C als Standardtemperatur, das Bier ist dann weder zu süß noch zu trocken. Einschränkend ist zu erwähnen, dass der optimale Wirkungsgrad der einzelnen Amylasen mit diesem Verfahren nicht erreicht wird. Ist die Jodnormalität nach den angegebenen Dauer nicht erreicht, sollte die Rast verlängert oder zum Abmaischen leicht hochgeheizt werden.

Temperaturbereich: 65° - 70°
Dauer: 30 - 90 min

### Das Abmaischen

Abmaischen ist bei 78 °C voreingestellt, es muss indes aber – auch wenn es noch in vielen Lehrbüchern zur Bierbereitung steht – als überholt gelten. Meist ist mit der letzten Rast, der Verzuckerungsrast, Jodnormalität erreicht. Wenn nicht, wird die letzte Rast einfach verlängert. Üblich ist es aber, diesen letzten Schritt als eigenen Schritt _Abmaischen_ auszuweisen. Ein Aufheizen auf 78 °C Abmaischtemperatur ist nicht nötig, oft genügt die Temperatur der letzten Rast.

![image](/assets/images/pictorial/0106_abmaischen_web.png)

Der Kleine Brauhelfer verlangt den Schritt Abmaischen nicht ausdrücklich, jedoch ist er bei Bierrezepten üblich und sollte daher immer den Schlusspunkt des Maischplans setzen. Dies gilt für die **Maischverfahren** **Aufheizen**, **Zubrühen** bis zur **Dekoktion**. Der Punkt Abmaischen ist im Kleinen Brauhelfer allein über das Maischverfahren _Aufheizen_ vordefiniert verfügbar, kann aber auch manuell festgelegt werden.

#### Diskussion Jodnormalität, Abmaischtemperatur und Energiesparen

Wenig fürchtet der Brauer mehr als den **Blausud**, bei dem ein Restanteil Stärke in der Würze verbleibt. Der Sud wird dabei nicht komplett vergoren, das Bier erhält eine stärkere Trübung und in vielen Fällen einen Fehlgeschmack.

Üblicherweise ist die Maische nach der **Verzuckerungsrast** jodnormal, aber auch bei einer längeren **Maltoserast**, **Zwischenrast** oder **Kombirast** kann dies schon gegeben sein; der Faktor Zeit ist also auch zu berücksichtigen. Jodnormalität meint, dass alle Stärke verzuckert und alle Stärke in Würze gelöst ist.

Der gefürchtete _Blausud_ wird durch eine sich dunkelblau verfärbende Jodtinktur nachgewiesen. Ist dem der Fall, kann neben einer verlängerten letzten Rast eine leicht höhere Temperatur beim Abmaischen gewählt werden. Die Jodtinktur ist dann gelborange oder hellbraun. Bei höherem Rohfruchtanteil sollte bei kurzer Maltoserast einer hinreichenden Verzuckerung bei der letzten Rast oder beim Abmaischen ausreichend Zeit geschenkt werden

Nicht zuletzt empfiehlt es sich, seinen Beitrag in Zeiten von Energiekrise und Klimawandel im Verzicht auf das unnötige Abmaischen bei 78 °C zu leisten.

### Das Zubrühen (Bottichmaische, aufsteigende Infusion)

Das Zubrühen mit heißem Wasser auf die nächste Raststufe ist ein junges Verfahren, das mit der Craftbrauerszene aus den USA nach Europa kam. Es wird auch aufsteigende Infusion oder Bottichmaische genannt.

![image](/assets/images/pictorial/0106_zubruehen-1_web.png)

Das Maischverfahren vom Typ Zubrühen (Bottichmaische) unterscheidet sich in einigen Punkten vom Typ Aufheizen (Kesselmaische). Zunächst bietet die Comboauswahl hier nur einen einzigen Rasttyp **Kochendes Wasser** an. 
Die Felder ähneln dabei dem Einmaischen. Zur

<table>
	<tr><td>Rasttemperatur</td></tr>
	<tr><td>Rastdauer</td></tr>
</table>

kommen jetzt hinzu:

<table>
	<tr><td>Wassermenge</td></tr>
	<tr><td>Anteil […]% des empfohlenen Hauptgusses</td></tr>
	<tr><td>Wassertemperatur</td></tr>
</table>

<span style="color: #3978A6">**Zu beachten ist:**</span> Der empfohlene Hauptguss entspricht nicht dem Hauptguss. Vielmehr erscheint ein neues Feld, der **Empfohlene Hauptguss**, das bei Auswahl des Maischtyps _Zubrühen_ im rechten Fensterbereich im **Kapitel Wasser** angelegt wird.

![image](/assets/images/pictorial/0106_zubruehen-2_web.png)

<span style="color: #3978A6">**Wichtig:**</span> Es ist dringend angeraten, die empfohlene Menge des Hauptgusses als Grundlage für das Zusammenspiel der einzelnen Rasten beim Zubrühverfahren zu verwenden und den klassischen Hauptguss zu ignorieren. Andernfalls wird die Wassermenge zu groß.

Sobald der empfohlene Hauptgussmenge eingestellt ist, verschwindet das Feld _Empfohlen_.

Im Endeffekt bedeutet dies, dass sich der Anteil […]% des empfohlenen Hauptgusses weniger frei wählen lässt, da dieser mit der Zubrühtemperatur korreliert. Die gewählte Rasttemperatur entscheidet über den gewählten prozentualen Anteil des Hauptgusses. Grundlage ist dabei immer der Anteil des Hauptgusses beim Einmaischen. Je kleiner der prozentuale Anteil des Hauptgusses, um so weniger Wasser wird benötigt.

Indes ist beim Einmaischen darauf zu achten, dass der Hauptgussfaktor nicht unter den Wert 2,5 fällt. **Hauptguss und Empfohlener Hauptguss sollten beim Zubrühen deckungsgleich sein.** Dies ist das beste Verfahren, um die angepeilte _Sudhausausbeute im Reiter Braudaten_ zu erreichen.

#### Der Trick mit der Zubrühtemperatur

Je höher der Temperaturunterschied von der Ausgangstemperatur zur Zieltemperatur, desto größer die benötigte Menge Wasser beim Zubrühen. Mit einem Trick, der eigentlich keiner ist, wird die Zubrühmenge reduziert: 

Allgemein rechnet man mit 99 °C Zubrühwasser. Bis das Wasser von der Kochstelle genommen ist und auf der Maische aufgebracht ist, ist es jedoch unter 99 °C gesunken. Nicht nur die Maische, auch der Bottich absorbiert Temperatur. Deswegen werden 95 °C unter kochendem Wasser verstanden, auch wenn man es heißer aufträgt.

Der Unterschied zwischen 95 °C und 99 °C die Wassermenge anlangend ist nicht zu unterschätzen. Der Kleine Brauhelfer ist beim Zubrühverfahren auf 95 °C ausgelegt. Der Wert wird beim Anlegen einer Raststufe automatisch eingesetzt. Der Wert sollte nur in begründeten Fällen geändert werden.

#### Variation: Das Earlsche Kochmaischverfahren

Eine besonders beliebte Variante ist Earlsche Kochmaischverfahren. Es ist ein Hybridverfahren, angesiedelt zwischen Infusion und Dekoktion. Der Hobbybrauer Earl Scheid entwickelte diese moderne Dekoktion aus Platzgründen - es kommt als einziges Kochverfahren mit einem Kessel aus, und es werden keine Teilmaischen gezogen.

![image](/assets/images/pictorial/0106_earlsche-kochmaische_web.png)

Das Earlsche Kochmaischverfahren kann im Kleinen Brauhelfer mit einer Mischung aus Aufheizen und Zubrühen dargestellt werden, wobei die Felder für die Rasten für die Darstellung zu Informationen der Schüttungsanteile ergänzt werden.

Zunächst wird die Schüttung in **zwei Teile**, _Malz 1_ und _Malz 2_, geteilt, wobei _Malz 1_ bis zu 80% der Gesamtschüttung betragen kann. Ebenso wird das Maischwasser in etwa 2 gleich große Teile, _Guss 1_ und _Guss 2_ im halbiert.

Nach Maischen des ersten Teil Malz mit dem ersten Teil Maischwasser (**Malz 1 + Guss 1**) und anschließender Verzuckerung, wird diese Maische gekocht. Nun wird durch Vermischen mit dem **zweiten Teil Wasser**, _Guss 2_ in dem selben Kessel diese Kochmaische auf Einmaischtemperatur heruntergekühlt. Anschließend erfolgt mit dem restlichen _Malz 2_ die **zweite Schüttung**, wobei die Gesamtmaische nun endverzuckert und schließlich abgemaischt wird.

Zu beachten ist, dass das Verhältnis von _Guss 1_ zu _Malz 1_ den Wert von **2,5** des Hauptgussfaktors nicht unterschreitet. Wenn doch, muss die Schüttung reduziert oder der Gussanteil erhöht werden.

Der typische Maischplan nach Earl Scheid ist folgend aufgebaut:

1. Einmaischen mit 75 % der Schüttung und etwa 50 % vom Hauptguss
2. Erste ß-Amylase bei 62 °C, 30 Minuten
3. erste a-Amylase bei 72 °C, 30 Minuten (Iodprobe)
4. Kochen der Maische, 15-20 Minuten
5. Zuschütten der restlichen 50% vom Hauptguss
6. Zuschütten der restlichen 25% der Schüttung
7. Zweite ß-Amylase bei 62°C, 30 Minuten
8. Zweite a-Amylase bei 72°C, bis iodnormal (30-40 Minuten)
9. Bei Bedarf Abmaischen bei 78°C, 15-20 Minuten

### Die Dekoktion

Dekoktion ist ein traditionelles, mehrstufiges Maischverfahren, das sich durch Teilmaischen, Kochmaischen, Umschöpfen und Zubrühen auszeichnet. Anhänger dieses aufwendigen Verfahrens schwören auf seinen kernigen Geschmack und die hervorragende Maischarbeit, die oftmals Spezialmalze erübrigt; Dekoktion laugt die Spelzen besonders effektiv aus.

Es gibt drei Arten von Dekoktion:

<table>
<tr><td>Dreimaischverfahren</td><td>für dunkle Biere</td></tr>
<tr><td>Zweimaischverfahren</td><td>für helle Biere</td></tr>
<tr><td>Einmaischverfahren</td></tr>
</table>

Der Kleine Brauhelfer bietet vier Teilmaischen zur Auswahl an:

<table>
<tr><td>1/2 Dickmaische</td></tr>
<tr><td>1/3 Dickmaische</td></tr>
<tr><td>1/3 Dünnmaische</td></tr>
<tr><td>1/3 Läutermaische</td></tr>
</table>

Die Läutermaische ist immer die letzte Dünnmaische im Rastschema.

Dekoktion orientiert sich an der Gesamtmaischemenge, von der Teile abgezogen werden; die Schüttung selbst steht daher im Gegensatz zur Infusion nicht im Fokus. Entsprechend anders sind die Raststufen bei der Dekoktion aufgebaut:

<table>
<tr><td>Teilmaischemenge</td><td>Anteil % der Gesamtmenge</td></tr>
</table>

Mit Wahl der Teilmaischemenge setzt der Kleine Brauhelfer automatisch den prozentualen Anteil von Dick- oder Dünnmaische; üblicherweise sind die 50 oder 33 %. Das Volumen bezieht sich dabei auf den Hauptguss, bei der Dekoktion üblicherweise 100 %.

<table>
<tr><td>Teilmaischetemperatur</td><td>Kochdauer</td></tr>
</table>

Eng verbunden mit der Teilmaischemenge ist die Teilmaischetemperatur. Der Kleine Brauhelfer setzt sie bei 95 °C. Gemeint ist dabei die Temperatur der Teilmaische nach dem Kochen, wenn diese wieder zum Maischebottich zurückgegeben wird. Die Kochdauer beträgt durchschnittlich 10 - 20 Minuten.

<table>
<tr><td>Zusätzliche Rast</td><td>Rastdauer</td></tr>
</table>

Auf dem Weg zur Kochmaische können noch vorgelagerte Zwischen- oder Verzuckerungsrasten eingelegt werden. Dies hängt stark von der Handschrift des Brauers und seiner Geschmacksidee ab wie vom Bierstil selbst.

<table>
<tr><td>Maischetemperatur</td><td>Absetzdauer</td></tr>
</table>
 
Die Maischetemperatur ist die eigentliche Zielrast bei der Dekoktion und Ergebnis der Temperatur der vorhergehenden Rast und der zugeschöpften Kochmaische. Bevor eine Teilmaische gezogen werden kann, muss sich die Gesamtmaische absetzen; dies wird durch die Absetzdauer beschrieben.

#### Das Dreimaischverfahren

Nach dem Einmaischen bei 35 - 37 °C wird die Maische geteilt. Ungefähr 1/3 der Maische wird „dick“ entnommen und durch langsames Erwärmen (1 °C/min) im zweiten Topf, in der Regel die _Sudpfanne_ (**Pfannenmaische**), zum Kochen gebracht. Es ist nicht notwendig die völlige Verzuckerung der Maische abzuwarten. Eine Zwischenrast zum Verzuckern bei 70 -72 °C wird aber oft bei den Teilmaischen eingebaut.

Beim Kochen der entnommenen Maische werden die Zellen des Mehlkörpers gesprengt und damit den Amylasen zugänglich gemacht. Die in der **Kochmaische** enthaltenen Enzyme werden jedoch deaktiviert. Dies ist auch der Grund, warum die Pfannenmaische so dick und flüssigkeitsarm sein muss: der Enzymverlust soll möglichst gering sein.

Die Abbildung zeigt ein typisches Dreimaischverfahren für ein Böhmisches Pils:

![image](/assets/images/pictorial/0106_dekoktion-1-boehmisch_web.png)

Typisch ist das Dreimaischverfahren für dunkle, malzbetonte Biere wie Bock oder Doppelbock wie in folgender Abbildung dargestellt:

![image](/assets/images/pictorial/0106_dekoktion-2-bock_web.png)

Die Kochdauer der ersten Dickmaische (im Maischebottich) beträgt bei dunklem Malz in der Regel 30 - 45 Minuten, bei hellem Malz 10 - 20 Minuten.

Die gekochte Maische wird nun wieder in den Maischebottich zurückgepumpt oder -geschöpft. Dabei sollte man die **Restmaische gründlich aufrühren**, damit kein Verbrühen der Enzyme eintritt.

Durch das Zubrühen hat die **Gesamtmaische** nun eine Temperatur von 50 – 53°C. Hier wirken die Enzyme schon bedeutend kräftiger auf die zuvor gekochten Bestandteile ein. Bei dieser Temperatur verbleibt die Maische in der **Eiweißrast**, denn jetzt wiederholt sich der Vorgang mit der zweiten Dickmaische. Sie wird in 35 – 40 Minuten auf Kochtemperatur erhitzt und bei dunklem Bier 30 – 35 Minuten, bei hellem 10 – 20 Minuten gekocht. Anschließend folgt das Zurückpumpen oder Umschöpfen in den Maischebottich, wobei wieder darauf geachtet werden muss, dass die Restmaische nicht verbrüht wird.

Die Temperatur der Maische wird dadurch auf ca. 63°C angehoben und kommt in den Wirkungsbereich der β-Amylasen. Jetzt setzt der Stärkeabbau kräftig ein, der Extrakt- und Zuckergehalt der Maische steigt sprunghaft an. Der größte Teil der Festbestandteile ist durch das Kochen aufgeschlossen, verkleistert, verflüssigt oder sogar schon verzuckert.

Deshalb wird auch die dritte Kochmaische nicht mehr als Dickmaische, sondern als Läutermaische gezogen und enthält hauptsächlich flüssige, treberarme Maischteile. Sie wird in ca. 20 Minuten zum Kochen gebracht und 25 Minuten bei dunklen, 10 – 20 Minuten bei hellen Bieren gekocht. Die Menge der Läutermaische wird so gewählt (30 - 50% der Gesamtmaische), dass sich nach dem Zurückpumpen oder Zurückschöpfen eine Abmaischtemperatur von 76 – 78°C einstellt.

Das Dreimaischverfahren erfordert mit durchschnittlich 5 ½ Stunden viel Zeit und Energie und ist hauptsächlich für dunkle, enzymschwache Malze gedacht.

#### Das Zweimaischverfahren

Das Zweimaischverfahren leitet sich vom Dreimaischverfahren durch Weglassen einer der drei Kochmaischen ab und ist eine beliebte Variante.

![image](/assets/images/pictorial/0106_dekoktion-3-zweimaisch_web.png)

Bei einer Einmaischtemperatur von 50°C wird eine Eiweißrast zwischen 10 und 20 Minuten gehalten. Der Eiweißabbau kann durch die Wahl der Einmaischtemperatur zwischen 45 und 55 °C und durch die Länge der Eiweißrast gesteuert werden.

Die erste Dickmaische (ca. 1/2 oder 1/3 der Gesamtmaische), wird zwischen 68 und 72 °C bis zur Jodnormalität verzuckert und dann 20 Minuten gekocht. Anschließend wird sie wieder der Gesamtmaische zugebrüht, die dadurch eine Temperaturerhöhung auf ca. 65°C erfährt.

Die zweite Maische (dick oder dünn) verzuckert wiederum zwischen 68 und 72 °C bis zur Jodnormalität, wird anschließend 15 Minuten gekocht und in den Maischebottich auf 76 bis 78 °C aufgebrüht.

#### Die Einmaischverfahren

Bei den Einmaischverfahren – nicht zu verwechseln mit dem Einmaischen – ist stets eine Kombination von Dekoktions- und Infusionsverfahren notwendig, um den gesamten Temperaturbereich bestreichen zu können. Diese Verfahren sind vor allem zeitökonomisch ein Kompromiss, wenn man trotzdem auf den kernigen Geschmack einer Dekoktion nicht verzichten will.

1. Art: **Infusion vor dem Ziehen der Kochmaische**. Es wird bei 35 – 37°C eingemaischt, auf 50°C aufgeheizt und eine 20-minütige Eiweißrast gehalten. Dann aufheizen auf 65°C und 30 Minuten halten. Die Restmaische wird nun in den vorgewärmten Maischebottich gepumpt oder geschöpft, während eine Dickmaische von rund 50% in der Pfanne verbleibt. Nach vollständiger Verzuckerung bei 68 – 72°C und 20-minütigem Kochen wird auf Abmaischtemperatur aufgebrüht.

2. Art: **Infusion nach dem Zubrühen der Kochmaische**. Es wird bei 50 – 55°C eingemaischt und nach 10 – 15 Minuten Eiweißrast werden ⅔ der Restmaische abgetrennt. Das verbliebene Drittel wird verzuckert, gekocht und anschließend der Restmaische auf 65 – 70°C zugebrüht. Anschließend erfolgt die Verzuckerung der Gesamtmaische und das Aufheizen auf Abmaischtemperatur. Das Verfahren eignet sich für helle, elegante Biere.

3. Art: **Infusion der Restmaische**. Es wird wie bei Variante 2 verfahren, doch die Restmaische wird nach der Eiweißrast auf 62°C aufgeheizt und dort bis zum Zubrühen der Kochmaische belassen. Mit dieser wird die Abmaischtemperatur erreicht.

