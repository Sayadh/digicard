import type { CardDefinition } from './types'

export const sayadHarutyunyanCard: CardDefinition = {
  slug: 'sayad-harutyunyan',
  template: 'portfolio',

  meta: {
    title: 'Սայադ Հարությունյան — Թվային նախագծերի ստեղծում և զարգացում',
    description: 'Ես ստեղծում և զարգացնում եմ ժամանակակից թվային հարթակներ՝ Menus.am, DigiCard.am, Evakuators.am և անհատական առցանց հրավիրատոմսեր։',
    themeColor: '#09090B'
  },

  brand: {
    orgName: 'Սայադ Հարությունյան',
    logoPath: '/cards/sayad-harutyunyan/logo.jpg',
    accentColor: '#D4AF37',
    accentColorSecondary: '#E3C567'
  },

  contact: {
    phoneIntl: '+37493632003',
    phoneDisplay: '093-632-003',
    email: 'harutyunyansayad@gmail.com',
    whatsapp: true,
    telegramUrl: 'https://t.me/sayadharutyunyan'
  },

  gallery: {
    photos: [],
    videos: []
  },

  portfolioContent: {
    hy: {
      hero: {
        name: 'ՍԱՅԱԴ',
        role: 'Թվային նախագծերի ստեղծում և զարգացում',
        bio: 'Ես ստեղծում և զարգացնում եմ ժամանակակից թվային հարթակներ, որոնք օգնում են բիզնեսներին ներկայանալ ավելի պրոֆեսիոնալ, աշխատել ավելի արդյունավետ և հաճախորդների համար ստեղծել ավելի հարմար փորձառություն։ Իմ նախագծերում մեծ ուշադրություն եմ դարձնում դիզայնին, օգտագործման հարմարավետությանը, արագությանը և յուրաքանչյուր բիզնեսի անհատական ոճին։',
        ctaContacts: 'Կապ ինձ հետ'
      },
      contact: {
        eyebrow: 'Կապ',
        title: 'Կապ ինձ հետ',
        call: 'Զանգահարել',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'Էլ. փոստ',
        instagram: 'Instagram',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
        saveContact: 'Պահպանել կոնտակտներում'
      },
      projects: {
        eyebrow: 'Պորտֆոլիո',
        title: 'Իմ նախագծերը',
        inquiryMessage: (project: string) => `Բարև, Սայադ! Հետաքրքրված եմ «${project}»-ով։`,
        items: [
          {
            id: 'menus',
            title: 'Menus.am',
            tagline: 'Թվային QR մենյուներ ռեստորանների և սրճարանների համար',
            description: 'Menus.am-ը ժամանակակից հարթակ է ռեստորանների, սրճարանների, բարերի և սննդի ոլորտի այլ բիզնեսների համար։ Հարթակի միջոցով հնարավոր է թղթային մենյուն փոխարինել ժամանակակից թվային մենյուով, որը հաճախորդները կարող են բացել QR կոդի միջոցով։',
            features: [
              'QR մենյու',
              'Բազմալեզու մենյու',
              'Ապրանքների և գների հեշտ կառավարում',
              'Ուտեստների լուսանկարներ և նկարագրություններ',
              'Ժամանակավոր անհասանելիության նշում',
              'Անհատական դիզայն',
              'Ադմինիստրատիվ կառավարման համակարգ',
              'Տեխնիկական աջակցություն'
            ],
            ctaLabel: 'Այցելել Menus.am',
            href: 'https://menus.am'
          },
          {
            id: 'digicard',
            title: 'DigiCard.am',
            tagline: 'Ժամանակակից թվային այցեքարտեր',
            description: 'DigiCard.am-ը թվային այցեքարտերի հարթակ է անհատների, մասնագետների և բիզնեսների համար։ Թվային այցեքարտը հնարավորություն է տալիս մեկ էջում ներկայացնել ամբողջ անհրաժեշտ տեղեկատվությունը՝ կոնտակտներ, սոցիալական ցանցեր, ծառայություններ, հասցե, աշխատանքային ժամեր և այլ կարևոր տվյալներ։ Այն կարելի է տարածել QR կոդի, NFC քարտի կամ սովորական հղման միջոցով։',
            features: [
              'Անհատական թվային այցեքարտ',
              'QR և NFC հասանելիություն',
              'Կոնտակտների արագ պահպանում',
              'Սոցիալական ցանցերի հղումներ',
              'Ծառայությունների ներկայացում',
              'Քարտեզ և հասցե',
              'Անհատական դիզայն',
              'Բջջային սարքերի համար հարմարեցված էջ'
            ],
            ctaLabel: 'Այցելել DigiCard.am',
            href: 'https://digicard.am'
          },
          {
            id: 'evakuators',
            title: 'Evakuators.am',
            tagline: 'Էվակուատորների և ճանապարհային օգնության միասնական հարթակ',
            description: 'Evakuators.am-ը ստեղծվում է վարորդներին և էվակուատոր ծառայություններ մատուցողներին արագ կապելու նպատակով։ Օգտատերը կարող է ընտրել իր մարզը կամ քաղաքը, գտնել համապատասխան վարորդի, դիտել առաջարկվող ծառայությունները և անմիջապես զանգահարել։',
            features: [
              'Ավտոմեքենաների տեղափոխում',
              'Մարտկոցի գործարկում',
              'Վառելիքի առաքում',
              'Ավտոմեքենայի դռան բացում',
              'Միջքաղաքային տեղափոխում',
              'Ծանր տեխնիկայի տեղափոխում',
              'Մանիպուլյատոր ծառայություն',
              'Ազատ երթուղիներ'
            ],
            ctaLabel: 'Այցելել Evakuators.am',
            href: 'https://evakuators.am'
          },
          {
            id: 'invitations',
            title: 'Անհատական առցանց հրավիրատոմսեր',
            tagline: 'Ամեն միջոցառման համար՝ իր ոճով',
            description: 'Մենք ստեղծում ենք ժամանակակից և անհատական առցանց հրավիրատոմսեր տարբեր միջոցառումների համար։ Յուրաքանչյուր հրավիրատոմս ստեղծվում է հատուկ տվյալ միջոցառման համար՝ պահպանելով պատվիրատուի նախընտրած ոճը, գույները և տրամադրությունը։',
            features: [
              'Յուրահատուկ անհատական դիզայն',
              'Միջոցառման ամսաթիվ և ժամ',
              'Վայրի քարտեզ',
              'Հետհաշվարկի ժամացույց',
              'Լուսանկարների և տեսանյութերի բաժին',
              'Հյուրերի մասնակցության հաստատում',
              'WhatsApp-ով և սոցիալական ցանցերով հեշտ տարածում',
              'QR կոդ'
            ],
            ctaLabel: 'Պատվիրել հրավիրատոմս'
          }
        ]
      },
      capabilities: {
        eyebrow: 'Հնարավորություններ',
        title: 'Ինչ կարող եմ ստեղծել Ձեզ համար',
        items: [
          'Բիզնես կայքեր',
          'SaaS հարթակներ',
          'Թվային այցեքարտեր',
          'Առցանց հրավիրատոմսեր',
          'QR համակարգեր',
          'Անհատական վեբ լուծումներ',
          'Բիզնեսի կառավարման համակարգեր',
          'Պրոֆեսիոնալ ներկայացման էջեր',
          'Բազմալեզու կայքեր',
          'SEO-ի համար հարմարեցված հարթակներ'
        ]
      },
      why: {
        eyebrow: 'Առավելություններ',
        title: 'Ինչու աշխատել ինձ հետ',
        items: [
          { title: 'Անհատական մոտեցում', description: 'Յուրաքանչյուր նախագիծ ստեղծվում է տվյալ բիզնեսի նպատակներին և ոճին համապատասխան։' },
          { title: 'Ժամանակակից դիզայն', description: 'Դիզայնը կառուցվում է պարզ, մաքուր և պրոֆեսիոնալ սկզբունքներով։' },
          { title: 'Արագ և հարմար աշխատանք', description: 'Կայքերը հարմարեցվում են հեռախոսների, պլանշետների և համակարգիչների համար։' },
          { title: 'Երկարաժամկետ զարգացում', description: 'Նախագծերը ստեղծվում են այնպես, որ հետագայում հնարավոր լինի ավելացնել նոր հնարավորություններ և ընդլայնել համակարգը։' }
        ]
      },
      finalCta: {
        eyebrow: 'Սկսենք',
        title: 'Եկեք ստեղծենք Ձեր հաջորդ նախագիծը',
        body: 'Եթե ունեք գաղափար, բիզնես կամ ծառայություն և ցանկանում եք այն ներկայացնել ժամանակակից ու պրոֆեսիոնալ ձևով, կապ հաստատեք ինձ հետ։',
        discuss: 'Քննարկել նախագիծը',
        whatsapp: 'Գրել WhatsApp-ով',
        call: 'Զանգահարել'
      },
      footer: {
        tagline: 'Թվային նախագծերի ստեղծում և զարգացում'
      }
    },
    en: {
      hero: {
        name: 'SAYAD',
        role: 'Building & Growing Digital Products',
        bio: "I design and build modern digital platforms that help businesses look more professional, work more efficiently, and give their customers a smoother experience. Every project I take on gets careful attention to design, usability, speed, and that business's own individual style.",
        ctaContacts: 'Get in Touch'
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Get in Touch',
        call: 'Call',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'Email',
        instagram: 'Instagram',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
        saveContact: 'Save Contact'
      },
      projects: {
        eyebrow: 'Portfolio',
        title: 'My Projects',
        inquiryMessage: (project: string) => `Hi Sayad! I'm interested in "${project}".`,
        items: [
          {
            id: 'menus',
            title: 'Menus.am',
            tagline: 'Digital QR menus for restaurants and cafés',
            description: 'Menus.am is a modern platform for restaurants, cafés, bars, and other food-service businesses. It replaces paper menus with a modern digital menu that customers can open straight from a QR code.',
            features: [
              'QR menu',
              'Multilingual menu',
              'Easy product & price management',
              'Dish photos and descriptions',
              'Temporary unavailability marking',
              'Custom design',
              'Admin management dashboard',
              'Technical support'
            ],
            ctaLabel: 'Visit Menus.am',
            href: 'https://menus.am'
          },
          {
            id: 'digicard',
            title: 'DigiCard.am',
            tagline: 'Modern digital business cards',
            description: 'DigiCard.am is a digital business card platform for individuals, professionals, and businesses. A digital card lets you present everything on one page — contacts, social links, services, address, working hours, and other key details. It can be shared via QR code, NFC card, or a plain link.',
            features: [
              'Personal digital business card',
              'QR and NFC access',
              'One-tap contact saving',
              'Social media links',
              'Services showcase',
              'Map and address',
              'Custom design',
              'Mobile-optimized page'
            ],
            ctaLabel: 'Visit DigiCard.am',
            href: 'https://digicard.am'
          },
          {
            id: 'evakuators',
            title: 'Evakuators.am',
            tagline: 'A unified platform for tow trucks and roadside assistance',
            description: 'Evakuators.am is built to quickly connect drivers with tow-truck and roadside assistance providers. Users can pick their region or city, find the right driver, see the services on offer, and call right away.',
            features: [
              'Vehicle towing',
              'Battery jump-start',
              'Fuel delivery',
              'Car door unlocking',
              'Intercity transport',
              'Heavy equipment transport',
              'Crane / manipulator service',
              'Open routes'
            ],
            ctaLabel: 'Visit Evakuators.am',
            href: 'https://evakuators.am'
          },
          {
            id: 'invitations',
            title: 'Custom Online Invitations',
            tagline: 'Tailored to every event',
            description: "We create modern, fully custom online invitations for all kinds of events. Every invitation is built specifically for that occasion, keeping the client's preferred style, colors, and mood.",
            features: [
              'Fully custom design',
              'Event date & time',
              'Venue map',
              'Countdown timer',
              'Photo & video section',
              'Guest RSVP confirmation',
              'Easy sharing via WhatsApp & social media',
              'QR code'
            ],
            ctaLabel: 'Order an Invitation'
          }
        ]
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'What I Can Build For You',
        items: [
          'Business websites',
          'SaaS platforms',
          'Digital business cards',
          'Online invitations',
          'QR systems',
          'Custom web solutions',
          'Business management systems',
          'Professional presentation pages',
          'Multilingual websites',
          'SEO-friendly platforms'
        ]
      },
      why: {
        eyebrow: 'Why Me',
        title: 'Why Work With Me',
        items: [
          { title: 'Personal Approach', description: "Every project is built around that specific business's goals and style." },
          { title: 'Modern Design', description: 'Design is built on simple, clean, professional principles.' },
          { title: 'Fast & Convenient', description: 'Sites are optimized for phones, tablets, and desktops alike.' },
          { title: 'Built to Grow', description: 'Projects are built so new features can be added and the system expanded further down the line.' }
        ]
      },
      finalCta: {
        eyebrow: "Let's start",
        title: "Let's build your next project",
        body: 'If you have an idea, a business, or a service and want to present it in a modern, professional way, get in touch.',
        discuss: 'Discuss Your Project',
        whatsapp: 'Message on WhatsApp',
        call: 'Call'
      },
      footer: {
        tagline: 'Building & Growing Digital Products'
      }
    },
    ru: {
      hero: {
        name: 'САЯД',
        role: 'Создание и развитие цифровых проектов',
        bio: 'Я создаю и развиваю современные цифровые платформы, которые помогают бизнесу выглядеть более профессионально, работать эффективнее и создавать более удобный опыт для клиентов. В каждом проекте я уделяю большое внимание дизайну, удобству использования, скорости и индивидуальному стилю каждого бизнеса.',
        ctaContacts: 'Связаться со мной'
      },
      contact: {
        eyebrow: 'Контакты',
        title: 'Связаться со мной',
        call: 'Позвонить',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'Эл. почта',
        instagram: 'Instagram',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
        saveContact: 'Сохранить контакт'
      },
      projects: {
        eyebrow: 'Портфолио',
        title: 'Мои проекты',
        inquiryMessage: (project: string) => `Здравствуйте, Саяд! Меня интересует «${project}».`,
        items: [
          {
            id: 'menus',
            title: 'Menus.am',
            tagline: 'Цифровые QR-меню для ресторанов и кафе',
            description: 'Menus.am — современная платформа для ресторанов, кафе, баров и других заведений общепита. Она позволяет заменить бумажное меню современным цифровым меню, которое клиенты открывают через QR-код.',
            features: [
              'QR-меню',
              'Многоязычное меню',
              'Удобное управление товарами и ценами',
              'Фото и описания блюд',
              'Отметка временной недоступности',
              'Индивидуальный дизайн',
              'Административная панель управления',
              'Техническая поддержка'
            ],
            ctaLabel: 'Перейти на Menus.am',
            href: 'https://menus.am'
          },
          {
            id: 'digicard',
            title: 'DigiCard.am',
            tagline: 'Современные цифровые визитки',
            description: 'DigiCard.am — платформа цифровых визиток для частных лиц, специалистов и бизнеса. Цифровая визитка позволяет разместить на одной странице всю необходимую информацию: контакты, соцсети, услуги, адрес, рабочие часы и другие важные данные. Ею можно делиться через QR-код, NFC-карту или обычную ссылку.',
            features: [
              'Персональная цифровая визитка',
              'Доступ через QR и NFC',
              'Быстрое сохранение контакта',
              'Ссылки на соцсети',
              'Представление услуг',
              'Карта и адрес',
              'Индивидуальный дизайн',
              'Страница, адаптированная под мобильные устройства'
            ],
            ctaLabel: 'Перейти на DigiCard.am',
            href: 'https://digicard.am'
          },
          {
            id: 'evakuators',
            title: 'Evakuators.am',
            tagline: 'Единая платформа эвакуаторов и дорожной помощи',
            description: 'Evakuators.am создаётся для быстрой связи водителей со службами эвакуаторов и дорожной помощи. Пользователь может выбрать свой регион или город, найти подходящего водителя, посмотреть предлагаемые услуги и сразу позвонить.',
            features: [
              'Перевозка автомобилей',
              'Запуск двигателя (прикуривание)',
              'Доставка топлива',
              'Открытие двери автомобиля',
              'Междугородняя перевозка',
              'Перевозка тяжёлой техники',
              'Услуга манипулятора',
              'Свободные маршруты'
            ],
            ctaLabel: 'Перейти на Evakuators.am',
            href: 'https://evakuators.am'
          },
          {
            id: 'invitations',
            title: 'Индивидуальные онлайн-приглашения',
            tagline: 'Для любого мероприятия — в своём стиле',
            description: 'Мы создаём современные и полностью индивидуальные онлайн-приглашения для различных мероприятий. Каждое приглашение создаётся специально под конкретное событие, с сохранением предпочитаемого стиля, цветов и настроения заказчика.',
            features: [
              'Полностью индивидуальный дизайн',
              'Дата и время мероприятия',
              'Карта места проведения',
              'Таймер обратного отсчёта',
              'Раздел фото и видео',
              'Подтверждение участия гостей',
              'Лёгкое распространение через WhatsApp и соцсети',
              'QR-код'
            ],
            ctaLabel: 'Заказать приглашение'
          }
        ]
      },
      capabilities: {
        eyebrow: 'Возможности',
        title: 'Что я могу создать для вас',
        items: [
          'Бизнес-сайты',
          'SaaS-платформы',
          'Цифровые визитки',
          'Онлайн-приглашения',
          'QR-системы',
          'Индивидуальные веб-решения',
          'Системы управления бизнесом',
          'Профессиональные презентационные страницы',
          'Многоязычные сайты',
          'Платформы, оптимизированные под SEO'
        ]
      },
      why: {
        eyebrow: 'Преимущества',
        title: 'Почему стоит работать со мной',
        items: [
          { title: 'Индивидуальный подход', description: 'Каждый проект создаётся в соответствии с целями и стилем конкретного бизнеса.' },
          { title: 'Современный дизайн', description: 'Дизайн строится на простых, чистых и профессиональных принципах.' },
          { title: 'Быстрая и удобная работа', description: 'Сайты адаптируются под телефоны, планшеты и компьютеры.' },
          { title: 'Долгосрочное развитие', description: 'Проекты создаются так, чтобы в дальнейшем можно было добавлять новые возможности и расширять систему.' }
        ]
      },
      finalCta: {
        eyebrow: 'Начнём',
        title: 'Давайте создадим ваш следующий проект',
        body: 'Если у вас есть идея, бизнес или услуга, и вы хотите представить их современно и профессионально, свяжитесь со мной.',
        discuss: 'Обсудить проект',
        whatsapp: 'Написать в WhatsApp',
        call: 'Позвонить'
      },
      footer: {
        tagline: 'Создание и развитие цифровых проектов'
      }
    }
  }
}
