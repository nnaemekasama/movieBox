import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieDetails from "./page/movieDetails/MovieDetails"
import Home from "./page/Home"
import Footer from "./components/footer/Footer"
import SearchQueryResults from "./page/searchQueryResults/searchQueryResults"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
          <Route path="/search/:query" element={<SearchQueryResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
