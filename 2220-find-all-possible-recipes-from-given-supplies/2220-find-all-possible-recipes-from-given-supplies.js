/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const recipeIndex = new Map();
    for (let i = 0; i < recipes.length; i++) {
        recipeIndex.set(recipes[i], i);
    }
    const suppliesSet = new Set();
    for (const supply of supplies) {
        suppliesSet.add(supply);
    }
    const results = new Set();

    const checkingRecipe = new Set();
    function checkRecipe(recipe) {
        if (results.has(recipe)) return true;
        checkingRecipe.add(recipe);
        const ingredient = ingredients[recipeIndex.get(recipe)];
        for (const item of ingredient) {
            if (suppliesSet.has(item)) {
                continue;
            }
            if (recipeIndex.has(item) && !checkingRecipe.has(item) && checkRecipe(item)) {
                continue;
            }
            return false;
        }
        checkingRecipe.delete(recipe);
        results.add(recipe);
        return true;
    }

    for (const recipe of recipes) {
        checkRecipe(recipe);
    }
    return [...results];
};