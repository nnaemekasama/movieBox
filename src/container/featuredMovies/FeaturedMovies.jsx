import React, { useEffect, useState } from "react"
import "./FeaturedMovies.css"
import Card from "../../components/card/Card"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`
        )
        if (!res.ok) throw new Error("Something went wrong!")
        const { results } = await res.json()
        setIsLoading(false)
        setMovies(results)
      } catch (error) {
        setIsLoading(false)
        setError(error?.error)
      }
    }
    fetchFeatured()
  }, [])
  const featuredMovies = movies.slice(0, 10)

  return (
    <section className="featured-section">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message message={error} />
      ) : (
        <div className="paddings innerWidth featured-container">
          <div className="flexSB featured-header">
            <p>Featured Movies</p>
            <a href="">See more {">"} </a>
          </div>

          <div className="featured-list">
            {featuredMovies.map((movie, i) => (
              <Card
                key={i}
                movie={movie}
                imbd={`./Imbd.svg`}
                rt={`./Rottentom.svg`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default FeaturedMovies
