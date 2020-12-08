import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css';


function Banner() {
   const [movie, setMovies] = useState([]);
   

   useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
    
            setMovies(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
        }
        fetchData()
   }, []);

 function truncate(str, n) {
       return str?.length > n ? str.substring(0, n - 1) + '...' : str;
   }

  
   return movie === undefined ? <Error/> : <View movie={movie} truncate={truncate}/>


    
}

const Error = () => {
    return (
        <header 
        className="banner"
        style={{
            backgroundSize: "cover",
            background: '#111',
            backgroundPosition: "center center" 
        }}
    >
         <div className="banner__contents">
                <h1 className="banner__title">Страница не найдена</h1>
               
            </div>
        <div className="banner--fadeBotton"></div>
    </header>
    )
}

const View = ({movie, truncate}) => {
    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage:  `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center" 
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150) }
                </h1>
            </div>
            <div className="banner--fadeBotton"></div>
        </header>
    )
}

export default Banner;
