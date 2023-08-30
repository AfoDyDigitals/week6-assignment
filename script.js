// question 1
const letters = ("a, b, d, s, g, y, h, i, d, s, a, a, d, g, b, d, a, a, s, b, v, c, y, d, s, a, a, b, d, g, s, a, a, y, r, e");
let arrLetters = letters.split (", ");
let a = [ ];
let b = [ ];
let d = [ ];
let y = [ ];
for (let i = 0; i < arrLetters.length; i++) {
    if (arrLetters [i] === "a") 
    {
        a.push (arrLetters [i])
    }
    if (arrLetters [i] === "b")
    {
        b.push (arrLetters [i])
    }
    if (arrLetters [i] === "d") 
    {
        d.push (arrLetters [i])
    }
    
    if (arrLetters [i] === "y") 
    {
        y.push (arrLetters [i])
    }
    }; 


console.log(a.length);
console.log(b.length);
console.log(d.length);
console.log(y.length);

// question 2

const items = ("rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair");
let arrItems = items.split (", ");
let edibles = [ ];
let nonEdibles = [ ];
for (let i = 0; i < arrItems.length; i++) {
    if (arrItems [i] === "rice" ||
        arrItems [i] === "yam" ||
        arrItems [i] === "beans" || 
        arrItems [i] === "cocoyam" || 
        arrItems [i] === "banana" ||
        arrItems [i] === "semo" || 
        arrItems [i] === "milk" 
    ) {
            edibles.push (arrItems [i]);
    } else {
            nonEdibles.push (arrItems [i]);
        }
}
function edibleResults () {
    console.log (edibles.join(", "));
}
function nonEdiblesResults () {
    console.log (nonEdibles.join(", "));
}

edibleResults();
nonEdiblesResults();