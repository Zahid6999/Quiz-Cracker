import React from 'react';
import { Link } from 'react-router-dom';


const Quiz = ({quizData}) => {
const {id, name, logo} = quizData;
    return (
        <div>
          <div className="card w-80 mb-8 bg-indigo-100 shadow-xl mx-auto">
            <figure><img className='h-72' src={logo} alt="Technology" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p><span className='text-lg font-semibold'>tryAgain attempt <br /></span><span className='text-green-400 text-lg font-semibold'>success  will come</span></p>
                <div className="card-actions justify-end">
                <Link to={`/quiz/${id}`}><button className="btn btn-primary">Practice Now</button></Link>
               
               
               
               
                </div>
            </div>
            </div>

        </div>
    );
};

export default Quiz;