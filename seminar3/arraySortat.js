const sortByKey = (array, key) => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return -1
        if (a[key] > b[key]) return 1
        return 0
    })
}

const pers = [
    { nume: "Ana", varsta: 25 },
    { nume: "Mihai", varsta: 32 },
    { nume: "Ioana", varsta: 21 }
]

console.log(sortByKey(pers, "varsta"))