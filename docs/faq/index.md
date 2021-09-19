---
layout: page
title: FAQ
nav_order: 11
has_children: false
---

TODO: Aufklappfunktion für FAQ Fragen

<ul>
{% for question in site.faqs %}
    <li>
        <a href='#{{question.title | replace: " ", "-" | downcase }}'>{{question.title}}</a>
    </li>
{% endfor %}
</ul>

{% for question in site.faqs %}

{% assign id = question.title | replace: " ", "-" | downcase  %}

<h2 id='{{id}}'>
    <button class='btn text-delta float-left mr-2' onclick='javascript:console.log("Auf!")'>+</button>
    {{ question.title }}
</h2>

<div id='{{id}}_box' class='hide'>
    {{ question.output }}
</div>

    
{% endfor %}

