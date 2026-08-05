function QuickActions() {
  return (
    <div className="rounded-xl bg-slate-800 p-6">

      <h2 className="mb-5 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-3">

        <button className="rounded-lg bg-blue-600 p-3">
          Build Resume
        </button>

        <button className="rounded-lg bg-green-600 p-3">
          Practice Aptitude
        </button>

        <button className="rounded-lg bg-purple-600 p-3">
          Solve Coding
        </button>

        <button className="rounded-lg bg-orange-600 p-3">
          Add Interview Experience
        </button>

      </div>

    </div>
  );
}

export default QuickActions;