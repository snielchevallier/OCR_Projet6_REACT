import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import MonthSelector from "../CTAs/MonthSelector"


function ChartDist() {
    const dataDistance = [
                    { name: 'S1', Km: 20, startDate: '01.06', endDate: '07.06' },
                    { name: 'S2', Km: 25, startDate: '08.06', endDate: '14.06' },
                    { name: 'S3', Km: 15, startDate: '15.06', endDate: '21.06' },
                    { name: 'S4', Km: 30, startDate: '22.06', endDate: '28.06' },
                ];
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
                    {data.startDate} au {data.endDate}
                </p>
                <p className="text-sm font-semibold">{data.Km} Km</p>
            </div>
        );
    };

    return (
        <>
            <div className="flex justify-between gap-4">
                <h2 className="text-xl text-blue font-semibold">18km de moyenne</h2>
                <MonthSelector initialDate={new Date()} />
            </div>
            <div className="text-xs text-grey mt-2 pb-2">
                Total des kilomètres 4 dernières semaines
            </div>
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
                <Legend align="left" iconType="circle" labelStyle={{color: "#000000"}} wrapperStyle={{paddingTop: 10, fontSize: "12px"}} />
                
                <Bar dataKey="Km" fill="#7987FF" activeBar={{ fill: "#0B23F4" }} barSize={14} radius={[7, 7, 7, 7]} />
            </BarChart>
        </>
    );
}

export default ChartDist;
