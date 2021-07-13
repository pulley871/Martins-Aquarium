// Import the function that returns a copy of the fish array
import {getFish, fishArragned} from '../database.js'


export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = fishArragned();
    

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
//     for (const fish of fishes) {


    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `
            <div class="card" style="width: 18rem;">
                <img src="${fish.image}" class="card-img-top fish-img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${fish.name}</h5> 
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item name">Species: ${fish.species}</li>
                    <li class="list-group-item length">Length: ${fish.length}</li>
                    <li class="list-group-item location">Location: ${fish.location}</li>
                    <li class="list-group-item diet">Diet: ${fish.diet}</li>
                </ul>
            
            </div>
`
        // if(fish.length % 5 !== 0 && fish.length % 3 !==0){
        //     htmlString += `<h4>Plebe Fish</h4>`
        // }
    }
    
    

    return htmlString
}
const parentHTMLElement = document.querySelector(".fish_container")


parentHTMLElement.innerHTML = FishList()