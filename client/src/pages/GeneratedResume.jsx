import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import GeneratedResumePreview from "../components/resume/GeneratedResumePreview";

function GeneratedResume() {

  const navigate = useNavigate();

  const { state } = useLocation();

  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Resume",
  });

  if (!state) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-900">

        <div className="rounded-xl bg-white p-10 text-center shadow-xl">

          <h1 className="mb-3 text-2xl font-bold">
            No Resume Found
          </h1>

          <button
            onClick={() => navigate("/resume-builder")}
            className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            Back to Resume Builder
          </button>

        </div>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-300 py-10">

      <div className="no-print mx-auto mb-6 flex w-[794px] justify-between">

        <button
          onClick={() => navigate("/resume-builder")}
          className="rounded-lg bg-slate-800 px-6 py-3 text-white hover:bg-slate-900"
        >
          ← Back
        </button>

        <button
          onClick={handlePrint}
          className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          🖨 Print / Save PDF
        </button>

      </div>

      <div ref={resumeRef}>

        <GeneratedResumePreview
          resumeData={state}
        />

      </div>

    </div>

  );

}

export default GeneratedResume;