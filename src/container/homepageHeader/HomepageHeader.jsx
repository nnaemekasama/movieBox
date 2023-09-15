import React, { useEffect, useState } from "react"
import "./HomepageHeader.css"
import Header from "../../components/header/Header"
import FeaturedMovies from "../featuredMovies/FeaturedMovies"

const HomepageHeader = () => {
  const [movieData, setMovieData] = useState([])
  const [movieBackground, setMovieBackground] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        )
        if (!res.ok) throw new Error("Something went wrong!")
        const { results } = await res.json()
        const randomMovie = results[Math.floor(Math.random() * results.length)]
        setMovieData(randomMovie)

        setMovieBackground(
          `https://image.tmdb.org/t/p/original${
            randomMovie.poster_path
          }?t=${Date.now()}`
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovie()
    // const atInterval = setInterval(fetchMovie, 5000)
    // return () => clearInterval(atInterval)
  }, [])

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.734), rgba(0, 0, 0, 0.5)), url(${movieBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    transition: "background-image 2s",
  }

  return (
    <section className="homepage-header">
      <div style={backgroundStyle} className="homepage-header-wrapper">
        <Header
          imbdRating={movieData.vote_average}
          movieTitle={movieData.title}
          overview={movieData.overview}
        />
      </div>
    </section>
  )
}

export default HomepageHeader
