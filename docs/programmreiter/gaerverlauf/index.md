---
layout: page
title: Gärverlauf
nav_order: 5
parent: Programmreiter
screenshot: assets/images/screenshots/04_gaerverlauf
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Gärverlauf

Der Reiter Gärverlauf ist die zentrale Instanz, um den Gärprozesse vom Anstellen der Hefe bis zum Abfüllen in drei Submenüs festzuhalten. Dabei findet ein reger Austausch mit den Daten im Reiter Abfülldaten statt und der Gärprozess wird auf Herz und Nieren monitorisiert: Wird der Restextrakt erreicht?

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
