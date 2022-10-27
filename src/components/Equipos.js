import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from './../Global';

export default class Equipos extends Component {
    state = {
        equipo:{},
        status:false
    }

    loadEquipos = () => {
        
        var request = "api/Equipos/" +  this.props.idEquipo;
        var url = Global.url + request;
        axios.get(url).then(response =>{
          
            this.setState({
                equipo:response.data,
                status:true
            });
        });
    }
    componentDidMount = () => {
        this.loadEquipos();
    }

    componentDidUpdate = (oldProps) => {
      if(oldProps.equipo != this.props.idEquipo){
        this.loadEquipos();
      }
    }

  render() {
    return (
      <div>
        {
          this.state.status == true &&
          (<div>
            <h1>{this.state.equipo.idEquipo}</h1>
            <h1>{this.state.equipo.nombre}</h1>
            <h1><img src={this.state.equipo.imagen} style={{width:"300px"}}/></h1>
            <p>{this.state.equipo.champions}</p>
            <p>{this.state.equipo.paginaWeb}</p>
            <p>{this.state.equipo.descripcion}</p>
            <h1><NavLink className='btn btn-primary' to={'/jugadores/'+this.state.equipo.idEquipo}></NavLink></h1>
            
          </div>
          )
        }
        
      </div>
    )
  }
}
