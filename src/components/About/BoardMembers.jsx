import "./BoardMembers.css";

function BoardMembers() {
  const boardMembers = [
    {
      id: "01",
      name: "Muhammad Amin",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/muhammad-amin.jpg",
    },
    {
      id: "02",
      name: "Ijaz Ahmed Malik",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/ijaz-ahmed-malik.jpg",
    },
    {
      id: "03",
      name: "Syed Saqlain Haider Rizvi",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/syed-saqlain-haider-rizvi.jpg",
    },
    {
      id: "04",
      name: "Tariq Mehmood Saqib",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/tariq-mehmood-saqib.jpg",
    },
    {
      id: "05",
      name: "Chaudhary Iftekhar Ahmed Cheema",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/chaudhary-iftikhar-ahmed-cheema.jpg",
    },
    {
      id: "06",
      name: "Muhammad Ghaias",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/muhammad-ghaias.jpg",
    },
    {
      id: "07",
      name: "Mudassir Sajjad Raja",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/mudassir-sajjad-raja.jpg",
    },
    {
      id: "08",
      name: "Hafiz Muhammad Tayyab",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/hafiz-muhammad-tayyab.jpg",
    },
    {
      id: "09",
      name: "Adnan Shah Maseeh",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/adnan-shah-maseeh.jpg",
    },
    {
      id: "10",
      name: "Asia Bibi",
      designation: "Board Member",
      role: "Board Member",
      image: "/images/board-members/asia-bibi.jpg",
    },
  ];

  return (
    <section className="board-members">
      <div className="board-members__grid" />

      <div className="board-members__glow board-members__glow--left" />
      <div className="board-members__glow board-members__glow--right" />

      <div className="board-members__container">

        {/* HEADER */}
        <div className="board-members__header">

          <div className="board-members__eyebrow">
            <span className="board-members__eyebrow-line" />
            <span>BOARD OF MEMBERS</span>
          </div>

          <div className="board-members__heading-row">

            <h2>
              Guiding
              <span>The Future.</span>
            </h2>

            <p>
              Our Board Members provide guidance, oversight and continued
              support towards the mission and long-term vision of Alfalah
              Scholarship Scheme.
            </p>

          </div>

        </div>

        {/* BOARD GRID */}
        <div className="board-members__cards">

          {boardMembers.map((member) => (
            <article
              className="board-card"
              key={member.id}
            >

              {/* IMAGE */}
              <div className="board-card__visual">

                <div className="board-card__placeholder">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                  />
                </div>

                <div className="board-card__number">
                  {member.id}
                </div>

                {/* HOVER DETAIL */}
                <div className="board-card__overlay">

                  <div className="board-card__overlay-content">
                    <span>ROLE IN ALFALAH</span>
                    <strong>{member.role}</strong>
                  </div>

                  <span className="board-card__arrow">
                    ↗
                  </span>

                </div>

              </div>

              {/* MEMBER INFORMATION */}
              <div className="board-card__info">

                <div className="board-card__identity">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM LINE */}
        <div className="board-members__bottom">

          <span>BOARD MEMBERS</span>

          <div className="board-members__bottom-line" />

          <span>ALFALAH SCHOLARSHIP SCHEME</span>

        </div>

      </div>
    </section>
  );
}

export default BoardMembers;