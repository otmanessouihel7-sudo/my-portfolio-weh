/* ================================================================
   DIGITALFLER — Smart Multilingual AI System 2026
   ✦ Zero dependencies · RTL/LTR · Scroll-safe · GPU-animated
   ✦ Fixed: hero "with", chips, view live, demand categories
   ================================================================ */

(function (root, factory) {
  'use strict';
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.DigitalFlerI18n = factory();
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  /* ═══════════════════════════════════════════════
     § 1 — LANGUAGE REGISTRY
  ═══════════════════════════════════════════════ */
  const LANGS = {
    en: { label: 'English',  short: 'EN', flag: '🇬🇧', dir: 'ltr', font: "'Plus Jakarta Sans', sans-serif" },
    fr: { label: 'Français', short: 'FR', flag: '🇫🇷', dir: 'ltr', font: "'Plus Jakarta Sans', sans-serif" },
    ar: { label: 'العربية',  short: 'AR', flag: '🇲🇦', dir: 'rtl', font: "'Noto Sans Arabic', sans-serif" },
    es: { label: 'Español',  short: 'ES', flag: '🇪🇸', dir: 'ltr', font: "'Plus Jakarta Sans', sans-serif" },
  };

  /* ═══════════════════════════════════════════════
     § 2 — TRANSLATION DATABASE
  ═══════════════════════════════════════════════ */
  const T = {
    /* ── NAVBAR ── */
    nav_home:     { en: 'Home',        fr: 'Accueil',   ar: 'الرئيسية', es: 'Inicio' },
    nav_projects: { en: 'Projects',    fr: 'Projets',   ar: 'المشاريع', es: 'Proyectos' },
    nav_demand:   { en: 'Demand',      fr: 'Demande',   ar: 'الطلب',    es: 'Demanda' },
    nav_contact:  { en: 'Contact',     fr: 'Contact',   ar: 'تواصل',    es: 'Contacto' },
    nav_cta:      { en: 'Get Started', fr: 'Commencer', ar: 'ابدأ الآن', es: 'Empezar' },

    /* ── HERO ── */
    badge_hero:   { en: 'Premium Web Solutions', fr: 'Solutions Web Premium', ar: 'حلول ويب احترافية', es: 'Soluciones Web Premium' },
    hero_h1_1:    { en: 'Get more clients',  fr: 'Obtenez plus de clients',  ar: 'احصل على المزيد من العملاء', es: 'Consigue más clientes' },
    hero_h1_with: { en: 'with',              fr: 'avec',                      ar: 'مع',                          es: 'con' },
    hero_h1_2:    { en: 'high converting',   fr: 'haute conversion',          ar: 'عالي التحويل',                es: 'alta conversión' },
    hero_h1_3:    { en: 'websites',          fr: 'sites web',                 ar: 'مواقع إلكترونية',             es: 'sitios web' },
    hero_h1_4:    { en: '& stores',          fr: '& boutiques',               ar: 'ومتاجر',                     es: 'y tiendas' },
    hero_desc:    {
      en: 'We design modern, high-performance websites that turn visitors into customers. Clean design, fast loading, and premium user experience.',
      fr: 'Nous créons des sites web modernes et performants qui transforment les visiteurs en clients. Design épuré, chargement rapide et expérience utilisateur premium.',
      ar: 'نصمم مواقع ويب حديثة وعالية الأداء تحوّل الزوار إلى عملاء. تصميم أنيق، تحميل سريع، وتجربة مستخدم استثنائية.',
      es: 'Diseñamos sitios web modernos y de alto rendimiento que convierten visitantes en clientes. Diseño limpio, carga rápida y experiencia de usuario premium.',
    },
    hero_btn1:    { en: 'View Projects',  fr: 'Voir les Projets',  ar: 'عرض المشاريع',  es: 'Ver Proyectos' },
    hero_btn2:    { en: 'Get One',        fr: 'En Obtenir Un',     ar: 'احصل على موقع', es: 'Obtener Uno' },
    social_proof: { en: '4.9/5 from 120+ clients', fr: '4.9/5 de +120 clients', ar: '٤.٩/٥ من أكثر من ١٢٠ عميل', es: '4.9/5 de 120+ clientes' },
    scroll_hint:  { en: 'Scroll to explore', fr: 'Défiler pour explorer', ar: 'مرر للاستكشاف', es: 'Desplaza para explorar' },

    /* ── STATS ── */
    stat_projects: { en: 'Projects', fr: 'Projets', ar: 'مشروع',  es: 'Proyectos' },
    stat_clients:  { en: 'Clients',  fr: 'Clients', ar: 'عميل',   es: 'Clientes' },
    stat_years:    { en: 'Years',    fr: 'Années',  ar: 'سنوات',  es: 'Años' },

    /* ── PROJECTS ── */
    section_badge: { en: 'Portfolio & Work',           fr: 'Portfolio & Travaux',          ar: 'المعرض والأعمال',       es: 'Portfolio y Trabajo' },
    power_title1:  { en: 'See how I turn ideas into',  fr: 'Voyez comment je transforme les idées en', ar: 'اكتشف كيف أحوّل الأفكار إلى', es: 'Mira cómo convierto ideas en' },
    power_title2:  { en: 'Powerful & Professional',   fr: 'Puissants & Professionnels',   ar: 'مواقع ومتاجر',          es: 'Poderosos & Profesionales' },
    power_title3:  { en: 'websites & stores',          fr: 'sites web & boutiques',        ar: 'قوية واحترافية',        es: 'sitios web y tiendas' },
    feat_fast:     { en: 'Ultra Fast',      fr: 'Ultra Rapide',       ar: 'سرعة فائقة',    es: 'Ultra Rápido' },
    feat_fast_s:   { en: 'Optimized Speed', fr: 'Vitesse Optimisée',  ar: 'سرعة محسّنة',   es: 'Velocidad Optimizada' },
    feat_pixel:    { en: 'Pixel Perfect',   fr: 'Pixel Parfait',      ar: 'دقة بالبكسل',   es: 'Pixel Perfecto' },
    feat_pixel_s:  { en: 'Mastered Detail', fr: 'Maîtrise des Détails', ar: 'إتقان التفاصيل', es: 'Detalle Maestro' },
    feat_conv:     { en: 'High Converting', fr: 'Haute Conversion',   ar: 'تحويل عالي',    es: 'Alta Conversión' },
    feat_conv_s:   { en: 'Sales Driven',    fr: 'Axé sur les Ventes', ar: 'موجّه للمبيعات', es: 'Orientado a Ventas' },

    /* ── FILTER TABS ── */
    tab_all:      { en: 'All Creations',     fr: 'Toutes les Créations',  ar: 'كل الأعمال',          es: 'Todas las Creaciones' },
    tab_websites: { en: 'Websites',          fr: 'Sites Web',             ar: 'المواقع',             es: 'Sitios Web' },
    tab_stores:   { en: 'E-commerce Stores', fr: 'Boutiques E-commerce',  ar: 'المتاجر الإلكترونية', es: 'Tiendas E-commerce' },
    btn_discover: { en: 'Discover More Work', fr: 'Découvrir plus',       ar: 'اكتشف المزيد',        es: 'Descubrir Más' },
    btn_less:     { en: 'Show Less',          fr: 'Afficher Moins',       ar: 'عرض أقل',             es: 'Mostrar Menos' },

    /* ── PROJECTS CHIPS (websites) ── */
    chip_business:   { en: 'Business',       fr: 'Business',         ar: 'الأعمال',        es: 'Negocio' },
    chip_agency:     { en: 'Digital Agency', fr: 'Agence Digitale',  ar: 'وكالة رقمية',    es: 'Agencia Digital' },
    chip_portfolio:  { en: 'Portfolio',      fr: 'Portfolio',        ar: 'المعرض',         es: 'Portfolio' },
    chip_saas:       { en: 'SaaS',           fr: 'SaaS',             ar: 'SaaS',           es: 'SaaS' },
    chip_blog:       { en: 'Blog',           fr: 'Blog',             ar: 'المدونة',        es: 'Blog' },
    chip_landing:    { en: 'Landing Page',   fr: 'Page d\'atterrissage', ar: 'صفحة هبوط',  es: 'Landing Page' },
    chip_education:  { en: 'Online Learning',fr: 'Formation en ligne',ar: 'تعليم إلكتروني', es: 'Aprendizaje Online' },
    chip_startup:    { en: 'Startup',        fr: 'Startup',          ar: 'ناشئة',          es: 'Startup' },
    /* ── PROJECTS CHIPS (stores) ── */
    chip_fashion:    { en: 'Fashion',        fr: 'Mode',             ar: 'الموضة',         es: 'Moda' },
    chip_electronics:{ en: 'Electronics',   fr: 'Électronique',     ar: 'الإلكترونيات',   es: 'Electrónica' },
    chip_beauty:     { en: 'Beauty',         fr: 'Beauté',           ar: 'الجمال',         es: 'Belleza' },
    chip_home:       { en: 'Home Decor',     fr: 'Décoration',       ar: 'ديكور منزلي',    es: 'Decoración' },
    chip_sports:     { en: 'Sports',         fr: 'Sports',           ar: 'الرياضة',        es: 'Deportes' },
    chip_food:       { en: 'Food & Restaurant', fr: 'Restauration',  ar: 'المطاعم والأغذية', es: 'Comida' },
    chip_luxury:     { en: 'Luxury',         fr: 'Luxe',             ar: 'الفاخرة',        es: 'Lujo' },
    chip_general:    { en: 'Multi Store',    fr: 'Multi-boutique',   ar: 'متجر عام',       es: 'Tienda General' },

    /* ── CARD VIEW LIVE ── */
    card_view_live:  { en: 'View Live', fr: 'Voir en direct', ar: 'عرض مباشر', es: 'Ver en Vivo' },

    /* ── DEMAND / WIZARD ── */
    wiz_step:    { en: 'STEP',  fr: 'ÉTAPE', ar: 'خطوة', es: 'PASO' },
    wiz_s1_msg:  { en: 'Select your project foundation',   fr: 'Choisissez votre base de projet',      ar: 'اختر أساس مشروعك',         es: 'Selecciona la base de tu proyecto' },
    wiz_s2_msg:  { en: 'Choose your market niche',         fr: 'Choisissez votre niche de marché',     ar: 'اختر تخصصك في السوق',       es: 'Elige tu nicho de mercado' },
    wiz_s3_msg:  { en: 'Almost there — final details',     fr: 'Presque terminé — derniers détails',   ar: 'اقتربت! التفاصيل الأخيرة', es: 'Casi listo — últimos detalles' },
    wiz_q1:      { en: 'What are we building?',            fr: 'Que construisons-nous ?',              ar: 'ماذا نبني؟',               es: '¿Qué estamos construyendo?' },
    wiz_q1_sub:  { en: 'Select the core DNA of your digital project.', fr: "Sélectionnez l'ADN central de votre projet digital.", ar: 'اختر الهوية الأساسية لمشروعك الرقمي.', es: 'Selecciona el ADN principal de tu proyecto digital.' },
    type_web:    { en: 'Websites',    fr: 'Sites Web',     ar: 'المواقع',                es: 'Sitios Web' },
    type_web_s:  { en: 'Corporate, SaaS & Blogs', fr: 'Corporate, SaaS & Blogs', ar: 'شركات، SaaS والمدونات', es: 'Corporativo, SaaS y Blogs' },
    type_store:  { en: 'E-commerce',  fr: 'E-commerce',    ar: 'التجارة الإلكترونية',    es: 'E-commerce' },
    type_store_s:{ en: 'Retail & Digital Sales', fr: 'Vente au Détail & Digital', ar: 'البيع بالتجزئة والمبيعات الرقمية', es: 'Venta Minorista y Digital' },
    type_app:    { en: 'Mobile Apps', fr: 'Apps Mobiles',  ar: 'تطبيقات الجوال',        es: 'Apps Móviles' },
    type_app_s:  { en: 'iOS & Android Solutions', fr: 'Solutions iOS & Android', ar: 'حلول iOS وAndroid', es: 'Soluciones iOS y Android' },
    wiz_q2:      { en: 'Specific Category',      fr: 'Catégorie Spécifique',     ar: 'الفئة المحددة',   es: 'Categoría Específica' },
    wiz_q2_sub:  { en: 'Matching your project with the right market niche.', fr: 'Adapter votre projet au bon créneau de marché.', ar: 'مطابقة مشروعك مع التخصص الصحيح في السوق.', es: 'Emparejando tu proyecto con el nicho de mercado adecuado.' },
    wiz_q3:      { en: 'Project Specifications', fr: 'Spécifications du Projet', ar: 'مواصفات المشروع', es: 'Especificaciones del Proyecto' },
    wiz_goal:    { en: 'Main Goal (Intent)', fr: 'Objectif Principal', ar: 'الهدف الرئيسي', es: 'Objetivo Principal' },
    wiz_level:   { en: 'Service Level',      fr: 'Niveau de Service',  ar: 'مستوى الخدمة',  es: 'Nivel de Servicio' },
    pill_sell:   { en: 'Sell Products',  fr: 'Vendre des Produits', ar: 'بيع المنتجات', es: 'Vender Productos' },
    pill_lead:   { en: 'Generate Leads', fr: 'Générer des Leads',   ar: 'جلب العملاء',  es: 'Generar Leads' },
    pill_show:   { en: 'Showcase Work',  fr: 'Présenter le Travail',ar: 'عرض الأعمال',  es: 'Mostrar Trabajo' },
    pill_start:  { en: 'Starter',        fr: 'Débutant',            ar: 'مبتدئ',         es: 'Inicial' },
    pill_pro:    { en: 'Professional',   fr: 'Professionnel',       ar: 'احترافي',       es: 'Profesional' },
    pill_adv:    { en: 'Advanced',       fr: 'Avancé',              ar: 'متقدم',         es: 'Avanzado' },
    name_ph:     { en: 'Full Name',      fr: 'Nom Complet',         ar: 'الاسم الكامل',  es: 'Nombre Completo' },
    phone_ph:    { en: 'WhatsApp (e.g. +212…)', fr: 'WhatsApp (ex. +33…)', ar: 'واتساب (مثال: 2126...+)', es: 'WhatsApp (ej. +34…)' },
    wiz_back:    { en: '← Previous Step', fr: '← Étape Précédente', ar: 'الخطوة السابقة →', es: '← Paso Anterior' },
    wiz_back2:   { en: '← Back',          fr: '← Retour',           ar: 'رجوع →',          es: '← Atrás' },
    wiz_send:    { en: 'Send Proposal 🚀', fr: 'Envoyer la Proposition 🚀', ar: '🚀 إرسال العرض', es: 'Enviar Propuesta 🚀' },

    /* ── DEMAND CATEGORIES (websites) ── */
    dcat_local_b:   { en: 'Local Business',    fr: 'Commerce Local',      ar: 'الأعمال المحلية',     es: 'Negocio Local' },
    dcat_local_s:   { en: 'Companies & clinics',fr: 'Entreprises & cliniques', ar: 'شركات وعيادات',  es: 'Empresas y clínicas' },
    dcat_landing_b: { en: 'Landing Page',      fr: 'Page d\'atterrissage', ar: 'صفحة هبوط',          es: 'Landing Page' },
    dcat_landing_s: { en: 'Conversion-focused / Ads', fr: 'Conversion / Publicités', ar: 'تحويل / إعلانات', es: 'Conversión / Anuncios' },
    dcat_brand_b:   { en: 'Personal Brand',    fr: 'Marque Personnelle',  ar: 'العلامة الشخصية',    es: 'Marca Personal' },
    dcat_brand_s:   { en: 'Influencers & pros', fr: 'Influenceurs & pros', ar: 'المؤثرون والمحترفون', es: 'Influencers y pros' },
    dcat_booking_b: { en: 'Booking Platform',  fr: 'Plateforme de Réservation', ar: 'منصة حجز',     es: 'Plataforma de Reservas' },
    dcat_booking_s: { en: 'Appointments & services', fr: 'Rendez-vous & services', ar: 'المواعيد والخدمات', es: 'Citas y servicios' },
    dcat_saas_b:    { en: 'SaaS / Web App',    fr: 'SaaS / App Web',      ar: 'SaaS / تطبيق ويب',   es: 'SaaS / App Web' },
    dcat_saas_s:    { en: 'Custom software',   fr: 'Logiciel sur mesure', ar: 'برمجيات مخصصة',      es: 'Software personalizado' },
    dcat_blog_b:    { en: 'Content / Blog',    fr: 'Contenu / Blog',      ar: 'محتوى / مدونة',      es: 'Contenido / Blog' },
    dcat_blog_s:    { en: 'SEO & news platforms', fr: 'SEO & actualités', ar: 'SEO ومنصات الأخبار', es: 'SEO y noticias' },
    /* ── DEMAND CATEGORIES (stores) ── */
    dcat_niche_b:   { en: 'Niche Store',       fr: 'Boutique de Niche',   ar: 'متجر متخصص',         es: 'Tienda de Nicho' },
    dcat_niche_s:   { en: 'Standard retail',   fr: 'Commerce standard',   ar: 'بيع بالتجزئة',       es: 'Venta minorista' },
    dcat_drop_b:    { en: 'Dropshipping',      fr: 'Dropshipping',        ar: 'دروبشيبينغ',         es: 'Dropshipping' },
    dcat_drop_s:    { en: 'Inventory-free automation', fr: 'Automatisation sans stock', ar: 'أتمتة بدون مخزون', es: 'Automatización sin inventario' },
    dcat_pod_b:     { en: 'Print-On-Demand',   fr: 'Impression à la demande', ar: 'طباعة عند الطلب', es: 'Impresión bajo demanda' },
    dcat_pod_s:     { en: 'Custom merch systems', fr: 'Systèmes merch custom', ar: 'أنظمة بضائع مخصصة', es: 'Sistemas merch personalizados' },
    dcat_digital_b: { en: 'Digital Products',  fr: 'Produits Numériques', ar: 'المنتجات الرقمية',    es: 'Productos Digitales' },
    dcat_digital_s: { en: 'Courses, e-books & software', fr: 'Cours, e-books & logiciels', ar: 'دورات وكتب إلكترونية وبرمجيات', es: 'Cursos, e-books y software' },
    dcat_local_ec_b:{ en: 'Local E-com',       fr: 'E-com Local',         ar: 'تجارة إلكترونية محلية', es: 'E-com Local' },
    dcat_local_ec_s:{ en: 'Delivery-focused Morocco', fr: 'Livraison Maroc', ar: 'توصيل - المغرب',  es: 'Entrega - Marruecos' },
    dcat_market_b:  { en: 'Marketplace',       fr: 'Marketplace',         ar: 'منصة تجارية',        es: 'Marketplace' },
    dcat_market_s:  { en: 'Multi-vendor platforms', fr: 'Plateformes multi-vendeurs', ar: 'منصات متعددة البائعين', es: 'Plataformas multi-vendedor' },
    /* ── DEMAND CATEGORIES (apps) ── */
    dcat_app_ec_b:  { en: 'E-commerce App',    fr: 'App E-commerce',      ar: 'تطبيق تجارة إلكترونية', es: 'App E-commerce' },
    dcat_app_ec_s:  { en: 'Mobile shopping',   fr: 'Shopping mobile',     ar: 'تسوق عبر الجوال',    es: 'Compras móviles' },
    dcat_app_bk_b:  { en: 'Booking App',       fr: 'App de Réservation',  ar: 'تطبيق حجز',          es: 'App de Reservas' },
    dcat_app_bk_s:  { en: 'Reservations & schedules', fr: 'Réservations & horaires', ar: 'الحجوزات والجداول', es: 'Reservas y horarios' },
    dcat_app_biz_b: { en: 'Business Tool',     fr: 'Outil Business',      ar: 'أداة أعمال',         es: 'Herramienta Empresarial' },
    dcat_app_biz_s: { en: 'Internal management', fr: 'Gestion interne',   ar: 'إدارة داخلية',       es: 'Gestión interna' },
    dcat_app_soc_b: { en: 'Social / Community',fr: 'Social / Communauté', ar: 'اجتماعي / مجتمع',   es: 'Social / Comunidad' },
    dcat_app_soc_s: { en: 'Engage with users', fr: 'Engager les utilisateurs', ar: 'التفاعل مع المستخدمين', es: 'Interactuar con usuarios' },
    dcat_app_srv_b: { en: 'Service App',       fr: 'App de Service',      ar: 'تطبيق خدمات',        es: 'App de Servicios' },
    dcat_app_srv_s: { en: 'Delivery or on-demand', fr: 'Livraison ou à la demande', ar: 'توصيل أو عند الطلب', es: 'Entrega o bajo demanda' },

    /* ── CONTACT ── */
    badge_free:   { en: 'FREE CONSULTATION', fr: 'CONSULTATION GRATUITE', ar: 'استشارة مجانية', es: 'CONSULTA GRATUITA' },
    contact_h2:   { en: "Not sure what to build?\nLet's figure it out together.", fr: "Pas sûr de quoi construire ?\nTrouvons-le ensemble.", ar: "لست متأكداً ماذا تبني؟\nلنكتشف ذلك معاً.", es: "¿No sabes qué construir?\nDescubrámoslo juntos." },
    contact_desc: { en: "Share your idea or problem and I'll give you a clear direction. No pressure, no commitment.", fr: "Partagez votre idée et je vous donnerai une direction claire. Sans pression ni engagement.", ar: "شاركني فكرتك أو مشكلتك وسأعطيك توجيهاً واضحاً. بدون ضغط أو التزام.", es: "Comparte tu idea y te daré una dirección clara. Sin presión ni compromiso." },
    btn_whatsapp: { en: 'Chat on WhatsApp',         fr: 'Discuter sur WhatsApp',  ar: 'تحدث عبر واتساب',      es: 'Chatear en WhatsApp' },
    btn_wa_sub:   { en: 'Fastest way to reach me',  fr: 'Le moyen le plus rapide',ar: 'أسرع طريقة للتواصل',   es: 'La forma más rápida de contactarme' },
    btn_email:    { en: 'Send an Email',             fr: 'Envoyer un Email',       ar: 'أرسل بريداً إلكترونياً',es: 'Enviar un Email' },
    btn_email_sub:{ en: "I'll reply within 12h",     fr: "Je répondrai sous 12h",  ar: 'سأرد خلال 12 ساعة',    es: 'Responderé en 12h' },
    trust_reply:  { en: 'Reply within',  fr: 'Réponse en',      ar: 'رد خلال',  es: 'Respuesta en' },
    trust_reply2: { en: '12 hours',      fr: '12 heures',       ar: '12 ساعة',  es: '12 horas' },
    trust_safe:   { en: 'Your idea is',  fr: 'Votre idée est',  ar: 'فكرتك',    es: 'Tu idea está' },
    trust_safe2:  { en: '100% safe',     fr: '100% sécurisée',  ar: '100% آمنة',es: '100% segura' },
    trust_no:     { en: 'No commitment', fr: 'Sans engagement', ar: 'بدون التزام', es: 'Sin compromiso' },
    trust_no2:    { en: 'Just a conversation', fr: 'Juste une conversation', ar: 'فقط محادثة', es: 'Solo una conversación' },
    quote_text:   { en: 'Sometimes a quick conversation is all you need to move your business forward.', fr: 'Parfois, une courte conversation suffit pour faire avancer votre entreprise.', ar: 'أحياناً محادثة قصيرة هي كل ما تحتاجه لتحريك عملك للأمام.', es: 'A veces una conversación rápida es todo lo que necesitas para impulsar tu negocio.' },
    form_title:   { en: 'Quick Consultation',       fr: 'Consultation Rapide',           ar: 'استشارة سريعة',   es: 'Consulta Rápida' },
    form_sub:     { en: "Fill out the form and I'll get back to you.", fr: "Remplissez le formulaire et je vous recontacterai.", ar: 'أكمل النموذج وسأتواصل معك.', es: 'Completa el formulario y me pondré en contacto contigo.' },
    f_name_ph:    { en: 'Your Name',              fr: 'Votre Nom',             ar: 'اسمك',               es: 'Tu Nombre' },
    f_contact_ph: { en: 'Email or WhatsApp',      fr: 'Email ou WhatsApp',     ar: 'البريد أو واتساب',   es: 'Email o WhatsApp' },
    f_msg_ph:     { en: 'Describe your problem or idea...', fr: 'Décrivez votre problème ou idée...', ar: 'صف مشكلتك أو فكرتك...', es: 'Describe tu problema o idea...' },
    f_msg_hint:   { en: 'The more details, the better I can help.', fr: "Plus vous donnez de détails, mieux je peux vous aider.", ar: 'كلما أعطيت تفاصيل أكثر، كان بإمكاني مساعدتك بشكل أفضل.', es: 'Cuantos más detalles, mejor puedo ayudarte.' },
    f_file_t:     { en: 'Attach idea (optional)', fr: 'Joindre une idée (optionnel)', ar: 'أرفق فكرتك (اختياري)', es: 'Adjuntar idea (opcional)' },
    f_file_s:     { en: 'PDF, DOC, PNG, JPG (Max. 10MB)', fr: 'PDF, DOC, PNG, JPG (Max. 10Mo)', ar: 'PDF, DOC, PNG, JPG (الحد الأقصى 10MB)', es: 'PDF, DOC, PNG, JPG (Máx. 10MB)' },
    f_choose:     { en: 'Choose File',   fr: 'Choisir Fichier',  ar: 'اختر ملفاً',  es: 'Elegir Archivo' },
    f_submit:     { en: 'Get My Answer', fr: 'Obtenir Ma Réponse', ar: 'احصل على إجابتي', es: 'Obtener Mi Respuesta' },
    f_disclaimer: { en: 'This is just a conversation, not a commitment.', fr: "C'est juste une conversation, pas un engagement.", ar: 'هذه مجرد محادثة، وليست التزاماً.', es: 'Esto es solo una conversación, no un compromiso.' },

    /* ── FOOTER ── */
    footer_desc:  { en: 'Helping businesses grow with modern websites & intelligent automation.', fr: "Aider les entreprises à croître grâce aux sites modernes et à l'automatisation.", ar: 'نساعد الشركات على النمو بمواقع ويب حديثة وأتمتة ذكية.', es: 'Ayudando a las empresas a crecer con sitios web modernos y automatización inteligente.' },
    f_badge_sec:  { en: '100% Secure',    fr: '100% Sécurisé',    ar: '100% آمن',   es: '100% Seguro' },
    f_badge_fast: { en: 'Fast Delivery',  fr: 'Livraison Rapide', ar: 'تسليم سريع', es: 'Entrega Rápida' },
    f_badge_sup:  { en: '24/7 Support',   fr: 'Support 24/7',     ar: 'دعم 24/7',   es: 'Soporte 24/7' },
    f_quick:      { en: 'Quick Links',    fr: 'Liens Rapides',    ar: 'روابط سريعة',es: 'Links Rápidos' },
    f_plans:      { en: 'Plans',          fr: 'Plans',            ar: 'الباقات',    es: 'Planes' },
    f_plan1:      { en: 'Plan',           fr: 'Plan',             ar: 'الباقة',     es: 'Plan' },
    f_plan1_s:    { en: 'View pricing & packages', fr: 'Voir les tarifs', ar: 'عرض الأسعار والحزم', es: 'Ver precios y paquetes' },
    f_plan2:      { en: 'Onboarding',     fr: 'Démarrage',        ar: 'البداية',    es: 'Incorporación' },
    f_plan2_s:    { en: 'Step-by-step guide', fr: 'Guide étape par étape', ar: 'دليل خطوة بخطوة', es: 'Guía paso a paso' },
    f_plan3:      { en: 'Enterprise',     fr: 'Entreprise',       ar: 'المؤسسات',   es: 'Empresarial' },
    f_plan3_s:    { en: 'Custom solutions', fr: 'Solutions personnalisées', ar: 'حلول مخصصة', es: 'Soluciones personalizadas' },
    f_contact:    { en: 'Contact',        fr: 'Contact',          ar: 'تواصل',      es: 'Contacto' },
    f_follow:     { en: 'Follow Us',      fr: 'Suivez-Nous',      ar: 'تابعنا',     es: 'Síguenos' },
    f_copy:       { en: '© 2026 DigitalFler. All rights reserved.', fr: '© 2026 DigitalFler. Tous droits réservés.', ar: '© 2026 DigitalFler. جميع الحقوق محفوظة.', es: '© 2026 DigitalFler. Todos los derechos reservados.' },
    f_privacy:    { en: 'Privacy Policy',   fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية', es: 'Política de Privacidad' },
    f_terms:      { en: 'Terms of Service', fr: "Conditions d'Utilisation",    ar: 'شروط الخدمة',     es: 'Términos de Servicio' },
    f_cookie:     { en: 'Cookie Policy',    fr: 'Politique de Cookies',        ar: 'سياسة ملفات تعريف الارتباط', es: 'Política de Cookies' },
    f_made:       { en: 'Made with',        fr: 'Fait avec',                   ar: 'صُنع بـ',          es: 'Hecho con' },
    f_made2:      { en: 'for your success', fr: 'pour votre succès',           ar: 'من أجل نجاحك',    es: 'para tu éxito' },
    avail_live:   { en: 'Live Availability', fr: 'Disponibilité Live', ar: 'التوفر المباشر', es: 'Disponibilidad en Vivo' },
    avail_spots:  { en: 'Spots left this month:', fr: 'Places restantes ce mois:', ar: 'الأماكن المتاحة هذا الشهر:', es: 'Lugares disponibles este mes:' },
    avail_booked: { en: 'Projects booked this month', fr: 'Projets réservés ce mois', ar: 'المشاريع المحجوزة هذا الشهر', es: 'Proyectos reservados este mes' },
  };

  /* ═══════════════════════════════════════════════
     § 3 — STATE
  ═══════════════════════════════════════════════ */
  const STORAGE_KEY   = 'df_lang_v2';
  const TRANSITION_MS = 260;

  let currentLang  = _detectLang();
  let _isAnimating = false;

  /* ═══════════════════════════════════════════════
     § 4 — SMART LANGUAGE DETECTION
  ═══════════════════════════════════════════════ */
  function _detectLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS[stored]) return stored;
    } catch (_) {}
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('ar')) return 'ar';
    if (nav.startsWith('es')) return 'es';
    return 'en';
  }

  function _saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  /* ═══════════════════════════════════════════════
     § 5 — TRANSLATION ENGINE
  ═══════════════════════════════════════════════ */
  function _translate(key, lang) {
    return T[key]?.[lang] ?? T[key]?.['en'] ?? '';
  }

  /* PUBLIC helper — used by JS modules */
  function t(key, lang) {
    return _translate(key, lang || currentLang);
  }

  /* ═══════════════════════════════════════════════
     § 6 — DOM UPDATER
  ═══════════════════════════════════════════════ */
  function _applyTranslations(lang) {
    const nodes = document.querySelectorAll('[data-i18n]');
    const batch = [];

    nodes.forEach(el => {
      const key  = el.dataset.i18n;
      const type = el.dataset.i18nType || 'text';
      const val  = _translate(key, lang);
      if (!val) return;
      batch.push({ el, type, val });
    });

    requestAnimationFrame(() => {
      batch.forEach(({ el, type, val }) => {
        if (type === 'placeholder') {
          el.placeholder = val;
        } else if (type === 'html') {
          el.innerHTML = val.replace(/\n/g, '<br>');
        } else {
          el.textContent = val;
        }
      });
    });
  }

  /* ═══════════════════════════════════════════════
     § 7 — DOCUMENT DIRECTION + FONT
  ═══════════════════════════════════════════════ */
  function _applyDocumentDir(lang) {
    const info = LANGS[lang];
    const doc  = document.documentElement;
    doc.setAttribute('lang', lang);
    doc.setAttribute('dir', info.dir);
    if (info.dir === 'rtl') {
      doc.style.setProperty('--df-font-body', info.font);
      _loadArabicFont();
    } else {
      doc.style.removeProperty('--df-font-body');
    }
  }

  function _loadArabicFont() {
    if (document.getElementById('df-arabic-font')) return;
    const link = document.createElement('link');
    link.id   = 'df-arabic-font';
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(link);
  }

  /* ═══════════════════════════════════════════════
     § 8 — PAGE TRANSITION ANIMATION
  ═══════════════════════════════════════════════ */
  function _pageTransition(callback) {
    if (_isAnimating) { callback(); return; }
    _isAnimating = true;
    const overlay = _getOrCreateOverlay();
    overlay.style.opacity = '0';
    overlay.style.display = 'block';
    requestAnimationFrame(() => {
      overlay.style.transition = `opacity ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`;
      overlay.style.opacity    = '1';
      setTimeout(() => {
        callback();
        requestAnimationFrame(() => {
          overlay.style.opacity = '0';
          setTimeout(() => {
            overlay.style.display = 'none';
            _isAnimating = false;
            _refreshScrollAnimations();
          }, TRANSITION_MS);
        });
      }, TRANSITION_MS);
    });
  }

  function _getOrCreateOverlay() {
    let el = document.getElementById('df-i18n-overlay');
    if (!el) {
      el = document.createElement('div');
      el.id = 'df-i18n-overlay';
      Object.assign(el.style, {
        position: 'fixed', inset: '0',
        background: 'rgba(10,10,10,0.55)',
        backdropFilter: 'blur(8px)',
        webkitBackdropFilter: 'blur(8px)',
        zIndex: '99999', display: 'none',
        opacity: '0', pointerEvents: 'none',
      });
      document.body.appendChild(el);
    }
    return el;
  }

  /* ═══════════════════════════════════════════════
     § 9 — SCROLL ANIMATION REFRESH
  ═══════════════════════════════════════════════ */
  function _refreshScrollAnimations() {
    if (typeof ScrollTrigger !== 'undefined') {
      try { ScrollTrigger.refresh(); } catch (_) {}
    }
    document.querySelectorAll('.reveal:not(.visible), .df-reveal:not(.df-visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('visible', 'df-visible');
      }
    });
  }

  /* ═══════════════════════════════════════════════
     § 10 — CORE: APPLY LANGUAGE
  ═══════════════════════════════════════════════ */
  function applyLang(lang, animate) {
    if (!LANGS[lang]) return;
    animate = animate !== false;
    const doSwitch = () => {
      currentLang = lang;
      _saveLang(lang);
      _applyDocumentDir(lang);
      _applyTranslations(lang);
      _updateSwitcherUI(lang);
      _rerenderDynamicContent(lang);
      _dispatchEvent(lang);
    };
    if (animate && !_isAnimating) {
      _pageTransition(doSwitch);
    } else {
      doSwitch();
    }
  }

  function _dispatchEvent(lang) {
    try {
      document.dispatchEvent(new CustomEvent('df:langchange', {
        detail: { lang, info: LANGS[lang] },
        bubbles: true,
      }));
    } catch (_) {}
  }

  /* ═══════════════════════════════════════════════
     § 10b — RE-RENDER DYNAMIC CONTENT ON LANG CHANGE
     Rebuilds chips, project cards view-live text,
     and demand categories after language switch
  ═══════════════════════════════════════════════ */
  function _rerenderDynamicContent(lang) {
    /* 1. Chips — projects filter */
    const chipMap = {
      business:     'chip_business',
      agency:       'chip_agency',
      portfolio:    'chip_portfolio',
      saas:         'chip_saas',
      blog:         'chip_blog',
      'landing-page':'chip_landing',
      education:    'chip_education',
      startup:      'chip_startup',
      fashion:      'chip_fashion',
      electronics:  'chip_electronics',
      beauty:       'chip_beauty',
      home:         'chip_home',
      sports:       'chip_sports',
      food:         'chip_food',
      luxury:       'chip_luxury',
      general:      'chip_general',
    };
    document.querySelectorAll('.chip[data-cat]').forEach(chip => {
      const key = chipMap[chip.dataset.cat];
      if (key) chip.textContent = _translate(key, lang);
    });

    /* 2. View Live — project cards (rendered by JS) */
    document.querySelectorAll('.live-link').forEach(link => {
      const svg = link.querySelector('svg');
      link.textContent = _translate('card_view_live', lang);
      if (svg) link.appendChild(svg);
    });

    /* 3. Discover More / Show Less buttons */
    const discoverSpan = document.querySelector('#toggleProjects span');
    if (discoverSpan) discoverSpan.textContent = _translate('btn_discover', lang);
    const showLessSpan = document.querySelector('#showLessBtn [data-i18n="btn_less"]');
    if (showLessSpan) showLessSpan.textContent = _translate('btn_less', lang);

    /* 4. Demand categories — re-build via existing marketOptions but with translated text */
    _translateDemandCategories(lang);

    /* 5. Step status messages */
    const stepMsgMap = { 1: 'wiz_s1_msg', 2: 'wiz_s2_msg', 3: 'wiz_s3_msg' };
    const currentStepNum = parseInt(document.getElementById('currentStepNum')?.textContent || '1');
    const stepMsg = document.getElementById('stepStatusMsg');
    if (stepMsg && stepMsgMap[currentStepNum]) {
      stepMsg.textContent = _translate(stepMsgMap[currentStepNum], lang);
    }
  }

  /* ═══════════════════════════════════════════════
     § 10c — TRANSLATE DEMAND CATEGORIES
     Re-renders .cat-item elements with translated text
  ═══════════════════════════════════════════════ */

  /* Mapping: title (EN) → [title_key, subtitle_key] */
  const DCAT_KEY_MAP = {
    'Local Business':   ['dcat_local_b',    'dcat_local_s'],
    'Landing Page':     ['dcat_landing_b',  'dcat_landing_s'],
    'Personal Brand':   ['dcat_brand_b',    'dcat_brand_s'],
    'Booking Platform': ['dcat_booking_b',  'dcat_booking_s'],
    'SaaS / Web App':   ['dcat_saas_b',     'dcat_saas_s'],
    'Content / Blog':   ['dcat_blog_b',     'dcat_blog_s'],
    'Niche Store':      ['dcat_niche_b',    'dcat_niche_s'],
    'Dropshipping':     ['dcat_drop_b',     'dcat_drop_s'],
    'Print-On-Demand':  ['dcat_pod_b',      'dcat_pod_s'],
    'Digital Products': ['dcat_digital_b',  'dcat_digital_s'],
    'Local E-com':      ['dcat_local_ec_b', 'dcat_local_ec_s'],
    'Marketplace':      ['dcat_market_b',   'dcat_market_s'],
    'E-commerce App':   ['dcat_app_ec_b',   'dcat_app_ec_s'],
    'Booking App':      ['dcat_app_bk_b',   'dcat_app_bk_s'],
    'Business Tool':    ['dcat_app_biz_b',  'dcat_app_biz_s'],
    'Social / Community':['dcat_app_soc_b', 'dcat_app_soc_s'],
    'Service App':      ['dcat_app_srv_b',  'dcat_app_srv_s'],
  };

  function _translateDemandCategories(lang) {
    document.querySelectorAll('#dynamicCategories .cat-item').forEach(item => {
      const h4   = item.querySelector('h4');
      const p    = item.querySelector('p');
      if (!h4) return;

      /* Find matching key by stored data-en attribute OR current h4 text */
      const enTitle = item.dataset.enTitle || h4.textContent.trim();
      /* Store original EN title on first run */
      if (!item.dataset.enTitle) item.dataset.enTitle = enTitle;

      const keys = DCAT_KEY_MAP[enTitle];
      if (!keys) return;
      h4.textContent = _translate(keys[0], lang);
      if (p) p.textContent = _translate(keys[1], lang);
    });
  }

  /* ═══════════════════════════════════════════════
     § 11 — SWITCHER UI INJECTION
  ═══════════════════════════════════════════════ */
  function _injectStyles() {
    if (document.getElementById('df-i18n-styles')) return;
    const style = document.createElement('style');
    style.id = 'df-i18n-styles';
    style.textContent = `
:root {
  --ls-accent:    #ff5e1a;
  --ls-accentRGB: 255,94,26;
  --ls-bg:        rgba(8,8,8,0.96);
  --ls-surface:   rgba(255,255,255,0.035);
  --ls-border:    rgba(255,255,255,0.07);
  --ls-text:      #e8e8e8;
  --ls-muted:     #555;
  --ls-radius:    16px;
  --ls-glow:      rgba(255,94,26,0.28);
  --ls-spring:    cubic-bezier(0.175,0.885,0.32,1.275);
  --ls-ease:      cubic-bezier(0.4,0,0.2,1);
}
#df-lang-wrapper {
  position: relative; display: flex; align-items: center;
  margin-left: 8px; isolation: isolate;
}
[dir="rtl"] #df-lang-wrapper { margin-left: 0; margin-right: 8px; }
#df-lang-btn {
  position: relative; display: flex; align-items: center; gap: 7px;
  padding: 7px 13px 7px 10px;
  background: var(--ls-surface);
  border: 1px solid var(--ls-border);
  border-radius: 100px; cursor: pointer;
  color: var(--ls-text); font-size: 12.5px; font-weight: 600;
  letter-spacing: 0.04em;
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  transition: border-color .22s var(--ls-ease), background .22s var(--ls-ease),
              box-shadow .22s var(--ls-ease), transform .22s var(--ls-spring);
  outline: none; user-select: none; white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}
#df-lang-btn:hover {
  border-color: rgba(var(--ls-accentRGB),.45);
  background: rgba(var(--ls-accentRGB),.07);
  box-shadow: 0 0 0 3px var(--ls-glow); transform: scale(1.03);
}
#df-lang-btn.ls-open {
  border-color: rgba(var(--ls-accentRGB),.65);
  background: rgba(var(--ls-accentRGB),.10);
  box-shadow: 0 0 0 4px var(--ls-glow);
}
#df-lang-btn:active { transform: scale(0.97); }
.ls-globe {
  width:15px;height:15px;stroke:var(--ls-accent);fill:none;stroke-width:1.8;
  flex-shrink:0;transition:transform .5s var(--ls-ease),opacity .3s;will-change:transform;
}
#df-lang-btn.ls-open .ls-globe { transform: rotate(180deg); }
#df-lang-flag  { font-size: 14px; line-height: 1; }
#df-lang-short { font-family: 'Syne','Inter',sans-serif; letter-spacing: .05em; }
.ls-chevron {
  width:10px;height:10px;stroke:var(--ls-muted);fill:none;stroke-width:2.2;
  stroke-linecap:round;transition:transform .25s var(--ls-ease),stroke .25s;flex-shrink:0;
}
#df-lang-btn.ls-open .ls-chevron { transform: rotate(180deg); stroke: var(--ls-accent); }
#df-lang-panel {
  position:absolute;top:calc(100% + 12px);right:0;width:228px;
  background:var(--ls-bg);border:1px solid rgba(255,255,255,0.08);
  border-radius:var(--ls-radius);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);
  box-shadow:0 8px 48px rgba(0,0,0,.7),0 0 0 .5px rgba(255,255,255,.04) inset,0 1px 0 rgba(255,255,255,.05) inset;
  overflow:hidden;pointer-events:none;opacity:0;
  transform:translateY(10px) scale(0.96);transform-origin:top right;
  transition:opacity .22s var(--ls-ease),transform .28s var(--ls-spring);
  z-index:99998;will-change:opacity,transform;
}
#df-lang-panel.ls-open { opacity:1;transform:translateY(0) scale(1);pointer-events:all; }
@media (max-height:520px) {
  #df-lang-panel { top:auto;bottom:calc(100% + 12px);transform-origin:bottom right; }
}
[dir="rtl"] #df-lang-panel { right:auto;left:0;transform-origin:top left; }
.ls-panel-header {
  padding:12px 16px 10px;border-bottom:1px solid rgba(255,255,255,.055);
  display:flex;align-items:center;gap:9px;
}
.ls-panel-dot {
  width:6px;height:6px;border-radius:50%;background:var(--ls-accent);
  box-shadow:0 0 7px var(--ls-accent);animation:ls-pulse 2.2s ease-in-out infinite;flex-shrink:0;
}
@keyframes ls-pulse {
  0%,100%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(1.4);}
}
.ls-panel-title {
  font-size:10.5px;font-weight:700;color:var(--ls-muted);
  text-transform:uppercase;letter-spacing:.14em;
}
.ls-options { padding:8px;display:flex;flex-direction:column;gap:2px; }
.ls-option {
  display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:10px;
  cursor:pointer;transition:background .18s var(--ls-ease),transform .22s var(--ls-spring);
  position:relative;overflow:hidden;opacity:0;
}
#df-lang-panel.ls-open .ls-option { opacity:1;animation:ls-slide-in .26s var(--ls-spring) both; }
#df-lang-panel.ls-open .ls-option:nth-child(1){animation-delay:.03s;}
#df-lang-panel.ls-open .ls-option:nth-child(2){animation-delay:.08s;}
#df-lang-panel.ls-open .ls-option:nth-child(3){animation-delay:.13s;}
#df-lang-panel.ls-open .ls-option:nth-child(4){animation-delay:.18s;}
@keyframes ls-slide-in { from{opacity:0;transform:translateX(10px);}to{opacity:1;transform:translateX(0);} }
[dir="rtl"] #df-lang-panel.ls-open .ls-option { animation-name:ls-slide-in-rtl; }
@keyframes ls-slide-in-rtl { from{opacity:0;transform:translateX(-10px);}to{opacity:1;transform:translateX(0);} }
.ls-option::before {
  content:'';position:absolute;left:0;top:20%;bottom:20%;
  width:2px;border-radius:2px;background:var(--ls-accent);
  transform:scaleY(0);transition:transform .22s var(--ls-spring);
}
[dir="rtl"] .ls-option::before { left:auto;right:0; }
.ls-option:hover::before,.ls-option.ls-active::before { transform:scaleY(1); }
.ls-option:hover { background:rgba(255,255,255,.04);transform:translateX(3px); }
[dir="rtl"] .ls-option:hover { transform:translateX(-3px); }
.ls-option.ls-active { background:rgba(var(--ls-accentRGB),.08); }
.ls-flag  { font-size:19px;line-height:1;flex-shrink:0; }
.ls-name  { flex:1;font-size:13.5px;font-weight:500;color:var(--ls-text);white-space:nowrap; }
.ls-code  { font-size:10.5px;font-weight:700;color:var(--ls-muted);letter-spacing:.06em;font-family:'Syne',monospace; }
.ls-option.ls-active .ls-code { color:var(--ls-accent); }
.ls-check {
  width:14px;height:14px;stroke:var(--ls-accent);fill:none;stroke-width:2.5;stroke-linecap:round;
  opacity:0;transform:scale(.5) rotate(-20deg);
  transition:opacity .22s var(--ls-ease),transform .28s var(--ls-spring);flex-shrink:0;
}
.ls-option.ls-active .ls-check { opacity:1;transform:scale(1) rotate(0deg); }
.ls-rtl-badge {
  font-size:9px;font-weight:700;color:var(--ls-accent);
  background:rgba(var(--ls-accentRGB),.10);border:1px solid rgba(var(--ls-accentRGB),.22);
  border-radius:4px;padding:1px 5px;letter-spacing:.04em;
}
.ls-ai-badge {
  font-size:9px;font-weight:700;color:#7dd3fc;
  background:rgba(125,211,252,.10);border:1px solid rgba(125,211,252,.22);
  border-radius:4px;padding:1px 5px;letter-spacing:.04em;
}
.ls-panel-footer {
  padding:9px 16px;border-top:1px solid rgba(255,255,255,.05);
  font-size:10px;color:#333;text-align:center;
  display:flex;align-items:center;justify-content:center;gap:5px;
}
.ls-panel-footer-dot { width:4px;height:4px;border-radius:50%;background:var(--ls-accent);opacity:.5; }
@media (max-width:640px){
  #df-lang-btn{padding:6px 10px 6px 8px;font-size:12px;gap:5px;}
  #df-lang-panel{width:206px;}
}
@media (prefers-reduced-motion:reduce){
  #df-lang-btn,#df-lang-panel,.ls-option,.ls-check,.ls-globe{transition:none!important;animation:none!important;}
  #df-lang-panel.ls-open{opacity:1;transform:none;}
  .ls-option{opacity:1;}
}
    `;
    document.head.appendChild(style);
  }

  function _buildSwitcher() {
    _injectStyles();
    const wrapper = document.createElement('div');
    wrapper.id = 'df-lang-wrapper';
    wrapper.setAttribute('role', 'navigation');
    wrapper.setAttribute('aria-label', 'Language selector');
    wrapper.innerHTML = `
      <button id="df-lang-btn" aria-label="Switch Language" aria-expanded="false" aria-haspopup="listbox" type="button">
        <svg class="ls-globe" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span id="df-lang-flag" aria-hidden="true">🇬🇧</span>
        <span id="df-lang-short">EN</span>
        <svg class="ls-chevron" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div id="df-lang-panel" role="listbox" aria-label="Select Language">
        <div class="ls-panel-header">
          <div class="ls-panel-dot"></div>
          <span class="ls-panel-title">Select Language</span>
          <span class="ls-ai-badge" style="margin-left:auto">AUTO</span>
        </div>
        <div class="ls-options">
          ${Object.entries(LANGS).map(([code, info]) => `
            <div class="ls-option" data-lang="${code}" role="option" tabindex="0" aria-selected="false">
              <span class="ls-flag" aria-hidden="true">${info.flag}</span>
              <span class="ls-name">${info.label}</span>
              ${info.dir === 'rtl' ? '<span class="ls-rtl-badge">RTL</span>' : ''}
              <span class="ls-code">${info.short}</span>
              <svg class="ls-check" viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          `).join('')}
        </div>
        <div class="ls-panel-footer">
          <span class="ls-panel-footer-dot"></span>
          Smart Detection · RTL/LTR Auto
        </div>
      </div>
    `;

    const navRight = document.querySelector('.nav-right');
    if (navRight) {
      navRight.insertBefore(wrapper, navRight.firstChild);
    } else {
      Object.assign(wrapper.style, { position:'fixed', bottom:'24px', right:'24px', zIndex:'99997' });
      document.body.appendChild(wrapper);
    }
    _attachSwitcherEvents(wrapper);
  }

  function _attachSwitcherEvents(wrapper) {
    const btn   = document.getElementById('df-lang-btn');
    const panel = document.getElementById('df-lang-panel');
    const open  = () => { panel.classList.add('ls-open'); btn.classList.add('ls-open'); btn.setAttribute('aria-expanded','true'); };
    const close = () => { panel.classList.remove('ls-open'); btn.classList.remove('ls-open'); btn.setAttribute('aria-expanded','false'); };
    const toggle = () => panel.classList.contains('ls-open') ? close() : open();

    btn.addEventListener('click', e => { e.stopPropagation(); toggle(); });
    document.querySelectorAll('.ls-option').forEach(opt => {
      opt.addEventListener('click', () => { applyLang(opt.dataset.lang, true); close(); });
      opt.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); opt.click(); }
        if (e.key === 'Escape') close();
      });
    });
    document.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    panel.addEventListener('click', e => e.stopPropagation());
  }

  function _updateSwitcherUI(lang) {
    const info    = LANGS[lang];
    const flagEl  = document.getElementById('df-lang-flag');
    const shortEl = document.getElementById('df-lang-short');
    if (flagEl)  flagEl.textContent  = info.flag;
    if (shortEl) shortEl.textContent = info.short;
    document.querySelectorAll('.ls-option').forEach(opt => {
      const active = opt.dataset.lang === lang;
      opt.classList.toggle('ls-active', active);
      opt.setAttribute('aria-selected', active);
    });
  }

  /* ═══════════════════════════════════════════════
     § 12 — DATA-I18N ATTRIBUTE INJECTOR
  ═══════════════════════════════════════════════ */
  function _injectAttributes() {
    const tag  = (el, key, type) => { if (!el) return; el.dataset.i18n = key; if (type) el.dataset.i18nType = type; };
    const q    = s => document.querySelector(s);
    const qa   = s => [...document.querySelectorAll(s)];

    /* ── NAVBAR ── */
    const navLinks = qa('.nav-links li a');
    tag(navLinks[0], 'nav_home');
    tag(navLinks[1], 'nav_projects');
    tag(navLinks[2], 'nav_demand');
    tag(navLinks[3], 'nav_contact');
    tag(q('.nav-right .btn-primary'), 'nav_cta');
    const mobLinks = qa('.mobile-menu li a');
    tag(mobLinks[0], 'nav_home');
    tag(mobLinks[1], 'nav_projects');
    tag(mobLinks[2], 'nav_demand');
    tag(mobLinks[3], 'nav_contact');
    tag(q('.mobile-cta .btn-primary'), 'nav_cta');

    /* ── HERO BADGE ── */
    const heroBadge = q('.hero .badge');
    if (heroBadge) {
      const txt = [...heroBadge.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (txt) {
        const s = document.createElement('span');
        s.dataset.i18n = 'badge_hero';
        s.textContent = txt.textContent.trim();
        txt.replaceWith(s);
      }
    }

    /* ── HERO H1 — FIX: wrap "with" word ── */
    const h1 = q('.hero h1');
    if (h1) {
      h1.innerHTML = `
        <span data-i18n="hero_h1_1">Get more clients</span><br>
        <span data-i18n="hero_h1_with">with</span> <em><span data-i18n="hero_h1_2">high<br>converting</span></em><br>
        <span data-i18n="hero_h1_3">websites</span><br>
        <span data-i18n="hero_h1_4">&amp; stores</span>`;
    }

    tag(q('.hero-desc'), 'hero_desc');
    const heroBtns = qa('.hero-btns a');
    tag(heroBtns[0], 'hero_btn1');
    tag(heroBtns[1], 'hero_btn2');
    tag(q('.rating-text'), 'social_proof', 'html');
    tag(q('.scroll-hint span'), 'scroll_hint');

    /* ── STATS ── */
    const statLabels = qa('.stat-label');
    tag(statLabels[0], 'stat_projects');
    tag(statLabels[1], 'stat_clients');
    tag(statLabels[2], 'stat_years');

    /* ── PROJECTS SECTION LABEL ── */
    const secLabel = q('.section-label');
    if (secLabel) {
      const dot = secLabel.querySelector('.section-label-dot');
      secLabel.innerHTML = '';
      if (dot) secLabel.appendChild(dot);
      const s = document.createElement('span');
      s.dataset.i18n = 'section_badge';
      s.textContent  = 'Portfolio & Work';
      secLabel.appendChild(s);
    }

    /* ── POWER TITLE ── */
    const powerLine = q('.power-title');
    if (powerLine) {
      powerLine.innerHTML = `
        <span data-i18n="power_title1">See how I turn ideas into</span><br>
        <span class="gradient-text" data-i18n="power_title2">Powerful &amp; Professional</span><br>
        <span data-i18n="power_title3">websites &amp; stores</span>`;
    }

    /* ── FEATURE ITEMS ── */
    const feats = qa('.f-text');
    if (feats[0]) { tag(feats[0].querySelector('strong'), 'feat_fast');  tag(feats[0].querySelector('span'), 'feat_fast_s'); }
    if (feats[1]) { tag(feats[1].querySelector('strong'), 'feat_pixel'); tag(feats[1].querySelector('span'), 'feat_pixel_s'); }
    if (feats[2]) { tag(feats[2].querySelector('strong'), 'feat_conv');  tag(feats[2].querySelector('span'), 'feat_conv_s'); }

    /* ── FILTER TABS ── */
    const tabs = qa('.tab-trigger');
    tag(tabs[0], 'tab_all');
    tag(tabs[1], 'tab_websites');
    tag(tabs[2], 'tab_stores');

    /* ── CHIPS — tag all chips in projects section ── */
    const chipMap = {
      business:'chip_business', agency:'chip_agency', portfolio:'chip_portfolio',
      saas:'chip_saas', blog:'chip_blog', 'landing-page':'chip_landing',
      education:'chip_education', startup:'chip_startup',
      fashion:'chip_fashion', electronics:'chip_electronics', beauty:'chip_beauty',
      home:'chip_home', sports:'chip_sports', food:'chip_food',
      luxury:'chip_luxury', general:'chip_general',
    };
    qa('.chip[data-cat]').forEach(chip => {
      const key = chipMap[chip.dataset.cat];
      if (key) tag(chip, key);
    });

    /* ── DISCOVER / SHOW LESS ── */
    const discoverSpan = q('#toggleProjects span');
    tag(discoverSpan, 'btn_discover');
    const showLessBtn = q('#showLessBtn');
    if (showLessBtn) {
      const txt = [...showLessBtn.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (txt) {
        const s = document.createElement('span');
        s.dataset.i18n = 'btn_less';
        s.textContent  = txt.textContent.trim();
        txt.replaceWith(s);
      }
    }

    /* ── WIZARD ── */
    tag(q('#stepStatusMsg'), 'wiz_s1_msg');
    const phaseHeaders = qa('.phase-header');
    if (phaseHeaders[0]) { tag(phaseHeaders[0].querySelector('h2'), 'wiz_q1'); tag(phaseHeaders[0].querySelector('p'), 'wiz_q1_sub'); }
    if (phaseHeaders[1]) { tag(phaseHeaders[1].querySelector('h2'), 'wiz_q2'); tag(phaseHeaders[1].querySelector('p'), 'wiz_q2_sub'); }
    if (phaseHeaders[2]) { tag(phaseHeaders[2].querySelector('h2'), 'wiz_q3'); }
    const typeCards = qa('.type-card');
    const tcMap = [['type_web','type_web_s'],['type_store','type_store_s'],['type_app','type_app_s']];
    typeCards.forEach((card, i) => {
      if (!tcMap[i]) return;
      tag(card.querySelector('h3'), tcMap[i][0]);
      tag(card.querySelector('p'),  tcMap[i][1]);
    });
    const inputGroups = qa('.details-grid .input-group label');
    tag(inputGroups[0], 'wiz_goal');
    tag(inputGroups[1], 'wiz_level');
    const pills = qa('.pills-container .pill');
    ['pill_sell','pill_lead','pill_show','pill_start','pill_pro','pill_adv'].forEach((k, i) => tag(pills[i], k));
    tag(q('#clientName'),  'name_ph',  'placeholder');
    tag(q('#clientPhone'), 'phone_ph', 'placeholder');
    const backBtns = qa('.back-link');
    tag(backBtns[0], 'wiz_back');
    tag(backBtns[1], 'wiz_back2');
    tag(q('.launch-btn'), 'wiz_send');

    /* ── CONTACT ── */
    const badgePrem = q('.badge-premium');
    if (badgePrem) {
      const dot = badgePrem.querySelector('.badge-dot');
      badgePrem.innerHTML = '';
      if (dot) badgePrem.appendChild(dot);
      const s = document.createElement('span');
      s.dataset.i18n = 'badge_free';
      s.textContent  = 'FREE CONSULTATION';
      badgePrem.appendChild(s);
    }
    tag(q('.cta-title'),  'contact_h2',  'html');
    tag(q('.cta-desc'),   'contact_desc');
    const ctaBtns = qa('.cta-btn');
    if (ctaBtns[0]) {
      tag(ctaBtns[0].querySelector('.cta-btn-text strong'), 'btn_whatsapp');
      tag(ctaBtns[0].querySelector('.cta-btn-text span'),   'btn_wa_sub');
    }
    if (ctaBtns[1]) {
      tag(ctaBtns[1].querySelector('.cta-btn-text strong'), 'btn_email');
      tag(ctaBtns[1].querySelector('.cta-btn-text span'),   'btn_email_sub');
    }
    const trustTexts = qa('.trust-text');
    if (trustTexts[0]) { tag(trustTexts[0].querySelectorAll('span, strong')[0], 'trust_reply');  tag(trustTexts[0].querySelectorAll('span, strong')[1], 'trust_reply2'); }
    if (trustTexts[1]) { tag(trustTexts[1].querySelectorAll('span, strong')[0], 'trust_safe');   tag(trustTexts[1].querySelectorAll('span, strong')[1], 'trust_safe2'); }
    if (trustTexts[2]) { tag(trustTexts[2].querySelectorAll('span, strong')[0], 'trust_no');     tag(trustTexts[2].querySelectorAll('span, strong')[1], 'trust_no2'); }
    tag(q('.quote-text'), 'quote_text');
    tag(q('.form-header-text h3'), 'form_title');
    tag(q('.form-header-text p'),  'form_sub');
    tag(q('#cName'),    'f_name_ph',    'placeholder');
    tag(q('#cContact'), 'f_contact_ph', 'placeholder');
    tag(q('#cMsg'),     'f_msg_ph',     'placeholder');
    tag(q('.input-hint'), 'f_msg_hint');
    tag(q('.file-info strong'), 'f_file_t');
    tag(q('.file-info span'),   'f_file_s');
    tag(q('#fileBtn'),          'f_choose');
    const submitBtn = q('.form-submit-btn');
    if (submitBtn) {
      const txt = [...submitBtn.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (txt) {
        const s = document.createElement('span');
        s.dataset.i18n = 'f_submit';
        s.textContent  = txt.textContent.trim();
        txt.replaceWith(s);
      }
    }
    const disclaim = q('.form-disclaimer');
    if (disclaim) {
      const txt = [...disclaim.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (txt) {
        const s = document.createElement('span');
        s.dataset.i18n = 'f_disclaimer';
        s.textContent  = txt.textContent.trim();
        txt.replaceWith(s);
      }
    }

    /* ── FOOTER ── */
    tag(q('.df-brand-desc'), 'footer_desc');
    const fBadges = qa('.df-badge-row');
    ['f_badge_sec','f_badge_fast','f_badge_sup'].forEach((key, i) => {
      if (!fBadges[i]) return;
      const txt = [...fBadges[i].childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (txt) {
        const s = document.createElement('span');
        s.dataset.i18n = key;
        s.textContent  = txt.textContent.trim();
        txt.replaceWith(s);
      }
    });
    const colTitles = qa('.df-col-title');
    tag(colTitles[0], 'f_quick');
    tag(colTitles[1], 'f_plans');
    tag(colTitles[2], 'f_contact');
    tag(colTitles[3], 'f_follow');
    const planInfo = qa('.df-plan-info');
    if (planInfo[0]) { tag(planInfo[0].querySelector('strong'), 'f_plan1'); tag(planInfo[0].querySelector('span'), 'f_plan1_s'); }
    if (planInfo[1]) { tag(planInfo[1].querySelector('strong'), 'f_plan2'); tag(planInfo[1].querySelector('span'), 'f_plan2_s'); }
    if (planInfo[2]) { tag(planInfo[2].querySelector('strong'), 'f_plan3'); tag(planInfo[2].querySelector('span'), 'f_plan3_s'); }
    const botSpan = q('.df-bottom > span');
    tag(botSpan, 'f_copy');
    const botLinks = qa('.df-bottom-links a');
    tag(botLinks[0], 'f_privacy');
    tag(botLinks[1], 'f_terms');
    tag(botLinks[2], 'f_cookie');
    const loveTxt = q('.df-love');
    if (loveTxt) {
      const nodes = [...loveTxt.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
      nodes.forEach((node, i) => {
        const s = document.createElement('span');
        s.dataset.i18n = i === 0 ? 'f_made' : 'f_made2';
        s.textContent  = node.textContent.trim();
        node.replaceWith(s);
      });
    }

    /* ── AVAILABILITY BAR ── */
    const avSegs = qa('.df-av-seg');
    if (avSegs[0]) tag(avSegs[0].querySelector('.df-live-label'), 'avail_live');
    if (avSegs[1]) tag(avSegs[1].querySelector('.df-av-sub'), 'avail_spots');
    const avLast = q('.df-av-seg.df-av-last .df-av-sub');
    tag(avLast, 'avail_booked');
  }

  /* ═══════════════════════════════════════════════
     § 13 — PATCH PROJECT CARD RENDERER
     Monkey-patches renderGrid so "View Live" text
     always comes from the translation DB
  ═══════════════════════════════════════════════ */
  function _patchProjectRenderer() {
    /* We wait for the projects script to define renderGrid, then wrap it */
    const MAX_WAIT = 3000;
    const INTERVAL = 100;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += INTERVAL;
      /* The projects script is an IIFE — we can't patch renderGrid directly.
         Instead we use a MutationObserver on #projectGrid to translate
         newly inserted .live-link nodes automatically. */
      clearInterval(interval);
      _observeProjectGrid();
    }, INTERVAL);

    if (elapsed >= MAX_WAIT) clearInterval(interval);
  }

  function _observeProjectGrid() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    const mo = new MutationObserver(() => {
      /* Translate any live-link whose text is still "View Live" (EN default) */
      grid.querySelectorAll('.live-link').forEach(link => {
        const svg = link.querySelector('svg');
        const translated = _translate('card_view_live', currentLang);
        link.textContent = translated;
        if (svg) link.appendChild(svg);
      });

      /* Also tag chips that may have been re-rendered */
      const chipMap = {
        business:'chip_business', agency:'chip_agency', portfolio:'chip_portfolio',
        saas:'chip_saas', blog:'chip_blog', 'landing-page':'chip_landing',
        education:'chip_education', startup:'chip_startup',
        fashion:'chip_fashion', electronics:'chip_electronics', beauty:'chip_beauty',
        home:'chip_home', sports:'chip_sports', food:'chip_food',
        luxury:'chip_luxury', general:'chip_general',
      };
      grid.querySelectorAll('.card-tag').forEach(tag => {
        /* card-tag shows CAT_LABELS[tag] — we translate via reverse lookup */
        /* No action needed here: card-tag is always regenerated from JS CAT_LABELS */
      });
    });

    mo.observe(grid, { childList: true, subtree: true });
  }

  /* ═══════════════════════════════════════════════
     § 14 — PATCH DEMAND CATEGORY BUILDER
     Patches buildCategories() so dynamically
     rendered cat-items use i18n keys
  ═══════════════════════════════════════════════ */
  function _patchDemandBuilder() {
    /* We listen for phase2 becoming active and tag the cat-items */
    const phase2 = document.getElementById('phase2');
    if (!phase2) return;

    const mo = new MutationObserver(() => {
      if (!phase2.classList.contains('active')) return;
      /* Small delay to let buildCategories() finish */
      setTimeout(() => {
        document.querySelectorAll('#dynamicCategories .cat-item').forEach(item => {
          const h4 = item.querySelector('h4');
          const p  = item.querySelector('p');
          if (!h4) return;
          /* Store EN title for future re-translations */
          if (!item.dataset.enTitle) item.dataset.enTitle = h4.textContent.trim();
          /* Translate now if not EN */
          if (currentLang !== 'en') {
            const keys = DCAT_KEY_MAP[item.dataset.enTitle];
            if (keys) {
              h4.textContent = _translate(keys[0], currentLang);
              if (p) p.textContent = _translate(keys[1], currentLang);
            }
          }
        });
      }, 50);
    });

    mo.observe(phase2, { attributes: true, attributeFilter: ['class'] });

    /* Also observe dynamicCategories for new children */
    const dynGrid = document.getElementById('dynamicCategories');
    if (dynGrid) {
      const mo2 = new MutationObserver(() => {
        setTimeout(() => _translateDemandCategories(currentLang), 30);
      });
      mo2.observe(dynGrid, { childList: true });
    }
  }

  /* ═══════════════════════════════════════════════
     § 15 — PUBLIC API
  ═══════════════════════════════════════════════ */
  const publicAPI = {
    setLang:  (lang, animate) => applyLang(lang, animate),
    getLang:  () => currentLang,
    getLangs: () => ({ ...LANGS }),
    t:        (key, lang) => _translate(key, lang || currentLang),
    extend:   (newKeys) => {
      Object.entries(newKeys).forEach(([key, vals]) => {
        T[key] = { ...T[key], ...vals };
      });
    },
  };

  /* ═══════════════════════════════════════════════
     § 16 — BOOT
  ═══════════════════════════════════════════════ */
  function _boot() {
    _buildSwitcher();
    _injectAttributes();
    applyLang(currentLang, false);
    _patchProjectRenderer();
    _patchDemandBuilder();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _boot);
  } else {
    _boot();
  }

  return publicAPI;

}));
