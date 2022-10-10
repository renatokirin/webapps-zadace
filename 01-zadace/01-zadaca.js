
// 2) funkcija koja pretvara HRK u EUR
function hrkToEur(hrk) { // 1 HRK = 0.132851 EUR
    return hrk * 0.132851;
}

console.log(hrkToEur(7.53));


// 3) funkcija koja provjerava nalazi li se dani broj X unutar [100,150000]
function unutarIntervala(x) {
    (x >= 100 && x <= 150000) ? console.log(x + ' je unutar [100,150000]') : console.log(x + ' nije unutar [100,150000]');
}

unutarIntervala(53);


// 4) funkcija koja pretvara broj X u sate i minute
function toHourAndMin(x) {
    let hours = Math.floor(x / 60);
    let minutes = x - (hours * 60);
    console.log("Ovo je " + hours + " sata i " + minutes + " minuta");
}

toHourAndMin(135);


// 5. funkcija koja iz polja brojeva ispisuje brojeve djeljive s 3
let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function divisibleBy3(array) {
    let newArray = [];
    array.forEach(num => {
        if (num % 3 === 0)
            newArray.push(num); 
    });
    console.log('Brojevi djeljivi s 3: ' + newArray);
}

divisibleBy3(brojevi);
