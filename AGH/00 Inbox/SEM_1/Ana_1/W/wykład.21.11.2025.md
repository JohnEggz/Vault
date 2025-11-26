$$
f(x) = \frac{x}{\ln x} \quad D_{f} = (0,1)\or(1, +\infty)
$$
$$
\lim_{ x \to 0^{+} } f(x) = 0^{-}
$$
$$
\begin{cases}
\lim_{ x \to 1^{-} } f(x) = -\infty \\
\lim_{ x \to 1^{+} } f(x) = +\infty
\end{cases}
\implies x=1\quad -\text{asymptota pionowa}
$$

$$
\lim_{ x \to \infty } f(x) = \infty
$$

jeśli istnieje asymptota ukośna to jest ona pozioma

$$
f'(x) = \frac{\ln x-1}{\ln ^{2}x}\quad D_{f'} = D{f}
$$
$$
f''(x) = \frac{\frac{1}{x}\ln ^{2}x - (\ln x-1)\cdot2\ln x\cdot\frac{1}{x}}{\ln ^{4}x}
$$
$$
= \frac{2-\ln x}{x\ln ^{3}x}\quad D_{f'} = D_{f}
$$
$$
f''(x) = 0 <\implies R - \ln x =0 <\implies x=e^{2}
$$

$$
f''(x) > 0 \implies \frac{2-\ln x}{x\ln ^{3}x} > 0 \implies \frac{2-\ln x}{\ln ^{3}x} > 0
$$

$$
\implies \ln ^{3}x \cdot(2-\ln x) > 0 \implies p^{3}(2-p)>0 \implies 
$$
$$
f''(x)<0 \implies x\in(0, 1)\cap(e^{2}, +\infty)
$$

| x        | 0\to1 | 1toe | e\toe^{2} |     |
| -------- | ----- | ---- | --------- | --- |
| $f'(x)$  |       |      |           |     |
| $f''(x)$ |       |      |           |     |
| $f(x)$   |       |      |           |     |

ZESZYT!

# *Całka nieoznaczona*
$$
\frac{d}{dx} : f\to f'
$$
$$
\frac{d}{dx}:F\to f
$$
Przykład
$$
f(x) = x
$$
$$
F(x) = \frac{x^{2}}{2}
$$
jeśli dana jest funkcja f okreslona na

$$
f: I\to \mathbb{R}
$$
funkcje nazywamy funkcją pierwotą tyleko i tylko wtedy gdy F'(x) = f(x) dla wszystkich x

Wniosek:
Funkcja pierwotna jeśli f to jest funckcja pierwotna to stąd wynika że funkcja F należy do funkcji róźniczkowalych

Twierzenie:
zakładamy że dana jest funcnkacja pierwotan F_0 funkcji f
Teza:
F jest funckją pierwotkną f wtedy i tylko wtedy gry dunkcja F = F_0 + C
C należy do Rzeczywistych
Dowód:
jeśli F = F_0 + C
F' = (f_0 + C)' = F_0' = z założenia = f
F - funkcja pierwota funkcji f

F_0 = f

