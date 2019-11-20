var ri = Math.random();
var ru = Math.random();
var m = ri/ru;
if (Math.random() < 0.5) {
    m = -m;
}
console.log(m)

var H = 50
var r = 5;

var b = H*(1-m)-r*Math.sqrt(1+m*m)

console.log("m: ", m)

if (b < 0) {
    console.log("start: (" + -b/m + ", 0)")
} else if (b > 100) {
    console.log("start: (" + (100-b)/m + ", 100)")
} else {
    console.log("start: (0, " +b + ")")
}

var y100 = m*100+b
if (y100 < 0) {
    console.log("end: (" + -b/m + ", 0")
} else if (y100 > 100) {
    console.log("end: (" + (100-b)/m + ", 100)")
} else {
    console.log("end: (100, " + y100 + ")")
}
