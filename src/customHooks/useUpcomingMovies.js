import {useEffect} from "react";
import {useDispatch} from "react-redux"
import {addUpcomingMovies} from "../utils/moviesSlice"
const { API_OPTIONS } = require("../utils/constants");

function useUpcomingMovies(){
    const dispatch = useDispatch()
    async function fetchUpcomingMovies(){
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results))
    }
    useEffect(() => {
        fetchUpcomingMovies()


    },[])
}
export default useUpcomingMovies