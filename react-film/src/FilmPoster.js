import React from 'react';

const FilmPoster = (props) => {
  const {posterUrl} = props;
  
  return (
    <img src={posterUrl} alt="" />
  );
}

export default FilmPoster;