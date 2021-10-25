import React, { useState } from 'react'
import { PieChart, Pie, Label,BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Charts=(props)=>{
    const houseData=[
        {
           "pyStatusWork":"In Build",
           "total":249
        },
        {
           "pyStatusWork":"New",
           "total":359
        },
        {
           "pyStatusWork":"Open",
           "total":39
        },
        {
           "pyStatusWork":"Resolved-Cancelled",
           "total":133
        }
     ]
     const vechicleData=[
        {
           "VehicleType":"Auto",
           "total":10
        },
        {
           "VehicleType":"Motorcycle",
           "total":16
        },
        {
           "VehicleType":"RV",
           "total":2
        },
        {
           "VehicleType":"Water craft",
           "total":3
        },
        {
           "VehicleType":null,
           "total":52
        }
     ]
    const COLORS = ['#4b823f', '#f3b445', '#5dac9f', '#165fa7', '#e9823c'];
    const [windowHeight, setWindowHeight] = useState((window.innerHeight/100)*20)
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };
    return(
        <React.Fragment>
            <div className="chart-container">
                <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={600} height={600}>
                            <Pie data={vechicleData} nameKey="VehicleType" labelLine={false} label={renderCustomizedLabel} outerRadius={windowHeight} fill="#8884d8" dataKey="total" >
                                {vechicleData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend layout="vertical" verticalAlign="middle" align="right" />
                            <Label value="any text" position="center" />
                        </PieChart>
                    </ResponsiveContainer>
                    <h6 className="chart-title">Vechicle Data</h6>
                </div>
                <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={500} height={300} data={houseData}>
                            <CartesianGrid strokeDasharray="2 2" />
                            <XAxis dataKey="pyStatusWork">
                                <Label value="Work Status" offset={100} position="bottom" />
                            </XAxis>
                            <YAxis />
                            <Tooltip />
                            {/* <Legend layout="vertical" verticalAlign="middle" align="right" /> */}
                            <Bar dataKey="total" fill="#165fa7" barSize={50}/>
                        </BarChart>
                    </ResponsiveContainer>
                    <h6 className="chart-title">Work Status</h6>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Charts