---
layout: page
title: Braudaten
nav_order: 3
parent: Programmreiter
screenshot: assets/images/screenshots/tab3
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Braudaten

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>

Einleitungstext...Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.