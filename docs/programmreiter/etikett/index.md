---
layout: page
title: Etikett
nav_order: 7
parent: Programmreiter
screenshot: assets/images/screenshots/07_etikett
has_children: true
---

{% assign img_dark = page.screenshot | append: '_dark.png' | absolute_url %}
{% assign img_light = page.screenshot | append: '.png' | absolute_url %}

# Etikett

Der Reiter Etikett ist ein optionales Modul. Um ihn zu nutzen, muss er vorher im Menü Einstellungen => Module aktiviert werden. Hierauf erscheint ein neuer Reiter, mit dem schnell einfache Banderolen erstellt werden können.

<a href="{{ img_dark }}" class="hide-light" target=_blank>
    <img src="{{ img_dark }}" class="{{img_class}}" alt="image" />
</a>
<a href="{{ img_light }}" class="hide-dark" target=_blank>
    <img src="{{ img_light }}" class="{{img_class}}" alt="image" />
</a>
