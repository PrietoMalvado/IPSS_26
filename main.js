document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navMore = document.getElementById("navMore");
  const moreBtn = navMore ? navMore.querySelector(".more-btn") : null;
  const languageSelect = document.getElementById("languageSelect");
  const copyLocationBtn = document.getElementById("copyLocationBtn");

  /* ================= MENÚ MÓVIL ================= */
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle) menuToggle.classList.remove("active");
      if (navMenu) navMenu.classList.remove("active");
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

      benefits_title: "BÉNÉFICES DES MEMBRES",
      benefits_subtitle: "Les membres actifs de l'IPSS ont droit aux bénéfices suivants :",

      programs_title: "PROGRAMMES SOCIAUX IPSS",
      programs_subtitle: "Cette action principale est conformée par 6 programmes avec leur image propre.",

      hospitals_title: "HÔPITAUX, CLINIQUES ET PHARMACIES AFFILIÉS",
      hospitals_subtitle: "Réseau d'hôpitaux, cliniques spécialisées, pharmacies et laboratoires affiliés au système IPSS.",

      partners_title: "NOS PARTENAIRES",
      partners_subtitle: "Institutions publiques et privées (entreprises, marques, etc.) qui accompagnent et soutiennent les actions humanitaires, programmes sociaux et sanitaires de l’IPSS.",

      product_title: "NATUROTHÉRAPIE_LILO SCOBY+",
      product_subtitle: "Fiche Produit – LILO SCOBY PLUS",

      innovipss_title: "INNOVIPSS",
      innovipss_subtitle: "INNOVIPSS est un important laboratoire institutionnel de recherches avangardistes sur la santé, dont les activités et produits sont divulgués dans cet espace.",

      congress_title: "CENTRE DES CONGRÈS IPSS",
      congress_subtitle: "Le centre des congrès IPSS organise d'importants événements internationaux et rencontres autour des thématiques liées à la santé et à l'humanitaire, et présente à travers cet espace, le calendrier des événements programmés.",

      eduloto_title: "EDULOTO IPSS",
      eduloto_subtitle: "Activité économico-sociale avant chaque rentrée des classes, permettant de gagner des matériels scolaires et des bourses d'étude, via un ticket loto obtenu à des points de vente précis.",

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

      benefits_title: "BENEFICIOS PARA MIEMBROS",
      benefits_subtitle: "Los miembros activos de IPSS tienen derecho a los siguientes beneficios:",

      programs_title: "PROGRAMAS SOCIALES IPSS",
      programs_subtitle: "Esta acción principal está conformada por 6 programas con su propia imagen.",

      hospitals_title: "HOSPITALES, CLÍNICAS Y FARMACIAS AFILIADAS",
      hospitals_subtitle: "Red de hospitales, clínicas especializadas, farmacias y laboratorios afiliados al sistema IPSS.",

      partners_title: "NUESTROS SOCIOS",
      partners_subtitle: "Instituciones públicas y privadas (empresas, marcas, etc.) que acompañan y apoyan las acciones humanitarias, sociales y sanitarias de IPSS.",

      product_title: "NATUROTERAPIA_LILO SCOBY+",
      product_subtitle: "Ficha de producto – LILO SCOBY PLUS",

      innovipss_title: "INNOVIPSS",
      innovipss_subtitle: "INNOVIPSS es un importante laboratorio institucional de investigación de vanguardia en salud, cuyas actividades y productos se divulgan en este espacio.",

      congress_title: "CENTRO DE CONVENCIONES IPSS",
      congress_subtitle: "El centro de convenciones IPSS organiza importantes eventos internacionales y encuentros sobre temas relacionados con la salud y lo humanitario, y presenta en este espacio el calendario de eventos programados.",

      eduloto_title: "EDULOTO IPSS",
      eduloto_subtitle: "Actividad económico-social antes de cada regreso a clases, que permite ganar materiales escolares y becas de estudio mediante un boleto de lotería obtenido en puntos de venta específicos.",

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

      benefits_title: "MEMBER BENEFITS",
      benefits_subtitle: "Active IPSS members are entitled to the following benefits:",

      programs_title: "IPSS SOCIAL PROGRAMS",
      programs_subtitle: "This main action is made up of 6 programs, each with its own identity.",

      hospitals_title: "AFFILIATED HOSPITALS, CLINICS AND PHARMACIES",
      hospitals_subtitle: "Network of hospitals, specialized clinics, pharmacies and laboratories affiliated with the IPSS system.",

      partners_title: "OUR PARTNERS",
      partners_subtitle: "Public and private institutions (companies, brands, etc.) that support and accompany IPSS humanitarian, social and health actions.",

      product_title: "NATUROTHERAPY_LILO SCOBY+",
      product_subtitle: "Product sheet – LILO SCOBY PLUS",

      innovipss_title: "INNOVIPSS",
      innovipss_subtitle: "INNOVIPSS is an important institutional laboratory for cutting-edge health research, whose activities and products are shared in this space.",

      congress_title: "IPSS CONVENTION CENTER",
      congress_subtitle: "The IPSS convention center organizes major international events and meetings related to health and humanitarian issues, and presents the schedule of planned events in this space.",

      eduloto_title: "EDULOTO IPSS",
      eduloto_subtitle: "Economic-social activity before each school year, allowing people to win school supplies and scholarships through a lottery ticket obtained at specific sale points.",

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
    const text = "Bangui, République Centrafricaine";
    const lang = localStorage.getItem("lang") || "fr";
    const msg = translations[lang]?.copy_success || translations.fr.copy_success;

    navigator.clipboard.writeText(text)
      .then(() => alert(msg))
      .catch(() => alert(msg));
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
      if (navMenu) navMenu.classList.remove("active");
      if (menuToggle) menuToggle.classList.remove("active");
      closeMore();
    }
  });
});