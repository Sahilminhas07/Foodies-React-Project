import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import About from './Components/About.jsx'
import Service from './Components/Service.jsx'
import Contact from './Components/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path='/service' element={<Service />}></Route>
      <Route path='/contact' element={<Contact />}></Route>

    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
