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