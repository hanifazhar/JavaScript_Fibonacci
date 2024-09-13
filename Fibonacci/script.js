//PROGRAM FIBONACCI
let n = 10
let a = 0
let b = 1
let c;

for(let i=0; i<=n; i++) {
    if (i == 0) {
        console.log("0")
    } else if (i == 1) {
        console.log("1")
    } else {
        c = a + b
        a = b
        b = c
        console.log(c)
    }
}