// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, name){
    const newArray = []
    for(let names of array){
        if(names.toLowerCase()===name.toLowerCase()) {
             newArray.push(names)
        }
    }
    return newArray
}

function fuzzyMatch(array, letters){
    let match = []
    array.forEach(item => {
        if (item.startsWith(letters)){
           match.push(item) 
        }
    })
    return match
}

function matchName(drivers, name){
    let match = []
    drivers.forEach(driver=> {
        if (driver.name===name){
           match.push(driver) 
        }
    })
    return match
}