import { useState } from "react";

function SectionAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-xl bg-slate-900 border border-slate-800">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="text-lg font-semibold">
          {title}
        </span>

        <span className="text-2xl">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-slate-800 p-5">
          {children}
        </div>
      )}

    </div>
  );
}

export default SectionAccordion;