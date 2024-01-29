import React from "react"
import './LeftSidebar.css';
import { NavLink } from "react-router-dom";
import Globe from '../../assests/Globe.jpg'

const LeftSidebar=()=>{
   return(
      <div className="left-sidebar">
         <nav className="side-nav">
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
            <p>Home</p>
            </NavLink>
         <div className="side-nav-div">
             <div><p>PUBLIC</p></div>
                <NavLink to='/questions' className='side-nav-links' activeClassName='active' >
                    <img src={Globe} style={{width:"30px", height:"auto", paddingTop:"2px"}} className="img_ques" alt="Globe" />
                    <p>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
                    <p>User</p>
                </NavLink>
            </div>
         </nav>
      </div>
   )
}

export default LeftSidebar;