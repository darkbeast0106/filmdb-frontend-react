import React from 'react';
import FilmCard from './FilmCard';

class FilmList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filmek: []
        }
    }
    
    componentDidMount() {
        this.getFilmek();
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

    render() { 
        const {filmek} = this.state;
        const cardList = [];
        filmek.forEach(film => {
            cardList.push(<FilmCard torlesClick={this.handleTorlesClick} key={film.id} film={film} />);
        });

        return (
            <div className="row gy-3">
                {cardList}
            </div>
        );
    }
    
    async getFilmek() {
        fetch("http://localhost:8000/api/film")
        .then(response => response.json())
        .then(data => this.setState({
            filmek: data
        }));
    }
}
 
export default FilmList;