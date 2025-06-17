function MovieTitle ({title, overview}) {
    return (
        <div className="w-screen py-36 px-12 py-[20%] absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="w-1/4 py-6">{overview}</p>
            <div>
                <button className="bg-white text-black px-8 h-14 text-xl rounded-lg hover:bg-opacity-80">Play ▶</button>
                <button className="mx-2 bg-gray-500 text-white  h-14 px-8 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">More Info</button>
            </div>
        </div>
    )
}
export default MovieTitle