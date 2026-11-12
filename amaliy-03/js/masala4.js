// 4-masala. harflarniSarala(s) — so'z harflarini alifbo tartibida joylashtirish
// Yechim: so'zni harflar massiviga ajrataman (split), sort() bilan alifbo tartibiga solaman, keyin join() bilan yana bitta satrga birlashtiraman.
function harflarniSarala(s) {
    const harflar = s.split("");
    harflar.sort();
    return harflar.join("");
}

// Tekshiruvlar
console.log(harflarniSarala("javascript")); // kutilgan: "aacijprstv"
console.log(harflarniSarala("css"));        // kutilgan: "css"
console.log(harflarniSarala(""));           // kutilgan: "" (chegaraviy holat)
console.log(harflarniSarala("zebra"));      // kutilgan: "aberz" (o'z misolim)
console.log(harflarniSarala("a"));          // kutilgan: "a" (o'z misolim)
