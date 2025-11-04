const censorText = (text, dictionar) => {
    return dictionar
        .map(word => {
            const pattern = new RegExp(word, 'gi')
            return { word, pattern }
        })
        .reduce((acc, { word, pattern }) => {
            const censored = word[0] + '*'.repeat(word.length - 2) + word[word.length - 1]
            return acc.replace(pattern, censored)
        }, text)
}

const text = "javascript este minunat"
const dictionar = ["este"]

console.log(censorText(text, dictionar))