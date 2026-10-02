const numbers = [1, 2, 3, 4, 4, 5 , 6, 6, 7]
const names = ["John", "Lisa", "Tom", "John", "Lisa", "Tom", "John", "Lisa", "Tom"]

const uniqueNumbers = [...new Set(numbers)]
console.log(uniqueNumbers)

const uniqueNames = [...new Set(names)]
console.log(uniqueNames)