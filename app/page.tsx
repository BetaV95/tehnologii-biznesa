import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Headset,
  Monitor,
  Package,
  Store,
  UtensilsCrossed
} from "lucide-react";

const stats = [
  ["6 лет", "на рынке"],
  ["500+", "клиентов по России"],
  ["320 000+", "решённых заявок"],
];

const services = [
  {
    icon: Headset,
    title: "Техническая поддержка",
    text: "Решаем технические вопросы после запуска и помогаем бизнесу работать без простоев."
  },
  {
    icon: UtensilsCrossed,
    title: "Автоматизация iiko",
    text: "Внедрение, настройка, интеграции, обучение и сопровождение ресторанов и HoReCa."
  },
  {
    icon: Store,
    title: "Автоматизация Saby",
    text: "Автоматизация розничного бизнеса и сопровождение рабочих процессов."
  },
  {
    icon: Package,
    title: "Торговое оборудование",
    text: "Кассы, моноблоки, планшеты, сканеры, весы, денежные ящики и периферия."
  }
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
            <a href="#calculator">Калькулятор</a>
            <a href="#about">О компании</a>
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
              <a className="button button-primary" href="#calculator">
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

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading centered">
            <div>
              <div className="eyebrow">Основные направления</div>
              <h2>Всё необходимое для работы торговой точки</h2>
            </div>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="icon-box">
                  <Icon size={23} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">Подробнее <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>

          <div className="wide-card">
            <div>
              <div className="eyebrow">Дополнительные услуги</div>
              <h3>От кассы и ОФД до маркировки и государственных систем</h3>
              <p>
                Регистрация и перерегистрация ККТ, ОФД, «Честный Знак», ТС ПиОТ,
                ЕГАИС, Меркурий, выезд инженера и ведение учёта.
              </p>
            </div>
            <a className="button button-dark" href="#contact">
              Все услуги <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

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

      <section className="section calculator-section" id="calculator">
        <div className="container">
          <div className="calculator-card">
            <div className="calculator-copy">
              <div className="eyebrow">Предварительный расчёт</div>
              <h2>Соберите решение для своей точки</h2>
              <p>
                Следующим этапом превратим этот блок в полноценный интерактивный
                калькулятор с выбором услуг, оборудования и количества точек.
              </p>
              <div className="calculator-note">
                <Calculator size={20} />
                <span>Расчёт будет ориентировочным. Точную стоимость подтвердит менеджер.</span>
              </div>
            </div>

            <div className="calculator-demo">
              <label>Тип бизнеса</label>
              <div className="fake-select">Ресторан <ChevronRight size={17} /></div>

              <label>Количество точек</label>
              <div className="fake-select">1 торговая точка <ChevronRight size={17} /></div>

              <label>Что требуется</label>
              <div className="chips">
                <span>iiko</span>
                <span>Оборудование</span>
                <span>Поддержка</span>
              </div>

              <div className="fake-total">
                <span>Ориентировочно</span>
                <strong>от ХХ XXX ₽</strong>
              </div>

              <a className="button button-primary full-width" href="#contact">
                Получить точный расчёт <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">Технологии Бизнеса</div>
            <h2>Технический партнёр, который остаётся с вами после запуска</h2>
          </div>
          <div className="about-copy">
            <p>
              Мы помогаем бизнесу автоматизировать ежедневные процессы и не оставляем
              клиента один на один с техническими вопросами после внедрения.
            </p>
            <div className="about-points">
              <div><CheckCircle2 /> Работаем с ИП и ООО</div>
              <div><CheckCircle2 /> Обслуживаем клиентов по всей России</div>
              <div><CheckCircle2 /> От одной точки до крупных сетей</div>
            </div>
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
            <a href="#calculator">Калькулятор</a>
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
