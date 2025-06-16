import {useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header"
function Browse (){
    const [movies, setMovies] = useState([])
    // Using TMDB apis for fetching movies;
    const fetchNowPlayingMovies = async() => {
        const data =await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        setMovies(json)
        console.log(json);
        //🚀 NOTE - console.log will be printed twice due to strict mode it basically checks if there is inconsitency while rendering.
        //🚀 This happens only in strict mode and in development environment.
    }

    useEffect(() => {
        fetchNowPlayingMovies()
    },[])

    return (<div>
        <Header/>
        Browse Page
    </div>)
}
export default Browse