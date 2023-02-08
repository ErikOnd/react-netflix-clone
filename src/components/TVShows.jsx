import MovieCarousel from "./MovieCarousel"



const TVShows = () => {

    return (
        <>
            <MovieCarousel carouselName="Harry Potter" query='harry%20potter'></MovieCarousel>
            <MovieCarousel carouselName="Game of Thrones" query='lord%20of%20the%20rings'></MovieCarousel>
            <MovieCarousel carouselName="Batman" query='batman' className="mb-5"></MovieCarousel>
        </>
    )
}

export default TVShows
