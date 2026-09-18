import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  HandHeart,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

import "./ImpactTimeline.css";

const timelineData = [
  {
    year: 1998,
    title: "The Beginning",
    description:
      "Alfalah Scholarship Scheme began with a focused mission to help deserving and talented students who faced financial barriers to education. The initial journey was modest, with a small group of students and a limited circle of supporters.",
    students: "35",
    newStudents: "35",
    donors: "8",
    funds: "₨0.9M",
    highlight: "Foundation Year",
  },
  {
    year: 1999,
    title: "Taking the First Steps",
    description:
      "The early stage required building trust among families, students and supporters. More people gradually joined the mission, allowing the scholarship programme to support a slightly larger number of deserving students.",
    students: "77",
    newStudents: "42",
    donors: "12",
    funds: "₨1.1M",
    highlight: "Trust Building",
  },
  {
    year: 2000,
    title: "A Growing Circle",
    description:
      "The circle of supporters began expanding. Students who previously saw higher education as financially difficult started receiving an opportunity to continue their academic journey with greater confidence.",
    students: "127",
    newStudents: "50",
    donors: "17",
    funds: "₨1.4M",
    highlight: "Growing Support",
  },
  {
    year: 2001,
    title: "Hope Takes Shape",
    description:
      "The programme continued strengthening its foundation. More deserving students were identified and supported, while the growing confidence of donors helped create a more sustainable scholarship environment.",
    students: "185",
    newStudents: "58",
    donors: "21",
    funds: "₨1.7M",
    highlight: "More Opportunities",
  },
  {
    year: 2002,
    title: "Building Trust",
    description:
      "Consistency became an important part of the mission. As students continued their education successfully, the programme developed stronger relationships with families and supporters who believed in the value of educational investment.",
    students: "250",
    newStudents: "65",
    donors: "27",
    funds: "₨2.0M",
    highlight: "Stronger Foundation",
  },
  {
    year: 2003,
    title: "More Students, More Dreams",
    description:
      "The number of students benefiting from the initiative continued to rise. Every additional student represented another family receiving hope and another young person getting a chance to pursue academic ambitions.",
    students: "325",
    newStudents: "75",
    donors: "32",
    funds: "₨2.4M",
    highlight: "Expanding Reach",
  },
  {
    year: 2004,
    title: "Strengthening the Mission",
    description:
      "The scholarship mission continued developing around the principle that financial circumstances should not become a permanent barrier to education. Support for students became increasingly structured.",
    students: "410",
    newStudents: "85",
    donors: "38",
    funds: "₨2.8M",
    highlight: "Structured Support",
  },
  {
    year: 2005,
    title: "Expanding Educational Support",
    description:
      "More students entered the scholarship journey as the programme reached a wider community. The growing support network helped the initiative move beyond its early-stage foundation.",
    students: "508",
    newStudents: "98",
    donors: "45",
    funds: "₨3.3M",
    highlight: "Wider Community",
  },
  {
    year: 2006,
    title: "A Wider Reach",
    description:
      "The programme continued connecting deserving students with educational opportunities. The increasing number of supporters demonstrated a growing belief that investing in young people could create lasting social value.",
    students: "618",
    newStudents: "110",
    donors: "53",
    funds: "₨3.8M",
    highlight: "Growing Network",
  },
  {
    year: 2007,
    title: "Investing in Potential",
    description:
      "The focus remained on identifying students with academic potential who needed financial assistance. Support increasingly became an investment in future professionals and responsible members of society.",
    students: "743",
    newStudents: "125",
    donors: "61",
    funds: "₨4.4M",
    highlight: "Talent & Potential",
  },
  {
    year: 2008,
    title: "Growing Together",
    description:
      "Students, families, donors and the Alfalah team continued building a shared ecosystem around education. The programme's growing reach created opportunities for more young people to remain connected with their studies.",
    students: "883",
    newStudents: "140",
    donors: "70",
    funds: "₨5.0M",
    highlight: "Collective Effort",
  },
  {
    year: 2009,
    title: "A Stronger Foundation",
    description:
      "Years of consistent effort created a stronger platform for future expansion. The scholarship mission continued to mature while keeping deserving students at the centre of its work.",
    students: "1,038",
    newStudents: "155",
    donors: "80",
    funds: "₨5.6M",
    highlight: "Maturing Mission",
  },
  {
    year: 2010,
    title: "A Decade of Service",
    description:
      "A decade of commitment marked an important milestone. The accumulated experience, growing support and increasing number of students demonstrated the potential of a sustained educational initiative.",
    students: "1,213",
    newStudents: "175",
    donors: "92",
    funds: "₨6.3M",
    highlight: "10 Years",
  },
  {
    year: 2011,
    title: "Beyond Financial Support",
    description:
      "The vision increasingly looked beyond financial assistance. Students were encouraged to develop confidence, direction and the broader skills needed to move successfully into their future academic and professional lives.",
    students: "1,408",
    newStudents: "195",
    donors: "105",
    funds: "₨7.0M",
    highlight: "Student Development",
  },
  {
    year: 2012,
    title: "Opening New Doors",
    description:
      "The growing programme continued opening educational pathways for students from different academic backgrounds. Scholarship support became a bridge between financial difficulty and long-term educational opportunity.",
    students: "1,623",
    newStudents: "215",
    donors: "119",
    funds: "₨7.8M",
    highlight: "New Pathways",
  },
  {
    year: 2013,
    title: "Empowering Ambition",
    description:
      "More students were able to continue their academic journey with greater confidence. The programme's purpose became increasingly visible through students progressing towards higher education and professional careers.",
    students: "1,858",
    newStudents: "235",
    donors: "134",
    funds: "₨8.6M",
    highlight: "Academic Progress",
  },
  {
    year: 2014,
    title: "Education Without Prejudice",
    description:
      "The core mission remained focused on deserving and talented students. Educational opportunity continued to be treated as a means of creating a more capable, balanced and prosperous society.",
    students: "2,113",
    newStudents: "255",
    donors: "150",
    funds: "₨9.5M",
    highlight: "Core Mission",
  },
  {
    year: 2015,
    title: "Growing Impact",
    description:
      "The accumulated impact of years of support became increasingly visible. More scholars were progressing through higher education, while the programme continued strengthening its educational and social mission.",
    students: "2,393",
    newStudents: "280",
    donors: "168",
    funds: "₨10.5M",
    highlight: "Visible Impact",
  },
  {
    year: 2016,
    title: "A Community of Support",
    description:
      "The journey increasingly reflected the power of collective effort. Supporters helped students continue their education, while successful scholars became part of a broader story of progress and possibility.",
    students: "2,698",
    newStudents: "305",
    donors: "187",
    funds: "₨11.5M",
    highlight: "Community",
  },
  {
    year: 2017,
    title: "Turning Potential Into Progress",
    description:
      "Talented young people continued transforming educational opportunities into meaningful academic progress. The scholarship programme remained focused on helping students build stronger foundations for their professional futures.",
    students: "3,028",
    newStudents: "330",
    donors: "207",
    funds: "₨12.6M",
    highlight: "Progress",
  },
  {
    year: 2018,
    title: "A Legacy Takes Root",
    description:
      "Two decades of commitment created a growing legacy. The experiences of scholars, supporters and the organisation formed a strong foundation for continued educational impact.",
    students: "3,388",
    newStudents: "360",
    donors: "229",
    funds: "₨13.8M",
    highlight: "20 Years",
  },
  {
    year: 2019,
    title: "Preparing the Next Generation",
    description:
      "The programme continued focusing on young people whose education could contribute not only to their own future but also to the future of their families, communities and the wider society.",
    students: "3,778",
    newStudents: "390",
    donors: "252",
    funds: "₨15.0M",
    highlight: "Next Generation",
  },
  {
    year: 2020,
    title: "Resilience Through Change",
    description:
      "A period of major global uncertainty created new challenges for students and educational institutions. The importance of educational continuity became even more evident as the mission continued moving forward.",
    students: "4,198",
    newStudents: "420",
    donors: "276",
    funds: "₨16.3M",
    highlight: "Resilience",
  },
  {
    year: 2021,
    title: "Moving Forward",
    description:
      "As communities adapted to a changing environment, the scholarship mission continued supporting students and maintaining focus on educational continuity, development and opportunity.",
    students: "4,648",
    newStudents: "450",
    donors: "301",
    funds: "₨17.7M",
    highlight: "Moving Forward",
  },
  {
    year: 2022,
    title: "Renewed Momentum",
    description:
      "The programme entered a period of renewed momentum, continuing to connect deserving students with educational support while strengthening the wider culture of giving and social responsibility.",
    students: "5,128",
    newStudents: "480",
    donors: "327",
    funds: "₨19.1M",
    highlight: "Renewed Energy",
  },
  {
    year: 2023,
    title: "Creating Lasting Impact",
    description:
      "Years of sustained commitment had created a growing community of scholars. Their academic journeys represented the long-term value of giving students the opportunity to continue their education.",
    students: "5,638",
    newStudents: "510",
    donors: "354",
    funds: "₨20.5M",
    highlight: "Lasting Impact",
  },
  {
    year: 2024,
    title: "A Growing Legacy",
    description:
      "The legacy continued to expand as more students benefited from scholarship support and moved towards higher education and professional careers. The wider impact of educational investment became increasingly visible.",
    students: "6,178",
    newStudents: "540",
    donors: "382",
    funds: "₨22.0M",
    highlight: "Growing Legacy",
  },
  {
    year: 2025,
    title: "27 Years of Impact",
    description:
      "Twenty-seven years of service represent thousands of educational opportunities created through sustained commitment. The journey reflects the combined contribution of students, families, supporters and the Alfalah team.",
    students: "6,748",
    newStudents: "570",
    donors: "411",
    funds: "₨23.5M",
    highlight: "27 Years",
  },
  {
    year: 2026,
    title: "The Journey Continues",
    description:
      "Today, Alfalah Scholarship Scheme continues its commitment to deserving and talented students. The next chapter is about expanding opportunity, strengthening the culture of giving and helping more young people build a successful future through education.",
    students: "7,340",
    newStudents: "592",
    donors: "440",
    funds: "₨25.0M",
    highlight: "The Future",
  },
];

export default function ImpactTimeline() {
  const [activeYear, setActiveYear] = useState(2026);

  const activeData =
    timelineData.find((item) => item.year === activeYear) ||
    timelineData[timelineData.length - 1];

  const leftYears = timelineData.slice(0, 14);
  const rightYears = timelineData.slice(14);

  const renderYear = (item) => {
    const active = item.year === activeYear;

    return (
      <button
        key={item.year}
        type="button"
        className={`timeline-year ${active ? "active" : ""}`}
        onClick={() => setActiveYear(item.year)}
      >
        <span className="timeline-year__node">
          {active && (
            <motion.span
              layoutId="timeline-active-pulse"
              className="timeline-year__pulse"
            />
          )}
          <span className="timeline-year__core" />
        </span>

        <span className="timeline-year__year">{item.year}</span>

        <span className="timeline-year__title">
          {item.title}
        </span>

        <ArrowRight
          className="timeline-year__arrow"
          size={14}
        />
      </button>
    );
  };

  return (
    <section className="impact-timeline">
      {/* Premium technical background */}
      <div className="timeline-grid" aria-hidden="true" />
      <div className="timeline-glow timeline-glow-one" aria-hidden="true" />
      <div className="timeline-glow timeline-glow-two" aria-hidden="true" />

      <motion.div
        className="timeline-orbit timeline-orbit-left"
        animate={{ rotate: 360 }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden="true"
      >
        <span />
      </motion.div>

      <motion.div
        className="timeline-orbit timeline-orbit-right"
        animate={{ rotate: -360 }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden="true"
      >
        <span />
      </motion.div>

      <div className="container">
        {/* HEADER */}
        <div className="timeline-heading">
          <div className="timeline-heading-left">
            <span className="timeline-eyebrow">
              <Sparkles size={14} />
              OUR JOURNEY · 1998 — 2026
            </span>

            <h2>
              From a Small Beginning
              <span>to a Growing Legacy.</span>
            </h2>

            <p>
              A visual journey through the years of Alfalah Scholarship
              Scheme — tracing its growth, challenges, support network
              and commitment to educational opportunity.
            </p>
          </div>

          <div className="timeline-heading-year">
            <span>ESTABLISHED</span>
            <strong>1998</strong>
          </div>
        </div>

        {/* NOTICE */}
        <div className="timeline-demo-notice">
          <span>ILLUSTRATIVE TIMELINE</span>
          <p>
            Annual figures shown below are demonstration data and should be
            replaced with verified historical records before publication.
          </p>
        </div>

        {/* ACTIVE YEAR / DETAIL PANEL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            className="timeline-feature"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="timeline-feature__main">
              <div className="timeline-feature__meta">
                <span>CHAPTER {activeYear - 1997}</span>
                <i />
                <span>{activeData.highlight}</span>
              </div>

              <div className="timeline-feature__year">
                {activeData.year}
              </div>

              <h3>{activeData.title}</h3>

              <p className="timeline-feature__description">
                {activeData.description}
              </p>
            </div>

            <div className="timeline-feature__stats">
              <div className="timeline-feature__stat">
                <div className="timeline-feature__icon">
                  <Users size={16} />
                </div>
                <div>
                  <strong>{activeData.students}</strong>
                  <span>Total Scholars</span>
                </div>
              </div>

              <div className="timeline-feature__stat">
                <div className="timeline-feature__icon">
                  <Sparkles size={16} />
                </div>
                <div>
                  <strong>+{activeData.newStudents}</strong>
                  <span>New Scholars</span>
                </div>
              </div>

              <div className="timeline-feature__stat">
                <div className="timeline-feature__icon">
                  <HandHeart size={16} />
                </div>
                <div>
                  <strong>{activeData.donors}</strong>
                  <span>Supporters</span>
                </div>
              </div>

              <div className="timeline-feature__stat">
                <div className="timeline-feature__icon">
                  <Wallet size={16} />
                </div>
                <div>
                  <strong>{activeData.funds}</strong>
                  <span>Illustrative Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* TWO-COLUMN TIMELINE */}
        <div className="timeline-columns">
          {/* 1998 — 2011 */}
          <div className="timeline-column">
            <div className="timeline-column__header">
              <span>PHASE 01</span>
              <strong>1998 — 2011</strong>
            </div>

            <div className="timeline-column__track">
              <div className="timeline-column__line">
                <motion.span
                  className="timeline-column__scanner"
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="timeline-column__years">
                {leftYears.map(renderYear)}
              </div>
            </div>
          </div>

          {/* 2012 — 2026 */}
          <div className="timeline-column">
            <div className="timeline-column__header">
              <span>PHASE 02</span>
              <strong>2012 — 2026</strong>
            </div>

            <div className="timeline-column__track">
              <div className="timeline-column__line">
                <motion.span
                  className="timeline-column__scanner"
                  animate={{ y: ["110%", "-10%"] }}
                  transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="timeline-column__years">
                {rightYears.map(renderYear)}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="timeline-bottom">
          <div className="timeline-bottom-line" />
          <span>SELECT A YEAR TO EXPLORE THE JOURNEY</span>
          <ArrowDown size={15} />
        </div>
      </div>
    </section>
  );
}
