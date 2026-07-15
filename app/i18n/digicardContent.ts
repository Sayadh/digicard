import type { Locale } from './content'

export interface DigicardLocaleContent {
  nav: {
    features: string
    howItWorks: string
    pricing: string
    faq: string
    cta: string
  }
  hero: {
    badge: string
    title1: string
    title2: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    proofNote: string
    mockup: {
      name: string
      profession: string
      call: string
      whatsapp: string
      instagram: string
      website: string
      email: string
      location: string
      qrLabel: string
    }
  }
  trust: {
    eyebrow: string
    title: string
    items: string[]
  }
  whatIs: {
    eyebrow: string
    title: string
    subtitle: string
    cards: { title: string; description: string }[]
  }
  features: {
    eyebrow: string
    title: string
    subtitle: string
    items: string[]
  }
  howItWorks: {
    eyebrow: string
    title: string
    steps: { title: string; description: string }[]
  }
  livePreview: {
    eyebrow: string
    title: string
    subtitle: string
    colorLabel: string
    avatarLabel: string
    socialLabel: string
    colorNames: string[]
    personas: { initials: string; name: string; profession: string }[]
    tabProfile: string
    tabServices: string
    bookLabel: string
    services: { name: string; price: string }[]
  }
  why: {
    eyebrow: string
    title: string
    items: { title: string; description: string }[]
  }
  pricing: {
    eyebrow: string
    title: string
    planName: string
    setupPrice: string
    setupUnit: string
    setupLabel: string
    setupFeatures: string[]
    monthlyPrice: string
    monthlyUnit: string
    monthlyIntro: string
    monthlyFeatures: string[]
    cta: string
    note: string
  }
  faq: {
    eyebrow: string
    title: string
    items: { q: string; a: string }[]
  }
  finalCta: {
    title: string
    subtitle: string
    cta: string
  }
  footer: {
    tagline: string
    navTitle: string
    contactTitle: string
    legalTitle: string
    privacy: string
    terms: string
    copyright: string
  }
}

export const digicardContent: Record<Locale, DigicardLocaleContent> = {
  hy: {
    nav: {
      features: 'Հնարավորություններ',
      howItWorks: 'Ինչպես է աշխատում',
      pricing: 'Գներ',
      faq: 'Հարցեր',
      cta: 'Ստեղծել քարտ'
    },
    hero: {
      badge: 'Թվային այցեքարտի պլատֆորմ',
      title1: 'Մեկ թվային այցեքարտ',
      title2: 'Անսահման հնարավորություններ',
      subtitle: 'Ստեղծիր գեղեցիկ թվային այցեքարտ րոպեների ընթացքում և կիսվիր դրանով QR կոդով, NFC քարտով կամ ուղիղ հղումով։ Ողջ կոնտակտային տեղեկատվությունը միշտ արդիական է՝ առանց նոր այցեքարտեր տպելու։',
      ctaPrimary: 'Ստեղծել քո քարտը',
      ctaSecondary: 'Դիտել դեմո',
      proofNote: 'Հավելված պետք չէ · Աշխատում է iPhone-ի և Android-ի վրա',
      mockup: {
        name: 'Անի Հակոբյան',
        profession: 'Ինտերիերի դիզայներ',
        call: 'Զանգել',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        website: 'Կայք',
        email: 'Էլ. փոստ',
        location: 'Հասցե',
        qrLabel: 'Սկանավորիր բացելու համար'
      }
    },
    trust: {
      eyebrow: 'Հարմար է բոլորի համար',
      title: 'Ում համար է DigiCard-ը',
      items: ['Ձեռնարկատերեր', 'Ընկերություններ', 'Վաճառքի թիմեր', 'Ռիելթորներ', 'Բժիշկներ', 'Ռեստորաններ', 'Հյուրանոցներ', 'Ֆրիլանսերներ', 'Խորհրդատուներ']
    },
    whatIs: {
      eyebrow: 'Ինչ է DigiCard-ը',
      title: 'Երեք եղանակ՝ քեզ ճանաչելի դարձնելու',
      subtitle: 'Մեկ պրոֆիլ, երեք եղանակ՝ կիսվելու համար։',
      cards: [
        {
          title: 'Թվային այցեքարտ',
          description: 'Պահիր ողջ մասնագիտական տեղեկատվությունդ մեկ գեղեցիկ էջում, որը միշտ արդիական է։'
        },
        {
          title: 'QR կիսում',
          description: 'Կիսվիր ակնթարթորեն՝ սկանավորելով QR կոդը ցանկացած սմարթֆոնով։'
        },
        {
          title: 'NFC այցեքարտ',
          description: 'Հպիր քարտը ցանկացած ժամանակակից սմարթֆոնի և պրոֆիլդ ակնթարթորեն կբացվի։'
        }
      ]
    },
    features: {
      eyebrow: 'Հնարավորություններ',
      title: 'Ամեն ինչ մեկ քարտում',
      subtitle: 'Բոլոր ալիքները, որոնցով քեզ կարող են գտնել՝ մեկ վայրում հավաքված։',
      items: [
        'Հեռախոսահամարներ', 'Էլ. փոստ', 'Կայք', 'WhatsApp', 'Telegram', 'Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'Google Maps', 'Պորտֆոլիո', 'Լուսանկարների պատկերասրահ', 'Տեսանյութեր', 'Կոնտակտի պահպանում', 'Սոցիալական հղումներ', 'Անհատական գույներ', 'Անհատական լոգո', 'Վիճակագրություն', 'QR կոդ', 'NFC աջակցություն'
      ]
    },
    howItWorks: {
      eyebrow: 'Ինչպես է աշխատում',
      title: 'Չորս քայլ մինչև առաջին կապը',
      steps: [
        { title: 'Ստեղծիր DigiCard', description: 'Գրանցվիր և ընտրիր դիզայնը րոպեների ընթացքում։' },
        { title: 'Ավելացրու տեղեկատվությունդ', description: 'Կոնտակտներ, սոց․ ցանցեր, պորտֆոլիո, լուսանկարներ։' },
        { title: 'Կիսվիր QR-ով կամ NFC-ով', description: 'Ցույց տուր քարտը կամ ուղարկիր հղումը մեկ շարժումով։' },
        { title: 'Ստացիր ավելի շատ կապեր', description: 'Հաճախորդներն ու գործընկերները քեզ գտնում են ակնթարթորեն։' }
      ]
    },
    livePreview: {
      eyebrow: 'Փորձիր հենց հիմա',
      title: 'Տես, թե ինչպես կթարմացվի քո քարտը',
      subtitle: 'Փոփոխիր գույնը, ավատարը կամ սոց․ հղումները և դիտիր, թե ինչպես է պրոֆիլը կենդանանում իրական ժամանակում։',
      colorLabel: 'Հիմնական գույն',
      avatarLabel: 'Ավատար',
      socialLabel: 'Սոց․ ցանցեր',
      colorNames: ['Indigo', 'Violet', 'Emerald', 'Amber'],
      personas: [
        { initials: 'ԱՀ', name: 'Անի Հակոբյան', profession: 'Ինտերիերի դիզայներ' },
        { initials: 'ԴՄ', name: 'Դավիթ Մկրտչյան', profession: 'Ռիելթոր' },
        { initials: 'ԼՍ', name: 'Լիլիթ Սարգսյան', profession: 'Բժիշկ-մասնագետ' }
      ],
      tabProfile: 'Պրոֆիլ',
      tabServices: 'Ծառայություններ',
      bookLabel: 'Ամրագրել',
      services: [
        { name: 'Խորհրդատվություն', price: '15,000 ֏' },
        { name: 'Կրկնակի այց', price: '8,000 ֏' },
        { name: 'Պրեմիում փաթեթ', price: '25,000 ֏' }
      ]
    },
    why: {
      eyebrow: 'Ինչու՞ DigiCard',
      title: 'Ավելի խելացի ցանցագործման համար',
      items: [
        { title: 'Առանց թղթային քարտերի', description: 'Երբեք չկորցնես կապ մեկ ծալված այցեքարտի պատճառով։' },
        { title: 'Միշտ արդիական տվյալներ', description: 'Փոխեցիր հեռախոսահամարդ՝ առանց նոր քարտեր տպելու։' },
        { title: 'Ակնթարթային կիսում', description: 'QR, NFC կամ հղում՝ երեք վայրկյանում։' },
        { title: 'Պրոֆեսիոնալ տպավորություն', description: 'Մեկ գեղեցիկ էջ, որը խոսում է քո բիզնեսի մասին։' },
        { title: 'Բնապահպանական', description: 'Զրո թուղթ, զրո տպագրական թափոն։' },
        { title: 'Խնայիր գումար', description: 'Մեկ քարտ, ոչ թե հազարավոր տպված օրինակներ։' },
        { title: 'Հեշտ խմբագրում', description: 'Թարմացրու տեղեկատվությունդ ցանկացած պահի, ցանկացած սարքից։' },
        { title: 'Ժամանակակից ցանցագործում', description: 'Ցույց տուր, որ քո բիզնեսը քայլում է ապագայի հետ։' }
      ]
    },
    pricing: {
      eyebrow: 'Գներ',
      title: 'Թափանցիկ և պարզ',
      planName: 'DigiCard Պրեմիում',
      setupPrice: '25,000',
      setupUnit: '֏',
      setupLabel: 'Միանվագ կարգավորման վճար',
      setupFeatures: [
        'Անհատական թվային այցեքարտ', 'Պրեմիում դիզայն', 'QR կոդ', 'NFC աջակցություն', 'Անսահմանափակ թարմացումներ', 'Կոնտակտի բոլոր եղանակները', 'Սոց․ ցանցերի հղումներ', 'Google Maps', 'Լուսանկարների պատկերասրահ', 'Պորտֆոլիո', 'Արագ հոսթինգ', 'Անվտանգ cloud պահեստ'
      ],
      monthlyPrice: '1,500',
      monthlyUnit: '֏ / ամիս',
      monthlyIntro: 'Ամսական ծառայության վճարը ներառում է.',
      monthlyFeatures: [
        'Հոսթինգ', 'Անվտանգության թարմացումներ', 'Cloud ենթակառուցվածք', 'Տեխնիկական սպասարկում', 'Շարունակական բարելավումներ', 'Հուսալի աշխատունակություն', 'Հաճախորդների աջակցություն'
      ],
      cta: 'Ստեղծել իմ DigiCard-ը',
      note: 'Ամսական վճարը երաշխավորում է, որ քո քարտը միշտ առցանց է, անվտանգ, արագ և շարունակաբար սպասարկվող։'
    },
    faq: {
      eyebrow: 'Հարցեր',
      title: 'Հաճախակի տրվող հարցեր',
      items: [
        { q: 'Ի՞նչ է թվային այցեքարտը։', a: 'Դա մեկ առցանց էջ է, որտեղ հավաքված են քո ողջ կոնտակտային և մասնագիտական տեղեկատվությունը՝ հասանելի QR կոդով, NFC-ով կամ ուղիղ հղումով։' },
        { q: 'Հավելված պե՞տք է։', a: 'Ոչ։ Քո քարտը բացվում է ցանկացած բրաուզերում՝ առանց որևէ հավելված ներբեռնելու։' },
        { q: 'Աշխատու՞մ է iPhone-ի և Android-ի վրա։', a: 'Այո, երկուսի վրա էլ լիարժեք աշխատում է՝ ինչպես QR սկանավորումը, այնպես էլ NFC հպումը։' },
        { q: 'Կարո՞ղ եմ հետո խմբագրել տեղեկատվությունս։', a: 'Իհարկե։ Կարող ես թարմացնել ցանկացած տվյալ ցանկացած պահի, առանց նոր քարտ պատվիրելու։' },
        { q: 'Ի՞նչ կլինի, եթե փոխեմ հեռախոսահամարս։', a: 'Պարզապես թարմացրու այն քո վահանակում. քո ողջ ցրված քարտերն ու հղումները ավտոմատ ցույց կտան նոր տվյալը։' },
        { q: 'Հոսթինգը ներառվա՞ծ է։', a: 'Այո։ Ամսական վճարը ամբողջությամբ ծածկում է հոսթինգը, անվտանգությունը և սպասարկումը։' },
        { q: 'Ինչպե՞ս է աշխատում NFC-ն։', a: 'Պարզապես հպիր QR ունեցող քարտը ցանկացած ժամանակակից սմարթֆոնի հետևի մասին. պրոֆիլդ ինքնաբերաբար կբացվի։' }
      ]
    },
    finalCta: {
      title: 'Պատրա՞ստ ես արդիականացնել քո այցեքարտը',
      subtitle: 'Միացիր հարյուրավոր մասնագետների, ովքեր արդեն ցանցագործում են DigiCard-ով։',
      cta: 'Ստեղծել իմ DigiCard-ը'
    },
    footer: {
      tagline: 'Թվային այցեքարտեր, որոնք աշխատում են քո փոխարեն։',
      navTitle: 'Նավիգացիա',
      contactTitle: 'Կապ',
      legalTitle: 'Իրավական',
      privacy: 'Գաղտնիություն',
      terms: 'Պայմաններ',
      copyright: 'Բոլոր իրավունքները պաշտպանված են։'
    }
  },
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      cta: 'Create Your Card'
    },
    hero: {
      badge: 'Digital Business Card Platform',
      title1: 'One Digital Business Card.',
      title2: 'Unlimited Possibilities.',
      subtitle: 'Create a beautiful digital business card in minutes and share it through a QR code, an NFC card, or a direct link. All your contact information stays updated — no new cards to print.',
      ctaPrimary: 'Create Your Card',
      ctaSecondary: 'View Demo',
      proofNote: 'No app required · Works on iPhone & Android',
      mockup: {
        name: 'Ani Hakobyan',
        profession: 'Interior Designer',
        call: 'Call',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        website: 'Website',
        email: 'Email',
        location: 'Location',
        qrLabel: 'Scan to open profile'
      }
    },
    trust: {
      eyebrow: 'Perfect for',
      title: 'Built for how you actually network',
      items: ['Entrepreneurs', 'Companies', 'Sales Teams', 'Realtors', 'Doctors', 'Restaurants', 'Hotels', 'Freelancers', 'Consultants']
    },
    whatIs: {
      eyebrow: 'What is DigiCard?',
      title: 'Three ways to be found instantly',
      subtitle: 'One profile, three ways to share it.',
      cards: [
        {
          title: 'Digital Business Card',
          description: 'Store all your professional information in one beautiful page that stays current forever.'
        },
        {
          title: 'QR Sharing',
          description: 'Share instantly by scanning a QR code with any smartphone camera.'
        },
        {
          title: 'NFC Business Card',
          description: 'Tap the card on any modern smartphone and your profile opens instantly.'
        }
      ]
    },
    features: {
      eyebrow: 'Features',
      title: 'Everything in one card',
      subtitle: 'Every way people can reach and remember you, gathered in a single place.',
      items: [
        'Phone Numbers', 'Email', 'Website', 'WhatsApp', 'Telegram', 'Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'Google Maps', 'Portfolio', 'Photo Gallery', 'Videos', 'Contact Saving', 'Social Links', 'Custom Colors', 'Custom Logo', 'Analytics', 'QR Code', 'NFC Support'
      ]
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'Four steps to your first new connection',
      steps: [
        { title: 'Create your DigiCard', description: 'Sign up and pick a premium design in minutes.' },
        { title: 'Add your information', description: 'Contacts, socials, portfolio, gallery — all of it.' },
        { title: 'Share with QR or NFC', description: 'Show your card or send your link in one motion.' },
        { title: 'Receive more connections', description: 'Clients and partners find you instantly, wherever you are.' }
      ]
    },
    livePreview: {
      eyebrow: 'Try it yourself',
      title: 'Watch your card come to life',
      subtitle: 'Change the accent color, the avatar, or the social links, and watch the profile update in real time.',
      colorLabel: 'Accent color',
      avatarLabel: 'Avatar',
      socialLabel: 'Social links',
      colorNames: ['Indigo', 'Violet', 'Emerald', 'Amber'],
      personas: [
        { initials: 'AH', name: 'Ani Hakobyan', profession: 'Interior Designer' },
        { initials: 'DM', name: 'David Mkrtchyan', profession: 'Realtor' },
        { initials: 'LS', name: 'Lilit Sargsyan', profession: 'Physician' }
      ],
      tabProfile: 'Profile',
      tabServices: 'Services',
      bookLabel: 'Book',
      services: [
        { name: 'Consultation', price: '15,000 AMD' },
        { name: 'Follow-up visit', price: '8,000 AMD' },
        { name: 'Premium package', price: '25,000 AMD' }
      ]
    },
    why: {
      eyebrow: 'Why DigiCard?',
      title: 'Built for smarter networking',
      items: [
        { title: 'No paper business cards', description: 'Never lose a connection to a crumpled card again.' },
        { title: 'Always updated information', description: 'Change your number without reprinting anything.' },
        { title: 'Instant sharing', description: 'QR, NFC, or a link — shared in three seconds.' },
        { title: 'Professional image', description: 'One beautiful page that speaks for your business.' },
        { title: 'Eco-friendly', description: 'Zero paper, zero print waste.' },
        { title: 'Save money', description: 'One card, not thousands of printed copies.' },
        { title: 'Easy editing', description: 'Update your details anytime, from any device.' },
        { title: 'Modern networking', description: 'Show that your business moves with the times.' }
      ]
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Transparent, and worth it',
      planName: 'DigiCard Premium',
      setupPrice: '25,000',
      setupUnit: 'AMD',
      setupLabel: 'One-time setup fee',
      setupFeatures: [
        'Personal digital business card', 'Premium design', 'QR Code', 'NFC support', 'Unlimited profile updates', 'All contact methods', 'Social media links', 'Google Maps', 'Photo gallery', 'Portfolio', 'Fast hosting', 'Secure cloud storage'
      ],
      monthlyPrice: '1,500',
      monthlyUnit: 'AMD / month',
      monthlyIntro: 'The monthly service fee includes:',
      monthlyFeatures: [
        'Hosting', 'Security updates', 'Cloud infrastructure', 'Technical maintenance', 'Continuous platform improvements', 'Reliable uptime', 'Customer support'
      ],
      cta: 'Create My DigiCard',
      note: 'The monthly service ensures your card stays online, secure, fast, and continuously maintained.'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        { q: 'What is a Digital Business Card?', a: 'It’s a single online page holding all your contact and professional information, reachable by QR code, NFC, or a direct link.' },
        { q: 'Do I need an app?', a: 'No. Your card opens in any browser — nothing to download or install.' },
        { q: 'Does it work on iPhone and Android?', a: 'Yes, fully — both QR scanning and NFC tapping work on both platforms.' },
        { q: 'Can I edit my information later?', a: 'Absolutely. Update any detail whenever you like, with no need to order a new card.' },
        { q: 'What happens if I change my phone number?', a: 'Just update it in your dashboard — every card and link you’ve shared reflects the new number automatically.' },
        { q: 'Is hosting included?', a: 'Yes. The monthly fee fully covers hosting, security, and ongoing maintenance.' },
        { q: 'How does NFC work?', a: 'Simply tap your card against any modern smartphone and your profile opens automatically — no app needed.' }
      ]
    },
    finalCta: {
      title: 'Ready to Modernize Your Business Card?',
      subtitle: 'Join hundreds of professionals already networking smarter with DigiCard.',
      cta: 'Create My DigiCard'
    },
    footer: {
      tagline: 'Digital business cards that work for you.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      legalTitle: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      copyright: 'All rights reserved.'
    }
  },
  ru: {
    nav: {
      features: 'Возможности',
      howItWorks: 'Как это работает',
      pricing: 'Цены',
      faq: 'Вопросы',
      cta: 'Создать карту'
    },
    hero: {
      badge: 'Платформа цифровых визиток',
      title1: 'Одна цифровая визитка.',
      title2: 'Безграничные возможности.',
      subtitle: 'Создайте красивую цифровую визитку за минуты и делитесь ею через QR-код, NFC-карту или прямую ссылку. Вся контактная информация всегда актуальна — без печати новых визиток.',
      ctaPrimary: 'Создать визитку',
      ctaSecondary: 'Смотреть демо',
      proofNote: 'Приложение не нужно · Работает на iPhone и Android',
      mockup: {
        name: 'Ани Акопян',
        profession: 'Дизайнер интерьеров',
        call: 'Позвонить',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        website: 'Сайт',
        email: 'Почта',
        location: 'Адрес',
        qrLabel: 'Сканируйте, чтобы открыть профиль'
      }
    },
    trust: {
      eyebrow: 'Подходит для',
      title: 'Создано для реального нетворкинга',
      items: ['Предприниматели', 'Компании', 'Отделы продаж', 'Риелторы', 'Врачи', 'Рестораны', 'Отели', 'Фрилансеры', 'Консультанты']
    },
    whatIs: {
      eyebrow: 'Что такое DigiCard?',
      title: 'Три способа быть найденным мгновенно',
      subtitle: 'Один профиль — три способа поделиться им.',
      cards: [
        {
          title: 'Цифровая визитка',
          description: 'Вся ваша профессиональная информация на одной красивой странице, которая всегда актуальна.'
        },
        {
          title: 'QR-обмен',
          description: 'Делитесь мгновенно — достаточно отсканировать QR-код камерой смартфона.'
        },
        {
          title: 'NFC-визитка',
          description: 'Поднесите карту к любому современному смартфону — профиль откроется мгновенно.'
        }
      ]
    },
    features: {
      eyebrow: 'Возможности',
      title: 'Всё в одной визитке',
      subtitle: 'Все способы связаться с вами — собраны в одном месте.',
      items: [
        'Номера телефонов', 'Email', 'Сайт', 'WhatsApp', 'Telegram', 'Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'Google Maps', 'Портфолио', 'Фотогалерея', 'Видео', 'Сохранение контакта', 'Ссылки на соцсети', 'Свои цвета', 'Свой логотип', 'Аналитика', 'QR-код', 'Поддержка NFC'
      ]
    },
    howItWorks: {
      eyebrow: 'Как это работает',
      title: 'Четыре шага до нового знакомства',
      steps: [
        { title: 'Создайте DigiCard', description: 'Зарегистрируйтесь и выберите дизайн за пару минут.' },
        { title: 'Добавьте информацию', description: 'Контакты, соцсети, портфолио, галерея — всё сразу.' },
        { title: 'Поделитесь через QR или NFC', description: 'Покажите карту или отправьте ссылку одним движением.' },
        { title: 'Получайте больше клиентов', description: 'Клиенты и партнёры находят вас мгновенно, где бы вы ни были.' }
      ]
    },
    livePreview: {
      eyebrow: 'Попробуйте сами',
      title: 'Смотрите, как оживает ваша визитка',
      subtitle: 'Измените акцентный цвет, аватар или ссылки на соцсети — и наблюдайте, как профиль обновляется в реальном времени.',
      colorLabel: 'Акцентный цвет',
      avatarLabel: 'Аватар',
      socialLabel: 'Соцсети',
      colorNames: ['Индиго', 'Фиолетовый', 'Изумрудный', 'Янтарный'],
      personas: [
        { initials: 'АА', name: 'Ани Акопян', profession: 'Дизайнер интерьеров' },
        { initials: 'ДМ', name: 'Давид Мкртчян', profession: 'Риелтор' },
        { initials: 'ЛС', name: 'Лилит Саргсян', profession: 'Врач' }
      ],
      tabProfile: 'Профиль',
      tabServices: 'Услуги',
      bookLabel: 'Записаться',
      services: [
        { name: 'Консультация', price: '15 000 ֏' },
        { name: 'Повторный визит', price: '8 000 ֏' },
        { name: 'Премиум пакет', price: '25 000 ֏' }
      ]
    },
    why: {
      eyebrow: 'Почему DigiCard?',
      title: 'Создано для умного нетворкинга',
      items: [
        { title: 'Без бумажных визиток', description: 'Больше не теряйте контакты из-за мятой визитки.' },
        { title: 'Всегда актуальные данные', description: 'Меняйте номер телефона без перепечатки визиток.' },
        { title: 'Мгновенный обмен', description: 'QR, NFC или ссылка — за три секунды.' },
        { title: 'Профессиональный образ', description: 'Одна красивая страница, которая говорит о вашем бизнесе.' },
        { title: 'Экологично', description: 'Ноль бумаги, ноль отходов печати.' },
        { title: 'Экономия денег', description: 'Одна визитка вместо тысяч печатных копий.' },
        { title: 'Лёгкое редактирование', description: 'Обновляйте данные в любой момент, с любого устройства.' },
        { title: 'Современный нетворкинг', description: 'Покажите, что ваш бизнес идёт в ногу со временем.' }
      ]
    },
    pricing: {
      eyebrow: 'Цены',
      title: 'Прозрачно и оправданно',
      planName: 'DigiCard Premium',
      setupPrice: '25 000',
      setupUnit: '֏',
      setupLabel: 'Разовая плата за настройку',
      setupFeatures: [
        'Персональная цифровая визитка', 'Премиальный дизайн', 'QR-код', 'Поддержка NFC', 'Неограниченные обновления профиля', 'Все способы связи', 'Ссылки на соцсети', 'Google Maps', 'Фотогалерея', 'Портфолио', 'Быстрый хостинг', 'Надёжное облачное хранилище'
      ],
      monthlyPrice: '1 000',
      monthlyUnit: '֏ / месяц',
      monthlyIntro: 'Ежемесячная плата за обслуживание включает:',
      monthlyFeatures: [
        'Хостинг', 'Обновления безопасности', 'Облачную инфраструктуру', 'Техническое обслуживание', 'Постоянные улучшения платформы', 'Надёжную бесперебойную работу', 'Поддержку клиентов'
      ],
      cta: 'Создать мою DigiCard',
      note: 'Ежемесячная плата гарантирует, что ваша визитка всегда онлайн, в безопасности, быстро работает и постоянно обслуживается.'
    },
    faq: {
      eyebrow: 'Вопросы',
      title: 'Часто задаваемые вопросы',
      items: [
        { q: 'Что такое цифровая визитка?', a: 'Это одна онлайн-страница со всей вашей контактной и профессиональной информацией, доступная по QR-коду, NFC или прямой ссылке.' },
        { q: 'Нужно ли приложение?', a: 'Нет. Ваша визитка открывается в любом браузере — ничего скачивать не нужно.' },
        { q: 'Работает ли на iPhone и Android?', a: 'Да, полностью — и сканирование QR, и NFC работают на обеих платформах.' },
        { q: 'Могу ли я потом изменить информацию?', a: 'Конечно. Обновляйте любые данные в любое время, без заказа новой визитки.' },
        { q: 'Что если я поменяю номер телефона?', a: 'Просто обновите его в личном кабинете — все ваши розданные визитки и ссылки автоматически покажут новый номер.' },
        { q: 'Хостинг включён?', a: 'Да. Ежемесячная плата полностью покрывает хостинг, безопасность и обслуживание.' },
        { q: 'Как работает NFC?', a: 'Просто поднесите визитку к любому современному смартфону — профиль откроется автоматически, без приложения.' }
      ]
    },
    finalCta: {
      title: 'Готовы модернизировать свою визитку?',
      subtitle: 'Присоединяйтесь к сотням специалистов, которые уже используют DigiCard.',
      cta: 'Создать мою DigiCard'
    },
    footer: {
      tagline: 'Цифровые визитки, которые работают на вас.',
      navTitle: 'Навигация',
      contactTitle: 'Контакты',
      legalTitle: 'Документы',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      copyright: 'Все права защищены.'
    }
  }
}
