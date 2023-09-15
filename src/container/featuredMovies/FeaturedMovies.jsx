import React, { useEffect, useState } from "react"
import "./FeaturedMovies.css"
import Card from "../../components/card/Card"

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
        )
        if (!res.ok) throw new Error("Something went wrong!")
        const { results } = await res.json()
        setMovies(results)
        console.log(movies)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFeatured()
  }, [])
  const featuredMovies = movies.slice(0, 10)
  console.log(featuredMovies)

  return (
    <section className="featured-section">
      <div className="paddings innerWidth featured-container">
        <div className="flexSB featured-header">
          <p>Featured Movies</p>
          <a href="">See more {">"} </a>
        </div>

        <div className="flexSB featured-list">
          {featuredMovies.map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovies
