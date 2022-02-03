// var romanToInt = function(s) {
//     let sum = 0
//     const digits = [[9, "IX"], [40, "XL"], [4, "IV"], [90, "XC"], [400, "CD"],  [900, "CM"], [1000, "M"], 
//     [500, "D"], [100, "C"], [50, "L"], [10, "X"], [5, "V"], [1, "I"]]
//     for (const [integerEquivalent, romanNumeral] of digits) {
//         while(s.includes(romanNumeral)) {
//             sum += integerEquivalent
//             s = s.replace(romanNumeral, "")
//         }
//     }
//     return sum
// };


var romanToInt = function(s) {
    let sum = 0
    
    const digits = new Map([[9, "IX"], [40, "XL"], [4, "IV"], [90, "XC"], [400, "CD"],  [900, "CM"], [1000, "M"], 
    [500, "D"], [100, "C"], [50, "L"], [10, "X"], [5, "V"], [1, "I"]])
    

    for (const [integerEquivalent, romanNumeral] of digits.entries()) {
        while(s.includes(romanNumeral)) {
            sum += integerEquivalent;
            s = s.replace(romanNumeral, "");
        }
    }
    return sum
};


var romanToInt = function(s) {
    let sum = 0
    
    const digits = {
        "IX": 9,
        "XL": 40,
        "IV": 4,
        "XC": 90,
        "CD": 400,
        "CM": 900,
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
    }
    
    
    for (const [romanNumeral, integerEquivalent] of Object.entries(digits)) {
        while(s.includes(romanNumeral)) {
            sum += integerEquivalent;
            s = s.replace(romanNumeral, "")
        }
    }
    return sum
};
