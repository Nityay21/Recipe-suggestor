const ingredientInput = document.getElementById("input-ingredient");
const displayRecipe = document.getElementById("displayrecipe");
const searchBtn= document.getElementById("search-btn");


function suggestRecipe(ingredient){
    const suggestedRecipe = recipe.find(recipe=> {
        return recipe.ingredients.includes(ingredient.toLowerCase());
    });

    return suggestedRecipe;

}

searchBtn.addEventListener("click",() => {
    const userIngredient = ingredientInput.value.trim().toLowerCase();
    const suggestedRecipe = suggestRecipe(userIngredient);
    
    if(!suggestedRecipe){
        displayRecipe.innerHTML = `No recipes found with the ingredient "${userIngredients}".Trying a different ingredients.`;
    }
    else{
        displayRecipe.innerHTML = `<h2>Suggested Recipe:</h2><p>${suggestedRecipe.Name}<p>`;
    }
});