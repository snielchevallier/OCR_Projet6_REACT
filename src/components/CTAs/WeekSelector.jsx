function WeekSelector() {
    return (
            <div className="flex items-center gap-4 font-normal">
                <span className="w-6 h-6 flex items-center justify-center border border-black rounded-full cursor-pointer hover:bg-blue hover:text-white transition-colors">
                    &lt;
                </span>

                <span className="text-sm">28 mai - 3 juin</span>

                <span className="w-6 h-6 flex items-center justify-center border border-black rounded-full cursor-pointer hover:bg-blue hover:text-white transition-colors">
                    &gt;
                </span>
            </div>
    )
}

export default WeekSelector