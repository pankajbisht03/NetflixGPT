import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {addPopularMovies } from "../utils/moviesSlice"
import {API_OPTIONS} from "../utils/constants"

function usePoularMovies () {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.popularMovies)
    async function fetchPopularMovies() {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results))
    }
    useEffect(() => {
        !popularMovies && fetchPopularMovies()
    }, [])
}

export default usePoularMovies