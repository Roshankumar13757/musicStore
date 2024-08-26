import React, { useEffect, useState } from 'react';
import { Search } from '../components/Search';
import { Songs } from '../components/Songs';
import { getSongs } from '../services/api-client';
import{ Player} from '../components/Player'

export  const SearchPage = () => {
  const [allsongs,setSongs]=useState([]);
  //component life cycle
  const [flag,setFlag]=useState(false);
  const [song,setPlayerSong]=useState(null);
  
  const loadSongs=async()=>{
    setSongs(await getSongs('Latest Songs'));
  }
  useEffect(()=>{
    loadSongs();
  },[])
  const togglePlayer=(flag,songarg)=>{
    console.log("flag",flag,'song object',songarg);
    // setPlayerSong(songarg);
    console.log(songarg);
    setPlayerSong(songarg);
    setFlag(flag);
  }
  const getArtistName=async (artistName)=>{
    console.log('Rec Artist Name',artistName);
     setSongs(await getSongs(artistName));
  }
  const jsx=<>
        <Search fn={getArtistName}/>
        <Songs fn={togglePlayer} allsongs={allsongs}/>
      </>
  return (
    <div className='container'>
        <h1 className='alert alert-info text-center '>Music Store</h1>
        
      {flag?<Player fn={togglePlayer} song={song}/>:jsx}
        
    </div>
    
  )
}
