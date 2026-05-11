import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

import WeekSelector from "../CTAs/WeekSelector"

import { useState } from "react";



function ChartBPM() {
    const dataBPM = [
                    { name: 'Lun', Min: 140, Max: 180, Average: 160 },
                    { name: 'Mar', Min: 130, Max: 170, Average: 150 },
                    { name: 'Mer', Min: 120, Max: 160, Average: 140 },
                    { name: 'Jeu', Min: 135, Max: 175, Average: 155 },
                    { name: 'Ven', Min: 145, Max: 185, Average: 165 },
                    { name: 'Sam', Min: 125, Max: 165, Average: 145 },
                    { name: 'Dim', Min: 130, Max: 170, Average: 150 },
                ];
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
                <h2 className="text-xl text-red font-semibold">163 BPM</h2>
                <WeekSelector />
            </div>
            <div className="text-xs text-grey mt-2 pb-2">
                Fréquence cardiaque moyenne
            </div>
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
                
                <Legend content={renderLegend} align="left" wrapperStyle={{paddingTop: 10}} />
                <Bar dataKey="Min" name="Min BPM" fill="#FCC1B6" barSize={14} radius={[7, 7, 7, 7]} legendType="circle"/>
                <Bar dataKey="Max" name="Max BPM" fill="#F4320B" barSize={14} radius={[7, 7, 7, 7]} legendType="circle"/>
                
                
                
                <Line dataKey="Average" name="Moy BPM" type="monotone" 
                stroke={activeIndex !== null ? "#0B23F4" : "#F2F3FF"}
                strokeWidth={activeIndex !== null ? 3 : 2}
                legendType="line"
                />
                
            </ComposedChart>
        </>
    );
}

export default ChartBPM;
