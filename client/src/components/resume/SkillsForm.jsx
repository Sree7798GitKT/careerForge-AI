import { useState } from "react";

function SkillsForm({ resumeData, setResumeData }) {

  const [inputs, setInputs] = useState({
    languages: "",
    web: "",
    database: "",
    core: "",
    tools: "",
  });

  const addSkill = (category) => {

    if (!inputs[category].trim()) return;

    setResumeData({
      ...resumeData,
      skills: {
        ...resumeData.skills,
        [category]: [
          ...(resumeData.skills?.[category] || []),
          inputs[category].trim(),
        ],
      },
    });

    setInputs({
      ...inputs,
      [category]: "",
    });

  };

  const removeSkill = (category, index) => {

    const updated = resumeData.skills[category].filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      skills: {
        ...resumeData.skills,
        [category]: updated,
      },
    });

  };

  const renderCategory = (title, key) => (

    <div className="mb-8">

      <h3 className="mb-3 text-lg font-semibold">
        {title}
      </h3>

      <div className="flex gap-3">

        <input
          value={inputs[key]}
          onChange={(e) =>
            setInputs({
              ...inputs,
              [key]: e.target.value,
            })
          }
          placeholder={`Add ${title}`}
          className="flex-1 rounded-lg bg-slate-800 p-3"
        />

        <button
          onClick={() => addSkill(key)}
          className="rounded-lg bg-blue-600 px-5 hover:bg-blue-700"
        >
          Add
        </button>

      </div>

      <div className="mt-4 flex flex-wrap gap-2">

        {(resumeData.skills?.[key] || []).map((skill, index) => (

          <div
            key={index}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2"
          >
            {skill}

            <button
              onClick={() => removeSkill(key, index)}
              className="font-bold"
            >
              ×
            </button>

          </div>

        ))}

      </div>

    </div>

  );

  return (

    <div>

      {renderCategory("Programming Languages", "languages")}

      {renderCategory("Web Technologies", "web")}

      {renderCategory("Databases", "database")}

      {renderCategory("Core Subjects", "core")}

      {renderCategory("Tools", "tools")}

    </div>

  );

}

export default SkillsForm;