import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';
import loading from './../assets/images/load.gif';
import { NavLink } from 'react-router-dom';

export default class Equipos extends Component {

    status = {
        equipos:[],
        status:false
    }

    loadEquipos = () => {
        var request = "/api/jugadores";
        var url = Global.urlJugadores + request;
        //hacemos metodo get con axios
        axios.get(url).then(response => {
          this.setState({
            equipos:response.data,
            status:true
          });
        });
    }

    componentDidMount = () =>{
      this.loadEquipos();
  }
  render() {
    //Esto es javascript
    if(this.state.status == false){
         //Loading
         return(<div>
            <img src={loading} style={{width:"600px"}} alt="imagen de carga"></img>
         </div>)
            
    }else{
    return (
      <div>Equipos</div>
    )
  }
}
