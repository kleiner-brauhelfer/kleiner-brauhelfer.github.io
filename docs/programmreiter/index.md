---
layout: page
title: Programmreiter
nav_order: 3
has_children: true
---

# Die verschiedenen Programmreiter

<div class="slideshow w3-display-container">
    <a href="" class="slideshow-overlay" target=_blank>
        <svg viewBox="0 0 24 24" class="w3-display-middle"><use xlink:href="#svg-search"></use></svg>
    </a>
    {% assign img_counter = -1 %}
    {% for image in site.static_files %}
        {% if image.path contains 'assets/images/screenshots' %}
            {% assign img_path = site.baseurl | append: image.path %}
            {% assign img_class = "w3-image w3-animate-right mySlides" %}
            {% if image.path contains '_dark' %}
                <img src="{{img_path}}" class="{{img_class}} hide-light" alt="image" />
            {% else %}
                <img src="{{img_path}}" class="{{img_class}} hide-dark" alt="image" />
            {% endif %}
            {% assign img_counter = img_counter | plus: 1 %}
        {% endif %}
    {% endfor %}
</div>
<div class="w3-center slide-indicators" style="width:100%">
    {% assign img_counter = img_counter | minus: 1 %}
    {% for i in (1..img_counter) %}
          <a class="dot-mark" onclick='carousel({{i}})'>&nbsp;</a>
    {% endfor %}
</div>

Der KBH 2 besitzt ein helles und ein dunkles Design.

Die Reiter können optional aktiviert/deaktiviert werden.

Hier findest du Informationen zu allen Eingabefeldern und ihre Bedeutung.