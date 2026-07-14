export type Locale = 'hy' | 'en' | 'ru'

export interface ServiceItem {
  title: string
  description: string
  price: string
  popular?: boolean
}

export interface LocaleContent {
  hero: {
    title1: string
    title2: string
    tagline: string
    seeContacts: string
    share: string
    shareCopied: string
    scroll: string
  }
  giftCard: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    cardBrand: string
    cardSub: string
    cardNoLabel: string
    valueLine: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  services: {
    eyebrow: string
    title: string
    bookThis: string
    popularLabel: string
    items: ServiceItem[]
  }
  contact: {
    eyebrow: string
    title: string
    call: string
    whatsapp: string
    directions: string
    phoneLabel: string
    emailLabel: string
    websiteLabel: string
    addressLabel: string
    addressValue: string
    hoursLabel: string
    hoursValue: string
  }
  about: {
    eyebrow: string
    title: string
    quote: string
    paragraph: string
    tags: [string, string, string]
  }
  gallery: {
    eyebrow: string
    title: string
    photoLabel: string
    videoLabel: string
    comingSoon: string
    close: string
  }
  footer: {
    privacy: string
    terms: string
  }
  dock: {
    call: string
    whatsapp: string
    gift: string
  }
  dialog: {
    giftTitle: string
    giftEyebrow: string
    bookTitlePrefix: string
    nameLabel: string
    namePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    messageLabel: string
    messageDefaultGift: string
    messageDefaultBook: (service: string) => string
    submit: string
    successTitle: string
    successBody: string
    close: string
    cancel: string
    required: string
  }
}

export const content: Record<Locale, LocaleContent> = {
  hy: {
    hero: {
      title1: 'Full House',
      title2: 'Cleaning',
      tagline: 'Բուտիկ մաքրման տուն՝ տների համար, որոնք արժանի են հանգիստ ու ուշադիր խնամքի։',
      seeContacts: 'Կոնտակտներ',
      share: 'Կիսվել',
      shareCopied: 'Պատճենվեց',
      scroll: 'Ոլորել'
    },
    giftCard: {
      eyebrow: 'Full House-ի սիրտը',
      titleLine1: 'Նվիրեք հանգիստ',
      titleLine2: 'տան զգացողությունը',
      cardBrand: 'Full House Cleaning',
      cardSub: 'Անդամության քարտ',
      cardNoLabel: 'Քարտի Հ/Հ',
      valueLine: 'Ցանկացած գումար · Թվային կամ ֆիզիկական · Առանց ժամկետի',
      description: 'Ծննդյան օրերի, նոր տան, հոգնած ծնողների կամ ուղղակի մի փոքր ավելի հանգստության կարիք ունեցող ցանկացած մեկի համար։',
      ctaPrimary: 'Ստանալ նվեր-քարտ',
      ctaSecondary: 'կամ հարցրեք անձամբ'
    },
    services: {
      eyebrow: 'Ինչ ենք անում',
      title: 'Ծառայություններ',
      bookThis: 'Պատվիրել',
      popularLabel: 'Ամենապահանջված',
      items: [
        { title: 'Ստանդարտ մաքրում', description: 'Կանոնավոր տնային մաքրում՝ թարմ, հարմարավետ ու հանգիստ կենսավայրի համար։', price: '99', popular: true },
        { title: 'Խորը մաքրում', description: 'Մանրակրկիտ ու համապարփակ մաքրում՝ հատուկ ուշադրություն պահանջող հատվածների համար։', price: '149' },
        { title: 'Տեղափոխման մաքրում', description: 'Մանրակրկիտ մաքրում՝ մինչև տեղափոխվելը կամ դուրս գալը։', price: '199' },
        { title: 'Գրասենյակի մաքրում', description: 'Հուսալի ու պրեմիում մաքրում գրասենյակների ու կորպորատիվ տարածքների համար։', price: '129' },
        { title: 'Airbnb-ի մաքրում', description: 'Արագ, ստուգաթերթով հաստատված մաքրում հյուրերի միջև։', price: '89' }
      ]
    },
    contact: {
      eyebrow: 'Կապվեք մեզ հետ',
      title: 'Ասեք բարև',
      call: 'Զանգել',
      whatsapp: 'WhatsApp',
      directions: 'Երթուղի',
      phoneLabel: 'Հեռախոս',
      emailLabel: 'Էլ. փոստ',
      websiteLabel: 'Կայք',
      addressLabel: 'Հասցե',
      addressValue: '123 Cleaning Ave, City',
      hoursLabel: 'Աշխատանքային ժամեր',
      hoursValue: 'Երկ–Շբթ, 8:00–18:00'
    },
    about: {
      eyebrow: 'Մեր պատմությունը',
      title: 'Մեր մասին',
      quote: 'Մենք հավատում ենք, որ մաքուր տարածքը վերադարձնում է ձեր ժամանակը։',
      paragraph: 'Full House Cleaning-ը փոքր թիմ է, որը կարևորում է մանրամասները․ այնպիսի խնամք, որը տունը վերածում է իրական հանգստի վայրի։',
      tags: ['Հիմն. 2020', 'Մանրամասների վրա կենտրոնացած', 'Վստահելի']
    },
    gallery: {
      eyebrow: 'Տեսանելի արդյունք',
      title: 'Մեր աշխատանքը',
      photoLabel: 'Լուսանկար',
      videoLabel: 'Տեսանյութ',
      comingSoon: 'Տեսանյութը շուտով կհասանելի կլինի',
      close: 'Փակել'
    },
    footer: {
      privacy: 'Գաղտնիություն',
      terms: 'Պայմաններ'
    },
    dock: {
      call: 'Զանգել',
      whatsapp: 'WhatsApp',
      gift: 'Նվեր-քարտ'
    },
    dialog: {
      giftTitle: 'Հայտ նվեր-քարտի համար',
      giftEyebrow: 'Կհաստատենք շուտով',
      bookTitlePrefix: 'Պատվիրել՝',
      nameLabel: 'Անուն',
      namePlaceholder: 'Ձեր անունը',
      phoneLabel: 'Հեռախոս',
      phonePlaceholder: 'Ձեր հեռախոսահամարը',
      messageLabel: 'Հաղորդագրություն',
      messageDefaultGift: 'Ցանկանում եմ նվեր-քարտ ձեռք բերել։',
      messageDefaultBook: (service: string) => `Ցանկանում եմ պատվիրել «${service}»։`,
      submit: 'Ուղարկել հայտը',
      successTitle: 'Շնորհակալություն',
      successBody: 'Ձեր հայտն ընդունված է, մենք շուտով կապ կհաստատենք հեռախոսով կամ WhatsApp-ով։',
      close: 'Փակել',
      cancel: 'Չեղարկել',
      required: 'Խնդրում ենք լրացնել անունը և հեռախոսահամարը։'
    }
  },
  en: {
    hero: {
      title1: 'Full House',
      title2: 'Cleaning',
      tagline: 'A boutique cleaning house — for homes that deserve quiet, considered care.',
      seeContacts: 'See Contacts',
      share: 'Share',
      shareCopied: 'Copied',
      scroll: 'Scroll'
    },
    giftCard: {
      eyebrow: 'The Heart of Full House',
      titleLine1: 'Give the gift of',
      titleLine2: 'a calmer home.',
      cardBrand: 'Full House Cleaning',
      cardSub: 'Membership Card',
      cardNoLabel: 'Card No.',
      valueLine: 'Any amount · Digital or physical · Never expires',
      description: 'For birthdays, new homes, tired parents, or anyone who could use a little more calm.',
      ctaPrimary: 'Get a Gift Card',
      ctaSecondary: 'or ask us in person'
    },
    services: {
      eyebrow: 'What We Do',
      title: 'Services',
      bookThis: 'Book this',
      popularLabel: 'Most requested',
      items: [
        { title: 'Standard Cleaning', description: 'Regular home cleaning for a fresh, comfortable and calm living space.', price: '99', popular: true },
        { title: 'Deep Cleaning', description: 'Detailed, comprehensive cleaning for areas requiring extra care.', price: '149' },
        { title: 'Move-In / Move-Out', description: 'A thorough handover clean before you leave, or before you arrive.', price: '199' },
        { title: 'Office Cleaning', description: 'Reliable, premium cleaning for offices and corporate spaces.', price: '129' },
        { title: 'Airbnb Turnover', description: 'Fast, checklist-verified turnovers between guest stays.', price: '89' }
      ]
    },
    contact: {
      eyebrow: 'Reach Us',
      title: 'Say hello',
      call: 'Call',
      whatsapp: 'WhatsApp',
      directions: 'Directions',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      websiteLabel: 'Website',
      addressLabel: 'Address',
      addressValue: '123 Cleaning Ave, City',
      hoursLabel: 'Hours',
      hoursValue: 'Mon–Sat, 8:00–18:00'
    },
    about: {
      eyebrow: 'Our Story',
      title: 'About us',
      quote: 'We believe a clean space gives you back your time.',
      paragraph: 'Full House Cleaning is a small team of people who care about the details — the kind of care that turns a house into somewhere you can actually rest.',
      tags: ['Est. 2020', 'Detail-focused', 'Trusted']
    },
    gallery: {
      eyebrow: 'Visible Results',
      title: 'Our Work',
      photoLabel: 'Photo',
      videoLabel: 'Video',
      comingSoon: 'Video will be available soon',
      close: 'Close'
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms'
    },
    dock: {
      call: 'Call',
      whatsapp: 'WhatsApp',
      gift: 'Gift Card'
    },
    dialog: {
      giftTitle: 'Gift Card Request',
      giftEyebrow: "We'll confirm shortly",
      bookTitlePrefix: 'Book:',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      phoneLabel: 'Phone',
      phonePlaceholder: 'Your phone number',
      messageLabel: 'Message',
      messageDefaultGift: "I'd like to send a gift card.",
      messageDefaultBook: (service: string) => `I'd like to book ${service}.`,
      submit: 'Send Request',
      successTitle: 'Thank you',
      successBody: "We've received your request and will confirm shortly by phone or WhatsApp.",
      close: 'Close',
      cancel: 'Cancel',
      required: 'Please fill in your name and phone number.'
    }
  },
  ru: {
    hero: {
      title1: 'Full House',
      title2: 'Cleaning',
      tagline: 'Бутик-клининг для домов, которые заслуживают тихой, вдумчивой заботы.',
      seeContacts: 'Контакты',
      share: 'Поделиться',
      shareCopied: 'Скопировано',
      scroll: 'Прокрутить'
    },
    giftCard: {
      eyebrow: 'Сердце Full House',
      titleLine1: 'Подарите',
      titleLine2: 'спокойный дом.',
      cardBrand: 'Full House Cleaning',
      cardSub: 'Карта участника',
      cardNoLabel: 'Номер карты',
      valueLine: 'Любая сумма · Цифровая или физическая · Без срока действия',
      description: 'Для дней рождения, новоселий, уставших родителей — для всех, кому не помешает немного больше спокойствия.',
      ctaPrimary: 'Получить подарочную карту',
      ctaSecondary: 'или спросите лично'
    },
    services: {
      eyebrow: 'Что мы делаем',
      title: 'Услуги',
      bookThis: 'Забронировать',
      popularLabel: 'Самая популярная',
      items: [
        { title: 'Стандартная уборка', description: 'Регулярная уборка дома для свежего, комфортного и спокойного пространства.', price: '99', popular: true },
        { title: 'Глубокая уборка', description: 'Детальная, комплексная уборка для зон, требующих особого внимания.', price: '149' },
        { title: 'Уборка при переезде', description: 'Тщательная уборка перед выездом или перед заездом.', price: '199' },
        { title: 'Уборка офисов', description: 'Надёжная премиальная уборка офисов и корпоративных пространств.', price: '129' },
        { title: 'Уборка Airbnb', description: 'Быстрая уборка между заездами гостей с проверкой по чек-листу.', price: '89' }
      ]
    },
    contact: {
      eyebrow: 'Свяжитесь с нами',
      title: 'Скажите привет',
      call: 'Позвонить',
      whatsapp: 'WhatsApp',
      directions: 'Маршрут',
      phoneLabel: 'Телефон',
      emailLabel: 'Эл. почта',
      websiteLabel: 'Сайт',
      addressLabel: 'Адрес',
      addressValue: '123 Cleaning Ave, City',
      hoursLabel: 'Часы работы',
      hoursValue: 'Пн–Сб, 8:00–18:00'
    },
    about: {
      eyebrow: 'Наша история',
      title: 'О нас',
      quote: 'Мы верим, что чистое пространство возвращает вам время.',
      paragraph: 'Full House Cleaning — небольшая команда людей, для которых важны детали: забота, благодаря которой дом становится местом, где можно по-настоящему отдохнуть.',
      tags: ['Осн. в 2020', 'Внимание к деталям', 'Надёжность']
    },
    gallery: {
      eyebrow: 'Наглядный результат',
      title: 'Наши работы',
      photoLabel: 'Фото',
      videoLabel: 'Видео',
      comingSoon: 'Видео появится скоро',
      close: 'Закрыть'
    },
    footer: {
      privacy: 'Конфиденциальность',
      terms: 'Условия'
    },
    dock: {
      call: 'Позвонить',
      whatsapp: 'WhatsApp',
      gift: 'Подарочная карта'
    },
    dialog: {
      giftTitle: 'Заявка на подарочную карту',
      giftEyebrow: 'Скоро подтвердим',
      bookTitlePrefix: 'Бронирование:',
      nameLabel: 'Имя',
      namePlaceholder: 'Ваше имя',
      phoneLabel: 'Телефон',
      phonePlaceholder: 'Ваш номер телефона',
      messageLabel: 'Сообщение',
      messageDefaultGift: 'Хочу приобрести подарочную карту.',
      messageDefaultBook: (service: string) => `Хочу заказать «${service}».`,
      submit: 'Отправить заявку',
      successTitle: 'Спасибо',
      successBody: 'Мы получили вашу заявку и скоро свяжемся с вами по телефону или WhatsApp.',
      close: 'Закрыть',
      cancel: 'Отмена',
      required: 'Пожалуйста, укажите имя и номер телефона.'
    }
  }
}
