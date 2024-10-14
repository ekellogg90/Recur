import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ThisMonth from './pages/ThisMonth.jsx';
import NextMonth from './pages/NextMonth.jsx';
import EventBoard from './pages/EventBoard.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className=''>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <ThisMonth />
      }, 
      {
        path: 'nextmonth',
        element: <NextMonth />,
      },
      {
        path: 'eventboard',
        element: <EventBoard />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
