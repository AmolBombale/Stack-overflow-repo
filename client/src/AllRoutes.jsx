import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Pages/auth/Auth";
import Home1 from "./Pages/home/Home1";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags"
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UsreProfile/UserProfile";

const AllRoutes=()=>{
    return(
        <Routes>
            <Route exact path="/" Component={Home1}></Route>
            <Route exact path='/auth' element={<Auth></Auth>}></Route>
            <Route exact path='/questions' element={<Questions />}></Route>
            <Route exact path='/askquestion' element={<AskQuestion />} ></Route>
            <Route exact path='/question/:id' element={<DisplayQuestion />}></Route>
            <Route exact path='/Tags' element={<Tags/>}></Route>
            <Route exact path='/Users' element={<Users/>}></Route>
            <Route exact path='/Users/:id' element={<UserProfile/>}></Route>
            
        </Routes>
    )
}
export default AllRoutes;