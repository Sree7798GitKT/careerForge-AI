function ProgressCard({ title, progress }) {
  return (
    <div className="rounded-xl bg-slate-800 p-6">

      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="mt-4 h-3 w-full rounded-full bg-slate-700">
        <div
          className="h-3 rounded-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-2 text-slate-400">{progress}% Completed</p>

    </div>
  );
}

export default ProgressCard;