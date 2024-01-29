import React from "react"
import moment from 'moment'

import { Link, useParams } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";


import Avatar from "../../component/Avatar/Avatar"
import { deleteAnswer } from '../../action/question'

const DisplayAnswer=({question, handleShare})=>{

    const User = useSelector((state) => (state.currentUserReducer))
    //  console.log(User);
    
     const { id }=useParams();
     const dispatch =useDispatch()
     const handleDelete =(answerId, noOfAnswers) => {
          dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
     }

    return(
        <div>
            {
                question.answer.map((ans)=>(
                    <div className="display-ans" key={ans._id} >
                        <p>{ans.answerBody}</p>
                        <div className="question-action-user">
                            <div>
                                <button type="buttton"  onClick={handleShare} className="edit-question-btn">Share</button>
                                {
                                     User?.result?._id === ans?.userId && (
                                       <button type="button" onClick={() => handleDelete(ans._id, question.noOfAnswers )} className="edit-question-btn">Delete</button>
                                     )
                                }
                            </div>
                            <div>
                                <p>answered {moment(ans.answerOn).fromNow()}</p>
                                <Link to={`/users/${ans.userId}`} className="user-link">
                                   <Avatar backgroundColor="green" px='12px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                     <div>
                                        {ans.userAnswered}
                                     </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer;