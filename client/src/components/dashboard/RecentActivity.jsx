function RecentActivity() {
  return (
    <div className="rounded-xl bg-slate-800 p-6">

      <h2 className="mb-4 text-xl font-bold">
        Recent Activity
      </h2>

      <ul className="space-y-3 text-slate-300">

        <li>📄 Resume updated</li>
        <li>🧠 Solved 5 Aptitude Questions</li>
        <li>💻 Solved 2 Coding Problems</li>
        <li>🏢 Added TCS Interview Experience</li>

      </ul>

    </div>
  );
}

export default RecentActivity;