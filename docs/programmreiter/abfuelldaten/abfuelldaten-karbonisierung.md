---
layout: page
title: Karbonisierung
parent: Abfülldaten
grand_parent: Programmreiter
order: 5
nav_order: 5
---

1. TOC
{:toc}

## Kapitel Karbonisierung

Das Kapitel Karbonisierung ist der zentrale Fensterbereich für die Nachgärung. Das letzte Messergebnis im **Submenü Nachgärung** im **Reiter Gärverlauf** wird hier immer ausgegeben und in Zucker für die gesamte abgefüllte Menge sowie pro Flasche ausgegeben. Wird mit Speise karbonisiert, wird der Zuckeranteil verrechnet oder ausgeblendet, wenn die Speisemenge für die gewünschte Karbonisierung hinreichend ist.

Über das Plusfeld oder den Pfeilbutton werden die Messungen in Form von **Restextrakt in °P oder °Brix** und **Temperatur in °C** eingetragen. Beim Pfeilbutton handelt es sich um eine Importfunktion für eine CSV-Datei. Mit dem Minuszeichen werden Einträge aus der Liste gelöscht; dies kann bei Messfehlern erwünscht sein.

<span style="color: #f44336">**Achtung:**</span> Zur Orientierung sollte immer die höchste Gärtemperatur im Tab Gärverlauf für eine korrekte Zuckergabe berücksichtigt werden. Der Kleine Brauhelfer berücksichtigt dies automatisch, wenn Messdaten im Submenü Hauptgärung im Reiter Gärverlauf eingetragen wurden.

Eine andere Brauphilosophie hat einen anderen Ansatz; sie empfiehlt die höchste Temperatur, die der Sud bei ⅔ der aktiven Hauptgärung hatte. Dies ist üblicherweise zwischen Ende des zweiten und dritten, bis Beginn des vierten Tages der Fall.

Eine Gärung springt üblicherweise nach 8-12 Stunden an und dauert fünf Tage. Zu geringe Hefemengen oder bestimmte Hefetypen können diese Werte allerdings stark verändern. Sinkende Temperaturen im Gärverlauf sind oft ein Merkmal untergäriger Biere.

Das Bindeverhalten von CO₂ im Jungbier steigt im drucklosen Gärbottich mit niedriger Temperatur und sinkt umgekehrt mit höherer Temperatur. Wird das Jungbier unter Druck ausgebaut, sinkt der Einfluss der Temperatur auf die Karbonisierung in Relation zur Druckzunahme.

### Süßkraft des Zuckers

Die Süßkraft beschreibt die Süße eines Zuckers. Benchmark ist Haushaltszucker mit Süßkraft = 1.00

<span style="color: #f44336">**Achtung:**</span> Diese Einstellung wirkt sich auf alle ungebrauten Rezepte aus. Wechselt man die Zuckerarten zur Karbonisierung, muss man also die Süßkraft jedes Mal ändern.

| Haushaltszucker (Saccharose) | Zweifachzucker 1,00 |
| Traubenzucker (Dextrose) | Einfachzucker 0,69 |
| Fruchtzucker (Fructose) | Einfachzucker, gelöst 1,14
| Fruchtzucker (Fructose) | Einfachzucker, kristallin 1,8 |

Es gibt bis heute keine Laborinstrumente zur Messung der Süßkraft. Die Süßkraft ist je nach Zucker unterschiedlich. Dies hängt unteranderem mit dem Wassergehalt eines Zuckers zusammen. Traubenzucker enthält 9 % mehr Wasser als Haushaltszucker. Folglich muss dieser Wert bei der Mengenbemessung berücksichtigt werden.

<span style="color: #3978A6">**Gut zu wissen:**</span> Der Kleine Brauhelfer verrechnet für die Karbonisierung mit Zucker das bereits gelöste CO₂ der Hauptgärung. 

### Wassermenge für die Zuckerlösung

Wenn der Alkoholgehalt des Bieres nicht durch die Zuckergabe in der Nachgärung steigen soll, wird der Zucker vorher in Wasser aufgelöst. Der Kleine Brauhelfer berechnet die Zuckermenge für die zugesetzte **Wassermenge für die Zuckerlösung** und vermindert dabei die durch den Zucker erhöhten Alkoholgehalt. Üblicherweise wird der Wert Alkoholgehalt im **Kapitel Restextrakt Jungbier** angestrebt. In diesem Fall bleibt die Alkoholmenge zwar gleich, das Bier wird aber wohlmöglich verwässert. Hier kommt es auf die Handschrift des Brauers an.

Um Geschmacksabweichungen zu verhindern, empfiehlt sich eine möglichst geringe Menge Wasser. Die Löslichkeit von Zucker ist dabei temperaturabhängig. Kristallzucker (Saccharose löst sich mit 1.970 g/l bei 20 °C. Bei 90 °C lösen sich sogar über 4 kg Kristallzucker.) Diese Methode empfiehlt sich besonders im Fassausbau.

### Zusätzlich benötigter Zucker für Sud und Flasche

Sobald die **Wassermenge für die Zuckerlösung** definiert worden ist, gibt der Kleine Brauhelfer die Zuckermenge gesamt und pro Flasche an. Die Flaschengröße hierfür wird im **Kapitel Abfüllen** definiert

Die Zuckergabe berechnet sich anhand der bereits vorhandenen Karbonisierung und dem gewünschten Karbonisierungsgrad im **Reiter Rezept**.

Die Menge an zusätzlich benötigtem Zucker berechnet sich aufgrund des bereits vorhandenen CO₂ und der höchsten Gärtemperatur oder der Temperatur zu ⅔ der Hauptgärung wie sie im Feld **Temperatur Jungbier** eingetragen wird. Der Eintrag wiederum resultiert aus den Werten der Hauptgärung im **Reiter Gärdaten**.

<span style="color: #f44336">**Achtung:**</span> Viele externe Rechner berücksichtigen den bereits vorhandenen CO₂-Gehalt der Hauptgärung nicht und geben eine zu hohe, rein theoretische Mengen an. Dies kann den Brauer verwirren, insbesondere bei übernommenen Rezepten besteht die Gefahr von Fehlberechnungen und schäumenden "Überraschungen".
