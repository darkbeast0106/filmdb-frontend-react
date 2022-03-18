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
            errors: "",
        };
    }
    handleCimInput = (value) => {
        const { onCimInput } = this.props;
        if (onCimInput) {
            onCimInput(value)
        }
    }
    handleKategoriaInput = (value) => {
        const { onKategoriaInput } = this.props;
        if (onKategoriaInput) {
            onKategoriaInput(value)
        }
    }
    handleHosszInput = (value) => {
        const { onHosszInput } = this.props;
        if (onHosszInput) {
            onHosszInput(value)
        }
    }
    handleErtekelesInput = (value) => {
        const { onErtekelesInput } = this.props;
        if (onErtekelesInput) {
            onErtekelesInput(value)
        }
    }

    buttonClick = () => {
        const { buttonClick } = this.props;
        if (buttonClick) {
            buttonClick();
        }
    }

    render() {
        const { form_id, formState, buttonText, buttonClass, formTitle } = this.props;
        const errorAlert = (<div className="alert alert-danger alert-dismissible fade show" role="alert">
            {formState.errors}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>);
        return (<section className='mt-5'>
            <form id={form_id}>
                <h1>{formTitle}</h1>
                {formState.errors !== "" ? errorAlert : ""}
                <FilmFormInput id="cim_input" placeholder="Cím" value={formState.cim} onInput={this.handleCimInput} />
                <FilmFormInput id="kategoria_input" placeholder="Kategória" value={formState.kategoria} onInput={this.handleKategoriaInput} />
                <FilmFormInput id="hossz_input" placeholder="Hossz" type="number" otherAttributes={{ min: 30, max: 999 }}
                    value={formState.hossz} onInput={this.handleHosszInput} />
                <FilmFormInput id="ertekeles_input" placeholder="Értékelés" type="number" otherAttributes={{ min: 1, max: 10 }}
                    value={formState.ertekeles} onInput={this.handleErtekelesInput} />
                <div className="d-grid"><button type='button' className={buttonClass} onClick={this.buttonClick}>{buttonText}</button></div>
            </form>
        </section>);
    }
}

export default FilmForm;