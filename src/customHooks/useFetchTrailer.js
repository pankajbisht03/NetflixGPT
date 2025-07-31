import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {addMovieTrailer } from "../utils/moviesSlice"
import {API_OPTIONS} from "../utils/constants"

function useFetchTrailer (movieId) {
    const dispatch = useDispatch();
    const movieTrailer = useSelector(store => store.movieTrailer)
    async function fetchTrailerVideo() {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId +'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filteredTrailerVideo = json.results.filter(video => video.type === "Trailer");
        const trailer = filteredTrailerVideo.length ? filteredTrailerVideo[0] : json?.results[0];
        dispatch(addMovieTrailer(trailer))

    }
    useEffect(() => {
        !movieTrailer &&  fetchTrailerVideo()
    }, [])
}

export default useFetchTrailer