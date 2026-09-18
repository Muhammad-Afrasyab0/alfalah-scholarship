import "./BoardMembers.css";

function BoardMembers() {
  const boardMembers = [
    {
      id: "01",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "02",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "03",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "04",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "05",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "06",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "07",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "08",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "09",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
    },
    {
      id: "10",
      name: "Member Name",
      designation: "Designation",
      role: "Board Member",
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

              {/* IMAGE PLACEHOLDER */}
              <div className="board-card__visual">

                <div className="board-card__placeholder">
                  <span>IMAGE</span>
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