import React, { Component } from 'react';
import Global from './../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {
    //Definimos el state para los jugadores
    state = {
        jugadores: [],
        status: false
    }
    //Funcion para cargar todos los jugadores del equipo seleccionado
    loadJugadores = () => {
        //Necesitamos el id del equipo seleccionado para saber de que equipo queremos sacar los jugadores
        //Recogemos el id atraves de su propiedad definida en el Router JugadoresElement
        var id = this.props.idEquipo;
        //Definimos la peticion añadiendole el id (hay que buscar siempre en la api la request)
        var request = "api/Jugadores/JugadoresEquipo/" + id;
        //Definimos la url y le añadimos la request
        var url = Global.url + request;
        //Hacemos el get que muestre los jugadores y le asociamos los datos al state
        axios.get(url).then(res => {
            console.log("a");
            this.setState({
                jugadores: res.data,
                status: true
            });
        });
    }
    //LLamamos a la funcion loadJugadores
    componentDidMount = () => {
        this.loadJugadores();
    }


    render() {

        return (

            <div>
                <h1>hola</h1>
                Tenemos que hacer este if si o si
                Comprobamos que el estado es verdadero
                
                {
                    this.state.status == true && (
                        <div>
                            <table className='table table-bordered'>
                                <thead>

                                    <tr>
                                        {/* Encabezado */}
                                        <th>Nombre</th>
                                        <th>Imagen</th>
                                        <th>Detalles</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {/* Como en la api los datos vienen con un array
                                    accedemos a ellos con un map para recorrer dicho array.
                                    Y pintamos el nombre y foto
                                    Ademas añadimos un navlink boton para que nos muestre los detalles del jugador */}
                                    {
                                        //Ej: Cantante.nombre -> nombre viene nombrado asi en  la api
                                        this.state.jugadores.map((jugador, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{jugador.nombre}</td>
                                                    <td><img src={jugador.imagen} /></td>
                                                    {/* Accedemos a la ruta de Detalles 
                                                    definida en el Router '/detalles/:idjugador'.
                                                    Recogemos el id del jugador con el map jugador.idJugador */}                                
                                                    <td><NavLink className="btn btn-primary" to={"/detalles/" + jugador.idJugador} >Detalles</NavLink></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        )
    }
}
