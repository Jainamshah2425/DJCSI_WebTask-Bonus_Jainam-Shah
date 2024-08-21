import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,BrowserRouter,Routes,Route} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Intro from './Pages/intro.jsx'
import Hotel from './Pages/Hotel.jsx'
import Service from './Pages/Service.jsx'
import Contact from './Pages/Contact.jsx'
import Details from './Pages/Details.jsx'
import View from './Pages/View.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/login",
    element: <Contact/>,
  },
  {
    path:"/contact",
    element: <Details/>,

  },
  {
    path:"/viewAll",
    element:<View/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   
<RouterProvider router={router}/>
    

    
 
   
  </StrictMode>,
)
