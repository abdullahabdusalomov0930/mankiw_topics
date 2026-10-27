import type { Term } from '../../types';
import { tr } from '../../../lib/lang';

export const terms: Term[] = [
  {
    id: 'deadweight-loss',
    chapter: 8,
    en: 'deadweight loss',
    uz: "sof yo'qotish (o'lik yuk yo'qotishi)",
    defEn: 'the fall in total surplus that results from a market distortion, such as a tax',
    defUz: tr("Soliq yoki narx nazorati sabab amalga oshmay qolgan foydali bitimlar qiymati. Hech kimga — na xaridorga, na sotuvchiga, na davlatga — o'tmaydigan yo'qotish.", "The value of mutually beneficial trades that don't happen because of a tax or a price control. A loss that goes to nobody — not buyers, not sellers, not the government."),
  },
  {
    id: "tax-revenue",
    chapter: 8,
    en: "tax revenue",
    uz: "soliq tushumi",
    defEn: "the amount the government collects from a tax: the size of the tax times the quantity sold, T × Q",
    defUz: tr("\\(T \\times Q\\) — grafikda talab va taklif orasidagi, balandligi T va kengligi Q bo'lgan to'rtburchak. Bu tushum soliqdan foyda ko'radiganlarga (yo'llar, maktablar) boradi.", '\\(T \\times Q\\) — on a graph, the rectangle between demand and supply with height T and width Q. This revenue goes to those who benefit from what taxes pay for (roads, schools).'),
  },
  {
    id: "marginal-tax-rate",
    chapter: 8,
    en: "marginal tax rate",
    uz: "marjinal soliq stavkasi",
    defEn: "the tax on the last dollar of earnings",
    defUz: tr("Oxirgi ishlab topilgan dollardan olinadigan soliq ulushi. AQShda odatiy ishchi uchun barcha mehnat soliqlari birgalikda taxminan **40%**.", 'The share of the last dollar earned that is taken in tax. In the U.S. all labor taxes together come to about **40%** for a typical worker.'),
  },
  {
    id: "underground-economy",
    chapter: 8,
    en: "underground economy",
    uz: "yashirin (soya) iqtisodiyot",
    defEn: "economic activity that evades taxes, such as jobs paid “under the table” or illegal activity",
    defUz: tr("Soliqdan qochish uchun “konvertda” maosh yoki noqonuniy faoliyat. Mehnat solig'i yuqori bo'lsa, ba'zi odamlar shu yerga o'tadi — mehnat taklifi egiluvchanroq bo'ladi.", 'Cash wages paid “in an envelope” or illegal activity to avoid taxes. When labor taxes are high, some people move here — making labor supply more elastic.'),
  },
  {
    id: "laffer-curve",
    chapter: 8,
    en: "Laffer curve",
    uz: "Laffer egri chizig'i",
    defEn: "the relationship between the size of a tax and tax revenue: revenue first rises with the tax, then falls",
    defUz: tr("Soliq oshgan sari tushum avval o'sadi, keyin bozor juda qisqargani sabab kamayadi. Arthur Laffer 1974 yilda uni salfetkaga chizgan.", 'As a tax rises, revenue first rises, then falls because the market shrinks so much. Arthur Laffer sketched it on a napkin in 1974.'),
  },
  {
    id: "supply-side-economics",
    chapter: 8,
    en: "supply-side economics",
    uz: "taklif tomoni iqtisodiyoti",
    defEn: "the view that lower tax rates would encourage people to supply more labor, raising incomes and possibly even tax revenue",
    defUz: tr("Laffer va Reagan qarashi: soliqni kamaytirish mehnat taklifini oshiradi, daromadlar shunchalik o'sadiki, tushum ham oshishi mumkin. Ko'pchilik iqtisodchilar AQSh uchun bunga shubha bilan qaraydi.", 'The view of Laffer and Reagan: tax cuts raise labor supply, and incomes grow so much that revenue may even rise. Most economists are skeptical of this for the U.S.'),
  },
];
