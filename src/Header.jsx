import React, { Component } from 'react';
class Header extends Component {
    render() {
        const { form_id } = this.props;
        return (<header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">FilmDb</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href={"#" + form_id}>Film hozzáadása</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>);
    }
}

export default Header;