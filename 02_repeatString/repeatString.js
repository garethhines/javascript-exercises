const repeatString = function(string, repeats) {
    let sentence = string; 
    for (let i = 1 ; i < repeats ; i++ ) {
        sentence += string;
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
