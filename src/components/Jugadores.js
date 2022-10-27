import React, { Component } from 'react';
import Global from './../Global';
import axios from 'axios';

export default class Jugadores extends Component {

    state = {
        jugadores:[],
        status:false
    }

    loadJugadores = () => {
        var id = this.props.idEquipo;
        var request = "api/Jugadores/JugadoresEquipo/" + id;
        var url = Global.url + request;
        axios.get(url).then(res =>{
            this.setState({
                jugadores:res.data,
                status:true
            });
        });
    }

    componentDidMount = () => {
        this.loadJugadores();
    }

    
  render() {

    return (
        <div>
            {
                this.state.status == true && (
                    <div>
                        <table className='table table-bordered'>
                            <thead>

                                <tr>
                                    {/* Encabezado */}
                                    <th></th>
                                    <th></th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.state.jugadores.map((jugador,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{jugador.nombre}</td>
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
