import { ArrowRight, CheckCircle2, ChevronRight, Headset, Monitor } from "lucide-react";
import ServicesSection from "./components/ServicesSection";

const stats = [
  ["6 лет", "на рынке"],
  ["500+", "клиентов по России"],
  ["320 000+", "решённых заявок"],
];

const problems = [
  "Открываете новую точку и не знаете, с чего начать",
  "Необходимо подобрать и подключить торговое оборудование",
  "Хотите настроить iiko или Saby под реальные процессы бизнеса",
  "Нужно подключить кассы, ОФД и гос системы в соотсетствии с 54 ФЗ",
  "Планируете масштабирование и хотите единый подход для сети",
  "Вам нужна постоянная техническая поддержка"
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#">
            <span className="brand-mark">ТБ</span>
            <span className="brand-name">
              <strong>Технологии Бизнеса</strong>
            </span>
          </a>

          <nav className="desktop-nav">
            <a href="#solutions">Решения</a>
            <a href="#services">Услуги</a>
            <a href="#equipment">Оборудование</a>
            <a href="#contact">Обратная связь</a>
          </nav>

          <a className="header-phone" href="tel:+70000000000">
            +7 (xxx) xxx-xx-xx
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">РЕШЕНИЯ ДЛЯ HORECA И RETAIL · РОССИЯ</div>
            <h1>
              {/* Всё для автоматизации
              <span> вашего бизнеса — в одном месте</span> */}
              Запускаем
              <br />
              Настраиваем
              <span>
                <br />
                Поддерживаем
              </span>
            </h1>
            <p className="hero-text">
              Внедряем iiko и Saby, поставляем торговое оборудование,
              настраиваем гос системы и берём техническую поддержку на себя —
              от запуска первой точки до масштабирования сети.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Рассчитать стоимость <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#contact">
                Получить консультацию
              </a>
            </div>

            <div className="stats">
              {stats.map(([value, label]) => (
                <div className="stat" key={value}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-card main-device">
              <div className="device-top">
                <span className="status-dot" />
                <span>Система работает</span>
              </div>
              <div className="screen">
                <div className="screen-line large" />
                <div className="screen-line" />
                <div className="screen-line short" />
                <div className="screen-grid">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="device-base" />
            </div>

            <div className="glass-card floating-card floating-card-one">
              <Headset size={20} />
              <div>
                <strong>Поддержка</strong>
                <span>Инженеры на связи</span>
              </div>
            </div>

            <div className="glass-card floating-card floating-card-two">
              <CheckCircle2 size={20} />
              <div>
                <strong>320 000+</strong>
                <span>заявок решено</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section problems" id="solutions">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">ЗАДАЧИ, КОТОРЫЕ МЫ РЕШАЕМ</div>
              <h2>С чем мы можем помочь вашему бизнесу</h2>
            </div>
            <p>
              Вам не нужно разбираться в технических деталях. Расскажите о задаче —
              мы подберём решение и возьмём запуск на себя.
            </p>
          </div>

          <div className="problem-grid">
            {problems.map((problem, index) => (
              <div className="problem-card" key={problem}>
                <p>{problem}</p>
                <ChevronRight size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="section light-section" id="equipment">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Торговое оборудование</div>
              <h2>Подберём технику под вашу задачу</h2>
            </div>
            <p>Пока используем демонстрационные карточки. Реальный каталог подключим следующим этапом.</p>
          </div>

          <div className="equipment-grid">
            {["Фискальные регистраторы", "POS-моноблоки", "Планшеты", "Сканеры штрихкодов", "Весы", "Денежные ящики"].map((item, index) => (
              <div className="equipment-card" key={item}>
                <div className={`equipment-art art-${index + 1}`}>
                  <Monitor size={44} strokeWidth={1.5} />
                </div>
                <div>
                  <h3>{item}</h3>
                  <span>Цена — уточняется</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-card">
            <div>
              <div className="eyebrow">Есть задача?</div>
              <h2>Расскажите, что нужно вашему бизнесу</h2>
              <p>
                Оставьте контакты и кратко опишите задачу. Менеджер свяжется с вами
                и поможет подобрать решение.
              </p>
            </div>

            <form className="contact-form">
              <input placeholder="Ваше имя" />
              <input placeholder="ИНН" />
              <input placeholder="+7 (xxx) xxx-xx-xx" />
              <input placeholder="placeholder@gmail.com" />
              <textarea placeholder="Кратко опишите вашу задачу" rows={4} />
              <button className="button button-primary" type="button">
                Отправить заявку <ArrowRight size={18} />
              </button>
              <small>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </small>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">ТБ</span>
              <span>
                <strong>Технологии</strong>
                <small>Бизнеса</small>
              </span>
            </div>
            <p>Автоматизация HoReCa и retail по всей России.</p>
          </div>
          <div>
            <span className="footer-label">Контакты</span>
            <a href="tel:+70000000000">+7 (xxx) xxx-xx-xx</a>
            <a href="mailto:placeholder@gmail.com">placeholder@gmail.com</a>
            <span>Краснодар, Россия</span>
          </div>
          <div>
            <span className="footer-label">Навигация</span>
            <a href="#services">Услуги</a>
            <a href="#equipment">Оборудование</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 «Технологии Бизнеса»</span>
          <span>Политика конфиденциальности — добавим позже</span>
        </div>
      </footer>
    </main>
  );
}
