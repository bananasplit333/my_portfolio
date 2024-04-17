// components/RecipeCard.js

import React from 'react';

interface RecipeCardProps {
  ingredients: string[];
  directions: string[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ ingredients, directions }) => {
  return (
    <div className="flex flex-col bg-white rounded shadow p-6 dark:bg-zinc-800">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Ingredients</h3>
          <ul className="list-none pl-0">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Directions</h3>
          <ol className="list-decimal pl-6">
            {directions.map((direction, index) => (
              <li key={index} className="mb-4">{direction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;