import {useEffect} from "react";
import {useDispatch,} from "react-redux"
import {addPopularMovies } from "../utils/moviesSlice"
import {API_OPTIONS} from "../utils/constants"

function usePoularMovies () {
    const dispatch = useDispatch();
    async function fetchPopularMovies() {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json, "popular")
        dispatch(addPopularMovies(json?.results))

    }
    useEffect(() => {
        fetchPopularMovies()
    }, [])
}

export default usePoularMovies