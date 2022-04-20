/* PRODUCTS */
const starters = [["hummus", 4.59],["egg", 3.49], ["bruschett", 4.99], ["cheesos", 6.49]]
const mainDishes = [["sajo", 12.99], ["mussels", 17.99], ["indian", 9.99], ["chewy",11.59], ["carcase", 14.49], ["potatoe", 10.99], ["fishy", 18.99], ["asparguser", 11.99]]
const desserts = [["gofferis", 4.59], ["apple", 3.49], ["mousse", 4.99], ["brulee", 6.49]]
const beverages = [["beer", 2.59], ["coctails", 5.49], ["lemonade", 4.99], ["coffee", 2.49]]


/* Bills */

function calculateInvoice (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    return starterPrice + maindishPrice + dessertPrice + beveragePrice
}
console.log("First Bill", calculateInvoice(starters[2][1], mainDishes[5][1], desserts[2][1], beverages[3][1]))
console.log("Second Bill", calculateInvoice(starters[1][1], mainDishes[4][1], desserts[1][1], beverages[1][1]))
console.log("Third Bill", calculateInvoice(starters[3][1], mainDishes[6][1], desserts[0][1], beverages[0][1]))
console.log("Fourth Bill", calculateInvoice(starters[0][1], mainDishes[2][1], desserts[3][1], beverages[2][1]))


/* BONUS POINTS */

function studentInvoice (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    var sum = starterPrice + maindishPrice + dessertPrice;
    return result = (sum * 0.9) + beveragePrice;
}

console.log("Student Bill", studentInvoice(starters[1][1], mainDishes[6][1], desserts[2][1], beverages[2][1]))
console.log("Student Bill", studentInvoice(starters[0][1], mainDishes[7][1], desserts[0][1], beverages[0][1]))
console.log("Student Bill", studentInvoice(starters[2][1], mainDishes[4][1], desserts[1][1], beverages[3][1]))
