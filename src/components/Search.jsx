import React, { useRef } from 'react';

export const Search = ({fn}) => {
  const artist=useRef();
  return (
    <div>
        <label>Artist Name</label>
        <input ref={artist} type='text' className='form-control' placeholder='Search Artist Songs'/>
        <button className='btn btn-success' onClick={()=>{
          fn(artist.current.value);
          }}>Search</button>
    </div>
    
   
    
  )
};
