import ChartDist from "../Charts/Distance";
import ChartBPM from "../Charts/BPM";
function DashLastPerfs() {
    return (
        <div className="bg-purple-light max-w-263 mx-auto py-8 mt-10 px-8">
            <h2 className="text-2xl text-black pb-4">Vos dernières performances</h2>
            <div className="flex items-center space-between gap-4 ">
                <div className="bg-white w-[445px] rounded-2xl py-4 px-6">
                    <ChartDist />
                </div>
                <div className="bg-white w-[583px] rounded-2xl py-4 px-8 ml-4">
                    <ChartBPM />
                </div>
            </div>
        </div>
    )
}

export default DashLastPerfs