import React from 'react'

export const Player = ({fn,song}) => {
  console.log('song object',song);
  return (
    <div>
       
      <button  onClick={()=>{
        fn(false,null);
        }}className='btn btn-success'>Back to songs</button>
         <br/>
         <br/>
       
      <div className='songInfo'>
        <img src={song.artworkUrl100} alt="Album" />
        <br />
        <h4>{song?.trackName}</h4>
        <h6>{song?.artistName} </h6>
       
      </div>
      <br />
      <br />
      <audio controls>
      <source src={song?.previewUrl} type='audio/mp4'/>
      your browser does not support the audio element
    </audio>
    </div>
    
  )
}
