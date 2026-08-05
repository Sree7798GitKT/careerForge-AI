function Stats() {
  const stats = [
    {
      number: "5000+",
      label: "Students Preparing",
    },
    {
      number: "100+",
      label: "Companies",
    },
    {
      number: "25,000+",
      label: "Practice Questions",
    },
    {
      number: "95%",
      label: "ATS Resume Accuracy",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
          >
            <h2 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="mt-4 text-slate-400">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;