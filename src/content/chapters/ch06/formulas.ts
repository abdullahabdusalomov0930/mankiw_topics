import type { Formula } from '../../types';
import { tr } from '../../../lib/lang';

export const formulas: Formula[] = [
  {
    id: "ceiling",
    chapter: 6,
    nameEn: "Binding price ceiling and shortage",
    nameUz: "Ta'sirli narx shifti va taqchillik",
    tex: "P_{\\max} < P^* \\;\\Rightarrow\\; \\text{Shortage} = Q^D(P_{\\max}) - Q^S(P_{\\max}),\\quad Q_{\\text{sold}} = Q^S(P_{\\max})",
    symbols: [
      { tex: "P_{\\max}", meaning: tr("narx shifti (qonuniy eng yuqori narx)", 'the price ceiling (the legal maximum)') },
      { tex: "P^*", meaning: tr("muvozanat narxi", 'the equilibrium price') },
      { tex: "Q^D(P),\\ Q^S(P)", meaning: tr("shu narxdagi talab va taklif miqdori", 'the quantities demanded and supplied at that price') },
      { tex: "Q_{\\text{sold}}", meaning: tr("haqiqatda sotilgan miqdor — bozorning “qisqa tomoni”", 'the quantity actually sold — the “short side” of the market') },
    ],
    example: {
      setup: "\\(Q^D = 300 - P\\), \\(Q^S = 2P\\) (Problem 10). Muvozanat \\(P^* = 100\\). Shift \\(P_{\\max} = 90\\).",
      steps: [
        "\\(90 < 100\\) — shift **binding**.",
        "\\(Q^D(90) = 300 - 90 = 210\\), \\(Q^S(90) = 2 \\cdot 90 = 180\\).",
        tr("Taqchillik \\(= 210 - 180 = 30\\); sotiladigan miqdor \\(= 180\\).", 'Shortage \\(= 210 - 180 = 30\\); the quantity sold \\(= 180\\).'),
      ],
    },
  },
  {
    id: "floor",
    chapter: 6,
    nameEn: "Binding price floor and surplus",
    nameUz: "Ta'sirli narx tubi va ortiqcha taklif",
    tex: "P_{\\min} > P^* \\;\\Rightarrow\\; \\text{Surplus} = Q^S(P_{\\min}) - Q^D(P_{\\min}),\\quad Q_{\\text{sold}} = Q^D(P_{\\min})",
    symbols: [
      { tex: "P_{\\min}", meaning: tr("narx tubi (qonuniy eng past narx)", 'the price floor (the legal minimum)') },
      { tex: "Q_{\\text{sold}}", meaning: tr("sotilgan miqdor: endi xaridorlar qancha olsa, shuncha", 'the quantity sold: now as much as buyers will take') },
    ],
    example: {
      setup: tr("Muzqaymoq bozori (Figure 4): muvozanat $3, 100 dona. Narx tubi $4.", 'The ice-cream market (Figure 4): equilibrium $3, 100 cones. A floor at $4.'),
      steps: ["\\(4 > 3\\) — tub **binding**.", "\\(Q^S(4) = 120\\), \\(Q^D(4) = 80\\).", tr("Ortiqcha \\(= 120 - 80 = 40\\) dona; 80 dona sotiladi.", 'Surplus \\(= 120 - 80 = 40\\) cones; 80 cones are sold.')],
    },
    note: tr("Agar \\(P_{\\min} \\le P^*\\) bo'lsa, tub ta'sirsiz: \\(P = P^*\\). Problem 10(c) da $90 lik tub shunday — muvozanat $100.", 'If \\(P_{\\min} \\le P^*\\) the floor is not binding: \\(P = P^*\\). The $90 floor in Problem 10(c) is like that — equilibrium is $100.'),
  },
  {
    id: "wedge",
    chapter: 6,
    nameEn: "Tax wedge",
    nameUz: "Soliq ponasi",
    tex: "P_B - P_S = T",
    symbols: [
      { tex: "P_B", meaning: tr("xaridor to'laydigan narx (soliq bilan birga)", 'the price buyers pay (including the tax)') },
      { tex: "P_S", meaning: tr("sotuvchi soliqdan keyin oladigan narx", 'the price sellers keep after the tax') },
      { tex: "T", meaning: tr("bir birlikka soliq", 'the tax per unit') },
    ],
    example: {
      setup: tr("Muzqaymoqqa $0.50 soliq (Figures 6–7).", 'A $0.50 tax on ice cream (Figures 6–7).'),
      steps: [tr("Xaridor $3.30 to'laydi, sotuvchi $2.80 oladi.", 'Buyers pay $3.30 and sellers receive $2.80.'), "\\(3.30 - 2.80 = 0.50 = T\\) ✓"],
    },
  },
  {
    id: "tax-on-sellers",
    chapter: 6,
    nameEn: "Tax on sellers shifts supply up by T",
    nameUz: "Sotuvchiga soliq taklifni T ga yuqoriga siljitadi",
    tex: "Q^S_{\\text{new}}(P) = Q^S(P - T)",
    symbols: [
      { tex: "Q^S_{\\text{new}}(P)", meaning: tr("bozor narxi \\(P\\) bo'lganda soliq bilan taklif miqdori", 'the quantity supplied with the tax at market price \\(P\\)') },
      { tex: "P - T", meaning: tr("sotuvchining qo'lida qoladigan narx", 'the price the seller keeps') },
    ],
    example: {
      setup: tr("Problem 10(d): \\(Q^S = 2P\\), \\(Q^D = 300 - P\\), sotuvchilarga \\(T = 30\\).", 'Problem 10(d): \\(Q^S = 2P\\), \\(Q^D = 300 - P\\), \\(T = 30\\) on sellers.'),
      steps: [
        tr("Yangi taklif: \\(Q^S = 2(P - 30)\\).", 'The new supply: \\(Q^S = 2(P - 30)\\).'),
        tr("Tenglashtiramiz: \\(300 - P = 2P - 60 \\Rightarrow 3P = 360 \\Rightarrow P = 120\\).", 'Set equal: \\(300 - P = 2P - 60 \\Rightarrow 3P = 360 \\Rightarrow P = 120\\).'),
        tr("\\(Q = 300 - 120 = 180\\). Xaridor \\(P_B = 120\\), sotuvchi \\(P_S = 120 - 30 = 90\\).", '\\(Q = 300 - 120 = 180\\). Buyers \\(P_B = 120\\), sellers \\(P_S = 120 - 30 = 90\\).'),
      ],
    },
  },
  {
    id: "tax-on-buyers",
    chapter: 6,
    nameEn: "Tax on buyers shifts demand down by T",
    nameUz: "Xaridorga soliq talabni T ga pastga siljitadi",
    tex: "Q^D_{\\text{new}}(P) = Q^D(P + T)",
    symbols: [{ tex: "P + T", meaning: tr("xaridor uchun haqiqiy narx: sotuvchiga to'lagani + soliq", 'the real price for buyers: what they pay the seller + the tax') }],
    example: {
      setup: tr("Xuddi shu bozor, lekin \\(T = 30\\) ni xaridorlar to'laydi.", 'The same market, but buyers pay the \\(T = 30\\).'),
      steps: [
        tr("Yangi talab: \\(Q^D = 300 - (P + 30) = 270 - P\\).", 'The new demand: \\(Q^D = 300 - (P + 30) = 270 - P\\).'),
        tr("\\(270 - P = 2P \\Rightarrow P = 90\\) — bu sotuvchi oladigan narx \\(P_S\\).", '\\(270 - P = 2P \\Rightarrow P = 90\\) — the price sellers receive, \\(P_S\\).'),
        tr("\\(P_B = 90 + 30 = 120\\), \\(Q = 180\\) — sotuvchiga soliq bilan **aynan bir xil**.", '\\(P_B = 90 + 30 = 120\\), \\(Q = 180\\) — **exactly the same** as with the tax on sellers.'),
      ],
    },
  },
  {
    id: "burden-share",
    chapter: 6,
    nameEn: "Who bears the tax",
    nameUz: "Soliq yukining ulushlari",
    tex: "\\text{Buyers' share} = \\frac{P_B - P^*}{T}, \\qquad \\text{Sellers' share} = \\frac{P^* - P_S}{T}",
    symbols: [
      { tex: "P^*", meaning: tr("soliqsiz muvozanat narxi", 'the equilibrium price without the tax') },
      { tex: "P_B - P^*", meaning: tr("xaridorlar uchun narx qanchaga oshdi", 'how much the price rose for buyers') },
      { tex: "P^* - P_S", meaning: tr("sotuvchilar qo'lida qoladigan narx qanchaga kamaydi", 'how much the price kept by sellers fell') },
    ],
    example: {
      setup: tr("Muzqaymoq: \\(P^* = 3.00\\), \\(P_B = 3.30\\), \\(P_S = 2.80\\), \\(T = 0.50\\).", 'Ice cream: \\(P^* = 3.00\\), \\(P_B = 3.30\\), \\(P_S = 2.80\\), \\(T = 0.50\\).'),
      steps: [tr("Xaridorlar: \\(0.30 / 0.50 = 60\\%\\).", 'Buyers: \\(0.30 / 0.50 = 60\\%\\).'), tr("Sotuvchilar: \\(0.20 / 0.50 = 40\\%\\). Yig'indi 100% ✓", 'Sellers: \\(0.20 / 0.50 = 40\\%\\). Total 100% ✓')],
    },
  },
  {
    id: "burden-elasticity",
    chapter: 6,
    nameEn: "Burden falls on the less elastic side",
    nameUz: "Yuk kamroq egiluvchan tomonga tushadi",
    tex: "\\frac{\\text{Buyers' share}}{\\text{Sellers' share}} = \\frac{E_s}{E_d}",
    symbols: [
      { tex: "E_s", meaning: tr("taklifning narx egiluvchanligi (muvozanat nuqtasida)", 'the price elasticity of supply (at equilibrium)') },
      { tex: "E_d", meaning: tr("talabning narx egiluvchanligi (absolyut qiymat)", 'the price elasticity of demand (absolute value)') },
    ],
    example: {
      setup: tr("Kitob bu qoidani so'z bilan aytadi (Figure 9). Aniq ko'rinishi: \\(E_s = 2\\), \\(E_d = 0.5\\) bo'lsin.", 'The book states this rule in words (Figure 9). Precisely: let \\(E_s = 2\\), \\(E_d = 0.5\\).'),
      steps: [
        tr("Nisbat \\(= 2 / 0.5 = 4\\): xaridorlar sotuvchilardan 4 marta ko'p yuk ko'taradi.", 'The ratio \\(= 2 / 0.5 = 4\\): buyers bear 4 times as much as sellers.'),
        tr("Demak xaridorlar \\(4/5 = 80\\%\\), sotuvchilar \\(20\\%\\) — talab noegiluvchan, yuk xaridorlarda.", 'So buyers bear \\(4/5 = 80\\%\\) and sellers \\(20\\%\\) — demand is inelastic, so the burden is on buyers.'),
      ],
    },
    note: tr("Bu kitobdagi qoidaning aniq (kichik soliqlar uchun) formasi; imtihonda odatda faqat so'z bilan: *“the burden falls more heavily on the side of the market that is less elastic”*.", "This is the exact form of the book's rule (for small taxes); exams usually state it only in words: *“the burden falls more heavily on the side of the market that is less elastic”*."),
  },
  {
    id: "tax-revenue",
    chapter: 6,
    nameEn: "Tax revenue",
    nameUz: "Soliq tushumi",
    tex: "\\text{Revenue} = T \\times Q_{\\text{tax}}",
    symbols: [{ tex: "Q_{\\text{tax}}", meaning: tr("soliq bilan sotilgan miqdor (soliqsiz miqdordan kam!)", 'the quantity sold with the tax (less than without it!)') }],
    example: {
      setup: "Problem 10(d): \\(T = 30\\), \\(Q = 180\\).",
      steps: [tr("Tushum \\(= 30 \\times 180 = 5{,}400\\).", 'Revenue \\(= 30 \\times 180 = 5{,}400\\).'), tr("Diqqat: \\(30 \\times 200\\) emas — soliq bozorni kichraytiradi.", 'Careful: not \\(30 \\times 200\\) — the tax shrinks the market.')],
    },
  },
];
