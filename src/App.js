// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {


  const router = createBrowserRouter([
    {path: '/',
    element: <Main></Main>,
    children: [
      {path: '/', element: <Home></Home>},
      {path: '/blogs', element: <Blogs></Blogs>},
      {path: '/topics', element: <Topics></Topics>}
    ]
  }

  ]);


  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
