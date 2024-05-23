// pages/index.js
'use client';

import { useEffect, useState } from 'react';
import RecipeCard from '../../../components/RecipeCard';
import RecipeCardSkeleton from '../../../components/RecipeCardSkeleton';
import React from 'react';
import HomeButton from '@/components/HomeButton';


interface RecipeData {
  img_url: string;
  ingredients: string[];
  directions: string[];
  name: string;
  prepTime: string;
  cookTime: string;
  recipeYield: string;
}
const RecipeParser: React.FC = () => {
  const [recipeUrl, setRecipeUrl] = useState('');
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    setIsLoading(true); // Set isLoading to true before the fetch operation
  
    try {
      const res = await fetch(`${API_URL}?url=${encodeURIComponent(recipeUrl)}`);
      const data = await res.json();
  
      if (data.ingredients && data.cooking_instructions) {
        const ingredientsArray = data.ingredients;
        const directionsArray = JSON.parse(data.cooking_instructions)["cooking_instructions"];
  
        setRecipeData({
          img_url: data.img_url,
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
    } catch (error) {
      setError('Error fetching recipe data.');
    } finally {
      setIsLoading(false); // Set isLoading back to false after the fetch operation
    }
  };

  const gainedFocus = () => {
    setShowPlaceholder(false);
  };

  const lostFocus = () => {
    setShowPlaceholder(true);
  };

  console.log(recipeData)
  return (
    <div>
      <div className="absolute right-10 top-1/3 m:right-1/4 l:right-1/4 xl:right-1/4 sm:top-1/4">
        <HomeButton />
      </div>

      {recipeData ? (
        <div className="min-h-screen justify-center flex flex-col">
        <RecipeCard
          img_url={recipeData.img_url}
          name={recipeData.name}
          prepTime={recipeData.prepTime}
          cookTime={recipeData.cookTime}
          recipeYield={recipeData.recipeYield}
          ingredients={recipeData.ingredients}
          directions={recipeData.directions}
        />
        </div>
      ) : isLoading ? (
        <div className="flex flex-col min-h-screen justify-center">
          <RecipeCardSkeleton />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen justify-center max-w-xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Clear away the clutter on any recipe site.</h1>
          <p className="text-gray-600 mb-4 dark:text-gray-100">
            Get the instructions without the fluff. No more popups, ads, or life stories.
          </p>
          <form className="flex gap-2 mb-4">
            <input
              type="url"
              value={recipeUrl}
              onChange={(e) => setRecipeUrl(e.target.value)}
              onClick={gainedFocus}
              onBlur={lostFocus}
              placeholder={showPlaceholder ? 'Paste a recipe URL to remove the clutter.' : ''}
              className="dark:text-black flex-grow border rounded px-2 py-1"
              required
            />
            <button onClick={handleSubmit} className="bg-blue-500 text-white rounded px-4 py-1">
              Get recipe
            </button>
          </form>
          {error && <p className="text-red-500 mb-4">{error}</p>}
        </div>
        
      )}
    </div>
);
}

export default RecipeParser; 
const TEST_URL = "http://127.0.0.1:5000/parse_url"
const API_URL = "https://altrecipe.toddie.org/parse_url"