import React, { Component } from 'react';
import FilmFormInput from './FilmFormInput';

class FilmForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cim: "",
            kategoria: "",
            hossz: "",
            ertekeles: "",
            errors : "",
        };
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

    buttonClick = () => {
        const { cim, kategoria, hossz, ertekeles } = this.state;
        if (cim.trim().length === 0 || kategoria.trim().length === 0 || hossz.trim().length === 0 || ertekeles.trim().length === 0) {
            this.setState({errors: "Minden mező kitöltése kötelező."})
            return;
        }
        if (hossz < 30 || hossz > 500) {
            this.setState({errors: "A hossznak 30 és 500 közé kell esnie"})
            return;
        }
        if (ertekeles < 1 || ertekeles > 10) {
            this.setState({errors: "Az értékelésnek 1 és 10 közé kell esnie"})
            return;
        }
        const film = {
            cim: cim,
            kategoria: kategoria,
            hossz: hossz,
            ertekeles: ertekeles
        };
        fetch(`http://localhost:8000/api/film`, {
            method: "POST",
            body: JSON.stringify(film)
        }).then(async response => {
            if (response.status === 201) {
                //Statelifting kell
            } else {
                this.setState({
                    errors: response.json.data.message
                })
            }
        })
    }

    render() {
        const { form_id } = this.props;
        const { cim, kategoria, hossz, ertekeles, errors } = this.state;
        const errorAlert = (<div class="alert alert-danger alert-dismissible fade show" role="alert">
        {errors}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>);
        return (<section className='mt-5'>
            <form id={form_id}>
                <h1>Film hozzáadása</h1>
                {errors !== "" ? errorAlert : ""}
                <FilmFormInput id="cim_input" placeholder="Cím" value={cim} onInput={this.handleCimInput} />
                <FilmFormInput id="kategoria_input" placeholder="Kategória" value={kategoria} onInput={this.handleKategoriaInput} />
                <FilmFormInput id="hossz_input" placeholder="Hossz" type="number" otherAttributes={{ min: 30, max: 500 }} 
                    value={hossz} onInput={this.handleHosszInput} />
                <FilmFormInput id="ertekeles_input" placeholder="Értékelés" type="number" otherAttributes={{ min: 1, max: 10 }} 
                    value={ertekeles} onInput={this.handleErtekelesInput} />
                <button type='button' className="btn btn-primary" onClick={this.buttonClick}>Felvétel</button>
            </form>
        </section>);
    }
}

export default FilmForm;