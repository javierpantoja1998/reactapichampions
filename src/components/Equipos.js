import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from './../Global';

export default class Equipos extends Component {
    state = {
        equipo:{},
        status:false
    }
    //Funcion para cargar los equipos y mostrar su informacion
    loadEquipos = () => {
        //Necesitamos el id para acceder a los equipos por su id
        //idEquipo lo cogemos de Router (en EquiposElement)
        var id = this.props.idEquipo;
        //Definimos la request para esta peticion
        //Para mostrar el equipo seleccionado necesitamos su id
        var request = "api/Equipos/" +  id;
        //Definimos la url y metemos la peticion 
        var url = Global.url + request;
        //Accedemos a axios para hacer un get
        axios.get(url).then(response =>{
          //Cambiamos el state y asociamos los datos de los equipos
            this.setState({
                equipo:response.data,
                status:true
            });
        });
    }
    //Cargamos la funcion loadEquipos
    componentDidMount = () => {
        this.loadEquipos();
    }
    //Actualizamos los equipos mostrados atraves de sus antiguas propiedades
    componentDidUpdate = (oldProps) => {
      //
      if(oldProps.equipo != this.props.idEquipo){
        this.loadEquipos();
      }
    }

  render() {
    return (
      <div>
        {/* Como en un OBJETO, no se hace el map
        Se escribe "a pelo" los datos de los equipos con <h1>
        Accedemos a los datos con el state, accediendo dentro de este a equipo */}
        {
          this.state.status == true &&
          (<div>
            <h1>{this.state.equipo.idEquipo}</h1>
            <h1>{this.state.equipo.nombre}</h1>
            <h1><img src={this.state.equipo.imagen} style={{width:"300px"}  }/></h1>
            <p>{this.state.equipo.champions}</p>
            <p>{this.state.equipo.paginaWeb}</p>
            <p>{this.state.equipo.descripcion}</p>
            {/* Creamos un navlink con forma de boton que nos muestre los jugadores del equipo
            Este navlink nos lleva a la ruta que hemos establecido en Router '/jugadores/:idequipo'
            La ruta nos va a llevar a <JugadoresElement> y este nos va a llevar a <Jugadores>
            Accedemos al id con el state con this.state.equipo.idEquipo */}
            <h1><NavLink className='btn btn-primary' to={'/jugadores/'+this.state.equipo.idEquipo}>Llevar jugadores</NavLink></h1>
            
          </div>
          )
        }
        
      </div>
    )
  }
}
