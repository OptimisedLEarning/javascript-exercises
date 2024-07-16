const palindromes = function (str) {
    var re = /[\W_]/g; 
    
    var lowcaps = str.toLowerCase().replace(re, ''); 
    var newString = "";
    
    for (var i = lowcaps.length - 1; i >= 0; i--) {
        newString += lowcaps[i];
          
    }

    return newString== lowcaps;

    
};

// Do not edit below this line
module.exports = palindromes;
