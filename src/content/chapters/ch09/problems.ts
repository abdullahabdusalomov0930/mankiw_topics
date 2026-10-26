import type { Problem } from '../../types';

const C = 9;
const r = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch09.qr.${number}`, chapter: C, kind: 'review', number, prompt, steps, answer, widget });
const p = (number: number, prompt: string, steps: string[], answer: string, widget?: string): Problem => ({ id: `ch09.pa.${number}`, chapter: C, kind: 'problem', number, prompt, steps, answer, widget });

export const review: Problem[] = [
  r(1, "What does the domestic price that prevails without international trade tell us about a nation's comparative advantage?", [
    "Savdosiz ichki narx tovarning mamlakatdagi **imkoniyat xarajati**ni aks ettiradi.",
    "Jahon narxidan past bo'lsa — comparative advantage bor; yuqori bo'lsa — boshqalarda bor.",
  ], "A low domestic price means a comparative advantage; a high one means other countries have it."),
  r(2, "When does a country become an exporter of a good? An importer?", ["Jahon narxi > ichki narx → **eksportchi**.", "Jahon narxi < ichki narx → **importchi**."], "Exporter if the world price is above the domestic price; importer if below."),
  r(3, "Draw the supply-and-demand diagram for an importing country. Identify consumer and producer surplus before and with free trade. What is the change in total surplus?", [
    "Savdosiz: CS = A, PS = B + C.",
    "Erkin savdo (narx jahon narxigacha tushadi): CS = A + B + D, PS = C.",
    "ΔTS = **+D**. Yuqoridagi grafikda jahon narxini ichki narxdan past qiling.",
  ], "Total surplus rises by area D.", "trade"),
  r(4, "Describe what a tariff is and its economic effects.", [
    "Tarif — import tovariga soliq.",
    "Ichki narx jahon narxidan tarif miqdoricha yuqori; import kamayadi, ichki ishlab chiqarish ↑, iste'mol ↓.",
    "CS ↓ (C + D + E + F), PS ↑ (C), davlat tushumi E, DWL = D + F.",
  ], "A tax on imports: raises the domestic price, reduces imports, causes deadweight losses D + F."),
  r(5, "List five arguments often given to support trade restrictions. How do economists respond?", [
    "**Jobs**: savdo yangi ish o'rinlarini comparative advantage sohalarida yaratadi.",
    "**National security**: haqiqiy holatlarda o'rinli, lekin ko'pincha bo'rttiriladi; harbiylar ham iste'molchi.",
    "**Infant industry**: g'oliblarni tanlash qiyin, siyosat lobbiga bo'ysunadi, himoya doimiy bo'ladi.",
    "**Unfair competition**: subsidiyalangan import iste'molchilarga foyda; subsidiyani boshqa mamlakat soliq to'lovchilari to'laydi.",
    "**Bargaining chip**: tahdid ishlamasa, yo zarar ko'rasiz, yo obro' yo'qotasiz.",
  ], "Jobs, national security, infant industry, unfair competition, bargaining chip — usually weak."),
  r(6, "What is the difference between the unilateral and multilateral approaches to achieving free trade? Give an example of each.", [
    "**Unilateral** — mamlakat cheklovlarni o'zi olib tashlaydi: XIX asr Buyuk Britaniya, keyinroq Chili va Janubiy Koreya.",
    "**Multilateral** — boshqalar bilan kelishib: NAFTA/USMCA, GATT (WTO nazoratida).",
  ], "Unilateral: Britain, Chile, South Korea. Multilateral: NAFTA, GATT/WTO."),
];

export const problems: Problem[] = [
  p(1, "The world price of wine is below the price that would prevail in Canada without trade. (a) Draw the Canadian market for wine under free trade; identify CS, PS, total surplus. (b) An unseasonably cold summer in Europe destroys much of the grape harvest. Effect on the world price? On Canadian CS, PS, total surplus? Winners and losers? Is Canada better or worse off?", [
    "(a) Kanada — importchi: narx = jahon narxi, CS = A + B + D, PS = C.",
    "(b) Yevropa taklifi ↓ → **jahon narxi oshadi**.",
    "Kanadada: CS ↓, PS ↑; importchi bo'lib qolgunicha savdodan yutuq (D) kichrayadi → TS ↓.",
    "Yutganlar — kanadalik vino ishlab chiqaruvchilari, yutqazganlar — iste'molchilar. Kanada umuman **yomonroq** ahvolda.",
  ], "World price rises; Canadian consumers lose more than producers gain; Canada is worse off."),
  p(2, "Congress imposes a tariff on imported automobiles. Assuming the US is a price taker, show the change in imports, the loss to US consumers, the gain to US manufacturers, government revenue, and the DWL. Decompose the loss to consumers into three pieces.", [
    "Import Q₁ᴰ − Q₁ˢ dan Q₂ᴰ − Q₂ˢ ga kamayadi.",
    "Iste'molchilar yo'qotishi: C + D + E + F.",
    "Uch qism: **C** — ichki ishlab chiqaruvchilarga, **E** — davlat tushumi, **D + F** — sof yo'qotish.",
  ], "Consumer loss C + D + E + F = producer gain C + revenue E + deadweight loss D + F.", "tariff"),
  p(3, "When China's clothing industry expands, the world price of clothing falls. (a) Effects on an importer such as the United States. (b) On an exporter such as the Dominican Republic. (c) Which country should be concerned? Which should applaud?", [
    "(a) AQSh (importchi): narx ↓ → CS ↑, PS ↓, **TS ↑** (savdodan yutuq kattalashadi).",
    "(b) Dominikan (eksportchi): narx ↓ → CS ↑, PS ↓, **TS ↓** (eksportdan yutuq kichrayadi).",
    "(c) AQSh olqishlashi, Dominikan Respublikasi xavotirlanishi kerak.",
  ], "Importers gain, exporters lose."),
  p(4, "(a) As a lobbyist for timber (low-priced foreign competition), which two or three of the five arguments would be most persuasive to Congress? (b) As an economist, which two or three make the most economic sense?", [
    "(a) Ish o'rinlari (saylovchilarga ta'sirli), nohaq raqobat (xorijiy subsidiyalar), ehtimol milliy xavfsizlik.",
    "(b) Iqtisodiy jihatdan eng mantiqlisi: **milliy xavfsizlik** (haqiqiy strategik tovar bo'lsa), **bargaining chip** (tahdid ishlasa erkinroq savdo), **infant industry** (tashqi effektlar bo'lsa) — lekin har birining jiddiy kamchiliklari bor.",
  ], "Persuasive: jobs, unfair competition. Most sensible: national security, bargaining chip, infant industry — with caveats."),
  p(5, "Textilia: without trade a T-shirt costs $20 and 3 million are sold. With trade the price falls to the world price of $16; consumption rises to 4 million and domestic production falls to 1 million. (a) Illustrate. (b) Calculate the change in CS, PS, and total surplus.", [
    "(a) Importchi grafigi: savdosiz (3 mln, $20); $16 da talab 4 mln, taklif 1 mln, import 3 mln.",
    "(b) ΔCS = 4 × (3 + 4)/2 = **+$14 mln**.",
    "ΔPS = −4 × (3 + 1)/2 = **−$8 mln**.",
    "ΔTS = **+$6 mln** (= ½ × 4 × (4 − 1)).",
  ], "ΔCS +$14M, ΔPS −$8M, ΔTS +$6M.", "textilia"),
  p(6, "China, a major grain exporter, imposed a tax on grain exports. (a) Draw the market. (b) Effect on domestic grain prices? (c) On consumers, producers, and government revenue? (d) On total welfare in China?", [
    "(a) Eksportchi grafigi: jahon narxi ichki savdosiz narxdan yuqori.",
    "(b) Eksport qiluvchi endi jahon narxidan soliqni ayirib oladi → ichkarida sotish ham shu narxda → **ichki narx tushadi**.",
    "(c) Iste'molchilar yutadi, ishlab chiqaruvchilar yutqazadi, davlat tushum oladi.",
    "(d) Total welfare **kamayadi**: ikki sof yo'qotish uchburchagi (kam ishlab chiqarish va ortiqcha iste'mol) — tarifning ko'zgudagi aksi.",
  ], "Domestic price falls; consumers and government gain, producers lose more; total welfare falls."),
  p(7, "For a country that imports a good, true or false: (a) “The greater the elasticity of demand, the greater the gains from trade.” (b) “If demand is perfectly inelastic, there are no gains from trade.” (c) “If demand is perfectly inelastic, consumers do not benefit from trade.”", [
    "(a) **To'g'ri**: egiluvchan talabda past narx iste'molni ko'proq oshiradi → D katta.",
    "(b) **Noto'g'ri**: iste'mol o'zgarmasa ham, qimmat ichki ishlab chiqarish arzon importga almashadi — yutuq bor.",
    "(c) **Noto'g'ri**: bir xil miqdorni past narxda olishadi → CS oshadi.",
  ], "(a) True (b) False (c) False."),
  p(8, "The president of Isoland considers the same-sized tax on textile **consumption** (domestic and imported) instead of a tariff. (a) Quantity consumed and produced? (b) Construct a table like Figure 4. (c) Which raises more revenue? Which has a smaller DWL?", [
    "(a) Iste'mol = Q₂ᴰ (tarifdagi kabi). Ishlab chiqarish = Q₁ˢ — ishlab chiqaruvchilar jahon narxini oladi.",
    "(b) CS: A + B (−(C + D + E + F)); PS: G (o'zgarmaydi); tushum: **C + D + E**; DWL: **F**.",
    "(c) Iste'mol solig'i **ko'proq tushum** (C + D + E > E) va **kamroq DWL** (F < D + F) beradi.",
  ], "The consumption tax raises more revenue (C + D + E) with a smaller DWL (F only)."),
  p(9, "The US imports TVs: consumers buy 1 million a year, 400,000 made domestically, 600,000 imported. (a) A Chinese technological advance cuts the world price by $100. Show the welfare effects. (b) After the fall consumers buy 1.2 million, 200,000 domestic. Calculate the change in CS, PS, total surplus. (c) A $100 tariff in response: revenue and DWL? Good policy? Who might support it? (d) If the fall were due to a $100 Chinese subsidy?", [
    "(a) Importchi: narx ↓ → CS ↑, PS ↓, TS ↑.",
    "(b) ΔCS = 100 × (1 + 1.2)/2 mln = **+$110 mln**; ΔPS = −100 × (0.4 + 0.2)/2 mln = **−$30 mln**; ΔTS = **+$80 mln**.",
    "(c) Narx qaytadi: import 600k → tushum **$60 mln**; DWL = ½·100·200k + ½·100·200k = **$20 mln**. Yomon siyosat (TS 20 mln kamayadi); ichki TV ishlab chiqaruvchilari va ularning ishchilari qo'llab-quvvatlaydi.",
    "(d) AQSh uchun tahlil **o'zgarmaydi** — arzon import foydali; subsidiyani Xitoy soliq to'lovchilari to'laydi.",
  ], "(b) +$110M, −$30M, +$80M. (c) Revenue $60M, DWL $20M — bad policy, backed by domestic producers. (d) Same analysis.", "tv"),
  p(10, "A small country exports steel. A “pro-trade” government subsidizes steel exports by paying a certain amount for each ton sold abroad. How does this affect the domestic price, quantity produced, consumed and exported? CS, PS, government revenue, total surplus? Is it good policy?", [
    "Eksportchi jahon narxi + subsidiya oladi → ichkarida ham shu narxdan kam sotmaydi → **ichki narx oshadi**.",
    "Ishlab chiqarish ↑, iste'mol ↓, eksport ↑.",
    "CS ↓, PS ↑, davlat xarajati (subsidiya × eksport) — tushum manfiy.",
    "TS **kamayadi** — ikki sof yo'qotish uchburchagi. Samaradorlik nuqtai nazaridan **yomon** siyosat (tarif tahliliga o'xshash).",
  ], "Domestic price rises; production and exports up, consumption down; total surplus falls — not efficient."),
];
