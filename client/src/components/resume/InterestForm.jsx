import DynamicListSection from "../ui/DynamicListSection";

function InterestsForm({ resumeData, setResumeData }) {
  return (
    <DynamicListSection
      title="Interests"
      sectionKey="interests"
      fields={[
        {
          name: "interest",
          label: "Interest",
        },
      ]}
      resumeData={resumeData}
      setResumeData={setResumeData}
    />
  );
}

export default InterestsForm;