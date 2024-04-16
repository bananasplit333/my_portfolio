// pages/index.js
'use client';

import { useState } from 'react';
import RecipeCard from '../../../components/RecipeCard';
import React from 'react';

interface RecipeData {
    ingredients: string[];
    directions: string[];
}

export default function Home() {
  const [recipeUrl, setRecipeUrl] = useState('');
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/parse_url?url=${encodeURIComponent(recipeUrl)}`);
    const data = await res.json();

    const ingredientsArray: string[] = Object.entries(data.ingredients[0]).map(([_, ingredient]) => ingredient as string);

    setRecipeData({
      ingredients: ingredientsArray,
      directions: JSON.parse(data.cooking_instructions)["cooking_instructions"],
    });  
    console.log("type of ingredients: ", typeof recipeData?.ingredients)
  };

  return (
    <div className="flex flex-col min-h-screen justify-center max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Clear away the clutter on any recipe site.</h1>
      <p className="text-gray-600 mb-4">Get the instructions without the fluff. No more popups, ads, or life stories.</p>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="url"
          value={recipeUrl}
          onChange={(e) => setRecipeUrl(e.target.value)}
          placeholder="Paste a recipe URL to remove the clutter."
          className="flex-grow border rounded px-2 py-1"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-1">Get recipe</button>
      </form>
      {recipeData && <RecipeCard {...recipeData} />}
    </div>
  );
}