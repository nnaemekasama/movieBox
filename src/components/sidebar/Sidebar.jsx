import React from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom"
export function Sidebar({}) {
  return (
    <div className="sidebar">
      <div className="flexColCenter sidebar-container">
        <Link className="flexStart navbar-logo sidebar-logo" to="/">
          <img src="/tv.svg" alt="" width={36} />
          <h3>MovieBox</h3>
        </Link>
        <nav className="sidebar-nav">
          <div className="flexStart">
            <img src="/Home.svg" alt="" width={30} />
            <p>Home</p>
          </div>
          <div className="flexStart">
            <img src="/Movie Projector.svg" alt="" width={30} />
            <p>Movies</p>
          </div>
          <div className="flexStart">
            <img src="/TV Show.svg" alt="" width={30} />
            <p>Tv Series</p>
          </div>
          <div className="flexStart">
            <img src="/Calendar.svg" alt="" width={30} />
            <p>Upcoming</p>
          </div>
        </nav>
        <div className="flexColCenter sidebar-box">
          <p>Play movie quizes and earn free tickets</p>
          <p>50k people are playing now</p>
          <div className="start-playing">
            <p>Start Playing</p>
          </div>
        </div>
        <div className="flexSB">
          <img src="/Logout.svg" alt="" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}
