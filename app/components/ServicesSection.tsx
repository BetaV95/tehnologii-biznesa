"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  ArrowRight,
  Beef,
  ChevronLeft,
  ChevronRight,
  Headset,
  Package,
  QrCode,
  Receipt,
  Store,
  UtensilsCrossed,
  Wine
} from "lucide-react";

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
  },
  {
    icon: Receipt,
    title: "ОФД",
    text: "Регистрация и перерегистрация ККТ, подключение касс к оператору фискальных данных и передача чеков по 54 ФЗ."
  },
  {
    icon: QrCode,
    title: "Честный Знак",
    text: "Подключение к системе маркировки товаров: настройка оборудования, работа с кодами маркировки и учёт."
  },
  {
    icon: Wine,
    title: "ЕГАИС",
    text: "Подключение и настройка ЕГАИС для торговли алкоголем: интеграция с кассой, учёт и списание продукции."
  },
  {
    icon: Beef,
    title: "Меркурий",
    text: "Работа с системой Меркурий: оформление ветеринарных документов на товары животного происхождения."
  }
];

const CARD_GAP = 14;
/** Карточки рендерятся в три копии: [буфер | основная группа | буфер].
 *  Это позволяет бесконечно листать: вышли за пределы основной группы —
 *  мгновенно перескакиваем на одну группу (картинка при этом не меняется). */
const LOOP_COPIES = 3;

export default function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupWidthRef = useRef(0);
  const animatingRef = useRef(false);
  const draggingRef = useRef(false);
  const animTimerRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);

  /** Ширина одной группы карточек (включая разделительный gap). */
  const measureGroup = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const cards = track.querySelectorAll<HTMLElement>(".service-card");
    const n = services.length;
    if (cards.length < 2 * n) return 0;
    return cards[n].offsetLeft - cards[0].offsetLeft;
  }, []);

  /** Мгновенно переносит скролл из буферной копии в основную группу. */
  const normalizePosition = useCallback(() => {
    const track = trackRef.current;
    const group = groupWidthRef.current;
    if (!track || !group) return;
    const { scrollLeft } = track;
    if (scrollLeft < group) {
      track.scrollLeft = scrollLeft + group;
    } else if (scrollLeft >= 2 * group) {
      track.scrollLeft = scrollLeft - group;
    }
  }, []);

  const finishAnimation = useCallback(() => {
    if (animTimerRef.current !== null) {
      window.clearTimeout(animTimerRef.current);
      animTimerRef.current = null;
    }
    if (!animatingRef.current) return;
    animatingRef.current = false;
    normalizePosition();
  }, [normalizePosition]);

  const scrollTrack = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".service-card");
    const step = card ? card.offsetWidth + CARD_GAP : track.clientWidth;
    animatingRef.current = true;
    if (animTimerRef.current !== null) window.clearTimeout(animTimerRef.current);
    // фолбэк для браузеров без события scrollend
    animTimerRef.current = window.setTimeout(finishAnimation, 700);
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  // старт: центрируем скролл на основной группе
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    groupWidthRef.current = measureGroup();
    track.scrollLeft = groupWidthRef.current;
    return () => {
      if (animTimerRef.current !== null) window.clearTimeout(animTimerRef.current);
      if (settleTimerRef.current !== null) window.clearTimeout(settleTimerRef.current);
    };
  }, [measureGroup]);

  // после завершения любого нативного скролла (кнопки, колесо, инерция) — нормализуем
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScrollEnd = () => finishAnimation();
    track.addEventListener("scrollend" as never, handleScrollEnd);
    return () => track.removeEventListener("scrollend" as never, handleScrollEnd);
  }, [finishAnimation]);

  useEffect(() => {
    const handleResize = () => {
      groupWidthRef.current = measureGroup();
      if (!animatingRef.current && !draggingRef.current) normalizePosition();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureGroup, normalizePosition]);

  // во время анимации/драга не мешаем, иначе прервём плавный скролл;
  // после паузы в 120мс — тихо возвращаемся в основную группу
  const handleScroll = () => {
    if (animatingRef.current || draggingRef.current) return;
    if (settleTimerRef.current !== null) window.clearTimeout(settleTimerRef.current);
    settleTimerRef.current = window.setTimeout(() => {
      settleTimerRef.current = null;
      normalizePosition();
    }, 120);
  };

  const handlePointerDown = () => {
    draggingRef.current = true;
  };
  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <section className="section services-dark" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Основные направления</div>
            <h2>Всё необходимое для работы торговой точки</h2>
          </div>
        </div>

        <div className="carousel-wrap">
          <div
            className="service-track"
            ref={trackRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {Array.from({ length: LOOP_COPIES }, (_, copy) =>
              services.map(({ icon: Icon, title, text }) => (
                <article
                  className="service-card"
                  key={`${copy}-${title}`}
                  aria-hidden={copy !== 1 || undefined}
                >
                  <div className="icon-box">
                    <Icon size={23} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact" tabIndex={copy === 1 ? undefined : -1}>
                    Подробнее <ArrowRight size={16} />
                  </a>
                </article>
              ))
            )}
          </div>

          <button
            className="nav-arrow nav-arrow-prev"
            onClick={() => scrollTrack(-1)}
            aria-label="Предыдущие услуги"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            className="nav-arrow nav-arrow-next"
            onClick={() => scrollTrack(1)}
            aria-label="Следующие услуги"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
}