//let value = 10;



function wrapper() {
    let value = 20;
    console.log('WRAPPER value', value);

    return function log(){
        console.log('LOG value:', ++value);
    }

    
}

const resFunc = wrapper();
// resFunc();