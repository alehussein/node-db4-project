const recipies = [
    {recipe_name: 'Brocoli Pesto Pasta'},
    {recipe_name: 'Lemon Chicken'},
    {recipe_name: 'Salmon en Papillote'},
]

const ingredients = [
    {ing_name: 'Brocoli', ing_unit: 'lbs'},
    {ing_name: 'Pesto', ing_unit: 'lbs'},
    {ing_name: 'Pasta', ing_unit: 'lbs'},
    {ing_name: 'Lemo', ing_unit: 'slices'},
    {ing_name: 'Chiken', ing_unit: 'kilos'},
    {ing_name: 'Salmon', ing_unit: 'grams'},
]

const steps_ingredients = [
{steps_id: 2, ing_id: 1, quality: 1},
{steps_id: 3, ing_id: 2, quality: 1.5},  
{steps_id: 3, ing_id: 3, quality: 2},
{steps_id: 5, ing_id: 4, quality: 1},
{steps_id: 5, ing_id: 5, quality: 0.4},
{steps_id: 7, ing_id: 6, quality: 1},
]

const steps = [
{ instructions: 'Heat pan', steps_order: 1, recipes_id: 1 },   
{ instructions: 'Add Brocoli', steps_order: 2 , recipes_id: 1 },
{ instructions: 'Add pesto mixed with pasta', steps_order: 3 , recipes_id: 1 },

{ instructions: 'Heat oven', steps_order: 1 , recipes_id: 2 },
{ instructions: 'Put chicken and lemon in oven', steps_order: 2 , recipes_id: 2 },
{ instructions: 'Put in Oven at 500 degrees', steps_order: 3, recipes_id: 2 },

{ instructions: 'Fish a salmon in the Bidasoa river', steps_order: 1, recipes_id: 3 },
{ instructions: 'Cook salmon', steps_order: 2, recipes_id: 3}

]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipies)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('steps_ingredients').insert(steps_ingredients)
}

