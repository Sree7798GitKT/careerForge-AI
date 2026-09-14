function AdditionalSkillsForm({ resumeData, setResumeData }) {
  const additionalSkills = resumeData.additionalSkills || [];

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      additionalSkills: [
        ...additionalSkills,
        {
          skill: "",
        },
      ],
    });
  };

  const updateSkill = (index, value) => {
    const updatedSkills = [...additionalSkills];

    updatedSkills[index] = {
      ...updatedSkills[index],
      skill: value,
    };

    setResumeData({
      ...resumeData,
      additionalSkills: updatedSkills,
    });
  };

  const removeSkill = (index) => {
    const updatedSkills = additionalSkills.filter(
      (_, skillIndex) => skillIndex !== index
    );

    setResumeData({
      ...resumeData,
      additionalSkills: updatedSkills,
    });
  };

  return (
    <div className="space-y-4">
      {additionalSkills.map((skill, index) => (
        <div
          key={index}
          className="rounded-lg border border-slate-700 bg-slate-800 p-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-white">
              Additional Skill {index + 1}
            </h3>

            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>

          <input
            type="text"
            placeholder="Example: Communication"
            value={skill.skill || ""}
            onChange={(e) =>
              updateSkill(index, e.target.value)
            }
            className="w-full rounded-lg border border-slate-600 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addSkill}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        + Add Additional Skill
      </button>
    </div>
  );
}

export default AdditionalSkillsForm;