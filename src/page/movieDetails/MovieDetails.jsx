import React, { useEffect, useState } from "react"
import "./MovieDetails.css"
import { useParams } from "react-router-dom"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { Sidebar } from "../../components/sidebar/Sidebar"

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        )
        if (!res.ok) throw new Error("Something went wrong")
        const data = await res.json()
        setMovieDetail(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovieDetails()
  }, [id])

  return (
    <section className="movie-details-container">
      <Sidebar />
      {!movieDetail ? (
        <div>Loading</div>
      ) : (
        <div className=" details-container">
          <div className="details-image">
            <div className="flexColCenter watch-trailer-container">
              <div className="flexCenter trailer-play">
                <img src="/Ellipse 4.svg" alt="" />
                <img src="/watchtrailer.svg" alt="" />
              </div>
              <p>Watch Trailer</p>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
              alt=""
              className="img_backdrop"
            />
          </div>

          <div className="details-info">
            <div className="details-info-left">
              <div className="flexSB details-info-head">
                <p data-testid="movie-title">{movieDetail.title} .</p>
                <p data-testid="movie-release-date">
                  {movieDetail.release_date?.split("-")[0]} .
                </p>
                <p>{`${movieDetail.adult ? "Adult" : "PG-13"}`} .</p>
                <p>{movieDetail.runtime} mins .</p>

                {movieDetail?.genres
                  ?.map((obj) => obj?.name)
                  ?.map((e, i) => {
                    return (
                      <div className="genre" key={i}>
                        <p>{e}</p>
                      </div>
                    )
                  })}
              </div>
              <p
                data-testid="movie-overview"
                className="flexStart details-info-overview"
              >
                {movieDetail.overview}
              </p>
              <div className="flexColStart movie-directors">
                <p>
                  Director: <span> Movie Director</span>
                </p>
                <p>
                  Writers: <span>Jimmy Tarantino, Martin Sorerese</span>
                </p>
                <p>
                  Stars: <span>Tom cruise, Omar Little</span>
                </p>
              </div>
              <div className="movie-detail-top-rated">
                <button className="flexStart button">
                  Top rated movie #65
                </button>

                <button className="flexStart button">
                  <p>Awards 9 nominations</p>{" "}
                  <img src="/Expand.svg" alt="cal" height={10} width={30} />
                </button>
              </div>
            </div>
            <div className="details-info-right">
              <div className="rating-votes">
                <img src="/Star.svg" alt="" />
                <p>{`${Number(movieDetail.vote_average).toFixed(1)} | ${
                  movieDetail.vote_count
                }`}</p>
              </div>
              <div className="flexColStart info-right-buttons">
                <button className="button flexCenter two-tickets">
                  <img src="/Two Tickets.svg" alt="" width={30} height={15} />
                  <p>See showtimes</p>
                </button>
                <button className="button flexCenter more-options">
                  <img src="/List.svg" alt="" width={30} height={15} />
                  <p>More watch options</p>
                </button>
              </div>
              <div className="now-showing">
                <img src="/showingnow.svg" alt="" />
                <div className="flexCenter">
                  <AiOutlineUnorderedList color="white" width={30} />
                  <p>The Best Movies and Shows in September</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MovieDetails
