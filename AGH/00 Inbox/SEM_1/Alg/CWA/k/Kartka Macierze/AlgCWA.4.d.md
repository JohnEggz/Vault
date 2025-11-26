---
id: AlgCWA.4.d
aliases: []
tags: []
---

$$
\begin{bmatrix}
p-1 & p-1 & 1 & 1 \\
1 & p^{2}-1 & 1 & p-1 \\
1 & p-1  & p-1 & 1
\end{bmatrix}
$$
$$
\begin{bmatrix}
1 & p-1 & p-1 & 1 \\
0 & p(p-1) & 2-p & p-2 \\
0 & (p-1)(2-p) & p(2-p) & 2-p
\end{bmatrix}
$$
Niech A będzie macierzą kwadratową. Udowodnij, że:
a) jeżeli $A^{2} − A + I = 0$, to A jest nieosobliwa oraz $A^{-1} = I − A$,

Oblicz wyznacznik macierzy i znajdź macierz odwrotną (o ile istnieje)
$$
\begin{bmatrix}
1 & 2 & 2 \\
2 & 1 & -2 \\
2 & 2 & 1
\end{bmatrix}
$$
$$
\det(A) = (1 \cdot 1 \cdot 1) + (2 \cdot (-2) \cdot 2) + (2 \cdot 2 \cdot 2) - (2 \cdot 1 \cdot 2) - (1 \cdot (-2) \cdot 2) - (2 \cdot 2 \cdot 1)
$$
$$
det(A) = -3
$$
Ponieważ $\det(A) = -3 \neq 0$, macierz $$A$$ jest nieosobliwa (odwracalna), więc macierz odwrotna $A^{-1}$ istnieje.

$$C_{11} = (-1)^{1+1} \det \begin{bmatrix} 1 & -2 \\ 2 & 1 \end{bmatrix} = 1 \cdot (1 \cdot 1 - (-2) \cdot 2) = 1 \cdot (1 + 4) = 5$$

$$C_{12} = (-1)^{1+2} \det \begin{bmatrix} 2 & -2 \\ 2 & 1 \end{bmatrix} = -1 \cdot (2 \cdot 1 - (-2) \cdot 2) = -1 \cdot (2 + 4) = -6$$

$$C_{13} = (-1)^{1+3} \det \begin{bmatrix} 2 & 1 \\ 2 & 2 \end{bmatrix} = 1 \cdot (2 \cdot 2 - 1 \cdot 2) = 1 \cdot (4 - 2) = 2$$

$$C_{21} = (-1)^{2+1} \det \begin{bmatrix} 2 & 2 \\ 2 & 1 \end{bmatrix} = -1 \cdot (2 \cdot 1 - 2 \cdot 2) = -1 \cdot (2 - 4) = -1 \cdot (-2) = 2$$

$$C_{22} = (-1)^{2+2} \det \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix} = 1 \cdot (1 \cdot 1 - 2 \cdot 2) = 1 \cdot (1 - 4) = -3$$

$$C_{23} = (-1)^{2+3} \det \begin{bmatrix} 1 & 2 \\ 2 & 2 \end{bmatrix} = -1 \cdot (1 \cdot 2 - 2 \cdot 2) = -1 \cdot (2 - 4) = -1 \cdot (-2) = 2$$

$$C_{31} = (-1)^{3+1} \det \begin{bmatrix} 2 & 2 \\ 1 & -2 \end{bmatrix} = 1 \cdot (2 \cdot (-2) - 2 \cdot 1) = 1 \cdot (-4 - 2) = -6$$

$$C_{32} = (-1)^{3+2} \det \begin{bmatrix} 1 & 2 \\ 2 & -2 \end{bmatrix} = -1 \cdot (1 \cdot (-2) - 2 \cdot 2) = -1 \cdot (-2 - 4) = -1 \cdot (-6) = 6$$

$$C_{33} = (-1)^{3+3} \det \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix} = 1 \cdot (1 \cdot 1 - 2 \cdot 2) = 1 \cdot (1 - 4) = -3$$
Macież dopełnień:
$$
C = \begin{bmatrix}
5 & -6 & 2 \\
2 & -3 & 2 \\
-6 & 6 & -3
\end{bmatrix}
$$
Macierz odwrotna:
$$
A^{-1} = \frac{1}{\det(A)}\cdot (C)^{T}
$$
$$
A^{-1} = \frac{1}{-3} \cdot 
\begin{bmatrix}
5 & 2 & -6 \\
-6 & -3 & 6 \\
2 & 2 & -3
\end{bmatrix}
$$
$$
A^{-1} = \begin{bmatrix}
-\frac{5}{3} & -\frac{2}{3} & 2 \\
2 & 1 & -2 \\
-\frac{2}{3} & -\frac{2}{3} & 1
\end{bmatrix}
$$

$$
\left[
\begin{array}{ccc|ccc}
1 & 2 & 3 & 1 & 0 & 0 \\
4 & 5 & 6 & 0 & 1 & 0 \\
7 & 8 & 9 & 0 & 0 & 1
\end{array}
\right]
$$
$$
\left[
\begin{array}{ccc|ccc}
1 & 2 & 2 & 1 & 0 & 0 \\
2 & 1 & -2 & 0 & 1 & 0 \\
2 & 2 & 1 & 0 & 0 & 1
\end{array}
\right]
$$
$$
\left[
\begin{array}{ccc|ccc}
1 & 2 & 2 & 1 & 0 & 0 \\
0 & -3 & -6 & -2 & 1 & 0\\
0 & 1 & 3 & 0 & -1 & 1
\end{array}
\right]
$$
$$
\left[
\begin{array}{ccc|ccc}
1 & 2 & 2 & 1 & 0 & 0 \\
0 & 1 & 3 & 0 & -1 & 1\\
0 & -3 & -6 & -2 & 1 & 0
\end{array}
\right]
$$

$$
\left[
\begin{array}{ccc|ccc}
1 & 2 & 2 & 1 & 0 & 0 \\
0 & 1 & 3 & 0 & -1 & 1\\
0 & 0 & 3 & -2 & -2 & 3
\end{array}
\right]
$$
$$

\(A^{-1} = \begin{bmatrix}
-\frac{5}{3} & -\frac{2}{3} & 2 \\
2 & 1 & -2 \\
-\frac{2}{3} & -\frac{2}{3} & 1
\end{bmatrix}\)
$$