import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "export-rule",
    chapter: 9,
    nameEn: "Exporter or importer?",
    nameUz: "Eksportchimi yoki importchimi?",
    tex: "P_W > P_D \\Rightarrow \\text{export},\\qquad P_W < P_D \\Rightarrow \\text{import}",
    symbols: [
      { tex: "P_W", meaning: "jahon narxi" },
      { tex: "P_D", meaning: "savdosiz ichki narx" },
    ],
    example: { setup: "QuickQuiz 1: Autarkada kostyum 3 untsiya oltin, qo'shnilarda 2.", steps: ["\\(P_W = 2 < P_D = 3\\) → importchi, comparative advantage yo'q."] },
  },
  {
    id: "exports",
    chapter: 9,
    nameEn: "Exports and imports",
    nameUz: "Eksport va import hajmi",
    tex: "\\text{Exports} = Q^S(P_W) - Q^D(P_W),\\qquad \\text{Imports} = Q^D(P_W) - Q^S(P_W)",
    symbols: [{ tex: "Q^S(P_W),\\ Q^D(P_W)", meaning: "jahon narxida ichki taklif va talab" }],
    example: { setup: "Problem 5: $16 da 4 mln iste'mol, 1 mln ishlab chiqarish.", steps: ["Import \\(= 4 - 1 = 3\\) mln futbolka."] },
  },
  {
    id: "exporter-welfare",
    chapter: 9,
    nameEn: "Welfare in an exporting country (Figure 2)",
    nameUz: "Eksportchi mamlakatda farovonlik",
    tex: "\\Delta CS = -B,\\qquad \\Delta PS = +(B + D),\\qquad \\Delta TS = +D",
    symbols: [{ tex: "D", meaning: "savdodan sof yutuq" }],
    example: { setup: "Jahon narxi ichki narxdan yuqori.", steps: ["Iste'molchilar B ni yo'qotadi, ishlab chiqaruvchilar B + D ni oladi.", "Mamlakat D ga boyiydi."] },
  },
  {
    id: "importer-welfare",
    chapter: 9,
    nameEn: "Welfare in an importing country (Figure 3)",
    nameUz: "Importchi mamlakatda farovonlik",
    tex: "\\Delta CS = +(B + D),\\qquad \\Delta PS = -B,\\qquad \\Delta TS = +D",
    symbols: [{ tex: "B", meaning: "ishlab chiqaruvchilardan iste'molchilarga o'tgan qism" }],
    example: {
      setup: "Problem 5: $20 → $16, iste'mol 3 → 4 mln, ishlab chiqarish 3 → 1 mln.",
      steps: ["\\(\\Delta CS = 4 \\times (3 + 4)/2 = +14\\) mln.", "\\(\\Delta PS = -4 \\times (3 + 1)/2 = -8\\) mln.", "\\(\\Delta TS = +6\\) mln \\(= \\tfrac12 \\cdot 4 \\cdot (4 - 1)\\)."],
    },
  },
  {
    id: "tariff",
    chapter: 9,
    nameEn: "Effects of a tariff (Figure 4)",
    nameUz: "Tarifning ta'siri",
    tex: "\\text{Revenue } E = t\\,(Q^D_2 - Q^S_2),\\qquad DWL = D + F = \\tfrac12 t\\,(Q^S_2 - Q^S_1) + \\tfrac12 t\\,(Q^D_1 - Q^D_2)",
    symbols: [
      { tex: "t", meaning: "tarif" },
      { tex: "Q^S_1, Q^D_1", meaning: "erkin savdodagi ichki taklif va talab" },
      { tex: "Q^S_2, Q^D_2", meaning: "tarif bilan" },
    ],
    example: {
      setup: "Problem 9c: $100 tarif, televizorlar: tarifsiz 200k ishlab chiqarish va 1.2M iste'mol; tarif bilan 400k va 1M.",
      steps: ["Tushum \\(= 100 \\times (1{,}000{,}000 - 400{,}000) = \\$60\\) mln.", "DWL \\(= \\tfrac12 \\cdot 100 \\cdot 200{,}000 + \\tfrac12 \\cdot 100 \\cdot 200{,}000 = \\$20\\) mln."],
    },
  },
];
