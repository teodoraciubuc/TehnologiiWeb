const formatString = (template, values) => {
    let result = template;
    for (let key in values) {
        result = result.replace(`{${key}}`, values[key]);
    }
    return result;
}

console.log(formatString("un {substantiv} este {adjectiv}", {
    substantiv: "căluț",
    adjectiv: "drăguț"
}));

