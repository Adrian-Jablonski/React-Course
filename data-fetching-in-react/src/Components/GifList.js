import React from 'react';
import Gif from './Gif';

const GifList = ({data}) => { 
  
  let gifs = data.map(gif => 
      <Gif
        key={gif.id}
        url={gif.images.fixed_height.url}
      ></Gif>
    )

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
