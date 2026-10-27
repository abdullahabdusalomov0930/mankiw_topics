import type { Problem } from '../../types';

const C = 17;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch17.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch17.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "Describe the three attributes of monopolistic competition. How is it like monopoly? How is it like perfect competition?", ["Ko'p sotuvchi; mahsulot farqlanishi; erkin kirish-chiqish.", "Monopoliyaga o'xshash: pastga qaragan talab, MR < P, P > MC.", "Raqobatga o'xshash: ko'p firma, kirish uzoq muddatli foydani 0 ga tushiradi."], "Many sellers, differentiated products, free entry; monopoly-like pricing, competition-like zero long-run profit.", "structure"),
  r(2, "Draw a diagram of a firm making a profit in a monopolistically competitive market. Show what happens as new firms enter.", ["Foyda: MR = MC da Q, P > ATC — to'rtburchak.", "Kirish → talab (va MR) chapga siljiydi → talab ATC ga urinmaguncha foyda kamayadi."], "Entry shifts each firm's demand left until it is tangent to ATC.", "mc"),
  r(3, "Draw the long-run equilibrium in a monopolistically competitive market. How is price related to ATC and to MC?", ["Talab ATC ga urinadi, shu miqdorda MR = MC.", "**P = ATC** (foyda 0); **P > MC** (markup)."], "P = ATC and P > MC.", "mc"),
  r(4, "Does a monopolistic competitor produce too much or too little output compared with the efficient level? What makes it hard for policymakers to fix?", ["**Kam** (P > MC → MC dan yuqori qadrlaydigan ba'zi xaridorlar olmaydi).", "Qiyinchilik: farqli mahsulotlar juda ko'p — hammasini tartibga solish ma'muriy yuki ulkan; P = MC majburlansa firmalar zarar ko'radi (ular allaqachon nol foydada) — subsidiya (soliq DWL i bilan) kerak."], "Too little; regulating countless differentiated products is impractical and would require subsidies.", "mc"),
  r(5, "How might advertising reduce economic well-being? How might it increase it?", ["Kamaytirish: didlarni manipulyatsiya qiladi, sun'iy farqlanish va brendga sodiqlik → kam elastik talab → katta markup.", "Oshirish: narx, yangi mahsulot va do'konlar haqida axborot; raqobatni kuchaytiradi, yangi firmalar kirishini osonlashtiradi (Benham: ko'zoynak 20%+ arzon)."], "It can manipulate tastes and reduce competition, or inform consumers and increase competition."),
  r(6, "How might advertising with no apparent informational content still inform consumers?", ["Signal: firma qimmat reklamaga faqat mahsuloti yaxshi bo'lsa (takroriy xarid) pul sarflaydi → reklama mavjudligi va narxi sifat haqida axborot beradi."], "By signaling quality through its expense.", "signal"),
  r(7, "Explain two benefits that might arise from the existence of brand names.", ["1) Oldindan baholab bo'lmaydigan **sifat haqida axborot**.", "2) Firmaga obro'sini saqlash uchun **sifatni ushlab turish rag'bati** (McDonald's)."], "Information about quality and an incentive to maintain quality."),
];

export const problems: Problem[] = [
  p(1, "Classify the markets for each drink: (a) tap water (b) bottled water (c) cola (d) beer.", ["(a) **Monopoly** — tabiiy monopoliya.", "(b) **Monopolistic competition** — ko'p brend.", "(c) **Oligopoly** — bir necha yirik firma.", "(d) **Oligopoly** (yirik pivo kompaniyalari; ko'p kichik pivoxonalar bilan monopolistik raqobatga yaqin)."], "Monopoly; monopolistic competition; oligopoly; oligopoly.", "structure"),
  p(2, "Classify as perfectly competitive, monopolistic, or monopolistically competitive: (a) wooden no. 2 pencils (b) copper (c) local electricity service (d) peanut butter (e) lipstick.", ["(a) **Perfect** — bir xil mahsulot, ko'p firma.", "(b) **Perfect** — bir xil xom ashyo.", "(c) **Monopoly** — tabiiy monopoliya.", "(d) **Monopolistic competition** — farqli brendlar.", "(e) **Monopolistic competition**."], "Perfect; perfect; monopoly; monopolistic competition; monopolistic competition.", "structure"),
  p(3, "Perfectly competitive firm, monopolistically competitive firm, both, or neither? (a) differentiated product (b) MR < P (c) LR economic profit (d) produces at minimum ATC in the long run (e) MR = MC (f) P > MC.", ["(a) Monopolistik raqobatchi. (b) Monopolistik raqobatchi. (c) **Hech biri**.", "(d) Mukammal raqobatchi. (e) **Ikkalasi**. (f) Monopolistik raqobatchi."], "MC; MC; neither; PC; both; MC (MC = monopolistic competitor, PC = perfect competitor)."),
  p(4, "Monopoly, monopolistically competitive firm, both, or neither? (a) downward-sloping demand (b) MR < P (c) faces entry of new firms selling similar products (d) LR economic profit (e) MR = MC (f) produces the socially efficient output.", ["(a) **Ikkalasi**. (b) **Ikkalasi**. (c) Monopolistik raqobatchi.", "(d) Monopoliya. (e) **Ikkalasi**. (f) **Hech biri**."], "Both; both; MC firm; monopoly; both; neither."),
  p(5, "A monopolistically competitive firm reports P, MC, ATC. Is it maximizing profit? If not, what should it do? If yes, is the market in long-run equilibrium? (a) P < MC, P > ATC (b) P > MC, P < ATC (c) P = MC, P > ATC (d) P > MC, P = ATC.", [
    "(a) **Yo'q**: P < MC → MR < MC → **kamaytirsin**.",
    "(b) Maksimallashtirishi mumkin (MR = MC < P); zarar → **chiqish**, qolganlarining talabi o'ngga.",
    "(c) **Yo'q**: P = MC → MR < MC → **kamaytirsin**.",
    "(d) Maksimallashtirishi mumkin; foyda 0 → **uzoq muddatli muvozanat**.",
  ], "(a),(c) reduce output; (b) maximizing but losses — exit; (d) long-run equilibrium.", "mc"),
  p(6, "Sparkle toothpaste is in long-run monopolistically competitive equilibrium. (a) Diagram: demand, MR, ATC, MC; output and price. (b) Profit? (c) Show CS and DWL relative to the efficient outcome. (d) If forced to produce the efficient output?", [
    "(a) Talab ATC ga urinadi, shu Q da MR = MC.",
    "(b) **Nol** — P = ATC.",
    "(c) CS — talab ostida, narx ustida; DWL — Q dan talab = MC miqdorigacha talab va MC orasidagi uchburchak.",
    "(d) Narx MC ga tushadi < ATC → Sparkle **zarar** ko'radi va subsidiyasiz chiqadi; xaridorlar qisqa muddatda arzon tish pastasi oladi, lekin Sparkle yo'qolsa tanlov kamayadi.",
  ], "Zero profit; DWL triangle between demand and MC; forced efficiency causes losses and exit.", "mc"),
  p(7, "N firms; each: Q = 100/N − P, MR = 100/N − 2Q, TC = 50 + Q², MC = 2Q. (a) Effect of N on demand? (b) Output (c) Price (d) Profit (e) Long-run number of firms.", [
    "(a) N oshsa talab **chapga** siljiydi — mijozlar ko'proq firmaga bo'linadi.",
    "(b) 100/N − 2Q = 2Q → **Q = 25/N**.",
    "(c) **P = 75/N**.",
    "(d) Foyda = (75/N)(25/N) − 50 − (25/N)² = **1,250/N² − 50**.",
    "(e) 0 = 1,250/N² − 50 → **N = 5**.",
  ], "Q = 25/N, P = 75/N, profit = 1,250/N² − 50, N = 5 in the long run.", "mc"),
  p(8, "Nutville's peanut butter market is monopolistically competitive in long-run equilibrium; then all brands are discovered to be identical and the market becomes perfectly competitive. For a typical firm, what happens to (a) price (b) quantity (c) ATC (d) MC (e) profit?", [
    "(a) **Tushadi** (markup yo'qoladi, P = min ATC).",
    "(b) **Oshadi** (efficient scale ga).",
    "(c) **Tushadi** (minimumga).",
    "(d) **Oshadi** (MC oshayotgan egri chiziq bo'ylab, P = MC).",
    "(e) **O'zgarmaydi** — 0.",
  ], "Price falls, quantity rises, ATC falls, MC rises, profit stays zero.", "mc"),
  p(9, "Which would more likely advertise? (a) family farm or family restaurant (b) forklift maker or car maker (c) a company with a very comfortable razor or one with a less comfortable razor.", ["(a) **Restoran** — farqli mahsulot; ferma bir xil xom ashyo sotadi.", "(b) **Avtomobil** — iste'mol tovari; forklift — sanoat tovari.", "(c) **Qulay ustara** — takroriy xarid → reklama signal sifatida o'zini oqlaydi."], "Restaurant; car maker; the comfortable razor.", "signal"),
  p(10, "Sleek Sneakers is one of many shoe firms. (a) Show short-run profit. (b) Long-run price, output, profit? (c) Consumers focus more on stylistic differences — effect on elasticity and on Sleek's long-run price, output, profit? (d) Is demand elastic or inelastic at the profit-maximizing price?", [
    "(a) MR = MC da Q, P > ATC — foyda to'rtburchagi.",
    "(b) Kirish → talab chapga → **foyda 0**, P = ATC (tangency); narx va miqdor odatda kamayadi.",
    "(c) Uslubga e'tibor → talab **kam elastik** → markup **oshadi**: LR da P yuqoriroq, Q kamroq (excess capacity katta), foyda baribir **0**.",
    "(d) **Elastik**: MR = MC > 0 bo'lgani uchun MR musbat — bu talabning elastik qismi.",
  ], "Long-run profit is zero; less elastic demand raises the markup; demand is elastic at the optimum.", "mc"),
];
