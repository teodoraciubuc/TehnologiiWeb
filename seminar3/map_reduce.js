const sampleArray = [1, 2, 3, 4, 5]

const reduce = (array, reducer, initialValue) => {
    let accumulator = initialValue

    array.map(element => {
        accumulator = reducer(accumulator, element)
    })

    return accumulator
}

console.log(reduce(sampleArray, (acc, x) => acc + x, 0))
