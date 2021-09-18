//import {ajax} from  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"


export default function complexSearch(mealtype = "none", intolerances = "none", cuisine= "none", equipment="none", difficulty = 1){
    $.ajax({
        url : "https://api.spoonacular.com/recipes/search?apiKey=5d197e15a4b34ee7934de1fef766b366&mealtype=" + mealtype +
        "&intolerances=" + intolerances + "&cuisine=" + cuisine + "&equipment=" + equipment + "&maxReadyTime=60", 
        success: function(res){
            var dict = res.results;
            //sorting in terms of the ready time, could be made more efficient if time permits
            for( let i  =0; i < res.number ; i++){
                var current = dict[i];
                let j = i-1;
                while((j > -1) && (parseInt(current.readyInMinutes) < parseInt(dict[j].readyInMinutes))){
                    dict[j+1] = dict[j];
                    j--;
                }
                dict[j+1] = current;
            }
            if(difficulty == 1){
                return dict[0] //easiest
            }
            else if(difficulty ==2){
                return dict[parseInt(res.number) /2] //midpack
            }
            else{
                return dict[parseInt(res.number) -1] //hardest
            }
            
        }
    })
    return null 
}

// ingredients search (minimum missing elements)
// ingredients - array of ingredients
export default function ingredientsSearch(ingredients) {
    var str = "";
    for(var i of ingredients) {
        str += i + ", ";
    }
    var recipes, ret = [];
    await fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=8ac346554dc44c8097decebc24bbcaec&ingredients=" + str.slice(0, -2) + "&ranking=" + strategy+"&number=1")
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
    return ret;
}