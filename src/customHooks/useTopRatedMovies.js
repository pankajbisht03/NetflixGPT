import {useEffect} from "react";
import {useDispatch} from "react-redux"
import {addTopRatedMovies} from "../utils/moviesSlice"
const { API_OPTIONS } = require("../utils/constants");

function useTopRatedMovies(){
    const dispatch = useDispatch()
    async function fethTopRatedMovies(){
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results))
    }
    useEffect(() => {
        fethTopRatedMovies()


    },[])
}
export default useTopRatedMovies