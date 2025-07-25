function MovieTitle ({title, overview}) {
    return (
        <div className="w-screen aspect-video px-6 py-36 md:px-12 py-[20%] absolute text-white bg-gradient-to-r from-black">
            <div className="my-16 md:my-0">
            <h1 className="2xl md:text-4xl font-bold">{title}</h1>
            <p className="hidden md:inline-block w-1/4 py-6">{overview}</p>
            <div className="my-4 md:my-0">
                <button className="bg-white text-black py-1 md:my-0 md:py-4 px-3 md:px-8 md:h-14 text-xl rounded-lg hover:bg-opacity-80">Play ▶</button>
                <button className="hidden md:inline-block mx-2 bg-gray-500 text-white  h-14 px-8 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">More Info</button>
            </div>
            </div>
        </div>
    )
}
export default MovieTitle