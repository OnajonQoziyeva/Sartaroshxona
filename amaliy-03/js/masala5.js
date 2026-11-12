// 5-masala. dublikatlarniOchir(arr) — takrorlanuvchi elementlarni olib tashlash
// Yechim: bo'sh yangi massiv ochaman. Eski massivdagi elementni faqat yangi massivda hali yo'q bo'lsagina qo'shaman, shunda birinchi uchragan tartib saqlanadi.
function dublikatlarniOchir(arr) {
    const yangiMassiv = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!yangiMassiv.includes(element)) {
            yangiMassiv.push(element);
        }
    }
    return yangiMassiv;
}

// Tekshiruvlar
console.log(dublikatlarniOchir([1, 2, 2, 3, 1, 4])); // kutilgan: [1, 2, 3, 4]
console.log(dublikatlarniOchir(["a", "a"]));         // kutilgan: ["a"]
console.log(dublikatlarniOchir([]));                 // kutilgan: [] (chegaraviy holat)
console.log(dublikatlarniOchir([5]));                // kutilgan: [5] (o'z misolim)
console.log(dublikatlarniOchir([3, 3, 3]));          // kutilgan: [3] (o'z misolim)
