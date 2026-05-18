import { useState, useEffect } from "react";

function MonthSelector({ weekStart, weekEnd, onChange }) {


    const addDays = (date, days) => {
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    };

    const addWeeks = (date, weeks) => addDays(date, weeks * 7);




    const isSameMonth = weekStart.getMonth() === weekEnd.getMonth();

    const formatDate = (date) =>
        date.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });

    const formatShort = (date) =>
        date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });

    const label = `${formatShort(weekStart)} – ${formatShort(weekEnd)}`;

    const goToPrev = () => {
        const newStart = addWeeks(weekStart, -1);
        const newEnd = addWeeks(weekEnd, -1);
        onChange?.(newStart, newEnd);
    };

    const goToNext = () => {
        const newStart = addWeeks(weekStart, 7);
        const newEnd = addWeeks(weekEnd, 7);
        onChange?.(newStart, newEnd);
    };



    return (
        <div className="flex items-center gap-2 font-normal">
            <span
                onClick={goToPrev}
                className="w-6 h-6 flex items-center justify-center border border-black rounded-full cursor-pointer hover:bg-blue hover:text-white transition-colors"
            >
                &lt;
            </span>

            <span className="text-sm text-center">{label}</span>

            <span
                onClick={goToNext}
                className="w-6 h-6 flex items-center justify-center border border-black rounded-full cursor-pointer hover:bg-blue hover:text-white transition-colors"
            >
                &gt;
            </span>
        </div>
    );
}

export default MonthSelector;