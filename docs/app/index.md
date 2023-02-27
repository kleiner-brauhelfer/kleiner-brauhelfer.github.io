---
layout: page
title: Android App
nav_order: 7
has_children: false
---

# Android App

<div class="slideshow w3-display-container">
    <a href="" class="slideshow-overlay" target=_blank>
        <svg class="w3-display-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"/></svg>
    </a>
    <a class="w3-display-left slideshow-skip" onclick="carousel(-1);">&#10094;</a>
    <a class="w3-display-right slideshow-skip" onclick="carousel();">&#10095;</a>
    {% assign img_counter = 0 %}
    {% for image in site.static_files %}
        {% if image.path contains 'assets/images/app' %}
            {% assign img_path = site.baseurl | append: image.path %}
            {% assign img_class = "w3-image w3-animate-left mySlides" %}
            <!-- BOTH: {{img_path}} -->
            <img src="{{img_path}}" class="{{img_class}} hide-none" alt="image" />
            {% assign img_counter = img_counter | plus: 1 %}
        {% endif %}
    {% endfor %}
</div>

<div class="w3-center slide-indicators" style="width:100%">
    {% for i in (1..img_counter) %}
          <a class="dot-mark" onclick='carousel({{i}})'>&nbsp;</a>
    {% endfor %}
</div>

Der kleine-brauhelfer für unterwegs? Neben der Desktopanwendung ist der Brauhelfer auch als Android [App](http://github.com/kleiner-brauhelfer/kleiner-brauhelfer-app) verfügbar!

Die App wird nicht wie üblich über den App Store vertrieben, sondern muss als apk Datei heruntergeladen werden.


[Aktuelle Version herunterladen](http://github.com/kleiner-brauhelfer/kleiner-brauhelfer-app/releases/latest){: .btn .btn-primary target="_blank"}
[Changelog](http://github.com/kleiner-brauhelfer/kleiner-brauhelfer-app/blob/master/CHANGELOG.md){: .btn .btn-primary target="_blank"}
