import "./ChairmanMessage.css";
import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import "./ChairmanMessage.css";

function ChairmanMessage() {
  return (
    <section className="chairman-message">
      <div className="chairman-message__grid" />
      <div className="chairman-message__glow chairman-message__glow--one" />
      <div className="chairman-message__glow chairman-message__glow--two" />

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

          {/* Image */}
          <div className="chairman-message__visual">
            <div className="chairman-message__image-frame">
              <div className="chairman-message__image-number">01</div>

              <img
                src="/images/about/chairman.jpg"
                alt="Chairman of Alfalah Scholarship Scheme"
              />

              <div className="chairman-message__image-overlay" />

              <div className="chairman-message__image-caption">
                <span>ALFALAH SCHOLARSHIP SCHEME</span>
                <strong>Education Without Prejudice</strong>
              </div>
            </div>

            <div className="chairman-message__floating">
              <Sparkles size={16} strokeWidth={1.6} />
              <div>
                <span>ESTABLISHED</span>
                <strong>1998</strong>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="chairman-message__copy">

            <div className="chairman-message__quote-mark">
              <Quote size={25} strokeWidth={1.5} />
            </div>

            <div className="chairman-message__message">
              <p>
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
                grown into a long-standing educational initiative dedicated to
                empowering generations through education.
              </p>
            </div>

            {/* Signature */}
            <div className="chairman-message__signature">
              <div className="chairman-message__signature-line" />

              <div className="chairman-message__signature-info">
                <strong>Chairman</strong>
                <span>Alfalah Scholarship Scheme</span>
              </div>

              <ArrowUpRight
                size={19}
                strokeWidth={1.6}
                className="chairman-message__signature-arrow"
              />
            </div>

          </div>
        </div>

        {/* Bottom statement */}
        <div className="chairman-message__bottom">
          <span>OUR GUIDING BELIEF</span>

          <div className="chairman-message__bottom-line" />

          <strong>
            Education should open doors,
            <span> not create barriers.</span>
          </strong>
        </div>

      </div>
    </section>
  );
}

export default ChairmanMessage;