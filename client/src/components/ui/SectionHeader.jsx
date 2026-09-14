function SectionHeader({ title }) {
  return (
    <div className="mb-4 border-b border-slate-700 pb-2">
      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;