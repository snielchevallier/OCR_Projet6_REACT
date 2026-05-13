import { useState } from "react";

function MonthSelector({ initialDate }) {
  const label = initialDate.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  return (
    <div className="flex items-center gap-4 font-normal">
      <span
        onClick={() => {}}
        className="w-6 h-6 flex items-center justify-center border border-black rounded-full cursor-pointer hover:bg-blue hover:text-white transition-colors"
      >
        &lt;
      </span>

      <span className="text-sm text-center">{label}</span>

      <span
        onClick={() => {}}
        className="w-6 h-6 flex items-center justify-center border border-black rounded-full cursor-pointer hover:bg-blue hover:text-white transition-colors"
      >
        &gt;
      </span>
    </div>
  );
}

export default MonthSelector;