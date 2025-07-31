import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {addUpcomingMovies} from "../utils/moviesSlice"
const { API_OPTIONS } = require("../utils/constants");

function useUpcomingMovies(){
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.upComingMovies)

    async function fetchUpcomingMovies(){
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results))
    }
    useEffect(() => {
       !upComingMovies && fetchUpcomingMovies()

    },[])
}
export default useUpcomingMovies