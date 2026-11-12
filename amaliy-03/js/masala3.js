// 3-masala. ikkiBaravar(arr) — har bir elementi 2 marta katta yangi massiv
// Yechim: bo'sh yangi massiv ochaman, eski massivdagi har bir elementni 2 ga ko'paytirib, yangisiga qo'shaman.
function ikkiBaravar(arr) {
    const yangiMassiv = [];
    for (let i = 0; i < arr.length; i++) {
        yangiMassiv.push(arr[i] * 2);
    }
    return yangiMassiv;
}

// Tekshiruvlar
console.log(ikkiBaravar([1, 5, 10])); // kutilgan: [2, 10, 20]
console.log(ikkiBaravar([-3, 0]));    // kutilgan: [-6, 0]
console.log(ikkiBaravar([]));         // kutilgan: [] (chegaraviy holat)
console.log(ikkiBaravar([7]));        // kutilgan: [14] (o'z misolim)
console.log(ikkiBaravar([2.5, 4]));   // kutilgan: [5, 8] (o'z misolim)
