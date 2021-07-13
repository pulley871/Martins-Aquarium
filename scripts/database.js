const database = {
    fish: [
        {
            image: "", 
            name: "Nemo",
            species: "Pretty",
            size: 3,
            location: "Japan",
            diet: "People",
            

        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}