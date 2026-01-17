import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './GeneralZone/Home.jsx';
import AboutUs from './GeneralZone/AboutUs.jsx';
import Admission from './GeneralZone/Admission.jsx';
import Facility from './GeneralZone/Facility.jsx';
import ContactUs from './GeneralZone/ContactUs.jsx';
import Enquiry from './GeneralZone/Enquiry.jsx';
import Faculty from './GeneralZone/faculty.jsx';
import Load from './GeneralZone/load.jsx';
import OurTeam from './GeneralZone/Our-team.jsx';
import AdminPortal from './AdminZone/AdminPortal.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/admin' element={<AdminPortal/>}/>
      <Route path='/' element={<Load/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/admission' element={<Admission/>}/>
      <Route path='/about' element={<AboutUs/>}/>
       <Route path='/facility' element={<Facility/>}/>
      <Route path='/enquiry' element={<Enquiry/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
      <Route path='/our-team' element={<OurTeam/>}/>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
