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
- **`dialog.messageDefaultBook` ֆունկցիա է** (ոչ string) — normal է, բայց երբեք մի փորձիր այն դնել useState-ի մեջ ուղիղ (ֆունկցիաները serialize չեն լինում SSR payload-ում)։ Ահա թե ինչու `useCurrentCard()`-ը միայն slug-ն է պահում state-ում և ամբողջ card-ը վերականգնում է registry-ից։
- **QR customization panel-ը (`QrCodeSection`) միայն dev/local-ում է երևում** (`import.meta.dev` gate `pages/[slug].vue`-ում)։ Production-ում ամբողջովին բացակայում է build-ից։ Դա design-ով է, ոչ bug։
- **QR-ը deterministic է** — նույն slug + նույն accentColor/accentColorSecondary = միշտ absolutely նույն QR պատկեր։ Slug-ը երբեք չփոխել, եթե արդեն տպված QR կա։
- **`gallery.videos[].poster` պարտադիր պետք է լինի իրական պատկեր (jpg/png), ոչ թե video ֆայլ** — բրաուզերը չի կարող `<img>`-ում .mov/.mp4 ցույց տալ (broken-image icon)։ Իսկ `.mp4`-ը պետք է իրապես H.264+AAC mp4 container լինի, ոչ թե հեռախոսից եկած `.MOV` ուղղակի rename-ված `.mp4`-ի (հատկապես HEVC codec-ով նկարահանված .MOV-երը չեն աշխատում Chrome/Firefox-ում)։ Poster generate անելու և codec ստուգելու համար՝ `ffprobe -show_entries stream=codec_name <file>`, իսկ վերափոխման համար՝ `ffmpeg -i in.MOV -c:v libx264 -crf 23 -c:a aac -movflags +faststart out.mp4` և poster-ի համար `ffmpeg -i out.mp4 -ss 00:00:00.5 -vframes 1 out-poster.jpg`։

## Reference օրինակ

`shared/cards/full-house-cleaning.ts` — ամբողջական, աշխատող օրինակ, կարելի է ուղղակի copy-paste անել և edit անել նոր client-ի համար։
