export type Language = "he" | "en" | "ru" | "fr"

export const languageNames: Record<Language, string> = {
  he: "עברית",
  en: "English",
  ru: "Русский",
  fr: "Français",
}

export const translations: Record<Language, Record<string, string>> = {
  he: {
    // Header
    "site.title": "בדק בית הנדסי - איתור ליקויי בניה – חוות דעת מומחה",
    "site.subtitle": "בדק בית לדירות ונכסים חדשים ויד שניה | מומחה מטעם איגוד המהנדסים ת.ז. 17253030 | רישיון משרד העבודה 1641507",
    
    // Hero
    "hero.title": "בדק בית הנדסי - איתור ליקויי בניה",
    "hero.subtitle1": "איתור ליקויי בנייה לפני רכישת דירה, קבלת דירה מקבלן ובדיקת בתים פרטיים",
    "hero.subtitle2": "חוות דעת מומחה לפני או לאחר מסירת דירה | חוות דעת משפטית | חוות דעת נגדית פנים ארגונית",
    "hero.cta": "צור קשר עכשיו",
    "hero.moreInfo": "הכרות עם ליגל בדק בית - Legal",
    "hero.trust1": "ניסיון רב-שנים בהנדסת בניין",
    "hero.trust2": "דוחות הנדסיים מקצועיים ומפורטים",
    "hero.trust3": "ציוד מדידה מתקדם",
    "hero.trust4": "שירות בכל רחבי הארץ",
    "hero.ctaPrimary": "קבלו הצעת מחיר",
    "hero.ctaSecondary": "שיחת ייעוץ ללא התחייבות",
    "hero.badge": "מומחה מוסמך · איגוד המהנדסים",
    "hero.imageAlt": "יגאל בנסקי, מומחה בדק בית מוסמך, עם קסדת מגן בעת ביצוע בדיקה הנדסית ואיתור ליקויי בנייה",
    "strip.title": "כך נראית בדיקה הנדסית מקצועית",
    "strip.subtitle": "ציוד מדידה מתקדם ותיעוד ליקויים מדויק בכל בדיקה",
    "strip.item1": "מומחה באתר הבדיקה",
    "strip.item2": "מצלמה תרמית",
    "strip.item3": "מד לחות Protimeter",
    "strip.item4": "מפלסת לייזר",
    "strip.item5": "תיעוד ליקוי בנייה",
    
    // Contact Section
    "contact.title": "צריכים בדק בית לנכס – דירה, בית פרטי או בניין?",
    "contact.subtitle": "יצירת קשר להתייעצות וקביעת בדיקה הנדסית של הנכס",
    "contact.call": "חייג/י",
    "contact.form.title": "יצירת קשר",
    
    // Peace of Mind Section
    "peace.title": "שקט נפשי וליווי מקצועי בבדיקת כל סוגי הנכסים",
    "peace.description": "רוכשי דירה יד שניה - בדק בית הנדסי מעניק לכם כלי מיקוח רב עוצמה להורדת מחיר הנכס בעשרות אלפי שקלים. רוכשי דירה חדשה - ליקויי בנייה שנמצאים בבדיקה עשויים לזכות אתכם בפיצוי כספי משמעותי מהקבלן. עם הסמכת איגוד המהנדסים ורישיון משרד העבודה, אנו מספקים דוח מקצועי מפורט שחוסך לכם כסף רב. לקבלנים - חוות דעת נגדית מקצועית להתמודדות מול חוות דעת אחרות.",
    
    // Short Notice Section
    "shortNotice.title": "בדק בית בהתראה קצרה - דירות חדשות ויד שניה",
    "shortNotice.new": "דירה חדשה:",
    "shortNotice.newDesc": "הקבלן מבקש למסור את הדירה בהתראה קצרה? אנו מספקים בדק בית הנדסי תוך ימים ספורים, כך שתקבלו את הדירה בביטחון מלא.",
    "shortNotice.used": "דירה יד שניה:",
    "shortNotice.usedDesc": "נמצאים במשא ומתן על רכישת נכס? מומחה בדק בית זמין מהיום למחר - נעזור לכם להבין את מצב הדירה האמיתי ולחסוך אלפי שקלים במשא ומתן מול המוכר.",
    
    // Target Audience
    "audience.title": "למי מיועדים שירותי בדיקת בנייה?",
    "audience.buyers": "רוכשי דירה",
    "audience.buyersDesc": "בדיקה מקיפה לפני רכישה או קבלת דירה",
    "audience.sellers": "מוכרי נכסים",
    "audience.sellersDesc": "דוח מקצועי להוכחת איכות הנכס",
    "audience.contractors": "קבלנים ויזמים",
    "audience.contractorsDesc": "בדיקות באתר, פיקוח בנייה ותמונת מצב מקצועית ללקוחות לפני ואחרי עבודות",
    "audience.committees": "ועדי בתים",
    "audience.committeesDesc": "בדיקת מבנים משותפים ותחזוקה שוטפת",
    
    // Services
    "services.title": "שירותי ליקויי בנייה",
    "services.engineering": "בדק בית הנדסי",
    "services.engineeringDesc": "בדיקה מקיפה של כל מערכות הבניין, איתור ליקויים נסתרים ודוח מפורט עם המלצות לתיקון",
    "services.counterOpinion": "חוות דעת נגדית",
    "services.counterOpinionDesc": "חוות דעת מקצועית מוסמכת להתמודדות מול חוות דעת אחרות בהליכים משפטיים",
    "services.expert": "מומחה בדק בית",
    "services.expertDesc": "ליווי מקצועי בתהליך קבלת דירה, בדיקות תקופתיות ויעוץ שוטף",
    "services.support": "ליווי מקצועי ואיתור ליקויי בנייה",
    "services.supportDesc": "ליווי צמוד בכל שלבי הבנייה, פיקוח עליון ובקרת איכות",
    
    // Testimonials
    "testimonials.title": "מה אומרים הלקוחות שלנו",
    "testimonials.subtitle": "ביקורות אמיתיות מלקוחות מרוצים",
    "testimonials.googleBadge": "ביקורות Google",
    "testimonials.viewAll": "צפה בכל הביקורות",
    "testimonials.whatsappTitle": "המלצות מאומתות מוואטסאפ",
    
    // Footer
    "footer.services": "שירותים ומאמרים",
    "footer.contact": "פרטי התקשרות - בדק בית מקצועי",
    "footer.office": "טלפון המשרד",
    "footer.expert": "מומחה בדק בית",
    "footer.nationwide": "שירות בכל הארץ - צפון, מרכז, דרום",
    "footer.rights": "כל הזכויות שמורות",
  },
  
  en: {
    // Header
    "site.title": "Engineering Home Inspection & Building Defect Detection – Expert Opinion",
    "site.subtitle": "Home inspection for new & second-hand apartments | Engineers Association certified ID 17253030 | Ministry of Labor License 1641507",
    
    // Hero
    "hero.title": "Engineering Home Inspection & Building Defect Detection",
    "hero.subtitle1": "Detecting building defects before buying an apartment, receiving a new apartment from the contractor, and inspecting private homes",
    "hero.subtitle2": "Expert opinion before or after apartment delivery | Legal opinion | Internal counter-opinion",
    "hero.cta": "Contact Us Now",
    "hero.moreInfo": "About Legal Bedek Bayit",
    "hero.trust1": "Years of building-engineering experience",
    "hero.trust2": "Professional, detailed engineering reports",
    "hero.trust3": "Advanced measuring equipment",
    "hero.trust4": "Service throughout Israel",
    "hero.ctaPrimary": "Get a Quote",
    "hero.ctaSecondary": "Free Consultation Call",
    "hero.badge": "Certified Expert · Association of Engineers",
    "hero.imageAlt": "Yigal Bensky, certified home-inspection expert, wearing a safety helmet during an engineering inspection",
    "strip.title": "What a professional engineering inspection looks like",
    "strip.subtitle": "Advanced measuring equipment and precise defect documentation in every inspection",
    "strip.item1": "Inspector on site",
    "strip.item2": "Thermal camera",
    "strip.item3": "Protimeter moisture meter",
    "strip.item4": "Laser level",
    "strip.item5": "Documented building defect",
    
    // Contact Section
    "contact.title": "Need a home inspection – apartment, private house or building?",
    "contact.subtitle": "Contact us for consultation and scheduling an engineering inspection",
    "contact.call": "Call",
    "contact.form.title": "Contact Us",
    
    // Peace of Mind Section
    "peace.title": "Peace of Mind & Professional Support for All Property Types",
    "peace.description": "Second-hand apartment buyers - Engineering home inspection gives you powerful negotiation leverage to reduce the property price by tens of thousands of shekels. New apartment buyers - Building defects found during inspection may entitle you to significant compensation from the contractor. With Engineers Association certification and Ministry of Labor license, we provide detailed professional reports that save you money. For contractors - Professional counter-opinion to address other expert opinions.",
    
    // Short Notice Section
    "shortNotice.title": "Short Notice Home Inspection - New & Second-hand Apartments",
    "shortNotice.new": "New apartment:",
    "shortNotice.newDesc": "Contractor requesting short-notice delivery? We provide engineering home inspection within days, ensuring you receive your apartment with complete confidence.",
    "shortNotice.used": "Second-hand apartment:",
    "shortNotice.usedDesc": "Negotiating a property purchase? Home inspection expert available from today to tomorrow - we'll help you understand the real condition of the apartment and save thousands in negotiations with the seller.",
    
    // Target Audience
    "audience.title": "Who Are Our Building Inspection Services For?",
    "audience.buyers": "Apartment Buyers",
    "audience.buyersDesc": "Comprehensive inspection before purchase or receiving an apartment",
    "audience.sellers": "Property Sellers",
    "audience.sellersDesc": "Professional report to prove property quality",
    "audience.contractors": "Contractors & Developers",
    "audience.contractorsDesc": "On-site inspections, construction supervision and professional status report for clients before and after work",
    "audience.committees": "Building Committees",
    "audience.committeesDesc": "Shared building inspection and ongoing maintenance",
    
    // Services
    "services.title": "Building Defect Services",
    "services.engineering": "Engineering Home Inspection",
    "services.engineeringDesc": "Comprehensive inspection of all building systems, detection of hidden defects and detailed report with repair recommendations",
    "services.counterOpinion": "Counter Opinion",
    "services.counterOpinionDesc": "Certified professional opinion to address other opinions in legal proceedings",
    "services.expert": "Home Inspection Expert",
    "services.expertDesc": "Professional support in apartment delivery process, periodic inspections and ongoing consultation",
    "services.support": "Professional Support & Building Defect Detection",
    "services.supportDesc": "Close support throughout all construction stages, supervision and quality control",
    
    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Real reviews from satisfied clients",
    "testimonials.googleBadge": "Google Reviews",
    "testimonials.viewAll": "View all reviews",
    "testimonials.whatsappTitle": "Verified WhatsApp Recommendations",
    
    // Footer
    "footer.services": "Services & Articles",
    "footer.contact": "Contact Details - Professional Home Inspection",
    "footer.office": "Office Phone",
    "footer.expert": "Home Inspection Expert",
    "footer.nationwide": "Service nationwide - North, Center, South",
    "footer.rights": "All rights reserved",
  },
  
  ru: {
    // Header
    "site.title": "Инженерная проверка дома и выявление строительных дефектов – Экспертное заключение",
    "site.subtitle": "Проверка дома для новых квартир и квартир со вторых рук | Сертификат Ассоциации инженеров ID 17253030 | Лицензия Министерства труда 1641507",
    
    // Hero
    "hero.title": "Инженерная проверка дома и выявление строительных дефектов",
    "hero.subtitle1": "Выявление строительных дефектов перед покупкой квартиры, приёмкой новой квартиры у застройщика и проверкой частных домов",
    "hero.subtitle2": "Экспертное заключение до или после передачи квартиры | Юридическое заключение | Внутреннее контр-заключение",
    "hero.cta": "Связаться сейчас",
    "hero.moreInfo": "Знакомство с Legal Bedek Bayit",
    "hero.trust1": "Многолетний опыт в строительной инженерии",
    "hero.trust2": "Профессиональные подробные инженерные отчёты",
    "hero.trust3": "Современное измерительное оборудование",
    "hero.trust4": "Обслуживание по всему Израилю",
    "hero.ctaPrimary": "Получить предложение",
    "hero.ctaSecondary": "Бесплатная консультация",
    "hero.badge": "Сертифицированный эксперт · Союз инженеров",
    "hero.imageAlt": "Игаль Бенски, сертифицированный эксперт по проверке домов, в защитной каске во время инженерной проверки",
    "strip.title": "Как выглядит профессиональная инженерная проверка",
    "strip.subtitle": "Современное оборудование и точная документация дефектов при каждой проверке",
    "strip.item1": "Эксперт на объекте",
    "strip.item2": "Тепловизор",
    "strip.item3": "Влагомер Protimeter",
    "strip.item4": "Лазерный уровень",
    "strip.item5": "Зафиксированный дефект",
    
    // Contact Section
    "contact.title": "Нужна проверка недвижимости – квартира, дом или здание?",
    "contact.subtitle": "Свяжитесь с нами для консультации и назначения инженерной проверки",
    "contact.call": "Позвонить",
    "contact.form.title": "Связаться",
    
    // Peace of Mind Section
    "peace.title": "Спокойствие и профессиональная поддержка для всех типов недвижимости",
    "peace.description": "Покупатели квартир со вторых рук - Инженерная проверка дома дает вам мощный инструмент для снижения цены на десятки тысяч шекелей. Покупатели новых квартир - Обнаруженные дефекты могут дать право на значительную ком��енсацию от подрядчика. С сертификатом Ассоциации инженеров и лицензией Министерства труда мы предоставляем подробные профессиональные отчеты. Для подрядчиков - Профессиональное контр-заключение.",
    
    // Short Notice Section
    "shortNotice.title": "Срочная проверка дома - Новые квартиры и квартиры со вторых рук",
    "shortNotice.new": "Новая квартира:",
    "shortNotice.newDesc": "Подрядчик требует срочной передачи? Мы проводим инженерную проверку в течение нескольких дней.",
    "shortNotice.used": "Вторичная квартира:",
    "shortNotice.usedDesc": "Ведете переговоры о покупке? Эксперт доступен с сегодня на завтра - поможем понять реальное состояние квартиры и сэкономить тысячи в переговорах.",
    
    // Target Audience
    "audience.title": "Для кого предназначены наши услуги?",
    "audience.buyers": "Покупатели квартир",
    "audience.buyersDesc": "Комплексная проверка перед покупкой или получением квартиры",
    "audience.sellers": "Продавцы недвижимости",
    "audience.sellersDesc": "Профессиональный отчет для подтверждения качества недвижимости",
    "audience.contractors": "Подрядчики и застройщики",
    "audience.contractorsDesc": "Проверки на объекте, надзор за строительством и профессиональный отчет для клиентов",
    "audience.committees": "Домовые комитеты",
    "audience.committeesDesc": "Проверка общих зданий и текущее обслуживание",
    
    // Services
    "services.title": "Услуги по строительным дефектам",
    "services.engineering": "Инженерная проверка дома",
    "services.engineeringDesc": "Комплексная проверка всех систем здания, обнаружение скрытых дефектов и подробный отчет с рекомендациями",
    "services.counterOpinion": "Контр-заключение",
    "services.counterOpinionDesc": "Сертифицированное профессиональное заключение для судебных разбирательств",
    "services.expert": "Эксперт по проверке дома",
    "services.expertDesc": "Профессиональная поддержка в процессе получения квартиры, периодические проверки и консультации",
    "services.support": "Профессиональная поддержка и выявление дефектов",
    "services.supportDesc": "Сопровождение на всех этапах строительства, надзор и контроль качества",
    
    // Testimonials
    "testimonials.title": "Что говорят наши клиенты",
    "testimonials.subtitle": "Реальные отзывы довольных клиентов",
    "testimonials.googleBadge": "Отзывы Google",
    "testimonials.viewAll": "Смотреть все отзыв��",
    "testimonials.whatsappTitle": "Проверенные рекомендации WhatsApp",
    
    // Footer
    "footer.services": "Услуги и статьи",
    "footer.contact": "Контактные данные - Профессиональная проверка дома",
    "footer.office": "Телефон офиса",
    "footer.expert": "Эксперт по проверке дома",
    "footer.nationwide": "Услуги по всей стране - Север, Центр, Юг",
    "footer.rights": "Все права защищены",
  },
  
  fr: {
    // Header
    "site.title": "Inspection Immobilière et Détection de Défauts de Construction – Avis d'Expert",
    "site.subtitle": "Inspection pour appartements neufs et d'occasion | Certifié Association des Ingénieurs ID 17253030 | Licence Ministère du Travail 1641507",
    
    // Hero
    "hero.title": "Inspection Immobilière et Détection de Défauts de Construction",
    "hero.subtitle1": "Détection des défauts de construction avant l'achat d'un appartement, la réception d'un logement neuf et l'inspection de maisons privées",
    "hero.subtitle2": "Avis d'expert avant ou après livraison | Avis juridique | Contre-avis interne",
    "hero.cta": "Contactez-nous",
    "hero.moreInfo": "Découvrez Legal Bedek Bayit",
    "hero.trust1": "Des années d'expérience en ingénierie du bâtiment",
    "hero.trust2": "Rapports d'ingénierie professionnels et détaillés",
    "hero.trust3": "Équipement de mesure avancé",
    "hero.trust4": "Service dans tout Israël",
    "hero.ctaPrimary": "Obtenir un devis",
    "hero.ctaSecondary": "Appel de consultation gratuit",
    "hero.badge": "Expert certifié · Association des ingénieurs",
    "hero.imageAlt": "Yigal Bensky, expert certifié en inspection immobilière, portant un casque de sécurité lors d'une inspection technique",
    "strip.title": "À quoi ressemble une inspection technique professionnelle",
    "strip.subtitle": "Équipement de mesure avancé et documentation précise des défauts à chaque inspection",
    "strip.item1": "Expert sur site",
    "strip.item2": "Caméra thermique",
    "strip.item3": "Humidimètre Protimeter",
    "strip.item4": "Niveau laser",
    "strip.item5": "Défaut documenté",
    
    // Contact Section
    "contact.title": "Besoin d'une inspection – appartement, maison ou immeuble?",
    "contact.subtitle": "Contactez-nous pour consultation et planification d'inspection",
    "contact.call": "Appeler",
    "contact.form.title": "Contact",
    
    // Peace of Mind Section
    "peace.title": "Tranquillité d'esprit et soutien professionnel pour tous types de biens",
    "peace.description": "Acheteurs d'appartements d'occasion - L'inspection vous donne un puissant levier de négociation pour réduire le prix de dizaines de milliers de shekels. Acheteurs d'appartements neufs - Les défauts trouvés peuvent vous donner droit à une compensation significative. Avec la certification de l'Association des Ingénieurs et la licence du Ministère, nous fournissons des rapports détaillés. Pour les entrepreneurs - Contre-avis professionnel.",
    
    // Short Notice Section
    "shortNotice.title": "Inspection Urgente - Appartements Neufs et d'Occasion",
    "shortNotice.new": "Appartement neuf:",
    "shortNotice.newDesc": "L'entrepreneur demande une livraison rapide? Nous fournissons une inspection en quelques jours.",
    "shortNotice.used": "Appartement d'occasion:",
    "shortNotice.usedDesc": "En négociation pour un achat? Expert disponible de demain - nous vous aiderons à comprendre l'état réel et économiser des milliers.",
    
    // Target Audience
    "audience.title": "À qui s'adressent nos services?",
    "audience.buyers": "Acheteurs d'Appartements",
    "audience.buyersDesc": "Inspection complète avant achat ou réception",
    "audience.sellers": "Vendeurs de Biens",
    "audience.sellersDesc": "Rapport professionnel pour prouver la qualité",
    "audience.contractors": "Entrepreneurs et Promoteurs",
    "audience.contractorsDesc": "Inspections sur site, supervision et rapport professionnel pour clients",
    "audience.committees": "Comités d'Immeubles",
    "audience.committeesDesc": "Inspection des bâtiments communs et maintenance",
    
    // Services
    "services.title": "Services de Défauts de Construction",
    "services.engineering": "Inspection Immobilière",
    "services.engineeringDesc": "Inspection complète de tous les systèmes, détection de défauts cachés et rapport détaillé",
    "services.counterOpinion": "Contre-Avis",
    "services.counterOpinionDesc": "Avis professionnel certifié pour procédures judiciaires",
    "services.expert": "Expert en Inspection",
    "services.expertDesc": "Support professionnel, inspections périodiques et consultation",
    "services.support": "Support Professionnel et Détection de Défauts",
    "services.supportDesc": "Accompagnement à toutes les étapes, supervision et contrôle qualité",
    
    // Testimonials
    "testimonials.title": "Ce que disent nos clients",
    "testimonials.subtitle": "Avis réels de clients satisfaits",
    "testimonials.googleBadge": "Avis Google",
    "testimonials.viewAll": "Voir tous les avis",
    "testimonials.whatsappTitle": "Recommandations WhatsApp vérifiées",
    
    // Footer
    "footer.services": "Services et Articles",
    "footer.contact": "Coordonnées - Inspection Professionnelle",
    "footer.office": "Téléphone du bureau",
    "footer.expert": "Expert en inspection",
    "footer.nationwide": "Service national - Nord, Centre, Sud",
    "footer.rights": "Tous droits réservés",
  },
}

export function getDirection(lang: Language): "rtl" | "ltr" {
  return lang === "he" ? "rtl" : "ltr"
}
