function DashboardCard({ title, value }) {
  return (
    <div className="rounded-xl bg-slate-800 p-6">

      <h3 className="text-slate-400">
        {title}
      </h3>

      <p className="mt-4 text-3xl font-bold text-blue-500">
        {value}
      </p>

    </div>
  );
}

export default DashboardCard;