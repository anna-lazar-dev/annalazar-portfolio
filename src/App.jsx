import { useState } from "react";
import "./App.css";
import smoke from "./assets/smoke.png";
import curtain from "./assets/projects/curtain.jpg";
import dojo from "./assets/projects/vocalschool.jpg";
import financeTracker from "./assets/projects/FINANCE-TRACKER.jpg";
import karateApp from "./assets/projects/karate-app.jpg";

const content = {
  en: {
    navHome: "HOME",
    navProjects: "PROJECTS",
    navAbout: "ABOUT",
    navContact: "CONTACT",

    role: "software engineer",
    tagline1: "systems. logic. interfaces.",
    tagline2: "creating structure from chaos.",
    enter: "ENTER",

    projectsTitle: "SELECTED CASES",

    aboutTitle: "ABOUT",
    aboutText1: ["structure.", "architecture.", "practical logic."],
    aboutText2: [
      "i build systems",
      "that are scalable,",
      "clear",
      "and designed",
      "to work reliably.",
    ],

    quote1: "systems. logic. interfaces.",
    quote2: "creating structure from chaos.",

    contactTitle: "CONTACT",
    contactText: [
      "available for freelance projects,",
      "backend development",
      "and strange digital experiments.",
    ],
    contactNote: ["code is only", "the visible layer."],

    namePlaceholder: "your name",
    emailPlaceholder: "your email",
    messagePlaceholder: "describe the signal",
    send: "SEND MESSAGE",

    projects: {
    vocalTitle: "VOCAL SCHOOL",
    vocalDesc1: "landing platform",
    vocalDesc2: "for guitar & vocal school",

    financeTitle: "FINANCE TRACKER",
    financeDesc1: "terminal-based financial",
    financeDesc2: "analysis system",

    karateTitle: "KARATE SCHOOL",
    karateDesc1: "internal platform",
    karateDesc2: "for martial arts school",
},

    footer: "built with react / insomnia / curiosity",
  },

  ru: {
  navHome: "ГЛАВНАЯ",
  navProjects: "ПРОЕКТЫ",
  navAbout: "ОБО МНЕ",
  navContact: "КОНТАКТЫ",

  role: "software engineer",
  tagline1: "системы. логика. интерфейсы.",
  tagline2: "создаю структуру из хаоса.",
  enter: "ВОЙТИ",

  projectsTitle: "ИЗБРАННЫЕ КЕЙСЫ",

  aboutTitle: "ОБО МНЕ",

  aboutText1: [
  "структура.",
  "архитектура.",
  "практическая логика.",
],

aboutText2: [
  "я создаю системы,",
  "которые гибки,",
  "понятны",
  "и спроектированы",
  "для надежной работы.",
],

quote1: "системы. логика. интерфейсы.",
quote2: "создаю структуру из хаоса.",

  projects: {
    vocalTitle: "ШКОЛА ВОКАЛА",
    vocalDesc1: "лендинг-платформа",
    vocalDesc2: "для школы гитары и вокала",

    financeTitle: "FINANCE TRACKER",
    financeDesc1: "терминальная система",
    financeDesc2: "финансового анализа",

    karateTitle: "ШКОЛА КАРАТЕ",
    karateDesc1: "внутренняя платформа",
    karateDesc2: "для школы единоборств",
  },

  contactTitle: "КОНТАКТЫ",
  contactText: [
  "открыта к freelance-проектам,",
  "backend-разработке",
  "и странным цифровым экспериментам.",
],
  contactNote: ["код — только", "видимый слой."],

  namePlaceholder: "ваше имя",
  emailPlaceholder: "ваш email",
  messagePlaceholder: "опишите сигнал",
  send: "ОТПРАВИТЬ",

  footer: "создано на react / бессоннице / любопытстве",
  },
};


function App() {
const [lang, setLang] = useState("en");
const t = content[lang];
  return (
    <main className="site">
      <section className="hero" id="home">
        <img className="smoke-layer smoke-one" src={smoke} alt="" />
        <img className="smoke-layer smoke-two" src={smoke} alt="" />

        <nav className="nav">
  <div className="brand">
    <span className="brand-dot"></span>
    <span>ANNA LAZAR</span>
  </div>

  <div className="nav-links">
    <a href="#home">{t.navHome}</a>
    <a href="#projects">{t.navProjects}</a>
    <a href="#about">{t.navAbout}</a>
    <a href="#contact">{t.navContact}</a>

    <button
      className="lang-toggle"
      onClick={() => setLang(lang === "en" ? "ru" : "en")}
    >
      {lang === "en" ? "RU" : "EN"}
    </button>
  </div>
</nav>

        <div className="hero-content">
          <p className="section-number">01</p>

          <h1>ANNA LAZAR</h1>
          <p className="role">{t.role}</p>

          <div className="line"></div>

          <p className="tagline">
            {t.tagline1}
            <br />
            {t.tagline2}
          </p>

          <a className="enter-link" href="#projects">
            {t.enter} <span></span>
          </a>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-header">
          <p className="section-number">02</p>
          <h2>{t.projectsTitle}</h2>
        </div>

        <article className="project-card">
          <div className="project-image">
            <img className="curtain-image" src={curtain} alt="" />
            <img className="project-preview" src={dojo} alt="" />
            <div className="project-overlay"></div>
          </div>

          <div className="project-info">
            <p className="project-label">CASE_01</p>
            <h3>{t.projects.vocalTitle}</h3>

            <div className="project-line"></div>

            <p className="project-description">
              {t.projects.vocalDesc1}
              <br />
               {t.projects.vocalDesc2}
            </p>

            <p className="project-stack">react / ui / motion design</p>
          </div>
        </article>

        <article className="project-card terminal-card">
          <div className="project-image">
            <img className="curtain-image terminal-bg" src={curtain} alt="" />

            <img
              className="project-preview finance-preview"
              src={financeTracker}
              alt=""
            />

            <div className="project-overlay"></div>
          </div>

          <div className="project-info">
            <p className="project-label">CASE_02</p>
            <h3>{t.projects.financeTitle}</h3>

            <div className="project-line"></div>

            <p className="project-description">
              {t.projects.financeDesc1}
              <br />
              {t.projects.financeDesc2}
            </p>

            <p className="project-stack">python / cli / data structures</p>
          </div>
        </article>
      

      <article className="project-card app-card">
  <div className="project-image">
    <img className="curtain-image app-bg" src={curtain} alt="" />

    <img
      className="project-preview app-preview"
      src={karateApp}
      alt=""
    />

    <div className="project-overlay"></div>
  </div>

  <div className="project-info">
    <p className="project-label">CASE_03</p>

    <h3>{t.projects.karateTitle}</h3>

    <div className="project-line"></div>

    <p className="project-description">
      {t.projects.karateDesc1}
      <br />
       {t.projects.karateDesc2}
    </p>

    <p className="project-stack">
      django / auth / dashboards
    </p>
  </div>
</article>
</section>

      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-left">
            <p className="section-number">03</p>
            <h2>{t.aboutTitle}</h2>

            <p className="about-text">
               {t.aboutText1[0]}
              <br />
              {t.aboutText1[1]}
              <br />
              {t.aboutText1[2]}
            </p>

            <p className="about-text">
               {t.aboutText2[0]}
              <br />
               {t.aboutText2[1]}
              <br />
             {t.aboutText2[2]}
              <br />
               {t.aboutText2[3]}
              <br />
             {t.aboutText2[4]}
            </p>
          </div>

          <div className="about-right">
            <p className="quote-mark">“</p>

            <blockquote>
              {t.quote1}
              <br />
              {t.quote2}
            </blockquote>

            <div className="about-red-line"></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <p className="section-number">04</p>
            <h2>{t.contactTitle}</h2>

            <p className="contact-text">
               {t.contactText[0]}
                <br />
                  {t.contactText[1]}
                  <br />
                  {t.contactText[2]}
            </p>

            <p className="contact-note">
               {t.contactNote[0]}
              <br />
              {t.contactNote[1]}
            </p>
          </div>

           <div className="contact-right">
      <form
       className="contact-form"
       action="https://formspree.io/f/meedopbw"
       method="POST"
    >
     <input
       type="hidden"
       name="_subject"
       value="New portfolio signal"
      />

     <input
     type="text"
     name="name"
     placeholder={t.namePlaceholder}
     required
   />

    <input
      type="email"
      name="email"
     placeholder={t.emailPlaceholder}
     required
   />

    <textarea
      name="message"
      placeholder={t.messagePlaceholder}
      required
    ></textarea>

    <button type="submit">
     {t.send}
    </button>
  </form>

  <div className="contact-links">
    <a href="mailto:annilazar31@gmail.com">
      email
    </a>

    <a
      href="https://github.com/anna-lazar-dev"
      target="_blank"
      rel="noreferrer"
    >
      github
    </a>

    <a
      href="https://t.me/annilazar31"
      target="_blank"
      rel="noreferrer"
    >
      telegram
    </a>
  </div>
</div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 ANNA LAZAR</p>
         <span>{t.footer}</span>
      </footer>
  
      </main>
  );
}

export default App;