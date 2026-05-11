const translations = {
  uk: {
    "nav.about": "Про мене",
    "nav.projects": "Проєкти",
    "nav.skills": "Навички",
    "nav.faq": "FAQ",
    "nav.contacts": "Контакти",

    "hero.eyebrow": "Засновник Yunexal",
    "hero.title": "Nestor (Pavlo) Churin",
    "hero.subtitle": "Створюю self-hosted інструменти для інфраструктури.",
    "hero.description": "Батько проєкту Yunexal Panel. Створюю практичні інструменти для керування серверами та Docker-середовищем.",
    "hero.ageLabel": "Вік",
    "hero.themeLabel": "Тема: авто за пристроєм",
    "hero.ctaProjects": "Переглянути проєкти",
    "hero.ctaContact": "Зв'язатися",

    "stats.roleLabel": "Роль",
    "stats.roleValue": "Засновник Yunexal",
    "stats.focusLabel": "Основний фокус",
    "stats.focusValue": "Yunexal Panel",
    "stats.timeLabel": "Київський час",

    "about.title": "Про мене",
    "about.lead": "Засновник Yunexal (неофіційна організація) і автор Yunexal Panel. Моя мета - робити self-hosted інфраструктуру простішою.",
    "about.missionTitle": "Місія",
    "about.missionText": "Будувати надійні інструменти, які допомагають запускати і підтримувати власну інфраструктуру без зайвої складності.",
    "about.focusTitle": "Що я роблю зараз",
    "about.focusItem1": "Розвиваю Yunexal Panel як платформу керування серверами на Docker.",
    "about.focusItem2": "Працюю над швидкою та стабільною backend-архітектурою на Rust + Axum.",
    "about.focusItem3": "Спрощую досвід для self-hosted адміністрування.",

    "projects.title": "Проєкти",
    "projects.lead": "Основний публічний фокус - Yunexal Panel.",
    "projects.cardLabel": "Флагманський проєкт",
    "projects.repoCta": "GitHub репозиторій",
    "projects.panelSummary": "Self-hosted платформа для керування серверами, побудована на Docker.",
    "projects.panelItem1": "Стек: Rust + Axum, SQLite та Bollard (Docker SDK).",
    "projects.panelItem2": "Шаблони й статичні assets компілюються в один бінарник.",
    "projects.panelItem3": "Зовнішні runtime-файли не потрібні.",

    "skills.title": "Навички / Stack",
    "skills.lead": "Технології, з якими працюю зараз.",

    "faq.title": "FAQ",
    "faq.q1": "Що таке Yunexal?",
    "faq.a1": "Yunexal - неофіційна організація, де я розвиваю власні інфраструктурні продукти та експерименти.",
    "faq.q2": "Що вирішує Yunexal Panel?",
    "faq.a2": "Проєкт спрощує self-hosted керування Docker-серверами через єдину панель.",
    "faq.q3": "Який стек використовується?",
    "faq.a3": "Основний стек: Rust, Axum, SQLite та Bollard (Docker SDK).",
    "faq.q4": "Як зі мною зв'язатися?",
    "faq.a4": "Найшвидше: Telegram, email або GitHub issues у репозиторії.",

    "contacts.title": "Контакти",
    "contacts.lead": "Відкритий до співпраці та технічних обговорень.",
    "contacts.githubLabel": "GitHub",
    "contacts.telegramLabel": "Telegram канал",
    "contacts.emailLabel": "Email",
    "contacts.discordLabel": "Discord",
    "contacts.timeLabel": "Часовий пояс",

    "footer.copy": "© {year} Nestor (Pavlo) Churin. Створено з фокусом на self-hosted інфраструктуру."
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.faq": "FAQ",
    "nav.contacts": "Contacts",

    "hero.eyebrow": "Founder of Yunexal",
    "hero.title": "Nestor (Pavlo) Churin",
    "hero.subtitle": "Building self-hosted infrastructure tools.",
    "hero.description": "Father of the Yunexal Panel project. I build practical tools for server and Docker environment management.",
    "hero.ageLabel": "Age",
    "hero.themeLabel": "Theme: automatic from device",
    "hero.ctaProjects": "View projects",
    "hero.ctaContact": "Contact me",

    "stats.roleLabel": "Role",
    "stats.roleValue": "Founder at Yunexal",
    "stats.focusLabel": "Primary focus",
    "stats.focusValue": "Yunexal Panel",
    "stats.timeLabel": "Kyiv time",

    "about.title": "About",
    "about.lead": "Founder of Yunexal (unofficial organization) and creator of Yunexal Panel. My goal is to make self-hosted infrastructure simpler.",
    "about.missionTitle": "Mission",
    "about.missionText": "Build reliable tools that help people run and maintain their own infrastructure with less complexity.",
    "about.focusTitle": "Current work",
    "about.focusItem1": "Developing Yunexal Panel as a Docker-based server management platform.",
    "about.focusItem2": "Designing fast and stable backend architecture with Rust + Axum.",
    "about.focusItem3": "Improving user experience for self-hosted administration.",

    "projects.title": "Projects",
    "projects.lead": "Main public focus: Yunexal Panel.",
    "projects.cardLabel": "Featured project",
    "projects.repoCta": "GitHub repository",
    "projects.panelSummary": "Self-hosted server management platform built on Docker.",
    "projects.panelItem1": "Built with Rust + Axum, SQLite, and Bollard (Docker SDK).",
    "projects.panelItem2": "Templates and static assets are compiled into a single binary.",
    "projects.panelItem3": "No external runtime files are required.",

    "skills.title": "Skills / Stack",
    "skills.lead": "Technologies I currently use.",

    "faq.title": "FAQ",
    "faq.q1": "What is Yunexal?",
    "faq.a1": "Yunexal is an unofficial organization where I build infrastructure products and experiments.",
    "faq.q2": "What problem does Yunexal Panel solve?",
    "faq.a2": "It simplifies self-hosted Docker server management through a unified panel.",
    "faq.q3": "What tech stack is used?",
    "faq.a3": "Primary stack: Rust, Axum, SQLite, and Bollard (Docker SDK).",
    "faq.q4": "How can I contact you?",
    "faq.a4": "Fastest channels: Telegram, email, or GitHub issues in the repository.",

    "contacts.title": "Contacts",
    "contacts.lead": "Open to collaboration and technical discussions.",
    "contacts.githubLabel": "GitHub",
    "contacts.telegramLabel": "Telegram channel",
    "contacts.emailLabel": "Email",
    "contacts.discordLabel": "Discord",
    "contacts.timeLabel": "Timezone",

    "footer.copy": "© {year} Nestor (Pavlo) Churin. Built with focus on self-hosted infrastructure."
  }
};

const DEFAULT_BIRTH_DATE_STRING = "10.03.2005";
const TIME_ZONE = "Europe/Kyiv";
const STORAGE_KEY = "nestor-churin-bio-language";
const SUPPORTED_LANGUAGES = ["uk", "en"];

let activeLanguage = "uk";

function parseBirthDate(value) {
  const normalized = String(value || "").trim();
  const match = normalized.match(/(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{4})/);

  if (!match) {
    return null;
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);

  if (!day || !month || !year) {
    return null;
  }

  if (month < 1 || month > 12) {
    return null;
  }

  const maxDayInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > maxDayInMonth) {
    return null;
  }

  return {
    day,
    month,
    year
  };
}

function getCurrentDateParts(timeZone) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  const dateParts = formatter.formatToParts(new Date());
  const year = Number(dateParts.find((part) => part.type === "year")?.value);
  const month = Number(dateParts.find((part) => part.type === "month")?.value);
  const day = Number(dateParts.find((part) => part.type === "day")?.value);

  if (!year || !month || !day) {
    return null;
  }

  return {
    day,
    month,
    year
  };
}

function calculateAge(dateOfBirth, currentDate) {
  if (!dateOfBirth || !currentDate) {
    return null;
  }

  let age = currentDate.year - dateOfBirth.year;

  const birthdayPassed =
    currentDate.month > dateOfBirth.month ||
    (currentDate.month === dateOfBirth.month && currentDate.day >= dateOfBirth.day);

  if (!birthdayPassed) {
    age -= 1;
  }

  return Math.max(age, 0);
}

function formatTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (fullMatch, key) => {
    if (Object.prototype.hasOwnProperty.call(values, key)) {
      return String(values[key]);
    }
    return fullMatch;
  });
}

function getTemplateValues() {
  return {
    year: new Date().getFullYear()
  };
}

function setStoredLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Ignore storage access failures.
  }
}

function getStoredLanguage() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(value) ? value : null;
  } catch {
    return null;
  }
}

function resolveInitialLanguage() {
  const fromStorage = getStoredLanguage();
  if (fromStorage) {
    return fromStorage;
  }

  const browserLanguage = (navigator.language || "").toLowerCase();
  if (browserLanguage.startsWith("uk")) {
    return "uk";
  }

  return "en";
}

function applyLanguage(language) {
  activeLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "uk";
  const dictionary = translations[activeLanguage];

  document.documentElement.lang = activeLanguage;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const translatedValue = dictionary[key];
    if (typeof translatedValue === "string") {
      node.textContent = formatTemplate(translatedValue, getTemplateValues());
    }
  });

  document.querySelectorAll("[data-lang-control]").forEach((button) => {
    const isActive = button.dataset.langControl === activeLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });

  setStoredLanguage(activeLanguage);
  updateKyivTime();
}

function updateAge() {
  const ageNode = document.getElementById("age-value");
  if (!ageNode) {
    return;
  }

  const birthDateString = ageNode.dataset.birthDate || DEFAULT_BIRTH_DATE_STRING;
  const dateOfBirth = parseBirthDate(birthDateString);
  const currentDate = getCurrentDateParts(TIME_ZONE);
  const age = calculateAge(dateOfBirth, currentDate);

  ageNode.textContent = age === null ? "--" : String(age);
}

function updateKyivTime() {
  const locale = activeLanguage === "uk" ? "uk-UA" : "en-GB";
  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  const formattedTime = formatter.format(new Date());
  document.querySelectorAll("[data-kyiv-time]").forEach((node) => {
    node.textContent = formattedTime;
  });
}

function setupLanguageControls() {
  document.querySelectorAll("[data-lang-control]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.langControl;
      if (nextLanguage) {
        applyLanguage(nextLanguage);
      }
    });
  });
}

function setupFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) {
        return;
      }

      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });
}

function setupSectionReveal() {
  const sections = document.querySelectorAll(".section-pop");

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageControls();
  setupFaqAccordion();
  setupSectionReveal();

  updateAge();
  applyLanguage(resolveInitialLanguage());
  updateKyivTime();

  setInterval(updateKyivTime, 30000);
});