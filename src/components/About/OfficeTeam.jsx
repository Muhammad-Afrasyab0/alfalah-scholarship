import "./OfficeTeam.css";

function OfficeTeam() {
  const officeTeam = [
    {
      id: "01",
      name: "Umer Hayat Umer",
      designation: "Project Manager",
      image: "/images/office-team/umer-hayat-umer.jpg",
    },
    {
      id: "02",
      name: "Tahir Rafiq Butt",
      designation: "Event Manager",
      image: "/images/office-team/tahir-rafiq-butt.jpg",
    },
    {
      id: "03",
      name: "Tauqeer Hassan",
      designation: "Finance Manager",
      image: "/images/office-team/tauqeer-hassan.jpg",
    },
    {
      id: "04",
      name: "Syed Khurram Shah",
      designation: "Manager RMD",
      image: "/images/office-team/syed-khurram-shah.jpg",
    },
    {
      id: "05",
      name: "Sameer Yousaf",
      designation: "Finance Officer",
      image: "/images/office-team/sameer-yousaf.jpg",
    },
    {
      id: "06",
      name: "Aqsa Akram",
      designation: "Admin Officer",
      image: "/images/office-team/aqsa-akram.jpg",
    },
    {
      id: "07",
      name: "Maryem",
      designation: "HR Intern",
      image: "/images/office-team/maryem.jpg",
    },
  ];

  return (
    <section className="office-team">
      <div className="office-team__container">

        <div className="office-team__header">
          <div className="office-team__eyebrow">
            <span className="office-team__eyebrow-line" />
            <span>OFFICE TEAM</span>
          </div>

          <div className="office-team__heading-row">
            <h2>
              Meet
              <span>Our Team.</span>
            </h2>

            <p>
              Our dedicated team works together to support the mission,
              manage operations and create meaningful opportunities for
              deserving students through Alfalah Scholarship Scheme.
            </p>
          </div>
        </div>

        <div className="office-team__cards">
          {officeTeam.map((member) => (
            <article className="office-card" key={member.id}>

              <div className="office-card__visual">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />

                <div className="office-card__image-overlay" />

                <span className="office-card__number">
                  {member.id}
                </span>
              </div>

              <div className="office-card__info">
                <h3>{member.name}</h3>
                <p>{member.designation}</p>
              </div>

            </article>
          ))}
        </div>

        <div className="office-team__bottom">
          <span>OFFICE TEAM</span>

          <div className="office-team__bottom-line" />

          <span>ALFALAH SCHOLARSHIP SCHEME</span>
        </div>

      </div>
    </section>
  );
}

export default OfficeTeam;