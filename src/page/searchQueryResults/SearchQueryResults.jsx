import React, { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/card/Card"
import "./SearchQueryResults.css"

const SearchQueryResults = () => {
  const { query } = useParams()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
        )
        if (!res.ok) throw new Error("Something went wrong")
        const data = await res.json()
        setSearchResults(data.results)
        console.log(searchResults)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [query])

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      <div className="search-results">
        {searchResults.map((movie, i) => (
          <Card
            key={i}
            movie={movie}
            imbd={`/Imbd.svg`}
            rt={`/Rottentom.svg`}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchQueryResults
