// pages/index.js
'use client';

import { useState } from 'react';
import RecipeCard from '../../../components/RecipeCard';
import React from 'react';

interface RecipeData {
  ingredients: string[];
  directions: string[];
  name: string;
  prepTime: string;
  cookTime: string;
  recipeYield: string;
}

export default function Home() {
  const [recipeUrl, setRecipeUrl] = useState('');
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors

    const res = await fetch(`http://127.0.0.1:5000/parse_url?url=${encodeURIComponent(recipeUrl)}`);
    const data = await res.json();
    
    console.log(data)
    if (data.ingredients && data.cooking_instructions) {
      const ingredientsArray= data.ingredients
      const directionsArray = JSON.parse(data.cooking_instructions)["cooking_instructions"];

   
      setRecipeData({
        ingredients: ingredientsArray,
        directions: directionsArray,
        name: data.name || '',
        prepTime: data.prep_time || '',
        cookTime: data.cook_time || '',
        recipeYield: data.recipe_yield || '',
      });
    } else {
      setError('Error: Ingredients or directions are missing.');
    }
  };
  console.log(recipeData)
  return (
    <div className="flex flex-col min-h-screen justify-center max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clear away the clutter on any recipe site.</h1>
      <p className="text-gray-600 mb-4 dark:text-gray-100">Get the instructions without the fluff. No more popups, ads, or life stories.</p>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="url"
          value={recipeUrl}
          onChange={(e) => setRecipeUrl(e.target.value)}
          placeholder="Paste a recipe URL to remove the clutter."
          className="dark:text-black flex-grow border rounded px-2 py-1"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-1">Get recipe</button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      {recipeData && !error && (
        <RecipeCard
          name={recipeData.name}
          prepTime={recipeData.prepTime}
          cookTime={recipeData.cookTime}
          recipeYield={recipeData.recipeYield}
          ingredients={recipeData.ingredients}
          directions={recipeData.directions}
        />
      )}
    </div>
  );
}