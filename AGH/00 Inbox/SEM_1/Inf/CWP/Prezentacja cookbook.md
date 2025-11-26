### Slajd 1: Strona Tytułowa

Zaawansowana wyszukiwarka przepisów
Zespół: 

---
### Slajd 2: Zespół

Koordynator: 
Backend:
Frontend:

---
### Slajd 3: Cel

Na podstawie preferencji użytkownika, wyszukuje 3 najlepsze przepisy kulinarne i przedstawia je użytkownikowi. Użytkownik może filtrować poprzez nazwe przepisu, składniki które lubi, składniki których nie lubi, czas gotowania, popularność i wiele innych.

* Filtry:
    * Wyszukiwanie po nazwie potrawy.
    * Wyszukiwanie po lubianych sładnikach
    * Unikanie nielubianych składników
	* Maksymalny czas gotowania
	* Wyszukiwanie przypisów zawiarających tylko lubiane składniki
    * Filtry dodatkowe (np. poziom kalorii, tagi kulinarne).

* Dane wyjściowe:
	* 3 nalbardziej dopasowane przepisy
	* Procętowy wskaźnik dopasowania, opisujący jak blisko przepis znajduje się oczekiwań urzytkownika

---
### Slajd 4: Źródło Danych

Korzystamy z publicznie dostępnego zbioru danych z serwisu **Food.com**, udostępnionego na platformie Kaggle.

* **Baza danych zawiera:**
    * `RAW_recipes.csv`: Ponad 200 000 surowych przepisów (nazwa, składniki, kroki, tagi, wartości odżywcze).
    * `PP_recipes.csv`: Przetworzone przepisy z tokenizowanymi składnikami.
    * `RAW_interactions.csv`: Oceny i recenzje użytkowników 
    * `ingr_map.pkl`: mapa tokenów do nazw

Cały dataset zawiera 800+ MB i rozbity jest na wiele plików, dlatego został on przetworzony do nowego pliku `final_recipes.csv` zawierającego wszystkie potrzebne dane w jednym miejscu oraz znacznie zmiejszy rozmiar datasetu do przetworzenia

---

### Slajd 5: Architektura Systemu

Prosty schemat przepływu danych:
1. Użytkownik (Interfejs PyQt):
    * Wprowadza swoje preferencje w formularzu.
2.  Skrypt Python (Pośrednik):
    * Zbiera dane z formularza.
    * Wywołuje skrypt do liczenia dopasowania, przekazując mu preferencje jako argumenty.
    * Odbiera wyniki (ID 3 najlepszych przepisów i ich ocenę).
    * Pobiera pełne dane o tych przepisach z pliku CSV.
    * Wyświetla wyniki w GUI.
3.  Backend (Program w C):
    * Otrzymuje kryteria od skryptu Pythona.
    * Wczytuje i przetwarza plik csv.
    * Dla każdego przepisu w bazie oblicza `FinalScore` według zdefiniowanego algorytmu.
    * Sortuje przepisy i wybiera 3 z najwyższym wynikiem.
    * Zwraca ID i wynik procentowy do skryptu Pythona.

---

### Slajd 6.1: Flowchart

![[Pasted image 20251117093258.png]]
![[Pasted image 20251117093340.png]]

---
### Slajd 6.2: Mechanizm Oceny Przepisów

1.  Co jest oceniane
	* wyszukiwana nazwa
	* ilość składników lubianych
	* ilość składników nielubianych
	* ocena urzytkowników
	* długość (czas) przepisu
	* tagi
2. Obliczanie Maksymalnej Możliwej Oceny (`MaxScore`):
    * `MaxScore` to suma punktów za wszystkie pozytywne kryteria.
3. Ocena danych:
	* Jeśli w składnikach znajduje sie składnik znajdujacy się w liście nielubianych składników, przepis otrzymuje wynik 0 i jest pomijany
	* za każdy pozytywny warunek spełniony przepis otrzymuje punkty zależnie od przypisanej wagi
4.  Konwersja na Procenty:
    * Procent dopasowania jest obliczany według wzoru:
        $$ \text{Dopasowanie} [\%] = \frac{\max(0, \text{FinalScore})}{\text{MaxScore}} \times 100\% $$
    *   Używamy funkcji `max(0, FinalScore)`, aby wynik nigdy nie był ujemny.

---

### Slajd 7: Przykład Działania Algorytmu

**Zapytanie użytkownika:**
*   **Lubiane składniki:** `kurczak`, `pomidor`
*   **Nielubiane składniki:** `cebula`

**`MaxScore` dla tego zapytania = 10 (kurczak) + 10 (pomidor) = 20 punktów.**

**Analizowane przepisy:**

1.  **Przepis A: "Pieczony kurczak z pomidorami"**
    *   Składniki: `kurczak`, `pomidor`, `czosnek`
    *   `FinalScore` = 10 (za kurczaka) + 10 (za pomidora) = **20**
    *   Dopasowanie = \( \frac{20}{20} \times 100\% = \mathbf{100\%} \)

2.  **Przepis B: "Rosół z kurczaka"**
    *   Składniki: `kurczak`, `marchew`, `makaron`
    *   `FinalScore` = 10 (za kurczaka) = **10**
    *   Dopasowanie = \( \frac{10}{20} \times 100\% = \mathbf{50\%} \)

3.  **Przepis C: "Gulasz z kurczaka"**
    *   Składniki: `kurczak`, `pomidor`, `cebula`
    *   `FinalScore` = 0 (za cebulę) = **0**
    *   Dopasowanie = \( \frac{0}{20} \times 100\% = \mathbf{0\%} \)

---

### Slajd 8: GUI

![[Pasted image 20251117093449.png]]

---
