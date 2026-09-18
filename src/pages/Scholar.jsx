import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Download,
  FileText,
  GraduationCap,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";

import "../styles/Scholar.css";

const steps = [
  { id: 1, title: "Personal", subtitle: "Applicant information" },
  { id: 2, title: "Education", subtitle: "Current education" },
  { id: 3, title: "Academic", subtitle: "Previous results" },
  { id: 4, title: "Family", subtitle: "Family & finances" },
  { id: 5, title: "Siblings", subtitle: "Siblings information" },
  { id: 6, title: "Support", subtitle: "Other support & scholarships" },
  { id: 7, title: "References", subtitle: "Two references" },
  { id: 8, title: "Documents", subtitle: "Certification & uploads" },
];

const initialForm = {
  category: [],
  applicantName: "",
  sdo: "",
  cnic: "",
  dateOfBirth: "",
  cell: "",
  email: "",
  whatsapp: "",
  facebook: "",
  ptcl: "",
  presentAddress: "",
  presentDistrict: "",
  permanentAddress: "",
  permanentDistrict: "",

  className: "",
  course: "",
  yearSemester: "",
  institution: "",
  institutionContact: "",
  courseStartDate: "",
  courseEndDate: "",
  distinction: "",
  monthlyFee: "",
  hostelExpenses: "",
  teacherName: "",
  teacherContact: "",

  matricYear: "",
  matricTotal: "",
  matricObtained: "",
  matricPercentage: "",
  intermediateYear: "",
  intermediateTotal: "",
  intermediateObtained: "",
  intermediatePercentage: "",
  graduationYear: "",
  graduationTotal: "",
  graduationObtained: "",
  graduationPercentage: "",
  currentDegreeYear: "",
  currentDegreeTotal: "",
  currentDegreeObtained: "",
  currentDegreePercentage: "",

  fatherGuardianName: "",
  fatherCnic: "",
  familyCell1: "",
  familyCell2: "",
  monthlyIncome: "",
  professionalStatus: [],

  servingName: "",
  servingRelation: "",
  servingCell: "",
  servingEmployer: "",
  servingAddress: "",
  servingOfficeTel: "",
  servingEmployerCell: "",
  servingDesignationGrade: "",
  servingSalary: "",

  shopDetails: "",
  shopMonthlyIncome: "",
  totalFamilyMembers: "",

  siblings: Array.from({ length: 5 }, () => ({
    name: "",
    gender: "",
    classCourse: "",
    semester: "",
    institute: "",
    instituteType: "",
    monthlyFee: "",
  })),

  totalSiblingFees: "",

  supportingName: "",
  supportingRelation: "",
  supportingCell: "",
  supportingAmount: "",

  beneficiaryName: "",
  beneficiaryOrganization: "",
  beneficiaryStipend: "",

  scholarshipName: "",
  scholarshipOrganization: "",
  scholarshipAmount: "",

  reference1: {
    name: "",
    profession: "",
    cnic: "",
    cell: "",
  },
  reference2: {
    name: "",
    profession: "",
    cnic: "",
    cell: "",
  },

  studentSignature: "",
  guardianSignature: "",
  certificationDate: "",

  institutionHeadName: "",
  institutionHeadDesignation: "",
  institutionHeadSignature: "",
  institutionHeadDate: "",
  officeStamp: "",

  consent: false,
};

const documentFields = [
  ["selfCnic", "Self CNIC", true],
  ["guardianCnic", "Father / Guardian CNIC", true],
  ["photographs", "3 Recent Photographs", true],
  ["electricityBill", "Current Electricity Bill", true],
  ["salaryPensionProof", "Salary Slip / Pension Book", false],
  ["previousResults", "All Previous Examination Results", true],
  ["feeSlip", "Latest Fee Slip", true],
  ["bonafideCertificate", "Bonafide Certificate", true],
];

const professionalStatuses = [
  "Govt. Employee",
  "Private Employee",
  "Self-Business",
  "Retired",
  "Abroad",
  "Un-Employed",
  "Disabled",
];

const categories = [
  "Orphan",
  "Disable",
  "Need based",
  "Muslim",
  "Non-Muslim",
];

function Scholar() {
  const [activeStep, setActiveStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef(null);

  const updateField = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const updateNested = (group, name, value) => {
    setForm((current) => ({
      ...current,
      [group]: { ...current[group], [name]: value },
    }));
  };

  const toggleArrayValue = (name, value) => {
    setForm((current) => {
      const values = current[name];
      return {
        ...current,
        [name]: values.includes(value)
          ? values.filter((item) => item !== value)
          : [...values, value],
      };
    });
  };

  const updateSibling = (index, name, value) => {
    setForm((current) => ({
      ...current,
      siblings: current.siblings.map((sibling, siblingIndex) =>
        siblingIndex === index
          ? { ...sibling, [name]: value }
          : sibling
      ),
    }));
  };

  const handleFile = (name, fileList) => {
    setFiles((current) => ({
      ...current,
      [name]: fileList?.[0] || null,
    }));
  };

  const progress = Math.round((activeStep / steps.length) * 100);

  const validateStep = (step) => {
    const requiredByStep = {
      1: [
        ["applicantName", "Applicant's Name"],
        ["sdo", "S/D/O"],
        ["cnic", "Applicant CNIC No."],
        ["dateOfBirth", "Date of Birth"],
        ["cell", "Cell Number"],
        ["email", "Email"],
        ["presentAddress", "Present Postal Address"],
        ["presentDistrict", "Present District"],
        ["permanentAddress", "Permanent Postal Address"],
        ["permanentDistrict", "Permanent District"],
      ],
      2: [
        ["className", "Class"],
        ["course", "Course of Study"],
        ["yearSemester", "Year / Semester"],
        ["institution", "Institution"],
        ["courseStartDate", "Course Start Date"],
        ["courseEndDate", "Course End Date"],
        ["monthlyFee", "Monthly Fee"],
      ],
      3: [],
      4: [
        ["fatherGuardianName", "Father / Guardian Name"],
        ["fatherCnic", "Father CNIC No."],
        ["monthlyIncome", "Monthly Income"],
        ["totalFamilyMembers", "Total Members in Family"],
      ],
      5: [],
      6: [],
      7: [
        ["reference1.name", "Reference 1 Name"],
        ["reference1.profession", "Reference 1 Profession"],
        ["reference1.cnic", "Reference 1 CNIC"],
        ["reference1.cell", "Reference 1 Cell"],
        ["reference2.name", "Reference 2 Name"],
        ["reference2.profession", "Reference 2 Profession"],
        ["reference2.cnic", "Reference 2 CNIC"],
        ["reference2.cell", "Reference 2 Cell"],
      ],
      8: [
        ["studentSignature", "Student Signature / Full Name"],
        ["guardianSignature", "Father / Guardian Signature / Full Name"],
        ["certificationDate", "Certification Date"],
        ["institutionHeadName", "Head of Institution Name"],
        ["institutionHeadDesignation", "Head of Institution Designation"],
        ["institutionHeadSignature", "Head of Institution Signature / Full Name"],
        ["institutionHeadDate", "Head of Institution Date"],
      ],
    };

    const missing = (requiredByStep[step] || []).find(([key]) => {
      const parts = key.split(".");
      const value =
        parts.length === 2 ? form[parts[0]]?.[parts[1]] : form[key];
      return !String(value ?? "").trim();
    });

    if (missing) {
      alert(`Please complete: ${missing[1]}`);
      return false;
    }

    if (step === 8) {
      const missingDocument = documentFields.find(
        ([key, , required]) => required && !files[key]
      );
      if (missingDocument) {
        alert(`Please upload: ${missingDocument[1]}`);
        return false;
      }

      if (!form.consent) {
        alert("Please confirm the certification and declaration.");
        return false;
      }
    }

    return true;
  };

  const goNext = () => {
    if (!validateStep(activeStep)) return;

    setActiveStep((current) =>
      Math.min(current + 1, steps.length)
    );

    window.scrollTo({ top: formRef.current?.offsetTop - 80 || 0, behavior: "smooth" });
  };

  const goBack = () => {
    setActiveStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: formRef.current?.offsetTop - 80 || 0, behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!validateStep(8)) return;

    setIsSubmitting(true);

    try {
      const payload = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === "siblings" || key === "category" || key === "professionalStatus") {
          payload.append(key, JSON.stringify(value));
        } else if (typeof value === "boolean") {
          payload.append(key, String(value));
        } else if (value !== null && value !== undefined) {
          payload.append(key, String(value));
        }
      });

      payload.append("submittedAt", new Date().toISOString());

      Object.entries(files).forEach(([key, file]) => {
        if (file) payload.append(key, file);
      });

      const response = await fetch("/api/scholarship-application", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Application could not be submitted.");
      }

      setSubmitted(true);
      setActiveStep(1);
      window.scrollTo({ top: formRef.current?.offsetTop - 80 || 0, behavior: "smooth" });
    } catch (error) {
      setSubmitError(
        error.message ||
          "Unable to submit the application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedDocuments = useMemo(
    () => Object.values(files).filter(Boolean).length,
    [files]
  );

  const renderField = ({
    label,
    name,
    type = "text",
    placeholder = "",
    required = false,
    full = false,
    min,
  }) => (
    <div className={`scholar-form-field ${full ? "scholar-form-field--full" : ""}`}>
      <label>
        {label} {required && <span>*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          value={form[name] ?? ""}
          onChange={(event) => updateField(name, event.target.value)}
          placeholder={placeholder}
          rows="4"
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={form[name] ?? ""}
          onChange={(event) => updateField(name, event.target.value)}
          placeholder={placeholder}
          required={required}
          min={min}
        />
      )}
    </div>
  );

  const renderHeader = () => (
    <>
      <div className="scholar-form-card__top">
        <div>
          <span className="scholar-form-card__label">
            ONLINE APPLICATION
          </span>
          <h3>Alfalah Academic Scholarship Program</h3>
          <p>Session 2026–27 · Complete the official application online</p>
        </div>

        <div className="scholar-form-card__deadline">
          <span>APPLICATION WINDOW</span>
          <strong>01 Aug — 31 Oct 2026</strong>
        </div>
      </div>

      <div className="scholar-stepper">
        <div className="scholar-stepper__top">
          <span>APPLICATION PROGRESS</span>
          <strong>{progress}%</strong>
        </div>

        <div className="scholar-progress">
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className="scholar-stepper__steps">
          {steps.map((step) => (
            <button
              type="button"
              key={step.id}
              className={`scholar-step ${
                activeStep === step.id ? "is-active" : ""
              } ${activeStep > step.id ? "is-complete" : ""}`}
              onClick={() => {
                if (step.id < activeStep) setActiveStep(step.id);
              }}
              disabled={step.id > activeStep}
            >
              <span>{activeStep > step.id ? <Check size={13} /> : step.id}</span>
              <div>
                <strong>{step.title}</strong>
                <small>{step.subtitle}</small>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );

  const renderStepHeading = (number, title, description) => (
    <div className="scholar-form-section__heading">
      <span>{String(number).padStart(2, "0")}</span>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );

  const renderStep = () => {
    if (activeStep === 1) {
      return (
        <div className="scholar-form-section">
          {renderStepHeading(1, "Applicant Personal Information", "Provide your personal and contact information exactly as it appears on your documents.")}

          <div className="scholar-form-field scholar-form-field--full">
            <label>Category</label>
            <div className="scholar-form-options">
              {categories.map((category) => (
                <label className="scholar-check-option" key={category}>
                  <input
                    type="checkbox"
                    checked={form.category.includes(category)}
                    onChange={() => toggleArrayValue("category", category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="scholar-form-grid">
            {renderField({ label: "Applicant's Name", name: "applicantName", placeholder: "Full name", required: true })}
            {renderField({ label: "S/D/O", name: "sdo", placeholder: "Son / Daughter / Other", required: true })}
            {renderField({ label: "Applicant CNIC No.", name: "cnic", placeholder: "XXXXX-XXXXXXX-X", required: true })}
            {renderField({ label: "Date of Birth", name: "dateOfBirth", type: "date", required: true })}
            {renderField({ label: "Cell Number", name: "cell", placeholder: "+92 3XX XXXXXXX", required: true })}
            {renderField({ label: "Email", name: "email", type: "email", placeholder: "student@example.com", required: true })}
            {renderField({ label: "WhatsApp Number", name: "whatsapp", placeholder: "+92 3XX XXXXXXX" })}
            {renderField({ label: "Facebook", name: "facebook", placeholder: "Facebook profile / URL" })}
            {renderField({ label: "Contact (PTCL)", name: "ptcl", placeholder: "Landline number" })}
            {renderField({ label: "Present District", name: "presentDistrict", placeholder: "District", required: true })}
            {renderField({ label: "Present Postal Address", name: "presentAddress", type: "textarea", placeholder: "Present postal address", required: true, full: true })}
            {renderField({ label: "Permanent District", name: "permanentDistrict", placeholder: "District", required: true })}
            {renderField({ label: "Permanent Postal Address", name: "permanentAddress", type: "textarea", placeholder: "Permanent postal address", required: true, full: true })}
          </div>
        </div>
      );
    }

    if (activeStep === 2) {
      return (
        <div className="scholar-form-section">
          {renderStepHeading(2, "Education Information", "Tell us about your current course, institution and education costs.")}

          <div className="scholar-form-grid">
            {renderField({ label: "Class", name: "className", placeholder: "Current class", required: true })}
            {renderField({ label: "Course of Study", name: "course", placeholder: "Course / degree", required: true })}
            {renderField({ label: "Year / Semester", name: "yearSemester", placeholder: "e.g. 3rd Semester", required: true })}
            {renderField({ label: "Institution", name: "institution", placeholder: "Institution name", required: true })}
            {renderField({ label: "Institution Contact No.", name: "institutionContact", placeholder: "Institution contact" })}
            {renderField({ label: "Course Start Date", name: "courseStartDate", type: "date", required: true })}
            {renderField({ label: "Course End Date", name: "courseEndDate", type: "date", required: true })}
            {renderField({ label: "Any Distinction", name: "distinction", placeholder: "Distinction, if any" })}
            {renderField({ label: "Monthly Fee", name: "monthlyFee", type: "number", placeholder: "Rs.", required: true, min: 0 })}
            {renderField({ label: "Hostel Expenses", name: "hostelExpenses", type: "number", placeholder: "Rs.", min: 0 })}
            {renderField({ label: "Name of Teacher", name: "teacherName", placeholder: "Teacher name" })}
            {renderField({ label: "Teacher Contact No.", name: "teacherContact", placeholder: "Teacher contact" })}
          </div>
        </div>
      );
    }

    if (activeStep === 3) {
      const rows = [
        ["Matriculation", "matric"],
        ["Intermediate", "intermediate"],
        ["Graduation", "graduation"],
        ["Current Degree (Last Result Sem/Year)", "currentDegree"],
      ];

      return (
        <div className="scholar-form-section">
          {renderStepHeading(3, "Previous Education Record", "Enter your academic record exactly as shown on your official result documents.")}

          <div className="scholar-education-table">
            <div className="scholar-education-table__header">
              <span>Degree / Certificate</span>
              <span>Year</span>
              <span>Total Marks</span>
              <span>Marks Obtained</span>
              <span>Percentage</span>
            </div>

            {rows.map(([label, key]) => (
              <div className="scholar-education-table__row" key={key}>
                <strong>{label}</strong>
                <input value={form[`${key}Year`]} onChange={(e) => updateField(`${key}Year`, e.target.value)} placeholder="Year" />
                <input type="number" min="0" value={form[`${key}Total`]} onChange={(e) => updateField(`${key}Total`, e.target.value)} placeholder="Total" />
                <input type="number" min="0" value={form[`${key}Obtained`]} onChange={(e) => updateField(`${key}Obtained`, e.target.value)} placeholder="Obtained" />
                <input value={form[`${key}Percentage`]} onChange={(e) => updateField(`${key}Percentage`, e.target.value)} placeholder="%" />
              </div>
            ))}
          </div>

          <div className="scholar-inline-note">
            <ShieldCheck size={16} />
            <span>Academic eligibility is assessed according to the official programme criteria and applicant category.</span>
          </div>
        </div>
      );
    }

    if (activeStep === 4) {
      return (
        <div className="scholar-form-section">
          {renderStepHeading(4, "Family & Financial Information", "Provide the household information used to assess financial need.")}

          <div className="scholar-form-grid">
            {renderField({ label: "Father's / Guardian's Name", name: "fatherGuardianName", placeholder: "Full name", required: true })}
            {renderField({ label: "Father's CNIC No.", name: "fatherCnic", placeholder: "XXXXX-XXXXXXX-X", required: true })}
            {renderField({ label: "Cell # (1)", name: "familyCell1", placeholder: "Primary family contact" })}
            {renderField({ label: "Cell # (2)", name: "familyCell2", placeholder: "Secondary family contact" })}
            {renderField({ label: "Monthly Income", name: "monthlyIncome", type: "number", placeholder: "Rs.", required: true, min: 0 })}
            {renderField({ label: "Total Members in the Family", name: "totalFamilyMembers", type: "number", placeholder: "Number of members", required: true, min: 1 })}
            {renderField({ label: "Shop Details (if applicable)", name: "shopDetails", type: "textarea", placeholder: "Nature / volume of shop", full: true })}
            {renderField({ label: "Shop Total Monthly Income", name: "shopMonthlyIncome", type: "number", placeholder: "Rs.", min: 0 })}
          </div>

          <div className="scholar-form-field scholar-form-field--full">
            <label>Father's / Guardian's Professional Status</label>
            <div className="scholar-form-options">
              {professionalStatuses.map((status) => (
                <label className="scholar-check-option" key={status}>
                  <input
                    type="checkbox"
                    checked={form.professionalStatus.includes(status)}
                    onChange={() => toggleArrayValue("professionalStatus", status)}
                  />
                  <span>{status}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="scholar-subpanel">
            <div className="scholar-subpanel__title">
              <strong>Serving Family Member Details</strong>
              <span>If Father / Mother / Guardian / Brother / Sister is serving.</span>
            </div>
            <div className="scholar-form-grid">
              {renderField({ label: "Name", name: "servingName", placeholder: "Name" })}
              {renderField({ label: "Relation", name: "servingRelation", placeholder: "Relation" })}
              {renderField({ label: "Cell", name: "servingCell", placeholder: "Cell" })}
              {renderField({ label: "Department / Company / Employer", name: "servingEmployer", placeholder: "Employer" })}
              {renderField({ label: "Address", name: "servingAddress", type: "textarea", placeholder: "Employer address", full: true })}
              {renderField({ label: "Tel (Office)", name: "servingOfficeTel", placeholder: "Office telephone" })}
              {renderField({ label: "Cell (Employer)", name: "servingEmployerCell", placeholder: "Employer cell" })}
              {renderField({ label: "Designation & Grade", name: "servingDesignationGrade", placeholder: "Designation / grade" })}
              {renderField({ label: "Total Monthly Salary", name: "servingSalary", type: "number", placeholder: "Rs.", min: 0 })}
            </div>
          </div>
        </div>
      );
    }

    if (activeStep === 5) {
      return (
        <div className="scholar-form-section">
          {renderStepHeading(5, "Siblings Information", "Add details of siblings studying, including the applicant's own detail where applicable.")}

          <div className="scholar-sibling-table">
            <div className="scholar-sibling-table__header">
              <span>#</span><span>Name</span><span>Gender</span><span>Class / Course</span><span>Semester</span><span>Institute</span><span>Type</span><span>Fee / Month</span>
            </div>

            {form.siblings.map((sibling, index) => (
              <div className="scholar-sibling-table__row" key={index}>
                <strong>{index + 1}</strong>
                <input value={sibling.name} onChange={(e) => updateSibling(index, "name", e.target.value)} placeholder="Name" />
                <select value={sibling.gender} onChange={(e) => updateSibling(index, "gender", e.target.value)}>
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <input value={sibling.classCourse} onChange={(e) => updateSibling(index, "classCourse", e.target.value)} placeholder="Class / Course" />
                <input value={sibling.semester} onChange={(e) => updateSibling(index, "semester", e.target.value)} placeholder="Semester" />
                <input value={sibling.institute} onChange={(e) => updateSibling(index, "institute", e.target.value)} placeholder="Institute + address" />
                <select value={sibling.instituteType} onChange={(e) => updateSibling(index, "instituteType", e.target.value)}>
                  <option value="">Type</option>
                  <option>Govt.</option>
                  <option>Private</option>
                </select>
                <input type="number" min="0" value={sibling.monthlyFee} onChange={(e) => updateSibling(index, "monthlyFee", e.target.value)} placeholder="Rs." />
              </div>
            ))}
          </div>

          {renderField({ label: "Total Fees & Tuition Charges of All Siblings (Per Month)", name: "totalSiblingFees", type: "number", placeholder: "Rs.", min: 0 })}

          <div className="scholar-inline-note">
            <FileText size={16} />
            <span>If you have more sibling details, mention them in the additional information/document area.</span>
          </div>
        </div>
      );
    }

    if (activeStep === 6) {
      return (
        <div className="scholar-form-section">
          {renderStepHeading(6, "Other Financial Support & Existing Scholarships", "Declare any person or organization currently supporting your education.")}

          <div className="scholar-subpanel">
            <div className="scholar-subpanel__title">
              <strong>Other Supporting Person</strong>
              <span>Someone giving you a helping hand in your education.</span>
            </div>
            <div className="scholar-form-grid">
              {renderField({ label: "Name", name: "supportingName", placeholder: "Name" })}
              {renderField({ label: "Relation", name: "supportingRelation", placeholder: "Relation" })}
              {renderField({ label: "Cell", name: "supportingCell", placeholder: "Cell" })}
              {renderField({ label: "Amount Being Paid", name: "supportingAmount", type: "number", placeholder: "Rs.", min: 0 })}
            </div>
          </div>

          <div className="scholar-subpanel">
            <div className="scholar-subpanel__title">
              <strong>Financial Support from Alfalah / Other Organization</strong>
              <span>Provide details if you or any sibling receives support.</span>
            </div>
            <div className="scholar-form-grid">
              {renderField({ label: "Name of Beneficiary", name: "beneficiaryName", placeholder: "Beneficiary" })}
              {renderField({ label: "Organization", name: "beneficiaryOrganization", placeholder: "Organization" })}
              {renderField({ label: "Amount of Stipend", name: "beneficiaryStipend", type: "number", placeholder: "Rs.", min: 0 })}
            </div>
          </div>

          <div className="scholar-subpanel">
            <div className="scholar-subpanel__title">
              <strong>Existing Scholarship</strong>
              <span>Declare any current scholarship or financial aid.</span>
            </div>
            <div className="scholar-form-grid">
              {renderField({ label: "Scholarship / Aid Name", name: "scholarshipName", placeholder: "Scholarship name" })}
              {renderField({ label: "Organization", name: "scholarshipOrganization", placeholder: "Organization" })}
              {renderField({ label: "Amount", name: "scholarshipAmount", type: "number", placeholder: "Rs.", min: 0 })}
            </div>
          </div>

          <div className="scholar-warning">
            <ShieldCheck size={17} />
            <span>The official form states that applicants receiving financial aid/scholarships from organisations such as PEEF, HEC or NGOs are not eligible. Declare support accurately.</span>
          </div>
        </div>
      );
    }

    if (activeStep === 7) {
      return (
        <div className="scholar-form-section">
          {renderStepHeading(7, "References", "Provide two educated persons who know your family circumstances and can certify the details.")}

          {[1, 2].map((number) => {
            const group = `reference${number}`;
            const reference = form[group];

            return (
              <div className="scholar-subpanel" key={group}>
                <div className="scholar-subpanel__title">
                  <strong>Reference {number}</strong>
                  <span>Educated person familiar with your family circumstances.</span>
                </div>

                <div className="scholar-form-grid">
                  <div className="scholar-form-field">
                    <label>Name <span>*</span></label>
                    <input value={reference.name} onChange={(e) => updateNested(group, "name", e.target.value)} placeholder="Full name" required />
                  </div>
                  <div className="scholar-form-field">
                    <label>Profession / Occupation <span>*</span></label>
                    <input value={reference.profession} onChange={(e) => updateNested(group, "profession", e.target.value)} placeholder="Profession" required />
                  </div>
                  <div className="scholar-form-field">
                    <label>CNIC # <span>*</span></label>
                    <input value={reference.cnic} onChange={(e) => updateNested(group, "cnic", e.target.value)} placeholder="CNIC" required />
                  </div>
                  <div className="scholar-form-field">
                    <label>Cell # <span>*</span></label>
                    <input value={reference.cell} onChange={(e) => updateNested(group, "cell", e.target.value)} placeholder="Cell" required />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="scholar-form-section">
        {renderStepHeading(8, "Certification & Required Documents", "Complete the declarations and attach the documents specified on the official form.")}

        <div className="scholar-certification">
          <div className="scholar-certification__title">
            <ShieldCheck size={18} />
            <strong>Student & Father / Guardian Certification</strong>
          </div>

          <p>
            It is certified that all particulars given above are correct.
          </p>

          <div className="scholar-form-grid">
            {renderField({ label: "Student Signature / Full Name", name: "studentSignature", placeholder: "Type your full name", required: true })}
            {renderField({ label: "Father / Guardian Signature / Full Name", name: "guardianSignature", placeholder: "Type full name", required: true })}
            {renderField({ label: "Date", name: "certificationDate", type: "date", required: true })}
          </div>
        </div>

        <div className="scholar-certification">
          <div className="scholar-certification__title">
            <GraduationCap size={18} />
            <strong>Certification by the Head of Institution</strong>
          </div>

          <p>
            It is certified that the applicant is a Bonafide student of the institution, is not getting scholarship from another organisation/department, and is recommended for grant of scholarship being a deserving one.
          </p>

          <div className="scholar-form-grid">
            {renderField({ label: "Name", name: "institutionHeadName", placeholder: "Head of institution", required: true })}
            {renderField({ label: "Designation", name: "institutionHeadDesignation", placeholder: "Designation", required: true })}
            {renderField({ label: "Signature / Full Name", name: "institutionHeadSignature", placeholder: "Signature / name", required: true })}
            {renderField({ label: "Date", name: "institutionHeadDate", type: "date", required: true })}
            {renderField({ label: "Office Stamp", name: "officeStamp", placeholder: "Type stamp details if applicable" })}
          </div>
        </div>

        <div className="scholar-documents">
          <div className="scholar-documents__head">
            <div>
              <span>ATTACHED DOCUMENTS</span>
              <h4>Upload your supporting documents</h4>
            </div>
            <strong>{selectedDocuments} / {documentFields.length}</strong>
          </div>

          <div className="scholar-documents__grid">
            {documentFields.map(([key, label, required]) => (
              <label className={`scholar-upload ${files[key] ? "has-file" : ""}`} key={key}>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(event) => handleFile(key, event.target.files)}
                />
                <span className="scholar-upload__icon">
                  {files[key] ? <CheckCircle2 size={18} /> : <Upload size={18} />}
                </span>
                <span className="scholar-upload__text">
                  <strong>{label}{required && " *"}</strong>
                  <small>
                    {files[key] ? files[key].name : "PDF, JPG or PNG"}
                  </small>
                </span>
              </label>
            ))}
          </div>
        </div>

        <label className="scholar-consent">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
          />
          <span>
            I certify that the information supplied in this application is correct and complete, and I understand that incomplete or missing documentation may result in rejection.
          </span>
        </label>
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="scholar-page">
        <section className="scholar-success">
          <div className="scholar-success__grid" />
          <div className="scholar-success__card">
            <div className="scholar-success__icon">
              <CheckCircle2 size={42} />
            </div>
            <span>APPLICATION RECEIVED</span>
            <h1>Your scholarship application has been submitted.</h1>
            <p>
              Your application and uploaded documents have been sent to
              the Alfalah Scholarship Scheme for review.
            </p>
            <div className="scholar-success__notice">
              <strong>What happens next?</strong>
              <span>The Alfalah team will review the submission and contact you using the details provided in the application.</span>
            </div>
            <button
              type="button"
              className="scholar-button scholar-button--primary"
              onClick={() => {
                setSubmitted(false);
                setForm(initialForm);
                setFiles({});
              }}
            >
              Submit Another Application
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="scholar-page">
      <section className="scholar-intro">
        <div className="scholar-intro__grid" />
        <div className="scholar-intro__glow scholar-intro__glow--top" />
        <div className="scholar-intro__glow scholar-intro__glow--bottom" />
        <div className="scholar-intro__curve scholar-intro__curve--one" />
        <div className="scholar-intro__curve scholar-intro__curve--two" />

        <div className="scholar-intro__container">
          <div className="scholar-intro__content">
            <div className="scholar-intro__eyebrow">
              <span className="scholar-intro__eyebrow-line" />
              <span>ALFALAH ACADEMIC SCHOLARSHIP PROGRAM</span>
            </div>

            <h1 className="scholar-intro__title">
              Education Should Be
              <br />
              <span>a Right, Not a Privilege.</span>
            </h1>

            <p className="scholar-intro__description">
              A flagship initiative dedicated to supporting talented yet financially
              underprivileged students across Gujrat. Let education be your right—not a privilege.
            </p>

            <div className="scholar-intro__actions">
              <button
                type="button"
                className="scholar-button scholar-button--primary"
                onClick={() => document.getElementById("scholar-application")?.scrollIntoView({ behavior: "smooth" })}
              >
                <GraduationCap size={18} />
                <span>Start Your Application</span>
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="scholar-button scholar-button--secondary"
                onClick={() => document.getElementById("scholar-eligibility")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>View Eligibility</span>
                <ArrowDown size={15} />
              </button>
            </div>

            <div className="scholar-intro__trust">
              <ShieldCheck size={15} />
              <span>Merit&nbsp;&nbsp;•&nbsp;&nbsp;Verification&nbsp;&nbsp;•&nbsp;&nbsp;Interview</span>
            </div>
          </div>

          <div className="scholar-intro__side">
            <div className="scholar-window">
              <div className="scholar-window__header">
                <div className="scholar-window__icon"><CalendarDays size={19} /></div>
                <div>
                  <span>APPLICATION WINDOW</span>
                  <small>SESSION 2026–27</small>
                </div>
              </div>

              <div className="scholar-window__dates">
                <div className="scholar-window__date">
                  <strong>01</strong>
                  <div><span>AUGUST</span><small>2026</small></div>
                </div>
                <div className="scholar-window__connector"><span /><small>TO</small><span /></div>
                <div className="scholar-window__date">
                  <strong>31</strong>
                  <div><span>OCTOBER</span><small>2026</small></div>
                </div>
              </div>

              <div className="scholar-window__status">
                <CheckCircle2 size={14} />
                <span>Submit your application within the designated timeframe.</span>
              </div>
            </div>

            <div className="scholar-requirements">
              <div className="scholar-requirement"><span className="scholar-requirement__number">01</span><div><small>MATRIC</small><strong>70%</strong></div></div>
              <div className="scholar-requirement"><span className="scholar-requirement__number">02</span><div><small>INTER / DAE+</small><strong>65%</strong></div></div>
              <div className="scholar-requirement"><span className="scholar-requirement__number">03</span><div><small>MINORITY</small><strong>60%</strong></div></div>
            </div>

            <div className="scholar-intro__note">
              <span />
              <p>Academic performance is considered alongside genuine financial need.</p>
            </div>
          </div>
        </div>

        <div className="scholar-intro__bottom">
          <span>2026 — 27</span>
          <span>ACADEMIC SCHOLARSHIP</span>
          <span>EDUCATION WITHOUT PREJUDICE</span>
        </div>

        <div className="scholar-intro__scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </div>
      </section>

      <section id="scholar-eligibility" className="scholar-eligibility">
        <div className="scholar-eligibility__grid" />
        <div className="scholar-eligibility__container">
          <div className="scholar-eligibility__header">
            <div className="scholar-eligibility__eyebrow"><span /><p>ELIGIBILITY & SCHOLARSHIP PROGRAMMES</p></div>
            <h2>Find the path that<br /><span>fits your education.</span></h2>
            <p className="scholar-eligibility__intro">Review the eligibility requirements and scholarship programmes available for Session 2026–27 before completing your application.</p>
          </div>

          <div className="scholar-eligibility__criteria">
            {[
              ["01", "FINANCIAL NEED", "Genuine financial hardship", "Applicants must be genuinely facing acute financial hardship that threatens continuation of their education."],
              ["02", "ACADEMIC PERFORMANCE", "Merit remains essential", "Minimum academic requirements apply according to the student's educational level and category."],
              ["03", "INSTITUTION TYPE", "Recognised education matters", "Applicants must be bonafide students of a government educational institution. Intermediate students in registered private institutions may also apply."],
              ["04", "EXCLUSIVITY", "No overlapping financial aid", "Applicants must not be receiving financial aid from PEEF, HEC or NGOs. Students in lavish or elite institutions will not be entertained."],
            ].map(([number, eyebrow, title, text]) => (
              <article className="eligibility-card" key={number}>
                <div className="eligibility-card__number">{number}</div>
                <div className="eligibility-card__content">
                  <span>{eyebrow}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {number === "02" && (
                    <div className="eligibility-card__marks">
                      <div><strong>70%</strong><small>Matric</small></div>
                      <div><strong>65%</strong><small>Inter / DAE+</small></div>
                      <div><strong>60%</strong><small>Minority</small></div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="scholar-application" className="scholar-application">
        <div className="scholar-grid-bg" />
        <div className="scholar-application__container">
          <div className="scholar-section-head">
            <span className="scholar-eyebrow">ONLINE APPLICATION · SESSION 2026–27</span>
            <h2>Complete your<br /><span>scholarship application.</span></h2>
            <p>One section at a time. Your progress is preserved while you move through the official application structure.</p>
          </div>

          <form ref={formRef} className="scholar-form-card" onSubmit={handleSubmit}>
            {renderHeader()}
            {renderStep()}

            {submitError && (
              <div className="scholar-submit-error">
                <strong>Submission failed</strong>
                <span>{submitError}</span>
              </div>
            )}

            <div className="scholar-form-navigation">
              <button type="button" className="scholar-nav-button scholar-nav-button--secondary" onClick={goBack} disabled={activeStep === 1 || isSubmitting}>
                <ArrowLeft size={16} /> Back
              </button>

              {activeStep < steps.length ? (
                <button type="button" className="scholar-nav-button scholar-nav-button--primary" onClick={goNext}>
                  Continue <ArrowRight size={16} />
                </button>
              ) : (
                <button type="submit" className="scholar-nav-button scholar-nav-button--primary" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <CheckCircle2 size={16} />}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="scholar-download">
        <div className="scholar-download__grid" />
        <div className="scholar-download__container">
          <div className="scholar-download__content">
            <span>OFFLINE APPLICATION</span>
            <h2>Prefer the paper form?</h2>
            <p>If you cannot complete the online application, download the latest official application form, print it, complete it as instructed, attach the required documents and submit it to the Alfalah Scholarship Scheme office.</p>
            <div className="scholar-download__address">
              Alfalah Haji Muhammad Hussain Memorial Centre,<br />
              Gulshan-e-Razzak, Dhoria, Dinga Road Kharian, Gujrat
            </div>
          </div>

          <a
            className="scholar-download__button"
            href="https://alfalahss.org/Application%20Form%20-%20Academic%20Scholarship%20Program%202026-27.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={19} />
            <span>
              <strong>Download Official Form</strong>
              <small>PDF · Academic Scholarship 2026–27</small>
            </span>
            <Download size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Scholar;
