import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="flexColCenter paddings innerWidth footer-container">
        <div className="flexCenter social-icons">
          <i className="fa-brands fa-square-facebook fa-lg"></i>
          <i className="fa-brands fa-square-instagram fa-lg"></i>
          <i className="fa-brands fa-square-x-twitter fa-lg"></i>
          <i className="fa-brands fa-youtube fa-lg"></i>
        </div>
        <div className="flexCenter ">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <p className="flexCenter footer-text">
          &copy; 2023 movieBox by Nnaemeka Nnodim
        </p>
      </div>
    </section>
  )
}

export default Footer
