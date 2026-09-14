import DynamicListSection from "../ui/DynamicListSection";

function EducationForm({ resumeData, setResumeData }) {
  return (
    <DynamicListSection
      title="Education"
      sectionKey="education"
      fields={[
        {
          name: "college",
          label: "College Name",
        },
        {
          name: "degree",
          label: "Degree",
        },
        {
          name: "branch",
          label: "Branch",
        },
        {
          name: "cgpa",
          label: "CGPA",
        },
        {
          name: "startYear",
          label: "Start Year",
        },
        {
          name: "endYear",
          label: "End Year",
        },
      ]}
      resumeData={resumeData}
      setResumeData={setResumeData}
    />
  );
}

export default EducationForm;