import React, { Component } from 'react';
import FilmForm from './FilmForm';
import FilmList from './FilmList';
import Header from './Header';

class FilmApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleFormClick = () => {

    }

    render() {
        const form_id = "filmForm";
        return (<div>
            <Header form_id={form_id} />
            <div className="container">
                <FilmList />
                <FilmForm form_id={form_id} buttonClick={this.handleFormClick} />
            </div>
        </div>);
    }
}

export default FilmApp;