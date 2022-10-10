
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




// 6. funkcija kojoj se predaje string, te ona ispisuje bez razmaka svaku rijec velikim slovom (cammelCase)
function toCammelCase(str) {
    str = str.toLowerCase();
    let words = str.split(" ");
    let firstCharUppercase = [];
    words.forEach(word => {
        let restOfTheWord = "";
        for(let i = 1; i < word.length; i++) {
            restOfTheWord += word.charAt(i); 
        }
        firstCharUppercase.push(word.charAt(0).toUpperCase() + restOfTheWord);
    })

    firstCharUppercase[0] = firstCharUppercase[0].toLowerCase();

    let newWord = "";

    firstCharUppercase.forEach(word => {
        newWord += word;
    })

    console.log(newWord);
}

toCammelCase("web apps vjezbe");






// 7. funkcija koja za dani broj X provjerava nalazi li se unutar [0, 1000], te mnozi sve visekratnike broja 7 do X te ispisuje rezultat
function func(x) {
    if (x >= 0 && x <= 1000) {

        let multiplesOf7 = [];

        for (let i = 0; i < x; i++) {
            if (i % 7 === 0 && i != 0) {
                multiplesOf7.push(i);
            }
        }

        let final = 1;

        multiplesOf7.forEach(num => {
            final *= num;
        })

        console.log(final);

    }
} 

func(23);





// 8. Napisi funkciju koja vraca predano polje obrnutim redoslijedom

function reverseOrder(array) {
    let newArray = [];
    for (let i = array.length - 1; i > -1; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseOrder([3, 4, 5, 6]));
