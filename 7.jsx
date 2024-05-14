function Calculate(x){
    var water = 5832
    date = parseInt(x)
    for (let i = 0; i < date; i++){
        water -= water/3
    }
    return water
}

y = Calculate(10)
console.log("Result water: ", y)