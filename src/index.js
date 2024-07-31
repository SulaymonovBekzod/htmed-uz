import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Context from './Components/Context/Context';
import Dashboardlayout from './Layout/Dashboardlayout';
import HomeKatalog from './Pages/Home/HomeKatalog';
import Katalog from './Pages/Katalog/Katalog';
import Yangiliklar from './Pages/Yangiliklar/Yangiliklar';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <BrowserRouter>
      <Routes >
        <Route element={<Dashboardlayout />}>
          <Route path='/' element={<HomeKatalog />} />
          <Route path='katalog' element={<Katalog />}/>
          <Route path='yangiliklar' element={<Yangiliklar />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Context>
);
