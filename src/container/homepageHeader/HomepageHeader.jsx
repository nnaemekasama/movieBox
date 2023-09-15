import React, { useEffect, useState } from "react"
import "./HomepageHeader.css"
import Header from "../../components/header/Header"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"

const HomepageHeader = () => {
  const [movieData, setMovieData] = useState([])
  const [movieBackground, setMovieBackground] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
        )
        if (!res.ok) throw new Error("Something went wrong!")
        const { results } = await res.json()
        const randomMovie = results[Math.floor(Math.random() * results.length)]
        setIsLoading(false)
        setMovieData(randomMovie)

        setMovieBackground(
          `https://image.tmdb.org/t/p/original${
            randomMovie.poster_path
          }?t=${Date.now()}`
        )
      } catch (error) {
        setIsLoading(false)
        setError(error?.error)
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
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message message={error} />
      ) : (
        <div style={backgroundStyle} className="homepage-header-section">
          <Header
            imbdRating={movieData.vote_average}
            movieTitle={movieData.title}
            overview={movieData.overview}
          />
        </div>
      )}
    </section>
  )
}

export default HomepageHeader
