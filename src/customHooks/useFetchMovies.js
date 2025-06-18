// using custom logic to fetch the nowPlayingMovies cause the main task for browse is to render the browse page and i abstracted that logic outside the component
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice";

function useFetchNowPlayingMovies() {
    const dispatch = useDispatch();
    //checking in redux if now playing movies is present or not;
    const nowPlayingMovies = useSelector(store => store.nowPlayingMovies)
    // Using TMDB apis for fetching movies;
    const fetchNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        // dispacthing an addNowPlayingMovies action for storing the movies redux store.
        dispatch(addNowPlayingMovies(json?.results));
        //🚀 NOTE - console.log will be printed twice due to strict mode it basically checks if there is inconsitency while rendering.
        //🚀 This happens only in strict mode and in development environment.
    }

    useEffect(() => {
        if(!nowPlayingMovies) fetchNowPlayingMovies()
    }, [])

}

export default useFetchNowPlayingMovies
