function TextInput({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
    />
  );
}

export default TextInput;