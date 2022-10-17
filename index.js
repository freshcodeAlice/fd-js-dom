

function makeCounter() {
    let i = 0;
    return {
        increment: function() {
            return ++i;
        },
        decrement: () => --i
    }
    
}


/*
Написати функцію createAdder, повертає іншу функцію. Повернена функція має прийняти число в якості аргументу і скласти його з аргументом createAdder

createAdder(n)


*/


// function createAdder(n) {
//     return function(m){   
//         return n = n+m
//     }
// }

const createAdder = (n) => (m) => n+=m; 

createAdder(5)(10) //виклик функції, що повертається з попередньої функції