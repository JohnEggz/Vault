# Przestrzeń Wektorowa $R^n$

## Definicja i Podstawowe Działania

### Definicja Przestrzeni $R^n$
**Definicja:** Przestrzenią $R^n$ nazywamy zbiór uporządkowanych n-tek $(x_1, x_2, ..., x_n)$, czyli:
$$
R^n = \{(x_1, x_2, ..., x_n) : x_i \in R, \text{ dla } i = 1, 2, ..., n\}
$$
Elementy tej przestrzeni nazywamy **wektorami n-wymiarowymi**.

### Działania na Wektorach w $R^n$
**Definicja (Dodawanie wektorów):**
Sumą wektorów w zbiorze $R^n$ nazywamy odwzorowanie $+ : R^n \times R^n \to R^n$ takie, że dla dowolnych wektorów $x = (x_1, ..., x_n)$ oraz $y = (y_1, ..., y_n)$ zachodzi:
$$
x + y = (x_1 + y_1, x_2 + y_2, ..., x_n + y_n)
$$

**Definicja (Mnożenie wektora przez skalar):**
Mnożeniem wektora przez skalar w zbiorze $R^n$ nazywamy odwzorowanie $\cdot : R \times R^n \to R^n$ takie, że dla dowolnego skalara $a \in R$ oraz wektora $x = (x_1, ..., x_n)$ zachodzi:
$$
a \cdot x = (ax_1, ax_2, ..., ax_n)
$$

**Definicja (Odejmowanie wektorów):**
Dla $x, y \in R^n$ definiujemy:
$$
x - y = x + (-1 \cdot y)
$$

### Własności Działań
**Uwaga:** Własności działań na wektorach wynikają bezpośrednio z własności działań na liczbach rzeczywistych.

*   **Przemienność dodawania:** $x + y = y + x$
*   **Łączność dodawania:** $(x + y) + z = x + (y + z)$
*   **Element neutralny dodawania (wektor zerowy):** Istnieje wektor $\vec{0} = (0, ..., 0)$ taki, że dla każdego $x \in R^n$ zachodzi $x + \vec{0} = x$.
*   **Element przeciwny:** Dla każdego wektora $x = (x_1, ..., x_n)$ istnieje wektor przeciwny $-x = (-x_1, ..., -x_n)$ taki, że $x + (-x) = \vec{0}$.
*   **Rozdzielność mnożenia względem dodawania wektorów:** $a \cdot (x + y) = a \cdot x + a \cdot y$
*   **Element neutralny mnożenia przez skalar:** Liczba $1$ jest elementem neutralnym, tzn. $1 \cdot x = x$.

---

## Liniowa Niezależność Wektorów

**Definicja (Kombinacja liniowa):**
Kombinacją liniową wektorów $w_1, w_2, \dots, w_k \in R^n$ o współczynnikach $a_1, a_2, \dots, a_k \in R$ nazywamy wektor $w$ postaci:
$$
w = a_1w_1 + a_2w_2 + \dots + a_kw_k
$$

**Definicja (Liniowa niezależność):**
Mówimy, że układ wektorów $w_1, w_2, \dots, w_k \in R^n$ jest **liniowo niezależny**, jeżeli jedyną kombinacją liniową tych wektorów, która daje wektor zerowy, jest kombinacja o wszystkich współczynnikach równych zero. Formalnie:
$$
\forall_{a_1, \dots, a_k \in R} \quad (a_1w_1 + \dots + a_kw_k = \vec{0} \implies a_1 = a_2 = \dots = a_k = 0)
$$
Układ, który nie jest liniowo niezależny, nazywamy **liniowo zależnym**.

**Wniosek (Liniowa zależność):**
Układ wektorów $w_1, w_2, \dots, w_k \in R^n$ jest **liniowo zależny**, jeżeli istnieje taka ich kombinacja liniowa równa wektorowi zerowemu, w której co najmniej jeden współczynnik jest różny od zera.
$$
\exists_{a_1, \dots, a_k \in R} \quad (a_1w_1 + \dots + a_kw_k = \vec{0} \land \exists_{i \in \{1,\dots,k\}} : a_i \neq 0)
$$

**Twierdzenie (Warunek konieczny i wystarczający na liniową zależność):**
Układ wektorów jest liniowo zależny wtedy i tylko wtedy, gdy co najmniej jeden z wektorów tego układu jest kombinacją liniową pozostałych.

**Twierdzenie (Własności zbiorów wektorów):**
1.  Jeżeli układ wektorów jest liniowo niezależny, to żaden z tych wektorów nie jest wektorem zerowym. (Inaczej: dowolny zbiór zawierający wektor $\vec{0}$ jest liniowo zależny).
2.  Dowolny podzbiór układu liniowo niezależnego jest liniowo niezależny.
3.  Dowolny zbiór zawierający podzbiór liniowo zależny jest liniowo zależny.

### Związek z Macierzami

**Twierdzenie (Rząd macierzy a liniowa niezależność):**
Rząd macierzy $A$ jest równy maksymalnej liczbie jej liniowo niezależnych wierszy (lub kolumn).

**Twierdzenie:**
Zbiór wektorów $\{w_1, w_2, \dots, w_k\} \subset R^n$ jest liniowo niezależny wtedy i tylko wtedy, gdy rząd macierzy utworzonej z tych wektorów (jako wierszy lub kolumn) wynosi $k$.

**Wniosek:**
Zbiór $n$ wektorów w przestrzeni $R^n$ jest liniowo niezależny wtedy i tylko wtedy, gdy wyznacznik macierzy kwadratowej utworzonej z tych wektorów jest różny od zera.

**Wniosek:**
Każdy zbiór zawierający więcej niż $n$ wektorów w przestrzeni $R^n$ jest liniowo zależny.

---

## Baza i Wymiar Przestrzeni $R^n$

**Definicja (Baza przestrzeni):**
Mówimy, że zbiór wektorów $B \subset R^n$ jest **bazą** przestrzeni $R^n$, jeżeli spełnia dwa warunki:
1.  $B$ jest układem wektorów liniowo niezależnych.
2.  $B$ generuje przestrzeń $R^n$, tzn. dowolny wektor z $R^n$ można przedstawić jako kombinację liniową wektorów ze zbioru $B$.

**Przykład (Baza kanoniczna):**
Zbiór wektorów $E = \{(1, 0, \dots, 0), (0, 1, \dots, 0), \dots, (0, 0, \dots, 1)\}$ tworzy bazę przestrzeni $R^n$.

**Twierdzenie:**
Każde dwie bazy w przestrzeni $R^n$ są równoliczne i ich liczność wynosi $n$.

**Definicja (Wymiar przestrzeni):**
Liczbę wektorów w bazie nazywamy **wymiarem** przestrzeni. Zatem wymiar przestrzeni $R^n$ wynosi $n$.

**Twierdzenie (Warunki równoważne definicji bazy):**
Następujące warunki dla zbioru $B \subset R^n$ są równoważne:
1.  $B$ jest bazą $R^n$.
2.  $B$ jest maksymalnym (w sensie inkluzji) układem wektorów liniowo niezależnych w $R^n$.
3.  $B$ jest minimalnym zbiorem generatorów $R^n$.

**Twierdzenie (O uzupełnianiu do bazy):**
Dowolny układ wektorów liniowo niezależnych w przestrzeni $R^n$ można uzupełnić do bazy tej przestrzeni.

**Definicja (Współrzędne wektora):**
Jeśli $B = \{w_1, w_2, \dots, w_n\}$ jest bazą $R^n$, to dla dowolnego wektora $w \in R^n$ istnieją jednoznacznie wyznaczone skalary $a_1, a_2, \dots, a_n$ takie, że:
$$
w = a_1w_1 + a_2w_2 + \dots + a_nw_n
$$
Liczby $a_1, \dots, a_n$ nazywamy **współrzędnymi** wektora $w$ w bazie $B$. Uporządkowaną bazę nazywamy **reperem bazowym**.

---

## Podprzestrzenie Wektorowe w $R^n$

**Definicja (Podprzestrzeń wektorowa):**
Niepusty podzbiór $V \subset R^n$ nazywamy **podprzestrzenią wektorową**, jeżeli jest zamknięty ze względu na dodawanie wektorów i mnożenie przez skalar, tzn.:
1.  $\forall_{u, v \in V} \quad u + v \in V$
2.  $\forall_{w \in V} \forall_{a \in R} \quad a \cdot w \in V$

**Wniosek:**
Każda podprzestrzeń wektorowa musi zawierać wektor zerowy $\vec{0}$.

**Twierdzenie (Warunek konieczny i wystarczający na podprzestrzeń):**
Zbiór $V \subset R^n$ jest podprzestrzenią wektorową wtedy i tylko wtedy, gdy dla dowolnych $u, v \in V$ oraz $a, b \in R$ zachodzi $au + bv \in V$.

**Definicja (Powłoka liniowa / Podprzestrzeń generowana):**
**Powłoką liniową** zbioru wektorów $A = \{w_1, w_2, \dots, w_k\} \subset R^n$ nazywamy zbiór wszystkich możliwych kombinacji liniowych tych wektorów. Oznaczamy go jako $lin(A)$ lub $span(A)$.
$$
lin(A) = \{ a_1w_1 + \dots + a_kw_k : a_1, \dots, a_k \in R \}
$$
Powłoka liniowa $lin(A)$ jest najmniejszą podprzestrzenią wektorową zawierającą zbiór $A$. Mówimy, że jest to podprzestrzeń **rozpięta** na wektorach ze zbioru $A$, a wektory te nazywamy **generatorami** tej podprzestrzeni.

### Baza i Wymiar Podprzestrzeni

**Definicja (Baza podprzestrzeni):**
Zbiór $B$ jest bazą nietrywialnej podprzestrzeni $V \subset R^n$, jeżeli:
1.  $B$ jest układem wektorów liniowo niezależnych.
2.  $lin(B) = V$ (wektory z $B$ generują $V$).

**Twierdzenie (O istnieniu bazy):**
Każda nietrywialna podprzestrzeń wektorowa posiada bazę.

**Twierdzenie (O wymiarze podprzestrzeni):**
Dowolne dwie bazy tej samej podprzestrzeni $V$ są równoliczne. Liczbę wektorów w bazie podprzestrzeni $V$ nazywamy jej **wymiarem** i oznaczamy $dim(V)$.

**Wniosek:**
Jeżeli znamy wymiar podprzestrzeni $k$ i mamy zbiór $k$ wektorów z tej podprzestrzeni, to aby sprawdzić, czy stanowią one bazę, wystarczy sprawdzić tylko jeden z warunków: albo ich liniową niezależność, albo czy generują całą podprzestrzeń.

**Twierdzenie:**
Jeżeli $U$ i $V$ są podprzestrzeniami w $R^n$ takimi, że $U \subset V$, to:
1.  $dim(U) \le dim(V)$
2.  Jeżeli $dim(U) = dim(V)$, to $U=V$.