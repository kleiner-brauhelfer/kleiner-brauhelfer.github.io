---
layout: page
title: Ausrüstung
nav_order: 10
parent: Programmreiter
screenshot: assets/images/screenshots/10_ausruestung
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Ausrüstung

Der Reiter Ausrüstung ist die zentrale Instanz, anhand dessen die Schüttung und die Wassermenge berechnet wird. Er korrespondiert direkt mit dem Reiter Rezept, von der neuen Brauidee bis zur importierten. Ferner beinhaltet er einige Stellschrauben, um den Brauprozess erfolgreicher zu machen.

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
