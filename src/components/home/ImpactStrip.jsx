import {
  Banknote,
  Clock3,
  CalendarDays,
  BadgeCheck,
  UsersRound,
  Stethoscope,
  HardHat,
  GraduationCap,
  Wrench,
  BookOpen,
} from "lucide-react";

import "./ImpactStrip.css";

const impactItems = [
  {
    text: "₨650 Million+ Disbursed",
    icon: Banknote,
  },
  {
    text: "27 Years of Service",
    icon: Clock3,
  },
  {
    text: "Established 1998",
    icon: CalendarDays,
  },
  {
    text: "Zakat Eligible",
    icon: BadgeCheck,
  },
  {
    text: "5,735 Scholars Empowered",
    icon: UsersRound,
  },
  {
    text: "896 Doctors",
    icon: Stethoscope,
  },
  {
    text: "482 Engineers",
    icon: HardHat,
  },
  {
    text: "1,377 Post-Graduates",
    icon: GraduationCap,
  },
  {
    text: "548 Graduates",
    icon: GraduationCap,
  },
  {
    text: "273 Associate Engineers",
    icon: Wrench,
  },
  {
    text: "2,159 Intermediate / Matric",
    icon: BookOpen,
  },
];

function ImpactGroup({ duplicate = false }) {
  return (
    <div
      className="impact-strip__group"
      aria-hidden={duplicate}
    >
      {impactItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            className="impact-strip__item"
            key={`${duplicate ? "second" : "first"}-${index}`}
          >
            <span
              className="impact-strip__icon"
              aria-hidden="true"
            >
              <Icon size={18} strokeWidth={1.8} />
            </span>

            <span className="impact-strip__text">
              {item.text}
            </span>

            <span
              className="impact-strip__separator"
              aria-hidden="true"
            >
              ◆
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ImpactStrip() {
  return (
    <section
      className="impact-strip"
      aria-label="Alfalah Scholarship Scheme impact highlights"
    >
      <div
        className="impact-strip__fade impact-strip__fade--left"
        aria-hidden="true"
      />

      <div
        className="impact-strip__fade impact-strip__fade--right"
        aria-hidden="true"
      />

      <div className="impact-strip__viewport">
        <div className="impact-strip__track">
          <ImpactGroup />
          <ImpactGroup duplicate />
        </div>
      </div>
    </section>
  );
}

export default ImpactStrip;