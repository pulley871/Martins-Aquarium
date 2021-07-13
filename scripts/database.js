const database = {
    fish: [
        {
            image: "../images/green_fish.jpeg", 
            name: "Nemo",
            species: "Pretty",
            length: 3,
            location: "Japan",
            diet: "People",
            

        },
        {
            image: "../images/green_fish.jpeg", 
            name: "Dorry",
            species: "Pretty",
            length: 3,
            location: "Japan",
            diet: "Poop",
            

        },
        {
            image: "../images/green_fish.jpeg", 
            name: "Marvin",
            species: "Pretty",
            length: 3,
            location: "Japan",
            diet: "Kelp",
            

        },
        {
            image: "../images/green_fish.jpeg", 
            name: "Fuel",
            species: "Ugly",
            length: 10,
            location: "USA",
            diet: "Fish",
            

        },
        {
            image: "../images/green_fish.jpeg", 
            name: "Blue Whale",
            species: "Ugly",
            length: 400,
            location: "USA",
            diet: "Trash",
            

        },
        {
            image: "../images/green_fish.jpeg", 
            name: "Green Dipper",
            species: "Weird",
            length: 18,
            location: "Argentina",
            diet: "Fish",
            

        },
        {
            image: "../images/green_fish.jpeg", 
            name: "Pink Jasper",
            species: "Weird",
            length: 1,
            location: "Argentina",
            diet: "Trash",
            

        },
        {
            image: "../images/green_fish.jpeg", 
            name: "Crazed Maruader",
            species: "Intense",
            length: 30,
            location: "Brazil",
            diet: "People",
            

        },
        {
            image: "../images/green_fish.jpeg", 
            name: "Blow Fish",
            species: "Intense",
            length: 31,
            location: "Brazil",
            diet: "Kelp",
            

        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of database.fish) {
        if (fish.length % 3 === 0){
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of database.fish) {
        if (fish.length % 5 === 0){
            soldiers.push(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0){
            regularFish.push(fish)
        }
    }

    return regularFish
}
export const fishArragned = () =>{
    const finalFishArr = [];
    finalFishArr.push(...mostHolyFish());
    finalFishArr.push(...soldierFish());
    finalFishArr.push(...nonHolyFish());
    

    return finalFishArr;
}
console.log(fishArragned())