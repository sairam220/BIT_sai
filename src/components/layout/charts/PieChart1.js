import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart } from "react-google-charts";
// import CompanyData from "../../../Data/data.json";

// ChartJS.register(ArcElement, Tooltip, Legend);




const PieChart1 = ({ dataName}) => {

    let mainDonutData= [[dataName,'number']];
    // const donutPieceColor = ['#AA77FF','#C9EEFF','#97DEFF','#62CDFF','#3E54AC','#7579E7','#B9FFFC','#9852F9','#C299FC'];

    // const label = new Set();
     mainDonutData=[
        ['department', 'number'],
        ["Male",13],
        ["Female",10]
    ]

    

    // console.log(donutData);

    
    // console.log(mainDonutData);
  return (
    <Chart chartType="PieChart" data={mainDonutData} width={"100%"} height={"100%"}/>
  )
}

export default PieChart1