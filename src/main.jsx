import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import AdmissionForm from './Pages/Admission/AdmissionForm.jsx'
import ResultsHomePage from './Pages/Results/ResultsHomePege.jsx'
import PhotoGallery from './Pages/Gallery/PhotoGallery.jsx'
import AdminBlogPage from './Pages/AdminPage/AdminBlogPage.jsx'
import CoursePage from './Pages/CoursePage/CoursePage.jsx';
import StaffANDFaclity from './Components/StaffANDFaclity/StaffANDFaclity.jsx';
import ClubCard from './Pages/Cards/ClubCard.jsx';
import NewsAndNotification from './Components/NewsAndNotificationSection/NewsAndNotification.jsx';
import LoginPage from './Pages/Admission/LoginPage.jsx'
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children: [
            {
                path: "",
                element:<Home />
            },
            
            {
                path: "admission",
                element:<AdmissionForm />
            },
          
            {
                path: "result",
                element:<ResultsHomePage/>

            }, 
          
            {
                path: "gallery",
                element:<PhotoGallery/>
            },
            {
                path: "adminPage",
                element:<AdminBlogPage/>
            },{
                path:"Course",
                element:<CoursePage/>
            },{
                path:"Facality&Staff",
                element:<StaffANDFaclity/>
            },{
                path:"club",
                element:<ClubCard/>
            },{
                path:"Event",
                element:<NewsAndNotification/>
            },{
                path:"Login",
                element:<LoginPage />
            }

        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
