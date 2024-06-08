const repeatString = function(string, repeats) {
    let sentence = '';

    if (repeats < 0){
        sentence = 'ERROR';
    };

    for (let i = 0 ; i < repeats ; i++ ) {
        sentence += string;
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
