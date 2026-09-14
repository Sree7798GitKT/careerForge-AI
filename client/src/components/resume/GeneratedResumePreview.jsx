function GeneratedResumePreview({ resumeData }) {
  if (!resumeData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-500">
          No Resume Data Found
        </h1>
      </div>
    );
  }

  const personalInfo = resumeData.personalInfo || {};
  const education = resumeData.education || [];
  const skills = resumeData.skills || {};
  const projects = resumeData.projects || [];
  const certifications = resumeData.certifications || [];
  const additionalSkills = resumeData.additionalSkills || [];

  const hasSkills =
    (skills.languages?.length || 0) > 0 ||
    (skills.web?.length || 0) > 0 ||
    (skills.database?.length || 0) > 0 ||
    (skills.core?.length || 0) > 0 ||
    (skills.tools?.length || 0) > 0;

  return (
    <div className="flex justify-center bg-slate-300 py-8 print:bg-white print:py-0">
      {/* A4 Resume */}
      <div
        className="
          w-[794px]
          bg-white
          px-[55px]
          py-[45px]
          text-[13px]
          leading-[1.45]
          text-gray-900
          shadow-2xl
          print:w-full
          print:shadow-none
          print:px-[45px]
          print:py-[35px]
        "
      >
        {/* =========================================================
            HEADER
        ========================================================= */}

        <header className="border-b-2 border-gray-900 pb-4 text-center">
          <h1 className="text-[27px] font-bold uppercase tracking-wide">
            {personalInfo.fullName || "YOUR NAME"}
          </h1>

          <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[12px] text-gray-700">
            {personalInfo.email && (
              <span>{personalInfo.email}</span>
            )}

            {personalInfo.phone && (
              <>
                <span>|</span>
                <span>{personalInfo.phone}</span>
              </>
            )}

            {personalInfo.linkedin && (
              <>
                <span>|</span>
                <span>{personalInfo.linkedin}</span>
              </>
            )}

            {personalInfo.github && (
              <>
                <span>|</span>
                <span>{personalInfo.github}</span>
              </>
            )}
          </div>
        </header>

        {/* =========================================================
            PROFESSIONAL SUMMARY
        ========================================================= */}

        {resumeData.summary && (
          <section className="mt-5">
            <SectionTitle title="Professional Summary" />

            <p className="mt-2 text-justify text-[13px] leading-[1.5]">
              {resumeData.summary}
            </p>
          </section>
        )}

        {/* =========================================================
            EDUCATION
        ========================================================= */}

        {education.length > 0 && (
          <section className="mt-5">
            <SectionTitle title="Education" />

            <div className="mt-2 space-y-3">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold">
                        {edu.degree || "Degree"}
                      </h3>

                      {edu.college && (
                        <p className="text-gray-700">
                          {edu.college}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 text-right">
                      {edu.year && (
                        <p className="font-medium">
                          {edu.year}
                        </p>
                      )}

                      {edu.cgpa && (
                        <p className="text-gray-700">
                          CGPA: {edu.cgpa}
                        </p>
                      )}
                    </div>
                  </div>

                  {edu.description && (
                    <p className="mt-1 text-gray-700">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================
            TECHNICAL SKILLS
        ========================================================= */}

        {hasSkills && (
          <section className="mt-5">
            <SectionTitle title="Technical Skills" />

            <div className="mt-2 space-y-1">
              {skills.languages?.length > 0 && (
                <SkillRow
                  title="Languages"
                  items={skills.languages}
                />
              )}

              {skills.web?.length > 0 && (
                <SkillRow
                  title="Web Technologies"
                  items={skills.web}
                />
              )}

              {skills.database?.length > 0 && (
                <SkillRow
                  title="Databases"
                  items={skills.database}
                />
              )}

              {skills.core?.length > 0 && (
                <SkillRow
                  title="Core Concepts"
                  items={skills.core}
                />
              )}

              {skills.tools?.length > 0 && (
                <SkillRow
                  title="Tools & Technologies"
                  items={skills.tools}
                />
              )}
            </div>
          </section>
        )}

        {/* =========================================================
            PROJECTS
        ========================================================= */}

        {projects.length > 0 && (
          <section className="mt-5">
            <SectionTitle title="Projects" />

            <div className="mt-2 space-y-4">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold">
                      {project.title || "Project Name"}
                    </h3>

                    {project.year && (
                      <span className="shrink-0 font-medium">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {project.technologies && (
                    <p className="mt-0.5 text-[12px] italic text-gray-700">
                      Technologies: {project.technologies}
                    </p>
                  )}

                  {project.description && (
                    <p className="mt-1 text-justify text-gray-800">
                      {project.description}
                    </p>
                  )}

                  {project.points &&
                    Array.isArray(project.points) &&
                    project.points.length > 0 && (
                      <ul className="mt-1 list-disc space-y-0.5 pl-5">
                        {project.points.map((point, pointIndex) => (
                          <li key={pointIndex}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                  {project.link && (
                    <p className="mt-1 text-[12px] text-gray-700">
                      Link: {project.link}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================
            CERTIFICATIONS
        ========================================================= */}

        {certifications.length > 0 && (
          <section className="mt-5">
            <SectionTitle title="Certifications" />

            <div className="mt-2 space-y-3">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold">
                      {cert.title || "Certification"}
                    </h3>

                    {cert.year && (
                      <span className="shrink-0 font-medium">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  {cert.issuer && (
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Issued By:
                      </span>{" "}
                      {cert.issuer}
                    </p>
                  )}

                  {cert.credential && (
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Credential:
                      </span>{" "}
                      {cert.credential}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================
    ADDITIONAL SKILLS
========================================================= */}

{additionalSkills.length > 0 && (
  <section className="mt-5">
    <SectionTitle title="Additional Skills" />

    <ul className="mt-2 list-disc space-y-1 pl-5">
      {additionalSkills.map((skill, index) => (
        <li key={index}>
          {typeof skill === "object"
            ? skill.skill || skill.name || ""
            : skill}
        </li>
      ))}
    </ul>
  </section>
)}

      </div>
    </div>
  );
}


/* =============================================================
   SECTION TITLE
============================================================= */

function SectionTitle({ title }) {
  return (
    <h2
      className="
        border-b
        border-gray-900
        pb-1
        text-[15px]
        font-bold
        uppercase
        tracking-wide
      "
    >
      {title}
    </h2>
  );
}


/* =============================================================
   SKILL ROW
============================================================= */

function SkillRow({ title, items }) {
  return (
    <div className="flex items-start">
      <span className="w-[155px] shrink-0 font-bold">
        {title}:
      </span>

      <span className="text-gray-800">
        {items.join(", ")}
      </span>
    </div>
  );
}


export default GeneratedResumePreview;