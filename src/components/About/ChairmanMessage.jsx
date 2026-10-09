import "./ChairmanMessage.css";
import { ArrowUpRight, Quote } from "lucide-react";

function ChairmanMessage() {
  return (
    <section className="chairman-message">
      <div className="chairman-message__container">

        {/* Section Header */}
        <div className="chairman-message__header">

          <div className="chairman-message__eyebrow">
            <span className="chairman-message__eyebrow-line" />
            <span>FROM THE CHAIRMAN</span>
          </div>

          <h2>
            A Commitment to
            <span> Education &amp; Opportunity.</span>
          </h2>

          <p>
            The story behind Alfalah Scholarship Scheme begins with a simple
            belief — that talent should never be limited by financial
            circumstances.
          </p>

        </div>


        {/* Main Content */}
        <div className="chairman-message__content">

          {/* MESSAGE - LEFT */}
          <div className="chairman-message__copy">

            <div className="chairman-message__quote">
              <Quote size={22} strokeWidth={1.5} />
            </div>

            <div className="chairman-message__message">

              <p className="chairman-message__lead">
                There are many talented and deserving students who have the
                ability, determination and potential to build a better future,
                but financial circumstances can prevent them from pursuing
                higher education.
              </p>

              <p>
                Alfalah Scholarship Scheme was established to address this
                challenge and to create an opportunity for deserving students
                to continue their education without prejudice.
              </p>

              <p>
                The idea was rooted in the hope that education could become a
                bridge between potential and opportunity — enabling young
                people to develop their abilities, contribute positively to
                society and build a prosperous future.
              </p>

              <p>
                Over the years, this vision has continued to guide our work.
                What began as a commitment to support deserving students has
                grown into a long-standing educational initiative dedicated
                to empowering generations through education.
              </p>

            </div>


            {/* Chairman Designation */}
            <div className="chairman-message__signature">

              <div className="chairman-message__signature-line" />

              <div className="chairman-message__signature-info">
                <strong>Chairman</strong>
                <span>Alfalah Scholarship Scheme</span>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="chairman-message__signature-arrow"
              />

            </div>

          </div>


          {/* IMAGE - RIGHT */}
          <div className="chairman-message__visual">

            <div className="chairman-message__image-frame">

              <img
                src="/images/about/chairman.jpg"
                alt="Chairman of Alfalah Scholarship Scheme"
              />

              <div className="chairman-message__image-overlay" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ChairmanMessage;