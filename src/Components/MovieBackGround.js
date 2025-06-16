import {useSelector} from "react-redux"
import useFetchTrailer from "../customHooks/useFetchTrailer";

function MovieBackground({ movieId }) {
    const movieTrailer = useSelector(store => store?.movies?.movieTrailer)
    useFetchTrailer(movieId)
    return (
        <div className="w-screen">
            <iframe 
            className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                >

            </iframe>

        </div>
    )
}
export default MovieBackground