

function makeCounter() {
    let i = 0;
    return {
        increment: function() {
            return ++i;
        },
        decrement: function(){
            return --i;
        }
    }
    
}

