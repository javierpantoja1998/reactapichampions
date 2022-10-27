import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class Apuestas extends Component {


    state = {
        apuestas: [],
        status: false
    }
    
    loadApuestas = () => {
        var request = "api/Apuestas";
        var url = Global.url + request;
        axios.get(url).then(res => {
            this.setState({
                apuestas: res.data,
                status: true
            });
        });
    }
    componentDidMount = () => {
        this.loadApuestas();
    }

    render() {
        return (
            <div>
                <NavLink className="btn btn-danger" to="/apostar">APOSTAR</NavLink>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Resultado</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apuestas.map((apuestas, index) => {
                                return (<tr key={index}>
                                    <td>{apuestas.usuario}</td>
                                    <td>{apuestas.resultado}</td>
                                    <td>{apuestas.fecha}</td>
                                </tr>)

                            })
                        }
                    </tbody>


                </table>
            </div>
        )
    }
}
