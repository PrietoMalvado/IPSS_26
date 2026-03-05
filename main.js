document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navMore = document.getElementById("navMore");
  const moreBtn = navMore ? navMore.querySelector(".more-btn") : null;
  const languageSelect = document.getElementById("languageSelect");
  const copyLocationBtn = document.getElementById("copyLocationBtn");

  const body = document.body;
  const lockBody = () => body.style.overflow = 'hidden';
  const unlockBody = () => body.style.overflow = '';

  /* ================= MENÚ MÓVIL ================= */
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isActive = menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      isActive ? lockBody() : unlockBody();
    });
  }

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      // Solo cerrar y desbloquear si el menú móvil está activo
      if (menuToggle && menuToggle.classList.contains('active')) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        unlockBody();
      }
      closeMore();
    });
  });

  /* ================= DROPDOWN "MÁS" ================= */
  function closeMore() {
    if (!navMore || !moreBtn) return;
    navMore.classList.remove("open");
    moreBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMore() {
    if (!navMore || !moreBtn) return;
    const isOpen = navMore.classList.toggle("open");
    moreBtn.setAttribute("aria-expanded", String(isOpen));
  }

  if (moreBtn && navMore) {
    moreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMore();
    });

    document.addEventListener("click", (e) => {
      if (!navMore.contains(e.target)) {
        closeMore();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMore();
    });
  }

  /* ================= TRADUCCIONES ================= */
  const translations = {
    fr: {
      nav_about: "À propos de l’IPSS",
      nav_benefits: "Avantages membres",
      nav_programs: "Programmes sociaux",
      nav_hospitals: "Réseau médical affilié",
      nav_products: "NATUROTHÉRAPIE_LILO SCOBY+",
      nav_partners: "NOS PARTENAIRES",
      nav_innovipss: "INNOVIPSS",
      nav_more: "Plus",
      nav_congresses: "Centre des congrès IPSS",
      nav_donations: "EDULOTO IPSS",
      nav_location: "Localisation",
      nav_contacts: "Nos contacts",
      nav_partner: "Devenir partenaire",

      hero_title: "Institut Panafricain de Sécurité Sociale et Sanitaire",
      hero_subtitle: "IPSS, pour un monde plus humaniste",

      about_title: "À propos de l’IPSS",
      about_subtitle: "Institution panafricaine de sécurité sociale et sanitaire, communautaire et participative.",
      about_main_text: "L’IPSS est la plus grande institution panafricaine de sécurité sociale et sanitaire pour les peuples africains du continent et du monde Kamit. C’est un système communautaire et participatif qui offre aux populations africaines vivant en Afrique, dans les Caraïbes et à l’étranger, de tous les strates sociaux, une plateforme de soins médicaux d’excellence et de protection sociale pour les travailleurs des secteurs public et privé.",
      about_li_1: "L’IPSS garantit le droit à la santé, la prise en charge en cas d’urgence médicale et une assistance médicale digne.",
      about_li_2: "L’IPSS protège également les moyens de subsistance via son programme ERD (Épargne Retraite Digne) et fournit des services sociaux essentiels.",
      about_vision_title: "Vision",
      about_vision_text: "Toute personne vivant ou visitant l’Afrique doit avoir accès à une excellente protection sociale et à des soins médicaux de qualité pour son plein épanouissement.",
      about_mission_title: "Mission",
      about_mission_text: "Offrir un service de haute qualité et accessible à toutes les catégories de travailleurs, aux personnes actives vivant en ville ou en zone rurale, à leurs familles, ainsi qu’aux personnes vulnérables et aux aînés.",
      about_values_title: "Valeurs",
      about_values_text: "Amour — Humanisme — Bonheur",

      benefits_title: "BÉNÉFICES DES MEMBRES",
      benefits_subtitle: "Les membres actifs de l'IPSS ont droit aux bénéfices suivants :",
      benefits_li_1: "Carte privilège IPSS",
      benefits_li_2: "Carnet de santé IPSS",
      benefits_li_3: "Accès à des soins de santé dignes",
      benefits_li_4: "Accès à des hôpitaux et cliniques d'excellence",
      benefits_li_5: "Facilités crédits LED (Logement ÉCO Digne)",
      benefits_li_6: "Tarifs préférentiels (pharmacies, ophtalmologie & odontologie)",

      programs_title: "PROGRAMMES SOCIAUX IPSS",
      programs_subtitle: "Cette action principale est conformée par 6 programmes avec leur image propre.",
      programs_li_1: "IPSS_ ERP / Épargne retraite paisible",
      programs_li_2: "IPSS_ LED / Logement ECO Digne",
      programs_li_3: "EDUSANTÉ#IPSS (Prévention santé et bien-être)",
      programs_li_4: "Appui spécial IPSS (appui aux orphelins et personnes avec des capacités différentes/ éducation et aliments)",
      programs_li_5: "TakeAction#IPSS (Actions humanitaires IPSS)",
      programs_li_6: "Secours IPSS",

      hospitals_title: "HÔPITAUX, CLINIQUES ET PHARMACIES AFFILIÉS",
      hospitals_subtitle: "Réseau d'hôpitaux, cliniques spécialisées, pharmacies et laboratoires affiliés au système IPSS.",
      hospitals_text: "Il s'agit d'un important réseau d'hôpitaux, de cliniques spécialisées, de pharmacies et de laboratoires affiliés au système IPSS, offrant un meilleur services aux membres actifs de l'IPSS.",

      partners_title: "NOS PARTENAIRES",
      partners_subtitle: "Institutions publiques et privées (entreprises, marques, etc.) qui accompagnent et soutiennent les actions humanitaires, programmes sociaux et sanitaires de l’IPSS.",

      product_title: "NATUROTHÉRAPIE_LILO SCOBY+",
      product_subtitle: "Fiche Produit – LILO SCOBY PLUS",
      prod_name: "<strong>Nom du produit :</strong> LILO SCOBY PLUS / LSP4",
      prod_cat: "<strong>Catégorie :</strong> Phytothérapie / Boisson thérapeutique naturelle",
      prod_origin: "<strong>Origine :</strong> Créé en Afrique centrale par le Dr Emma Djinghs, après 18 ans de recherche et d’expérimentation.",
      prod_desc: "<strong>Description :</strong> LILO SCOBY PLUS est une boisson thérapeutique innovante à base de 130 éléments naturels (fruits, légumes, plantes médicinales, minéraux), fermentés et enrichis à froid. Ce procédé unique garantit la vitalité et l'efficacité du produit.",
      prod_not_title: "<strong>Ce que ce n’est pas :</strong>",
      prod_not_li_1: "Ce n’est pas un médicament",
      prod_not_li_2: "Ce n’est pas un complément alimentaire",
      prod_not_li_3: "Ce n’est pas un supplément nutritionnel... Mais ça englobe tout ce qui a été cité (...)",
      prod_is_title: "<strong>Ce que c’est :</strong> Un remède phytothérapeutique vivant, une véritable pharmacie liquide, agissant dans la prévention et en cure.",
      prod_also_title: "<strong>Lilo Scoby Plus c'est aussi :</strong>",
      prod_also_text: "130 éléments naturels, symbiotiquement préparés à froid, une synergie vivante, un soutien biologique, une purification, une intelligence cellulaire, une approche biologique, responsable du bien-être et intégrative.",
      prod_benefits_title: "<strong>Bienfaits :</strong>",
      prod_benefits_li_1: "Détox profonde",
      prod_benefits_li_2: "Renforcement immunitaire",
      prod_benefits_li_3: "Soutien des cellules grâce aux cellules souches végétales",
      prod_benefits_li_4: "Vitalité et équilibre général",
      prod_usage: "<strong>Utilisation :</strong> À consommer en cure ou en entretien. Dose et durée selon les besoins à définir selon protocole conseillé.",
      prod_presentation: "<strong>Présentation :</strong> Liquide en bouteille – prêt à boire – conservation au sec",
      prod_target: "<strong>Cible :</strong> Toute personne soucieuse de sa santé, en prévention, en accompagnement thérapeutique et en cure.",

      innovipss_title: "INNOVIPSS",
      innovipss_subtitle: "INNOVIPSS est un important laboratoire institutionnel de recherches avangardistes sur la santé, dont les activités et produits sont divulgués dans cet espace.",

      congress_title: "CENTRE DES CONGRÈS IPSS",
      congress_subtitle: "Le centre des congrès IPSS organise d'importants événements internationaux et rencontres autour des thématiques liées à la santé et à l'humanitaire, et présente à travers cet espace, le calendrier des événements programmés.",

      eduloto_title: "EDULOTO IPSS",
      eduloto_subtitle: "Activité économico-sociale avant chaque rentrée des classes, permettant de gagner des matériels scolaires et des bourses d'étude, via un ticket loto obtenu à des points de vente précis.",
      eduloto_note: "Nota: dans cet espace virtuel, avant la rentrée scolaire, des annonces seront publiées concernant des tirages au sort pour gagner des fournitures scolaires.",

      location_title: "Localisation",
      location_subtitle: "Retrouvez-nous facilement. Vous pouvez ouvrir l’itinéraire sur Google Maps ou copier l’adresse.",
      office_badge: "Bureau IPSS",
      office_name: "Siège / Bureau IPSS",
      office_city: "Bangui, République Centrafricaine",
      map_open: "Ouvrir dans Google Maps",
      map_copy: "Copier l’adresse",
      office_hours: "Lun–Ven · 09:00–17:00",

      contacts_title: "NOS CONTACTS",
      contacts_desc: 'Pour finaliser avec les actions principales, <b>NOS CONTACTS</b> et <b>LANGUES</b> sont déjà intégrées avec le système de traduction français–espagnol–anglais.<br><br>Je souhaite également vous informer que toute l’information doit être insérée en français telle que je l’envoie, afin de conserver le contexte, puisque la communauté principale est francophone.',

      copy_success: "Adresse copiée dans le presse-papiers"
    },

    es: {
      nav_about: "Acerca de IPSS",
      nav_benefits: "Beneficios para miembros",
      nav_programs: "Programas sociales",
      nav_hospitals: "Red médica afiliada",
      nav_products: "NATUROTERAPIA_LILO SCOBY+",
      nav_partners: "NUESTROS SOCIOS",
      nav_innovipss: "INNOVIPSS",
      nav_more: "Más",
      nav_congresses: "Centro de convenciones IPSS",
      nav_donations: "EDULOTO IPSS",
      nav_location: "Ubicación",
      nav_contacts: "Nuestros contactos",
      nav_partner: "Conviértete en socio",

      hero_title: "Instituto Panafricano de Seguridad Social y Sanitaria",
      hero_subtitle: "IPSS, por un mundo más humanista",

      about_title: "Acerca de IPSS",
      about_subtitle: "Institución panafricana de seguridad social y sanitaria, comunitaria y participativa.",
      about_main_text: "El IPSS es la mayor institución panafricana de seguridad social y sanitaria para los pueblos africanos del continente y del mundo Kamit. Es un sistema comunitario y participativo que ofrece a las poblaciones africanas que viven en África, el Caribe y el extranjero, de todos los estratos sociales, una plataforma de atención médica de excelencia y protección social para los trabajadores de los sectores público y privado.",
      about_li_1: "El IPSS garantiza el derecho a la salud, la atención en caso de emergencia médica y una asistencia médica digna.",
      about_li_2: "El IPSS también protege los medios de subsistencia a través de su programa ERD (Ahorro para el Retiro Digno) y proporciona servicios sociales esenciales.",
      about_vision_title: "Visión",
      about_vision_text: "Toda persona que viva o visite África debe tener acceso a una excelente protección social y atención médica de calidad para su pleno desarrollo.",
      about_mission_title: "Misión",
      about_mission_text: "Ofrecer un servicio de alta calidad y accesible a todas las categorías de trabajadores, a las personas activas que viven en la ciudad o en zonas rurales, a sus familias, así como a las personas vulnerables y a los ancianos.",
      about_values_title: "Valores",
      about_values_text: "Amor — Humanismo — Felicidad",

      benefits_title: "BENEFICIOS PARA MIEMBROS",
      benefits_subtitle: "Los miembros activos de IPSS tienen derecho a los siguientes beneficios:",
      benefits_li_1: "Tarjeta de privilegio IPSS",
      benefits_li_2: "Carnet de salud IPSS",
      benefits_li_3: "Acceso a atención médica digna",
      benefits_li_4: "Acceso a hospitales y clínicas de excelencia",
      benefits_li_5: "Facilidades de crédito LED (Vivienda ECO Digna)",
      benefits_li_6: "Tarifas preferenciales (farmacias, oftalmología y odontología)",

      programs_title: "PROGRAMAS SOCIALES IPSS",
      programs_subtitle: "Esta acción principal está conformada por 6 programas con su propia imagen.",
      programs_li_1: "IPSS_ ERP / Ahorro para el retiro pacífico",
      programs_li_2: "IPSS_ LED / Vivienda ECO Digna",
      programs_li_3: "EDUSANTÉ#IPSS (Prevención de salud y bienestar)",
      programs_li_4: "Apoyo especial IPSS (apoyo a huérfanos y personas con capacidades diferentes / educación y alimentos)",
      programs_li_5: "TakeAction#IPSS (Acciones humanitarias IPSS)",
      programs_li_6: "Socorro IPSS",

      hospitals_title: "HOSPITALES, CLÍNICAS Y FARMACIAS AFILIADAS",
      hospitals_subtitle: "Red de hospitales, clínicas especializadas, farmacias y laboratorios afiliados al sistema IPSS.",
      hospitals_text: "Se trata de una importante red de hospitales, clínicas especializadas, farmacias y laboratorios afiliados al sistema IPSS, que ofrece mejores servicios a los miembros activos del IPSS.",

      partners_title: "NUESTROS SOCIOS",
      partners_subtitle: "Instituciones públicas y privadas (empresas, marcas, etc.) que acompañan y apoyan las acciones humanitarias, sociales y sanitarias de IPSS.",

      product_title: "NATUROTERAPIA_LILO SCOBY+",
      product_subtitle: "Ficha de producto – LILO SCOBY PLUS",
      prod_name: "<strong>Nombre del producto:</strong> LILO SCOBY PLUS / LSP4",
      prod_cat: "<strong>Categoría:</strong> Fitoterapia / Bebida terapéutica natural",
      prod_origin: "<strong>Origen:</strong> Creado en África Central por la Dra. Emma Djinghs, tras 18 años de investigación y experimentación.",
      prod_desc: "<strong>Descripción:</strong> LILO SCOBY PLUS es una bebida terapéutica innovadora a base de 130 elementos naturales (frutas, verduras, plantas medicinales, minerales), fermentados y enriquecidos en frío. Este proceso único garantiza la vitalidad y eficacia del producto.",
      prod_not_title: "<strong>Lo que no es:</strong>",
      prod_not_li_1: "No es un medicamento",
      prod_not_li_2: "No es un complemento alimenticio",
      prod_not_li_3: "No es un suplemento nutricional... Pero engloba todo lo citado (...)",
      prod_is_title: "<strong>Lo que es:</strong> Un remedio fitoterapéutico vivo, una verdadera farmacia líquida, que actúa en la prevención y en la cura.",
      prod_also_title: "<strong>Lilo Scoby Plus es también:</strong>",
      prod_also_text: "130 elementos naturales, preparados simbióticamente en frío, una sinergia viva, un apoyo biológico, una purificación, una inteligencia celular, un enfoque biológico, responsable del bienestar e integrador.",
      prod_benefits_title: "<strong>Beneficios:</strong>",
      prod_benefits_li_1: "Desintoxicación profunda",
      prod_benefits_li_2: "Refuerzo inmunitario",
      prod_benefits_li_3: "Apoyo celular gracias a las células madre vegetales",
      prod_benefits_li_4: "Vitalidad y equilibrio general",
      prod_usage: "<strong>Uso:</strong> Consumir como cura o mantenimiento. Dosis y duración según las necesidades a definir según el protocolo aconsejado.",
      prod_presentation: "<strong>Presentación:</strong> Líquido en botella – listo para beber – conservar en lugar seco",
      prod_target: "<strong>Objetivo:</strong> Toda persona preocupada por su salud, en prevención, acompañamiento terapéutico y cura.",

      innovipss_title: "INNOVIPSS",
      innovipss_subtitle: "INNOVIPSS es un importante laboratorio institucional de investigación de vanguardia en salud, cuyas actividades y productos se divulgan en este espacio.",

      congress_title: "CENTRO DE CONVENCIONES IPSS",
      congress_subtitle: "El centro de convenciones IPSS organiza importantes eventos internacionales y encuentros sobre temas relacionados con la salud y lo humanitario, y presenta en este espacio el calendario de eventos programados.",

      eduloto_title: "EDULOTO IPSS",
      eduloto_subtitle: "Actividad económico-social antes de cada regreso a clases, que permite ganar materiales escolares y becas de estudio mediante un boleto de lotería obtenido en puntos de venta específicos.",
      eduloto_note: "Nota: en este espacio virtual, antes del regreso a clases, se publicarán anuncios sobre sorteos para ganar útiles escolares.",

      location_title: "Ubicación",
      location_subtitle: "Encuéntranos fácilmente. Puedes abrir la ruta en Google Maps o copiar la dirección.",
      office_badge: "Oficina IPSS",
      office_name: "Sede / Oficina IPSS",
      office_city: "Bangui, República Centroafricana",
      map_open: "Abrir en Google Maps",
      map_copy: "Copiar dirección",
      office_hours: "Lun–Vie · 09:00–17:00",

      contacts_title: "NUESTROS CONTACTOS",
      contacts_desc: 'Para finalizar con las acciones principales, <b>NUESTROS CONTACTOS</b> e <b>IDIOMAS</b> ya están integrados con el sistema de traducción francés–español–inglés.<br><br>También deseo informarte que toda la información debe insertarse en francés tal como la envío, para conservar el contexto, ya que la comunidad principal es francófona.',

      copy_success: "Dirección copiada al portapapeles"
    },

    en: {
      nav_about: "About IPSS",
      nav_benefits: "Member benefits",
      nav_programs: "Social programs",
      nav_hospitals: "Affiliated medical network",
      nav_products: "NATUROTHERAPY_LILO SCOBY+",
      nav_partners: "OUR PARTNERS",
      nav_innovipss: "INNOVIPSS",
      nav_more: "More",
      nav_congresses: "IPSS convention center",
      nav_donations: "EDULOTO IPSS",
      nav_location: "Location",
      nav_contacts: "Our contacts",
      nav_partner: "Become a partner",

      hero_title: "Pan-African Institute of Social and Health Security",
      hero_subtitle: "IPSS, for a more humanistic world",

      about_title: "About IPSS",
      about_subtitle: "Pan-African institution for social and health security, community-based and participatory.",
      about_main_text: "IPSS is the largest Pan-African social and health security institution for African peoples of the continent and the Kamit world. It is a community-based and participatory system that offers African populations living in Africa, the Caribbean, and abroad, from all social strata, a platform for excellent medical care and social protection for workers in the public and private sectors.",
      about_li_1: "IPSS guarantees the right to health, care in case of medical emergency, and dignified medical assistance.",
      about_li_2: "IPSS also protects livelihoods through its ERD (Dignified Retirement Savings) program and provides essential social services.",
      about_vision_title: "Vision",
      about_vision_text: "Every person living in or visiting Africa must have access to excellent social protection and quality medical care for their full fulfillment.",
      about_mission_title: "Mission",
      about_mission_text: "To offer a high-quality and accessible service to all categories of workers, active people living in cities or rural areas, their families, as well as vulnerable people and the elderly.",
      about_values_title: "Values",
      about_values_text: "Love — Humanism — Happiness",

      benefits_title: "MEMBER BENEFITS",
      benefits_subtitle: "Active IPSS members are entitled to the following benefits:",
      benefits_li_1: "IPSS Privilege Card",
      benefits_li_2: "IPSS Health Book",
      benefits_li_3: "Access to dignified health care",
      benefits_li_4: "Access to hospitals and clinics of excellence",
      benefits_li_5: "LED Credit Facilities (Dignified ECO Housing)",
      benefits_li_6: "Preferential rates (pharmacies, ophthalmology & dentistry)",

      programs_title: "IPSS SOCIAL PROGRAMS",
      programs_subtitle: "This main action is made up of 6 programs, each with its own identity.",
      programs_li_1: "IPSS_ ERP / Peaceful Retirement Savings",
      programs_li_2: "IPSS_ LED / Dignified ECO Housing",
      programs_li_3: "EDUSANTÉ#IPSS (Health prevention and well-being)",
      programs_li_4: "IPSS Special Support (support for orphans and people with different abilities / education and food)",
      programs_li_5: "TakeAction#IPSS (IPSS Humanitarian Actions)",
      programs_li_6: "IPSS Relief",

      hospitals_title: "AFFILIATED HOSPITALS, CLINICS AND PHARMACIES",
      hospitals_subtitle: "Network of hospitals, specialized clinics, pharmacies and laboratories affiliated with the IPSS system.",
      hospitals_text: "It is an important network of hospitals, specialized clinics, pharmacies, and laboratories affiliated with the IPSS system, offering better services to active IPSS members.",

      partners_title: "OUR PARTNERS",
      partners_subtitle: "Public and private institutions (companies, brands, etc.) that support and accompany IPSS humanitarian, social and health actions.",

      product_title: "NATUROTHERAPY_LILO SCOBY+",
      product_subtitle: "Product sheet – LILO SCOBY PLUS",
      prod_name: "<strong>Product Name:</strong> LILO SCOBY PLUS / LSP4",
      prod_cat: "<strong>Category:</strong> Phytotherapy / Natural therapeutic drink",
      prod_origin: "<strong>Origin:</strong> Created in Central Africa by Dr. Emma Djinghs, after 18 years of research and experimentation.",
      prod_desc: "<strong>Description:</strong> LILO SCOBY PLUS is an innovative therapeutic drink based on 130 natural elements (fruits, vegetables, medicinal plants, minerals), fermented and cold-enriched. This unique process guarantees the vitality and effectiveness of the product.",
      prod_not_title: "<strong>What it is not:</strong>",
      prod_not_li_1: "It is not a medicine",
      prod_not_li_2: "It is not a food supplement",
      prod_not_li_3: "It is not a nutritional supplement... But it encompasses everything mentioned (...)",
      prod_is_title: "<strong>What it is:</strong> A living phytotherapeutic remedy, a true liquid pharmacy, acting in prevention and cure.",
      prod_also_title: "<strong>Lilo Scoby Plus is also:</strong>",
      prod_also_text: "130 natural elements, symbiotically cold-prepared, a living synergy, biological support, purification, cellular intelligence, a biological approach, responsible for well-being and integrative.",
      prod_benefits_title: "<strong>Benefits:</strong>",
      prod_benefits_li_1: "Deep detox",
      prod_benefits_li_2: "Immune strengthening",
      prod_benefits_li_3: "Cell support thanks to plant stem cells",
      prod_benefits_li_4: "Vitality and general balance",
      prod_usage: "<strong>Usage:</strong> To be consumed as a cure or maintenance. Dose and duration according to needs to be defined according to advised protocol.",
      prod_presentation: "<strong>Presentation:</strong> Liquid in bottle – ready to drink – keep dry",
      prod_target: "<strong>Target:</strong> Anyone concerned about their health, in prevention, therapeutic accompaniment, and cure.",

      innovipss_title: "INNOVIPSS",
      innovipss_subtitle: "INNOVIPSS is an important institutional laboratory for cutting-edge health research, whose activities and products are shared in this space.",

      congress_title: "IPSS CONVENTION CENTER",
      congress_subtitle: "The IPSS convention center organizes major international events and meetings related to health and humanitarian issues, and presents the schedule of planned events in this space.",

      eduloto_title: "EDULOTO IPSS",
      eduloto_subtitle: "Economic-social activity before each school year, allowing people to win school supplies and scholarships through a lottery ticket obtained at specific sale points.",
      eduloto_note: "Note: in this virtual space, before the start of the school year, announcements will be published regarding raffles to win school supplies.",

      location_title: "Location",
      location_subtitle: "Find us easily. You can open the route in Google Maps or copy the address.",
      office_badge: "IPSS Office",
      office_name: "Headquarters / IPSS Office",
      office_city: "Bangui, Central African Republic",
      map_open: "Open in Google Maps",
      map_copy: "Copy address",
      office_hours: "Mon–Fri · 09:00–17:00",

      contacts_title: "OUR CONTACTS",
      contacts_desc: 'To conclude the main actions, <b>OUR CONTACTS</b> and <b>LANGUAGES</b> are already integrated with the French–Spanish–English translation system.<br><br>I would also like to inform you that all information should be entered in French as I send it, in order to preserve the context, since the main community is French-speaking.',

      copy_success: "Address copied to clipboard"
    }
  };

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.fr;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    localStorage.setItem("lang", lang);

    if (languageSelect) {
      languageSelect.value = lang;
    }
  }

  function setLanguage(lang) {
    const selected = translations[lang] ? lang : "fr";
    applyTranslations(selected);
  }

  window.setLanguage = setLanguage;

  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  /* ================= COPIAR DIRECCIÓN ================= */
  function copyLocation() {
    if (!copyLocationBtn) return;

    const textToCopy = "Bangui, République Centrafricaine";
    const lang = localStorage.getItem("lang") || "fr";
    const successMsg = translations[lang]?.copy_success || translations.fr.copy_success;
    const originalTextKey = copyLocationBtn.getAttribute('data-i18n');
    const originalText = translations[lang]?.[originalTextKey] || 'Copy Address';

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        copyLocationBtn.textContent = successMsg;
        copyLocationBtn.disabled = true;
        setTimeout(() => {
          copyLocationBtn.textContent = originalText;
          copyLocationBtn.disabled = false;
        }, 2000);
      })
      .catch(err => {
        console.error("Could not copy text: ", err);
        // Fallback to alert if clipboard API fails
        alert(successMsg);
      });
  }

  if (copyLocationBtn) {
    copyLocationBtn.addEventListener("click", copyLocation);
  }

  /* ================= INIT ================= */
  const savedLang = localStorage.getItem("lang") || "fr";
  applyTranslations(savedLang);

  /* ================= RESIZE FIX ================= */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove("active");
        if (menuToggle) menuToggle.classList.remove("active");
        unlockBody();
      }
      closeMore();
    }
  });
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const speed = 0.05;

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = rect.top * speed;
      section.style.transform = `translateY(${offset}px)`;
    }
  });
});