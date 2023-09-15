import React from "react"
import "./Search.css"
import { AiOutlineSearch } from "react-icons/ai"

const Search = () => {
  return (
    <div className="flexSB search-bar">
      <input type="search" placeholder="What do you want to watch?" />
      <AiOutlineSearch />
    </div>
  )
}

export default Search
