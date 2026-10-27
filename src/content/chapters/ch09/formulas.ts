import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "export-rule",
    chapter: 9,
    nameEn: "Exporter or importer?",
    nameUz: "Eksportchimi yoki importchimi?",
    tex: "P_W > P_D \\Rightarrow \\text{export},\\qquad P_W < P_D \\Rightarrow \\text{import}",
    symbols: [
      { tex: "P_W", meaning: tr("jahon narxi", 'world price') },
      { tex: "P_D", meaning: tr("savdosiz ichki narx", 'domestic price without trade') },
    ],
    example: { setup: tr("QuickQuiz 1: Autarkada kostyum 3 untsiya oltin, qo'shnilarda 2.", 'QuickQuiz 1: in Autarka a suit costs 3 ounces of gold; in neighboring countries, 2.'), steps: ["\\(P_W = 2 < P_D = 3\\) → importchi, comparative advantage yo'q."] },
  },
  {
    id: "exports",
    chapter: 9,
    nameEn: "Exports and imports",
    nameUz: "Eksport va import hajmi",
    tex: "\\text{Exports} = Q^S(P_W) - Q^D(P_W),\\qquad \\text{Imports} = Q^D(P_W) - Q^S(P_W)",
    symbols: [{ tex: "Q^S(P_W),\\ Q^D(P_W)", meaning: tr("jahon narxida ichki taklif va talab", 'domestic supply and demand at the world price') }],
    example: { setup: tr("Problem 5: $16 da 4 mln iste'mol, 1 mln ishlab chiqarish.", 'Problem 5: at $16, consumption is 4 million and production 1 million.'), steps: [tr("Import \\(= 4 - 1 = 3\\) mln futbolka.", 'Imports \\(= 4 - 1 = 3\\) million T-shirts.')] },
  },
  {
    id: "exporter-welfare",
    chapter: 9,
    nameEn: "Welfare in an exporting country (Figure 2)",
    nameUz: "Eksportchi mamlakatda farovonlik",
    tex: "\\Delta CS = -B,\\qquad \\Delta PS = +(B + D),\\qquad \\Delta TS = +D",
    symbols: [{ tex: "D", meaning: tr("savdodan sof yutuq", 'net gain from trade') }],
    example: { setup: tr("Jahon narxi ichki narxdan yuqori.", 'The world price is above the domestic price.'), steps: [tr("Iste'molchilar B ni yo'qotadi, ishlab chiqaruvchilar B + D ni oladi.", 'Consumers lose B; producers gain B + D.'), tr("Mamlakat D ga boyiydi.", 'The country is richer by D.')] },
  },
  {
    id: "importer-welfare",
    chapter: 9,
    nameEn: "Welfare in an importing country (Figure 3)",
    nameUz: "Importchi mamlakatda farovonlik",
    tex: "\\Delta CS = +(B + D),\\qquad \\Delta PS = -B,\\qquad \\Delta TS = +D",
    symbols: [{ tex: "B", meaning: tr("ishlab chiqaruvchilardan iste'molchilarga o'tgan qism", 'the part transferred from producers to consumers') }],
    example: {
      setup: tr("Problem 5: $20 → $16, iste'mol 3 → 4 mln, ishlab chiqarish 3 → 1 mln.", 'Problem 5: $20 → $16; consumption 3 → 4 million, production 3 → 1 million.'),
      steps: [tr("\\(\\Delta CS = 4 \\times (3 + 4)/2 = +14\\) mln.", '\\(\\Delta CS = 4 \\times (3 + 4)/2 = +14\\) million.'), tr("\\(\\Delta PS = -4 \\times (3 + 1)/2 = -8\\) mln.", '\\(\\Delta PS = -4 \\times (3 + 1)/2 = -8\\) million.'), tr("\\(\\Delta TS = +6\\) mln \\(= \\tfrac12 \\cdot 4 \\cdot (4 - 1)\\).", '\\(\\Delta TS = +6\\) million \\(= \\tfrac12 \\cdot 4 \\cdot (4 - 1)\\).')],
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
      { tex: "Q^S_1, Q^D_1", meaning: tr("erkin savdodagi ichki taklif va talab", 'domestic supply and demand under free trade') },
      { tex: "Q^S_2, Q^D_2", meaning: tr("tarif bilan", 'with the tariff') },
    ],
    example: {
      setup: tr("Problem 9c: $100 tarif, televizorlar: tarifsiz 200k ishlab chiqarish va 1.2M iste'mol; tarif bilan 400k va 1M.", 'Problem 9c: a $100 tariff on TVs: without it, 200k produced and 1.2M consumed; with it, 400k and 1M.'),
      steps: [tr("Tushum \\(= 100 \\times (1{,}000{,}000 - 400{,}000) = \\$60\\) mln.", 'Revenue \\(= 100 \\times (1{,}000{,}000 - 400{,}000) = \\$60\\) million.'), tr("DWL \\(= \\tfrac12 \\cdot 100 \\cdot 200{,}000 + \\tfrac12 \\cdot 100 \\cdot 200{,}000 = \\$20\\) mln.", 'DWL \\(= \\tfrac12 \\cdot 100 \\cdot 200{,}000 + \\tfrac12 \\cdot 100 \\cdot 200{,}000 = \\$20\\) million.')],
    },
  },
];
