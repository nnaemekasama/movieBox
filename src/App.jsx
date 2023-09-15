import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieDetails from "./page/movieDetails/MovieDetails"
import Home from "./page/Home"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
