import { useState } from "react";
import "./NotFound.css";
import smoke from "../assets/smoke.png";
import { Link } from "react-router-dom";

const notFoundText = {
  en: {
    toggle: "RU",
    label: "[ SIGNAL LOST ]",
    text1: "you entered a corridor",
    text2: "that was never built.",
    sub1: "if the page you need",
    sub2: "doesn't exist —",
    sub3: "it can be created.",
    button: "RETURN TO SYSTEM",
  },
  ru: {
    toggle: "EN",
    label: "[ СИГНАЛ ПОТЕРЯН ]",
    text1: "вы вошли в коридор,",
    text2: "который никто не построил.",
    sub1: "если нужной страницы",
    sub2: "ещё не существует —",
    sub3: "её можно создать.",
    button: "ВЕРНУТЬСЯ В СИСТЕМУ",
  },
};

function NotFound() {
  const [lang, setLang] = useState("en");
  const t = notFoundText[lang];

  return (
    <main className="void-page">
      <img className="void-smoke smoke-one" src={smoke} alt="" />
      <img className="void-smoke smoke-two" src={smoke} alt="" />

      <div className="void-overlay"></div>

      <button
        className="void-lang"
        onClick={() => setLang(lang === "en" ? "ru" : "en")}
      >
        {t.toggle}
      </button>

      <section className="void-content">
        <p className="void-label">{t.label}</p>

        <h1 className="void-code">404</h1>

        <div className="void-line"></div>

        <p className="void-text">
          {t.text1}
          <br />
          {t.text2}
        </p>

        <p className="void-subtext">
          {t.sub1}
          <br />
          {t.sub2}
          <br />
          {t.sub3}
        </p>

        <Link to="/" className="void-button">
          {t.button}
        </Link>
      </section>
    </main>
  );
}

export default NotFound;