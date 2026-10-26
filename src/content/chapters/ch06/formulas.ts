import type { Formula } from '../../types';

export const formulas: Formula[] = [
  {
    id: "ceiling",
    chapter: 6,
    nameEn: "Binding price ceiling and shortage",
    nameUz: "Ta'sirli narx shifti va taqchillik",
    tex: "P_{\\max} < P^* \\;\\Rightarrow\\; \\text{Shortage} = Q^D(P_{\\max}) - Q^S(P_{\\max}),\\quad Q_{\\text{sold}} = Q^S(P_{\\max})",
    symbols: [
      { tex: "P_{\\max}", meaning: "narx shifti (qonuniy eng yuqori narx)" },
      { tex: "P^*", meaning: "muvozanat narxi" },
      { tex: "Q^D(P),\\ Q^S(P)", meaning: "shu narxdagi talab va taklif miqdori" },
      { tex: "Q_{\\text{sold}}", meaning: "haqiqatda sotilgan miqdor — bozorning “qisqa tomoni”" },
    ],
    example: {
      setup: "\\(Q^D = 300 - P\\), \\(Q^S = 2P\\) (Problem 10). Muvozanat \\(P^* = 100\\). Shift \\(P_{\\max} = 90\\).",
      steps: [
        "\\(90 < 100\\) — shift **binding**.",
        "\\(Q^D(90) = 300 - 90 = 210\\), \\(Q^S(90) = 2 \\cdot 90 = 180\\).",
        "Taqchillik \\(= 210 - 180 = 30\\); sotiladigan miqdor \\(= 180\\).",
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
      { tex: "P_{\\min}", meaning: "narx tubi (qonuniy eng past narx)" },
      { tex: "Q_{\\text{sold}}", meaning: "sotilgan miqdor: endi xaridorlar qancha olsa, shuncha" },
    ],
    example: {
      setup: "Muzqaymoq bozori (Figure 4): muvozanat $3, 100 dona. Narx tubi $4.",
      steps: ["\\(4 > 3\\) — tub **binding**.", "\\(Q^S(4) = 120\\), \\(Q^D(4) = 80\\).", "Ortiqcha \\(= 120 - 80 = 40\\) dona; 80 dona sotiladi."],
    },
    note: "Agar \\(P_{\\min} \\le P^*\\) bo'lsa, tub ta'sirsiz: \\(P = P^*\\). Problem 10(c) da $90 lik tub shunday — muvozanat $100.",
  },
  {
    id: "wedge",
    chapter: 6,
    nameEn: "Tax wedge",
    nameUz: "Soliq ponasi",
    tex: "P_B - P_S = T",
    symbols: [
      { tex: "P_B", meaning: "xaridor to'laydigan narx (soliq bilan birga)" },
      { tex: "P_S", meaning: "sotuvchi soliqdan keyin oladigan narx" },
      { tex: "T", meaning: "bir birlikka soliq" },
    ],
    example: {
      setup: "Muzqaymoqqa $0.50 soliq (Figures 6–7).",
      steps: ["Xaridor $3.30 to'laydi, sotuvchi $2.80 oladi.", "\\(3.30 - 2.80 = 0.50 = T\\) ✓"],
    },
  },
  {
    id: "tax-on-sellers",
    chapter: 6,
    nameEn: "Tax on sellers shifts supply up by T",
    nameUz: "Sotuvchiga soliq taklifni T ga yuqoriga siljitadi",
    tex: "Q^S_{\\text{new}}(P) = Q^S(P - T)",
    symbols: [
      { tex: "Q^S_{\\text{new}}(P)", meaning: "bozor narxi \\(P\\) bo'lganda soliq bilan taklif miqdori" },
      { tex: "P - T", meaning: "sotuvchining qo'lida qoladigan narx" },
    ],
    example: {
      setup: "Problem 10(d): \\(Q^S = 2P\\), \\(Q^D = 300 - P\\), sotuvchilarga \\(T = 30\\).",
      steps: [
        "Yangi taklif: \\(Q^S = 2(P - 30)\\).",
        "Tenglashtiramiz: \\(300 - P = 2P - 60 \\Rightarrow 3P = 360 \\Rightarrow P = 120\\).",
        "\\(Q = 300 - 120 = 180\\). Xaridor \\(P_B = 120\\), sotuvchi \\(P_S = 120 - 30 = 90\\).",
      ],
    },
  },
  {
    id: "tax-on-buyers",
    chapter: 6,
    nameEn: "Tax on buyers shifts demand down by T",
    nameUz: "Xaridorga soliq talabni T ga pastga siljitadi",
    tex: "Q^D_{\\text{new}}(P) = Q^D(P + T)",
    symbols: [{ tex: "P + T", meaning: "xaridor uchun haqiqiy narx: sotuvchiga to'lagani + soliq" }],
    example: {
      setup: "Xuddi shu bozor, lekin \\(T = 30\\) ni xaridorlar to'laydi.",
      steps: [
        "Yangi talab: \\(Q^D = 300 - (P + 30) = 270 - P\\).",
        "\\(270 - P = 2P \\Rightarrow P = 90\\) — bu sotuvchi oladigan narx \\(P_S\\).",
        "\\(P_B = 90 + 30 = 120\\), \\(Q = 180\\) — sotuvchiga soliq bilan **aynan bir xil**.",
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
      { tex: "P^*", meaning: "soliqsiz muvozanat narxi" },
      { tex: "P_B - P^*", meaning: "xaridorlar uchun narx qanchaga oshdi" },
      { tex: "P^* - P_S", meaning: "sotuvchilar qo'lida qoladigan narx qanchaga kamaydi" },
    ],
    example: {
      setup: "Muzqaymoq: \\(P^* = 3.00\\), \\(P_B = 3.30\\), \\(P_S = 2.80\\), \\(T = 0.50\\).",
      steps: ["Xaridorlar: \\(0.30 / 0.50 = 60\\%\\).", "Sotuvchilar: \\(0.20 / 0.50 = 40\\%\\). Yig'indi 100% ✓"],
    },
  },
  {
    id: "burden-elasticity",
    chapter: 6,
    nameEn: "Burden falls on the less elastic side",
    nameUz: "Yuk kamroq egiluvchan tomonga tushadi",
    tex: "\\frac{\\text{Buyers' share}}{\\text{Sellers' share}} = \\frac{E_s}{E_d}",
    symbols: [
      { tex: "E_s", meaning: "taklifning narx egiluvchanligi (muvozanat nuqtasida)" },
      { tex: "E_d", meaning: "talabning narx egiluvchanligi (absolyut qiymat)" },
    ],
    example: {
      setup: "Kitob bu qoidani so'z bilan aytadi (Figure 9). Aniq ko'rinishi: \\(E_s = 2\\), \\(E_d = 0.5\\) bo'lsin.",
      steps: [
        "Nisbat \\(= 2 / 0.5 = 4\\): xaridorlar sotuvchilardan 4 marta ko'p yuk ko'taradi.",
        "Demak xaridorlar \\(4/5 = 80\\%\\), sotuvchilar \\(20\\%\\) — talab noegiluvchan, yuk xaridorlarda.",
      ],
    },
    note: "Bu kitobdagi qoidaning aniq (kichik soliqlar uchun) formasi; imtihonda odatda faqat so'z bilan: *“the burden falls more heavily on the side of the market that is less elastic”*.",
  },
  {
    id: "tax-revenue",
    chapter: 6,
    nameEn: "Tax revenue",
    nameUz: "Soliq tushumi",
    tex: "\\text{Revenue} = T \\times Q_{\\text{tax}}",
    symbols: [{ tex: "Q_{\\text{tax}}", meaning: "soliq bilan sotilgan miqdor (soliqsiz miqdordan kam!)" }],
    example: {
      setup: "Problem 10(d): \\(T = 30\\), \\(Q = 180\\).",
      steps: ["Tushum \\(= 30 \\times 180 = 5{,}400\\).", "Diqqat: \\(30 \\times 200\\) emas — soliq bozorni kichraytiradi."],
    },
  },
];
