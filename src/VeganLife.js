import React, { useEffect, useState } from "react"
import Recipe from "./Recipe"

const VeganLife = () => {
  const APP_ID = "4c975c1f"
  const APP_KEY = "ddb07ddb0664b9ae9a41ecb7fb23ef1d"
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("tofu")

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(resp => resp.json())
      .then(data => setRecipes(data.hits))
  }, [query])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    if (search) {
      setQuery(search)
    } else {
      alert("Search box is emtpy!")
    }
    setSearch("")
  }

  return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input placeholder="Search for more recipes"
                className="search-bar"
                type="text"
                value={search}
                onChange={handleSearch}/>
                <button className="search-button" type="submit">
                    Search
                    </button>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (

                <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                link={recipe.recipe.url}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}/>
            ))}
            </div>

        </div>
  )
}

export default VeganLife
