import React, { Component } from 'react'
import axios from 'axios'

export default class Weather extends Component {

    state = {
        ciudad: "",
        weather: {
            main: {
                temp: 273.15
            }
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getWeather = async () => {
        if (this.state.ciudad != "") {
            const response = await axios.get('https://localhost:7253/WeatherExternalAPI?city=' + this.state.ciudad)
            this.setState({
                weather: response.data
            });
        } else {
            alert("¡El nombre de la ciudad es requerido!");
        }
    }

    render() {
        return (
            <div className="card m-3">
                <div className="card-header d-flex justify-content-between">
                    <h5>Clima</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite la ciudad de interés"
                            name="ciudad"
                            onChange={this.onInputChange}
                            value={this.state.ciudad}
                            required />
                    </div>
                    <div className="row">
                        <div className='col btn btn-danger m-3' onClick={this.getWeather}>Consultar</div>
                    </div>
                    <hr className='border border-secondary' />
                    <p>
                        <b>Temperatura promedio de {Number.parseFloat(this.state.weather.main.temp - 273.15).toFixed(2)}°</b>
                    </p>
                </div>
            </div>
        )
    }
}
