import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import SectionHeader from "./SectionHeader";

function DynamicListSection({
  title,
  sectionKey,
  fields,
  resumeData,
  setResumeData,
}) {
  const addItem = () => {
    const newItem = {};

    fields.forEach((field) => {
      newItem[field.name] = "";
    });

    setResumeData({
      ...resumeData,
      [sectionKey]: [...resumeData[sectionKey], newItem],
    });
  };

  const removeItem = (index) => {
    const updated = resumeData[sectionKey].filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      [sectionKey]: updated,
    });
  };

  const handleChange = (index, e) => {
    const updated = [...resumeData[sectionKey]];

    updated[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      [sectionKey]: updated,
    });
  };

  return (
    <div>

      <SectionHeader title={title} />

      <PrimaryButton onClick={addItem}>
        + Add {title}
      </PrimaryButton>

      {resumeData[sectionKey].map((item, index) => (

        <div
          key={index}
          className="mt-6 rounded-lg border border-slate-700 p-5"
        >

          <div className="mb-4 flex justify-between">

            <h3 className="font-semibold">

              {title} {index + 1}

            </h3>

            <button
              onClick={() => removeItem(index)}
              className="rounded bg-red-600 px-3 py-1 text-white"
            >
              Remove
            </button>

          </div>

          <div className="space-y-3">

            {fields.map((field) => (

              field.type === "textarea" ? (

                <TextArea
                  key={field.name}
                  name={field.name}
                  value={item[field.name]}
                  onChange={(e) => handleChange(index, e)}
                  placeholder={field.label}
                />

              ) : (

                <TextInput
                  key={field.name}
                  name={field.name}
                  value={item[field.name]}
                  onChange={(e) => handleChange(index, e)}
                  placeholder={field.label}
                />

              )

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default DynamicListSection;