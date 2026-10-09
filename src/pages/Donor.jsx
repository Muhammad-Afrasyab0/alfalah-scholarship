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

function Donor() {
  /* =====================================================
     STUDENT DATA
  ====================================================== */

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

  /* =====================================================
     BANK DATA
  ====================================================== */

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

  /* =====================================================
     STATE
  ====================================================== */

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

  /* =====================================================
     HELPERS
  ====================================================== */

  const formatPKR = (amount) =>
    new Intl.NumberFormat("en-PK", {
      maximumFractionDigits: 0,
    }).format(amount);

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

  /* =====================================================
     SUBMIT
  ====================================================== */

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

    console.log("Sponsor submission:", payload);

    try {
      setIsSubmitting(true);

      /*
        Backend/API connection can be added here later.

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
        "Thank you. Your sponsor request has been received. The Alfalah Scholarship Scheme team will contact you shortly."
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

  /* =====================================================
     JSX
  ====================================================== */

  return (
    <>
      <style>{`

        /* =========================================
           GLOBAL
        ========================================= */

        .donor-page {
          background: #080d12;
          color: #f5f7fa;
          font-family: "Lato", sans-serif;
        }

        .donor-page *,
        .donor-page *::before,
        .donor-page *::after {
          box-sizing: border-box;
        }


        /* =========================================
           HERO
        ========================================= */

        .donor-hero {
          padding: 42px 0 44px;
          background: #080d12;
        }

        .donor-page__inner {
          width: min(1180px, calc(100% - 80px));
          margin: 0 auto;
        }

        .donor-page__eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 18px;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;

          color: #8795a3;
        }

        .donor-page__eyebrow::before {
          content: "";
          width: 30px;
          height: 1px;
          background: #1677ff;
        }

        .donor-page__title {
          margin: 0;

          max-width: 850px;

          font-size: clamp(44px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 700;

          color: #f5f7fa;
        }

        .donor-page__title span {
          color: #1677ff;
        }

        .donor-page__description {
          max-width: 650px;

          margin: 22px 0 0;

          font-size: 16px;
          line-height: 1.7;

          color: #9ba8b5;
        }

        .donor-page__actions {
          margin-top: 25px;
        }

        .donor-page__button {
          display: inline-flex;
          align-items: center;
          gap: 11px;

          padding: 13px 18px;

          border: 0;
          border-radius: 8px;

          background: #1677ff;
          color: #ffffff;

          font-family: "Lato", sans-serif;
          font-size: 14px;
          font-weight: 700;

          cursor: pointer;

          transition:
            transform 250ms ease,
            background 250ms ease;
        }

        .donor-page__button:hover {
          transform: translateY(-2px);
          background: #0f6ce8;
        }

        .donor-page__trust {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-top: 24px;

          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;

          color: #65727e;
        }

        .donor-page__trust span {
          width: 28px;
          height: 1px;
          background: #38434d;
        }


        /* =========================================
           PROCESS
        ========================================= */

        .donor-process {
          padding: 38px 0 42px;
          background: #0b1117;
        }

        .donor-process__inner {
          width: min(1180px, calc(100% - 80px));
          margin: 0 auto;
        }

        .donor-process__heading {
          display: grid;
          grid-template-columns: 1fr 1fr;

          column-gap: 70px;
          align-items: end;
        }

        .donor-process__eyebrow {
          grid-column: 1 / -1;

          margin-bottom: 16px;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;

          color: #8795a3;
        }

        .donor-process__heading h2 {
          margin: 0;

          font-size: clamp(32px, 4vw, 52px);
          line-height: 1;
          letter-spacing: -0.035em;
          font-weight: 700;
        }

        .donor-process__heading h2 strong {
          color: #1677ff;
        }

        .donor-process__heading > p {
          max-width: 430px;
          margin: 0;

          font-size: 15px;
          line-height: 1.65;

          color: #9ba8b5;
        }


        /* =========================================
           PROCESS STEPS
        ========================================= */

        .donor-process__steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          margin-top: 34px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .donor-process__step {
          display: flex;
          flex-direction: column;
          gap: 17px;

          padding: 21px 22px 0 0;

          border-right: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .donor-process__step:not(:first-child) {
          padding-left: 22px;
        }

        .donor-process__step:last-child {
          border-right: 0;
        }

        .donor-process__step > span {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;

          color: #1677ff;
        }

        .donor-process__step strong {
          display: block;

          font-size: 15px;
          font-weight: 700;

          color: #edf2f6;
        }

        .donor-process__step p {
          margin: 7px 0 0;

          font-size: 12px;
          line-height: 1.6;

          color: #788694;
        }


        /* =========================================
           MODAL
        ========================================= */

        .donor-modal {
          position: fixed;
          inset: 0;

          z-index: 9999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;
        }

        .donor-modal__overlay {
          position: absolute;
          inset: 0;

          background: rgba(2, 6, 10, 0.82);
        }

        .donor-modal__panel {
          position: relative;
          z-index: 1;

          display: flex;
          flex-direction: column;

          width: min(980px, 100%);
          max-height: min(92vh, 900px);

          overflow: hidden;

          border-radius: 18px;

          background: #0c131a;

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.5);
        }


        /* =========================================
           MODAL HEADER
        ========================================= */

        .donor-modal__header {
          flex-shrink: 0;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 30px;

          padding: 23px 26px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);

          background: #0c131a;
        }

        .donor-modal__eyebrow {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;

          color: #1677ff;
        }

        .donor-modal__header h3 {
          margin: 6px 0 4px;

          font-size: 25px;
          line-height: 1.1;
          font-weight: 700;

          color: #f5f7fa;
        }

        .donor-modal__header p {
          margin: 0;

          font-size: 12px;
          line-height: 1.5;

          color: #7f8d9b;
        }

        .donor-modal__close {
          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          width: 38px;
          height: 38px;

          border: 1px solid
            rgba(255, 255, 255, 0.1);

          border-radius: 50%;

          background: transparent;
          color: #9ba8b5;

          cursor: pointer;

          transition:
            color 200ms ease,
            border-color 200ms ease,
            transform 200ms ease;
        }

        .donor-modal__close:hover {
          color: #ffffff;

          border-color:
            rgba(22, 119, 255, 0.5);

          transform: rotate(4deg);
        }


        /* =========================================
           FORM
        ========================================= */

        .donor-form {
          min-height: 0;
          overflow-y: auto;

          padding: 25px 26px 28px;

          scrollbar-width: thin;
          scrollbar-color:
            #26333e transparent;
        }

        .donor-form__section {
          padding-bottom: 27px;
          margin-bottom: 27px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.07);
        }

        .donor-form__section:last-of-type {
          margin-bottom: 22px;
        }

        .donor-form__section-title {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 18px;
        }

        .donor-form__number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 29px;
          height: 29px;

          border-radius: 50%;

          background:
            rgba(22, 119, 255, 0.1);

          color: #1677ff;

          font-size: 9px;
          font-weight: 700;
        }

        .donor-form__section-title strong {
          display: block;

          font-size: 15px;
          font-weight: 700;

          color: #edf2f6;
        }

        .donor-form__section-title small {
          display: block;

          margin-top: 3px;

          font-size: 10px;

          color: #697784;
        }


        /* =========================================
           STUDENT GRID
        ========================================= */

        .student-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 12px;
        }

        .student-card {
          display: block;

          width: 100%;

          padding: 15px;

          border: 1px solid
            rgba(255, 255, 255, 0.08);

          border-radius: 12px;

          background: #101820;
          color: inherit;

          text-align: left;

          cursor: pointer;

          transition:
            border-color 220ms ease,
            background 220ms ease,
            transform 220ms ease;
        }

        .student-card:hover {
          transform: translateY(-2px);

          border-color:
            rgba(22, 119, 255, 0.3);
        }

        .student-card--selected {
          border-color:
            rgba(22, 119, 255, 0.7);

          background:
            rgba(22, 119, 255, 0.07);
        }

        .student-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .student-card__avatar {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 34px;
          height: 34px;

          border-radius: 50%;

          background: #18232d;
          color: #9ba8b5;
        }

        .student-card--selected
          .student-card__avatar {
          background:
            rgba(22, 119, 255, 0.15);

          color: #1677ff;
        }

        .student-card__check {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 22px;
          height: 22px;

          border: 1px solid
            rgba(255, 255, 255, 0.15);

          border-radius: 50%;

          color: #ffffff;
        }

        .student-card--selected
          .student-card__check {
          border-color: #1677ff;
          background: #1677ff;
        }

        .student-card__info {
          display: flex;
          flex-direction: column;
          gap: 3px;

          margin-top: 13px;
        }

        .student-card__info strong {
          font-size: 14px;
          font-weight: 700;

          color: #f0f3f6;
        }

        .student-card__info span {
          font-size: 10px;
          line-height: 1.35;

          color: #788694;
        }

        .student-card__details {
          display: grid;

          grid-template-columns:
            1.4fr 0.6fr 0.7fr;

          gap: 10px;

          margin-top: 16px;
        }

        .student-card__details > div {
          min-width: 0;
        }

        .student-card__details small {
          display: block;

          margin-bottom: 4px;

          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.1em;

          color: #5f6d79;
        }

        .student-card__details span {
          display: block;

          overflow: hidden;

          font-size: 9px;
          line-height: 1.3;

          color: #a6b1bb;

          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .student-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 15px;
          padding-top: 11px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.07);

          font-size: 9px;
          font-weight: 700;

          color: #788694;
        }

        .student-card__footer span:first-child {
          color: #1677ff;
        }


        /* =========================================
           DONOR FIELDS
        ========================================= */

        .donor-fields {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 16px;
        }

        .donor-fields label {
          display: block;
        }

        .donor-fields label > span {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 7px;

          font-size: 11px;
          font-weight: 700;

          color: #a5b0ba;
        }

        .donor-fields input {
          width: 100%;
          box-sizing: border-box;

          padding: 12px 13px;

          border: 1px solid
            rgba(255, 255, 255, 0.09);

          border-radius: 8px;

          outline: none;

          background: #101820;
          color: #edf2f6;

          font-family: "Lato", sans-serif;
          font-size: 12px;

          transition:
            border-color 200ms ease,
            background 200ms ease;
        }

        .donor-fields input::placeholder {
          color: #53616d;
        }

        .donor-fields input:focus {
          border-color:
            rgba(22, 119, 255, 0.65);

          background: #111b24;
        }


        /* =========================================
           SUMMARY
        ========================================= */

        .sponsor-summary {
          display: flex;
          gap: 18px;

          padding: 18px;

          border-radius: 12px;

          background: #101820;
        }

        .sponsor-summary__icon {
          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          width: 38px;
          height: 38px;

          border-radius: 50%;

          background:
            rgba(22, 119, 255, 0.1);

          color: #1677ff;
        }

        .sponsor-summary__rows {
          flex: 1;
        }

        .sponsor-summary__rows > div {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          padding: 9px 0;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.06);
        }

        .sponsor-summary__rows > div:last-child {
          border-bottom: 0;
        }

        .sponsor-summary__rows span {
          font-size: 11px;
          color: #7f8d9b;
        }

        .sponsor-summary__rows strong {
          font-size: 12px;
          color: #edf2f6;
        }

        .sponsor-summary__rows strong.highlight {
          color: #1677ff;
          font-size: 15px;
        }

        .sponsor-summary__empty {
          padding: 18px;

          border-radius: 10px;

          background: #101820;

          font-size: 12px;
          color: #697784;
        }


        /* =========================================
           BANK DETAILS
        ========================================= */

        .bank-details__notice {
          display: flex;
          gap: 12px;

          padding-bottom: 18px;

          color: #1677ff;
        }

        .bank-details__notice > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bank-details__notice strong {
          font-size: 13px;
          color: #edf2f6;
        }

        .bank-details__notice span {
          font-size: 11px;
          line-height: 1.5;
          color: #788694;
        }

        .bank-list {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 12px;
        }

        .bank-card {
          padding: 15px;

          border-left: 2px solid #1677ff;

          background: #101820;
        }

        .bank-card__country {
          margin-bottom: 8px;

          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.12em;

          color: #1677ff;
        }

        .bank-card strong {
          display: block;

          margin-bottom: 8px;

          font-size: 12px;
          line-height: 1.4;

          color: #edf2f6;
        }

        .bank-card span {
          display: block;

          margin-top: 4px;

          font-size: 10px;
          line-height: 1.4;

          color: #788694;
        }

        .bank-card b {
          color: #aeb8c1;
        }


        /* =========================================
           CONSENT
        ========================================= */

        .donor-consent {
          position: relative;

          display: flex;
          align-items: flex-start;
          gap: 11px;

          cursor: pointer;
        }

        .donor-consent input {
          position: absolute;

          opacity: 0;
          pointer-events: none;
        }

        .donor-consent__box {
          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          width: 21px;
          height: 21px;

          border: 1px solid
            rgba(255, 255, 255, 0.18);

          border-radius: 5px;

          color: #ffffff;

          transition:
            background 200ms ease,
            border-color 200ms ease;
        }

        .donor-consent
          input:checked
          + .donor-consent__box {
          border-color: #1677ff;
          background: #1677ff;
        }

        .donor-consent__text {
          font-size: 11px;
          line-height: 1.55;

          color: #7f8d9b;
        }


        /* =========================================
           SUBMIT
        ========================================= */

        .donor-form__submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          width: 100%;

          padding: 14px 18px;

          border: 0;
          border-radius: 8px;

          background: #1677ff;
          color: #ffffff;

          font-family: "Lato", sans-serif;
          font-size: 13px;
          font-weight: 700;

          cursor: pointer;

          transition:
            transform 220ms ease,
            background 220ms ease,
            opacity 220ms ease;
        }

        .donor-form__submit:hover:not(:disabled) {
          transform: translateY(-2px);
          background: #0f6ce8;
        }

        .donor-form__submit:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .donor-form__footer {
          margin: 12px 0 0;

          text-align: center;

          font-size: 9px;
          line-height: 1.5;

          color: #586570;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .donor-page__inner,
          .donor-process__inner {
            width: min(100% - 48px, 760px);
          }

          .donor-process__heading {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .donor-process__heading > p {
            max-width: 600px;
          }

          .donor-process__steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .donor-process__step:nth-child(2) {
            border-right: 0;
          }

          .donor-process__step:nth-child(n + 3) {
            border-top: 1px solid
              rgba(255, 255, 255, 0.08);
          }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .donor-modal {
            padding: 0;
          }

          .donor-modal__panel {
            width: 100%;
            height: 100%;
            max-height: 100%;

            border-radius: 0;
          }

          .donor-modal__header {
            padding: 18px;
          }

          .donor-form {
            padding: 20px 18px 24px;
          }

          .student-grid {
            grid-template-columns: 1fr;
          }

          .donor-fields {
            grid-template-columns: 1fr;
          }

          .bank-list {
            grid-template-columns: 1fr;
          }

          .sponsor-summary {
            gap: 12px;
          }

          .sponsor-summary__rows > div {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }

          .donor-process {
            padding: 30px 0 32px;
          }

          .donor-process__steps {
            grid-template-columns: 1fr;
          }

          .donor-process__step,
          .donor-process__step:not(:first-child) {
            padding: 17px 0;

            border-right: 0;

            border-top: 1px solid
              rgba(255, 255, 255, 0.08);
          }

          .donor-process__step:first-child {
            border-top: 0;
          }
        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .donor-hero {
            padding: 30px 0 32px;
          }

          .donor-page__inner,
          .donor-process__inner {
            width: calc(100% - 32px);
          }

          .donor-page__title {
            font-size:
              clamp(40px, 12vw, 56px);
          }

          .donor-page__description {
            margin-top: 18px;
            font-size: 14px;
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .donor-page *,
          .donor-page *::before,
          .donor-page *::after {
            transition: none !important;
          }
        }

      `}</style>


      {/* =====================================================
          DONOR PAGE
      ====================================================== */}

      <div className="donor-page">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="donor-hero">

          <div className="donor-page__inner">

            <div className="donor-page__eyebrow">
              ALFALAH SCHOLARSHIP SCHEME
            </div>

            <h1 className="donor-page__title">
              Become a Sponsor.
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
                className="donor-page__button"
                onClick={() => setIsOpen(true)}
              >
                <HeartHandshake size={18} />

                <span>
                  Become a Sponsor
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
            PROCESS
        ====================================================== */}

        <section className="donor-process">

          <div className="donor-process__inner">

            <div className="donor-process__heading">

              <span className="donor-process__eyebrow">
                HOW IT WORKS
              </span>

              <h2>
                A simple way to support
                <br />
                <strong>
                  deserving students.
                </strong>
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
            SPONSOR MODAL
        ====================================================== */}

        {isOpen && (
          <div className="donor-modal">

            <div
              className="donor-modal__overlay"
              onClick={closeModal}
            />

            <div className="donor-modal__panel">

              {/* MODAL HEADER */}

              <div className="donor-modal__header">

                <div>

                  <span className="donor-modal__eyebrow">
                    ALFALAH SCHOLARSHIP SCHEME
                  </span>

                  <h3>
                    Become a Sponsor
                  </h3>

                  <p>
                    Select one or more students you
                    would like to support.
                  </p>

                </div>

                <button
                  type="button"
                  className="donor-modal__close"
                  onClick={closeModal}
                  aria-label="Close sponsor form"
                >
                  <X size={20} />
                </button>

              </div>


              {/* FORM */}

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

                      const selected =
                        isSelected(student.id);

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
                              Father:{" "}
                              {student.fatherName}
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
                    02 — SPONSOR INFORMATION
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
                        Sponsorship Summary
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
                            ₨
                            {formatPKR(
                              totalSponsorship
                            )}
                          </strong>

                        </div>


                        <div>

                          <span>
                            Monthly Disbursement Equivalent
                          </span>

                          <strong>
                            ₨
                            {formatPKR(
                              totalMonthlyEquivalent
                            )}{" "}
                            / month
                          </strong>

                        </div>

                      </div>

                    </div>

                  ) : (

                    <div className="sponsor-summary__empty">
                      Select students above to see
                      your sponsorship calculation.
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
                        Accounts available for direct
                        sponsorship
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
                      I confirm that the information
                      provided is correct and I agree
                      that Alfalah Scholarship Scheme
                      may contact me regarding this
                      sponsor request.
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
                      : "Submit Sponsor Request"}
                  </span>

                  {!isSubmitting && (
                    <ArrowRight size={17} />
                  )}

                </button>


                <p className="donor-form__footer">
                  Your information will be shared with
                  the Alfalah Scholarship Scheme team
                  for sponsor coordination.
                </p>

              </form>

            </div>

          </div>
        )}

      </div>
    </>
  );
}

export default Donor;