
function arrayToAPIString(arr) {
    
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            return "none"
        }
        return arr.join(",")
    }
    return "none"
  }

// function complexSearch(){
//     $.ajax({
//         url : , 
// function complexSearch(mealtype = "none", intolerances = "none", cuisine= "none", equipment="none", difficulty = 1){
//     $.ajax({
//         url : "https://api.spoonacular.com/recipes/search?apiKey=5d197e15a4b34ee7934de1fef766b366&mealtype=" + arrayToAPIString(mealtype) +
//         "&intolerances=" + arrayToAPIString(intolerances) + "&cuisine=" + arrayToAPIString(cuisine) + "&equipment=" + arrayToAPIString(equipment) + "&maxReadyTime=60", 
//         success: function(res){
//             var dict = res.results;
//             //sorting in terms of the ready time, could be made more efficient if time permits
//             for( let i  =0; i < res.number ; i++){
//                 var current = dict[i];
//                 let j = i-1;
//                 while((j > -1) && (parseInt(current.readyInMinutes) < parseInt(dict[j].readyInMinutes))){
//                     dict[j+1] = dict[j];
//                     j--;
//                 }
//                 dict[j+1] = current;
//             }
//             if(difficulty == 1){
//                 return dict[0] //easiest
//             }
//             else if(difficulty ==2){
//                 return dict[parseInt(res.number) /2] //midpack
//             }
//             else{
//                 return dict[parseInt(res.number) -1] //hardest
//             }
            
//         }
//     })
//     return null 
// }

async function complexSearch(query, mealtype, intolerances, cuisine) {
    var ret;
    await fetch("https://api.spoonacular.com/recipes/search?apiKey=5d197e15a4b34ee7934de1fef766b366&query="+query+"&mealtype=" + arrayToAPIString(mealtype) +
    "&intolerances=" + arrayToAPIString(intolerances) + "&cuisine=" + arrayToAPIString(cuisine) + "&maxReadyTime=60")
    .then(response => response.json())
    .then(data => ret = data.results)
    console.log(ret)
    return ret;
}

async function recipeInformation(id) {
    var ret;
    await fetch("https://api.spoonacular.com/recipes/"+id+"/information?apiKey=4995577f7d2b4f4d83adf858ceacd89b")
    .then(response => response.json())
    .then(data => ret = data.results)
    console.log(ret)
    return ret;
}

// ingredients search (minimum missing elements)
// ingredients - array of ingredients
async function ingredientsSearch(ingredients) {
    var recipes, ret = [];
    await fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=4995577f7d2b4f4d83adf858ceacd89b&ingredients=" + ingredients + "&ranking=2&number=1")
    .then(response => response.json())
    .then(async data => {
        recipes = data
        for(var r of recipes) {
            var missedIngredientsPrice = 0;
            await Promise.all(r.missedIngredients.map(async i => {
                await fetch("https://api.spoonacular.com/food/ingredients/" + i.id + "/information?apiKey=e17b28ec56034c8e82ed9212db2c5e55&amount=" + i.amount)
                .then(response => response.json())
                .then(data => {missedIngredientsPrice += data.estimatedCost.value})
            }))
            r.missedIngredientsPrice = missedIngredientsPrice;
            ret.push(r);
        }
    })
    console.log(ret)
    return ret;
}

export {ingredientsSearch, complexSearch}