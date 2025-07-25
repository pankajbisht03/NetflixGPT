import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";
function GptMovieSuggestion({ loading }) {
    const { movieNames, tmdbResults } = useSelector(store => store.gpt);
    if (!movieNames) return null
    return (
        <div className="p-4 mt-12  bg-black text-white bg-opacity-80">
            {movieNames.map((movie, ind) => (
                <div>
                    <MoviesList title={movie} movies={tmdbResults[ind]} loading={loading} />
                </div>

            ))}

        </div>
    )
}
export default GptMovieSuggestion