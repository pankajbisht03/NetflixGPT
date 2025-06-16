
import {useEffect} from "react";
import {useDispatch} from "react-redux"
import {addPopularShows} from "../utils/moviesSlice"
import {API_OPTIONS} from "../utils/constants"

function usePopularShows(){
    const dispatch = useDispatch()
    async function fetchPopularShows(){
        const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        console.log(json, "shows")
        dispatch(addPopularShows(json?.results))
    }
    useEffect(() => {
        fetchPopularShows()
    },[])
}
export default usePopularShows