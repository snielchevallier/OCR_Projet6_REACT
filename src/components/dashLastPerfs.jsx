function DashLastPerfs() {
    return (
        <div className="bg-purple-light max-w-263 mx-auto py-8 mt-10">
            <h2 className="text-2xl text-black pb-4">Vos dernières performances</h2>
            <div className="flex items-center space-between gap-4 ">
                <div className="bg-white w-1/2 rounded-2xl py-4 px-8">
                    graphique bleu
                </div>
                <div className="bg-white w-1/2 rounded-2xl py-4 px-8 ml-4">
                    graphique rouge
                </div>
            </div>
        </div>
    )
}

export default DashLastPerfs