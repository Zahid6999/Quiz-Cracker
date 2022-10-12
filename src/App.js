// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDateils/QuizDateils';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {


  const router = createBrowserRouter([
    {path: '/',
    element: <Main></Main>,
    children: [
      {path: '/', element: <Home></Home>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz')},
      {path: '/blogs', element: <Blogs></Blogs>},
      {path: '/topics', element: <Topics></Topics>},
      {path: '/quiz/:id', element: <QuizDetails></QuizDetails>,
       loader: async({params}) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
       }
    }
    ]
  },



  {path: '/*', element: <p>404 </p>}
  ]);


  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
