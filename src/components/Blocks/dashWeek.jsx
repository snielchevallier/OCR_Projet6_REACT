import ChartWeek from "../Charts/Week";
function DashWeek() {
    return (
        <div className="bg-purple-light max-w-263 mx-auto py-8 my-10">
            <h2 className="text-2xl text-black pb-4">Cette semaine</h2>
            <p className="text-black pb-4">Du 23/06/2025 au 30/06/2025</p>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 bg-white rounded-2xl w-[445px] py-4 px-8">
                    <ChartWeek />
                </div>
                <div className=" bg-white rounded-2xl  w-[583px] py-4 px-8">
                    <p className="text-grey pb-2">Durée d'activité</p>
                    <p className="text-blue text-2xl">140 <span className="text-light-blue text-base">minutes</span></p>
                </div>
                <div className=" bg-white rounded-2xl w-[583px] py-4 px-8">
                    <p className="text-grey pb-2">Distance</p>
                    <p className="text-red text-2xl">21.7 <span className="text-light-red text-base">kilomètres</span></p>
                </div>
            </div>
        </div>
    )
}

export default DashWeek