import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ResumeEditor from "../components/resume/ResumeEditor";
import GeneratedResumePreview from "../components/resume/GeneratedResumePreview";

function ResumeBuilder() {
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    },

    summary: "",

    education: [],

    skills: {
      languages: [],
      web: [],
      database: [],
      core: [],
      tools: [],
    },

    projects: [],

    certifications: [],

    additionalSkills: [],
  });

  const [errors, setErrors] = useState([]);

  /* =========================================================
     VALIDATE RESUME
  ========================================================= */

  const validateResume = () => {
    const validationErrors = [];

    const personalInfo = resumeData.personalInfo || {};

    const education = resumeData.education || [];
    const projects = resumeData.projects || [];
    const certifications = resumeData.certifications || [];
    const additionalSkills = resumeData.additionalSkills || [];

    /* ---------------------------------------------------------
       PERSONAL INFORMATION
    --------------------------------------------------------- */

    if (!personalInfo.fullName?.trim()) {
      validationErrors.push("Full name is required.");
    }

    if (!personalInfo.email?.trim()) {
      validationErrors.push("Email address is required.");
    } else {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(personalInfo.email.trim())) {
        validationErrors.push(
          "Please enter a valid email address."
        );
      }
    }

    if (!personalInfo.phone?.trim()) {
      validationErrors.push("Phone number is required.");
    } else {
      const phoneRegex =
        /^[+]?[0-9\s()-]{10,15}$/;

      if (!phoneRegex.test(personalInfo.phone.trim())) {
        validationErrors.push(
          "Please enter a valid phone number."
        );
      }
    }

    /* ---------------------------------------------------------
       EDUCATION
    --------------------------------------------------------- */

    education.forEach((edu, index) => {
      const educationNumber = index + 1;

      if (!edu.degree?.trim()) {
        validationErrors.push(
          `Education ${educationNumber}: Degree is required.`
        );
      }

      if (!edu.college?.trim()) {
        validationErrors.push(
          `Education ${educationNumber}: College name is required.`
        );
      }

      if (edu.cgpa?.trim()) {
        const cgpa = Number(edu.cgpa);

        if (
          Number.isNaN(cgpa) ||
          cgpa < 0 ||
          cgpa > 10
        ) {
          validationErrors.push(
            `Education ${educationNumber}: CGPA must be between 0 and 10.`
          );
        }
      }

      if (edu.year?.trim()) {
        const year = Number(edu.year);

        if (
          Number.isNaN(year) ||
          year < 1900 ||
          year > 2100
        ) {
          validationErrors.push(
            `Education ${educationNumber}: Please enter a valid year.`
          );
        }
      }
    });

    /* ---------------------------------------------------------
       PROJECTS
    --------------------------------------------------------- */

    projects.forEach((project, index) => {
      const projectNumber = index + 1;

      if (!project.title?.trim()) {
        validationErrors.push(
          `Project ${projectNumber}: Project title is required.`
        );
      }

      if (!project.description?.trim()) {
        validationErrors.push(
          `Project ${projectNumber}: Project description is required.`
        );
      }

      if (project.year?.trim()) {
        const year = Number(project.year);

        if (
          Number.isNaN(year) ||
          year < 1900 ||
          year > 2100
        ) {
          validationErrors.push(
            `Project ${projectNumber}: Please enter a valid year.`
          );
        }
      }
    });

    /* ---------------------------------------------------------
       CERTIFICATIONS
    --------------------------------------------------------- */

    certifications.forEach((cert, index) => {
      const certificationNumber = index + 1;

      if (!cert.title?.trim()) {
        validationErrors.push(
          `Certification ${certificationNumber}: Certification name is required.`
        );
      }

      if (!cert.issuer?.trim()) {
        validationErrors.push(
          `Certification ${certificationNumber}: Issuer is required.`
        );
      }

      if (cert.year?.trim()) {
        const year = Number(cert.year);

        if (
          Number.isNaN(year) ||
          year < 1900 ||
          year > 2100
        ) {
          validationErrors.push(
            `Certification ${certificationNumber}: Please enter a valid year.`
          );
        }
      }
    });

    /* ---------------------------------------------------------
       ADDITIONAL SKILLS
    --------------------------------------------------------- */

    additionalSkills.forEach((skill, index) => {
      const skillNumber = index + 1;

      const skillValue =
        typeof skill === "object"
          ? skill.skill
          : skill;

      if (!skillValue?.trim()) {
        validationErrors.push(
          `Additional Skill ${skillNumber}: Skill name is required.`
        );
      }
    });

    return validationErrors;
  };

  /* =========================================================
     GENERATE RESUME
  ========================================================= */

  const handleGenerateResume = () => {
    const validationErrors = validateResume();

    setErrors(validationErrors);

    if (validationErrors.length > 0) {
      return;
    }

    navigate("/generated-resume", {
      state: resumeData,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <h1 className="p-8 text-4xl font-bold">
        Resume Builder
      </h1>

      <div className="grid grid-cols-2 gap-8 px-8">

        {/* ===================================================
            LEFT PANEL
        =================================================== */}

        <div className="flex h-[calc(100vh-120px)] flex-col">

          <div className="flex-1 overflow-y-auto pr-2">

            <ResumeEditor
              resumeData={resumeData}
              setResumeData={(data) => {
                setResumeData(data);

                // Clear previous errors when user edits
                if (errors.length > 0) {
                  setErrors([]);
                }
              }}
            />

          </div>

          {/* =================================================
              VALIDATION ERRORS
          ================================================= */}

          {errors.length > 0 && (
            <div className="mt-4 max-h-48 overflow-y-auto rounded-lg border border-red-700 bg-red-950 p-4">

              <h2 className="mb-2 font-semibold text-red-400">
                ⚠ Please fix the following:
              </h2>

              <ul className="list-disc space-y-1 pl-5 text-sm text-red-300">
                {errors.map((error, index) => (
                  <li key={index}>
                    {error}
                  </li>
                ))}
              </ul>

            </div>
          )}

          {/* =================================================
              GENERATE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={handleGenerateResume}
            className="mt-4 rounded-lg bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700"
          >
            Generate Resume
          </button>

        </div>

        {/* ===================================================
            RIGHT PANEL
        =================================================== */}

        <div className="h-[calc(100vh-120px)] overflow-y-auto rounded-xl bg-slate-900 p-4">

          <GeneratedResumePreview
            resumeData={resumeData}
          />

        </div>

      </div>

    </div>
  );
}

export default ResumeBuilder;