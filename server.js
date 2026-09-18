import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 5000);

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====================================================
// FILE UPLOAD
// =====================================================

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 20,
  },
});

// =====================================================
// SMTP
// =====================================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// =====================================================
// SMTP TEST
// =====================================================

transporter.verify((error) => {
  if (error) {
    console.log("");
    console.log("❌ SMTP CONNECTION FAILED");
    console.log(error.message);
    console.log("");
  } else {
    console.log("");
    console.log("✅ SMTP SERVER READY");
    console.log("");
  }
});

// =====================================================
// HEALTH CHECK
// =====================================================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Alfalah Scholarship API is running.",
  });
});

// =====================================================
// SCHOLARSHIP APPLICATION
// =====================================================

app.post(
  "/api/scholarship-application",

  upload.fields([
    { name: "selfCnic", maxCount: 1 },
    { name: "guardianCnic", maxCount: 1 },
    { name: "photographs", maxCount: 3 },
    { name: "electricityBill", maxCount: 1 },
    { name: "salaryProof", maxCount: 1 },
    { name: "previousResults", maxCount: 1 },
    { name: "feeSlip", maxCount: 1 },
    { name: "bonafideCertificate", maxCount: 1 },
  ]),

  async (req, res) => {
    try {
      console.log("");
      console.log("========================================");
      console.log("NEW SCHOLARSHIP APPLICATION");
      console.log("========================================");

      const data = req.body || {};
      const files = req.files || {};

      // -----------------------------------------------
      // REQUIRED FIELDS
      // -----------------------------------------------

      const requiredFields = [
        "applicantName",
        "guardianName",
        "applicantCnic",
        "dateOfBirth",
        "cell",
        "email",
        "presentAddress",
        "permanentAddress",
        "classCourse",
        "institutionName",
        "institutionContact",
        "fatherGuardianName",
        "fatherGuardianCnic",
        "monthlyFamilyIncome",
        "totalFamilyMembers",
      ];

      const missingFields = requiredFields.filter(
        (fieldName) =>
          !data[fieldName] ||
          String(data[fieldName]).trim() === ""
      );

      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          message:
            "Please complete all required fields.",
          missingFields,
        });
      }

      // -----------------------------------------------
      // HTML ESCAPE
      // -----------------------------------------------

      const escapeHtml = (value) => {
        if (value === undefined || value === null) {
          return "";
        }

        return String(value)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      };

      // -----------------------------------------------
      // EMAIL FIELD
      // -----------------------------------------------

      const field = (label, value) => {
        if (
          value === undefined ||
          value === null ||
          String(value).trim() === ""
        ) {
          return "";
        }

        return `
          <tr>
            <td style="
              padding:12px 14px;
              border-bottom:1px solid #e6e9ed;
              width:34%;
              font-weight:600;
              color:#344054;
              background:#f8fafc;
            ">
              ${escapeHtml(label)}
            </td>

            <td style="
              padding:12px 14px;
              border-bottom:1px solid #e6e9ed;
              color:#101828;
            ">
              ${escapeHtml(value)}
            </td>
          </tr>
        `;
      };

      // -----------------------------------------------
      // EMAIL SECTION
      // -----------------------------------------------

      const section = (title, content) => `
        <div style="margin-top:28px;">

          <div style="
            background:#07131c;
            color:#ffffff;
            padding:13px 16px;
            font-size:15px;
            font-weight:700;
            border-left:4px solid #1677ff;
          ">
            ${escapeHtml(title)}
          </div>

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              border:1px solid #e6e9ed;
              border-top:none;
              border-collapse:collapse;
              font-family:Arial,sans-serif;
              font-size:14px;
            "
          >
            <tbody>
              ${content}
            </tbody>
          </table>

        </div>
      `;

      // -----------------------------------------------
      // PERSONAL
      // -----------------------------------------------

      const personalInfo = [
        field("Applicant Name", data.applicantName),
        field("S/O / D/O", data.guardianName),
        field("CNIC", data.applicantCnic),
        field("Date of Birth", data.dateOfBirth),
        field("Category", data.category),
        field("Cell", data.cell),
        field("Email", data.email),
        field("WhatsApp", data.whatsapp),
        field("Facebook", data.facebook),
        field("PTCL", data.ptcl),
        field("Present Address", data.presentAddress),
        field("Present District", data.presentDistrict),
        field("Permanent Address", data.permanentAddress),
        field(
          "Permanent District",
          data.permanentDistrict
        ),
      ].join("");

      // -----------------------------------------------
      // EDUCATION
      // -----------------------------------------------

      const educationInfo = [
        field("Class / Course", data.classCourse),
        field(
          "Year / Semester",
          data.yearSemester
        ),
        field(
          "Institution",
          data.institutionName
        ),
        field(
          "Institution Contact",
          data.institutionContact
        ),
        field("Start Date", data.startDate),
        field("End Date", data.endDate),
        field(
          "Distinction",
          data.distinction
        ),
        field(
          "Monthly Fee",
          data.monthlyFee
        ),
        field(
          "Hostel Expenses",
          data.hostelExpenses
        ),
        field(
          "Teacher Name",
          data.teacherName
        ),
        field(
          "Teacher Contact",
          data.teacherContact
        ),
      ].join("");

      // -----------------------------------------------
      // ACADEMIC
      // -----------------------------------------------

      const academicInfo = [
        field(
          "Matric Total Marks",
          data.matricTotal
        ),
        field(
          "Matric Obtained Marks",
          data.matricObtained
        ),
        field(
          "Matric Percentage",
          data.matricPercentage
        ),

        field(
          "Intermediate Total Marks",
          data.interTotal
        ),
        field(
          "Intermediate Obtained Marks",
          data.interObtained
        ),
        field(
          "Intermediate Percentage",
          data.interPercentage
        ),

        field(
          "Graduation Total Marks",
          data.graduationTotal
        ),
        field(
          "Graduation Obtained Marks",
          data.graduationObtained
        ),
        field(
          "Graduation Percentage",
          data.graduationPercentage
        ),

        field(
          "Current Degree Year",
          data.currentDegreeYear
        ),
      ].join("");

      // -----------------------------------------------
      // FAMILY
      // -----------------------------------------------

      const familyInfo = [
        field(
          "Father / Guardian Name",
          data.fatherGuardianName
        ),
        field(
          "Father / Guardian CNIC",
          data.fatherGuardianCnic
        ),
        field(
          "Father / Guardian Cell",
          data.fatherGuardianCell
        ),
        field(
          "Monthly Family Income",
          data.monthlyFamilyIncome
        ),
        field(
          "Professional Status",
          data.professionalStatus
        ),
        field(
          "Serving Member Details",
          data.servingMemberDetails
        ),
        field(
          "Shop Details",
          data.shopDetails
        ),
        field(
          "Shop Income",
          data.shopIncome
        ),
        field(
          "Total Family Members",
          data.totalFamilyMembers
        ),
      ].join("");

      // -----------------------------------------------
      // SIBLINGS
      // -----------------------------------------------

      let siblingsInfo = "";

      for (let i = 1; i <= 5; i++) {
        if (!data[`sibling${i}Name`]) {
          continue;
        }

        siblingsInfo += [
          field(
            `Sibling ${i} Name`,
            data[`sibling${i}Name`]
          ),
          field(
            `Sibling ${i} Gender`,
            data[`sibling${i}Gender`]
          ),
          field(
            `Sibling ${i} Class`,
            data[`sibling${i}Class`]
          ),
          field(
            `Sibling ${i} Course`,
            data[`sibling${i}Course`]
          ),
          field(
            `Sibling ${i} Semester`,
            data[`sibling${i}Semester`]
          ),
          field(
            `Sibling ${i} Institute`,
            data[`sibling${i}Institute`]
          ),
          field(
            `Sibling ${i} Institution Type`,
            data[`sibling${i}InstitutionType`]
          ),
          field(
            `Sibling ${i} Monthly Fee`,
            data[`sibling${i}MonthlyFee`]
          ),
        ].join("");
      }

      siblingsInfo += field(
        "Total Sibling Fees",
        data.totalSiblingFees
      );

      // -----------------------------------------------
      // SUPPORT
      // -----------------------------------------------

      const supportInfo = [
        field(
          "Supporting Person",
          data.supportingPerson
        ),
        field(
          "Beneficiary Organization",
          data.beneficiaryOrganization
        ),
        field(
          "Existing Scholarship",
          data.existingScholarship
        ),
      ].join("");

      // -----------------------------------------------
      // REFERENCES
      // -----------------------------------------------

      const referencesInfo = [
        field(
          "Reference 1 Name",
          data.reference1Name
        ),
        field(
          "Reference 1 Profession",
          data.reference1Profession
        ),
        field(
          "Reference 1 CNIC",
          data.reference1Cnic
        ),
        field(
          "Reference 1 Cell",
          data.reference1Cell
        ),

        field(
          "Reference 2 Name",
          data.reference2Name
        ),
        field(
          "Reference 2 Profession",
          data.reference2Profession
        ),
        field(
          "Reference 2 CNIC",
          data.reference2Cnic
        ),
        field(
          "Reference 2 Cell",
          data.reference2Cell
        ),
      ].join("");

      // -----------------------------------------------
      // CERTIFICATION
      // -----------------------------------------------

      const certificationInfo = [
        field(
          "Student Signature",
          data.studentSignature
        ),
        field(
          "Guardian Signature",
          data.guardianSignature
        ),
        field(
          "Certification Date",
          data.certificationDate
        ),
        field(
          "Head Institution",
          data.headInstitutionName
        ),
        field(
          "Designation",
          data.headInstitutionDesignation
        ),
        field(
          "Institution Signature",
          data.headInstitutionSignature
        ),
        field(
          "Institution Date",
          data.headInstitutionDate
        ),
        field(
          "Institution Stamp",
          data.headInstitutionStamp
        ),
      ].join("");

      // -----------------------------------------------
      // DOCUMENTS
      // -----------------------------------------------

      const documentRows = [];

      Object.entries(files).forEach(
        ([fieldName, fileList]) => {
          if (!Array.isArray(fileList)) return;

          fileList.forEach((file) => {
            documentRows.push(
              field(
                fieldName,
                `${file.originalname} (${Math.round(
                  file.size / 1024
                )} KB)`
              )
            );
          });
        }
      );

      if (documentRows.length === 0) {
        documentRows.push(
          field(
            "Documents",
            "No documents uploaded"
          )
        );
      }

      // -----------------------------------------------
      // APPLICATION NUMBER
      // -----------------------------------------------

      const applicationNumber =
        `AFSS-${new Date().getFullYear()}-` +
        `${Date.now().toString().slice(-8)}`;

      const submittedAt =
        new Date().toLocaleString("en-PK", {
          timeZone: "Asia/Karachi",
          dateStyle: "full",
          timeStyle: "medium",
        });

      // =================================================
      // EMAIL
      // =================================================

      const emailHtml = `
<!DOCTYPE html>

<html>

<head>
<meta charset="UTF-8">
<title>Alfalah Scholarship Application</title>
</head>

<body style="
margin:0;
padding:35px 12px;
background:#eef2f6;
font-family:Arial,Helvetica,sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0">

<tr>
<td align="center">

<table
width="760"
cellpadding="0"
cellspacing="0"
style="
max-width:760px;
width:100%;
background:#ffffff;
border-radius:14px;
overflow:hidden;
box-shadow:0 12px 40px rgba(16,24,40,.12);
"
>

<tr>

<td style="
background:#07131c;
padding:30px 32px;
">

<div style="
color:#5da2ff;
font-size:12px;
font-weight:700;
letter-spacing:2px;
">

ALFALAH SCHOLARSHIP SCHEME PAKISTAN

</div>

<div style="
color:#ffffff;
font-size:25px;
font-weight:700;
margin-top:10px;
">

Academic Scholarship Application

</div>

<div style="
color:#b8c4d1;
font-size:14px;
margin-top:8px;
">

Session 2026–27

</div>

</td>

</tr>

<tr>

<td style="padding:30px 32px;">

<div style="
padding:18px;
background:#f5f9ff;
border:1px solid #dbe8f8;
border-radius:10px;
">

<div style="
font-size:11px;
color:#667085;
letter-spacing:1px;
">

APPLICATION NUMBER

</div>

<div style="
font-size:20px;
font-weight:700;
color:#1677ff;
margin-top:6px;
">

${escapeHtml(applicationNumber)}

</div>

<div style="
font-size:12px;
color:#667085;
margin-top:10px;
">

Submitted: ${escapeHtml(submittedAt)}

</div>

</div>

${section(
  "01 — Applicant Personal Information",
  personalInfo
)}

${section(
  "02 — Education Information",
  educationInfo
)}

${section(
  "03 — Previous Education Record",
  academicInfo
)}

${section(
  "04 — Family & Financial Information",
  familyInfo
)}

${section(
  "05 — Siblings Information",
  siblingsInfo
)}

${section(
  "06 — Other Financial Support",
  supportInfo
)}

${section(
  "07 — References",
  referencesInfo
)}

${section(
  "08 — Student & Institution Certification",
  certificationInfo
)}

${section(
  "09 — Required Documents",
  documentRows.join("")
)}

<div style="
margin-top:30px;
padding:18px;
background:#f5f9ff;
border-left:4px solid #1677ff;
font-size:13px;
line-height:1.7;
color:#344054;
">

<strong>Important:</strong>

This application has been submitted through the
Alfalah Academic Scholarship Program online portal.
All information and documents are subject to verification,
merit assessment and interview.

</div>

<div style="
margin-top:30px;
padding-top:20px;
border-top:1px solid #eaecf0;
font-size:12px;
line-height:1.7;
color:#667085;
">

<strong>
Alfalah Scholarship Scheme Pakistan
</strong>

<br>

Education Without Prejudice

<br>

info@alfalahss.org

<br>

0345-1414457

</div>

</td>

</tr>

</table>

</td>
</tr>

</table>

</body>

</html>
`;

      // =================================================
      // ATTACHMENTS
      // =================================================

      const attachments = [];

      Object.values(files).forEach(
        (fileList) => {
          if (!Array.isArray(fileList)) return;

          fileList.forEach((file) => {
            attachments.push({
              filename: file.originalname,
              content: file.buffer,
              contentType: file.mimetype,
            });
          });
        }
      );

      // =================================================
      // SEND TO ALFALAH
      // =================================================

      await transporter.sendMail({
        from:
          process.env.SMTP_FROM ||
          process.env.SMTP_USER,

        to: "info@alfalahss.org",

        replyTo: data.email,

        subject:
          `New Scholarship Application — ` +
          `${applicationNumber} — ` +
          `${data.applicantName}`,

        html: emailHtml,

        attachments,
      });

      console.log(
        `✅ Application email sent: ${applicationNumber}`
      );

      // =================================================
      // CONFIRMATION TO APPLICANT
      // =================================================

      try {
        await transporter.sendMail({
          from:
            process.env.SMTP_FROM ||
            process.env.SMTP_USER,

          to: data.email,

          subject:
            `Alfalah Scholarship Application Received — ` +
            `${applicationNumber}`,

          html: `
            <div style="
              font-family:Arial,sans-serif;
              max-width:620px;
              margin:40px auto;
              padding:35px;
              background:#ffffff;
              border-radius:14px;
              box-shadow:0 10px 30px rgba(0,0,0,.08);
            ">

              <div style="
                color:#1677ff;
                font-size:12px;
                font-weight:700;
                letter-spacing:2px;
              ">
                ALFALAH SCHOLARSHIP SCHEME
              </div>

              <h1 style="
                color:#07131c;
                font-size:25px;
              ">
                Application Received
              </h1>

              <p style="
                color:#475467;
                line-height:1.7;
              ">
                Dear ${escapeHtml(data.applicantName)},
              </p>

              <p style="
                color:#475467;
                line-height:1.7;
              ">
                Your online scholarship application has been
                successfully received.
              </p>

              <div style="
                padding:18px;
                background:#f5f9ff;
                border:1px solid #dbe8f8;
                border-radius:10px;
              ">

                <div style="
                  font-size:11px;
                  color:#667085;
                ">
                  APPLICATION NUMBER
                </div>

                <div style="
                  font-size:21px;
                  font-weight:700;
                  color:#1677ff;
                  margin-top:5px;
                ">
                  ${escapeHtml(applicationNumber)}
                </div>

              </div>

              <p style="
                color:#475467;
                line-height:1.7;
                margin-top:25px;
              ">
                Please keep this application number for
                future reference.
              </p>

              <hr style="
                border:none;
                border-top:1px solid #eaecf0;
                margin:25px 0;
              ">

              <p style="
                color:#667085;
                font-size:12px;
                line-height:1.7;
              ">
                Alfalah Scholarship Scheme Pakistan<br>
                Education Without Prejudice<br>
                info@alfalahss.org<br>
                0345-1414457
              </p>

            </div>
          `,
        });

        console.log(
          "✅ Applicant confirmation email sent"
        );
      } catch (confirmationError) {
        console.log(
          "⚠️ Applicant confirmation email failed:"
        );

        console.log(
          confirmationError.message
        );
      }

      // =================================================
      // SUCCESS
      // =================================================

      return res.status(200).json({
        success: true,

        message:
          "Application submitted successfully.",

        applicationNumber,
      });
    } catch (error) {
      console.error("");
      console.error("❌ APPLICATION ERROR");
      console.error(error);
      console.error("");

      return res.status(500).json({
        success: false,

        message:
          "Unable to submit the application right now.",
      });
    }
  }
);

// =====================================================
// ERROR HANDLER
// =====================================================

app.use((error, req, res, next) => {
  console.error("❌ SERVER ERROR:");
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {
  console.log("");
  console.log("========================================");
  console.log("  ALFALAH SCHOLARSHIP SERVER");
  console.log("========================================");
  console.log(`  Server : http://localhost:${PORT}`);
  console.log(`  API    : http://localhost:${PORT}/api/health`);
  console.log("  Email  : info@alfalahss.org");
  console.log("========================================");
  console.log("");
});