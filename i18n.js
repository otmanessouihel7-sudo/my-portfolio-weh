/* ================================================================
   DIGITALFLER — Advanced Language Switcher 2026 (FIXED & COMPLETE)
   Zero dependencies · Lightweight · RTL/LTR aware
   ================================================================ */

(function () {
  'use strict';

  /* ─── TRANSLATIONS DATABASE ─────────────────────────────────── */
  const LANGS = {
    en: { label: 'English', short: 'EN', flag: '🇬🇧', dir: 'ltr' },
    fr: { label: 'Français', short: 'FR', flag: '🇫🇷', dir: 'ltr' },
    ar: { label: 'العربية', short: 'AR', flag: '🇲🇦', dir: 'rtl' },
    es: { label: 'Español', short: 'ES', flag: '🇪🇸', dir: 'ltr' },
  };

  const T = {
    /* ── NAVBAR ── */
    nav_home:     { en: 'Home',       fr: 'Accueil',  ar: 'الرئيسية', es: 'Inicio' },
    nav_projects: { en: 'Projects',   fr: 'Projets',  ar: 'المشاريع', es: 'Proyectos' },
    nav_demand:   { en: 'Demand',     fr: 'Demande',  ar: 'الطلب',    es: 'Demanda' },
    nav_contact:  { en: 'Contact',    fr: 'Contact',  ar: 'تواصل',    es: 'Contacto' },
    nav_cta:      { en: 'Get Started',fr: 'Commencer',ar: 'ابدأ الآن',es: 'Empezar' },

    /* ── HERO ── */
    badge_hero:   { en: 'Premium Web Solutions', fr: 'Solutions Web Premium', ar: 'حلول ويب احترافية', es: 'Soluciones Web Premium' },
    hero_h1_1:    { en: 'Get more clients', fr: 'Obtenez plus de clients', ar: 'احصل على المزيد من العملاء', es: 'Consigue más clientes' },
    hero_h1_with: { en: 'with', fr: 'avec', ar: 'مع', es: 'con' },
    hero_h1_2:    { en: 'high converting', fr: 'haute conversion', ar: 'عالي التحويل', es: 'alta conversión' },
    hero_h1_3:    { en: 'websites', fr: 'sites web', ar: 'مواقع إلكترونية', es: 'sitios web' },
    hero_h1_4:    { en: '& stores', fr: '& boutiques', ar: 'ومتاجر', es: 'y tiendas' },
    hero_desc:    { en: 'We design modern, high-performance websites that turn visitors into customers. Clean design, fast loading, and premium user experience.', fr: 'Nous créons des sites web modernes et performants qui transforment les visiteurs en clients. Design épuré, chargement rapide et expérience utilisateur premium.', ar: 'نصمم مواقع ويب حديثة وعالية الأداء تحوّل الزوار إلى عملاء. تصميم أنيق، تحميل سريع، وتجربة مستخدم استثنائية.', es: 'Diseñamos sitios web modernos y de alto rendimiento que convierten visitantes en clientes. Diseño limpio, carga rápida y experiencia de usuario premium.' },
    hero_btn1:    { en: 'View Projects', fr: 'Voir les Projets', ar: 'عرض المشاريع', es: 'Ver Proyectos' },
    hero_btn2:    { en: 'Get One', fr: 'En Obtenir Un', ar: 'احصل على موقع', es: 'Obtener Uno' },
    social_proof: { en: '4.9/5 from 120+ clients', fr: '4.9/5 de +120 clients', ar: '٤.٩/٥ من أكثر من ١٢٠ عميل', es: '4.9/5 de 120+ clientes' },
    scroll_hint:  { en: 'Scroll to explore', fr: 'Défiler pour explorer', ar: 'مرر للاستكشاف', es: 'Desplaza para explorar' },

    /* ── STATS BAR ── */
    stat_projects:{ en: 'Projects', fr: 'Projets',  ar: 'مشروع',  es: 'Proyectos' },
    stat_clients: { en: 'Clients',  fr: 'Clients',  ar: 'عميل',   es: 'Clientes' },
    stat_years:   { en: 'Years',    fr: 'Années',   ar: 'سنوات',  es: 'Años' },

    /* ── PROJECTS SECTION ── */
    section_badge:{ en: 'Portfolio & Work', fr: 'Portfolio & Travaux', ar: 'المعرض والأعمال', es: 'Portfolio y Trabajo' },
    power_title1: { en: 'See how I turn ideas into', fr: 'Voyez comment je transforme les idées en', ar: 'اكتشف كيف أحوّل الأفكار إلى', es: 'Mira cómo convierto ideas en' },
    power_title2: { en: 'Powerful & Professional', fr: 'Puissants & Professionnels', ar: 'مواقع ومتاجر', es: 'Poderosos & Profesionales' },
    power_title3: { en: 'websites & stores', fr: 'sites web & boutiques', ar: 'قوية واحترافية', es: 'sitios web y tiendas' },
    feat_fast:    { en: 'Ultra Fast', fr: 'Ultra Rapide', ar: 'سرعة فائقة', es: 'Ultra Rápido' },
    feat_fast_s:  { en: 'Optimized Speed', fr: 'Vitesse Optimisée', ar: 'سرعة محسّنة', es: 'Velocidad Optimizada' },
    feat_pixel:   { en: 'Pixel Perfect', fr: 'Pixel Parfait', ar: 'دقة بالبكسل', es: 'Pixel Perfecto' },
    feat_pixel_s: { en: 'Mastered Detail', fr: 'Maîtrise des Détails', ar: 'إتقان التفاصيل', es: 'Detalle Maestro' },
    feat_conv:    { en: 'High Converting', fr: 'Haute Conversion', ar: 'تحويل عالي', es: 'Alta Conversión' },
    feat_conv_s:  { en: 'Sales Driven', fr: 'Axé sur les Ventes', ar: 'موجّه للمبيعات', es: 'Orientado a Ventas' },

    /* ── FILTER TABS ── */
    tab_all:      { en: 'All Creations', fr: 'Toutes les Créations', ar: 'كل الأعمال', es: 'Todas las Creaciones' },
    tab_websites: { en: 'Websites',      fr: 'Sites Web',            ar: 'المواقع',   es: 'Sitios Web' },
    tab_stores:   { en: 'E-commerce Stores', fr: 'Boutiques E-commerce', ar: 'المتاجر الإلكترونية', es: 'Tiendas E-commerce' },
    btn_discover: { en: 'Discover More Work', fr: 'Découvrir plus', ar: 'اكتشف المزيد', es: 'Descubrir Más' },
    btn_less:     { en: 'Show Less', fr: 'Afficher Moins', ar: 'عرض أقل', es: 'Mostrar Menos' },

    /* ── PROJECT CHIPS (Website categories) ── */
    chip_business:    { en: 'Business',      fr: 'Business',        ar: 'الأعمال',         es: 'Negocios' },
    chip_agency:      { en: 'Digital Agency',fr: 'Agence Digitale',  ar: 'وكالة رقمية',    es: 'Agencia Digital' },
    chip_portfolio:   { en: 'Portfolio',     fr: 'Portfolio',        ar: 'بورتفوليو',       es: 'Portfolio' },
    chip_saas:        { en: 'SaaS',          fr: 'SaaS',             ar: 'SaaS',            es: 'SaaS' },
    chip_blog:        { en: 'Blog',          fr: 'Blog',             ar: 'مدونة',           es: 'Blog' },
    chip_landing:     { en: 'Landing Page',  fr: 'Page d\'Atterrissage', ar: 'صفحة هبوط',  es: 'Página de Aterrizaje' },
    chip_education:   { en: 'Online Learning',fr: 'Formation en Ligne', ar: 'تعلم إلكتروني', es: 'Aprendizaje Online' },
    chip_startup:     { en: 'Startup',       fr: 'Startup',          ar: 'ناشئة',           es: 'Startup' },
    /* Store chips */
    chip_fashion:     { en: 'Fashion',       fr: 'Mode',             ar: 'أزياء',           es: 'Moda' },
    chip_electronics: { en: 'Electronics',   fr: 'Électronique',     ar: 'إلكترونيات',      es: 'Electrónica' },
    chip_beauty:      { en: 'Beauty',        fr: 'Beauté',           ar: 'جمال',            es: 'Belleza' },
    chip_home:        { en: 'Home Decor',    fr: 'Déco Maison',      ar: 'ديكور منزل',      es: 'Decoración Hogar' },
    chip_sports:      { en: 'Sports',        fr: 'Sports',           ar: 'رياضة',           es: 'Deportes' },
    chip_food:        { en: 'Food & Restaurant', fr: 'Food & Restaurant', ar: 'مطاعم وأكل', es: 'Comida y Restaurante' },
    chip_luxury:      { en: 'Luxury',        fr: 'Luxe',             ar: 'فاخر',            es: 'Lujo' },
    chip_general:     { en: 'Multi Store',   fr: 'Multi Boutique',   ar: 'متجر متعدد',      es: 'Multi Tienda' },

    /* ── PROJECT CARDS ── */
    card_view_live:   { en: 'View Live', fr: 'Voir en Direct', ar: 'عرض مباشر', es: 'Ver en Vivo' },
    card_untitled:    { en: 'Untitled Project', fr: 'Projet sans titre', ar: 'مشروع بلا عنوان', es: 'Proyecto sin título' },
    /* Empty & skeleton states */
    empty_title:      { en: 'No projects match this filter.', fr: 'Aucun projet ne correspond.', ar: 'لا توجد مشاريع لهذا الفلتر.', es: 'Ningún proyecto coincide.' },
    empty_sub:        { en: 'Try a different category.', fr: 'Essayez une autre catégorie.', ar: 'جرب فئة أخرى.', es: 'Intenta otra categoría.' },
    placeholder_title:{ en: 'Connect to WordPress API to display projects.', fr: 'Connectez l\'API WordPress pour afficher les projets.', ar: 'اربط WordPress API لعرض المشاريع.', es: 'Conecta la API de WordPress para mostrar proyectos.' },

    /* ── CAT LABELS (used inside rendered cards) ── */
    catlabel_business:     { en: 'Business',       fr: 'Business',        ar: 'الأعمال',        es: 'Negocios' },
    catlabel_agency:       { en: 'Digital Agency', fr: 'Agence Digitale', ar: 'وكالة رقمية',   es: 'Agencia Digital' },
    catlabel_portfolio:    { en: 'Portfolio',      fr: 'Portfolio',       ar: 'بورتفوليو',      es: 'Portfolio' },
    catlabel_saas:         { en: 'SaaS',           fr: 'SaaS',            ar: 'SaaS',           es: 'SaaS' },
    catlabel_blog:         { en: 'Blog',           fr: 'Blog',            ar: 'مدونة',          es: 'Blog' },
    catlabel_landing_page: { en: 'Landing Page',   fr: 'Page Atterrissage',ar: 'صفحة هبوط',    es: 'Página Aterrizaje' },
    catlabel_education:    { en: 'Online Learning', fr: 'Formation en Ligne', ar: 'تعلم إلكتروني', es: 'Aprendizaje Online' },
    catlabel_startup:      { en: 'Startup',        fr: 'Startup',         ar: 'ناشئة',          es: 'Startup' },
    catlabel_fashion:      { en: 'Fashion',        fr: 'Mode',            ar: 'أزياء',          es: 'Moda' },
    catlabel_electronics:  { en: 'Electronics',    fr: 'Électronique',    ar: 'إلكترونيات',     es: 'Electrónica' },
    catlabel_beauty:       { en: 'Beauty',         fr: 'Beauté',          ar: 'جمال',           es: 'Belleza' },
    catlabel_home:         { en: 'Home Decor',     fr: 'Déco Maison',     ar: 'ديكور منزل',     es: 'Decoración Hogar' },
    catlabel_sports:       { en: 'Sports',         fr: 'Sports',          ar: 'رياضة',          es: 'Deportes' },
    catlabel_food:         { en: 'Food',           fr: 'Food',            ar: 'مطاعم',          es: 'Comida' },
    catlabel_luxury:       { en: 'Luxury',         fr: 'Luxe',            ar: 'فاخر',           es: 'Lujo' },
    catlabel_general:      { en: 'Multi Store',    fr: 'Multi Boutique',  ar: 'متجر متعدد',     es: 'Multi Tienda' },

    /* ── DEMAND / WIZARD ── */
    wiz_step:     { en: 'STEP', fr: 'ÉTAPE', ar: 'خطوة', es: 'PASO' },
    wiz_s1_msg:   { en: 'Select your project foundation', fr: 'Choisissez votre base de projet', ar: 'اختر أساس مشروعك', es: 'Selecciona la base de tu proyecto' },
    wiz_s2_msg:   { en: 'Choose your market niche', fr: 'Choisissez votre niche de marché', ar: 'اختر تخصصك في السوق', es: 'Elige tu nicho de mercado' },
    wiz_s3_msg:   { en: 'Almost there — final details', fr: 'Presque terminé — derniers détails', ar: 'اقتربت! التفاصيل الأخيرة', es: 'Casi listo — últimos detalles' },
    wiz_q1:       { en: "What are we building?", fr: 'Que construisons-nous ?', ar: 'ماذا نبني؟', es: '¿Qué estamos construyendo?' },
    wiz_q1_sub:   { en: 'Select the core DNA of your digital project.', fr: "Sélectionnez l'ADN central de votre projet digital.", ar: 'اختر الهوية الأساسية لمشروعك الرقمي.', es: 'Selecciona el ADN principal de tu proyecto digital.' },
    type_web:     { en: 'Websites', fr: 'Sites Web', ar: 'المواقع', es: 'Sitios Web' },
    type_web_s:   { en: 'Corporate, SaaS & Blogs', fr: 'Corporate, SaaS & Blogs', ar: 'شركات، SaaS والمدونات', es: 'Corporativo, SaaS y Blogs' },
    type_store:   { en: 'E-commerce', fr: 'E-commerce', ar: 'التجارة الإلكترونية', es: 'E-commerce' },
    type_store_s: { en: 'Retail & Digital Sales', fr: 'Vente au Détail & Digital', ar: 'البيع بالتجزئة والمبيعات الرقمية', es: 'Venta Minorista y Digital' },
    type_app:     { en: 'Mobile Apps', fr: 'Apps Mobiles', ar: 'تطبيقات الجوال', es: 'Apps Móviles' },
    type_app_s:   { en: 'iOS & Android Solutions', fr: 'Solutions iOS & Android', ar: 'حلول iOS وAndroid', es: 'Soluciones iOS y Android' },
    wiz_q2:       { en: 'Specific Category', fr: 'Catégorie Spécifique', ar: 'الفئة المحددة', es: 'Categoría Específica' },
    wiz_q2_sub:   { en: 'Matching your project with the right market niche.', fr: 'Adapter votre projet au bon créneau de marché.', ar: 'مطابقة مشروعك مع التخصص الصحيح في السوق.', es: 'Emparejando tu proyecto con el nicho de mercado adecuado.' },
    wiz_q3:       { en: 'Project Specifications', fr: 'Spécifications du Projet', ar: 'مواصفات المشروع', es: 'Especificaciones del Proyecto' },
    wiz_goal:     { en: 'Main Goal (Intent)', fr: 'Objectif Principal', ar: 'الهدف الرئيسي', es: 'Objetivo Principal' },
    wiz_level:    { en: 'Service Level', fr: 'Niveau de Service', ar: 'مستوى الخدمة', es: 'Nivel de Servicio' },
    pill_sell:    { en: 'Sell Products', fr: 'Vendre des Produits', ar: 'بيع المنتجات', es: 'Vender Productos' },
    pill_lead:    { en: 'Generate Leads', fr: 'Générer des Leads', ar: 'جلب العملاء', es: 'Generar Leads' },
    pill_show:    { en: 'Showcase Work', fr: 'Présenter le Travail', ar: 'عرض الأعمال', es: 'Mostrar Trabajo' },
    pill_start:   { en: 'Starter', fr: 'Débutant', ar: 'مبتدئ', es: 'Inicial' },
    pill_start_desc: { en: 'Essential features', fr: 'Fonctionnalités essentielles', ar: 'الميزات الأساسية', es: 'Características esenciales' },
    pill_pro:     { en: 'Professional', fr: 'Professionnel', ar: 'احترافي', es: 'Profesional' },
    pill_pro_desc:   { en: 'Highly recommended', fr: 'Très recommandé', ar: 'موصى به بشدة', es: 'Muy recomendado' },
    pill_adv:     { en: 'Advanced', fr: 'Avancé', ar: 'متقدم', es: 'Avanzado' },
    pill_adv_desc:   { en: 'Custom enterprise build', fr: 'Build entreprise personnalisé', ar: 'بناء مؤسسي مخصص', es: 'Construcción empresarial personalizada' },
    name_ph:      { en: 'Full Name', fr: 'Nom Complet', ar: 'الاسم الكامل', es: 'Nombre Completo' },
    phone_ph:     { en: 'WhatsApp (e.g. +212…)', fr: 'WhatsApp (ex. +33…)', ar: 'واتساب (مثال: 2126...+)', es: 'WhatsApp (ej. +34…)' },
    wiz_back:     { en: '← Previous Step', fr: '← Étape Précédente', ar: 'الخطوة السابقة →', es: '← Paso Anterior' },
    wiz_back2:    { en: '← Back', fr: '← Retour', ar: 'رجوع →', es: '← Atrás' },
    wiz_send:     { en: 'Send Proposal 🚀', fr: 'Envoyer la Proposition 🚀', ar: '🚀 إرسال العرض', es: 'Enviar Propuesta 🚀' },

    /* ── DEMAND — marketOptions ── */
    // Websites
    mo_local_title:   { en: 'Local Business',     fr: 'Business Local',      ar: 'أعمال محلية',         es: 'Negocio Local' },
    mo_local_desc:    { en: 'Companies & clinics', fr: 'Entreprises & cliniques', ar: 'شركات وعيادات',   es: 'Empresas y clínicas' },
    mo_landing_title: { en: 'Landing Page',        fr: 'Page de Destination', ar: 'صفحة هبوط',           es: 'Página de Destino' },
    mo_landing_desc:  { en: 'Conversion-focused / Ads', fr: 'Axé conversion / Pub', ar: 'تحويل وإعلانات', es: 'Orientada a conversión / Ads' },
    mo_brand_title:   { en: 'Personal Brand',      fr: 'Marque Personnelle',  ar: 'علامة شخصية',         es: 'Marca Personal' },
    mo_brand_desc:    { en: 'Influencers & pros',  fr: 'Influenceurs & pros', ar: 'مؤثرون ومحترفون',     es: 'Influencers y profesionales' },
    mo_booking_title: { en: 'Booking Platform',    fr: 'Plateforme de Réservation', ar: 'منصة حجز',      es: 'Plataforma de Reservas' },
    mo_booking_desc:  { en: 'Appointments & services', fr: 'Rendez-vous & services', ar: 'مواعيد وخدمات', es: 'Citas y servicios' },
    mo_saas_title:    { en: 'SaaS / Web App',      fr: 'SaaS / App Web',      ar: 'SaaS / تطبيق ويب',    es: 'SaaS / Aplicación Web' },
    mo_saas_desc:     { en: 'Custom software',     fr: 'Logiciel sur mesure', ar: 'برمجيات مخصصة',        es: 'Software personalizado' },
    mo_content_title: { en: 'Content / Blog',      fr: 'Contenu / Blog',      ar: 'محتوى / مدونة',       es: 'Contenido / Blog' },
    mo_content_desc:  { en: 'SEO & news platforms',fr: 'Plateformes SEO & news', ar: 'منصات SEO وأخبار', es: 'Plataformas SEO y noticias' },
    // Stores
    mo_niche_title:   { en: 'Niche Store',         fr: 'Boutique Niche',      ar: 'متجر متخصص',          es: 'Tienda de Nicho' },
    mo_niche_desc:    { en: 'Standard retail',     fr: 'Commerce standard',   ar: 'تجزئة عادية',         es: 'Comercio estándar' },
    mo_drop_title:    { en: 'Dropshipping',         fr: 'Dropshipping',        ar: 'دروبشيبينج',          es: 'Dropshipping' },
    mo_drop_desc:     { en: 'Inventory-free automation', fr: 'Automatisation sans stock', ar: 'أتمتة بلا مخزون', es: 'Automatización sin inventario' },
    mo_pod_title:     { en: 'Print-On-Demand',      fr: 'Impression à la Demande', ar: 'طباعة عند الطلب', es: 'Impresión Bajo Demanda' },
    mo_pod_desc:      { en: 'Custom merch systems', fr: 'Systèmes merch custom', ar: 'أنظمة تخصيص البضائع', es: 'Sistemas de merch personalizado' },
    mo_digital_title: { en: 'Digital Products',    fr: 'Produits Numériques', ar: 'منتجات رقمية',        es: 'Productos Digitales' },
    mo_digital_desc:  { en: 'Courses, e-books & software', fr: 'Cours, e-books & logiciels', ar: 'دورات وكتب وبرمجيات', es: 'Cursos, e-books y software' },
    mo_local_ecom_title:{ en: 'Local E-com',       fr: 'E-com Local',         ar: 'تجارة محلية',         es: 'E-commerce Local' },
    mo_local_ecom_desc: { en: 'Delivery-focused Morocco', fr: 'Livraison au Maroc', ar: 'توصيل بالمغرب', es: 'Entrega en Marruecos' },
    mo_market_title:  { en: 'Marketplace',         fr: 'Marketplace',         ar: 'سوق إلكتروني',        es: 'Marketplace' },
    mo_market_desc:   { en: 'Multi-vendor platforms', fr: 'Plateformes multi-vendeurs', ar: 'منصات متعددة البائعين', es: 'Plataformas multi-vendedor' },
    // Apps
    mo_ecom_app_title:{ en: 'E-commerce App',      fr: 'App E-commerce',      ar: 'تطبيق تجارة إلكترونية', es: 'App de E-commerce' },
    mo_ecom_app_desc: { en: 'Mobile shopping',     fr: 'Shopping mobile',     ar: 'تسوق جوال',           es: 'Compras móvil' },
    mo_booking_app_title: { en: 'Booking App',     fr: 'App de Réservation',  ar: 'تطبيق حجز',           es: 'App de Reservas' },
    mo_booking_app_desc:  { en: 'Reservations & schedules', fr: 'Réservations & plannings', ar: 'حجوزات وجداول', es: 'Reservas y horarios' },
    mo_biz_title:     { en: 'Business Tool',       fr: 'Outil Business',      ar: 'أداة أعمال',          es: 'Herramienta de Negocio' },
    mo_biz_desc:      { en: 'Internal management', fr: 'Gestion interne',     ar: 'إدارة داخلية',        es: 'Gestión interna' },
    mo_social_title:  { en: 'Social / Community',  fr: 'Social / Communauté', ar: 'اجتماعي / مجتمع',     es: 'Social / Comunidad' },
    mo_social_desc:   { en: 'Engage with users',   fr: 'Engager les utilisateurs', ar: 'تفاعل مع المستخدمين', es: 'Interactuar con usuarios' },
    mo_service_title: { en: 'Service App',         fr: 'App de Service',      ar: 'تطبيق خدمة',          es: 'App de Servicio' },
    mo_service_desc:  { en: 'Delivery or on-demand',fr: 'Livraison ou à la demande', ar: 'توصيل أو عند الطلب', es: 'Entrega o bajo demanda' },

    /* ── DEMAND — Summary & Success ── */
    summary_type_websites: { en: 'Website',        fr: 'Site Web',            ar: 'موقع ويب',            es: 'Sitio Web' },
    summary_type_stores:   { en: 'E-commerce Store',fr: 'Boutique E-commerce',ar: 'متجر إلكتروني',       es: 'Tienda E-commerce' },
    summary_type_apps:     { en: 'Mobile App',     fr: 'App Mobile',          ar: 'تطبيق جوال',          es: 'App Móvil' },
    summary_goal:          { en: 'Goal',           fr: 'Objectif',            ar: 'الهدف',               es: 'Objetivo' },
    summary_level:         { en: 'Level',          fr: 'Niveau',              ar: 'المستوى',             es: 'Nivel' },
    success_title:         { en: 'Proposal Sent!', fr: 'Proposition Envoyée !',ar: 'تم إرسال العرض!',    es: '¡Propuesta Enviada!' },
    success_sub:           { en: "We'll reach out on WhatsApp shortly.", fr: 'Nous vous contacterons sur WhatsApp.', ar: 'سنتواصل معك على واتساب قريباً.', es: 'Te contactaremos por WhatsApp pronto.' },

    /* ── CONTACT ── */
    badge_free:   { en: 'FREE CONSULTATION', fr: 'CONSULTATION GRATUITE', ar: 'استشارة مجانية', es: 'CONSULTA GRATUITA' },
    contact_h2:   { en: "Not sure what to build?\nLet's figure it out together.", fr: "Pas sûr de quoi construire ?\nTrouvons-le ensemble.", ar: "لست متأكداً ماذا تبني؟\nلنكتشف ذلك معاً.", es: "¿No sabes qué construir?\nDescubrámoslo juntos." },
    contact_desc: { en: "Share your idea or problem and I'll give you a clear direction. No pressure, no commitment.", fr: "Partagez votre idée et je vous donnerai une direction claire. Sans pression ni engagement.", ar: "شاركني فكرتك أو مشكلتك وسأعطيك توجيهاً واضحاً. بدون ضغط أو التزام.", es: "Comparte tu idea y te daré una dirección clara. Sin presión ni compromiso." },
    btn_whatsapp: { en: 'Chat on WhatsApp', fr: 'Discuter sur WhatsApp', ar: 'تحدث عبر واتساب', es: 'Chatear en WhatsApp' },
    btn_wa_sub:   { en: 'Fastest way to reach me', fr: 'Le moyen le plus rapide', ar: 'أسرع طريقة للتواصل', es: 'La forma más rápida de contactarme' },
    btn_email:    { en: 'Send an Email', fr: 'Envoyer un Email', ar: 'أرسل بريداً إلكترونياً', es: 'Enviar un Email' },
    btn_email_sub:{ en: "I'll reply within 12h", fr: "Je répondrai sous 12h", ar: 'سأرد خلال 12 ساعة', es: 'Responderé en 12h' },
    trust_reply:  { en: 'Reply within', fr: 'Réponse en', ar: 'رد خلال', es: 'Respuesta en' },
    trust_reply2: { en: '12 hours', fr: '12 heures', ar: '12 ساعة', es: '12 horas' },
    trust_safe:   { en: 'Your idea is', fr: 'Votre idée est', ar: 'فكرتك', es: 'Tu idea está' },
    trust_safe2:  { en: '100% safe', fr: '100% sécurisée', ar: '100% آمنة', es: '100% segura' },
    trust_no:     { en: 'No commitment', fr: 'Sans engagement', ar: 'بدون التزام', es: 'Sin compromiso' },
    trust_no2:    { en: 'Just a conversation', fr: 'Juste une conversation', ar: 'فقط محادثة', es: 'Solo una conversación' },
    quote_text:   { en: 'Sometimes a quick conversation is all you need to move your business forward.', fr: 'Parfois, une courte conversation suffit pour faire avancer votre entreprise.', ar: 'أحياناً محادثة قصيرة هي كل ما تحتاجه لتحريك عملك للأمام.', es: 'A veces una conversación rápida es todo lo que necesitas para impulsar tu negocio.' },
    form_title:   { en: 'Quick Consultation', fr: 'Consultation Rapide', ar: 'استشارة سريعة', es: 'Consulta Rápida' },
    form_sub:     { en: "Fill out the form and I'll get back to you.", fr: "Remplissez le formulaire et je vous recontacterai.", ar: 'أكمل النموذج وسأتواصل معك.', es: 'Completa el formulario y me pondré en contacto contigo.' },
    f_name_ph:    { en: 'Your Name', fr: 'Votre Nom', ar: 'اسمك', es: 'Tu Nombre' },
    f_contact_ph: { en: 'Email or WhatsApp', fr: 'Email ou WhatsApp', ar: 'البريد أو واتساب', es: 'Email o WhatsApp' },
    f_msg_ph:     { en: 'Describe your problem or idea...', fr: 'Décrivez votre problème ou idée...', ar: 'صف مشكلتك أو فكرتك...', es: 'Describe tu problema o idea...' },
    f_msg_hint:   { en: 'The more details, the better I can help.', fr: "Plus vous donnez de détails, mieux je peux vous aider.", ar: 'كلما أعطيت تفاصيل أكثر، كان بإمكاني مساعدتك بشكل أفضل.', es: 'Cuantos más detalles, mejor puedo ayudarte.' },
    f_file_t:     { en: 'Attach idea (optional)', fr: 'Joindre une idée (optionnel)', ar: 'أرفق فكرتك (اختياري)', es: 'Adjuntar idea (opcional)' },
    f_file_s:     { en: 'PDF, DOC, PNG, JPG (Max. 10MB)', fr: 'PDF, DOC, PNG, JPG (Max. 10Mo)', ar: 'PDF, DOC, PNG, JPG (الحد الأقصى 10MB)', es: 'PDF, DOC, PNG, JPG (Máx. 10MB)' },
    f_choose:     { en: 'Choose File', fr: 'Choisir Fichier', ar: 'اختر ملفاً', es: 'Elegir Archivo' },
    f_submit:     { en: 'Get My Answer', fr: 'Obtenir Ma Réponse', ar: 'احصل على إجابتي', es: 'Obtener Mi Respuesta' },
    f_disclaimer: { en: 'This is just a conversation, not a commitment.', fr: "C'est juste une conversation, pas un engagement.", ar: 'هذه مجرد محادثة، وليست التزاماً.', es: 'Esto es solo una conversación, no un compromiso.' },

    /* ── FOOTER ── */
    footer_desc:  { en: 'Helping businesses grow with modern websites & intelligent automation.', fr: 'Aider les entreprises à croître grâce aux sites modernes et à l\'automatisation.', ar: 'نساعد الشركات على النمو بمواقع ويب حديثة وأتمتة ذكية.', es: 'Ayudando a las empresas a crecer con sitios web modernos y automatización inteligente.' },
    f_badge_sec:  { en: '100% Secure', fr: '100% Sécurisé', ar: '100% آمن', es: '100% Seguro' },
    f_badge_fast: { en: 'Fast Delivery', fr: 'Livraison Rapide', ar: 'تسليم سريع', es: 'Entrega Rápida' },
    f_badge_sup:  { en: '24/7 Support', fr: 'Support 24/7', ar: 'دعم 24/7', es: 'Soporte 24/7' },
    f_quick:      { en: 'Quick Links', fr: 'Liens Rapides', ar: 'روابط سريعة', es: 'Links Rápidos' },
    f_plans:      { en: 'Plans', fr: 'Plans', ar: 'الباقات', es: 'Planes' },
    f_plan1:      { en: 'Plan', fr: 'Plan', ar: 'الباقة', es: 'Plan' },
    f_plan1_s:    { en: 'View pricing & packages', fr: 'Voir les tarifs', ar: 'عرض الأسعار والحزم', es: 'Ver precios y paquetes' },
    f_plan2:      { en: 'Onboarding', fr: 'Démarrage', ar: 'البداية', es: 'Incorporación' },
    f_plan2_s:    { en: 'Step-by-step guide', fr: 'Guide étape par étape', ar: 'دليل خطوة بخطوة', es: 'Guía paso a paso' },
    f_plan3:      { en: 'Enterprise', fr: 'Entreprise', ar: 'المؤسسات', es: 'Empresarial' },
    f_plan3_s:    { en: 'Custom solutions', fr: 'Solutions personnalisées', ar: 'حلول مخصصة', es: 'Soluciones personalizadas' },
    f_contact:    { en: 'Contact', fr: 'Contact', ar: 'تواصل', es: 'Contacto' },
    f_follow:     { en: 'Follow Us', fr: 'Suivez-Nous', ar: 'تابعنا', es: 'Síguenos' },
    f_copy:       { en: '© 2026 DigitalFler. All rights reserved.', fr: '© 2026 DigitalFler. Tous droits réservés.', ar: '© 2026 DigitalFler. جميع الحقوق محفوظة.', es: '© 2026 DigitalFler. Todos los derechos reservados.' },
    f_privacy:    { en: 'Privacy Policy', fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية', es: 'Política de Privacidad' },
    f_terms:      { en: 'Terms of Service', fr: "Conditions d'Utilisation", ar: 'شروط الخدمة', es: 'Términos de Servicio' },
    f_cookie:     { en: 'Cookie Policy', fr: 'Politique de Cookies', ar: 'سياسة ملفات تعريف الارتباط', es: 'Política de Cookies' },
    f_made:       { en: 'Made with', fr: 'Fait avec', ar: 'صُنع بـ', es: 'Hecho con' },
    f_made2:      { en: 'for your success', fr: 'pour votre succès', ar: 'من أجل نجاحك', es: 'para tu éxito' },
    /* Footer quick links */
    f_nav_blog:   { en: 'Blog', fr: 'Blog', ar: 'مدونة', es: 'Blog' },
    /* Footer contact labels */
    f_c_whatsapp: { en: 'WhatsApp', fr: 'WhatsApp', ar: 'واتساب', es: 'WhatsApp' },
    f_c_email:    { en: 'Email', fr: 'Email', ar: 'البريد الإلكتروني', es: 'Email' },
    f_c_location: { en: 'Location', fr: 'Localisation', ar: 'الموقع', es: 'Ubicación' },
    f_c_morocco:  { en: 'Morocco 🇲🇦', fr: 'Maroc 🇲🇦', ar: 'المغرب 🇲🇦', es: 'Marruecos 🇲🇦' },
    /* Footer socials */
    f_s_facebook: { en: 'Facebook', fr: 'Facebook', ar: 'فيسبوك', es: 'Facebook' },
    f_s_instagram:{ en: 'Instagram', fr: 'Instagram', ar: 'إنستغرام', es: 'Instagram' },
    f_s_linkedin: { en: 'LinkedIn', fr: 'LinkedIn', ar: 'لينكدإن', es: 'LinkedIn' },
    f_s_youtube:  { en: 'YouTube', fr: 'YouTube', ar: 'يوتيوب', es: 'YouTube' },
    avail_live:   { en: 'Live Availability', fr: 'Disponibilité Live', ar: 'التوفر المباشر', es: 'Disponibilidad en Vivo' },
    avail_spots:  { en: 'Spots left this month:', fr: 'Places restantes ce mois:', ar: 'الأماكن المتاحة هذا الشهر:', es: 'Lugares disponibles este mes:' },
    avail_booked: { en: 'Projects booked this month', fr: 'Projets réservés ce mois', ar: 'المشاريع المحجوزة هذا الشهر', es: 'Proyectos reservados este mes' },
  };

  /* ─── CURRENT LANG ──────────────────────────────────────────── */
  let currentLang = localStorage.getItem('df_lang') || 'en';

  /* ─── PUBLIC GETTER (used by projects & demand scripts) ─────── */
  window.dfGetLang = function() { return currentLang; };
  window.dfT = function(key, lang) {
    const l = lang || currentLang;
    return T[key]?.[l] || T[key]?.['en'] || '';
  };

  /* ─── APPLY TRANSLATIONS ────────────────────────────────────── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('df_lang', lang);
    const info = LANGS[lang];
    const doc  = document.documentElement;

    doc.setAttribute('dir', info.dir);
    doc.setAttribute('lang', lang);

    /* Apply each translation via data-i18n attributes */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key  = el.dataset.i18n;
      const type = el.dataset.i18nType || 'text';
      const val  = T[key]?.[lang];
      if (!val) return;

      if (type === 'placeholder') {
        el.placeholder = val;
      } else if (type === 'html') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    /* ── RTL arrow fix for Demand back buttons ── */
    const isRTL = info.dir === 'rtl';
    document.querySelectorAll('.back-link[data-goto]').forEach(btn => {
      const goto = btn.dataset.goto;
      if (goto === '1') btn.textContent = T['wiz_back'][lang];
      if (goto === '2') btn.textContent = T['wiz_back2'][lang];
    });

    /* ── Re-render dynamic sections ── */
    rerenderChips(lang);
    rerenderMarketGrid(lang);
    rerenderProjectCards(lang);
    updateStatusMessages(lang);
    updateSwitcherUI(lang);
  }

  /* ─── RE-RENDER CHIPS ───────────────────────────────────────── */
  const chipKeyMap = {
    'business':    'chip_business',
    'agency':      'chip_agency',
    'portfolio':   'chip_portfolio',
    'saas':        'chip_saas',
    'blog':        'chip_blog',
    'landing-page':'chip_landing',
    'education':   'chip_education',
    'startup':     'chip_startup',
    'fashion':     'chip_fashion',
    'electronics': 'chip_electronics',
    'beauty':      'chip_beauty',
    'home':        'chip_home',
    'sports':      'chip_sports',
    'food':        'chip_food',
    'luxury':      'chip_luxury',
    'general':     'chip_general',
  };

  function rerenderChips(lang) {
    document.querySelectorAll('.chip[data-cat]').forEach(chip => {
      const cat = chip.dataset.cat;
      const key = chipKeyMap[cat];
      if (key && T[key]?.[lang]) chip.textContent = T[key][lang];
    });
  }

  /* ─── UPDATE STATUS MESSAGES (Demand wizard) ───────────────── */
  function updateStatusMessages(lang) {
    const msgEl = document.getElementById('stepStatusMsg');
    if (!msgEl) return;
    // get current step from data attr we set
    const step = parseInt(msgEl.dataset.currentStep || '1');
    const msgs = { 1: 'wiz_s1_msg', 2: 'wiz_s2_msg', 3: 'wiz_s3_msg' };
    if (msgs[step]) msgEl.textContent = T[msgs[step]][lang];
  }

  /* ─── RE-RENDER MARKET GRID (Demand phase 2) ───────────────── */
  // marketOptions keyed by type
  const marketOptionsKeys = {
    websites: [
      { titleKey: 'mo_local_title',   descKey: 'mo_local_desc',   origTitle: 'Local Business' },
      { titleKey: 'mo_landing_title', descKey: 'mo_landing_desc', origTitle: 'Landing Page' },
      { titleKey: 'mo_brand_title',   descKey: 'mo_brand_desc',   origTitle: 'Personal Brand' },
      { titleKey: 'mo_booking_title', descKey: 'mo_booking_desc', origTitle: 'Booking Platform' },
      { titleKey: 'mo_saas_title',    descKey: 'mo_saas_desc',    origTitle: 'SaaS / Web App' },
      { titleKey: 'mo_content_title', descKey: 'mo_content_desc', origTitle: 'Content / Blog' },
    ],
    stores: [
      { titleKey: 'mo_niche_title',      descKey: 'mo_niche_desc',      origTitle: 'Niche Store' },
      { titleKey: 'mo_drop_title',       descKey: 'mo_drop_desc',       origTitle: 'Dropshipping' },
      { titleKey: 'mo_pod_title',        descKey: 'mo_pod_desc',        origTitle: 'Print-On-Demand' },
      { titleKey: 'mo_digital_title',    descKey: 'mo_digital_desc',    origTitle: 'Digital Products' },
      { titleKey: 'mo_local_ecom_title', descKey: 'mo_local_ecom_desc', origTitle: 'Local E-com' },
      { titleKey: 'mo_market_title',     descKey: 'mo_market_desc',     origTitle: 'Marketplace' },
    ],
    apps: [
      { titleKey: 'mo_ecom_app_title',    descKey: 'mo_ecom_app_desc',    origTitle: 'E-commerce App' },
      { titleKey: 'mo_booking_app_title', descKey: 'mo_booking_app_desc', origTitle: 'Booking App' },
      { titleKey: 'mo_biz_title',         descKey: 'mo_biz_desc',         origTitle: 'Business Tool' },
      { titleKey: 'mo_social_title',      descKey: 'mo_social_desc',      origTitle: 'Social / Community' },
      { titleKey: 'mo_service_title',     descKey: 'mo_service_desc',     origTitle: 'Service App' },
    ],
  };

  // Expose for demand script re-render
  window.dfMarketKeys = marketOptionsKeys;

  function rerenderMarketGrid(lang) {
    const grid = document.getElementById('dynamicCategories');
    if (!grid || grid.children.length === 0) return;

    const items = grid.querySelectorAll('.cat-item');
    items.forEach(item => {
      const h4  = item.querySelector('h4');
      const p   = item.querySelector('p');
      const key = item.dataset.i18nKey;
      if (!key) return;
      const entry = Object.values(marketOptionsKeys).flat().find(e => e.titleKey === key);
      if (!entry) return;
      if (h4) h4.textContent = T[entry.titleKey]?.[lang] || h4.textContent;
      if (p)  p.textContent  = T[entry.descKey]?.[lang]  || p.textContent;
    });
  }

  /* ─── RE-RENDER PROJECT CARDS ───────────────────────────────── */
  const catLabelKeyMap = {
    'business':    'catlabel_business',
    'agency':      'catlabel_agency',
    'portfolio':   'catlabel_portfolio',
    'saas':        'catlabel_saas',
    'blog':        'catlabel_blog',
    'landing-page':'catlabel_landing_page',
    'education':   'catlabel_education',
    'startup':     'catlabel_startup',
    'fashion':     'catlabel_fashion',
    'electronics': 'catlabel_electronics',
    'beauty':      'catlabel_beauty',
    'home':        'catlabel_home',
    'sports':      'catlabel_sports',
    'food':        'catlabel_food',
    'luxury':      'catlabel_luxury',
    'general':     'catlabel_general',
  };

  function rerenderProjectCards(lang) {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    // Translate "View Live" links
    grid.querySelectorAll('.live-link').forEach(el => {
      const svg = el.querySelector('svg');
      el.textContent = T['card_view_live'][lang];
      if (svg) el.appendChild(svg);
    });

    // Translate card tags
    grid.querySelectorAll('.card-tag[data-cat-slug]').forEach(el => {
      const slug = el.dataset.catSlug;
      const key  = catLabelKeyMap[slug];
      if (key && T[key]?.[lang]) el.textContent = T[key][lang];
    });

    // Translate empty state
    const emptyTitle = grid.querySelector('.empty-state p');
    if (emptyTitle) {
      emptyTitle.innerHTML =
        T['empty_title'][lang] + '<br>' + T['empty_sub'][lang];
    }

    // Translate placeholder API state
    const placeholder = grid.querySelector('[data-i18n-placeholder]');
    if (placeholder) {
      placeholder.textContent = T['placeholder_title'][lang];
    }
  }

  /* ─── INJECT SWITCHER UI ────────────────────────────────────── */
  function injectSwitcher() {
    const style = document.createElement('style');
    style.textContent = `
/* ════════════════════════════════════════════════════
   LANG SWITCHER 2026 — DigitalFler
════════════════════════════════════════════════════ */
:root {
  --ls-orange: #ff5e1a;
  --ls-bg: rgba(10,10,10,0.95);
  --ls-surface: rgba(255,255,255,0.04);
  --ls-border: rgba(255,255,255,0.08);
  --ls-text: #e8e8e8;
  --ls-muted: #666;
  --ls-radius: 14px;
  --ls-glow: rgba(255,94,26,0.35);
}
#df-lang-btn {
  position: relative;
  display: flex; align-items: center; gap: 7px;
  padding: 7px 13px 7px 10px;
  background: var(--ls-surface);
  border: 1px solid var(--ls-border);
  border-radius: 100px;
  cursor: pointer;
  color: var(--ls-text);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: .04em;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all .22s cubic-bezier(.22,1,.36,1);
  outline: none;
  user-select: none;
  white-space: nowrap;
}
#df-lang-btn:hover {
  border-color: rgba(255,94,26,.4);
  background: rgba(255,94,26,.08);
  box-shadow: 0 0 0 3px var(--ls-glow);
  transform: scale(1.03);
}
#df-lang-btn.open {
  border-color: rgba(255,94,26,.6);
  background: rgba(255,94,26,.12);
  box-shadow: 0 0 0 4px var(--ls-glow);
}
.ls-globe {
  width: 15px; height: 15px;
  stroke: var(--ls-orange); fill: none;
  stroke-width: 1.8; flex-shrink: 0;
  transition: transform .5s ease;
}
#df-lang-btn.open .ls-globe { transform: rotate(180deg); }
#df-lang-flag { font-size: 14px; line-height: 1; }
#df-lang-short { font-family: 'Syne', 'Inter', sans-serif; }
.ls-chevron {
  width: 10px; height: 10px;
  stroke: var(--ls-muted); fill: none;
  stroke-width: 2.2; stroke-linecap: round;
  transition: transform .25s, stroke .25s;
  flex-shrink: 0;
}
#df-lang-btn.open .ls-chevron { transform: rotate(180deg); stroke: var(--ls-orange); }
#df-lang-panel {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 220px;
  background: rgba(12,12,12,0.97);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: var(--ls-radius);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.05) inset, 0 1px 0 rgba(255,255,255,0.06) inset;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  transform: translateY(8px) scale(0.97);
  transform-origin: top right;
  transition: opacity .22s cubic-bezier(.22,1,.36,1), transform .22s cubic-bezier(.22,1,.36,1);
  z-index: 9999;
}
#df-lang-panel.open {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: all;
}
@media (max-height: 520px) {
  #df-lang-panel { top: auto; bottom: calc(100% + 12px); transform-origin: bottom right; }
}
.ls-panel-header {
  padding: 12px 16px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex; align-items: center; gap: 8px;
}
.ls-panel-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--ls-orange);
  box-shadow: 0 0 6px var(--ls-orange);
  animation: ls-pulse 2s infinite;
}
@keyframes ls-pulse {
  0%,100% { opacity:1; transform:scale(1); }
  50%      { opacity:.6; transform:scale(1.3); }
}
.ls-panel-title {
  font-size: 10.5px; font-weight: 700;
  color: var(--ls-muted);
  text-transform: uppercase;
  letter-spacing: .12em;
}
.ls-options { padding: 8px; display: flex; flex-direction: column; gap: 3px; }
.ls-option {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background .18s, transform .18s;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: none;
}
.ls-option::before {
  content: '';
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 2px; border-radius: 2px;
  background: var(--ls-orange);
  transform: scaleY(0);
  transition: transform .2s;
}
.ls-option:hover::before, .ls-option.active::before { transform: scaleY(1); }
.ls-option:hover { background: rgba(255,255,255,0.04); }
.ls-option.active { background: rgba(255,94,26,.09); }
.ls-option:hover { transform: translateX(2px); }
.ls-flag { font-size: 18px; line-height: 1; flex-shrink: 0; }
.ls-name { flex: 1; font-size: 13.5px; font-weight: 500; color: var(--ls-text); }
.ls-code {
  font-size: 10.5px; font-weight: 700;
  color: var(--ls-muted);
  letter-spacing: .06em;
  font-family: 'Syne', monospace;
}
.ls-option.active .ls-code { color: var(--ls-orange); }
.ls-check {
  width: 14px; height: 14px; flex-shrink: 0;
  stroke: var(--ls-orange); fill: none;
  stroke-width: 2.5; stroke-linecap: round;
  opacity: 0; transform: scale(0.6);
  transition: opacity .2s, transform .2s;
}
.ls-option.active .ls-check { opacity: 1; transform: scale(1); }
.ls-rtl-badge {
  font-size: 9px; font-weight: 700;
  color: var(--ls-orange);
  background: rgba(255,94,26,.12);
  border: 1px solid rgba(255,94,26,.25);
  border-radius: 4px;
  padding: 1px 5px;
  letter-spacing: .04em;
}
.ls-panel-footer {
  padding: 10px 16px;
  border-top: 1px solid rgba(255,255,255,0.06);
  font-size: 10px; color: var(--ls-muted);
  text-align: center;
}
#df-lang-panel.open .ls-option {
  opacity: 1;
  animation: ls-slide-in .25s cubic-bezier(.22,1,.36,1) both;
}
#df-lang-panel.open .ls-option:nth-child(1) { animation-delay: .03s; }
#df-lang-panel.open .ls-option:nth-child(2) { animation-delay: .08s; }
#df-lang-panel.open .ls-option:nth-child(3) { animation-delay: .13s; }
#df-lang-panel.open .ls-option:nth-child(4) { animation-delay: .18s; }
@keyframes ls-slide-in {
  from { opacity:0; transform:translateX(8px); }
  to   { opacity:1; transform:translateX(0); }
}
[dir="rtl"] #df-lang-panel { right: auto; left: 0; transform-origin: top left; }
[dir="rtl"] #df-lang-panel.open { transform: translateY(0) scale(1); }
[dir="rtl"] .ls-option::before { left: auto; right: 0; }
[dir="rtl"] .ls-option:hover { transform: translateX(-2px); }
#df-lang-wrapper {
  position: relative;
  display: flex; align-items: center;
  margin-left: 8px;
}
[dir="rtl"] #df-lang-wrapper { margin-left: 0; margin-right: 8px; }
@media (max-width: 640px) {
  #df-lang-btn { padding: 6px 10px 6px 8px; font-size: 12px; gap: 5px; }
  #df-lang-panel { width: 200px; }
  #df-lang-flag { font-size: 13px; }
}
    `;
    document.head.appendChild(style);

    const wrapper = document.createElement('div');
    wrapper.id = 'df-lang-wrapper';
    wrapper.innerHTML = `
      <button id="df-lang-btn" aria-label="Switch Language" aria-expanded="false" aria-haspopup="listbox">
        <svg class="ls-globe" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span id="df-lang-flag">🇬🇧</span>
        <span id="df-lang-short">EN</span>
        <svg class="ls-chevron" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div id="df-lang-panel" role="listbox" aria-label="Select Language">
        <div class="ls-panel-header">
          <div class="ls-panel-dot"></div>
          <span class="ls-panel-title">Select Language</span>
        </div>
        <div class="ls-options">
          ${Object.entries(LANGS).map(([code, info]) => `
            <div class="ls-option" data-lang="${code}" role="option" tabindex="0">
              <span class="ls-flag">${info.flag}</span>
              <span class="ls-name">${info.label}</span>
              ${info.dir === 'rtl' ? '<span class="ls-rtl-badge">RTL</span>' : ''}
              <span class="ls-code">${info.short}</span>
              <svg class="ls-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          `).join('')}
        </div>
        <div class="ls-panel-footer">Auto RTL support enabled</div>
      </div>
    `;

    const navRight = document.querySelector('.nav-right');
    if (navRight) {
      navRight.insertBefore(wrapper, navRight.firstChild);
    } else {
      wrapper.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9998;';
      document.body.appendChild(wrapper);
    }

    const btn   = document.getElementById('df-lang-btn');
    const panel = document.getElementById('df-lang-panel');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = panel.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.ls-option').forEach(opt => {
      opt.addEventListener('click', () => {
        applyLang(opt.dataset.lang);
        panel.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
      opt.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); opt.click(); }
      });
    });

    document.addEventListener('click', () => {
      panel.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        panel.classList.remove('open');
        btn.classList.remove('open');
      }
    });
  }

  function updateSwitcherUI(lang) {
    const info    = LANGS[lang];
    const flagEl  = document.getElementById('df-lang-flag');
    const shortEl = document.getElementById('df-lang-short');
    if (flagEl)  flagEl.textContent  = info.flag;
    if (shortEl) shortEl.textContent = info.short;
    document.querySelectorAll('.ls-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  }

  /* ─── INJECT data-i18n ATTRIBUTES ──────────────────────────── */
  function injectAttributes() {
    const tag = (el, key, type) => {
      if (el) { el.dataset.i18n = key; if (type) el.dataset.i18nType = type; }
    };
    const q  = (sel) => document.querySelector(sel);
    const qa = (sel) => [...document.querySelectorAll(sel)];

    /* ── NAVBAR ── */
    const navLinks = qa('.nav-links li a');
    if (navLinks[0]) tag(navLinks[0], 'nav_home');
    if (navLinks[1]) tag(navLinks[1], 'nav_projects');
    if (navLinks[2]) tag(navLinks[2], 'nav_demand');
    if (navLinks[3]) tag(navLinks[3], 'nav_contact');
    const navCta = q('.nav-right .btn-primary');
    if (navCta) tag(navCta, 'nav_cta');

    const mobLinks = qa('.mobile-menu li a');
    if (mobLinks[0]) tag(mobLinks[0], 'nav_home');
    if (mobLinks[1]) tag(mobLinks[1], 'nav_projects');
    if (mobLinks[2]) tag(mobLinks[2], 'nav_demand');
    if (mobLinks[3]) tag(mobLinks[3], 'nav_contact');
    const mobCta = q('.mobile-cta .btn-primary');
    if (mobCta) tag(mobCta, 'nav_cta');

    /* ── HERO ── */
    const badge = q('.hero .badge');
    if (badge) {
      const textNode = [...badge.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (textNode) {
        const span = document.createElement('span');
        span.dataset.i18n = 'badge_hero';
        span.textContent = textNode.textContent.trim();
        textNode.replaceWith(span);
      }
    }

    /* Hero h1 — FIXED: includes "with" translation */
    const h1 = q('.hero h1');
    if (h1) {
      h1.innerHTML = `<span data-i18n="hero_h1_1">Get more clients</span><br>
        <span data-i18n="hero_h1_with">with</span> <em><span data-i18n="hero_h1_2">high converting</span></em><br>
        <span data-i18n="hero_h1_3">websites</span><br>
        <span data-i18n="hero_h1_4">&amp; stores</span>`;
    }

    const heroDesc = q('.hero-desc');
    if (heroDesc) tag(heroDesc, 'hero_desc');
    const heroBtns = qa('.hero-btns a');
    if (heroBtns[0]) tag(heroBtns[0], 'hero_btn1');
    if (heroBtns[1]) tag(heroBtns[1], 'hero_btn2');
    const ratingText = q('.rating-text');
    if (ratingText) tag(ratingText, 'social_proof', 'html');
    const scrollSpan = q('.scroll-hint span');
    if (scrollSpan) tag(scrollSpan, 'scroll_hint');

    /* ── STATS ── */
    const statLabels = qa('.stat-label');
    if (statLabels[0]) tag(statLabels[0], 'stat_projects');
    if (statLabels[1]) tag(statLabels[1], 'stat_clients');
    if (statLabels[2]) tag(statLabels[2], 'stat_years');

    /* ── PROJECTS ── */
    const secLabel = q('.section-label');
    if (secLabel) {
      const dot = secLabel.querySelector('.section-label-dot');
      secLabel.innerHTML = '';
      if (dot) secLabel.appendChild(dot);
      const span = document.createElement('span');
      span.dataset.i18n = 'section_badge';
      span.textContent  = 'Portfolio & Work';
      secLabel.appendChild(span);
    }

    const powerLines = qa('.power-title');
    if (powerLines[0]) {
      powerLines[0].innerHTML = `
        <span data-i18n="power_title1">See how I turn ideas into</span><br>
        <span class="gradient-text" data-i18n="power_title2">Powerful &amp; Professional</span><br>
        <span data-i18n="power_title3">websites &amp; stores</span>`;
    }

    const feats = qa('.f-text');
    if (feats[0]) {
      const s = feats[0].querySelectorAll('strong, span');
      if (s[0]) tag(s[0], 'feat_fast');
      if (s[1]) tag(s[1], 'feat_fast_s');
    }
    if (feats[1]) {
      const s = feats[1].querySelectorAll('strong, span');
      if (s[0]) tag(s[0], 'feat_pixel');
      if (s[1]) tag(s[1], 'feat_pixel_s');
    }
    if (feats[2]) {
      const s = feats[2].querySelectorAll('strong, span');
      if (s[0]) tag(s[0], 'feat_conv');
      if (s[1]) tag(s[1], 'feat_conv_s');
    }

    /* Filter tabs */
    const tabs = qa('.tab-trigger');
    if (tabs[0]) tag(tabs[0], 'tab_all');
    if (tabs[1]) tag(tabs[1], 'tab_websites');
    if (tabs[2]) tag(tabs[2], 'tab_stores');

    const discoverBtn = q('#toggleProjects span');
    if (discoverBtn) tag(discoverBtn, 'btn_discover');
    const showLessSpan = q('#showLessBtn');
    if (showLessSpan) {
      const txt = [...showLessSpan.childNodes].find(n => n.nodeType === 3);
      if (txt) {
        const s = document.createElement('span');
        s.dataset.i18n = 'btn_less';
        s.textContent  = txt.textContent.trim();
        txt.replaceWith(s);
      }
    }

    /* CHIPS — tag each one */
    document.querySelectorAll('.chip[data-cat]').forEach(chip => {
      const cat = chip.dataset.cat;
      const key = chipKeyMap[cat];
      if (key) chip.dataset.i18n = key;
    });

    /* ── DEMAND / WIZARD ── */
    const stepMsg = q('#stepStatusMsg');
    if (stepMsg) { tag(stepMsg, 'wiz_s1_msg'); stepMsg.dataset.currentStep = '1'; }

    const phaseHeaders = qa('.phase-header');
    if (phaseHeaders[0]) {
      const h = phaseHeaders[0].querySelector('h2');
      const p = phaseHeaders[0].querySelector('p');
      if (h) tag(h, 'wiz_q1');
      if (p) tag(p, 'wiz_q1_sub');
    }
    if (phaseHeaders[1]) {
      const h = phaseHeaders[1].querySelector('h2');
      const p = phaseHeaders[1].querySelector('p');
      if (h) tag(h, 'wiz_q2');
      if (p) tag(p, 'wiz_q2_sub');
    }
    if (phaseHeaders[2]) {
      const h = phaseHeaders[2].querySelector('h2');
      if (h) tag(h, 'wiz_q3');
    }

    const typeCards = qa('.type-card');
    const tcMap = [
      ['type_web', 'type_web_s'],
      ['type_store', 'type_store_s'],
      ['type_app', 'type_app_s'],
    ];
    typeCards.forEach((card, i) => {
      const h = card.querySelector('h3');
      const p = card.querySelector('p');
      if (h && tcMap[i]) tag(h, tcMap[i][0]);
      if (p && tcMap[i]) tag(p, tcMap[i][1]);
    });

    const inputGroups = qa('.details-grid .input-group label');
    if (inputGroups[0]) tag(inputGroups[0], 'wiz_goal');
    if (inputGroups[1]) tag(inputGroups[1], 'wiz_level');

    const pills = qa('.pills-container .pill');
    const pillMap = ['pill_sell','pill_lead','pill_show','pill_start','pill_pro','pill_adv'];
    pills.forEach((p, i) => { if (pillMap[i]) tag(p, pillMap[i]); });

    tag(q('#clientName'),  'name_ph',  'placeholder');
    tag(q('#clientPhone'), 'phone_ph', 'placeholder');

    /* Back buttons — handled dynamically in applyLang */

    const launchBtn = q('.launch-btn');
    if (launchBtn) tag(launchBtn, 'wiz_send');

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

    const ctaTitle = q('.cta-title');
    if (ctaTitle) tag(ctaTitle, 'contact_h2', 'html');
    const ctaDesc = q('.cta-desc');
    if (ctaDesc) tag(ctaDesc, 'contact_desc');

    const ctaBtns = qa('.cta-btn');
    if (ctaBtns[0]) {
      const str = ctaBtns[0].querySelector('.cta-btn-text strong');
      const sp  = ctaBtns[0].querySelector('.cta-btn-text span');
      if (str) tag(str, 'btn_whatsapp');
      if (sp)  tag(sp,  'btn_wa_sub');
    }
    if (ctaBtns[1]) {
      const str = ctaBtns[1].querySelector('.cta-btn-text strong');
      const sp  = ctaBtns[1].querySelector('.cta-btn-text span');
      if (str) tag(str, 'btn_email');
      if (sp)  tag(sp,  'btn_email_sub');
    }

    const trustTexts = qa('.trust-text');
    if (trustTexts[0]) {
      const s = trustTexts[0].querySelectorAll('span, strong');
      if (s[0]) tag(s[0], 'trust_reply');
      if (s[1]) tag(s[1], 'trust_reply2');
    }
    if (trustTexts[1]) {
      const s = trustTexts[1].querySelectorAll('span, strong');
      if (s[0]) tag(s[0], 'trust_safe');
      if (s[1]) tag(s[1], 'trust_safe2');
    }
    if (trustTexts[2]) {
      const s = trustTexts[2].querySelectorAll('span, strong');
      if (s[0]) tag(s[0], 'trust_no');
      if (s[1]) tag(s[1], 'trust_no2');
    }

    const quoteP = q('.quote-text');
    if (quoteP) tag(quoteP, 'quote_text');
    const frmTitle = q('.form-header-text h3');
    if (frmTitle) tag(frmTitle, 'form_title');
    const frmSub = q('.form-header-text p');
    if (frmSub) tag(frmSub, 'form_sub');

    tag(q('#cName'),    'f_name_ph',    'placeholder');
    tag(q('#cContact'), 'f_contact_ph', 'placeholder');
    tag(q('#cMsg'),     'f_msg_ph',     'placeholder');

    const msgHint = q('.input-hint');
    if (msgHint) tag(msgHint, 'f_msg_hint');
    const fileStrong = q('.file-info strong');
    if (fileStrong) tag(fileStrong, 'f_file_t');
    const fileSpan = q('.file-info span');
    if (fileSpan) tag(fileSpan, 'f_file_s');
    const fileChoose = q('#fileBtn');
    if (fileChoose) tag(fileChoose, 'f_choose');

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
    const brandDesc = q('.df-brand-desc');
    if (brandDesc) tag(brandDesc, 'footer_desc');

    const fBadges = qa('.df-badge-row');
    const fBadgeKeys = ['f_badge_sec', 'f_badge_fast', 'f_badge_sup'];
    fBadges.forEach((row, i) => {
      const txt = [...row.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (txt && fBadgeKeys[i]) {
        const s = document.createElement('span');
        s.dataset.i18n = fBadgeKeys[i];
        s.textContent  = txt.textContent.trim();
        txt.replaceWith(s);
      }
    });

    const colTitles = qa('.df-col-title');
    if (colTitles[0]) tag(colTitles[0], 'f_quick');
    if (colTitles[1]) tag(colTitles[1], 'f_plans');
    if (colTitles[2]) tag(colTitles[2], 'f_contact');
    if (colTitles[3]) tag(colTitles[3], 'f_follow');

    /* Quick links */
    const dfLinks = qa('.df-links a');
    const navKeyMap = ['nav_home', 'nav_demand', 'nav_projects', 'f_nav_blog', 'nav_contact'];
    dfLinks.forEach((a, i) => {
      if (navKeyMap[i]) {
        const txt = [...a.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
        if (txt) {
          const s = document.createElement('span');
          s.dataset.i18n = navKeyMap[i];
          s.textContent  = txt.textContent.trim();
          txt.replaceWith(s);
        }
      }
    });

    const planInfo = qa('.df-plan-info');
    if (planInfo[0]) { tag(planInfo[0].querySelector('strong'), 'f_plan1'); tag(planInfo[0].querySelector('span'), 'f_plan1_s'); }
    if (planInfo[1]) { tag(planInfo[1].querySelector('strong'), 'f_plan2'); tag(planInfo[1].querySelector('span'), 'f_plan2_s'); }
    if (planInfo[2]) { tag(planInfo[2].querySelector('strong'), 'f_plan3'); tag(planInfo[2].querySelector('span'), 'f_plan3_s'); }

    /* Footer contact items */
    const cTexts = qa('.df-c-text');
    if (cTexts[0]) {
      const strong = cTexts[0].querySelector('strong');
      const span   = cTexts[0].querySelector('span');
      if (strong) tag(strong, 'f_c_whatsapp');
    }
    if (cTexts[1]) {
      const strong = cTexts[1].querySelector('strong');
      if (strong) tag(strong, 'f_c_email');
    }
    if (cTexts[2]) {
      const strong = cTexts[2].querySelector('strong');
      const span   = cTexts[2].querySelector('span');
      if (strong) tag(strong, 'f_c_location');
      if (span)   tag(span,   'f_c_morocco');
    }

    /* Social labels */
    const socials = qa('.df-social');
    const socialKeys = ['f_s_facebook', 'f_s_instagram', 'f_s_linkedin', 'f_s_youtube'];
    socials.forEach((a, i) => {
      if (!socialKeys[i]) return;
      const txt = [...a.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (txt) {
        const s = document.createElement('span');
        s.dataset.i18n = socialKeys[i];
        s.textContent  = txt.textContent.trim();
        txt.replaceWith(s);
      }
    });

    /* Footer bottom */
    const copy = q('.df-bottom > span');
    if (copy) tag(copy, 'f_copy');
    const bottomLinks = qa('.df-bottom-links a');
    if (bottomLinks[0]) tag(bottomLinks[0], 'f_privacy');
    if (bottomLinks[1]) tag(bottomLinks[1], 'f_terms');
    if (bottomLinks[2]) tag(bottomLinks[2], 'f_cookie');

    const loveTxt = q('.df-love');
    if (loveTxt) {
      const nodes = [...loveTxt.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
      if (nodes[0]) { const s = document.createElement('span'); s.dataset.i18n = 'f_made';  s.textContent = nodes[0].textContent.trim(); nodes[0].replaceWith(s); }
      if (nodes[1]) { const s = document.createElement('span'); s.dataset.i18n = 'f_made2'; s.textContent = nodes[1].textContent.trim(); nodes[1].replaceWith(s); }
    }

    /* Availability bar */
    const avSegs = qa('.df-av-seg');
    if (avSegs[0]) { const label = avSegs[0].querySelector('.df-live-label'); if (label) tag(label, 'avail_live'); }
    if (avSegs[1]) { const sub   = avSegs[1].querySelector('.df-av-sub');   if (sub)   tag(sub,   'avail_spots'); }
    const avLast = q('.df-av-seg.df-av-last .df-av-sub');
    if (avLast) tag(avLast, 'avail_booked');
  }

  /* ─── PATCH DEMAND SCRIPT ───────────────────────────────────── */
  /* Override buildCategories & goStep & updateSummary to be i18n-aware */
  function patchDemandScript() {
    // Wait for demand script globals
    if (typeof window.marketOptions === 'undefined') return;

    /* Patch buildCategories to use translated text AND store i18n key */
    const origBuildCategories = window.buildCategories;
    if (origBuildCategories) return; // already patched externally

    // We override by monkey-patching after inline script runs
    const origGoStep = window.goStep;
    if (origGoStep) {
      window.goStep = function(n) {
        // update step status message data attr
        const msg = document.getElementById('stepStatusMsg');
        if (msg) msg.dataset.currentStep = String(n);
        origGoStep(n);
        // re-apply lang for the step message
        const msgs = { 1: 'wiz_s1_msg', 2: 'wiz_s2_msg', 3: 'wiz_s3_msg' };
        if (msg && msgs[n]) msg.textContent = T[msgs[n]][currentLang];
      };
    }

    /* Patch updateSummary to use translated type labels */
    const origUpdateSummary = window.updateSummary;
    if (origUpdateSummary) {
      window.updateSummary = function() {
        const el = document.getElementById('selectionSummary');
        if (!el || typeof window.sel === 'undefined') return;
        const s = window.sel;
        const typeKey = {
          websites: 'summary_type_websites',
          stores:   'summary_type_stores',
          apps:     'summary_type_apps'
        }[s.type];
        const typeLabel = typeKey ? T[typeKey][currentLang] : (s.type || '—');
        const goalLabel  = T['summary_goal'][currentLang];
        const levelLabel = T['summary_level'][currentLang];
        el.textContent = `${typeLabel} → ${s.cat || '—'} · ${goalLabel}: ${s.intent} · ${levelLabel}: ${s.scope}`;
      };
    }

    /* Patch success overlay */
    const origForm = document.getElementById('multiStepForm');
    if (origForm) {
      origForm.addEventListener('submit', function() {
        // After the existing submit handler runs and appends success-overlay
        setTimeout(() => {
          const overlay = document.querySelector('.success-overlay');
          if (!overlay) return;
          const h2 = overlay.querySelector('h2');
          const p  = overlay.querySelector('p');
          if (h2) h2.textContent = T['success_title'][currentLang];
          if (p)  p.textContent  = T['success_sub'][currentLang];
        }, 50);
      });
    }
  }

  /* Patch buildCategories — override the global function entirely */
  function overrideBuildCategories() {
    window.buildCategories = function(type) {
      const grid = document.getElementById('dynamicCategories');
      if (!grid) return;
      grid.innerHTML = '';
      const items = marketOptionsKeys[type] || [];

      items.forEach((item, i) => {
        const title = T[item.titleKey]?.[currentLang] || item.origTitle;
        const desc  = T[item.descKey]?.[currentLang]  || '';

        const div = document.createElement('div');
        div.className = 'cat-item';
        div.dataset.i18nKey = item.titleKey;
        div.style.animationDelay = (i * 0.06) + 's';
        div.innerHTML = `<h4>${escHtml(title)}</h4><p>${escHtml(desc)}</p>`;
        div.addEventListener('click', () => {
          window.sel.cat = item.origTitle; // keep original for WA message
          document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('selected'));
          div.classList.add('selected');
          setTimeout(() => window.goStep(3), 360);
        });
        grid.appendChild(div);
      });
    };
  }

  /* Patch renderGrid in projects to inject i18n-aware card markup */
  function overrideRenderGrid() {
    // We hook after the project grid renders via MutationObserver
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    const mo = new MutationObserver(() => {
      rerenderProjectCards(currentLang);
    });
    mo.observe(grid, { childList: true });
  }

  function escHtml(str) {
    return String(str).replace(/[<>&"']/g, c =>
      ({ '<':'&lt;', '>':'&gt;', '&':'&amp;', '"':'&quot;', "'":'&#39;' }[c])
    );
  }

  /* ─── BOOT ──────────────────────────────────────────────────── */
  function boot() {
    injectSwitcher();
    injectAttributes();
    overrideBuildCategories();
    overrideRenderGrid();
    applyLang(currentLang);

    // Patch demand script after it runs
    setTimeout(patchDemandScript, 200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  /* ─── Also patch cat-item card tag rendering ─────────────────
     The projects script builds .card-tag — we need data-cat-slug
     We add a wrapper around CAT_LABELS lookup in the render
     by modifying the card HTML template. This is done via
     overrideRenderGrid MutationObserver above which calls
     rerenderProjectCards after each render.
     For .card-tag to be re-translatable we add data-cat-slug
     when the card is built. We patch this via a global override. ── */
  window.dfCatLabel = function(slug) {
    const key = catLabelKeyMap[slug];
    return key ? (T[key]?.[currentLang] || slug) : slug;
  };

})();
