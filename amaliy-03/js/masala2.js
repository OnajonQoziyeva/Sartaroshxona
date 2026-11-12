// 2-masala. undoshlarSoni(s) — satrdagi undosh harflar soni
// Yechim: satrni kichik harfga o'tkazaman, har bir belgini ko'raman. Agar u lotin harfi bo'lsa va a, e, i, o, u dan biri bo'lmasa, sanoqni oshiraman.
function undoshlarSoni(s) {
    const kichikSatr = s.toLowerCase();
    const unlilar = "aeiou";
    let soni = 0;

    for (let i = 0; i < kichikSatr.length; i++) {
        const belgi = kichikSatr[i];
        const lotinHarfmi = belgi >= "a" && belgi <= "z";

        if (lotinHarfmi && !unlilar.includes(belgi)) {
            soni++;
        }
    }
    return soni;
}

// Tekshiruvlar
console.log(undoshlarSoni("Kitob"));      // kutilgan: 3
console.log(undoshlarSoni("Veb 2026!"));  // kutilgan: 2
console.log(undoshlarSoni(""));           // kutilgan: 0 (chegaraviy holat)
console.log(undoshlarSoni("AEIOU"));      // kutilgan: 0 (o'z misolim)
console.log(undoshlarSoni("JavaScript")); // kutilgan: 7 (o'z misolim)
