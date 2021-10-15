---
layout: page_math
title: Bierfarbe
parent: Formelsammlung
nav_order: 1
---

<details open markdown="block">
  <summary>
    Inhaltsverzeichnis
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

# Bierfarbe
<table>
  <tr><td>Masse</td><td>\(m\)</td><td>\([kg]\)</td></tr>
  <tr><td>Farbe</td><td>\(c\)</td><td>\([EBC]\)</td></tr>
  <tr><td>Menge</td><td>\(\tilde m\)</td><td>\([l\:oder\:kg\:oder\:Stk]\)</td></tr>
  <tr><td>Farbe</td><td>\(\tilde c\)</td><td>\([(kg \cdot EBC])/(l\:oder\:kg\:oder\:Stk])\)</td></tr>
  <tr><td>Stammw&uuml;rze</td><td>\(sw\)</td><td>\([&deg;P]\)</td></tr>
  <tr><td>Kochdauer</td><td>\(t\)</td><td>\([min]\)</td></tr>
</table>

## EBC
**Quelle:** [brau!magazin](http://braumagazin.de/article/bierfarbe/)

Die Bierfarbe in EBC berechnet sich wie folgt

$$ c_{Bier} = \frac{\sum m_i \cdot c_i}{\sum m_i} \cdot \frac{sw_{Malz} + sw_{ZutatenMaischen}}{10} + 1.5 \cdot \frac{t_{Kochdauer}}{60} + Farbe_{Korrektur} $$

$$ \sum m_i \cdot c_i = \sum_{Malzgaben} m_{Malz} \cdot c_{Malz} + \sum_{WeitereZutaten} \tilde m_{Zutat} \cdot \tilde c_{Zutat} $$

$$ \sum m_i = \sum m_{Malz} + \sum_{WeitereZutaten} \tilde m_{Zutat} $$

\(Farbe_{Korrektur}\) ist ein Korrekturwert aus den Anlagedaten.

**Bemerkung:** Der Korrekturwert bei hellen Bieren von 2 bis 4 EBC wird nicht ber&uuml;cksichtigt.

**Bemerkung:** Die Berechnung f&uuml;r die weiteren Zutaten ist stark vereinfacht. Der Farbewert muss dabei experimentell ermittelt werden.

## RGB
**Quelle:** [MaischeMalzundMehr](http://www.maischemalzundmehr.de/index.php?inhaltmitte=toolsbierfarbe)

F&uuml;r die Darstellung im RGB Farbraum wird folgende Tabelle benutzt

<table style="border-spacing: 0px; text-align: center;">
  <tr><th style="width:40pt">EBC</th><th style="width:100pt">R,G,B</th><th style="width:40pt"></th></tr>
  <tr><td>2</td><td>255,246,169</td><td style="background-color:rgb(255,246,169)"></td></tr>
  <tr><td>3</td><td>255,244,163</td><td style="background-color:rgb(255,244,163)"></td></tr>
  <tr><td>4</td><td>254,241,154</td><td style="background-color:rgb(254,241,154)"></td></tr>
  <tr><td>5</td><td>254,237,143</td><td style="background-color:rgb(254,237,143)"></td></tr>
  <tr><td>6</td><td>254,232,129</td><td style="background-color:rgb(254,232,129)"></td></tr>
  <tr><td>7</td><td>254,226,114</td><td style="background-color:rgb(254,226,114)"></td></tr>
  <tr><td>8</td><td>254,219,97</td><td style="background-color:rgb(254,219,97)"></td></tr>
  <tr><td>9</td><td>253,212,86</td><td style="background-color:rgb(253,212,86)"></td></tr>
  <tr><td>10</td><td>252,205,75</td><td style="background-color:rgb(252,205,75)"></td></tr>
  <tr><td>11</td><td>251,197,65</td><td style="background-color:rgb(251,197,65)"></td></tr>
  <tr><td>12</td><td>249,188,55</td><td style="background-color:rgb(249,188,55)"></td></tr>
  <tr><td>13</td><td>247,178,45</td><td style="background-color:rgb(247,178,45)"></td></tr>
  <tr><td>14</td><td>245,167,35</td><td style="background-color:rgb(245,167,35)"></td></tr>
  <tr><td>15</td><td>242,157,25</td><td style="background-color:rgb(242,157,25)"></td></tr>
  <tr><td>16</td><td>239,148,16</td><td style="background-color:rgb(239,148,16)"></td></tr>
  <tr><td>17</td><td>233,139,7</td><td style="background-color:rgb(233,139,7)"></td></tr>
  <tr><td>18</td><td>225,130,0</td><td style="background-color:rgb(225,130,0)"></td></tr>
  <tr><td>19</td><td>215,121,0</td><td style="background-color:rgb(215,121,0)"></td></tr>
  <tr><td>20</td><td>206,112,0</td><td style="background-color:rgb(206,112,0)"></td></tr>
  <tr><td>21</td><td>198,103,0</td><td style="background-color:rgb(198,103,0)"></td></tr>
  <tr><td>22</td><td>192,94,0</td><td style="background-color:rgb(192,94,0)"></td></tr>
  <tr><td>23</td><td>187,85,0</td><td style="background-color:rgb(187,85,0)"></td></tr>
  <tr><td>24</td><td>182,76,0</td><td style="background-color:rgb(182,76,0)"></td></tr>
  <tr><td>25</td><td>177,67,0</td><td style="background-color:rgb(177,67,0)"></td></tr>
  <tr><td>26</td><td>173,58,0</td><td style="background-color:rgb(173,58,0)"></td></tr>
  <tr><td>27</td><td>169,49,0</td><td style="background-color:rgb(169,49,0)"></td></tr>
  <tr><td>28</td><td>165,40,0</td><td style="background-color:rgb(165,40,0)"></td></tr>
  <tr><td>29</td><td>161,31,0</td><td style="background-color:rgb(161,31,0)"></td></tr>
  <tr><td>30</td><td>157,22,0</td><td style="background-color:rgb(157,22,0)"></td></tr>
  <tr><td>31</td><td>153,13,0</td><td style="background-color:rgb(153,13,0)"></td></tr>
  <tr><td>32</td><td>149,4,0</td><td style="background-color:rgb(149,4,0)"></td></tr>
  <tr><td>33</td><td>145,0,0</td><td style="background-color:rgb(145,0,0)"></td></tr>
  <tr><td>34</td><td>141,0,0</td><td style="background-color:rgb(141,0,0)"></td></tr>
  <tr><td>35</td><td>137,0,0</td><td style="background-color:rgb(137,0,0)"></td></tr>
  <tr><td>36</td><td>133,0,0</td><td style="background-color:rgb(133,0,0)"></td></tr>
  <tr><td>37</td><td>129,0,0</td><td style="background-color:rgb(129,0,0)"></td></tr>
  <tr><td>38</td><td>125,0,0</td><td style="background-color:rgb(125,0,0)"></td></tr>
  <tr><td>39</td><td>121,0,0</td><td style="background-color:rgb(121,0,0)"></td></tr>
  <tr><td>40</td><td>118,0,0</td><td style="background-color:rgb(118,0,0)"></td></tr>
  <tr><td>41</td><td>115,0,0</td><td style="background-color:rgb(115,0,0)"></td></tr>
  <tr><td>42</td><td>112,0,0</td><td style="background-color:rgb(112,0,0)"></td></tr>
  <tr><td>43</td><td>109,0,0</td><td style="background-color:rgb(109,0,0)"></td></tr>
  <tr><td>44</td><td>106,0,0</td><td style="background-color:rgb(106,0,0)"></td></tr>
  <tr><td>45</td><td>103,0,0</td><td style="background-color:rgb(103,0,0)"></td></tr>
  <tr><td>46</td><td>100,0,0</td><td style="background-color:rgb(100,0,0)"></td></tr>
  <tr><td>47</td><td>97,0,0</td><td style="background-color:rgb(97,0,0)"></td></tr>
  <tr><td>48</td><td>94,0,0</td><td style="background-color:rgb(94,0,0)"></td></tr>
  <tr><td>49</td><td>91,0,0</td><td style="background-color:rgb(91,0,0)"></td></tr>
  <tr><td>50</td><td>88,0,0</td><td style="background-color:rgb(88,0,0)"></td></tr>
  <tr><td>51</td><td>85,0,0</td><td style="background-color:rgb(85,0,0)"></td></tr>
  <tr><td>52</td><td>82,0,0</td><td style="background-color:rgb(82,0,0)"></td></tr>
  <tr><td>53</td><td>79,0,0</td><td style="background-color:rgb(79,0,0)"></td></tr>
  <tr><td>54</td><td>76,0,0</td><td style="background-color:rgb(76,0,0)"></td></tr>
  <tr><td>55</td><td>73,0,0</td><td style="background-color:rgb(73,0,0)"></td></tr>
  <tr><td>56</td><td>70,0,0</td><td style="background-color:rgb(70,0,0)"></td></tr>
  <tr><td>57</td><td>67,0,0</td><td style="background-color:rgb(67,0,0)"></td></tr>
  <tr><td>58</td><td>64,0,0</td><td style="background-color:rgb(64,0,0)"></td></tr>
  <tr><td>59</td><td>61,0,0</td><td style="background-color:rgb(61,0,0)"></td></tr>
  <tr><td>60</td><td>58,0,0</td><td style="background-color:rgb(58,0,0)"></td></tr>
  <tr><td>61</td><td>56,0,0</td><td style="background-color:rgb(56,0,0)"></td></tr>
  <tr><td>62</td><td>54,0,0</td><td style="background-color:rgb(54,0,0)"></td></tr>
  <tr><td>63</td><td>52,0,0</td><td style="background-color:rgb(52,0,0)"></td></tr>
  <tr><td>64</td><td>50,0,0</td><td style="background-color:rgb(50,0,0)"></td></tr>
  <tr><td>65</td><td>48,0,0</td><td style="background-color:rgb(48,0,0)"></td></tr>
  <tr><td>66</td><td>46,0,0</td><td style="background-color:rgb(46,0,0)"></td></tr>
  <tr><td>67</td><td>44,0,0</td><td style="background-color:rgb(44,0,0)"></td></tr>
  <tr><td>68</td><td>42,0,0</td><td style="background-color:rgb(42,0,0)"></td></tr>
  <tr><td>69</td><td>40,0,0</td><td style="background-color:rgb(40,0,0)"></td></tr>
  <tr><td>70</td><td>38,0,0</td><td style="background-color:rgb(38,0,0)"></td></tr>
  <tr><td>71</td><td>36,0,0</td><td style="background-color:rgb(36,0,0)"></td></tr>
  <tr><td>72</td><td>34,0,0</td><td style="background-color:rgb(34,0,0)"></td></tr>
  <tr><td>73</td><td>32,0,0</td><td style="background-color:rgb(32,0,0)"></td></tr>
  <tr><td>74</td><td>30,0,0</td><td style="background-color:rgb(30,0,0)"></td></tr>
  <tr><td>75</td><td>28,0,0</td><td style="background-color:rgb(28,0,0)"></td></tr>
  <tr><td>76</td><td>26,0,0</td><td style="background-color:rgb(26,0,0)"></td></tr>
  <tr><td>77</td><td>24,0,0</td><td style="background-color:rgb(24,0,0)"></td></tr>
  <tr><td>78</td><td>22,0,0</td><td style="background-color:rgb(22,0,0)"></td></tr>
  <tr><td>79</td><td>21,0,0</td><td style="background-color:rgb(21,0,0)"></td></tr>
  <tr><td>80</td><td>20,0,0</td><td style="background-color:rgb(20,0,0)"></td></tr>
  <tr><td>81</td><td>19,0,0</td><td style="background-color:rgb(19,0,0)"></td></tr>
  <tr><td>82</td><td>18,0,0</td><td style="background-color:rgb(18,0,0)"></td></tr>
  <tr><td>83</td><td>17,0,0</td><td style="background-color:rgb(17,0,0)"></td></tr>
  <tr><td>84</td><td>16,0,0</td><td style="background-color:rgb(16,0,0)"></td></tr>
  <tr><td>85</td><td>15,0,0</td><td style="background-color:rgb(15,0,0)"></td></tr>
  <tr><td>86</td><td>14,0,0</td><td style="background-color:rgb(14,0,0)"></td></tr>
  <tr><td>87</td><td>13,0,0</td><td style="background-color:rgb(13,0,0)"></td></tr>
  <tr><td>88</td><td>12,0,0</td><td style="background-color:rgb(12,0,0)"></td></tr>
  <tr><td>89</td><td>11,0,0</td><td style="background-color:rgb(11,0,0)"></td></tr>
  <tr><td>90</td><td>10,0,0</td><td style="background-color:rgb(10,0,0)"></td></tr>
  <tr><td>91</td><td>9,0,0</td><td style="background-color:rgb(9,0,0)"></td></tr>
  <tr><td>92</td><td>8,0,0</td><td style="background-color:rgb(8,0,0)"></td></tr>
  <tr><td>93</td><td>7,0,0</td><td style="background-color:rgb(7,0,0)"></td></tr>
  <tr><td>94</td><td>6,0,0</td><td style="background-color:rgb(6,0,0)"></td></tr>
  <tr><td>95</td><td>5,0,0</td><td style="background-color:rgb(5,0,0)"></td></tr>
  <tr><td>96</td><td>4,0,0</td><td style="background-color:rgb(4,0,0)"></td></tr>
  <tr><td>97</td><td>3,0,0</td><td style="background-color:rgb(3,0,0)"></td></tr>
  <tr><td>98</td><td>2,0,0</td><td style="background-color:rgb(2,0,0)"></td></tr>
  <tr><td>99</td><td>1,0,0</td><td style="background-color:rgb(1,0,0)"></td></tr>
  <tr><td>100</td><td>0,0,0</td><td style="background-color:rgb(0,0,0)"></td></tr>
</table>
