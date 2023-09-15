import React from "react"
import HomepageHeader from "../container/homepageHeader/HomepageHeader"
import FeaturedMovies from "../container/featuredMovies/FeaturedMovies"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <div>
      <HomepageHeader />
      <FeaturedMovies />
      <Footer />
    </div>
  )
}

export default Home
