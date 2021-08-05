// https://github.com/farabitusher/assignment-js

//kilometer to meter convert .
function kilometerToMeter(kmToM) {
    var output = 1000 * kmToM;
    return output;
}



//Budget calculator 
function budgetCalculator(watch, phone, laptop) {
    var firstItem = watch*50;
    var secondItem = phone*100;
    var thirdItem = laptop * 500;
    var Totalcost = firstItem + secondItem + thirdItem;
    Math.abs(Totalcost);
    return Totalcost;
}



//hotel cost calculation
function sum(value) {
    if (value <= 10) {
        var first10Days = value * 100
        return first10Days;
    }
    else if ( value <= 20) {
        var second10Days = 1000 + (value - 10) * 80;
        return second10Days;
    }
    else (value>20)
        var after20Days = 1800 + (value - 20) * 50
        return after20Days;
    
}
    



//find largest friend name from a array

var friendName = ["fahad", "hasan ali", "molla", "farabi tusher"];
function megaFriend(friendName) {
    
    let longest = '';
    for (let i = 0; i < friendName.length; i++) {
    if (friendName[i].length > longest.length)
    longest = friendName[i];
    }
    return longest;
    }
