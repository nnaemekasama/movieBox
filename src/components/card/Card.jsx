import React, { useEffect, useState } from "react"
import "./Card.css"
import { AiFillHeart } from "react-icons/ai"
import { Link } from "react-router-dom"

const Card = ({ movie }) => {
  const [isclicked, setIsClicked] = useState(false)

  const clicked = () => {
    setIsClicked(!isclicked)
  }
  return (
    <div className="movie-card" data-testid="movie-card">
      <div className="card-image-container">
        <AiFillHeart
          onClick={clicked}
          size={35}
          className={`card-heart ${isclicked ? "heart-fav" : ""}`}
        />
        <img
          data-testid="movie-poster"
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          height={370}
        />
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/movie/${movie.id}`}
        className="card-body"
      >
        <p data-testid="movie-release-date" className="card-text">
          {movie.release_date}
        </p>
        <p className="card-movie-title" data-testid="movie-title">
          {movie.title}
        </p>
        <div className="flexSB card-movie-rating">
          <div className="flexStart">
            <img src="./Imbd.svg" alt="" width={35} />
            <p>{movie.vote_average} / 10</p>
          </div>
          <div className="flexStart">
            <img src="./Rottentom.svg" alt="" width={16} />
            <p>97%</p>
          </div>
        </div>

        <Genre genreId={movie.genre_ids} />
      </Link>
    </div>
  )
}

export default Card

export const Genre = ({ genreId }) => {
  const [movieGenres, setMovieGenres] = useState([])

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        )
        if (!res.ok) throw new Error("Something went wrong!")
        const { genres } = await res.json()

        const genreObj = Object.fromEntries(
          genres.map((genre) => [genre.id, genre.name])
        )

        const filmGenres = genreId.map((id) => genreObj[id])
        setMovieGenres(filmGenres)
      } catch (error) {
        console.log(error)
      }
    }
    fetchGenre()
  }, [])

  return <p className="card-text">{movieGenres?.join(", ")}</p>
}
