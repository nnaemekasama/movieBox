import React from "react"
import "./Header.css"
import Search from "../search/Search"
import { Link } from "react-router-dom"

const Header = ({ movieTitle, imbdRating, overview }) => {
  return (
    <div className="header-wrapper paddings  innerWidth">
      <div className="flexSB navbar-container">
        <Link className="navbar-logo" to="/">
          <img src="./tv.svg" alt="" width={40} height={40} />
          <p>MovieBox</p>
        </Link>

        <Search />
        <div className="flexSB navbar-menu">
          <p>Sign in</p>
          <div className="flexCenter nav-btn">
            <img src="./Ellipse.svg" alt="" width={30} height={30} />
            <img src="./Icon.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="flexColStart heading">
        <h2>{movieTitle}</h2>
        <div className="flexCenter heading-ratings">
          <div className="flexSB">
            <img src="./Imbd.svg" alt="" />
            <p className="whiteText">{Number(imbdRating).toFixed(1)}</p>
          </div>
          <div className="flexSB">
            <img src="./Rottentom.svg" alt="" />
            <p className="whiteText">97%</p>
          </div>
        </div>
        <p>{overview}</p>
        <button className="flexCenter button play-btn">
          <img src="./Play.svg" alt="" />
          <p>Watch Trailer</p>
        </button>
      </div>
    </div>
  )
}

export default Header
