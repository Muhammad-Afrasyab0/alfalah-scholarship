import "./Leadership.css";

function Leadership() {
  const leaders = [
    {
      id: "01",
      name: "Member Name",
      designation: "Designation",
      role: "Executive Member",
      facebook: "#",
      whatsapp: "#",
    },
    {
      id: "02",
      name: "Member Name",
      designation: "Designation",
      role: "Executive Member",
      facebook: "#",
      whatsapp: "#",
    },
    {
      id: "03",
      name: "Member Name",
      designation: "Designation",
      role: "Executive Member",
      facebook: "#",
      whatsapp: "#",
    },
    {
      id: "04",
      name: "Member Name",
      designation: "Designation",
      role: "Executive Member",
      facebook: "#",
      whatsapp: "#",
    },
    {
      id: "05",
      name: "Member Name",
      designation: "Designation",
      role: "Executive Member",
      facebook: "#",
      whatsapp: "#",
    },
    {
      id: "06",
      name: "Member Name",
      designation: "Designation",
      role: "Executive Member",
      facebook: "#",
      whatsapp: "#",
    },
    {
      id: "07",
      name: "Member Name",
      designation: "Designation",
      role: "Executive Member",
      facebook: "#",
      whatsapp: "#",
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

              {/* IMAGE PLACEHOLDER */}
              <div className="leadership-card__visual">

                <div className="leadership-card__placeholder">
                  <span>IMAGE</span>
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

                {/* SOCIAL LINKS */}
                <div className="leadership-card__socials">

                  <a
                    href={leader.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${leader.name} Facebook`}
                  >
                    f
                  </a>

                  <a
                    href={leader.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${leader.name} WhatsApp`}
                  >
                    W
                  </a>

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