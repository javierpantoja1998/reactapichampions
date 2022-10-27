import React, { Component } from 'react';
import {Route, BrowserRouter, Routes, useParams} from 'react-router-dom';
import MenuRutas from './components/MenuRutas';
import Home from './components/Home';
import Equipos from './components/Equipos';
import Jugadores from './components/Jugadores';
import Detalles from './components/Detalles';
import Apuestas from './components/Apuestas';
import CrearApuesta from './components/CrearApuesta';

export default class Router extends Component {

  


  render() {
    //Las funciones element siempre tienen que estar en el render

    function EquiposElement() {
      //Enlazamos el prop "idEquipo" con idequipo
      var{idequipo}=useParams();
      //Devolvemos el componente equipos con su propiedad idEquipo 
      //Asociamos la prop 
      return(<Equipos idEquipo={idequipo}/>)
  }

  function JugadoresElement() {
    //Enlazamos el prop "idEquipo" con idequipo
    var{idequipo}=useParams();
    
    //Devolvemos el componente Jugadores definiendo su propiedad(prop) idEquipo
    return(<Jugadores idEquipo={idequipo}/>)
}
function DetallesElement(){ 
  //Definimos y recogemos el parametro de la ruta :idjugador
  var{idjugador}=useParams();
  //Devolvemos el componente Detalles con su propiedad idJugador
  return(<Detalles idJugador={idjugador}/>)
}


    return (
      <BrowserRouter>
      <MenuRutas/>
        <Routes>
            {/* Esta es la ruta que nos lleva a Home */}
            <Route path='/' element={<Home/>}/>
            {/* Esta es la ruta para mostrar los equipos en el navbar  y para acceder a la info de los equipos*/}
            <Route path='/equipo/:idequipo' element={<EquiposElement/>}/>
             {/* Esta es la ruta para mostrar los jugadores del equipo seleccionado */}
            <Route path='/jugadores/:idequipo' element={<JugadoresElement/>}/>
            {/* Esta es la ruta para mostrar los detalles del jugador seleccionado */}
            <Route path='/detalles/:idjugador' element={<DetallesElement/>}/>
            {/* Esta es la ruta para mostrar los apuestas  */}
            <Route path='/apuestas' element={<Apuestas/>}/>
            {/* Esta es la ruta para crearApuestas  */}
            <Route path='/apostar' element={<CrearApuesta/>}/>
            



        </Routes>
      
      
      </BrowserRouter>
    )
  }
}
