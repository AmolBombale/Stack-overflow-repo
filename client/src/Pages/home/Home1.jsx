import React from "react"
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar"
import HomeMainbar from "../../component/HomeMianbar/HomeMainbar"
import RightSidebar from "../../component/RightSidebar/RightSidebar"
import '../../App.css'

const Home1=()=>{
    return(
        <div className="home-container-1">
                <LeftSidebar/>
            <div className="home-container-2">
                <HomeMainbar/>
                <RightSidebar/>
            </div>
        </div>
    )
}
export default Home1