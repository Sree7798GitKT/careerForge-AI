import DynamicListSection from "../ui/DynamicListSection";

function CertificationsForm({ resumeData, setResumeData }) {
  return (
    <DynamicListSection
      title="Certifications"
      sectionKey="certifications"
      fields={[
        {
          name: "title",
          label: "Certification Name",
        },
        {
          name: "issuer",
          label: "Issued By",
        },
        {
          name: "year",
          label: "Year",
        },
        {
          name: "credential",
          label: "Credential URL",
        },
      ]}
      resumeData={resumeData}
      setResumeData={setResumeData}
    />
  );
}

export default CertificationsForm;