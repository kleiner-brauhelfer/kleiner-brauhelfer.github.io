---
layout: page
title: Brauübersicht
nav_order: 11
parent: Programmreiter
screenshot: assets/images/screenshots/09_brauuebersicht
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Brauübersicht

Der Reiter Brauübersicht ist die zentrale Instanz, um alle Sude anhand der Kennziffern zum Brauprozess zu monitorisieren. Es ist das Tool im Kleinen Brauhelfer 2 dedicated to Zahlenfreaks.

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
