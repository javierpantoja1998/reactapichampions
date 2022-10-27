import React, { Component } from 'react';
import champions from './../assests/images/champ.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from './../Global';


export default class MenuRutas extends Component {
  state = {
    equipos:[],
    status:false
}

loadEquipos = () => {
    
    var request = "/api/Equipos";
    var url = Global.url + request;
    axios.get(url).then(response =>{
        this.setState({
            equipos:response.data,
            status:true
        });
    });
}
componentDidMount = () => {
    this.loadEquipos();
}
  render() {
    return (
        <nav className="navbar navbar-expand-sm bg-light">

        <div className="container-fluid">
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src={champions} style={{width:"70px"}}></img>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">champions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Apuestas</a>
            </li>
            </ul>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

               Equipos

            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            
        {
            this.state.equipos.map((equipo,index)=>{

              return(<li key={index}>
                
                <NavLink className="btn btn-info" to={"/equipo/"+ equipo.idEquipo}>{equipo.nombre}</NavLink>
                </li>)
            })
        }
          </ul>
          
        </div>
      
      </nav>
    )
  }
}
