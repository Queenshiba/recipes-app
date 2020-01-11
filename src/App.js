import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = process.env.REACT_APP_EDAMAM_API_ID;
  const APP_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }


  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }



  return (
    <div className="App">
      
      <link href="https://fonts.googleapis.com/css?family=Ibarra+Real+Nova&display=swap" rel="stylesheet"></link>

      <h1>Find your best recipes!</h1>

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" placeholder='Type here' type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            totaltime={recipe.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
