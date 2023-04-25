import LineChart from "./LineChart";
import { UserData } from "./Data";
import { useState } from "react";
import './usage.css'

function Usage(){

    const [userData, setUserData]= useState({
        labels: UserData.map((data)=> data.date),
        datasets: [{
            label: "Words Generated",
            data: UserData.map((data)=> data.wordsGenerated),
            backgroundColor: ['#a0fbcd96'],
            borderColor:['#a0fbcd'],
            fill: 'start',
            lineTension: 0.4,
        }]
    })

    return(
        <>
        <div className="graph-container">
      
            <LineChart chartData={userData} />
         
            </div>
            </>
    )
}

export default Usage;