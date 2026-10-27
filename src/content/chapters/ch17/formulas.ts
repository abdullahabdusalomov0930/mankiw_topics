import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "mc-lr",
    chapter: 17,
    nameEn: "Long-run equilibrium of monopolistic competition",
    nameUz: "Monopolistik raqobatning uzoq muddatli muvozanati",
    tex: "MR = MC,\\qquad P = ATC\\ (\\text{tangency}),\\qquad P > MC,\\qquad Q < Q_{\\text{efficient scale}}",
    symbols: [{ tex: "Q_{\\text{efficient scale}}", meaning: "ATC minimumi" }],
    example: {
      setup: "Problem 7: P = 100/N − Q, MR = 100/N − 2Q, TC = 50 + Q², MC = 2Q.",
      steps: [
        "MR = MC: \\(100/N - 2Q = 2Q \\Rightarrow Q = 25/N\\), \\(P = 75/N\\).",
        "Foyda \\(= 1{,}250/N^2 - 50 = 0 \\Rightarrow N = 5\\): Q = 5, P = 15 = ATC, MC = 10.",
      ],
    },
  },
  {
    id: "ad-signal",
    chapter: 17,
    nameEn: "Advertising as a signal (separating condition)",
    nameUz: "Reklama signal sifatida (ajratish sharti)",
    tex: "R_{\\text{good}} > \\text{Ad cost} > R_{\\text{bad}}",
    symbols: [{ tex: "R", meaning: "reklama keltiradigan sotuv (yaxshi mahsulotda takroriy xarid bilan)" }],
    example: { setup: "Reklama $20 mln, 1 mln sinovchi, quti $5, MC 0.", steps: ["Yomon don: 1 quti → $5 mln < $20 mln — reklama qilmaydi.", "Yaxshi don: 12 quti → $60 mln > $20 mln — reklama qiladi."] },
    note: "Reklama $5 mln dan arzon bo'lsa, ikkalasi ham reklama qiladi va signal yo'qoladi.",
  },
];
