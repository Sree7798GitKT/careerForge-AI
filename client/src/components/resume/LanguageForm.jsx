import DynamicListSection from "../ui/DynamicListSection";

function LanguagesForm({ resumeData, setResumeData }) {
  return (
    <DynamicListSection
      title="Languages"
      sectionKey="languages"
      fields={[
        {
          name: "language",
          label: "Language",
        },
        {
          name: "level",
          label: "Proficiency",
        },
      ]}
      resumeData={resumeData}
      setResumeData={setResumeData}
    />
  );
}

export default LanguagesForm;