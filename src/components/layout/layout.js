import React, {useRef,useState} from 'react';

// import {Outlet} from "react-router-dom";
import SideBar from "../layout/Sidebar/SideBar";

// import {FaUserAlt} from "react-icons/fa";


import "../layout/Layout.css";
import Home from './home/Home';

const Layout = () => {


  const [themeStatus, setThemeStatus] = useState(0);
  const [themeBg, setThemeBg] = useState('light');

  const themeMode = useRef(null);
//   const showDrop = useRef([]);
//   console.log(showDrop);
  const themeSetter = (e)=>{
    e.preventDefault();

    if(themeStatus === 0){
        setThemeStatus(1)
        setThemeBg("dark");
        console.log(themeMode);
    }else{
        setThemeStatus(0)
        setThemeBg("light");
    }
  }
  
  return (
    <div className={`container-fluid dashboard-bg-${themeBg} vh-100`} ref={themeMode}>
        <div className="row">
            <div className={`col-md-2 dashboard-header-bg-${themeBg}`}>
                <SideBar themeColor={themeBg}/>
            </div>
            <div className="col-md-10">
                <div className={`row dashboard-header-bg-${themeBg}`}>
                    <div className="col-md-4 py-3 only-mobile">
                        <h4>BIT</h4>
                    </div>
                    <div className="col-md-8 pr-center py-3 justify-content-end user-panel only-mobile">
                        <div className="user-avatar-box pr-center mx-lg-2">
                            <button className='logot-btn'>LOGOUT</button>
                           <span>Sairam</span>

                        </div>
                        
                    </div>
                    <div className="col-md-8 show-only-mobile py-3 user-panel">
                        <div className="user-avatar-box pr-center mx-lg-2">
                        <button className='logot-btn'>LOGOUT</button>
                            <span>Sairam</span>

                        </div>
                        
                    </div>
                </div>
                <Home themeColor={themeBg}/>
            </div>
        </div>
    </div>
  )
}

export default Layout