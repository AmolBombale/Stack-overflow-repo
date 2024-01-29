import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './component/Navbar';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchAllQuestions} from './action/question'
import { fetchAllUsers } from './action/users';



function App() {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchAllQuestions())
      dispatch(fetchAllUsers())
    },[dispatch])

  return (
    <div className="text-center">
     <Router>
       <Navbar></Navbar>
       <AllRoutes></AllRoutes>
     </Router>
    </div>
  );
}

export default App;
