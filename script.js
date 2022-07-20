// Array Methods

// #1 - Filter (Non Destructive)
// Filter outputs a new array, filtering only ones that fulfull the filter return condition

const scores = [0,25,15,55,75,100,30]


// Filters scores equal or greater than 25, stores it in filteredScored
let filteredScores = scores.filter((score)=>{
    return score >= 25
})

console.log(filteredScores)



const users = [{name:"Kent",premium:true},{name:"Ben",premium:true},{name:"Max",premium:false},{name:"Token",premium:false}, {name:"Ashleigh",premium:true}]

// Filters users in the user array object to those with premium and stores them in premiumUsers

let premiumUsers = users.filter((user)=>{
    return user.premium
})

console.log(premiumUsers)

// #2 - Map
// Map creates a new array based off another array, it's great for creating a new array based off another by manipulating its values
// Avoid directly altering the variable and use return statement to avoid destruction of the original variable

// Creates a new sales price by increasing each number by /100 and *114, thus increasing the price by 14% (May be inaccurate maths)

const prices = [25,10,57,42,50,39,100]
let salesPrice = prices.map((price)=>{
    return price /100 *114
})

console.log(salesPrice)


// Halves the price of menu items over the price of 30 and stores in menuSale array object

const menu = [{name:"Spaghetti",price:50},{name:"Pizza",price:70},{name:"Noodles",price:30},{name:"Tea",price:12}]

menuSale = menu.map((item)=>{
    if(item.price>30){
        return {name:item.name,price:item.price/2}
    } else return item
})

console.log(menuSale)