---
layout: page
title: Rezept
nav_order: 2
parent: Programmreiter
screenshot: assets/images/screenshots/01_rezept
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Rezept

Der Reiter Rezept ist die zentrale Instanz für selbst angelegte und importierte Rezepte. Er ist Grundlage für manche spannenden Momenten im weiteren Brauprozess: Erreiche ich die Werte vom Rezept?

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
