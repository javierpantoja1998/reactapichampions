import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';

export default class MostrarEquipo extends Component {


  status = {
    equipo:{},
    status: false
  }

  loadEquipo = () => {
    //Tenemos que hacer un get por el id
    var id = this.props.idEquipo;
    var request = " api/Jugadores/" + id;
    var url = Global.url + request;
    axios.get(url).then(response => {
      this.setState({
        equipo:response.data,
        status:true
      });
    });
  }

  componentDidUpdate = (oldProps) => {
    if(oldProps.equipo != this.props.idEquipo){
      this.loadEquipo();
    }
  }
  componentDidMount = () => {
    this.loadEquipo();
}

  render() {
    return (
      <div>
        <h1>{this.state.equipo.nombre}</h1>
        

        <table className='table table-bordered'>
          <thead>
            <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Champions</th>
            <th>Pagina web</th>
            <th>Descripcion</th>
            </tr>

                    <tr key={this.state.equipo.idEquipo}>
                      <td>{this.state.equipo.idEquipo}</td>
                      <td>{this.state.equipo.nombre}</td>
                      <td><img src={this.state.equipo.imagen}/></td>
                      <td>{this.state.equipo.champions}</td>
                      <td>{this.state.equipo.paginaWeb}</td>
                      <td>{this.state.equipo.descripcion}</td>
                    </tr>
            
              <td>{this.props.idEquipo}</td>
          
          </thead>
           
        </table>
      </div>

    )
  }
}
