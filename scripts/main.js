import { getFish } from './database.js'
import { FishList } from './fish/FishList.js'
import { tipList } from './tips/tipList.js'
import { placeList } from './locations/locationsList.js'
const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}