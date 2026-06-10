/* ═══════════════════════════════════════
   REGIONS & PRICES
═══════════════════════════════════════ */
const regions = {
  eu: {
    flag: '🇪🇺', code: 'EUR', symbol: '€',
    label: { en: 'Europe',       ru: 'Европа' },
    format: v => `${v} €`,
    prices: {
      // Thai massage
      thai_feet: 20,  thai_face: 20,  thai_body: 50,
      // Yoga — packages: ×5 −10%, ×10 −15%, monthly(4) −15%
      yoga_single: 50, yoga_pack5: 225, yoga_pack10: 425, yoga_monthly: 170,
      // Ayurveda / advisory
      ayur_initial: 70, ayur_followup: 40, ayur_pack4: 147, ayur_pack8: 280,
      somat_initial: 70, somat_followup: 40, somat_pack4: 147, somat_pack8: 280,
      integ_initial: 70, integ_followup: 50, integ_pack4: 147, integ_pack8: 280,
    },
  },
  ru: {
    flag: '🇷🇺', code: 'RUB', symbol: '₽',
    label: { en: 'Russia',       ru: 'Россия' },
    format: v => `${v.toLocaleString('ru-RU')} ₽`,
    prices: {
      thai_feet: 500,  thai_face: 500,  thai_body: 3000,
      yoga_single: 2000, yoga_pack5: 9000, yoga_pack10: 17000, yoga_monthly: 6800,
      ayur_initial: 5500, ayur_followup: 3000, ayur_pack4: 11040, ayur_pack8: 20850,
      somat_initial: 5500, somat_followup: 3000, somat_pack4: 11040, somat_pack8: 20850,
      integ_initial: 5500, integ_followup: 3750, integ_pack4: 11040, integ_pack8: 20850,
    },
  },
  us: {
    flag: '🇺🇸', code: 'USD', symbol: '$',
    label: { en: 'USA',          ru: 'США' },
    format: v => `$${v}`,
    prices: {
      thai_feet: 25,  thai_face: 25,  thai_body: 70,
      yoga_single: 60, yoga_pack5: 270, yoga_pack10: 510, yoga_monthly: 200,
      ayur_initial: 190, ayur_followup: 110, ayur_pack4: 405, ayur_pack8: 765,
      somat_initial: 190, somat_followup: 110, somat_pack4: 405, somat_pack8: 765,
      integ_initial: 190, integ_followup: 140, integ_pack4: 405, integ_pack8: 765,
    },
  },
  gb: {
    flag: '🇬🇧', code: 'GBP', symbol: '£',
    label: { en: 'UK',           ru: 'Великобритания' },
    format: v => `£${v}`,
    prices: {
      thai_feet: 90,  thai_face: 90,  thai_body: 90,
      yoga_single: 80, yoga_pack5: 360, yoga_pack10: 680, yoga_monthly: 270,
      ayur_initial: 70, ayur_followup: 50, ayur_pack4: 185, ayur_pack8: 350,
      somat_initial: 70, somat_followup: 50, somat_pack4: 185, somat_pack8: 350,
      integ_initial: 70, integ_followup: 65, integ_pack4: 185, integ_pack8: 350,
    },
  },
  ae: {
    flag: '🇦🇪', code: 'AED', symbol: 'AED',
    label: { en: 'UAE',          ru: 'ОАЭ' },
    format: v => `${v} AED`,
    prices: {
      thai_feet: 75,  thai_face: 75,  thai_body: 200,
      yoga_single: 200, yoga_pack5: 900, yoga_pack10: 1700, yoga_monthly: 680,
      ayur_initial: 260, ayur_followup: 150, ayur_pack4: 540, ayur_pack8: 1020,
      somat_initial: 260, somat_followup: 150, somat_pack4: 540, somat_pack8: 1020,
      integ_initial: 260, integ_followup: 190, integ_pack4: 540, integ_pack8: 1020,
    },
  },
  ch: {
    flag: '🇨🇭', code: 'CHF', symbol: 'CHF',
    label: { en: 'Switzerland',  ru: 'Швейцария' },
    format: v => `CHF ${v}`,
    prices: {
      thai_feet: 50,  thai_face: 50,  thai_body: 140,
      yoga_single: 160, yoga_pack5: 720, yoga_pack10: 1360, yoga_monthly: 540,
      ayur_initial: 180, ayur_followup: 110, ayur_pack4: 405, ayur_pack8: 765,
      somat_initial: 180, somat_followup: 110, somat_pack4: 405, somat_pack8: 765,
      integ_initial: 180, integ_followup: 140, integ_pack4: 405, integ_pack8: 765,
    },
  },
  au: {
    flag: '🇦🇺', code: 'AUD', symbol: 'A$',
    label: { en: 'Australia',    ru: 'Австралия' },
    format: v => `A$${v}`,
    prices: {
      thai_feet: 140, thai_face: 140, thai_body: 150,
      yoga_single: 140, yoga_pack5: 630, yoga_pack10: 1190, yoga_monthly: 475,
      ayur_initial: 190, ayur_followup: 110, ayur_pack4: 405, ayur_pack8: 765,
      somat_initial: 190, somat_followup: 110, somat_pack4: 405, somat_pack8: 765,
      integ_initial: 190, integ_followup: 140, integ_pack4: 405, integ_pack8: 765,
    },
  },
  nz: {
    flag: '🇳🇿', code: 'NZD', symbol: 'NZ$',
    label: { en: 'New Zealand',  ru: 'Новая Зеландия' },
    format: v => `NZ$${v}`,
    prices: {
      thai_feet: 35,  thai_face: 35,  thai_body: 90,
      yoga_single: 90, yoga_pack5: 405, yoga_pack10: 765, yoga_monthly: 305,
      ayur_initial: 130, ayur_followup: 75, ayur_pack4: 270, ayur_pack8: 510,
      somat_initial: 130, somat_followup: 75, somat_pack4: 270, somat_pack8: 510,
      integ_initial: 130, integ_followup: 95, integ_pack4: 270, integ_pack8: 510,
    },
  },
};

// Minimum "from" price keys per service
const serviceMin = { thai: 'thai_feet', yoga: 'yoga_single', ayur: 'ayur_followup', somat: 'somat_followup', integ: 'integ_followup' };

/* ═══════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════ */
const t = {
  en: {
    your_name:        "Kseniia Salenko",
    nav_services:     "Services",
    nav_pricing:      "Pricing",
    nav_reviews:      "Reviews",
    nav_faq:          "FAQ",
    nav_book:         "Book a Session",

    hero_eyebrow:     "Thai Massage · Yoga · Ayurveda",
    hero_title:       "Healing that fits<br><em>your</em> body and life.",
    hero_desc:        "Individual sessions rooted in authentic Thai, yoga and Ayurvedic traditions — tailored to your goals, your pace, your needs.",
    hero_cta:         "Book a Session",
    hero_learn:       "Explore services",
    trust_1:          "Certified practitioner",
    trust_2:          "Yoga Studies Institute, 2024–2025",
    trust_3:          "Individual approach",
    trust_4:          "Jai Yoga & Ayurveda, 2024",
    photo_hint:       "Your photo here",

    about_label:      "About Me",
    about_title:      "My path to healing",
    about_p1:         "My path into body-centred practice began with my own experience — burnout, chronic tension, a feeling that my body and mind were living on different planets. Traditional Thai massage was the first thing that actually helped me reconnect. I trained in Greece under a teacher with over 23 years of experience, and never looked back.",
    about_p2:         "Today I work at the intersection of Thai massage, yoga, Ayurveda, and somatic energy practices — traditions that share one understanding: the body holds what the mind tries to forget. From Tibetan yoga and the Yoga Sutras to Ayurvedic wisdom and somatic energy work, everything I offer is shaped by one intention: a return to yourself.",
    cert_1:           "Traditional Thai Massage — Greece (teacher with 23+ years of experience)",
    cert_2:           "Yoga Studies Institute — Song of the Inner Wind · Lady Niguma Programme (2025)",
    cert_3:           "Yoga Studies Institute — Yoga Sutra Chapter 2 (2025)",
    cert_4:           "Yoga Studies Institute — Yoga Sutra Chapter 1 (2024)",
    cert_5:           "Jai Yoga and Ayurveda — 200hr Holistic Yoga, Ayurveda & Shamanism Teacher Training (2024)",
    cert_6:           "Acupressure, Meridians & Traditional Chinese Medicine (2025)",
    cert_7:           "Wudang Mountains Tao Temple — Internal Arts & Qigong, China (2026)",
    about_cta:        "Book a consultation",
    stat_years:       "years of practice",
    stat_clients:     "clients helped",
    stat_reviews:     "5-star reviews",
    stat_modalities:  "healing modalities",

    services_label:   "What I Offer",
    services_title:   "Services",
    s1_title:         "Thai Massage",
    s1_desc:          "Traditional Thai bodywork combining acupressure, assisted yoga stretches and energy line work — done fully clothed, no oils. Releases deep tension, restores circulation and energy flow.",
    s1_b1:            "Full-body energy balancing",
    s1_b2:            "Deep muscle tension release",
    s1_b3:            "Improved flexibility & posture",
    s1_b4:            "Effective for chronic back & neck pain",
    s1_from:          "from",
    s2_title:         "Yoga Sessions",
    s2_desc:          "One-on-one yoga practice shaped entirely around you — your body, your level, your goals. Whether you need gentle restoration or an active flow, each session is different.",
    s2_b1:            "Ayur Yoga — movement aligned with your Ayurvedic constitution",
    s2_b2:            "Lady Niguma Yoga — Tibetan yoga tradition",
    s2_b3:            "Restorative Yoga — deep rest & nervous system support",
    s2_b4:            "Breathwork (pranayama) included",
    s3_title:         "Ayurveda Therapy",
    s3_desc:          "An integrated approach combining yoga assessment and Ayurvedic wisdom. The initial consultation identifies the root causes of imbalance; follow-up sessions guide you step by step towards lasting change.",
    s3_b1:            "Initial assessment — yoga & Ayurveda",
    s3_b2:            "Identifying root causes of imbalance",
    s3_b3:            "Ongoing follow-up & mentoring sessions",
    s3_b4:            "Personalised diet, routine & lifestyle plan",
    s4_title:         "Energy & Somatic Practices",
    s4_desc:          "Work through mindfulness, breath and visualization to reconnect mind and body — releasing stress and emotional patterns stored in the body. Each session guides you to sense and listen to your body more deeply, building an inner practice you can return to between sessions.",
    s4_b1:            "Regulates the nervous system",
    s4_b2:            "Releases stress & patterns stored in the body",
    s4_b3:            "Supports emotional clarity & resilience",
    s4_b4:            "No prior experience needed",
    s5_title:         "Integrative Programme",
    s5_desc:          "When one method isn't enough. I combine Thai massage, yoga, Ayurveda and somatic practices — drawing on whatever serves your body most right now. Each session is shaped around you, not a fixed protocol.",
    s5_b1:            "Tailored to your body's current needs",
    s5_b2:            "Combines 2–4 modalities in one session",
    s5_b3:            "Works on physical, mental & energetic levels",
    s5_b4:            "Ideal for complex or long-standing conditions",
    badge_popular:    "Most Popular",
    see_all_prices:   "see all prices →",
    fmt_online_only:  "💻 Online only",
    fmt_inperson_only:"📍 In-person only",
    fmt_both:         "💻 Online · 📍 In-person",

    how_label:        "Simple Process",
    how_title:        "How It Works",
    how_s1_title:     "Book online",
    how_s1_desc:      "Choose your service and pick a time that works for you using the booking calendar. You'll receive a confirmation immediately.",
    how_s2_title:     "Short intake chat",
    how_s2_desc:      "Before your first session we have a brief conversation about your health, goals and what you're looking for. No forms, no paperwork.",
    how_s3_title:     "Your session",
    how_s3_desc:      "Arrive, relax, and let the work happen. Every session is adjusted in real time to what your body needs that day.",

    pricing_label:    "Transparent Pricing",
    pricing_title:    "Rates",
    prices_shown_in:  "Prices shown in",
    p_feet:           "Foot massage with acupressure (30 min)",
    p_face:           "Face massage (30 min)",
    p_body_90:        "Full body Thai massage (90 min)",
    p_single:         "Individual hatha yoga (75 min)",
    p_pack5:          "Package × 5 sessions",
    p_pack10:         "Package × 10 sessions",
    p_monthly:        "Monthly — 4 sessions",
    p_initial:        "Initial consultation",
    p_followup:       "Follow-up consultation",
    p_pack4:          "Package × 4 sessions",
    p_pack8:          "Package × 8 sessions",
    btn_book_now:     "Book Now",
    pricing_note:     "Prices include all materials. Home visits available within the city for an additional travel fee. Packages valid for 3 months.",

    faq_label:        "Questions & Answers",
    faq_title:        "FAQ",
    faq_q1:           "Do I need to undress for Thai massage?",
    faq_a1:           "No. Traditional Thai massage is performed fully clothed — no oils, no undressing. Please come in comfortable clothes: trousers that are not too wide or too tight, and a t-shirt or light sweatshirt. This is one of the key differences from European massage styles.",
    faq_q2:           "I've never done yoga before. Can I start with a private session?",
    faq_a2:           "Absolutely — private sessions are actually the ideal place to start. We go at your pace, I can explain everything clearly, and there's no pressure to keep up with a group. Many of my long-term clients started with zero experience.",
    faq_q3:           "What is Ayurveda and what does a consultation involve?",
    faq_a3:           "Ayurveda is a 5,000-year-old system of medicine from India that looks at your unique constitutional type (dosha). A consultation involves a conversation about your health, lifestyle, digestion and sleep, followed by personalised recommendations.",
    faq_q4:           "How often should I book sessions?",
    faq_a4:           "For general wellbeing and stress relief, once every 2–4 weeks works well. If you're dealing with chronic pain or a specific health goal, a course of weekly sessions over 4–6 weeks tends to bring the most lasting change.",
    faq_q5:           "Do you offer sessions at my home?",
    faq_a5:           "Yes. I offer home visits within the city. A travel fee applies depending on distance. For Thai massage I bring a mat; for yoga and Ayurveda I bring all necessary materials. Please mention your location when booking.",
    faq_q6:           "What is your cancellation policy?",
    faq_a6:           "I ask for at least 24 hours notice to cancel or reschedule. Late cancellations may be charged at 50% of the session fee. I understand that life happens — please just let me know as early as possible.",

    reviews_label:    "Client Stories",
    reviews_title:    "What People Say",
    reviews_count:    "5.0 · 47 reviews",
    r1_text:          '"Kseniia\'s massage is one of a kind. Her energy and love in her gift to heal the body and mind was felt throughout the session. Her powerful intuition helped heal my body in areas I needed in a way I didn\'t know was possible. I highly recommend her to anyone."',
    r2_text:          '"It was fascinating to watch the body respond — points that felt blocked gradually softened. It became a practice of relaxation, concentration and breath all at once. Afterwards I felt a lightness I hadn\'t felt before. Even one session renewed and filled me with energy. It was wonderful."',
    r3_text:          '"I came with no idea what to expect — just trust in Kseniia. Alongside the energy work, I received answers to my questions with an individual approach drawing on Ayurveda and psychology. She has a gift for reading exactly what you need in each moment. Highly recommend."',
    r4_text:          '"Kseniia created the space for me to fully trust and open up. The massage became an inward journey — she guided my awareness to each part of the body as she worked. Thanks to the therapy throughout the retreat, I felt no back discomfort for a long time after."',
    r5_text:          '"I had the joy of experiencing one of Kseniia\'s massages — exactly what I needed at the right time. She knew right away which areas needed attention and what was causing my pains. The massage was highly effective. The next day I literally felt like a new born! I wholeheartedly recommend Kseniia."',
    r6_text:          '"Every morning I do the practice Kseniia gave me. Even before I open my eyes, my body already remembers it. Lightness, inspiration and joy begin to appear — exactly what was missing. So grateful — it works even when it\'s hard to help yourself."',
    r7_text:          '"I had no idea yoga could be tailored to your body type until I tried Ayur Yoga with Kseniia. Every movement actually makes sense for how my body is built. I leave each session feeling lighter and clearer than when I arrived."',
    r8_text:          '"Lady Niguma yoga is unlike anything I\'ve practiced before. There\'s a stillness in it I don\'t find anywhere else. Kseniia holds the session with such care — it feels less like exercise and more like coming home to yourself."',
    r9_text:          '"I came completely burnt out — not sure yoga could help. The restorative sessions and breathwork literally reset my nervous system. After a few weeks I was sleeping properly for the first time in months. I didn\'t expect that at all."',

    booking_label:    "Reserve Your Spot",
    booking_title:    "Book a Session",
    booking_desc:     "Choose a time directly in my calendar — it syncs with Google Calendar automatically.",
    discovery_label:  "Not sure where to start?",
    discovery_text:   "Book a free 20-minute call — tell me what's going on, and I'll suggest the right approach for you.",
    discovery_cta:    "Book a free call →",
    cal_title:        "Online Booking Calendar",
    cal_hint:         "Connect your Calendly or SimplyBook account to display live availability here. Your Google Calendar syncs automatically.",
    cal_setup_btn:    "Set up Calendly (free)",
    contact_title:    "Or get in touch directly",
    contact_ru_hint:  "SMS · Telegram",
    contact_online:   "Online · Worldwide · In-person sessions at my current location",
    contact_hours:    "Mon–Sat · 9:00–20:00",
    form_intro:       "Can't find a good time? Send me a message:",
    form_name:        "Name",
    form_email:       "Email or phone",
    form_msg:         "What are you looking for?",
    form_send:        "Send Message",
    form_sent:        "Message sent! I'll reply within 24 hours.",

    // Region dropdown labels
    eu_label: "Europe", ru_label: "Russia",       us_label: "USA",
    gb_label: "UK",     ae_label: "UAE",
    ch_label: "Switzerland", au_label: "Australia", nz_label: "New Zealand",

    // Cookie banner
    cookie_text:    "This site uses cookies for analytics to understand how visitors use it. No personal data is sold or shared.",
    cookie_accept:  "Accept cookies",
    cookie_decline: "Decline",

    footer_tagline:   "Thai Massage · Yoga · Ayurveda",
    footer_copy:      "© 2026 Kseniia Salenko. All rights reserved.",
  },

  ru: {
    your_name:        "Ксения Саленко",
    nav_services:     "Услуги",
    nav_pricing:      "Цены",
    nav_reviews:      "Отзывы",
    nav_faq:          "Вопросы",
    nav_book:         "Записаться",

    hero_eyebrow:     "Тайский массаж · Йога · Аюрведа",
    hero_title:       "Оздоровление, которое подходит<br><em>именно вашему</em> телу.",
    hero_desc:        "Индивидуальные сессии, основанные на традициях тайского массажа, йоги и аюрведы — выстроенные под ваши цели, ваш ритм, ваши потребности.",
    hero_cta:         "Записаться на сессию",
    hero_learn:       "Узнать об услугах",
    trust_1:          "Сертифицированный практик",
    trust_2:          "Yoga Studies Institute, 2024–2025",
    trust_3:          "Индивидуальный подход",
    trust_4:          "Jai Yoga & Ayurveda, 2024",
    photo_hint:       "Ваше фото",

    about_label:      "Обо мне",
    about_title:      "Мой путь к здоровью",
    about_p1:         "Мой путь к телесным практикам начался с собственного опыта — хроническое напряжение, выгорание, ощущение, что тело и ум живут в разных мирах. Традиционный тайский массаж стал первым, что помогло мне восстановить эту связь. Я обучалась в Греции у практика с более чем 23-летним опытом — и уже не оглядывалась назад.",
    about_p2:         "Сегодня я работаю на пересечении тайского массажа, йоги, аюрведы и энергосоматических практик — традиций, разделяющих одно понимание: тело хранит то, что ум пытается забыть. От тибетской йоги и Йога-сутр до аюрведической мудрости и соматических практик — всё, что я предлагаю, направлено на одно: возвращение к себе.",
    cert_1:           "Традиционный тайский массаж — Греция (преподаватель с 23-летним опытом)",
    cert_2:           "Yoga Studies Institute — Song of the Inner Wind · Программа Леди Нигумы (2025)",
    cert_3:           "Yoga Studies Institute — Йога-сутры, глава 2 (2025)",
    cert_4:           "Yoga Studies Institute — Йога-сутры, глава 1 (2024)",
    cert_5:           "Jai Yoga and Ayurveda — 200ч Холистическая йога, аюрведа и шаманизм (2024)",
    cert_6:           "Акупрессура, меридианы и традиционная китайская медицина (2025)",
    cert_7:           "Горы Удан, Храм Дао — внутренние практики и цигун, Китай (2026)",
    about_cta:        "Записаться на консультацию",
    stat_years:       "лет практики",
    stat_clients:     "клиентов",
    stat_reviews:     "отзывов на 5 звёзд",
    stat_modalities:  "направления",

    services_label:   "Что я предлагаю",
    services_title:   "Услуги",
    s1_title:         "Тайский массаж",
    s1_desc:          "Традиционный тайский массаж: акупрессура, йога-растяжки и работа с энергетическими линиями — выполняется в одежде, без масел. Снимает глубокое напряжение, восстанавливает циркуляцию и поток энергии.",
    s1_b1:            "Балансировка энергии всего тела",
    s1_b2:            "Глубокое снятие мышечного напряжения",
    s1_b3:            "Улучшение гибкости и осанки",
    s1_b4:            "Эффективно при хронических болях в спине",
    s1_from:          "от",
    s2_title:         "Йога",
    s2_desc:          "Индивидуальные занятия йогой, выстроенные полностью под вас — ваше тело, ваш уровень, ваши цели. Каждая практика разная: мягкое восстановление или активный поток — как вам нужно.",
    s2_b1:            "Аюр-йога — движение в соответствии с аюрведической конституцией",
    s2_b2:            "Йога Леди Нигумы — тибетская традиция",
    s2_b3:            "Восстановительная йога — глубокий отдых и поддержка нервной системы",
    s2_b4:            "Пранаяма — дыхательные практики",
    s3_title:         "Аюрведа",
    s3_desc:          "Интегративный подход, объединяющий йога-диагностику и аюрведическую мудрость. Первичная консультация выявляет корневые причины дисбаланса — последующие сессии ведут к устойчивым переменам.",
    s3_b1:            "Первичная оценка — йога и аюрведа",
    s3_b2:            "Выявление причин дисбаланса",
    s3_b3:            "Регулярные сессии сопровождения",
    s3_b4:            "Индивидуальный план питания, режима и образа жизни",
    s4_title:         "Энергосоматические практики",
    s4_desc:          "Работа через осознанность, ощущение своего тела и визуализации — для того чтобы восстановить связь ума и тела и освободиться от накопленного напряжения и эмоциональных паттернов. Каждая сессия учит слышать своё тело глубже, создавая внутреннюю практику, к которой можно возвращаться между встречами.",
    s4_b1:            "Регуляция нервной системы",
    s4_b2:            "Освобождение стресса и телесных паттернов",
    s4_b3:            "Эмоциональная ясность и устойчивость",
    s4_b4:            "Опыт не требуется",
    s5_title:         "Интегративная программа",
    s5_desc:          "Когда одного метода недостаточно. Я сочетаю тайский массаж, йогу, аюрведу и энергосоматические практики — то, что больше всего нужно вашему телу прямо сейчас. Каждая сессия выстраивается под вас, а не под фиксированный протокол.",
    s5_b1:            "Подбирается под текущее состояние тела",
    s5_b2:            "Сочетает 2–4 направления в одной сессии",
    s5_b3:            "Работа на физическом, ментальном и энергетическом уровнях",
    s5_b4:            "Идеально для комплексных и хронических состояний",
    badge_popular:    "Самое популярное",
    see_all_prices:   "все цены →",
    fmt_online_only:  "💻 Только онлайн",
    fmt_inperson_only:"📍 Только офлайн",
    fmt_both:         "💻 Онлайн · 📍 Офлайн",

    how_label:        "Простой процесс",
    how_title:        "Как это работает",
    how_s1_title:     "Запись онлайн",
    how_s1_desc:      "Выберите услугу и удобное время в календаре. Подтверждение придёт сразу же.",
    how_s2_title:     "Короткая беседа",
    how_s2_desc:      "Перед первой сессией мы поговорим о вашем здоровье, целях и ожиданиях. Без форм и бумаг.",
    how_s3_title:     "Ваша сессия",
    how_s3_desc:      "Приходите, расслабляйтесь. Каждая сессия подстраивается в реальном времени под то, что нужно вашему телу именно сейчас.",

    pricing_label:    "Прозрачные цены",
    pricing_title:    "Стоимость",
    prices_shown_in:  "Цены указаны в",
    p_feet:           "Массаж стоп с акупрессурой (30 мин)",
    p_face:           "Массаж лица (30 мин)",
    p_body_90:        "Тайский массаж всего тела (90 мин)",
    p_single:         "Индивидуальное занятие хатха-йогой (75 мин)",
    p_pack5:          "Абонемент × 5 занятий",
    p_pack10:         "Абонемент × 10 занятий",
    p_monthly:        "Месячный абонемент — 4 занятия",
    p_initial:        "Первичная консультация",
    p_followup:       "Сопровождение (повторные консультации)",
    p_pack4:          "Пакет × 4 сессии",
    p_pack8:          "Пакет × 8 сессий",
    btn_book_now:     "Записаться",
    pricing_note:     "В стоимость включены все материалы. Выезд на дом — возможен, стоимость зависит от расстояния. Абонементы действуют 3 месяца.",

    faq_label:        "Вопросы и ответы",
    faq_title:        "FAQ",
    faq_q1:           "Нужно ли раздеваться для тайского массажа?",
    faq_a1:           "Нет. Тайский массаж выполняется в одежде — без масел и раздевания. Пожалуйста, приходите в удобных штанах — не слишком широких и не слишком обтягивающих — и футболке или лёгкой кофте. Это одно из главных отличий от европейского массажа.",
    faq_q2:           "Я никогда не занималась йогой. Могу начать с индивидуального занятия?",
    faq_a2:           "Конечно — индивидуальные занятия идеальны для начала. Мы идём в вашем темпе, я объясняю всё подробно, не нужно успевать за группой. Многие мои постоянные клиенты начинали с нуля.",
    faq_q3:           "Что такое аюрведа и что происходит на консультации?",
    faq_a3:           "Аюрведа — это 5000-летняя индийская система медицины, основанная на вашем конституциональном типе (доше). Консультация — это разговор о здоровье, образе жизни, пищеварении и сне, после которого вы получаете персональные рекомендации.",
    faq_q4:           "Как часто нужно записываться?",
    faq_a4:           "Для общего самочувствия и снятия стресса — раз в 2–4 недели. При хронических болях или конкретных задачах курс из еженедельных сессий в течение 4–6 недель даёт наиболее устойчивый результат.",
    faq_q5:           "Вы приезжаете на дом?",
    faq_a5:           "Да, в пределах города. Стоимость выезда зависит от расстояния. Для тайского массажа привожу мат, для йоги и аюрведы — все необходимые материалы. Укажите адрес при записи.",
    faq_q6:           "Какова политика отмены?",
    faq_a6:           "Прошу предупреждать об отмене или переносе не менее чем за 24 часа. При позднем отказе может взиматься 50% стоимости сессии. Я понимаю, что бывают разные ситуации — главное предупредить как можно раньше.",

    reviews_label:    "Истории клиентов",
    reviews_title:    "Отзывы",
    reviews_count:    "5.0 · 47 отзывов",
    r1_text:          '"Массаж Ксении — нечто особенное. Её энергия и любовь к своему делу ощущались на протяжении всей сессии. Её интуиция помогла исцелить именно те зоны, о которых я даже не подозревала. Горячо рекомендую."',
    r2_text:          '"Было интересно наблюдать, как тело откликается — точки, казавшиеся непроходимыми, постепенно становились податливее. Получилась ценная практика расслабления, концентрации и дыхания. В конце я чувствовала особенную лёгкость. Даже один сеанс обновил и наполнил энергией. Это было прекрасно!"',
    r3_text:          '"Пришла без малейшего понятия, что меня ждёт — просто на доверии к Ксении. Помимо энергетической работы получила ответы на свои вопросы с индивидуальным подходом: аюрведа, психология. Ксения тонко чувствует запрос и состояние. Рекомендую — очень информативно и продуктивно!"',
    r4_text:          '"Ксения создала условия для полного доверия и открытости. Массаж стал путешествием внутрь — она направляла внимание к тем частям тела, с которыми работала. Благодаря терапии на протяжении всего ретрита я долго после не чувствовала дискомфорта в спине."',
    r5_text:          '"Мне выпала радость пережить сеанс у Ксении — именно то, что мне было нужно в нужный момент. Она сразу определила зоны, требующие внимания, и причину болей. Массаж оказался очень эффективным. На следующий день я буквально чувствовала себя заново рождённой! Искренне рекомендую."',
    r6_text:          '"Каждое утро делаю практику, которую дала Ксения. Уже с закрытыми глазами тело само её вспоминает. Появляются лёгкость, вдохновение и радость — то, чего так не хватало. Очень благодарна — работает даже тогда, когда сложно помочь себе самой."',
    r7_text:          '"Не знала, что йогу можно подстроить под тип своего тела, пока не попала на аюр-йогу к Ксении. Каждое движение действительно соответствует тому, как устроено моё тело. После каждого занятия выхожу с ощущением лёгкости и ясности."',
    r8_text:          '"Йога Леди Нигумы — ни на что не похожа из того, что я практиковала раньше. В ней есть тишина, которой нет в обычных классах. Ксения ведёт занятие с такой бережностью — это ощущается не как тренировка, а как возвращение к себе."',
    r9_text:          '"Пришла в полном выгорании — не верила, что йога поможет. Восстановительные занятия и пранаяма буквально перезапустили нервную систему. Через несколько недель начала нормально спать впервые за месяцы. Не ожидала такого результата."',

    booking_label:    "Забронируйте место",
    booking_title:    "Записаться",
    booking_desc:     "Выберите время прямо в моём календаре — он синхронизируется с Google Calendar автоматически.",
    discovery_label:  "Не знаешь с чего начать?",
    discovery_text:   "Запишись на бесплатный 20-минутный звонок — расскажи о своём запросе, и я предложу подходящий формат работы.",
    discovery_cta:    "Записаться на бесплатный звонок →",
    cal_title:        "Онлайн-запись",
    cal_hint:         "Подключите Calendly или SimplyBook, чтобы показывать свободные слоты прямо здесь. Синхронизация с Google Calendar происходит автоматически.",
    cal_setup_btn:    "Настроить Calendly (бесплатно)",
    contact_title:    "Или напишите напрямую",
    contact_ru_hint:  "SMS · Telegram",
    contact_online:   "Онлайн · По всему миру · Офлайн-сессии — по месту моего пребывания",
    contact_hours:    "Пн–Сб · 9:00–20:00",
    form_intro:       "Не нашли удобное время? Напишите мне:",
    form_name:        "Имя",
    form_email:       "Email или телефон",
    form_msg:         "Что вас интересует?",
    form_send:        "Отправить сообщение",
    form_sent:        "Сообщение отправлено! Отвечу в течение 24 часов.",

    // Region dropdown labels
    eu_label: "Европа", ru_label: "Россия",       us_label: "США",
    gb_label: "Великобритания", ae_label: "ОАЭ",
    ch_label: "Швейцария", au_label: "Австралия", nz_label: "Новая Зеландия",

    // Cookie banner
    cookie_text:    "Этот сайт использует cookies для аналитики — чтобы понять, как посетители им пользуются. Личные данные не продаются и не передаются третьим лицам.",
    cookie_accept:  "Принять cookies",
    cookie_decline: "Отказаться",

    footer_tagline:   "Тайский массаж · Йога · Аюрведа",
    footer_copy:      "© 2026 Ксения Саленко. Все права защищены.",
  },
};

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
let currentLang   = localStorage.getItem('lang')   || 'en';
let currentRegion = localStorage.getItem('region') || 'eu';

/* ═══════════════════════════════════════
   APPLY REGION
═══════════════════════════════════════ */
function applyRegion(regionKey, animate = true) {
  const r = regions[regionKey];
  if (!r) return;

  currentRegion = regionKey;
  localStorage.setItem('region', regionKey);

  // Animate price elements out → update → in
  const priceEls = [
    ...document.querySelectorAll('[data-price]'),
    ...document.querySelectorAll('[data-price-min]'),
  ];

  if (animate) {
    priceEls.forEach(el => el.classList.add('updating'));
  }

  const doUpdate = () => {
    // Update data-price elements (pricing table)
    document.querySelectorAll('[data-price]').forEach(el => {
      const key = el.getAttribute('data-price');
      if (r.prices[key] !== undefined) {
        el.textContent = r.format(r.prices[key]);
      }
    });

    // Update data-price-min elements (service cards "from X")
    document.querySelectorAll('[data-price-min]').forEach(el => {
      const svc = el.getAttribute('data-price-min');
      const minKey = serviceMin[svc];
      if (minKey && r.prices[minKey] !== undefined) {
        el.textContent = r.format(r.prices[minKey]);
      }
    });

    // Update nav button
    document.getElementById('regionFlag').textContent = r.flag;
    document.getElementById('regionCode').textContent = r.code;

    // Update pricing section badge
    const badgeFlag = document.getElementById('badgeFlag');
    const badgeCurrency = document.getElementById('badgeCurrency');
    if (badgeFlag) badgeFlag.textContent = r.flag;
    if (badgeCurrency) badgeCurrency.textContent = `${r.code} ${r.symbol}`;

    // WhatsApp vs Russian phone
    const waEl   = document.getElementById('contactWhatsApp');
    const ruEl   = document.getElementById('contactRuPhone');
    if (waEl) waEl.style.display = regionKey === 'ru' ? 'none' : '';
    if (ruEl) ruEl.style.display = regionKey === 'ru' ? ''     : 'none';

    // Mark active option in dropdown
    document.querySelectorAll('.region-opt').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.region === regionKey);
      opt.setAttribute('aria-selected', String(opt.dataset.region === regionKey));
    });

    // Update region label text in dropdown (for current language)
    document.querySelectorAll('[data-rt]').forEach(el => {
      const key = el.getAttribute('data-rt');
      if (t[currentLang][key]) el.textContent = t[currentLang][key];
    });

    if (animate) {
      priceEls.forEach(el => el.classList.remove('updating'));
    }
  };

  if (animate) {
    setTimeout(doUpdate, 200);
  } else {
    doUpdate();
  }
}

/* ═══════════════════════════════════════
   APPLY LANGUAGE
═══════════════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const strings = t[lang];

  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (!strings[key]) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = strings[key];
    } else {
      el.innerHTML = strings[key];
    }
  });

  // Sync region dropdown labels to new language
  document.querySelectorAll('[data-rt]').forEach(el => {
    const key = el.getAttribute('data-rt');
    if (strings[key]) el.textContent = strings[key];
  });

  // Page title
  document.title = lang === 'ru'
    ? 'Ксения Саленко — Тайский массаж, йога и аюрведа'
    : 'Kseniia Salenko — Thai Massage, Yoga & Ayurveda';

  // Lang button shows opposite language
  document.getElementById('langBtn').textContent = lang === 'en' ? 'RU' : 'EN';

  // Switch Instagram link and show/hide social icons based on language
  const igLink = document.getElementById('socialInstagram');
  if (igLink) {
    igLink.href = lang === 'ru'
      ? 'https://www.instagram.com/ksenia_salenko/'
      : 'https://www.instagram.com/kseniiasalenko/';
  }
  document.querySelectorAll('.social-ru').forEach(el => {
    el.style.display = lang === 'ru' ? 'flex' : 'none';
  });
  document.querySelectorAll('.social-en').forEach(el => {
    el.style.display = lang === 'en' ? 'flex' : 'none';
  });

  // Auto-switch region: RU lang → RU rubles; back to EN → restore to EU if was RU
  if (lang === 'ru' && currentRegion !== 'ru') {
    applyRegion('ru');
  } else if (lang === 'en' && currentRegion === 'ru') {
    applyRegion('eu');
  }
}

/* ═══════════════════════════════════════
   REGION DROPDOWN
═══════════════════════════════════════ */
const regionBtn      = document.getElementById('regionBtn');
const regionDropdown = document.getElementById('regionDropdown');

function openRegionDropdown() {
  regionDropdown.removeAttribute('hidden');
  regionBtn.setAttribute('aria-expanded', 'true');
}
function closeRegionDropdown() {
  regionDropdown.setAttribute('hidden', '');
  regionBtn.setAttribute('aria-expanded', 'false');
}
function toggleRegionDropdown() {
  regionDropdown.hasAttribute('hidden') ? openRegionDropdown() : closeRegionDropdown();
}

regionBtn.addEventListener('click', e => {
  e.stopPropagation();
  toggleRegionDropdown();
});

regionDropdown.addEventListener('click', e => {
  const opt = e.target.closest('.region-opt');
  if (!opt) return;
  const regionKey = opt.dataset.region;

  // If user manually picks Russia → also switch language to RU
  // If user manually picks non-Russia → if language is RU, switch to EN
  applyRegion(regionKey);
  if (regionKey === 'ru' && currentLang !== 'ru') {
    applyLang('ru');
    document.getElementById('langBtn').textContent = 'EN';
  } else if (regionKey !== 'ru' && currentLang === 'ru') {
    applyLang('en');
    document.getElementById('langBtn').textContent = 'RU';
  }

  closeRegionDropdown();
});

// Close dropdown when clicking outside
document.addEventListener('click', e => {
  if (!document.getElementById('regionSelector').contains(e.target)) {
    closeRegionDropdown();
  }
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeRegionDropdown();
});

/* ═══════════════════════════════════════
   LANGUAGE SWITCH BUTTON
═══════════════════════════════════════ */
document.getElementById('langBtn').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'ru' : 'en');
});

/* ═══════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════ */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  burger.classList.remove('active');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  burger.classList.toggle('active', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  a.addEventListener('click', closeMobileMenu);
});

/* ═══════════════════════════════════════
   STICKY NAV SHADOW
═══════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ═══════════════════════════════════════
   MOBILE STICKY CTA
═══════════════════════════════════════ */
const mobileCta      = document.getElementById('mobileCta');
const bookingSection = document.getElementById('booking');

const ctaObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    mobileCta.style.opacity        = e.isIntersecting ? '0' : '1';
    mobileCta.style.pointerEvents  = e.isIntersecting ? 'none' : 'auto';
  });
}, { threshold: 0.2 });

if (bookingSection) ctaObserver.observe(bookingSection);

/* ═══════════════════════════════════════
   FAQ ACCORDION
═══════════════════════════════════════ */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer     = btn.nextElementSibling;
    const isOpen     = btn.getAttribute('aria-expanded') === 'true';
    const parentList = btn.closest('.faq-list');

    parentList.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(openBtn => {
      if (openBtn !== btn) {
        openBtn.setAttribute('aria-expanded', 'false');
        openBtn.nextElementSibling.setAttribute('hidden', '');
      }
    });

    btn.setAttribute('aria-expanded', String(!isOpen));
    if (isOpen) {
      answer.setAttribute('hidden', '');
    } else {
      answer.removeAttribute('hidden');
    }
  });
});

/* ═══════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════
   CONTACT FORM — EmailJS
   ─────────────────────────────────────
   Replace these three values with yours
   from https://www.emailjs.com:
     EMAILJS_SERVICE_ID   → Email Services → your Service ID
     EMAILJS_TEMPLATE_ID  → Email Templates → your Template ID
   (Public Key is already set in <head>)
═══════════════════════════════════════ */
const EMAILJS_SERVICE_ID  = 'service_kldbtm9';
const EMAILJS_TEMPLATE_ID = 'template_5al4bgm';

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    const nameEl    = contactForm.querySelector('#fname');
    const contactEl = contactForm.querySelector('#femail');
    const msgEl     = contactForm.querySelector('#fmsg');
    const submitBtn = contactForm.querySelector('[type="submit"]');
    const success   = document.getElementById('formSuccess');

    // Validate required fields
    let valid = true;
    [nameEl, contactEl].forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) { field.classList.add('error'); valid = false; }
    });
    if (!valid) return;

    // Disable button while sending
    submitBtn.disabled = true;
    const origText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'ru' ? 'Отправка...' : 'Sending…';

    const templateParams = {
      from_name:  nameEl.value.trim(),
      reply_to:   contactEl.value.trim(),
      message:    msgEl?.value.trim() || '',
      region:     `${regions[currentRegion].flag} ${regions[currentRegion].code}`,
      language:   currentLang.toUpperCase(),
    };

    try {
      // If EmailJS is not yet configured, fall back to mailto so nothing breaks
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        throw new Error('emailjs_not_configured');
      }
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    } catch (err) {
      if (err.message === 'emailjs_not_configured') {
        // Graceful fallback: open mailto
        const subj = encodeURIComponent(`Session inquiry — ${nameEl.value}`);
        const body = encodeURIComponent(
          `Name: ${templateParams.from_name}\nContact: ${templateParams.reply_to}\n\n${templateParams.message}`
        );
        window.location.href = `mailto:kseniia.salenko89@gmail.com?subject=${subj}&body=${body}`;
      } else {
        // Real send error — restore button so user can retry
        submitBtn.disabled = false;
        submitBtn.textContent = origText;
        console.error('EmailJS error:', err);
        return;
      }
    }

    // Success
    if (success) {
      success.removeAttribute('hidden');
      contactForm.querySelectorAll('input, textarea').forEach(f => f.value = '');
      setTimeout(() => success.setAttribute('hidden', ''), 6000);
    }
    submitBtn.disabled = false;
    submitBtn.textContent = origText;
  });
}

/* ═══════════════════════════════════════
   COOKIE BANNER
═══════════════════════════════════════ */
const cookieBanner  = document.getElementById('cookieBanner');
const cookieAccept  = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');

function loadAnalytics() {
  const s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-4SV24BFHCH';
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-4SV24BFHCH');
}

function hideCookieBanner() {
  cookieBanner.setAttribute('hidden', '');
  document.body.classList.remove('cookie-visible');
}

function showCookieBanner() {
  cookieBanner.removeAttribute('hidden');
  document.body.classList.add('cookie-visible');
  // Trigger CSS transition (needs one frame after hidden is removed)
  requestAnimationFrame(() => cookieBanner.classList.add('visible'));
}

cookieAccept?.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  hideCookieBanner();
  loadAnalytics();
});

cookieDecline?.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'declined');
  hideCookieBanner();
});

function initCookieBanner() {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    // Show banner after a short delay so page loads first
    setTimeout(showCookieBanner, 1200);
  } else if (consent === 'accepted') {
    loadAnalytics();
  }
}

/* ═══════════════════════════════════════
   INIT — apply saved or default state
═══════════════════════════════════════ */
applyRegion(currentRegion, false);
applyLang(currentLang);
initCookieBanner();

/* ═══════════════════════════════════════
   REVIEWS CAROUSEL
═══════════════════════════════════════ */
(function () {
  const track = document.querySelector('.reviews-track');
  const prev  = document.querySelector('.carousel-prev');
  const next  = document.querySelector('.carousel-next');
  if (!track || !prev || !next) return;

  function cardWidth() {
    const card = track.querySelector('.review-card');
    return card ? card.offsetWidth + 20 : 300;
  }

  prev.addEventListener('click', () => track.scrollBy({ left: -cardWidth(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left:  cardWidth(), behavior: 'smooth' }));
})();
