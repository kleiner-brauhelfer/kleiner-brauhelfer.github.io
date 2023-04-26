---
layout: page
title: Bewertung
nav_order: 8
parent: Programmreiter
screenshot: assets/images/screenshots/08_bewertung
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Bewertung

Der Reiter Bewertung ist ein Standardmodul, das an professionelle  Verkostungsbögen angelehnt ist und zusätzlichen Platz für ein Resümee des Bierprozesses und zum Feedback durch Freunde und Mittrinker bietet.

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
