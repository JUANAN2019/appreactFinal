import './App.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Mainpage from './Components/Main';
import Characters from './Components/Characters';
import NavCompleto from './Components/NavCompletoS';
import Carrusel  from './Components/Carrusel';
import Formulario from './Components/Formulario';
import React from 'react';

import Footer from './Components/Footer';
import AnimePage from './Components/AnimePage';
import UserPage from './Components/UserPage';
import Inicio from './Components/Inicio';


function App() {
  return (
    <>
     
     
      <NavCompleto/>
      <Carrusel/>
      
      <BrowserRouter>
      <Inicio/>
      
        <Routes >
        
          <Route path='/Rick and Morty' element={<Mainpage />}></Route>
          <Route path='/characters/:id' element={<Characters />}></Route>
          <Route path="/suscriptores" element={<UserPage />} ></Route>
          <Route path="/animes" element={<AnimePage />}> </Route>
          
        </Routes>
      </BrowserRouter>

      <Formulario />
      <Footer />
    </>
  );
}

export default App;

