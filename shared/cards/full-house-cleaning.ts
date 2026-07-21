import type { CardDefinition } from './types'

export const fullHouseCleaningCard: CardDefinition = {
  slug: 'full-house-cleaning',
  template: 'cleaning-service',

  meta: {
    title: 'Full House Cleaning — Թվային քարտ',
    description: 'Բարձրագույն ստանդարտների մաքրություն՝ վստահված ոլորտի առաջատար մասնագետներին — Full House Cleaning-ի թվային քարտը։',
    themeColor: '#183332',
    ogTitle: 'Full House Cleaning — Թվային քարտ',
    ogDescription: 'Բարձրագույն ստանդարտների մաքրություն՝ վստահված ոլորտի առաջատար մասնագետներին։'
  },

  brand: {
    orgName: 'Full House Cleaning',
    logoPath: '/cards/full-house-cleaning/logo.jpg',
    accentColor: '#036672',
    accentColorSecondary: '#5AB6C3'
  },

  contact: {
    phoneIntl: '+37443103300',
    phoneDisplay: '043-103-300',
    email: 'fullhousecleaning@gmail.com',
    whatsapp: true,
    instagramUrl: 'https://www.instagram.com/full_house___cleaning?igsh=MWxtazhxeGp3ZXBodA%3D%3D&utm_source=qr',
    openingHoursSchema: 'Mo-Su 09:00-18:00'
  },

  gallery: {
    photos: [
      { src: '/cards/full-house-cleaning/gallery/photo-1.PNG', wide: true },
      { src: '/cards/full-house-cleaning/gallery/photo-2.jpeg' },
      { src: '/cards/full-house-cleaning/gallery/photo-6.PNG' },
      { src: '/cards/full-house-cleaning/gallery/photo-3.jpeg' },
      { src: '/cards/full-house-cleaning/gallery/photo-4.JPG' },
      { src: '/cards/full-house-cleaning/gallery/photo-7.JPG' }
    ],
    videos: [
      { poster: '/cards/full-house-cleaning/gallery/video-1-poster.MOV', mp4: '/cards/full-house-cleaning/gallery/video-1.MOV' },
      { poster: '/cards/full-house-cleaning/gallery/video-2-poster.MOV', mp4: '/cards/full-house-cleaning/gallery/video-2.MOV' }
    ]
  },

  content: {
    hy: {
      hero: {
        title1: 'Full House',
        title2: 'Cleaning',
        tagline: 'Բարձրագույն ստանդարտների մաքրություն՝ վստահված ոլորտի առաջատար մասնագետներին։',
        seeContacts: 'Կոնտակտներ',
        share: 'Կիսվել',
        shareCopied: 'Պատճենվեց',
        scroll: 'Ոլորել'
      },
      giftCard: {
        eyebrow: 'Full House-ի սիրտը',
        titleLine1: 'Նվիրիր ժամանակ',
        titleLine2: 'քո սիրելի մարդկանց',
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
          { title: 'Ամենօրյա մաքրում', description: 'Կանոնավոր և թեթև մաքրում՝ Ձեր տան մշտական թարմությունը, կոկիկությունն ու հարմարավետությունը պահպանելու համար։', popular: true },
          { title: 'Կապիտալ մաքրում', description: 'Խորը և ամբողջական մաքրում՝ յուրաքանչյուր դետալի և դժվարահասանելի անկյունների մասնագիտացված ու մանրակրկիտ խնամքով։' },
          { title: 'Հետվերանորոգման մաքրում', description: 'Փոշու, շինարարական հետքերի և մնացորդների կատարյալ հեռացում՝ Ձեր նորոգված տարածքը բնակեցմանը պատրաստելու համար։' },
          { title: 'Քիմմաքրում', description: 'Փափուկ կահույքի, ավտոմեքենայի, գորգերի և տեքստիլի պրոֆեսիոնալ մաքրում՝ հատուկ նյութերով, որոնք թարմացնում են գույներն ու վերացնում բոլոր բծերը։' }
        ]
      },
      contact: {
        eyebrow: 'Կապվեք մեզ հետ',
        title: 'Ասեք բարև',
        call: 'Զանգել',
        whatsapp: 'WhatsApp',
        phoneLabel: 'Հեռախոս',
        emailLabel: 'Էլ. փոստ',
        hoursLabel: 'Աշխատանքային ժամեր',
        hoursValue: 'Երկ–Կիր, 09:00–18:00'
      },
      about: {
        eyebrow: 'Մեր պատմությունը',
        title: 'Մեր մասին',
        quote: 'Մաքուր տարածք՝ Ձեր ազատ ժամանակի և անդորրի համար։',
        paragraph: 'Full House Cleaning-ը մասնագիտացված թիմ է, որտեղ առանձնակի ուշադրություն է դարձվում յուրաքանչյուր դետալին։ Մեր կողմից իրականացվող բարձրակարգ խնամքի շնորհիվ Ձեր բնակելի տարածքը վերածվում է կատարյալ հարմարավետության և անդորրի միջավայրի։'
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
        tagline: "Cleanliness to the highest standard — entrusted to the industry's leading professionals.",
        seeContacts: 'See Contacts',
        share: 'Share',
        shareCopied: 'Copied',
        scroll: 'Scroll'
      },
      giftCard: {
        eyebrow: 'The Heart of Full House',
        titleLine1: 'Give time to',
        titleLine2: 'your loved ones.',
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
          { title: 'Daily Cleaning', description: 'Regular, light cleaning to keep your home consistently fresh, tidy, and comfortable.', popular: true },
          { title: 'Deep Cleaning', description: 'Thorough, complete cleaning with specialized, meticulous care for every detail and hard-to-reach corner.' },
          { title: 'Post-Renovation Cleaning', description: 'Complete removal of dust, construction residue, and debris to get your renovated space ready to live in.' },
          { title: 'Upholstery & Carpet Cleaning', description: 'Professional chemical cleaning of upholstered furniture, car interiors, carpets, and textiles — refreshing colors and removing every stain.' }
        ]
      },
      contact: {
        eyebrow: 'Reach Us',
        title: 'Say hello',
        call: 'Call',
        whatsapp: 'WhatsApp',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        hoursLabel: 'Hours',
        hoursValue: 'Mon–Sun, 9:00–18:00'
      },
      about: {
        eyebrow: 'Our Story',
        title: 'About us',
        quote: 'A clean space — for your free time and peace of mind.',
        paragraph: 'Full House Cleaning is a specialized team that pays close attention to every detail. Thanks to the high-level care we provide, your living space is transformed into an environment of true comfort and calm.'
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
        tagline: 'Чистота высочайшего стандарта — доверенная ведущим профессионалам отрасли.',
        seeContacts: 'Контакты',
        share: 'Поделиться',
        shareCopied: 'Скопировано',
        scroll: 'Прокрутить'
      },
      giftCard: {
        eyebrow: 'Сердце Full House',
        titleLine1: 'Дарите время',
        titleLine2: 'близким людям.',
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
          { title: 'Ежедневная уборка', description: 'Регулярная, лёгкая уборка для постоянной свежести, порядка и комфорта в вашем доме.', popular: true },
          { title: 'Капитальная уборка', description: 'Глубокая и полная уборка с профессиональным, тщательным вниманием к каждой детали и труднодоступным местам.' },
          { title: 'Уборка после ремонта', description: 'Полное удаление пыли, строительных следов и мусора, чтобы подготовить отремонтированное помещение к проживанию.' },
          { title: 'Химчистка мебели и ковров', description: 'Профессиональная химчистка мягкой мебели, салона автомобиля, ковров и текстиля специальными средствами, которые освежают цвет и удаляют все пятна.' }
        ]
      },
      contact: {
        eyebrow: 'Свяжитесь с нами',
        title: 'Скажите привет',
        call: 'Позвонить',
        whatsapp: 'WhatsApp',
        phoneLabel: 'Телефон',
        emailLabel: 'Эл. почта',
        hoursLabel: 'Часы работы',
        hoursValue: 'Пн–Вс, 9:00–18:00'
      },
      about: {
        eyebrow: 'Наша история',
        title: 'О нас',
        quote: 'Чистое пространство — для вашего свободного времени и спокойствия.',
        paragraph: 'Full House Cleaning — специализированная команда, уделяющая особое внимание каждой детали. Благодаря нашему высококлассному уходу ваше жилое пространство превращается в атмосферу подлинного комфорта и спокойствия.'
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
}
