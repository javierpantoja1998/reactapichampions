import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class Apostar extends Component {

  cajaUsuarioRef = React.createRef();
  cajaResultadoRef = React.createRef();
  cajaFechaRef = React.createRef();

  state = {
    mensaje:"",
    status: false
  }
  crearApuesta = (e) => {
    e.preventDefault();
    
    //Definimos y recogemos las vbariables
    var cajaUsuario = this.cajaUsuarioRef.current.value;
    var cajaResultado = this.cajaResultadoRef.current.value;
    var cajaFecha = this.cajaFechaRef.current.value;
    
    var request = "api/Apuestas";
    var url = Global.url + request;

    var apuesta = {
      usuario:cajaUsuario,
      resultado:cajaResultado,
      fecha:cajaFecha
    };

    axios.post(url,apuesta).then(res => {
      this.setState({
        mensaje: "Apuesta realizada!",
        status: true
      });
    });
  }

  render() {
    
    return (
      <div>
        <form>
          <label>Usuario</label><br />
          <input type="text" id="cajaUsuario" ref={this.cajaUsuarioRef} /><br />
          <label>Resultado</label><br />
          <input type="text" id="cajaResultado" ref={this.cajaResultadoRef} /><br />
          <label>Fecha</label><br />
          <input type="text" id="cajaFecha" ref={this.cajaFechaRef} /><br />
          <button type='button' onClick={this.crearApuesta} >APOSTAR</button>
          
        </form>
      </div>
    )
  }
}
