// 1-masala. faktorial(n) — n! ni hisoblash
// Yechim: natija 1 dan boshlanadi, 1 dan n gacha har bir sonni natijaga ko'paytirib boraman.
function faktorial(n) {
    let natija = 1;
    for (let i = 1; i <= n; i++) {
        natija = natija * i;
    }
    return natija;
}

// Tekshiruvlar
console.log(faktorial(5));  // kutilgan: 120
console.log(faktorial(0));  // kutilgan: 1 (chegaraviy holat)
console.log(faktorial(1));  // kutilgan: 1 (o'z misolim)
console.log(faktorial(7));  // kutilgan: 5040 (o'z misolim)
