"use client";

import { useEffect, useState } from "react";
import {
  Archive,
  Boxes,
  Monitor,
  Package,
  Printer,
  Scale,
  ScanBarcode,
  ShoppingCart,
  TabletSmartphone,
  X
} from "lucide-react";

const equipment = [
  { title: "Фискальные регистраторы", icon: Printer },
  { title: "POS-моноблоки", icon: Monitor },
  { title: "Планшеты", icon: TabletSmartphone },
  { title: "Сканеры штрихкодов", icon: ScanBarcode },
  { title: "Весы", icon: Scale },
  { title: "Денежные ящики", icon: Archive }
];

/** Готовые комплекты оборудования в сборке */
const kits = [
  {
    title: "Комплект для минимаркета",
    icon: Package,
    items: [
      "POS-моноблок",
      "Фискальный регистратор",
      "Сканер штрихкодов",
      "Денежный ящик",
      "Дисплей покупателя"
    ]
  },
  {
    title: "Комплект для кафе и общепита",
    icon: Boxes,
    items: [
      "POS-моноблок",
      "Фискальный регистратор",
      "Принтер чеков",
      "Денежный ящик"
    ]
  },
  {
    title: "Стартовый комплект для ИП",
    icon: ShoppingCart,
    items: [
      "Фискальный регистратор",
      "Планшет с кассовой программой",
      "Сканер штрихкодов",
      "Денежный ящик"
    ]
  }
];

/** Сколько моделей-плейсхолдеров показывать в окне категории */
const MODELS_COUNT = 5;

export default function EquipmentSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeCategory = activeIndex !== null ? equipment[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className="section light-section" id="equipment">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Торговое оборудование</div>
            <h2>Подберём технику под вашу задачу</h2>
          </div>
          <p>
            Подбираем и поставляем технику под ваш формат работы — от одной
            точки до сети. Модели каждой категории — по кнопке в карточке.
          </p>
        </div>

        <div className="equipment-grid">
          {equipment.map(({ title, icon: Icon }, index) => (
            <div className="equipment-card" key={title}>
              <div className={`equipment-art art-${index + 1}`}>
                <Icon size={56} strokeWidth={1.4} />
              </div>
              <div>
                <h3>{title}</h3>
                <span>Цена — уточняется</span>
              </div>
              <button
                className="equipment-more"
                onClick={() => setActiveIndex(index)}
              >
                Смотреть модели
              </button>
            </div>
          ))}
        </div>

        <div className="kit-heading">Готовые комплекты оборудования</div>

        <div className="kit-grid">
          {kits.map(({ title, icon: Icon, items }) => (
            <article className="kit-card" key={title}>
              <div className="kit-art">
                <Icon size={56} strokeWidth={1.4} />
                <span>Фото комплекта</span>
              </div>
              <h3>{title}</h3>
              <ul className="kit-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {activeCategory && (
        <div
          className="equipment-modal-overlay"
          role="presentation"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="equipment-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeCategory.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="equipment-modal-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Закрыть"
              autoFocus
            >
              <X size={20} />
            </button>

            <div className="eyebrow">Оборудование</div>
            <h3>{activeCategory.title}</h3>

            <ul className="equipment-model-list">
              {Array.from({ length: MODELS_COUNT }, (_, index) => (
                <li key={index}>
                  <span className="equipment-model-name">
                    Модель {index + 1}
                  </span>
                  <span className="equipment-model-note">Цена по запросу</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}