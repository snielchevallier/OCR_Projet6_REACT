import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { useState, useEffect, useCallback, use } from "react";
import { useSelector } from "react-redux";

import { formatDateLocal, getMonday, formatDate, formatShort } from '../../utils/date';

import MonthSelector from "../CTAs/MonthSelector"


function ChartDist() {
    /*const dataDistance = [
        { name: 'S1', Km: 20, startDate: '01.06', endDate: '07.06' },
        { name: 'S2', Km: 25, startDate: '08.06', endDate: '14.06' },
        { name: 'S3', Km: 15, startDate: '15.06', endDate: '21.06' },
        { name: 'S4', Km: 30, startDate: '22.06', endDate: '28.06' },
    ];*/
    //initialisation des semaines de debut et de fin
    const initialWeekStart = getMonday(new Date());
    const initialWeekEnd = new Date(initialWeekStart);
    initialWeekEnd.setDate(initialWeekEnd.getDate() + 6);
    const [weekStart, setWeekStart] = useState(initialWeekStart);
    const [weekEnd, setWeekEnd] = useState(initialWeekEnd);

    const { sessions } = useSelector((state) => state.activity);
    const [dataDistance, setDataDistance] = useState([]);

    const handleWeekChange = useCallback((weekStart, weekEnd) => {
        setWeekStart(weekStart);
        setWeekEnd(weekEnd);
    }, []);

    useEffect(() => {
        setDataDistance(buildDataDistance(sessions, weekStart, weekEnd));
    }, [weekStart, weekEnd]);

    //Fonction de construction des données pour le graphique de distance
    function buildDataDistance(data, start, end) {
        const result = [];
        for (let i = 3; i >= 0; i--) {
            const weekStart = new Date(start);
            weekStart.setDate(weekStart.getDate() - i * 7);
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekEnd.getDate() + 6);
            weekEnd.setHours(23, 59, 59, 999);
            const sessionByWeek =sessions.filter(session => {
                const sessionDate = new Date(session.date);
                return sessionDate >= weekStart && sessionDate <= weekEnd;
            });
            const totalKm = sessionByWeek.reduce((sum, s) => sum + s.distance, 0);
            result.push({
                name: `S${4 - i}`,
                Km: Math.round(totalKm * 100) / 100,
                startDate: weekStart,
                endDate: weekEnd,
            });
        }
        return result;
    };
    //Affichage du tooltip personnalisé pour recharts
    const CustomTooltip = ({ active, payload }) => {
        if (!active || !payload || !payload.length) return null;

        const data = payload[0].payload;
        return (
            <div style={{
                background: "#000",
                borderRadius: "8px",
                padding: "10px",
                color: "#fff"
            }}>
                <p className="text-2xs">
                    {formatShort(data.startDate)} au {formatShort(data.endDate)}
                </p>
                <p className="text-sm font-semibold">{data.Km} Km</p>
            </div>
        );
    };

    return (
        <>
            <div className="flex justify-between gap-4">
                <h2 className="text-xl text-blue font-semibold">{Math.round(dataDistance.reduce((sum, item) => sum + item.Km, 0)/4 ) ? Math.round(dataDistance.reduce((sum, item) => sum + item.Km, 0)/4 ) : 0}km de moyenne</h2>
                <MonthSelector weekStart={dataDistance[0]?.startDate ?? weekStart} weekEnd={dataDistance[3]?.endDate ?? weekEnd} onChange={handleWeekChange} />
            </div>
            <div className="text-xs text-grey mt-2 pb-2">
                Total des kilomètres 4 dernières semaines
            </div>
            <ResponsiveContainer width="100%" height={307}>
                <BarChart
                    width={390}
                    height={307}
                    align="left"
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    data={dataDistance}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" dy={10} />
                <YAxis tickLine={false} width={30} />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={false}
                />
                <Legend align="left" iconType="circle" labelStyle={{ color: "#000000" }} wrapperStyle={{ paddingTop: 10, fontSize: "12px" }} />

                <Bar dataKey="Km" fill="#7987FF" activeBar={{ fill: "#0B23F4" }} barSize={14} radius={[7, 7, 7, 7]} />
            </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartDist;
