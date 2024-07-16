const findTheOldest = function(people) {
    
        let age =function (x) { return (x.yearOfDeath || new Date().getFullYear())-x.yearOfBirth};
       let oldest = people.sort((a,b) => age(a)> age(b)   ? -1 : 1 );

       return oldest[0];



    

};

// Do not edit below this line
module.exports = findTheOldest;
