const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

// a _ b ; a < b ; (4 < 53); // true
if (4 < 53) {
    console.log ("True")
} else {
    console.log ("False")
}

// c _ d ; ; c > d ; (57 > 16); // true
if (57 > 16) {
    console.log ("True")
} else {
    console.log ("False")
}

// 'Name' _ 'Name' ; 'Name' === 'Name'; // true
if ('Name' === 'Name') {
    console.log ("True")
} else {
    console.log ("False")
}

// a _ b _ c ; ((4+53)===75) ; // true
if((4 + 53) === 57) {
    console.log ("True")
} else {
    console.log ("False")
}

// a _ a _ d ; ((4*4) === 16); // true
if ((4*4) === 16) {
    console.log ("True")
} else {
    console.log ("False")
}

// e _ 'Kevin' ; ('Kelvin' !== 'Kevin'); // true
if ('Kelvin' !== 'Kevin') {
    console.log ("True")
} else {
    console.log ("False")
}

// 48 _ '48' ; (48 == '48'); // true
if (48 == '48') {
    console.log ("True")
} else {
    console.log ("False")
}

// f _ e ; (false !== 'Kelvin') // true
if (false !== 'Kelvin') {
    console.log ("True")
} else {
    console.log ("False")
}

// Set a new variable g to 0
10 = g;

// console.log g // 0
console.log(g)

// Then set the variable g to be equal to b + c ; 110
var g = (b + c)

// console.log g // 
console.log(g)