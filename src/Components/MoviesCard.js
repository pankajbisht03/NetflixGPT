import {IMG_PATH_URL} from "../utils/constants"
function MoviesCard ({title, posterImg}) {
    return (
        <div className="w-48 pr-4">
                <img src={IMG_PATH_URL+posterImg} alt="poster"/>
        </div>
    )
}
export default MoviesCard