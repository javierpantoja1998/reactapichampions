import React, { Component } from 'react';
import {Route, BrowserRouter, Routes, useParams} from 'react-router-dom';
import MenuRutas from './components/MenuRutas';
import Home from './components/Home';
import Equipos from './components/Equipos';
import Jugadores from './components/Jugadores';

export default class Router extends Component {

  


  render() {
    //Las funciones element siempre tienen que estar en el render
    function EquiposElement() {
      //Enlazamos el prop "idEquipo" con idequipo
      var{idequipo}=useParams();
      return(<Equipos idEquipo={idequipo}/>)
  }

  function JugadoresElement() {
    //Enlazamos el prop "idEquipo" con idequipo
    var{idequipo}=useParams();
    return(<Jugadores idEquipo={idequipo}/>)
}
    return (
      <BrowserRouter>
      <MenuRutas/>
        <Routes>
            
            <Route path='/' element={<Home/>}/>
            <Route path='/equipo/:idequipo' element={<EquiposElement/>}/>
            <Route path='/jugadores/:idEquipo' element={<JugadoresElement/>}></Route>
            



        </Routes>
      
      
      </BrowserRouter>
    )
  }
}
