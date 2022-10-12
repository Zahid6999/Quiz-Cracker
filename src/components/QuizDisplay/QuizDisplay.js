import React from 'react';
import './QuizDisplay.css'
const QuizDisplay = ({quizQstn,}) => {
    const {correctAnswer, id, question,} = quizQstn;
    // console.log(quizQstn);

    const [first, second, thirds, fourth] = quizQstn.options;

    
    return (
        <div className='quiz-display lg:ml-96 mb-6 lg:w-1/2 lg:p-5 bg shadow-2xl'>
            {/* Question  */}
            <div className='lg:my-16'>
                <h1 className=' text-lg lg:text-3xl font-semibold text-slate-800 p-2'>{question}</h1>
            </div>



        {/* ans */}
            <div className=''>
                <button className='h-10 w-60 lg:h-16 lg:w-96 bg-gray-300 rounded-xl m-3  mb-3 hover:bg-orange-400 lg:text-2xl'><input type="radio" id="r1" name="rr" /> {first}</button>
                <button className='h-10 w-60 lg:h-16 lg:w-96 bg-gray-300 rounded-xl lg:m-3 mb-3 hover:bg-orange-400 lg:text-2xl'><input type="radio" id="r1" name="rr" /> {second}</button>
                <div>
                <button className='h-10 w-60 lg:h-16 lg:w-96 bg-gray-300 rounded-xl lg:m-3 mb-3 hover:bg-orange-400 lg:text-2xl'><input type="radio" id="r1" name="rr" /> {thirds}</button>
                <button className='h-10 w-60 lg:h-16 lg:w-96 bg-gray-300 rounded-xl lg:m-3 mb-3 hover:bg-orange-400 lg:text-2xl'><input type="radio" id="r1" name="rr" /> {fourth}</button>
                    
                </div>  
            </div>

        </div>
    );
};

export default QuizDisplay;