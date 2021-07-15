import { getTips } from "../database.js";
export const tipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips();
    

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tip-list">'

    // Create HTNL representations of each fish here
//     for (const fish of fishes) {


    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `
        <h4 class="tanktips_heading">${tip.tipTitle}</h4>
            <p class="tanktips_text">${tip.tip}
            </p>
`
    }

    htmlString += `</article>`

    return htmlString
}
const parentHTMLElement = document.querySelector(".tipsContainer")


parentHTMLElement.innerHTML = tipList()