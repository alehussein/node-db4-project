function getRecipeById(recipe_id){
    return Promise.resolve(`Recipe answer with id: ${recipe_id}`)
}

module.exports = {
    getRecipeById
}