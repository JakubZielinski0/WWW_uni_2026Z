# Wykaz źródeł zdjęć i licencji — projekt P1 „Orbita"

Wszystkie poniższe zdjęcia są **legalne do użycia** w niekomercjonalnym projekcie
edukacyjnym. Przed użyciem każdego pliku otwórz jego stronę źródłową i upewnij się,
że omawiany znacznik licencji jest nadal widoczny (licencje na Commons się nie zmieniają
bez przegłośowania, ale weryfikacja zajmuje 10 sekund).

Schemat zamiany placecholdera na zdjęcie: pobierz plik → zmień nazwę na
`taką samą jak placeholder, ale .jpg/.png` → podmień w `<img src="...">`
rozszerzenie (nazwa zostaje!). Wtedy CSS nie wymaga żadnych poprawek.

---

## BANNER (tło nagłówka strony — „obraz tła" z arkusza projektu)

| Slot | Zdjęcie | Źródło (strona pliku) | Bezpośredni plik | Licencja | Atrybucja wymagana? |
|---|---|---|---|---|---|
| `img/banner.svg` → `banner.jpg` | Earthrise (Ziemia wschodząca nad Księżycem, Apollo 8, 24.12.1968) | https://commons.wikimedia.org/wiki/File:AS08-14-2383.jpg | https://upload.wikimedia.org/wikipedia/commons/e/e0/AS08-14-2383.jpg | **domena publiczna (PD NASA)** | nie — ale grzecznościowo: „NASA" |
| (alternatywa) | Blue Marble (Ziemia, Apollo 17, 7.12.1972) | https://commons.wikimedia.org/wiki/File:The_Blue_Marble.jpg | https://upload.wikimedia.org/wikipedia/commons/7/78/The_Blue_Marble.jpg | **domena publiczna (PD NASA)** | nie |
| (alternatywa, panoramiczne na szeroki banner) | Droga Mleczna — panorama ESO (GigaGalaxy Zoom) | https://commons.wikimedia.org/wiki/File:ESO_-_Milky_Way.jpg | ze strony pliku → „Original file" | **CC BY 4.0** | **TAK**: `ESO/S. Brunier, CC BY 4.0` + link do licencji |

Uwaga dot. NASA: domena publiczna dotyczy zdjęć; **logo i odznaki NASA są
znakami towarowymi** — nie umieszczaj ich jako grafiki witryny.

## REKLAMA (baner boczny / „aside")

`img/reklama.jpg` (600×300) — własna kompozycja wygenerowana lokalnie skryptem
Python/PIL (jasne tło, bąbelki, pudełko proszku do prania „Krzak” z ceną 9,99 zł).
Grafika fikcyjnej marki wykonana samodzielnie, bez materiałów osób trzecich →
brak wymogu licencji i atrybucji.
Stare placeholdery `.svg` zostały usunięte przed spakowaniem projektu.

## USA — usa.html (3 eventy)

| Slot / event | Zdjęcie | Źródło | Bezpośredni plik | Licencja | Atrybucja |
|---|---|---|---|---|---|
| `usa-1958.svg` — 1958: powstaje NASA; startuje Explorer 1 (pierwszy satelita USA, 31.01.1958) | montaż Explorera 1 na rakietę Jupiter-C (styczeń 1958) | https://commons.wikimedia.org/wiki/File:Explorer_1_During_the_Installation_to_Jupiter-C.jpg | https://upload.wikimedia.org/wikipedia/commons/b/b8/Explorer_1_During_the_Installation_to_Jupiter-C.jpg | **PD NASA** (potwierdzone na stronie pliku) | nie (grzecznościowo „NASA") |
| `usa-1961.svg` — 1961: Alan Shepard, Freedom 7 (pierwszy Amerykanin w kosmosie, 5.05.1961) | Shepard w kapsule przed startem | https://commons.wikimedia.org/wiki/File:Alan_Shepard_in_capsule_aboard_Freedom_7_before_launch.jpg | https://upload.wikimedia.org/wikipedia/commons/9/9a/Alan_Shepard_in_capsule_aboard_Freedom_7_before_launch.jpg | **PD NASA** (zdjęcie NASA) | nie |
| `usa-1969.svg` — 1969: start Apollo 11 (16.07.1969) | Saturn V startuje, widok z ziemi | https://commons.wikimedia.org/wiki/File:Apollo_11_Saturn_V_lifting_off_on_July_16,_1969.jpg | https://upload.wikimedia.org/wikipedia/commons/7/7d/Apollo_11_Saturn_V_lifting_off_on_July_16,_1969.jpg | **PD NASA** (potwierdzone na stronie pliku) | nie |

## ZSRR — zsrr.html (3 eventy)

| Slot / event | Zdjęcie | Źródło | Bezpośredni plik | Licencja | Atrybucja |
|---|---|---|---|---|---|
| `zsrr-1957.jpg` — 1957: Sputnik 1 (pierwszy satelita, 4.10.1957) | makieta Sputnika 1 (wystawa w GUM, Moskwa) | https://commons.wikimedia.org/wiki/File:Sputnik-1_(model)_01.jpg | https://upload.wikimedia.org/wikipedia/commons/a/ac/Sputnik-1_(model)_01.jpg | **CC BY-SA 3.0** (potwierdzone, autor: **shakko**) | **TAK**: `shakko / Wikimedia Commons, CC BY-SA 3.0` + link do licencji; jeśli zmieniasz zdjęcie (kadrowanie), publikuj pod tą samą licencją |
| `zsrr-1961.svg` — 1961: Jurij Gagarin (pierwszy człowiek w kosmosie, 12.04.1961) | Gagarin na konferencji prasowej, Helsinki 3.07.1961 | https://commons.wikimedia.org/wiki/File:Yuri_Gagarin_(1961).jpg | https://upload.wikimedia.org/wikipedia/commons/2/2b/Yuri_Gagarin_(1961).jpg | **domena publiczna** (fińskie prawo autorskie: 50 lat od stworzenia) | nie |
| `zsrr-1965.svg` — 1965: pierwszy spacer kosmiczny (Leonow, 18.03.1965) | śluza powietrzna i skafander Berkut jak z misji Woschod 2 (Muzeum Kosmonautyki, Moskwa) | https://commons.wikimedia.org/wiki/File:Voskhod-2_airlock_and_spacesuit.jpg | https://upload.wikimedia.org/wikipedia/commons/e/e2/Voskhod-2_airlock_and_spacesuit.jpg | **domena publiczna** (autor wydał do PD) | nie |

Uwaga: autentyczne kadry filmowe ze spaceru Leonowa **NIE SĄ** wolno dostępne
(prawa rosyjskie) — dlatego legalnym zastępnikiem jest zdjęcie wyposażenia z muzeum.

## RESZTA ŚWIATA — reszta-swiata.html (3 eventy + tabela)

| Slot / event | Zdjęcie | Źródło | Bezpośredni plik | Licencja | Atrybucja |
|---|---|---|---|---|---|
| `swiat-1965.svg` — 1965: Francja — satelita Astérix (26.11.1965, rakieta Diamant-A) | maketa Astérixa, Muzeum Air w Le Bourget | https://commons.wikimedia.org/wiki/File:Asterix_Musee_du_Bourget_P1020341.JPG | https://upload.wikimedia.org/wikipedia/commons/9/98/Asterix_Musee_du_Bourget_P1020341.JPG | **CC BY-SA (multi: 3.0 / 2.5 / 2.0 / 1.0 + GFDL)** (potwierdzone) | **TAK**: `Pline / Wikimedia Commons, CC BY-SA 3.0` |
| `swiat-1979.svg` — 1979: ESA — pierwszy start Ariane 1 (24.12.1979, Kourou) | start rakiety Ariane 1 | https://www.esa.int/ESA_Multimedia/Images/2000/09/First_Ariane_launch | https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2000/09/first_ariane_launch/9231638-5-eng-GB/First_Ariane_launch_pillars.jpg | **CC BY-SA 3.0 IGO** (ESA Standard Licence, potwierdzone na stronie ESA) | **TAK**: `ESA – CC BY-SA 3.0 IGO` |
| `swiat-2023.svg` — 2023: Indie — Chandrayaan-3 (lądowanie 23.08.2023) | lądownik Vikram na powierzchni Księżyca (wizualizacja stereo z materiałów ISRO) | https://commons.wikimedia.org/wiki/File:Chandrayaan_3_Vikram_lander_stereo_(53167467822).png | https://upload.wikimedia.org/wikipedia/commons/3/33/Chandrayaan_3_Vikram_lander_stereo_(53167467822).png | **CC BY 2.0** (potwierdzone; oryginał: semeion.photo na Flickr) | **TAK**: `semeion.photo, CC BY 2.0` + link do licencji |

Chiny (Shenzhou 5, 2003) — wpisany w tabeli państw kosmicznych, **bez zdjęcia**:
oficjalne fotografie agencji Xinhua są objęte prawami autorskimi i nie ma ich
na COMMONS w wolnej licencji. W tabeli HTML wystarczą dane tekstowe.

---

## Ściąga: co oznaczają licencje (na rozmowę zaliczeniową)

- **PD / domena publiczna** (zdjęcia NASA, stare zdjęcia po upływie praw):
  wolno używać bez zgody i bez atrybucji; atrybucja „NASA" jest przyzwoitością.
  Wyjątek NASA: logo/odznaki agencji — znaki towarowe, nie używać.
- **CC BY** (np. 2.0, 4.0): wolno używać, także zmieniać, **POD WARUNKIEM**
  podania autora i linku do licencji; nie sugeruj, że autor popiera Twój projekt.
- **CC BY-SA** (np. 3.0, 3.0 IGO): jak CC BY **plus** „share alike" — zmodyfikowaną
  wersję publikujesz na tej samej licencji. Dla witryny studenckiej: wystarczy
  zaznaczenie i atrybucja; kod HTML/CSS samej witryny NIGDY nie staje się
  „pochodną" zdjęcia (to odrębne utwory).
- **CC BY-SA 3.0 IGO** (ESA): wersja licencji dla organizacji międzyrządowych;
  warunki jak CC BY-SA, atrybucja: „ESA – CC BY-SA 3.0 IGO".
- **Flickr/FlickreviewR**: zdjęcie z Flickra sprawdzone przez bota Wikimedia;
  licencja widniejąca na Commons jest wiążąca.

## Co NA PEWNO omijać (nielegalne / ryzykowne)

- zdjęcia z Google Grafika bez sprawdzzenia licencji (to NIE jest źródło),
- fotki z serwisów informacyjnych (Xinhua, TASS, RIA Novosti bez oznaczenia CC),
- kadry z filmów dokumentalnych (np. spacer Leonowa — prawa NP „Prime Cinematograph"),
- zdjęcia rocketlaunchlive i similares (prywatne agencje, copyright),
- dowolny materiał „zznaleziony w sieci" bez widocznej licencji.

## Linia do stopki / figcaption (przykład kompletnowej atrybucji)

`Zdjęcia: NASA (domena publiczna), Pline — Wikimedia Commons (CC BY-SA 3.0),
ESA (CC BY-SA 3.0 IGO), semeion.photo (CC BY 2.0). Pełny wykaz: dokumentacja/zrodla-zdjec.md`
