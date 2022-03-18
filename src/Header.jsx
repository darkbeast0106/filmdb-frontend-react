import React, { Component } from 'react';
class Header extends Component {
    render() {
        const { form_id } = this.props;
        return (<header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <span className="navbar-brand">FilmDb</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href={"#" + form_id}>Film hozzáadása</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>);
    }
}

export default Header;