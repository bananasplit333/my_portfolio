import Image from 'next/image'
import React from 'react';


type Ingredient = {
  ingredient: string;
  quantity: string;
  unit: string;
}

//TODO: move type ingredient into a constants file 
interface RecipeCardProps {
  img_url: string;
  ingredients: Ingredient[];
  directions: string[];
  name: string;
  prepTime: string;
  cookTime: string;
  recipeYield: string;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  img_url,
  ingredients,
  directions,
  name,
  prepTime,
  cookTime,
  recipeYield,
  onClick
}) => {
  return (
    <div className="flex flex-col justify-center bg-white rounded shadow p-8 dark:bg-zinc-800 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-4 mb-6">
        <div>
          <img src={img_url} alt="Recipe Thumbnail" height={120} width={120} className="mr-4 rounded" />
        </div>
        <div className="col-span-2 text-left">
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>
        <div className="text-right">
          <a  onClick={onClick}>reset</a>
        </div>
       
      </div>
      
      {(prepTime || cookTime || recipeYield) && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {prepTime && (
            <div>
              <span className="font-bold">Prep Time:</span> {prepTime}
            </div>
          )}
          {cookTime && (
            <div>
              <span className="font-bold">Cook Time:</span> {cookTime}
            </div>
          )}
          {recipeYield && (
            <div>
              <span className="font-bold">Yield:</span> {recipeYield}
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Ingredients</h3>
          <ul className="list-disc pl-6">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">{ingredient.quantity} {ingredient.unit} {ingredient.ingredient}</li>
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