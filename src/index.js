const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //split array by 2 
    let arrayForDouble = expr.match(/.{1,2}/g);   
    let arrayForDecode = [];
    for(var i = 0; i < arrayForDouble.length; i++) {
       if (arrayForDouble[i] == "00") {arrayForDecode.push("0");}
       else if (arrayForDouble[i] == "10") {arrayForDecode.push(".");}
       else if (arrayForDouble[i] == "11") {arrayForDecode.push("-");}
       else if (arrayForDouble[i] == "**") {arrayForDecode.push("*");}
       else {continue;}
    }
    
    //arr to string and split by 5
    let arrayByFive = arrayForDecode.join("").match(/.{1,5}/g);
    //delete unnecessary 0    
    for( var k = 0; k < arrayByFive.length; k++) { 
        arrayByFive[k] = arrayByFive[k].replace('0000', '');
        arrayByFive[k] = arrayByFive[k].replace('000', '');
        arrayByFive[k] = arrayByFive[k].replace('00', '');
        arrayByFive[k] = arrayByFive[k].replace('0', '');
    }
    //new str, find key in obj and add to new str
    let decodedStr = "";
    for ( var j = 0; j < arrayByFive.length; j++) {
        let key = arrayByFive[j];
        if (key == "*****") {decodedStr += " "}
        else {decodedStr += (MORSE_TABLE[key]);}
    }
    return decodedStr;
}

module.exports = {
    decode
}