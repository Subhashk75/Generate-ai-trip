import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from "./Components/GenerateAITrip/GenerateAITrip.jsx"
import ViewTrip from './Components/View-Trip/[TripId]/ViewTrip.jsx';
import Profile from './Components/Auth/Profile.jsx'
import Login from "./Components/Auth/Login.jsx"
  const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children: [
            {
                path: "",
                element:<HomePage />
            },
            {
              path:"create-trip",
              element:<CreateTrip />
            },{
              path:"/view-trip/:tripId",
              element :<ViewTrip/>
            },{
              path:'/login',
              element:<Login/>
            },{
              path:'/profile',
              element:<Profile />
            }

        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
