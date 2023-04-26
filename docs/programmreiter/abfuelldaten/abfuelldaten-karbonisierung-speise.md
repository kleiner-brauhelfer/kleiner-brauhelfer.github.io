---
layout: page
title: Speiseberechnung
parent: Abfülldaten
grand_parent: Programmreiter
order: 6
nav_order: 6
---

1. TOC
{:toc}

## Modul Speiseberechnung

Die Eingabezeile zur Speiseberechnung ist standardmäßig unsichtbar und deaktiviert. Sie muss über Einstellungen => Module aktiviert werden.

Das Modul fügt dem **Kapitel Karbonisierung** im **Reiter Abfülldaten** ein Eingabefeld zur verfügbaren Speisemenge hinzu, dem  in der rechten Fensterhälfte Felder zur **benötigten Speisemenge** und zur **Speisemenge pro Flasche** gegenübergestellt werden.

<span style="color: #3978A6">**Gut zu wissen:**</span> Die Felder für die benötigte Speisemenge und die pro Flasche erscheinen erst, wenn im Feld verfügbare Speisemenge ein Wert größer Null eingegeben wurde.

Soll für die Nachgärung Zucker verwendet werden, ist ein Abfüllen von Speise nicht nötig, und es muss hier Null eingetragen werden.

Wenn nicht genügend Speise abgefüllt wurde, um bei der Nachgärung den gewünschten CO₂-Gehalt zu erreichen, wird automatisch die benötigte Zuckermenge berechnet, die zusätzlich zu der Speise benötigt wird. Es ist also problemlos möglich mit Speise und Zucker gemischt zu Karbonisieren.

### Verfügbare Speisemenge

Speise kann ausschließlich zum Karbonisieren eines Sudes verwendet werden, muss aber nicht. Wenn ausschließlich mit Speise karbonisiert werden soll, füllt der Brauer erfahrungsgemäß etwa 10 % der Würzemenge ab und trägt die Mange im Feld _Verfügbare Speisemenge_ ein.

Wenn nicht genügend Speise abgefüllt wurde, um bei der Nachgärung den gewünschten CO₂-Gehalt zu erreichen, wird automatisch die benötigte Zuckermenge berechnet. Es ist also problemlos möglich mit Speise und Zucker gemischt zu Karbonisieren.

Ist die abgefüllte Speisemenge gleich der benötigten Menge für die Karbonisierung werden die Angaben zum Zucker ausgeblendet.

Soll nicht mit Speise sondern ausschließlich mit Zucker karbonisiert werden, muss die verfügbare Speisemenge auf Null gesetzt werden.

#### Benötigte Speisemenge	

Die benötigte Speisegabe wird unabhängig von der verfügbaren Speisemenge im linken Fensterbereich angegeben. Sie wird anhand der gesamten Jungbiermenge sowie auf die gewählte Flaschengröße berechnet.

Die Menge an Speise selbst berechnet sich aufgrund des bereits vorhandenen CO₂ und der höchsten Gärtemperatur oder alternativ anhand der Temperatur zu ⅔ der Hauptgärung. Der Eintrag wiederum resultiert aus manuell eingegebenen Werten oder denen im **Submenü Hauptgärung** im **Reiter Gärdaten**.

<span style="color: #3978A6">**Zu beachten:**</span> Ist zu wenig Speise vorhanden, gleicht der Kleine Brauhelfer automatisch mit Zucker aus.

Die Speisegabe berechnet sich aus der Stammwürze vor dem Anstellen, dem Restextrakt, dem gewünschten Karbonisierungsgrad und der Jungbiermenge.

#### Diskussion: Gefahren von Speise

Als Speise bezeichnet der Brauer Würze, die nach oder dem Kochende entnommen wurde, um damit später in der Nachgärung zu Karbonisieren. Zu bedenken ist, dass Speise anfällig für Infektionen ist. Sie sollte immer sauber abgefüllt, schnell abgekühlt. dann kalt gelagert und zeitnah verbraucht werden. Speise wird von Hobbybrauern auch gerne eingefroren. 

<span style="color: #f44336">**Achtung:**</span> Sobald im **Reiter Rezept** die gewünschte Karbonisierung definiert wurde, wird die erforderliche Speisemenge automatisch berechnet. Die Mengenangaben sollten peinlich genau eingehalten werden. Die Speisemenge pro Flasche sollte nur mit genauem Wissen erhöht werden, um überschäumende Überraschungen bis hin zu Flaschenbomben zu vermeiden. 