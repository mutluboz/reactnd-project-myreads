export const GroupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}

export const SplitCamelCaseText = (text) => {
    return text.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
}

export const InitCap = (text) => {
    return text.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
        return m.toUpperCase();
    });
};