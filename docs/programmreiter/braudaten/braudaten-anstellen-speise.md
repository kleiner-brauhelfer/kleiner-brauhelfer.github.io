---
title: Speiseberechnung
layout: page
parent: Braudaten
grand_parent: Programmreiter
has_children: false
nav_order: 5
order: 5
---

1. TOC
{:toc}

## Modul Speiseberechnung

Die Eingabezeile zur Speiseberechnung ist standardmäßig unsichtbar und deaktiviert. Sie muss über Einstellungen => Module aktiviert werden.

Das Modul fügt dem Abschnitt Anstellen unter **Würzemenge nach Hopenseihen** eine Eingabezeile hinzu, gefolgt von Feldern zur erforderlichen Gesamtmenge und pro Flasche im rechten Fensterteil, sobal der Wert größe Null ist.

Speise ist eine Teilmenge der Würze, die nach dem Hopfenkochen zurückbehalten wird. Diese Würze wird nach der Hauptgärung dem weitgehend durchgegorenem Jungbier hinzugegeben. Die Speisegabe leitet die Produktion von Kohlensäure ein. Die Gabe von Speise ist auch als Aufspeisen bekannt. Die Speisegabe ist ein altes Verfahren, um mit unvergorener Würze ein Jungbier in der Nachgärung zu karbonisieren. Vorteil ist der unverfälschte Geschmack durch eigene Würze, Nachteil ist die Anfälligkeit für eine Infektion. Eine hygienische Aufbewahrung und eine baldige Kühlung schützt vor Enttäuschungen.

### Abgefüllte Speisemenge und Benötigte Speisemenge ###

Die Angaben für die Speisemenge finden sich im **Kapitel Anstellen** unter der Gesamtwürzemenge.

Anhand des im Reiter Rezept eingestellten CO₂-Gehalts berechnet der Kleine Brauhelfer im rechten Fensterteil die benötigte Speisemenge unter Berücksichtigung von Temperatur und scheinbarem Restextrakt (SRE). Über nebenstehenden Button kann die vorgeschlagene Menge mit einem Klick übernommen werden.

Bei der vorgeschlagenen Speisemenge handelt es sich um eine Schätzung auf Grundlage der Angaben im **Reiter Rezept**. Eine echte Berechnung ist dies noch nicht, da zum Zeitpunkt Angaben zum Restextrakt fehlen. Diese werden in den Reitern Abfülldaten und Gärverlauf generiert. Wird ausschließlich mit Speise karbonisiert, sollte man etwa 10 % der Würzemenge abfüllen und die Menge hier eintragen.

Soll für die Nachgärung Zucker verwendet werden, ist ein Abfüllen der Speise nicht nötig und es muss hier dann 0 eingetragen werden.

Wenn nicht genügend Speise abgefüllt wurde, um bei der Nachgärung den gewünschten CO₂-Gehalt zu erreichen, wird automatisch die benötigte Zuckermenge berechnet, die zusätzlich zur Speise benötigt wird. Es ist also problemlos möglich mit Speise und Zucker gemischt zu Karbonisieren.

### Probleme bei deaktivierter Speiseberechnung

Manche ältere Rezepte oder Kopien erzeugen beim Öffnen eine Fehlermeldung bei deaktivierter Speiseberechnung. In diesem Fall empfehlen sich diese Schritte:
1. Modul Speiseberechnung aktivieren
2. Eingabefelder des Rezeptes entsperren und Speisentnahme auf Null setzen
3. Eingabefelder sperren und Rezept speichern
4. Modul Speiseberechung deaktivieren