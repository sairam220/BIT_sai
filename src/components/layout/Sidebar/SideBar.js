import React, { useRef } from 'react'

// React Icons

import {MdDashboardCustomize, MdCalendarToday, MdOutlineTopic, MdPieChart,MdOutlineSettings} from "react-icons/md";
import { AiOutlineMenu} from "react-icons/ai";

import "./sidebar.css";



const SideBar = ({themeColor}) => {
    const mobileSidebarNav = useRef(null);

    const mobileMenuShow = (e)=>{
        e.preventDefault();

        mobileSidebarNav.current.classList.toggle('dashboard-sidebar-nav-show');

    }
  return (
    <div className='dashboard-sidebar vh-md-100'>
        <div className="row">
            <div className="col-md-12 py-3 mobile-sidebar-nav">
                <div className='dashboard-logo pr-center'>
                   <img alt='dash-baord' src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1684901689/byi_an7xwo.png" className='dashboard-image'/>
                </div>
                <div className='ham-btn' onClick={(e)=>mobileMenuShow(e)}>
                    <AiOutlineMenu/>
                </div>
            </div>
            <div className={`col-md-12 dashboard-sidebar-nav dashboard-sidebar-nav-${themeColor}`} ref={mobileSidebarNav}>
                <ul className='navbar dashbord-1'>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdDashboardCustomize/> &nbsp; &nbsp;<span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdCalendarToday/> &nbsp; &nbsp;<span>Employee Profile</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdOutlineTopic/> &nbsp; &nbsp;<span>Departments</span>
                        </a>
                    </li>   
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdPieChart/> &nbsp; &nbsp;<span>Company</span>
                        </a>
                    </li>
                    
                    
                    
                    
                    
                    <li className="nav-item">
                        <a className='nav-link' href="http://localhost:3000"><MdOutlineSettings/> &nbsp; &nbsp;<span>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar