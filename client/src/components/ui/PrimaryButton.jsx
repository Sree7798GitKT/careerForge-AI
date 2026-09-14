function PrimaryButton({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;