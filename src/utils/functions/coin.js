export const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertBalance = (balance, from, to = "MXN", signal = null) => {
    return new Promise((resolve, reject) => {
        if (from[0] === "T") from = from.slice(1);
        fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`,
            { signal }
        )
            .then(response => response.json())
            .then(data =>
                resolve(numberWithCommas(Math.round(data[to] * balance * 100) / 100))
            )
            .catch(error => {
                return reject(error);
            });
    });
};
