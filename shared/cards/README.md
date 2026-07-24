# Նոր client card ավելացնելու ուղեցույց

Այս ֆայլը այն reference-ն է, որով պետք է առաջնորդվել ամեն անգամ, երբ ավելացվում է նոր ընկերության թվային քարտ։ Նպատակը՝ ամեն card-ի ամբողջ info-ն (տեքստեր, կոնտակտներ, brand-գույներ, gallery, logo) մեկ compact ֆայլում պահել, որպեսզի site-ի մնացած մասը (components, route-ներ, QR, vCard) ոչինչ չփոխվի նոր ընկերություն ավելացնելիս։

## Architecture-ի ամփոփում

- `shared/cards/types.ts` — `CardDefinition` type-ը (schema-ն, տես ներքևում)։
- `shared/cards/<slug>.ts` — մեկ ֆայլ = մեկ ընկերություն։
- `shared/cards/index.ts` — registry (`cards` map + `getCard(slug)` + `listCardSlugs()`)։
- `app/pages/[slug].vue` — մեկ dynamic route, սպասարկում է ԲՈԼՈՐ ընկերություններին։ Ոչինչ պետք չէ խմբագրել այստեղ նոր card ավելացնելիս։
- `server/routes/vcard/[slug].ts` — vCard (Save Contact) endpoint, նույնպես dynamic, ամեն card-ի համար ինքնաբերաբար։
- `app/components/DigiCardQrCode.client.vue` / `QrCodeSection.vue` — QR-ը ինքնաբերաբար կվերցնի card-ի slug-ը և brand-գույները։

## Քայլերը նոր card ավելացնելու համար

1. **Info հավաքել** — տես ներքևի checklist-ը (կամ ուղարկիր `NEW_CARD_INTAKE_TEMPLATE.md`-ն client-ին լրացնելու)։
2. **Ստեղծել `shared/cards/<slug>.ts`** — copy արա `full-house-cleaning.ts`-ից որպես reference և փոխարինիր բոլոր դաշտերը։ `<slug>` = URL-ի մասը (օր. `acme-dental` → `/acme-dental`)։
3. **Գրանցել `shared/cards/index.ts`-ում**.
   ```ts
   import { acmeDentalCard } from './acme-dental'

   export const cards: Record<string, CardDefinition> = {
     [fullHouseCleaningCard.slug]: fullHouseCleaningCard,
     [acmeDentalCard.slug]: acmeDentalCard
   }
   ```
4. **Ավելացնել assets** — logo + gallery նկարներ/տեսանյութեր `public/cards/<slug>/...`-ում (օր. `public/cards/<slug>/logo.jpg`, `public/cards/<slug>/gallery/photo-1.jpg`)։ Ամեն ընկերության assets-ը իր folder-ում է, որպեսզի ոչ մի ֆայլ իրար հետ չխառնվի։
5. **Build ստուգել** (isolated build) — համոզվել, որ TypeScript error չկա և site-ը compile է լինում։
6. **Push անել** սեփական մեքենայից (`git add -A && git commit && git push`), որ Vercel-ը deploy անի։

## `CardDefinition` schema-ն (դաշտ առ դաշտ)

```ts
{
  slug: string              // URL-ի հատվածը, օր. 'acme-dental' → /acme-dental

  meta: {
    title: string           // <title> և og:title
    description: string     // meta description և og:description
    themeColor: string      // հեռախոսի browser bar գույնը (hex)
    ogTitle?: string        // եթե title-ից տարբեր է
    ogDescription?: string  // եթե description-ից տարբեր է
    ogImage?: string        // WhatsApp/Instagram/iMessage share preview նկարը (բացարձակ /public path).
                            // Չնշելու դեպքում ավտոմատ վերցվում է brand.logoPath-ը, այնպես որ
                            // ամեն նոր քարտ, նույնիսկ առանց հատուկ social նկարի, ունենում է
                            // ճիշտ preview նկար + title + description երբ իր հղումը կիսվում է։
  }

  brand: {
    orgName: string         // ընկերության անունը (JSON-LD, vCard, alt-տեքստեր)
    logoPath: string        // '/cards/<slug>/logo.jpg'
    accentColor: string     // հիմնական brand-գույն (hex) — QR-ի հիմնական գույնը
    accentColorSecondary: string // երկրորդային գույն — QR gradient-ի համար
  }

  // Միայն 'cleaning-service' template-ի համար։ Երկու hex գույն, որոնցից ամբողջ
  // էջի պալիտրան (ֆոն, տեքստ, hairline-ներ, shadow-ներ, accent) ավտոմատ
  // ածանցվում է (տես shared/cards/theme.ts) — ոչ մի component-ի ձեռքով
  // touch անել պետք չէ, գույները cascade են լինում CSS custom property-ներով։
  // Չնշելու դեպքում card-ը ստանում է template-ի original charcoal/mint տեսքը։
  theme?: {
    dark: string   // հիմնական մուգ գույն, օր. '#4A5254'
    accent: string // վառ accent գույն, օր. '#66DBE3'
  }

  contact: {
    phoneIntl: string       // '+374XXXXXXXX' — tel:/wa.me/vCard-ի համար
    phoneDisplay: string    // 'XXX-XXX-XXX' — երևացող ձևաչափ
    email: string
    whatsapp: boolean       // true՝ եթե WhatsApp quick-action ցուցադրել
    instagramUrl?: string   // թող դատարկ, եթե Instagram չկա
    address?: string        // թող դատարկ, եթե հասցե ցուցադրել պետք չէ
    openingHoursSchema?: string // schema.org ձևաչափ, օր. 'Mo-Su 09:00-18:00'
  }

  gallery: {
    photos: [{ src: string, wide?: boolean }]   // wide=true՝ առաջին/գլխավոր նկարի համար
    videos: [{ poster: string, mp4: string }]
  }

  content: {
    hy: LocaleContent,  // հայերեն ամբողջ տեքստը
    en: LocaleContent,  // անգլերեն
    ru: LocaleContent   // ռուսերեն
  }
}
```

`LocaleContent`-ի ամբողջական structure-ը (hero/giftCard/services/contact/about/gallery/footer/dock/dialog) տես `shared/cards/types.ts`-ում. ամեն դաշտ արդեն comment-ավորված է։ `services.items`-ում `price` optional է. եթե client-ը գին չի տալիս, պարզապես բաց թող այդ դաշտը։

## Կարևոր նրբություններ (gotchas)

- **vCard route-ը `/vcard/<slug>` է, ոչ թե `/<slug>.vcf`։** Փորձարկված է, որ dynamic param + dot-suffix նույն path segment-ում corrupt է անում Nitro-ի router-ը (ամբողջ site-ը 404/500 էր տալիս)։ Ֆայլի անունը (`Content-Disposition`) դեռ `<slug>.vcf` է, այնպես որ ներբեռնված ֆայլն ունի ճիշտ extension։
- **`dialog.promptService` ֆունկցիա է** (ոչ string) — normal է, բայց երբեք մի փորձիր այն դնել useState-ի մեջ ուղիղ (ֆունկցիաները serialize չեն լինում SSR payload-ում)։ Ահա թե ինչու `useCurrentCard()`-ը միայն slug-ն է պահում state-ում և ամբողջ card-ը վերականգնում է registry-ից։
- **`ContactDialog` ձևով ոչինչ չի ուղարկվում server-ին** — ամբողջ ֆորմա/submit տրամաբանությունը հեռացված է. dialog-ը պարզապես ցույց է տալիս մի կարճ տեքստ + WhatsApp (`wa.me`, `useCardLinks().waLink`) և Call (`tel:`, `telLink`) հղումներ, ուղղակի client-side, ոչ մի API/backend կախվածություն։ WhatsApp button-ը ցուցադրվում է միայն `contact.whatsapp === true`-ի դեպքում։
- **QR customization panel-ը (`QrCodeSection`) միայն dev/local-ում է երևում** (`import.meta.dev` gate `pages/[slug].vue`-ում)։ Production-ում ամբողջովին բացակայում է build-ից։ Դա design-ով է, ոչ bug։
- **QR-ը deterministic է** — նույն slug + նույն accentColor/accentColorSecondary = միշտ absolutely նույն QR պատկեր։ Slug-ը երբեք չփոխել, եթե արդեն տպված QR կա։
- **`<Teleport to="body">`-ով render եղած UI-ն (ContactDialog, gallery lightbox-երը) չի ժառանգում page-root div-ի inline `:style` CSS var-երը** — Teleport-ը DOM-ը իրապես տեղափոխում է `<body>`-ի տակ, page-root div-ի դուրս, այնպես որ `var(--card-ink, ...)`-ի նման token-երը այնտեղ fallback-ի վրա են ընկնում, եթե card-ի theme-ը սահմանված է միայն page-root-ի վրա։ Լուծումը՝ `pages/[slug].vue`-ում theme var-երը *նաև* գրվում են `<body>`-ի վրա (`useHead({ bodyAttrs: { style: ... } })`), քանի որ teleported բովանդակությունը դեռ `<body>`-ի ժառանգորդ է լինում, նույնիսկ դուրս գալով page-root div-ից։ Ցանկացած նոր teleported overlay ավելացնելիս սա հիշել։
- **Theme-ով driven գույն token-երը (ink/bone/mint-light/moss/stone/hero-from/hero-to և այլն) ՊԵՏՔ Է լինեն `rgb(var(--card-x-rgb, R G B) / <alpha-value>)` ֆորմատով, ոչ թե պարզ `var(--card-x, #hex)`։** Tailwind-ի `/NN` opacity modifier-ը (օր. `bg-ink/60`, `text-bone/80`) միայն այն ժամանակ է generate անում իրական CSS, երբ գույնը resolve է լինում 3 մերկ RGB թվերի, որոնց մեջ Tailwind-ը կարող է տեղադրել իր `<alpha-value>` placeholder-ը. hex string-ը կամ արդեն-rgba() var-ը լռելյայն ոչ մի CSS չի generate անում `/NN` classe-ի համար (class-ը HTML-ում կա, բայց ոչ մի ընտրիչ compiled CSS-ում)։ Սա մի ամբողջ session տեղի ունեցավ բոլոր cleaning-service component-ներում (Hero, Footer, StickyActionBar, ContactDialog, GiftCardSection, Gallery), մինչև ուղղվեց՝ `shared/cards/theme.ts`-ը հիմա emit է անում `--card-x-rgb` (space-separated, ոչ `#`, ոչ comma) vars, և `tailwind.config.ts`-ը point է անում `rgb(var(--card-x-rgb, R G B) / <alpha-value>)`-ին։ Նոր color role ավելացնելիս, եթե այն երբևէ պետք է `/NN` opacity-ով օգտագործվի, պարտադիր այս pattern-ով գրիր, ոչ թե պարզ hex var-ով (բացառություն՝ արդեն fixed-alpha token-երը՝ `mint`, `hairline`, `hairline-dark`, որոնց alpha-ն արդեն frozen է հենց արժեքի մեջ և `/NN` երբեք չի կիրառվում դրանց վրա)։
- **`gallery.videos[].poster` պարտադիր պետք է լինի իրական պատկեր (jpg/png), ոչ թե video ֆայլ** — բրաուզերը չի կարող `<img>`-ում .mov/.mp4 ցույց տալ (broken-image icon)։ Իսկ `.mp4`-ը պետք է իրապես H.264+AAC mp4 container լինի, ոչ թե հեռախոսից եկած `.MOV` ուղղակի rename-ված `.mp4`-ի (հատկապես HEVC codec-ով նկարահանված .MOV-երը չեն աշխատում Chrome/Firefox-ում)։ Poster generate անելու և codec ստուգելու համար՝ `ffprobe -show_entries stream=codec_name <file>`, իսկ վերափոխման համար՝ `ffmpeg -i in.MOV -c:v libx264 -crf 23 -c:a aac -movflags +faststart out.mp4` և poster-ի համար `ffmpeg -i out.mp4 -ss 00:00:00.5 -vframes 1 out-poster.jpg`։

## Template-ները

`CardDefinition.template` որոշում է, թե component-ների որ ընտանիքն է render անում `pages/[slug].vue`-ն (այլապես default է `'cleaning-service'`)．

- **`'cleaning-service'`** (default) — boarding-pass ոճով template, driven է `content`-ով (`LocaleContent`)։ Reference՝ `full-house-cleaning.ts`։
- **`'luxury-beauty'`** — editorial, սև/ոսկեգույն template անհատ beauty-մասնագետների համար, driven է `luxuryContent`-ով (`LuxuryLocaleContent`)։ Reference՝ `hair-stylist.ts`։
- **`'portfolio'`** — մուգ, ոսկեգույն-accent template անհատ մասնագետի/freelancer-ի սեփական նախագծերը ցուցադրելու համար, driven է `portfolioContent`-ով (`PortfolioLocaleContent`)։ Reference՝ `sayad-harutyunyan.ts`։ Section-ները՝ Hero → Contact → Projects (ամեն նախագիծ `id` ունի, footer-ից `#project-<id>` deep-link է անում; `href` չունեցող նախագիծը՝ օր. պատվերով աշխատանք, CTA-ն ինքնաբերաբար WhatsApp inquiry է բացում project-ի անունով) → Capabilities (10 item grid) → Why (4 card) → Final CTA → Footer։ Գույները (`port-bg`/`port-card`/`port-border`/`port-title`/`port-text`/`port-gold`/`port-gold-light`) fixed hex values են `tailwind.config.ts`-ում, ոչ թե per-card ածանցվող (այս template-ը personal-brand է, ոչ multi-client palette)։

## Reference օրինակ

`shared/cards/full-house-cleaning.ts` — ամբողջական, աշխատող օրինակ, կարելի է ուղղակի copy-paste անել և edit անել նոր client-ի համար։
