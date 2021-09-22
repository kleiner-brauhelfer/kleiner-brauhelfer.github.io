---
layout: page
title: Programmreiter
nav_order: 3
has_children: true
---

# Die verschiedenen Programmreiter

<div class="slideshow">
    {% for image in site.static_files %}
        {% if image.path contains 'assets/images/screenshots' %}
            {% assign img_path = site.baseurl | append: image.path %}
            {% assign img_class = "w3-image w3-animate-right mySlides" %}
            {% if image.path contains '_dark' %}
                <img src="{{img_path}}" class="{{img_class}} hide-light" alt="image" />
            {% else %}
                <img src="{{img_path}}" class="{{img_class}} hide-dark" alt="image" />
            {% endif %}
        {% endif %}
    {% endfor %}
</div>

Der KBH 2 besitzt ein helles und ein dunkles Design.

Die Reiter können optional aktiviert/deaktiviert werden.

Hier findest du Informationen zu allen Eingabefeldern und ihre Bedeutung.