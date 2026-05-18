import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { formatDateLocal, getMonday } from '../../utils/date';
import WeekSelector from "../CTAs/WeekSelector"

import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";


function ChartBPM() {

    //initialisation des dates de debut et de fin de semaine

    const initialWeekStart = getMonday(new Date());
    const initialWeekEnd = new Date(initialWeekStart);
    initialWeekEnd.setDate(initialWeekEnd.getDate() + 6);

    const [weekStart, setWeekStart] = useState(initialWeekStart);
    const [weekEnd, setWeekEnd] = useState(initialWeekEnd);
    const [range, setRange] = useState({ weekStart, weekEnd });
    const [dataBPM, setDataBPM] = useState([]);
    const [averageBPM, setAverageBPM] = useState(0);

    /*const dataBPM = [
        { name: 'Lun', Min: 140, Max: 180, Average: 160 },
        { name: 'Mar', Min: 130, Max: 170, Average: 150 },
        { name: 'Mer', Min: 120, Max: 160, Average: 140 },
        { name: 'Jeu', Min: 135, Max: 175, Average: 155 },
        { name: 'Ven', Min: 145, Max: 185, Average: 165 },
        { name: 'Sam', Min: 125, Max: 165, Average: 145 },
        { name: 'Dim', Min: 130, Max: 170, Average: 150 },
    ];*/
    const { sessions } = useSelector((state) => state.activity);


    const handleWeekChange = useCallback((weekStart, weekEnd) => {
        setWeekStart(weekStart);
        setWeekEnd(weekEnd);
        setRange({ weekStart, weekEnd });
    }, []);

    useEffect(() => {
        if (range) {
            const tmpData = buildDataBPM(sessions, range.weekStart, range.weekEnd);
            setDataBPM(tmpData);
            const DataBPMFiltered = tmpData.filter(item => item.Average !== 0);
            setAverageBPM(Math.round(DataBPMFiltered.reduce((acc, item) => acc + item.Average, 0) / DataBPMFiltered.length));
        }
    }, [range]);

    const joursFR = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

    function buildDataBPM(data, start, end) {
        const result = [];
        const endDate = new Date(end);
        // Indexation rapide des activités par date
        const map = new Map(
            data.map(item => [item.date, item])
        );

        // Boucle du début à la fin
        for (
            let d = new Date(start);
            d <= endDate;
            d.setDate(d.getDate() + 1)
        ) {
            const dateStr = formatDateLocal(d);
            const activity = map.get(dateStr);
            
            result.push({
                name: joursFR[(d.getDay() + 6) % 7],
                Min: activity?.heartRate?.min ?? 0,
                Max: activity?.heartRate?.max ?? 0,
                Average: activity?.heartRate?.average ?? 0,
            });
        }
        return result;
    }
    const [activeIndex, setActiveIndex] = useState(null);
    const renderLegend = (props) => {
        const { payload } = props;
        const orderedNames = ['Min BPM', 'Max BPM', 'Moy BPM'];
        const orderedPayload = orderedNames.map(name => payload.find(item => item.value === name)).filter(Boolean);
        return (
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '10px', fontSize: '12px', color: '#000000' }}>
                {orderedPayload.map((entry, index) => {
                    let iconStyle = {};
                    if (entry.type === 'circle') {
                        iconStyle = { width: 8, height: 8, borderRadius: '50%', backgroundColor: entry.color, display: 'inline-block', marginRight: 5 };
                    } else if (entry.type === 'line') {
                        iconStyle = { width: 10, height: 2, backgroundColor: entry.color, display: 'inline-block', marginRight: 5 };
                    }
                    return (
                        <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={iconStyle}></span>
                            <span>{entry.value}</span>
                        </li>
                    );
                })}
            </ul>
        );
    };
    return (
        <>
            <div className="flex justify-between gap-4">
                <h2 className="text-xl text-red font-semibold">{averageBPM ? averageBPM : 0} BPM</h2>
                <WeekSelector weekStart={weekStart} weekEnd={weekEnd} onChange={handleWeekChange} />
            </div>
            <div className="text-xs text-grey mt-2 pb-2">
                Fréquence cardiaque moyenne
            </div>
            <ResponsiveContainer width="100%" height={307}>
                <ComposedChart
                    width={510}
                    height={307}
                    align="left"
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    data={dataBPM}

                onMouseMove={(state) => {
                    if (state?.activeTooltipIndex !== undefined) {
                        setActiveIndex(state.activeTooltipIndex);
                    }
                }}
                onMouseLeave={() => setActiveIndex(null)}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" dy={10} />
                <YAxis tickLine={false} width={40} />

                <Legend content={renderLegend} align="left" wrapperStyle={{ paddingTop: 10 }} />
                <Bar dataKey="Min" name="Min BPM" fill="#FCC1B6" barSize={14} radius={[7, 7, 7, 7]} legendType="circle" />
                <Bar dataKey="Max" name="Max BPM" fill="#F4320B" barSize={14} radius={[7, 7, 7, 7]} legendType="circle" />



                <Line dataKey="Average" name="Moy BPM" type="monotone"
                    stroke={activeIndex !== null ? "#0B23F4" : "#F2F3FF"}
                    strokeWidth={activeIndex !== null ? 3 : 2}
                    legendType="line"
                />

            </ComposedChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartBPM;
