import React, { Component } from 'react'
import axios from 'axios'

export default class News extends Component {

    state = {
        ciudad: "",
        news: {
            articles: []
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getNews = async () => {
        if (this.state.ciudad != "") {
            const response = await axios.get('https://localhost:7253/NewsExternalAPI?city=' + this.state.ciudad)
            this.setState({
                news: response.data
            });
        } else {
            alert("¡El nombre de la ciudad es requerido!");
        }
    }

    render() {
        return (
            <div className="card m-3">
                <div className="card-header d-flex justify-content-between">
                    <h5>Noticias</h5>
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
                        <div className='col btn btn-danger m-3' onClick={this.getNews}>Consultar</div>
                    </div>
                    <hr className='border border-secondary' />
                    <div className="row">
                        <div className='container'>
                            <div className="row">
                                {
                                    this.state.news.articles.map((article, index) => (
                                        <div className="col-md-4 p-2" key={index}>
                                            <div className="card">
                                                <div id='historial'>
                                                <div className="card-header d-flex justify-content-between">
                                                    <h5>{article.title}</h5>
                                                </div>
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
            </div>
        )
    }
}
