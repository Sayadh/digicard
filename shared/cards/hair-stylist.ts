import type { CardDefinition } from './types'

/**
 * NOTE for whoever edits this next (see also shared/cards/README.md):
 * - Working hours below are a PLACEHOLDER — the source (Facebook page) only showed
 *   "Closing Soon", not actual hours. Confirm real hours and update `hoursValue`
 *   (hy/en/ru) + `openingHoursSchema` together.
 * - `instagramUrl` / `telegramUrl` / `bookingUrl` are intentionally omitted — the
 *   only confirmed social handle was TikTok. Add Instagram once the real handle
 *   is confirmed (a partial URL seen in a screenshot wasn't reliable enough to guess).
 * - All portrait/service/gallery images are elegant placeholders (see
 *   public/cards/hair-stylist/), not real photography. Swap them for real files
 *   at the same paths once available — nothing else needs to change.
 * - `testimonials.items` is empty on purpose (no real reviews were supplied yet);
 *   the section hides itself automatically until real quotes are added here.
 */
export const hairStylistCard: CardDefinition = {
  slug: 'hair-stylist',
  template: 'luxury-beauty',

  meta: {
    title: 'Tatev Mikaelyan — Hair Stylist & Colorist | Թվային քարտ',
    description: 'Տաթև Միքայելյան — միջազգային կարգի հեյրսթայլիստ և գունագործ, Երևան։ Balayage, AirTouch, հարսանեկան սանրվածքներ և բարձրակարգ մազերի խնամք։',
    themeColor: '#151515',
    ogTitle: 'Tatev Mikaelyan — Hair Stylist & Colorist',
    ogDescription: 'Միջազգային կարգի հեյրսթայլիստ և գունագործ՝ Երևանում։ Balayage · AirTouch · Bridal Hair · Keratin.'
  },

  brand: {
    orgName: "Tatev's Studio",
    logoPath: '/cards/hair-stylist/logo.png',
    accentColor: '#C9A76A',
    accentColorSecondary: '#B88A58',
    heroVideoPath: '/cards/hair-stylist/hero-bg.mp4'
  },

  contact: {
    phoneIntl: '+37499550103',
    phoneDisplay: '099-550-103',
    email: 'tatev.mikaelyan_mysocnet@outlook.com',
    whatsapp: true,
    tiktokUrl: 'https://www.tiktok.com/@tatevmikaelyanhairstudio',
    address: 'Պուշկինի փող. 19, Երևան',
    // Placeholder — confirm real hours, see note above.
    openingHoursSchema: 'Mo-Sa 10:00-19:00'
  },

  gallery: {
    photos: [
      { src: '/cards/hair-stylist/gallery/gallery-1.jpg', wide: true },
      { src: '/cards/hair-stylist/gallery/gallery-2.jpg' },
      { src: '/cards/hair-stylist/gallery/gallery-3.jpg' },
      { src: '/cards/hair-stylist/gallery/gallery-4.jpg' },
      { src: '/cards/hair-stylist/gallery/gallery-5.jpg' },
      { src: '/cards/hair-stylist/gallery/gallery-6.jpg' },
      { src: '/cards/hair-stylist/gallery/gallery-7.jpg' },
      { src: '/cards/hair-stylist/gallery/gallery-8.jpg' }
    ],
    videos: []
  },

  luxuryContent: {
    hy: {
      hero: {
        name: 'Տաթև Միքայելյան',
        role: 'Hair Stylist & Colorist',
        studioLabel: "Tatev's Studio — Luxury Hair Studio",
        tags: ['Balayage', 'AirTouch', 'Blonde Specialist', 'Bridal Hair', 'Keratin', 'Hair Extensions'],
        ctaContacts: 'Կոնտակտներ'
      },
      about: {
        eyebrow: 'Իմ մասին',
        quote: 'Մազերը պատմություն են պատմում. թող քոնը պատմի գեղեցկության մասին։',
        paragraph: 'Միջազգային կարգի հեյրսթայլիստ և գունագործ եմ՝ Երևանում, մասնագիտացած balayage, AirTouch և առողջ բծավոր գույների փոխակերպումների մեջ։ Յուրաքանչյուր հանդիպում սկսվում է լսելուց և ավարտվում արդյունքով, որը զգացվում է որքան նոր, նույնքան բնական։'
      },
      services: {
        eyebrow: 'Ինչ եմ անում',
        title: 'Ծառայություններ',
        items: [
          { title: 'AirTouch', description: 'Օդային տեխնիկայով բնական, փետրանման անցումներ՝ առանց կտրուկ գծերի։' },
          { title: 'Balayage', description: 'Ձեռքով արված, լուսավոր անցումներ, որոնք հասունանում են գեղեցիկ՝ ամիսներով։' },
          { title: 'Blonde Transformation', description: 'Խորը մուգից մինչև առողջ, փայլուն շիկահեր՝ մազի կառուցվածքը պահպանելով։' },
          { title: 'Hair Coloring', description: 'Ճշգրիտ, մասնագիտական գունանկարում՝ հարմարեցված Ձեր տոնայնությանը։' },
          { title: 'Bridal Hair', description: 'Հարսանեկան սանրվածքներ, որոնք տևում են ամբողջ երեկույթը՝ անթերի տեսքով։' },
          { title: 'Keratin', description: 'Կերատինային հարթեցում՝ փայլի և առողջության երկարաժամկետ խնամք։' },
          { title: 'Extensions', description: 'Բնական տեսք ունեցող երկարացումներ՝ ծավալի և երկարության համար։' }
        ]
      },
      gallery: {
        eyebrow: 'Պորտֆոլիո',
        title: 'Իմ աշխատանքները'
      },
      testimonials: {
        eyebrow: 'Կարծիքներ',
        title: 'Հաճախորդների խոսքով',
        items: []
      },
      certificates: {
        eyebrow: 'Որակավորում',
        title: 'Հավաստագրեր',
        items: [
          { title: 'International Class Hairstylist', issuer: 'OMC International' }
        ]
      },
      contact: {
        eyebrow: 'Կապ',
        title: 'Ամրագրել այց',
        call: 'Զանգել',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        instagram: 'Instagram',
        maps: 'Քարտեզ',
        booking: 'Ամրագրում',
        phoneLabel: 'Հեռախոս',
        emailLabel: 'Էլ. փոստ',
        hoursLabel: 'Աշխատանքային ժամեր',
        hoursValue: 'Երկ–Շաբ, 10:00–19:00'
      },
      nav: {
        book: 'Ամրագրել',
        instagram: 'Instagram',
        whatsapp: 'WhatsApp',
        call: 'Զանգել'
      },
      footer: {
        privacy: 'Գաղտնիություն',
        terms: 'Պայմաններ'
      }
    },
    en: {
      hero: {
        name: 'Tatev Mikaelyan',
        role: 'Hair Stylist & Colorist',
        studioLabel: "Tatev's Studio — Luxury Hair Studio",
        tags: ['Balayage', 'AirTouch', 'Blonde Specialist', 'Bridal Hair', 'Keratin', 'Hair Extensions'],
        ctaContacts: 'Contacts'
      },
      about: {
        eyebrow: 'About',
        quote: 'Hair tells a story — let yours tell one of beauty.',
        paragraph: "I'm an international-class hairstylist and colorist based in Yerevan, specializing in balayage, AirTouch, and healthy blonde transformations. Every appointment starts with listening and ends with a result that feels as natural as it does new."
      },
      services: {
        eyebrow: 'What I Do',
        title: 'Services',
        items: [
          { title: 'AirTouch', description: 'Airflow technique for soft, feathered transitions with no harsh lines.' },
          { title: 'Balayage', description: 'Hand-painted highlights that grow out beautifully for months.' },
          { title: 'Blonde Transformation', description: 'From deep dark to healthy, glossy blonde — while protecting hair structure.' },
          { title: 'Hair Coloring', description: 'Precise, professional coloring tailored to your undertone.' },
          { title: 'Bridal Hair', description: 'Wedding-day hairstyles that hold flawlessly through the whole celebration.' },
          { title: 'Keratin', description: 'Keratin smoothing for long-term shine and healthier hair.' },
          { title: 'Extensions', description: 'Natural-looking extensions for length and volume.' }
        ]
      },
      gallery: {
        eyebrow: 'Portfolio',
        title: 'My Work'
      },
      testimonials: {
        eyebrow: 'Reviews',
        title: 'In Clients’ Words',
        items: []
      },
      certificates: {
        eyebrow: 'Credentials',
        title: 'Certifications',
        items: [
          { title: 'International Class Hairstylist', issuer: 'OMC International' }
        ]
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Book an Appointment',
        call: 'Call',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        instagram: 'Instagram',
        maps: 'Map',
        booking: 'Booking',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        hoursLabel: 'Hours',
        hoursValue: 'Mon–Sat, 10:00–19:00'
      },
      nav: {
        book: 'Book',
        instagram: 'Instagram',
        whatsapp: 'WhatsApp',
        call: 'Call'
      },
      footer: {
        privacy: 'Privacy',
        terms: 'Terms'
      }
    },
    ru: {
      hero: {
        name: 'Татев Микаелян',
        role: 'Hair Stylist & Colorist',
        studioLabel: "Tatev's Studio — Luxury Hair Studio",
        tags: ['Balayage', 'AirTouch', 'Blonde Specialist', 'Bridal Hair', 'Keratin', 'Hair Extensions'],
        ctaContacts: 'Контакты'
      },
      about: {
        eyebrow: 'Обо мне',
        quote: 'Волосы рассказывают историю — пусть ваша будет о красоте.',
        paragraph: 'Я хеirстилист и колорист международного класса в Ереване, специализируюсь на balayage, AirTouch и здоровых блондинистых трансформациях. Каждая встреча начинается с внимательного слушания и заканчивается результатом, который выглядит естественно и свежо.'
      },
      services: {
        eyebrow: 'Чем я занимаюсь',
        title: 'Услуги',
        items: [
          { title: 'AirTouch', description: 'Техника воздушного окрашивания для мягких, перистых переходов без резких линий.' },
          { title: 'Balayage', description: 'Ручное окрашивание с естественным отрастанием на протяжении месяцев.' },
          { title: 'Blonde Transformation', description: 'От тёмных волос до здорового, сияющего блонда — с заботой о структуре волос.' },
          { title: 'Hair Coloring', description: 'Точное профессиональное окрашивание, подобранное под ваш подтон.' },
          { title: 'Bridal Hair', description: 'Свадебные причёски, безупречно держащиеся весь праздник.' },
          { title: 'Keratin', description: 'Кератиновое выпрямление для долгосрочного блеска и здоровья волос.' },
          { title: 'Extensions', description: 'Натурально выглядящее наращивание для длины и объёма.' }
        ]
      },
      gallery: {
        eyebrow: 'Портфолио',
        title: 'Мои работы'
      },
      testimonials: {
        eyebrow: 'Отзывы',
        title: 'Слова клиентов',
        items: []
      },
      certificates: {
        eyebrow: 'Квалификация',
        title: 'Сертификаты',
        items: [
          { title: 'International Class Hairstylist', issuer: 'OMC International' }
        ]
      },
      contact: {
        eyebrow: 'Контакты',
        title: 'Записаться на приём',
        call: 'Позвонить',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        instagram: 'Instagram',
        maps: 'Карта',
        booking: 'Запись',
        phoneLabel: 'Телефон',
        emailLabel: 'Эл. почта',
        hoursLabel: 'Часы работы',
        hoursValue: 'Пн–Сб, 10:00–19:00'
      },
      nav: {
        book: 'Записаться',
        instagram: 'Instagram',
        whatsapp: 'WhatsApp',
        call: 'Позвонить'
      },
      footer: {
        privacy: 'Конфиденциальность',
        terms: 'Условия'
      }
    }
  }
}
