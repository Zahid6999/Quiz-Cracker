import React from 'react';
import './QuizDisplay.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const QuizDisplay = ({quizQstn,}) => {
    const {correctAnswer, id, question, options} = quizQstn;


    
const btnHandler = (option) => {
    if(correctAnswer === option){
        alert('correct Answer YOu Have Done')
    }else{
        alert('Not it is rong Answer')
    }

}

const btnHandler2 = (correctAnswer) => {
    
    alert(correctAnswer);
    
}


    
    
    return (
        <div className='quiz-display lg:ml-96 mb-6 lg:w-1/2 lg:p-5 bg shadow-2xl'>
            {/* Question  */}
            <div className='lg:my-16'>
                <EyeSlashIcon onClick={() => btnHandler2(correctAnswer)} className="h-6 w-6 text-blue-500 pt-0"/>
                <h1 className=' text-lg lg:text-3xl font-semibold text-slate-800 p-2'>{question}</h1>
            </div>



        {/* ans */}
        
            <div className=''>
               
              {
                options.map((option, index) =>  <button key={index} onClick={() => btnHandler(option)} className=' h-10 w-60 lg:h-16 lg:w-96 bg-gray-300 rounded-xl m-3  mb-3 hover:bg-orange-400 lg:text-sm'><input type="radio" id="r1" name={id} /> {option}</button> )
              }
                    
                
            </div>

        </div>
    );
};

export default QuizDisplay;