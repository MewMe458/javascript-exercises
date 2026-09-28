const repeatString = function(string, num) {
    let jointstring = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            jointstring += string;
        }
    }
    else {
        jointstring = "ERROR";
    }
    return jointstring;
};

console.log(repeatString('',10))

// Do not edit below this line
module.exports = repeatString;
