---
layout: home
title: Home
nav_order: 1
---

# kleiner-brauhelfer-2

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

Der kleine-brauhelfer ist ein Hilfsprogramm für Hobbybrauer zum Erstellen und Verwalten von Biersuden.

Die Version 2 ist die Weiterentwicklung vom [kleinen-brauhelfer](http://github.com/Gremmel/kleiner-brauhelfer).

[Aktuelle Version herunterladen](http://github.com/kleiner-brauhelfer/kleiner-brauhelfer-2/releases/latest)
