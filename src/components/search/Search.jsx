import React from "react"
import "./Search.css"
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const [query, setQuery] = useState("")

  const navigate = useNavigate()

  const handleSearch = async () => {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
      )
      if (!res.ok) throw new Error("Something went wrong")
      const data = await res.json()
      navigate(`/search/${query}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flexSB search-bar">
      <input
        type="search"
        placeholder="What do you want to watch?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <AiOutlineSearch onClick={handleSearch} />
    </div>
  )
}

export default Search
