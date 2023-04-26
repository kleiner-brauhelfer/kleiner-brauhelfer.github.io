---
layout: page
title: FAQ
nav_order: 5
has_children: false
---

# Frequently Asked Questions

<ul>
{% for question in site.faqs %}
    <li>
        <a href='#{{question.title | replace: " ", "-" | downcase }}'>{{question.title}}</a>
    </li>
{% endfor %}
</ul>

{% for question in site.faqs %}

{% assign id = question.title | replace: " ", "-" | downcase  %}

<h2 id='{{id}}' class='question'>
    {% comment %}
    <button type="button" name="button" class="btn text-delta float-right ml-2" onclick='toggleParagraph(this);'>
        <svg class="svg-icon closed" xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="2 0 21 14" width="14px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
        <svg class="svg-icon opened" xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 4 26 14" width="14px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
    </button>
    {% endcomment %}
    {{ question.title }}
</h2>

<div id='{{id}}_box' class='w3-animate-opacity answer'>
    {{ question.output }}
</div>

    
{% endfor %}

