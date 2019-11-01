import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
  handleDetailsClick = () => {
    console.log('test');
  }

  render() {

    return (
        <div className="film-row" onClick={ this.handleDetailsClick }>
        <FilmPoster posterUrl={this.props.poster}/>
      
        <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p>{this.props.year}</p>
        </div>

        <Fave />
      </div>
    );
  }
}

export default FilmRow;