import React, {useState, useEffect} from 'react';

// Charts and Graphs
// import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import PieChart1 from '../charts/PieChart1'

// import CompanyData from "../../../Data/data.json";
import axios from "axios";
import Loader from "react-js-loader";
import {MAIN_URI} from "../../helper";


// Style file
import "./Home.css";



const Home = ({themeColor}) => {
const [CompanyData, setCompanyData] = useState();

 const getData = async ()=>{
    const {data} = await axios.get(`${MAIN_URI}/api/v1/readAll`);
    setCompanyData(data.employee);
    // console.log(data);
 }

  useEffect(() => {
       getData();
      
  },[]);
    
  return (
        <>
        {
            CompanyData ? (
                <>
                    <div className="row dashboard-main-container">
                        <div className="col-md-12 p-3 ">
                            
                            
                            <div className="row mt-4 mini-graph box1">
                                <div className={`col-md-6 pest-data pest-data-${themeColor}`}>
                                    <span>Employee Gender</span>
                                    <div className='mini-chart mt-2'>
                                    <PieChart1 dataName="department" CompanyData={CompanyData}/>    
                                    </div>  
                                </div>
                                <div className={`col-md-6 pest-data pest-data-${themeColor}`}>
                                    <span>Employee Type</span>
                                    <div className='mini-chart mt-2'>                            
                                        <PieChart dataName="employeeStatus" CompanyData={CompanyData}/>                               
                                    </div> 
                                </div>                            
                            </div>    
                        </div>
                    </div>  
                </>
            ):(
                <div className='main-loader pr-center'>
                        <Loader type="bubble-scale" bgColor={"#995de8"} color={'#995de8'} size={100}/>
                </div>
            )
        }
        </>
        
  )
}

export default Home