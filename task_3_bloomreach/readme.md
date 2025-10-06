# ZADANIE 3 - Odpytanie o rekomendacje i wstrzyknięcie danych na stronę:

## Dodatkowe informacje:

- Początkowo próbowałem uzyskać dane przez frontend jednak po bliższym zapoznaniu się z dokumentacją zauważyłem że API blokuje zapytania tego typu - dlatego też wybrałem utworzenie aplikacji w express.js
- Wyniki otrzymane w zapytaniu skopiowałem ręcznie do skryptu violetMonkeyInput który później skopiowałem do wtyczki jako "DUMMY_RECS"
- Zmieniłem w skrypcie klasę z zadania ".box-recomendation" na ".recomendation__inner" bo po pierwszych testach okazało się że w aktualnej wersji strony wojas nie ma klas "box-recomendation"
- Zadbałem o to aby przyciski slidera również pozostały i działały tak jak należy, więc w rzeczywistości podmieniłem kontent samego UL z produktami który się wewnątrz boxu znajduje.
- Zdjęcia produktów rekomentowanych niestety nie zadziałały - produktów z rekomendacji również nie mogłem już otworzyć - dlatego też aby można było wizualnie ocenić podmiankę dodałem funkcje onerror aby w razie problemu ze zdjęciem podmieniło na losowe zdjęcie. 
- Jak widać w skrypcie podmieniam jeden z kilku boxów "recomendation", oczywiście w razie podmiany wszystkich zastosowałbym querySelectorAll 
