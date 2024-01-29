import React from "react"
import './HomeMainbar.css'
import { useSelector } from 'react-redux'
import {  useLocation , useNavigate } from "react-router-dom"
import QuestionList from "./QuestionList"

const HomeMainbar=()=>{


//    var questionList=[{
//       _id: "1",
//       upVotes: 3,
//       downVotes: 2,
//       noOfAnswers: 2,
//       questionsTitle: "what is a function?",
//       questionBody: "It means ti be",
//       questionTags: ["java", "node.js", "react.js", "mongodb"],
//       userPosted: "mano",
//       userId: 1,
//       askedOn: "jan 1",
//       answer: [{
//           answerBody: "Answer",
//           userAnswered: "kumar",
//           answerOn: "jan 2",
//           userId: 2
//       }]
//    },{
//       _id: "2",
//       upVotes: 3,
//       downVotes: 2,
//       noOfAnswers: 0,
//       questionsTitle: "what is a function?",
//       questionBody: "It means it be",
//       questionTags: ["javascript", "R", "python"],
//       userPosted: "nano",
//       userId: 1,
//       askedOn: "jan 1",
//       answer: [{
//           answerBody: "Answer",
//           userAnswered: "kumar",
//           answerOn: "jan 2",
//           userId: 2
//       }]
//    },{
//       _id: "3",
//       upVotes: 3,
//       downVotes: 2,
//       questionsTitle: "what is a function?",
//       questionBody: "It means ti be",
//       questionTags: ["javascript", "R", "python"],
//       userPosted: "nano",
//       userId: 1,
//       askedOn: "jan 1",
//       answer: [{
//           answerBody: "Answer",
//           userAnswered: "kumar",
//           answerOn: "jan 2",
//           userId: 2
//       }]
//    }
//   ]

  const location=useLocation()
  const navigate=useNavigate()
  const user= 1;


  const questionList= useSelector( state => state.questionsReducer)


  const chekAuth=()=>{
    if(user === null)
    {
      alert("login or signup to ask a question")
         navigate('/auth')
    }
    else{
      navigate('/askquestion')
    }
  }

   return(
      <div className="main-bar">
          <div className="main-bar-header">
              {
                 location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
              }
               <button  onClick={chekAuth} className="ask-btn">Ask Question</button>
          </div>
          <div>
               {
                  questionList.data === null ?
                  <h1>Loading...</h1>: 
                  <>
                     <p>{questionList.data.length} questions</p>
                     <QuestionList questionList={questionList.data} /> 
                  </>
               }
          </div>
      </div>
   )
}

export default HomeMainbar