import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDisplay from '../QuizDisplay/QuizDisplay';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
   const newQuizDetails = quizDetails.data.questions;
 
   

    return (
        <div>
            <h2 className='my-24 text-center text-5xl lg:text-6xl font-semibold text-black'> Start <span className='text-orange-500'>Quiz</span> </h2>

            {
             newQuizDetails.map(quizQstn => <QuizDisplay key={quizQstn.id} quizQstn={quizQstn}></QuizDisplay>)
            }
            
        </div>
    );
};

export default QuizDetails;