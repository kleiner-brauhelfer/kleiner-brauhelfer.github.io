---
layout: page
title: Braudaten
nav_order: 3
parent: Programmreiter
screenshot: assets/images/screenshots/02_braudaten
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Braudaten

Der Reiter Braudaten ist die zentrale Instanz, um den Brautag vom Einmaischen bis zum Anstellen zu erfassen. Hier werden Mengen und Stammwürze eingetragen, die am Brautag erzielt wurde. Dabei findet ein reger Austausch mit den Daten in den Reitern Rezept und Abfülldaten statt und das Rezept wird auf Herz und Nieren geprüft: Hält es der Braupraxis stand?

## Helferlein
Ist hinter einem Eingabefeld eine Taste mit 3 Punkten […], kann eine Eingabehilfe für die Menge oder den Extraktgehalt benutzt werden.
Damit die Eingabehilfe für die Menge richtig funktioniert, müssen im Reiter Ausrüstung die Abmessungen der Sudpfanne und des Maischekessels eingetragen sein.

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
