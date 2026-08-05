function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500">

      <div className="text-5xl">{icon}</div>

      <h2 className="mt-6 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

      <button className="mt-6 text-blue-400 group-hover:text-blue-300">
        Learn More →
      </button>

    </div>
  );
}

export default FeatureCard;