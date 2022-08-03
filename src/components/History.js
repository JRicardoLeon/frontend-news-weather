import React, { Component } from 'react'
import axios from 'axios'

export default class History extends Component {

    state = {
        histories: []
    }

    getHistory = async () => {
        const response = await axios.get('https://localhost:7253/HistoryAPI')
        this.setState({
            histories: response.data
        });
    }

    render() {
        return (
            <div className="card m-3">
                <div className="card-header d-flex justify-content-between">
                    <h5>Historial</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className='col btn btn-danger m-3' onClick={this.getHistory}>Consultar</div>
                    </div>
                    <hr className='border border-secondary' />
                    <div className="row">
                        <div className='container'>
                            <div className="row">
                                {
                                    this.state.histories.map((history, index) => (
                                        <div className="col-md-4 p-2" key={index}>
                                            <div className="card">
                                                <div className="card-header d-flex justify-content-between">
                                                    <h5>{history.city}</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <p>Temp. {Number.parseFloat(JSON.parse(history.info.weather).main.temp - 273.15).toFixed(2)}°</p>
                                                    </div>
                                                    <hr className='border border-secondary' />
                                                    <div className="row">
                                                        {
                                                            JSON.parse(history.info.news).articles.map((article, index) => (
                                                                <div className="col" key={index}>
                                                                    <div className="card">
                                                                        <div className="card-header d-flex justify-content-between">
                                                                            <h5>{article.title}</h5>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <img className="mw-100" src={article.urlToImage}></img>
                                                                            <p>
                                                                                {article.description}
                                                                            </p>
                                                                            <p>
                                                                                <b>Author: {article.author}</b>
                                                                            </p>
                                                                            <p>
                                                                                Fecha: {article.publishedAt}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
