import DynamicListSection from "../ui/DynamicListSection";

function ProjectsForm({ resumeData, setResumeData }) {
  return (
    <DynamicListSection
      title="Projects"
      sectionKey="projects"
      fields={[
        {
          name: "title",
          label: "Project Title",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
        {
          name: "technologies",
          label: "Technologies Used",
        },
        {
          name: "github",
          label: "GitHub Repository",
        },
        {
          name: "live",
          label: "Live Demo Link",
        },
      ]}
      resumeData={resumeData}
      setResumeData={setResumeData}
    />
  );
}

export default ProjectsForm;