import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  state = {
    filter: 'all',
  }

  handleFilterClick = (filtered) => {
    this.setState({
      filter: filtered
    })
  }

  render() {
    const allFilms = this.props.films.map( (film, index) => <FilmRow key={film.id} title={film.title} year={new Date(film.release_date).getFullYear()} poster={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} /> )

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;