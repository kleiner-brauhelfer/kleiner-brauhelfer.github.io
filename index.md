---
layout: home
title: Home
nav_order: 1
---

# kleiner-brauhelfer-2

<div class="slideshow w3-display-container">
    <a href="" class="slideshow-overlay" target=_blank>
        <svg viewBox="0 0 24 24" class="w3-display-middle"><use xlink:href="#svg-search"></use></svg>
    </a>
    {% assign img_counter = -1 %}
    {% for image in site.static_files %}
        {% if image.path contains 'assets/images/screenshots' %}
            {% assign img_path = site.baseurl | append: image.path %}
            {% assign img_class = "w3-image w3-animate-left mySlides" %}
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

Der kleine-brauhelfer ist ein Hilfsprogramm für Hobbybrauer zum Erstellen und Verwalten von Biersuden.

Die Version 2 ist die Weiterentwicklung vom [kleinen-brauhelfer](http://github.com/Gremmel/kleiner-brauhelfer).

[Aktuelle Version herunterladen](http://github.com/kleiner-brauhelfer/kleiner-brauhelfer-2/releases/latest){: .btn .btn-primary target="_blank"}
