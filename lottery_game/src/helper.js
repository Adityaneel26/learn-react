function getTicket(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

export { getTicket, sum };