import DynamicListSection from "../ui/DynamicListSection";

function AchievementsForm({ resumeData, setResumeData }) {
  return (
    <DynamicListSection
      title="Achievements"
      sectionKey="achievements"
      fields={[
        {
          name: "title",
          label: "Achievement",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
      ]}
      resumeData={resumeData}
      setResumeData={setResumeData}
    />
  );
}

export default AchievementsForm;