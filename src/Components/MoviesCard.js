import {IMG_PATH_URL} from "../utils/constants"
import {useDispatch, useSelector} from "react-redux"
function MoviesCard ({title, posterImg, movies}) {
        // dispatch(addMovieTrailer())
    // const filteredTrailerVideo = json.results.filter(video => video.type === "Trailer");
    // const trailer = filteredTrailerVideo.length ? filteredTrailerVideo[0] : json?.results[0];
    // dispatch(addMovieTrailer(trailer))
    if(!posterImg) return
    return (
        <div className="w-36 md:w-48 pr-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110">
                <img loading="lazy" src={IMG_PATH_URL+posterImg} alt="poster"/>
        </div>
    )
}
export default MoviesCard