import MoviesCard from "./MoviesCard"
function MoviesList({ title, movies }) {
    return (
        movies && (<div className="px-6 py-4">
            <h1 className="text-lg font-bold md:font-normal md:text-3xl text-white py-4">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies?.map((mov) => (
                        <MoviesCard key={mov.id} title={"Now Playing"} posterImg={mov.poster_path} movies={movies} />
                    ))}
                </div>
            </div>
        </div>
        )
    )
}
export default MoviesList