// N1   20.

// {
//     function centerNum(arr) {
//         const leng = arr.length;

//         if (leng % 2 === 1) {
//             return arr[Math.floor(leng / 2)]
//         }
//         const center1 = arr[leng / 2 - 1]
//         const center2 = arr[leng / 2]
//         return (center1 + center2) / 2
//     }
//     console.log(centerNum([1, 2, 3, 4, 5]));
//     console.log(centerNum([1, 2, 3, 4,]));
// }


// N2   21.

// {
//     function tub(num) {
//         if (num === 2) {
//             return `${num} tub son`;

//         }
//         if (num <= 1) {
//             `${num} tub son emas`

//         }
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % 2 === 0) {
//                 `${num} tub son emas`

//             }
//         }
//         return `${num} tub son`;

//     }
//     console.log(tub(2));

// }



// N3   22.

{

}



// N4   23.

{

}



// N5   24.

// {
//     function xona(num) {
//         const xonalar = String(num).replace('-', '').length
//         console.log(`${num} ${xonalar}    --->   xonali son`);

//     }
//     xona(2)
//     xona(20)
//     xona(200)
//     xona(2000)
//     xona(20000)
// }



// N6   25.

// {
//     function harf(str) {
//         let count = 0;
//         for (let char of String(str)) {
//             if (char === 'a') {
//                 count++
//             }
//         }
//         console.log(`${str} da ---> ${count} ta a harfi bor`);

//     }
//     harf("salom")
//     harf("dunyo")
// }



// N7   23.

// {
//     function aHarfiSoni(matn) {
//         const suzlar = matn.split(" ");
//         const natija = [];

//         for (let suz of suzlar) {
//             const suzlar = suz.includes('a');
//             if (suzlar) {
//                 natija.push(suz);
//             }
//         }

//         console.log(`${natija.length} ta suzda a harfi bor`);
//     }

//     aHarfiSoni("salom dunyo")
//     aHarfiSoni("salom salom salom")

// }



// N8   23.

{

}



// N9   23.

{

}



// N10   23.

{

}