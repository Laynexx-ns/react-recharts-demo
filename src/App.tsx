import "./App.css";
import { LineChart, Line} from "recharts";
import {useEffect, useState} from "react";

class Data{
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function fullData() {
    const temp : Data[] = [];
    for (let x: number = -10; x <= 10; x++) {
        temp.push({ x: x, y: x * x });

    }
    return temp;
}

export default function App() {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const generatedData = fullData();
        setData(generatedData);
    }, []);


    return (
        <div id={'dem-div'}>
            <header>
                <span>basic parabola demonstration</span>
            </header>


                <main>

                    <svg style={{width: 0, height: 0}}>
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>

                    <LineChart width={400} height={400} data={data}>
                        <Line
                            dot={false}
                            type="monotone"
                            dataKey="y"
                            stroke="#ffffff"
                            strokeWidth={4}
                            style={{filter: "url(#glow)"}}
                        />
                        {/* you can disable neon effect by disabling style*/}
                    </LineChart>

            </main>
        </div>
    );
}
