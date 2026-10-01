import "./Leadership.css";

function Leadership() {
  const leaders = [
    {
      id: "01",
      name: "Majeed Ahmed Chaudhary",
      designation: "Chairman",
      role: "Chairman",
      image: "/images/leadership/majeed-ahmed-chaudhary.jpg",
    },
    {
      id: "02",
      name: "Dr. Khalid Mahmood Saqib",
      designation: "Vice Chairman",
      role: "Vice Chairman",
      image: "/images/leadership/dr-khalid-mehmood-saqib.jpg",
    },
    {
      id: "03",
      name: "Muhammad Abuzar",
      designation: "Secretary General",
      role: "Secretary General",
      image: "/images/leadership/muhammad-abuzar.jpg",
    },
    {
      id: "04",
      name: "Chaudhary Kashif Ameer",
      designation: "Finance Secretary",
      role: "Finance Secretary",
      image: "/images/leadership/kashif-ameer.jpg",
    },
    {
      id: "05",
      name: "Mian Ehsan Ullah",
      designation: "Joint Secretary",
      role: "Joint Secretary",
      image: "/images/leadership/ihsan-ullah.jpg",
    },
    {
      id: "06",
      name: "Mian Abdul Rauf",
      designation: "Executive Member",
      role: "Executive Member",
      image: "/images/leadership/mian-abdu-raouf.jpg",
    },
    {
      id: "07",
      name: "Dr. Zaka Ullah Siddique",
      designation: "Information Secretary",
      role: "Information Secretary",
      image: "/images/leadership/dr-zaka-ullah-siddique.jpg",
    },
  ];

  return (
    <section className="leadership">
      <div className="leadership__grid" />

      <div className="leadership__glow leadership__glow--left" />
      <div className="leadership__glow leadership__glow--right" />

      <div className="leadership__container">

        {/* HEADER */}
        <div className="leadership__header">
          <div className="leadership__eyebrow">
            <span className="leadership__eyebrow-line" />
            <span>OUR LEADERSHIP</span>
          </div>

          <div className="leadership__heading-row">
            <h2>
              People Behind
              <span>The Mission.</span>
            </h2>

            <p>
              Our leadership carries forward the vision of Alfalah
              Scholarship Scheme through commitment, responsibility and
              service.
            </p>
          </div>
        </div>

        {/* LEADERSHIP CARDS */}
        <div className="leadership__cards">
          {leaders.map((leader) => (
            <article
              className="leadership-card"
              key={leader.id}
            >

              {/* IMAGE */}
              <div className="leadership-card__visual">

                <div className="leadership-card__placeholder">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                  />
                </div>

                <div className="leadership-card__number">
                  {leader.id}
                </div>

                {/* HOVER INFORMATION */}
                <div className="leadership-card__overlay">

                  <div className="leadership-card__overlay-content">
                    <span>ROLE IN ALFALAH</span>
                    <strong>{leader.role}</strong>
                  </div>

                  <span className="leadership-card__overlay-arrow">
                    ↗
                  </span>

                </div>

              </div>

              {/* MEMBER INFORMATION */}
              <div className="leadership-card__info">

                <div className="leadership-card__identity">
                  <h3>{leader.name}</h3>
                  <p>{leader.designation}</p>
                </div>

              </div>

            </article>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div className="leadership__bottom">
          <span>EXECUTIVE LEADERSHIP</span>

          <div className="leadership__bottom-line" />

          <span>ALFALAH SCHOLARSHIP SCHEME</span>
        </div>

      </div>
    </section>
  );
}

export default Leadership;