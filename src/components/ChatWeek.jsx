

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function ChartWeek() {
    const data = [
        { name: '4 réalisées', value: 4 },
        { name: '2 restantes', value: 2 }
    ];

    const COLORS = ['#0B23F4', '#B6BDFC'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, index, name }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 20;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="#000"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize={12}
            >
                <tspan fill={COLORS[index]} fontSize={14}>●</tspan>
                <tspan> {name}</tspan>
            </text>
        );
    };

    return (
        <>
            <div className="flex justify-between gap-4">
                <h2 className="text-3xl text-blue font-semibold">x4 <span className="text-base text-light-blue">sur objectif de 6</span></h2>
            </div>
            <div className="text-sm text-grey mt-2 pb-2">
                Courses hebdomadaire réalisées
            </div>
            <ResponsiveContainer width="100%" height={190.64}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={renderCustomizedLabel}
                        labelLine={false}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}

export default ChartWeek;