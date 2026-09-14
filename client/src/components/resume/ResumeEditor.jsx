import SectionAccordion from "./SectionAccordion";

import PersonalInfoForm from "./PersonalInfoForm";
import SummaryForm from "./SummaryForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import ProjectsForm from "./ProjectsForm";
import CertificationsForm from "./CertificationsForm";
import AdditionalSkillsForm from "./AdditionalSkillsForm";

function ResumeEditor({ resumeData, setResumeData }) {
  return (
    <div className="space-y-4">

      <SectionAccordion title="Personal Information">
        <PersonalInfoForm
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      </SectionAccordion>

      <SectionAccordion title="Professional Summary">
        <SummaryForm
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      </SectionAccordion>

      <SectionAccordion title="Education">
        <EducationForm
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      </SectionAccordion>

      <SectionAccordion title="Technical Skills">
        <SkillsForm
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      </SectionAccordion>

      <SectionAccordion title="Projects">
        <ProjectsForm
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      </SectionAccordion>

      <SectionAccordion title="Certifications">
    <CertificationsForm
    resumeData={resumeData}
    setResumeData={setResumeData}
    />
    </SectionAccordion>

      <SectionAccordion title="Additional Skills">
        <AdditionalSkillsForm
        resumeData={resumeData}
        setResumeData={setResumeData}
        />
</SectionAccordion>

    </div>
  );
}

export default ResumeEditor;