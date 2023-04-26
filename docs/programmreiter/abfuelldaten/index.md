---
layout: page
title: Abfülldaten
nav_order: 4
parent: Programmreiter
screenshot: assets/images/screenshots/03_abfuelldaten
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Abfülldaten

Der Reiter Abfülldaten ist die zentrale Instanz, um das Jungbier von der Gärung bis auf Fass oder Flasche zu erfassen. Hier zeigt sich an der Entwicklung des Restextrakts, ob das Rezept der Praxis gerecht wird, die Ausstoßmenge die berechnete Menge Flaschen ergibt. Dabei findet ein reger Austausch mit den Daten in den Reitern Rezept und Gärverlauf statt. Am Ende lässt sich sagen: Jetzt ist der Genuss in Reichweite.

## Helferlein
Ist hinter einem Eingabefeld eine Taste mit 3 Punkten […], kann eine Eingabehilfe für die Menge oder den Extraktgehalt benutzt werden.
Damit die Eingabehilfe für die Menge richtig funktioniert, müssen im Reiter Ausrüstung die Abmessungen der Sudpfanne und des Maischekessels eingetragen sein.

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
