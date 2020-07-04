import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../Api/api'
import {Line, Bar} from 'react-chartjs-2'
import Styles from './Chart.module.css'
export default function Chart() {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const getDailyData = async () => {
            setDailyData(await fetchDailyData())
        }
        getDailyData();
        // console.log(dailyData)
    }, [dailyData])

    const lineChart = (
        dailyData.length ?
            (<Line 
                data = {{
                    labels : dailyData.map(({date}) => date),
                    datasets : [{
                        data : dailyData.map(({confirmed})=>confirmed),
                        label : "Infected",
                        borderColor : '#3333ff',
                        fill : true
                    },{
                        data : dailyData.map(({deaths}) => deaths),
                        label : 'Deaths',
                        borderColor : 'red',
                        backgroundColor : 'rgba(255,0,0,0.5',
                        fill : true
                    }]
                }}
                
                />):null
    )
    return (
        <div className = {Styles.container}>
          {lineChart}  
        </div>
    )
}
