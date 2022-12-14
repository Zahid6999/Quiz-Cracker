import React from 'react';
import quizImg from '../../Images/OIP.jpg';
import quizImg2 from '../../Images/BA-QUIZ.webp';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const objQuizData = useLoaderData();
    const newQuizData = objQuizData.data;
    return (
        <div >
            {/* Home content--------------------------- */}
            <div className='lg:flex lg:justify-around items-center bg-lime-100'>
                <img className='lg:h-64 lg:w-1/5 p-4  ' src={quizImg} alt="quiz" />
                <p className='text-lg font-medium text-slate-700 p-3'>The main difference between a personality test and a quiz? <br />

        Quizzes ask questions with right or wrong answers – <br />  and give each user a score based on how well they did.</p>
                <img className='lg:h-64 lg:w-1/5 p-4' src={quizImg2} alt="quiz" />
            </div>


            {/* QuizData to dynamic api--------------------  */}

            <div className='lg:grid lg:grid-cols-4 gap-8 mt-48 '>
                {
                    newQuizData.map(quizData => <Quiz key={quizData.id} quizData={quizData}></Quiz> )

                }
            </div>
           
        </div>
    );
};

export default Home;