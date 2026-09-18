import { useState } from "react";
import {
  ArrowRight,
  HeartHandshake,
  X,
  Check,
  UserRound,
  Building2,
  MessageCircle,
  Mail,
  Calculator,
  ShieldCheck,
  Landmark,
} from "lucide-react";

import "../components/home/SponsorCTA.css";

const students = [
  {
    id: 1,
    name: "Muhammad Hamza",
    fatherName: "Muhammad Aslam",
    programme: "Intermediate",
    className: "F.Sc. Pre-Engineering",
    institution: "Government College",
    percentage: "88%",
    location: "Kharian",
    duration: 2,
    annual: 66000,
    monthly: 5000,
  },
  {
    id: 2,
    name: "Ayesha Noor",
    fatherName: "Muhammad Yousaf",
    programme: "DAE",
    className: "DAE Electrical",
    institution: "Government College of Technology",
    percentage: "86%",
    location: "Gujrat",
    duration: 3,
    annual: 66000,
    monthly: 5000,
  },
  {
    id: 3,
    name: "Ali Raza",
    fatherName: "Rashid Ahmed",
    programme: "Graduation",
    className: "BS Computer Science",
    institution: "Public Sector University",
    percentage: "84%",
    location: "Lahore",
    duration: 2,
    annual: 108000,
    monthly: 8000,
  },
  {
    id: 4,
    name: "Maryam Fatima",
    fatherName: "Muhammad Imran",
    programme: "Master / BS (Hons)",
    className: "BS (Hons) Economics",
    institution: "Public Sector University",
    percentage: "87%",
    location: "Islamabad",
    duration: 4,
    annual: 108000,
    monthly: 8000,
  },
  {
    id: 5,
    name: "Abdullah Khan",
    fatherName: "Khalid Mahmood",
    programme: "Engineering",
    className: "BS Civil Engineering",
    institution: "Engineering University",
    percentage: "91%",
    location: "Gujranwala",
    duration: 4,
    annual: 135000,
    monthly: 10000,
  },
  {
    id: 6,
    name: "Hira Zahid",
    fatherName: "Zahid Hussain",
    programme: "Medical",
    className: "MBBS",
    institution: "Medical College",
    percentage: "93%",
    location: "Gujrat",
    duration: 5,
    annual: 135000,
    monthly: 10000,
  },
];

const bankAccounts = [
  {
    country: "Pakistan",
    bank: "MCB Bank — Kharian City",
    account: "0020 1010 100 14478",
  },
  {
    country: "Pakistan",
    bank: "Meezan Bank Limited — Lahore",
    account: "0103509922",
  },
  {
    country: "United Kingdom",
    bank: "Lloyds TSB — High Street Slough, England",
    title: "Alfalah Scholarship Scheme",
    account: "02888959",
  },
];

const formatPKR = (amount) =>
  new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0,
  }).format(amount);

function Donor() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedStudents, setSelectedStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    business: "",
    whatsapp: "",
    email: "",
  });

  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleStudent = (student) => {
    setSelectedStudents((current) => {
      const exists = current.some(
        (item) => item.id === student.id
      );

      if (exists) {
        return current.filter(
          (item) => item.id !== student.id
        );
      }

      return [...current, student];
    });
  };

  const isSelected = (id) =>
    selectedStudents.some(
      (student) => student.id === id
    );

  const totalAnnual = selectedStudents.reduce(
    (sum, student) => sum + student.annual,
    0
  );

  const totalSponsorship = selectedStudents.reduce(
    (sum, student) =>
      sum + student.annual * student.duration,
    0
  );

  const totalMonthlyEquivalent = selectedStudents.reduce(
    (sum, student) => sum + student.monthly,
    0
  );

  const handleInput = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const closeModal = () => {
    if (isSubmitting) return;
    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedStudents.length) {
      alert("Please select at least one student.");
      return;
    }

    if (!form.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!form.whatsapp.trim()) {
      alert("Please enter your WhatsApp number.");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    if (!consent) {
      alert(
        "Please confirm that the information provided is correct."
      );
      return;
    }

    const payload = {
      recipient: "info@alfalahss.org",

      donor: {
        name: form.name.trim(),
        business: form.business.trim(),
        whatsapp: form.whatsapp.trim(),
        email: form.email.trim(),
      },

      students: selectedStudents.map((student) => ({
        id: student.id,
        name: student.name,
        fatherName: student.fatherName,
        programme: student.programme,
        className: student.className,
        institution: student.institution,
        percentage: student.percentage,
        location: student.location,
        duration: student.duration,
        annual: student.annual,
        monthly: student.monthly,
      })),

      financialSummary: {
        studentsSelected: selectedStudents.length,
        combinedAnnualSponsorship: totalAnnual,
        totalProgrammeSponsorship: totalSponsorship,
        monthlyDisbursementEquivalent:
          totalMonthlyEquivalent,
      },

      consent: true,
    };

    console.log("Donor submission:", payload);

    try {
      setIsSubmitting(true);

      /*
        Backend/API connection will be added later.

        Example:

        const response = await fetch("/api/donor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }
      */

      await new Promise((resolve) =>
        setTimeout(resolve, 400)
      );

      alert(
        "Thank you. Your donor request has been received. The Alfalah Scholarship Scheme team will contact you shortly."
      );

      setIsOpen(false);

      setSelectedStudents([]);

      setForm({
        name: "",
        business: "",
        whatsapp: "",
        email: "",
      });

      setConsent(false);
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="donor-page">

      {/* =====================================================
          DONOR INTRO SECTION
      ====================================================== */}

      <section className="sponsor-cta donor-hero">

        <div className="sponsor-cta__grid" />

        <div className="donor-page__inner">

          <div className="donor-page__eyebrow">
            ALFALAH SCHOLARSHIP SCHEME
          </div>

          <h1 className="donor-page__title">
            Become a Donor.
            <br />
            <span>Change a Student's Future.</span>
          </h1>

          <p className="donor-page__description">
            Your contribution can help a deserving student
            continue their education without financial
            barriers. Select one or more students and let
            us help you make a meaningful difference.
          </p>

          <div className="donor-page__actions">

            <button
              type="button"
              className="sponsor-cta__button"
              onClick={() => setIsOpen(true)}
            >
              <HeartHandshake size={18} />

              <span>
                Become a Donor
              </span>

              <ArrowRight size={17} />
            </button>

          </div>

          <div className="donor-page__trust">
            <span />
            Education Without Prejudice
            <span />
          </div>

        </div>

      </section>


      {/* =====================================================
          DONOR PROCESS
      ====================================================== */}

      <section className="donor-process">

        <div className="donor-process__grid" />

        <div className="donor-process__inner">

          <div className="donor-process__heading">

            <span>
              HOW IT WORKS
            </span>

            <h2>
              A simple way to support
              <br />
              <strong>deserving students.</strong>
            </h2>

            <p>
              Choose the students you want to support,
              provide your contact details and our team
              will coordinate the sponsorship with you.
            </p>

          </div>


          <div className="donor-process__steps">

            <div className="donor-process__step">
              <span>01</span>

              <div>
                <strong>
                  Select Students
                </strong>

                <p>
                  Choose one or multiple deserving
                  students from the available list.
                </p>
              </div>
            </div>


            <div className="donor-process__step">
              <span>02</span>

              <div>
                <strong>
                  Share Your Details
                </strong>

                <p>
                  Tell us how the Alfalah team can
                  contact you regarding your request.
                </p>
              </div>
            </div>


            <div className="donor-process__step">
              <span>03</span>

              <div>
                <strong>
                  Make Your Contribution
                </strong>

                <p>
                  Use the provided bank details and
                  complete your sponsorship.
                </p>
              </div>
            </div>


            <div className="donor-process__step">
              <span>04</span>

              <div>
                <strong>
                  Build a Future
                </strong>

                <p>
                  The Alfalah team coordinates the
                  scholarship support with the student.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DONOR MODAL
      ====================================================== */}

      {isOpen && (
        <div className="donor-modal">

          <div
            className="donor-modal__overlay"
            onClick={closeModal}
          />

          <div className="donor-modal__panel">

            <div className="donor-modal__header">

              <div>

                <span className="donor-modal__eyebrow">
                  ALFALAH SCHOLARSHIP SCHEME
                </span>

                <h3>
                  Become a Donor
                </h3>

                <p>
                  Select one or more students you would
                  like to support.
                </p>

              </div>

              <button
                type="button"
                className="donor-modal__close"
                onClick={closeModal}
                aria-label="Close donor form"
              >
                <X size={20} />
              </button>

            </div>


            <form
              className="donor-form"
              onSubmit={handleSubmit}
            >

              {/* =================================================
                  01 — STUDENT SELECTION
              ================================================== */}

              <div className="donor-form__section">

                <div className="donor-form__section-title">

                  <span className="donor-form__number">
                    01
                  </span>

                  <div>
                    <strong>
                      Select Students
                    </strong>

                    <small>
                      Multiple selections are allowed
                    </small>
                  </div>

                </div>


                <div className="student-grid">

                  {students.map((student) => {

                    const selected = isSelected(
                      student.id
                    );

                    return (
                      <button
                        type="button"
                        key={student.id}
                        className={`student-card ${
                          selected
                            ? "student-card--selected"
                            : ""
                        }`}
                        onClick={() =>
                          toggleStudent(student)
                        }
                      >

                        <div className="student-card__top">

                          <div className="student-card__avatar">
                            <UserRound size={17} />
                          </div>

                          <div className="student-card__check">

                            {selected && (
                              <Check size={13} />
                            )}

                          </div>

                        </div>


                        <div className="student-card__info">

                          <strong>
                            {student.name}
                          </strong>

                          <span>
                            Father: {student.fatherName}
                          </span>

                          <span>
                            {student.className}
                          </span>

                        </div>


                        <div className="student-card__details">

                          <div>
                            <small>
                              INSTITUTION
                            </small>

                            <span>
                              {student.institution}
                            </span>
                          </div>


                          <div>
                            <small>
                              MARKS
                            </small>

                            <span>
                              {student.percentage}
                            </span>
                          </div>


                          <div>
                            <small>
                              LOCATION
                            </small>

                            <span>
                              {student.location}
                            </span>
                          </div>

                        </div>


                        <div className="student-card__footer">

                          <span>
                            {student.programme}
                          </span>

                          <span>
                            {student.duration} Years
                          </span>

                        </div>

                      </button>
                    );
                  })}

                </div>

              </div>


              {/* =================================================
                  02 — DONOR INFORMATION
              ================================================== */}

              <div className="donor-form__section">

                <div className="donor-form__section-title">

                  <span className="donor-form__number">
                    02
                  </span>

                  <div>
                    <strong>
                      Your Information
                    </strong>

                    <small>
                      Tell us how we can contact you
                    </small>
                  </div>

                </div>


                <div className="donor-fields">

                  <label>

                    <span>
                      <UserRound size={14} />
                      Full Name
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInput}
                      placeholder="Your full name"
                      required
                    />

                  </label>


                  <label>

                    <span>
                      <Building2 size={14} />
                      Business / Organization
                    </span>

                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleInput}
                      placeholder="Business or organization name"
                    />

                  </label>


                  <label>

                    <span>
                      <MessageCircle size={14} />
                      WhatsApp Number
                    </span>

                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleInput}
                      placeholder="+92 300 0000000"
                      required
                    />

                  </label>


                  <label>

                    <span>
                      <Mail size={14} />
                      Email Address
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInput}
                      placeholder="you@example.com"
                      required
                    />

                  </label>

                </div>

              </div>


              {/* =================================================
                  03 — SUMMARY
              ================================================== */}

              <div className="donor-form__section">

                <div className="donor-form__section-title">

                  <span className="donor-form__number">
                    03
                  </span>

                  <div>
                    <strong>
                      Donation Summary
                    </strong>

                    <small>
                      Based on your selected students
                    </small>
                  </div>

                </div>


                {selectedStudents.length > 0 ? (

                  <div className="sponsor-summary">

                    <div className="sponsor-summary__icon">
                      <Calculator size={19} />
                    </div>


                    <div className="sponsor-summary__rows">

                      <div>
                        <span>
                          Students Selected
                        </span>

                        <strong>
                          {selectedStudents.length}
                        </strong>
                      </div>


                      <div>
                        <span>
                          Combined Annual Sponsorship
                        </span>

                        <strong>
                          ₨{formatPKR(totalAnnual)}
                        </strong>
                      </div>


                      <div>
                        <span>
                          Total Programme Sponsorship
                        </span>

                        <strong className="highlight">
                          ₨{formatPKR(totalSponsorship)}
                        </strong>
                      </div>


                      <div>
                        <span>
                          Monthly Disbursement Equivalent
                        </span>

                        <strong>
                          ₨{formatPKR(
                            totalMonthlyEquivalent
                          )} / month
                        </strong>
                      </div>

                    </div>

                  </div>

                ) : (

                  <div className="sponsor-summary__empty">
                    Select students above to see your
                    sponsorship calculation.
                  </div>

                )}

              </div>


              {/* =================================================
                  04 — BANK DETAILS
              ================================================== */}

              <div className="donor-form__section">

                <div className="donor-form__section-title">

                  <span className="donor-form__number">
                    04
                  </span>

                  <div>
                    <strong>
                      Bank Details
                    </strong>

                    <small>
                      Accounts available for direct donation
                    </small>
                  </div>

                </div>


                <div className="bank-details">

                  <div className="bank-details__notice">

                    <Landmark size={17} />

                    <div>

                      <strong>
                        Direct Bank Transfer
                      </strong>

                      <span>
                        You may transfer your sponsorship
                        amount directly to one of the
                        following Alfalah accounts.
                      </span>

                    </div>

                  </div>


                  <div className="bank-list">

                    {bankAccounts.map(
                      (account, index) => (

                        <div
                          className="bank-card"
                          key={index}
                        >

                          <div className="bank-card__country">
                            {account.country}
                          </div>

                          <strong>
                            {account.bank}
                          </strong>

                          {account.title && (
                            <span>
                              Account Title:{" "}
                              {account.title}
                            </span>
                          )}

                          <span>
                            Account No:{" "}
                            <b>
                              {account.account}
                            </b>
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>


              {/* =================================================
                  05 — CONSENT
              ================================================== */}

              <div className="donor-form__section">

                <div className="donor-form__section-title">

                  <span className="donor-form__number">
                    05
                  </span>

                  <div>
                    <strong>
                      Confirmation
                    </strong>

                    <small>
                      Please confirm before submitting
                    </small>
                  </div>

                </div>


                <label className="donor-consent">

                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) =>
                      setConsent(
                        event.target.checked
                      )
                    }
                  />

                  <span className="donor-consent__box">

                    {consent && (
                      <Check size={13} />
                    )}

                  </span>

                  <span className="donor-consent__text">
                    I confirm that the information provided
                    is correct and I agree that Alfalah
                    Scholarship Scheme may contact me
                    regarding this donor request.
                  </span>

                </label>

              </div>


              {/* =================================================
                  SUBMIT
              ================================================== */}

              <button
                type="submit"
                className="donor-form__submit"
                disabled={
                  !selectedStudents.length ||
                  !consent ||
                  isSubmitting
                }
              >

                <ShieldCheck size={17} />

                <span>
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Donor Request"}
                </span>

                {!isSubmitting && (
                  <ArrowRight size={17} />
                )}

              </button>


              <p className="donor-form__footer">
                Your information will be shared with the
                Alfalah Scholarship Scheme team for
                donor coordination.
              </p>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default Donor;