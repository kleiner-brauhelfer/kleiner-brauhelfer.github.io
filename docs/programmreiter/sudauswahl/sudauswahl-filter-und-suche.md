---
title: Filter und Suche
layout: page
parent: Sudauswahl
grand_parent: Programmreiter
nav_order: 1
order: 1
---

1. TOC
{:toc}

## Das Suchfeld

Zwei Buchstaben genügen bereits, um ein Ergebnis anzuzeigen. Die Zahl gebrauter, importierter und vorgemerkter Sude wird im Laufe einer Braukarriere merklich wachsen und damit immer unübersichtlicher werden. Aus diesem Grund verfügt der Kleine Brauhelfer über mächtige Filterfunktionen, deren Zusammenspiel indes der Erklärung bedarf.

Unterschieden wird dabei zwischen Prozessfiltern, die sich an Rezept, Brautag, Reifung und weiteren Daten orientieren und Datumsfiltern, die den Prozessfiltern untergeordnet sind und diese zusätzlich filtern.

![image](/assets/images/pictorial/0001_suddatum_web.png)

### Filter

Zentral ist der Filter _alle_. Wird er aktiviert, überschreibt er alle anderen Einstellungen und blendet alle Rezepte unabhängig von ihrem Status ein. Abgehakt löscht er dann alle anderen Filtereinstellungen mit dem Ergebnis einer leeren Liste. In der Praxis empfiehlt es sich, auf diesen Filter zu verzichten und ihn nur bei neuer Konfiguration zu nutzen.

Der Filter Rezept blendet dabei alle _ungebrauten Rezepte_ ohne weitere Markierung ein. Der Filter Rezept berücksichtigt keine gebrauten, abgefüllten oder verbrauchten Sude!

Anders verhält es sich mit den Filtern _gebraut_, _abgefüllt_ und _verbraucht_. Der <span style="color: #3978A6">**Filter gebraut**</span> markiert alle noch nicht abgefüllten Sude rot, die noch im **Reiter Abfülldaten** als abgefüllt bestätigt werden müssen. Der <span style="color: #3978A6">**Filter abgefüllt**</span> markiert alle noch nicht verbrauchten Sude grün, die noch im Reiter Abfülldaten als verbraucht bestätigt werden müssen. Der <span style="color: #3978A6">**Filter verbraucht**</span> schließlich ist auf die Bestätigung **Sud verbraucht** im Reiter Abfülldaten angewiesen; er markiert alle verbrauchten Biere grau.

Ist der Filter Merkliste aktiviert, färbt dieser alle gebrauten, abgefüllten und verbrauchten Sude blau, sofern ausgewählt. Der Filter Merkliste ist also ein Subfilter der vorhergehenden Filter.

### Datumsfilter

Der Datumsbereichfilter ist ein Subfilter, der die vorangegangen Filter zusätzlich eingrenzt. Er wird gerne zu Betrachtung eines Braujahres eingesetzt. Der Datumsbereichsfilter ist sehr sensibel und filtert oft alle Sude weg. Ist dem der Fall, hilft es die anderen Filter zu kontrollieren; insbesondere der _Filter verbraucht_ wird das größte Ergebnis anzeigen.

Das jeweilige Datum kann entweder manuell oder mittels der Helferlein gesetzt werden, die sich hinter dem Dreieck neben dem Datum verbergen.

<span style="color: #f44336">**Achtung:**</span> Ein falsch oder zu eng eingestellter Datumsfilter lässt oft alle Sude verschwinden, auch wenn die Filter _Rezept_, _gebraut_, _abgefüllt_ und _verbraucht_ gewissenhaft gesetzt wurden. Damit wieder Sude erscheinen, erweitert man den Zeitraum oder hakt den Datumsfilter ab.
