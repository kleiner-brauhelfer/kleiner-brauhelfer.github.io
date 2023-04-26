---
layout: page
title: Datenbank
nav_order: 12
parent: Programmreiter
screenshot: assets/images/screenshots/12_datenbank
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Datenbank

Die Datenbank erlaubt einen Blick unter die Haube des Kleinen Brauhelfers 2. Dieser Blick ist unter normalen Umständen nicht nötig, er kann aber bei Problemen Abhilfe schaffen.

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
