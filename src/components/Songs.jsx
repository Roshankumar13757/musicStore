import React from 'react';
import { Song } from './Song';

export const Songs = ({fn,allsongs}) => {
  console.log(allsongs); 
  //map(javaScript ka function hai)
  //allSongs(data)-->convert--->jsx
  return (<>

    {allsongs.map((currentSong,index)=><Song  fn = {fn} key={index} song={currentSong}/>)}
    
    </>
    
  )
}
