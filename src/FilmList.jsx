import React from 'react';
import FilmCard from './FilmCard';

class FilmList extends React.Component {

    handleTorlesClick = (id) => {
        const { torlesClick } = this.props;
        if (torlesClick) {
            torlesClick(id)
        }
    }

    handleModositClick = (film) => {
        const { modositClick } = this.props;
        if (modositClick) {
            modositClick(film)
        }
    }

    render() {
        const { filmek } = this.props;
        const cardList = [];
        filmek.forEach(film => {
            cardList.push(<FilmCard torlesClick={this.handleTorlesClick} modositClick={this.handleModositClick} key={film.id} film={film} />);
        });

        return (
            <div className="row gy-3">
                {cardList}
            </div>
        );
    }
}

export default FilmList;