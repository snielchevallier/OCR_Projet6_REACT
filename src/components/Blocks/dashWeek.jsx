import ChartWeek from "../Charts/Week";

import { useSelector } from "react-redux";
import { formatDateFrench, getMonday } from "../../utils/date";



function DashWeek() {
    const initialDateStart = getMonday(new Date());
const initialDateEnd = new Date(initialDateStart);
initialDateEnd.setDate(initialDateEnd.getDate() + 6);

//calcul les valeurs à afficher
const { sessions } = useSelector((state) => state.activity);
const sessionsThisWeek = sessions.filter(session => {
    const sessionDate = new Date(session.date);
    return sessionDate >= initialDateStart && sessionDate <= initialDateEnd;
});
//Objectifs
const done = sessionsThisWeek.length;
const todo = 7-done;
//Durée
const totalDuration = sessionsThisWeek.reduce((sum, session) => sum + session.duration, 0);
//Distance
const totalDistance = sessionsThisWeek.reduce((sum, session) => sum + session.distance, 0);
    return (
        <div className="bg-purple-light max-w-263 mx-auto py-8 my-10">
            <h2 className="text-2xl text-black pb-4">Cette semaine</h2>
            <p className="text-black pb-4">Du {formatDateFrench(initialDateStart)} au {formatDateFrench(initialDateEnd)}</p>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 bg-white rounded-2xl w-[445px] py-4 px-8">
                    <ChartWeek done={done} todo={todo} />
                </div>
                <div className=" bg-white rounded-2xl  w-[583px] py-4 px-8">
                    <p className="text-grey pb-2">Durée d'activité</p>
                    <p className="text-blue text-2xl">{totalDuration} <span className="text-light-blue text-base">minutes</span></p>
                </div>
                <div className=" bg-white rounded-2xl w-[583px] py-4 px-8">
                    <p className="text-grey pb-2">Distance</p>
                    <p className="text-red text-2xl">{totalDistance} <span className="text-light-red text-base">kilomètres</span></p>
                </div>
            </div>
        </div>
    )
}

export default DashWeek