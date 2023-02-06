import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step1 from './components/Step1'
import Resium from './components/Resium'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
         <Route exact path='/' element={<Home />}/>
         <Route path='/Step1' element={<Step1/>}/>
         <Route path='/Step2' element={<Step2/>}/>
         <Route path='/Step3'element={<Step3/>}/>
         <Route path='/Resium' element={<Resium/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
root.render(
  <App/>
);
