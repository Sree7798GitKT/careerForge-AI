function SummaryForm({ resumeData, setResumeData }) {

  const handleChange = (e) => {

    setResumeData({

      ...resumeData,

      summary: e.target.value,

    });

  };

  return (

    <div>

      <textarea

        rows="6"

        placeholder="Write your professional summary..."

        value={resumeData.summary}

        onChange={handleChange}

        className="w-full rounded-lg bg-slate-800 p-4"

      />

    </div>

  );

}

export default SummaryForm;