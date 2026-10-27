import type { ChapterData } from '../../types';
import { formulas } from './formulas';
import { problems, review } from './problems';
import { questions } from './quiz';
import { terms } from './terms';
import { tr } from '../../../lib/lang';

export const ch12: ChapterData = {
  number: 12,
  slug: 'economics-of-healthcare',
  titleEn: 'The Economics of Healthcare',
  titleUz: "Sog'liqni saqlash iqtisodiyoti",
  part: 'Part IV · The Economics of the Public Sector',
  sectionIds: ['s-12-1', 's-12-1a', 's-12-1b', 's-12-1c', 's-12-1d', 's-12-1e', 's-12-2a', 's-12-2b', 's-12-2c', 's-12-2d', 's-12-3'],
  terms,
  formulas,
  questions,
  problems: [...review, ...problems],
  extraCards: [
    { id: 'card:ch12:five', chapter: 12, front: tr("Sog'liq bozori standart modeldan qaysi jihatlarda farq qiladi?", 'How does the health care market differ from the standard model?'), back: tr("Uchinchi tomonlar manfaatdor · bemor sifatni baholay olmaydi · sug'urta to'laydi · narx emas, qoidalar taqsimlaydi · ko'rinmas qo'l ishlamaydi.", "Third parties have a stake · patients can't judge quality · insurance pays · rules, not prices, allocate · the invisible hand doesn't work.") },
    { id: 'card:ch12:mh-as', chapter: 12, front: tr("Moral hazard va adverse selection farqi?", 'The difference between moral hazard and adverse selection?'), back: tr("**Moral hazard** — sug'urtalangandan keyin ortiqcha foydalanish (co-pay bilan cheklanadi).\n\n**Adverse selection** — sug'urtani ko'proq kasallar oladi (mandate bilan kurashiladi).", `**Moral hazard** — overuse after being insured (limited by co-pays).

**Adverse selection** — the sick are more likely to buy insurance (countered by a mandate).`) },
    { id: 'card:ch12:forces', chapter: 12, front: tr("Sog'liq xarajati ulushi o'sishining 4 sababi?", '4 reasons the health care spending share has grown?'), back: tr("Baumol's cost disease · tibbiy texnologiya · aholining qarishi · daromad o'sishi (elastiklik ≈ 1.3).", "Baumol's cost disease · medical technology · an aging population · rising incomes (elasticity ≈ 1.3).") },
    { id: 'card:ch12:numbers', chapter: 12, front: tr("AQSh sog'liq raqamlari?", 'U.S. health numbers?'), back: tr("Umr: 47.3 (1900) → 78.8 (2019). Xarajat: 5% (1960) → 18% YaIM (2019). Cho'ntakdan: 55% → 13%. Boshqa davlatlar: 9–12%.", 'Life expectancy: 47.3 (1900) → 78.8 (2019). Spending: 5% (1960) → 18% of GDP (2019). Out-of-pocket: 55% → 13%. Other countries: 9–12%.') },
  ],
};
