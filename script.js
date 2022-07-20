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