import React, { Component } from 'react';
import FilmForm from './FilmForm';
import FilmList from './FilmList';
import Header from './Header';

class FilmApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmek: [],
            modositando: 0,
            cim: "",
            kategoria: "",
            hossz: "",
            ertekeles: "",
            errors: "",
        };
    }
    componentDidMount() {
        this.getFilmek();
    }
    handleCimInput = (value) => {
        this.setState({
            cim: value,
        })
    }
    handleKategoriaInput = (value) => {
        this.setState({
            kategoria: value,
        })
    }
    handleHosszInput = (value) => {
        this.setState({
            hossz: value,
        })
    }
    handleErtekelesInput = (value) => {
        this.setState({
            ertekeles: value,
        })
    }

    handleTorlesClick = (id) => {
        fetch(`http://localhost:8000/api/film/${id}`, {
            method: "DELETE"
        }).then(async response => {
            if (response.status === 204) {
                /*
                const {filmek} = this.state;
                const ujfilmek = filmek.filter(film => film.id !== id);
                this.setState({filmek: ujfilmek});
                */
                this.getFilmek();
            }
        })
    }

    handleModositClick = (film) => {
        this.setState({
            modositando: film.id,
            cim: film.cim,
            kategoria: film.kategoria,
            hossz: film.hossz,
            ertekeles: film.ertekeles,
        })
    }

    async ujFilm() {
        const { cim, kategoria, hossz, ertekeles } = this.state;
        const film = {
            cim: cim,
            kategoria: kategoria,
            hossz: hossz,
            ertekeles: ertekeles
        };
        fetch(`http://localhost:8000/api/film`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(film)
        }).then(async response => {
            const data = await response.json();
            if (response.status === 201) {
                this.setState({
                    cim: "",
                    kategoria: "",
                    hossz: "",
                    ertekeles: "",
                    errors: "",
                })
                this.getFilmek();

            } else {
                console.log();
                this.setState({
                    errors: data.message
                })
            }
        });
    }

    async filmModosit() {
        const { modositando, cim, kategoria, hossz, ertekeles } = this.state;
        const film = {
            cim: cim,
            kategoria: kategoria,
            hossz: hossz,
            ertekeles: ertekeles
        };
        fetch(`http://localhost:8000/api/film/${modositando}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(film)
        }).then(async response => {
            const data = await response.json();
            if (response.status === 200) {
                this.setState({
                    modositando: 0,
                    cim: "",
                    kategoria: "",
                    hossz: "",
                    ertekeles: "",
                    errors: "",
                })
                this.getFilmek();

            } else {
                console.log();
                this.setState({
                    errors: data.message
                })
            }
        });
    }


    handleFormClick = () => {
        const { modositando } = this.state;
        if (modositando === 0) {
            this.ujFilm();
        } else {
            this.filmModosit();
        }
    }

    async getFilmek() {
        fetch("http://localhost:8000/api/film")
            .then(response => response.json())
            .then(data => this.setState({
                filmek: data
            }));
    }


    render() {
        const form_id = "filmForm";
        const { modositando, cim, kategoria, hossz, ertekeles, errors, filmek } = this.state;
        const formState = {
            cim: cim,
            kategoria: kategoria,
            hossz: hossz,
            ertekeles: ertekeles,
            errors: errors,
        };
        let formTitle = "Film hozzáadása";
        let buttonClass = "btn btn-primary";
        let buttonText = "Felvétel";
        if (modositando !== 0) {
            formTitle = "Film módosítása";
            buttonClass = "btn btn-warning";
            buttonText = "Módosítás";
        }
        return (<div>
            <Header form_id={form_id} />
            <div className="container mt-3 mb-3">
                <FilmList filmek={filmek} torlesClick={this.handleTorlesClick} modositClick={this.handleModositClick} />
                <FilmForm form_id={form_id} buttonClick={this.handleFormClick}
                    onCimInput={this.handleCimInput}
                    onKategoriaInput={this.handleKategoriaInput}
                    onHosszInput={this.handleHosszInput}
                    onErtekelesInput={this.handleErtekelesInput}
                    formState={formState}
                    formTitle={formTitle}
                    buttonClass={buttonClass}
                    buttonText={buttonText}
                />
            </div>
        </div>);
    }
}

export default FilmApp;