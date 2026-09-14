function TextArea({
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
    />
  );
}

export default TextArea;