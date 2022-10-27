import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class Detalles extends Component {
    //Definimos el state para mostrar los detalles
    state = {
        detalles: {},
        status: false
    }
    //Cargamos los detalles de la api con un get
    loadDetalles = () => {
        //La peticion necesaria es: api/Jugadores/{id}
        //Por eso necesitamos acceder al id del jugador
        //Accedemos al id del jugador atraves de la prop definida en Router
        //<Detalles idJugador={idjugador} -> asi es como la hemos definido en DetallesElement en Router.js
        var idJugador = this.props.idJugador;
        var request = "api/Jugadores/" + idJugador;
        var url = Global.url + request;
        axios.get(url).then(res => {

            this.setState({
                detalles: res.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.loadDetalles();
    }

    render() {
        return (
            <div>
                <h1>DETALLES</h1>
                <table className="table table-dark table-striped">
                    <thead></thead>
                    <tbody>

                        {/* Sacamos una tabla sin map ni nada porque es un objeto y no array
                        Accedemos y sacamos los datos a traves del state */}
                        <tr key={this.props.idJugador}>

                            <td>ID:{this.state.detalles.idJugador}</td>
                            <td>NOMBRE:{this.state.detalles.nombre}</td>
                            <td>POSICION:{this.state.detalles.posicion}</td>
                            <td><img src={this.state.detalles.imagen}/>IMAGEN:</td>
                            <td>FECHA DE NACIMIENTO:{this.state.detalles.fechaNacimiento}</td>
                            <td>PAIS:{this.state.detalles.pais}</td>
                            <td>ID EQUIPO:{this.state.detalles.idEquipo}</td>
            
                        </tr>
                        {/* Este NavLink boton nos devuelve a jugadores */}
                        <NavLink className="btn btn-primary" to={"/jugadores/" + this.state.detalles.idEquipo}>Jugadores</NavLink>

                    </tbody>
                </table>
                {/* {this.props.idJugador} */}
            </div>
        )
    }
}
