
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {addPopularShows} from "../utils/moviesSlice"
import {API_OPTIONS} from "../utils/constants"

function usePopularShows(){
    const dispatch = useDispatch()
    const popularShows = useSelector(store => store.popularShows)
    async function fetchPopularShows(){
        const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularShows(json?.results))
    }
    useEffect(() => {
       !popularShows &&  fetchPopularShows()
    },[])
}

export default usePopularShows