// Import the function that returns a copy of the fish array
import {getPlaces} from '../database.js'
import { getFish } from '../database.js';

export const placeList = () => {
    // Invoke the function that you imported from the database module
    const places = getPlaces();
    const fishes = getFish();

    // Start building a string filled with HTML syntax
    let htmlString = ""

    // Create HTNL representations of each fish here
//     for (const fish of fishes) {


    for (const place of places) {

        // Why is there a backtick used for this string?
        htmlString += `
        <div class ="individualPlaces">
        <div class="places_info_container">
            <h3 class="places_name">${place.countryName}</h3>
            <ul class="places_fish"><u>Harvested Fish</u>
                
            
`
        for (const fish of fishes){
            if (fish.location === place.countryName){
                htmlString += `<li>${fish.name}</li>`
            }
        }
        htmlString += `
            </ul>
        </div> 
        <div class="places_img"><img src="${place.countryimage}"></div>
        </div>`
    }
    
    

    return htmlString
}
const parentHTMLElement = document.querySelector(".places_container")


parentHTMLElement.innerHTML = placeList()