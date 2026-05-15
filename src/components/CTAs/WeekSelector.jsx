import { useState, useEffect } from "react";
import { formatDate, formatShort } from '../../utils/date';

function WeekSelector({ weekStart, weekEnd, onChange }) {


    const addDays = (date, days) => {
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    };



    const isSameMonth = weekStart.getMonth() === weekEnd.getMonth();

    

    const label = `${formatShort(weekStart)} – ${formatShort(weekEnd)}`;

    /*const goToPrev = () => setWeekStart((prev) => addDays(prev, -7));
    const goToNext = () => setWeekStart((prev) => addDays(prev, 7));
*/
    const goToPrev = () => {
        const newStart = addDays(weekStart, -7);
        const newEnd = addDays(newStart, 6);
        onChange?.(newStart, newEnd);
    };

    const goToNext = () => {
        const newStart = addDays(weekStart, 7);
        const newEnd = addDays(newStart, 6);
        onChange?.(newStart, newEnd);
    };



    return (
        <div className="flex items-center gap-4 font-normal">
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

export default WeekSelector;