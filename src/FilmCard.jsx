import React from "react";

class FilmCard extends React.Component {
  render() {
    const { film, torlesClick, modositClick } = this.props;

    return (
      <div className="col-sm-6 cold-md-4 col-lg-3 FilmCard">
        <div className="card h-100 FilmCard-card">
          <div className="card-header text-truncate FilmCard-card-header">
            {film.cim}
          </div>
          <div className="card-body FilmCard-card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><span className="font-weight-bold">Kategória: </span>{film.kategoria}</li>
              <li className="list-group-item"><span className="font-weight-bold">Hossz: </span>{film.hossz}</li>
              <li className="list-group-item"><span className="font-weight-bold">Ertekeles: </span>{film.ertekeles}</li>
            </ul>
          </div>
          <div className="card-footer">
            <div className="row">
              <button onClick={() => torlesClick(film.id)} className="btn btn-danger col-6">Törlés</button>
              <button onClick={() => modositClick(film)} className="btn btn-warning col-6">Módosítás</button>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default FilmCard;