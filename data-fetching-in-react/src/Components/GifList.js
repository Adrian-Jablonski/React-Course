import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = ({ data }) => {

  let gifs;
  if (data.length > 0) {
    gifs = data.map(gif =>
      <Gif
        key={gif.id}
        url={gif.images.fixed_height.url}
      ></Gif>
    )
  } else {
    gifs = <NoGifs></NoGifs>
  }


  return (
    <ul className="gif-list">
      {gifs}
    </ul>
  );
}

export default GifList;
