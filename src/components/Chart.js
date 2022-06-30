import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';


const Chart = ({symbol, timeframe}) => {
    const apiKey = "PE8EABGC2PRVN8JA";

    const [ chartData, setChartData ] = useState(null);

    const [ url, setURL ] = useState("");

    const getURL = () => {
        switch(timeframe){
            case "H":
                setURL(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min&outputsize=full&apikey=${apiKey}`);
                break;
            case "D":
                setURL(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
                break;
            case "W":
                setURL(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${apiKey}`);
                break;
            case "M":
                setURL(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`);
                break;
            default:
        }
    }

    const fetchData = async () => {
        const result = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min&outputsize=full&apikey=${apiKey}`);
        const data = await result.json();
        // console.log(data);

        //console.log(data);
        let argument = "";
        switch(timeframe){
            case "H":
                argument = "Time Series (60min)";
                break;
            case "D":
                argument = "Time Series (Daily)";
                break;
            case "M":
                argument = "Monthly Time Series";
                break;
            case "W":
                argument = "Weekly Time Series";
                break;
            default:
        }

        //console.log(argument);
        const res = data["Time Series (60min)"];
        // console.log(res);
        let timesArr = [];
      
        for(let element in res){
            timesArr.push({
                time: (Math.floor(new Date(element).getTime() / 1000)),
                open : (Number)(res[element]["1. open"]),
                high: (Number)(res[element]["2. high"]),
                low: (Number)(res[element]["3. low"]),
                close: (Number)(res[element]["4. close"]),
            });
        }

        console.log(timesArr);

        let chart = createChart(document.querySelector(".canvas"), {
            width: 800,
            // height: 500,
            layout: {
                backgroundColor: '#fff',
                textColor: '#000',
            },
            grid: {
                vertLines: {
                    color: '#dadce0',
                },
                horzLines: {
                    color: '#dadce0',
                },
            },
            rightPriceScale: {
                borderColor: 'rgba(197, 203, 206, 0.8)',
            },
            timeScale: {
                borderColor: 'rgba(197, 203, 206, 0.8)',
                timeVisible: true,
                secondsVisible: false,
            }
        });
        
        let candleSeries = chart.addCandlestickSeries({
          upColor: 'green',
          downColor: 'red',
          borderDownColor: 'red',
          borderUpColor: 'green',
          wickDownColor: 'red',
          wickUpColor: 'green',
        });
        
        candleSeries.setData([...timesArr.reverse()]);

        new ResizeObserver(entries => {
            if (entries.length === 0 || entries[0].target !== document.querySelector(".canvas")) { return; }
            const newRect = entries[0].contentRect;
            chart.applyOptions({ height: newRect.height, width: newRect.width });
          }).observe(document.querySelector(".canvas"));
        try{
            document.querySelector(".canvas").removeChild(document.querySelector(".canvas").children[1]);
        }catch(error){}
    }

    useEffect(() => {
        try{
            getURL();
            fetchData();
        }catch(err){}
    }, [timeframe]);

    return (
       <div className='canvas' style={{marginLeft: "2em", height: "500px"}}>
       </div>
    )
}

export default Chart