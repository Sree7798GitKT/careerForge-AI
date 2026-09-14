function PersonalInfoForm({ resumeData, setResumeData }) {

  const handleChange = (e) => {

    setResumeData({

      ...resumeData,

      personalInfo: {

        ...resumeData.personalInfo,

        [e.target.name]: e.target.value,

      },

    });

  };

  return (

    <div className="space-y-4">

      <input
        name="fullName"
        placeholder="Full Name"
        value={resumeData.personalInfo.fullName}
        onChange={handleChange}
        className="w-full rounded-lg bg-slate-800 p-3"
      />

      <input
        name="email"
        placeholder="Email"
        value={resumeData.personalInfo.email}
        onChange={handleChange}
        className="w-full rounded-lg bg-slate-800 p-3"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={resumeData.personalInfo.phone}
        onChange={handleChange}
        className="w-full rounded-lg bg-slate-800 p-3"
      />

      <input
        name="linkedin"
        placeholder="LinkedIn URL"
        value={resumeData.personalInfo.linkedin}
        onChange={handleChange}
        className="w-full rounded-lg bg-slate-800 p-3"
      />

      <input
        name="github"
        placeholder="GitHub URL"
        value={resumeData.personalInfo.github}
        onChange={handleChange}
        className="w-full rounded-lg bg-slate-800 p-3"
      />

    </div>

  );

}

export default PersonalInfoForm;