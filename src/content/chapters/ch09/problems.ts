import type { Problem } from '../../types';
import { tr } from '../../../lib/lang';

const C = 9;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch09.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch09.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "What does the domestic price that prevails without international trade tell us about a nation's comparative advantage?", [
    tr("Savdosiz ichki narx tovarning mamlakatdagi **imkoniyat xarajati**ni aks ettiradi.", "The domestic price without trade reflects the good's **opportunity cost** in the country."),
    tr("Jahon narxidan past bo'lsa — comparative advantage bor; yuqori bo'lsa — boshqalarda bor.", 'If it is below the world price — the country has a comparative advantage; if above — others do.'),
  ], "A low domestic price means a comparative advantage; a high one means other countries have it."),
  r(2, "When does a country become an exporter of a good? An importer?", [tr("Jahon narxi > ichki narx → **eksportchi**.", 'World price > domestic price → **exporter**.'), tr("Jahon narxi < ichki narx → **importchi**.", 'World price < domestic price → **importer**.')], "Exporter if the world price is above the domestic price; importer if below."),
  r(3, "Draw the supply-and-demand diagram for an importing country. Identify consumer and producer surplus before and with free trade. What is the change in total surplus?", [
    tr("Savdosiz: CS = A, PS = B + C.", 'Without trade: CS = A, PS = B + C.'),
    tr("Erkin savdo (narx jahon narxigacha tushadi): CS = A + B + D, PS = C.", 'Free trade (the price falls to the world price): CS = A + B + D, PS = C.'),
    tr("ΔTS = **+D**. Yuqoridagi grafikda jahon narxini ichki narxdan past qiling.", 'ΔTS = **+D**. In the graph above, set the world price below the domestic price.'),
  ], "Total surplus rises by area D.", "trade"),
  r(4, "Describe what a tariff is and its economic effects.", [
    tr("Tarif — import tovariga soliq.", 'A tariff is a tax on imported goods.'),
    tr("Ichki narx jahon narxidan tarif miqdoricha yuqori; import kamayadi, ichki ishlab chiqarish ↑, iste'mol ↓.", 'The domestic price is above the world price by the amount of the tariff; imports fall, domestic production ↑, consumption ↓.'),
    tr("CS ↓ (C + D + E + F), PS ↑ (C), davlat tushumi E, DWL = D + F.", 'CS ↓ (C + D + E + F), PS ↑ (C), government revenue E, DWL = D + F.'),
  ], "A tax on imports: raises the domestic price, reduces imports, causes deadweight losses D + F."),
  r(5, "List five arguments often given to support trade restrictions. How do economists respond?", [
    tr("**Jobs**: savdo yangi ish o'rinlarini comparative advantage sohalarida yaratadi.", '**Jobs**: trade creates new jobs in industries with a comparative advantage.'),
    tr("**National security**: haqiqiy holatlarda o'rinli, lekin ko'pincha bo'rttiriladi; harbiylar ham iste'molchi.", '**National security**: valid in real cases, but often exaggerated; the military is a consumer too.'),
    tr("**Infant industry**: g'oliblarni tanlash qiyin, siyosat lobbiga bo'ysunadi, himoya doimiy bo'ladi.", '**Infant industry**: picking winners is hard, policy bends to lobbies, and protection becomes permanent.'),
    tr("**Unfair competition**: subsidiyalangan import iste'molchilarga foyda; subsidiyani boshqa mamlakat soliq to'lovchilari to'laydi.", "**Unfair competition**: subsidized imports benefit consumers; the subsidy is paid by the other country's taxpayers."),
    tr("**Bargaining chip**: tahdid ishlamasa, yo zarar ko'rasiz, yo obro' yo'qotasiz.", '**Bargaining chip**: if the threat fails, you either hurt yourself or lose credibility.'),
  ], "Jobs, national security, infant industry, unfair competition, bargaining chip — usually weak."),
  r(6, "What is the difference between the unilateral and multilateral approaches to achieving free trade? Give an example of each.", [
    tr("**Unilateral** — mamlakat cheklovlarni o'zi olib tashlaydi: XIX asr Buyuk Britaniya, keyinroq Chili va Janubiy Koreya.", '**Unilateral** — a country removes its restrictions on its own: 19th-century Britain, later Chile and South Korea.'),
    tr("**Multilateral** — boshqalar bilan kelishib: NAFTA/USMCA, GATT (WTO nazoratida).", '**Multilateral** — by agreement with others: NAFTA/USMCA, GATT (overseen by the WTO).'),
  ], "Unilateral: Britain, Chile, South Korea. Multilateral: NAFTA, GATT/WTO."),
];

export const problems: Problem[] = [
  p(1, "The world price of wine is below the price that would prevail in Canada without trade. (a) Draw the Canadian market for wine under free trade; identify CS, PS, total surplus. (b) An unseasonably cold summer in Europe destroys much of the grape harvest. Effect on the world price? On Canadian CS, PS, total surplus? Winners and losers? Is Canada better or worse off?", [
    tr("(a) Kanada — importchi: narx = jahon narxi, CS = A + B + D, PS = C.", '(a) Canada is an importer: price = world price, CS = A + B + D, PS = C.'),
    tr("(b) Yevropa taklifi ↓ → **jahon narxi oshadi**.", '(b) European supply ↓ → **the world price rises**.'),
    tr("Kanadada: CS ↓, PS ↑; importchi bo'lib qolgunicha savdodan yutuq (D) kichrayadi → TS ↓.", 'In Canada: CS ↓, PS ↑; until it stops being an importer, the gain from trade (D) shrinks → TS ↓.'),
    tr("Yutganlar — kanadalik vino ishlab chiqaruvchilari, yutqazganlar — iste'molchilar. Kanada umuman **yomonroq** ahvolda.", 'Winners: Canadian wine producers; losers: consumers. Canada as a whole is **worse off**.'),
  ], "World price rises; Canadian consumers lose more than producers gain; Canada is worse off."),
  p(2, "Congress imposes a tariff on imported automobiles. Assuming the US is a price taker, show the change in imports, the loss to US consumers, the gain to US manufacturers, government revenue, and the DWL. Decompose the loss to consumers into three pieces.", [
    "Import Q₁ᴰ − Q₁ˢ dan Q₂ᴰ − Q₂ˢ ga kamayadi.",
    tr("Iste'molchilar yo'qotishi: C + D + E + F.", "Consumers' loss: C + D + E + F."),
    tr("Uch qism: **C** — ichki ishlab chiqaruvchilarga, **E** — davlat tushumi, **D + F** — sof yo'qotish.", 'Three parts: **C** — to domestic producers, **E** — government revenue, **D + F** — deadweight loss.'),
  ], "Consumer loss C + D + E + F = producer gain C + revenue E + deadweight loss D + F.", "tariff"),
  p(3, "When China's clothing industry expands, the world price of clothing falls. (a) Effects on an importer such as the United States. (b) On an exporter such as the Dominican Republic. (c) Which country should be concerned? Which should applaud?", [
    tr("(a) AQSh (importchi): narx ↓ → CS ↑, PS ↓, **TS ↑** (savdodan yutuq kattalashadi).", '(a) The U.S. (importer): price ↓ → CS ↑, PS ↓, **TS ↑** (the gain from trade grows).'),
    tr("(b) Dominikan (eksportchi): narx ↓ → CS ↑, PS ↓, **TS ↓** (eksportdan yutuq kichrayadi).", '(b) The Dominican Republic (exporter): price ↓ → CS ↑, PS ↓, **TS ↓** (the gain from exporting shrinks).'),
    tr("(c) AQSh olqishlashi, Dominikan Respublikasi xavotirlanishi kerak.", '(c) The U.S. should applaud; the Dominican Republic should worry.'),
  ], "Importers gain, exporters lose."),
  p(4, "(a) As a lobbyist for timber (low-priced foreign competition), which two or three of the five arguments would be most persuasive to Congress? (b) As an economist, which two or three make the most economic sense?", [
    tr("(a) Ish o'rinlari (saylovchilarga ta'sirli), nohaq raqobat (xorijiy subsidiyalar), ehtimol milliy xavfsizlik.", '(a) Jobs (appealing to voters), unfair competition (foreign subsidies), perhaps national security.'),
    tr("(b) Iqtisodiy jihatdan eng mantiqlisi: **milliy xavfsizlik** (haqiqiy strategik tovar bo'lsa), **bargaining chip** (tahdid ishlasa erkinroq savdo), **infant industry** (tashqi effektlar bo'lsa) — lekin har birining jiddiy kamchiliklari bor.", '(b) The most economically sensible: **national security** (if it truly is a strategic good), **bargaining chip** (freer trade if the threat works), **infant industry** (if there are externalities) — but each has serious drawbacks.'),
  ], "Persuasive: jobs, unfair competition. Most sensible: national security, bargaining chip, infant industry — with caveats."),
  p(5, "Textilia: without trade a T-shirt costs $20 and 3 million are sold. With trade the price falls to the world price of $16; consumption rises to 4 million and domestic production falls to 1 million. (a) Illustrate. (b) Calculate the change in CS, PS, and total surplus.", [
    tr("(a) Importchi grafigi: savdosiz (3 mln, $20); $16 da talab 4 mln, taklif 1 mln, import 3 mln.", '(a) Importer graph: without trade (3 million, $20); at $16 demand is 4 million, supply 1 million, imports 3 million.'),
    tr("(b) ΔCS = 4 × (3 + 4)/2 = **+$14 mln**.", '(b) ΔCS = 4 × (3 + 4)/2 = **+$14 million**.'),
    tr("ΔPS = −4 × (3 + 1)/2 = **−$8 mln**.", 'ΔPS = −4 × (3 + 1)/2 = **−$8 million**.'),
    tr("ΔTS = **+$6 mln** (= ½ × 4 × (4 − 1)).", 'ΔTS = **+$6 million** (= ½ × 4 × (4 − 1)).'),
  ], "ΔCS +$14M, ΔPS −$8M, ΔTS +$6M.", "textilia"),
  p(6, "China, a major grain exporter, imposed a tax on grain exports. (a) Draw the market. (b) Effect on domestic grain prices? (c) On consumers, producers, and government revenue? (d) On total welfare in China?", [
    tr("(a) Eksportchi grafigi: jahon narxi ichki savdosiz narxdan yuqori.", '(a) Exporter graph: the world price is above the domestic no-trade price.'),
    tr("(b) Eksport qiluvchi endi jahon narxidan soliqni ayirib oladi → ichkarida sotish ham shu narxda → **ichki narx tushadi**.", '(b) Exporters now receive the world price minus the tax → domestic sales happen at that price too → **the domestic price falls**.'),
    tr("(c) Iste'molchilar yutadi, ishlab chiqaruvchilar yutqazadi, davlat tushum oladi.", '(c) Consumers gain, producers lose, the government collects revenue.'),
    tr("(d) Total welfare **kamayadi**: ikki sof yo'qotish uchburchagi (kam ishlab chiqarish va ortiqcha iste'mol) — tarifning ko'zgudagi aksi.", '(d) Total welfare **falls**: two deadweight-loss triangles (underproduction and overconsumption) — the mirror image of a tariff.'),
  ], "Domestic price falls; consumers and government gain, producers lose more; total welfare falls."),
  p(7, "For a country that imports a good, true or false: (a) “The greater the elasticity of demand, the greater the gains from trade.” (b) “If demand is perfectly inelastic, there are no gains from trade.” (c) “If demand is perfectly inelastic, consumers do not benefit from trade.”", [
    tr("(a) **To'g'ri**: egiluvchan talabda past narx iste'molni ko'proq oshiradi → D katta.", '(a) **True**: with elastic demand a lower price raises consumption more → D is larger.'),
    tr("(b) **Noto'g'ri**: iste'mol o'zgarmasa ham, qimmat ichki ishlab chiqarish arzon importga almashadi — yutuq bor.", "(b) **False**: even if consumption doesn't change, costly domestic production is replaced by cheap imports — there is a gain."),
    tr("(c) **Noto'g'ri**: bir xil miqdorni past narxda olishadi → CS oshadi.", '(c) **False**: they buy the same quantity at a lower price → CS rises.'),
  ], "(a) True (b) False (c) False."),
  p(8, "The president of Isoland considers the same-sized tax on textile **consumption** (domestic and imported) instead of a tariff. (a) Quantity consumed and produced? (b) Construct a table like Figure 4. (c) Which raises more revenue? Which has a smaller DWL?", [
    tr("(a) Iste'mol = Q₂ᴰ (tarifdagi kabi). Ishlab chiqarish = Q₁ˢ — ishlab chiqaruvchilar jahon narxini oladi.", '(a) Consumption = Q₂ᴰ (as with the tariff). Production = Q₁ˢ — producers receive the world price.'),
    tr("(b) CS: A + B (−(C + D + E + F)); PS: G (o'zgarmaydi); tushum: **C + D + E**; DWL: **F**.", '(b) CS: A + B (−(C + D + E + F)); PS: G (unchanged); revenue: **C + D + E**; DWL: **F**.'),
    tr("(c) Iste'mol solig'i **ko'proq tushum** (C + D + E > E) va **kamroq DWL** (F < D + F) beradi.", '(c) The consumption tax yields **more revenue** (C + D + E > E) and **a smaller DWL** (F < D + F).'),
  ], "The consumption tax raises more revenue (C + D + E) with a smaller DWL (F only)."),
  p(9, "The US imports TVs: consumers buy 1 million a year, 400,000 made domestically, 600,000 imported. (a) A Chinese technological advance cuts the world price by $100. Show the welfare effects. (b) After the fall consumers buy 1.2 million, 200,000 domestic. Calculate the change in CS, PS, total surplus. (c) A $100 tariff in response: revenue and DWL? Good policy? Who might support it? (d) If the fall were due to a $100 Chinese subsidy?", [
    tr("(a) Importchi: narx ↓ → CS ↑, PS ↓, TS ↑.", '(a) Importer: price ↓ → CS ↑, PS ↓, TS ↑.'),
    tr("(b) ΔCS = 100 × (1 + 1.2)/2 mln = **+$110 mln**; ΔPS = −100 × (0.4 + 0.2)/2 mln = **−$30 mln**; ΔTS = **+$80 mln**.", '(b) ΔCS = 100 × (1 + 1.2)/2 million = **+$110 million**; ΔPS = −100 × (0.4 + 0.2)/2 million = **−$30 million**; ΔTS = **+$80 million**.'),
    tr("(c) Narx qaytadi: import 600k → tushum **$60 mln**; DWL = ½·100·200k + ½·100·200k = **$20 mln**. Yomon siyosat (TS 20 mln kamayadi); ichki TV ishlab chiqaruvchilari va ularning ishchilari qo'llab-quvvatlaydi.", '(c) The price returns: imports 600k → revenue **$60 million**; DWL = ½·100·200k + ½·100·200k = **$20 million**. A bad policy (TS falls by $20 million); domestic TV producers and their workers would support it.'),
    tr("(d) AQSh uchun tahlil **o'zgarmaydi** — arzon import foydali; subsidiyani Xitoy soliq to'lovchilari to'laydi.", "(d) The analysis for the U.S. **doesn't change** — cheap imports are beneficial; China's taxpayers pay the subsidy."),
  ], "(b) +$110M, −$30M, +$80M. (c) Revenue $60M, DWL $20M — bad policy, backed by domestic producers. (d) Same analysis.", "tv"),
  p(10, "A small country exports steel. A “pro-trade” government subsidizes steel exports by paying a certain amount for each ton sold abroad. How does this affect the domestic price, quantity produced, consumed and exported? CS, PS, government revenue, total surplus? Is it good policy?", [
    tr("Eksportchi jahon narxi + subsidiya oladi → ichkarida ham shu narxdan kam sotmaydi → **ichki narx oshadi**.", "Exporters receive the world price + subsidy → they won't sell domestically for less → **the domestic price rises**."),
    tr("Ishlab chiqarish ↑, iste'mol ↓, eksport ↑.", 'Production ↑, consumption ↓, exports ↑.'),
    tr("CS ↓, PS ↑, davlat xarajati (subsidiya × eksport) — tushum manfiy.", 'CS ↓, PS ↑, government spending (subsidy × exports) — negative revenue.'),
    tr("TS **kamayadi** — ikki sof yo'qotish uchburchagi. Samaradorlik nuqtai nazaridan **yomon** siyosat (tarif tahliliga o'xshash).", 'TS **falls** — two deadweight-loss triangles. From an efficiency standpoint a **bad** policy (similar to the tariff analysis).'),
  ], "Domestic price rises; production and exports up, consumption down; total surplus falls — not efficient."),
];
