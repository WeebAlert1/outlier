function findOutlier(int) {
    let evens = []
    let odds = []

    for (let i = 0; i < int.length; i++) {
        let num = int[i]

        if (num % 2 === 0){
            evens.push(num)
        } else {
            odds.push(num)
        }
    }

    if (evens.length === 1) {
        return evens[0]
    } else {
        return odds[0]
    }
    
}


console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21] ))