


//https://github.com/farhanuddinshihab/assignment-3





//kilometerToMeter

function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return 'value can not be negative';
    }
    else {
        var Meter = kilo * 1000;
    }
    return Meter;

}
//var result = kilometerToMeter(3);
//console.log(result);




//budgetCalculator

function budgetCalculator(watch, phone, laptop) {

    if (watch, phone, laptop < 0) {
        return 'product can not be negative';
    }
    else {
        var watch = watch * 50;
        var phone = phone * 100;
        var laptop = laptop * 500;
        var totalPrice = watch + phone + laptop;
    }
    return totalPrice;

}
//var result = budgetCalculator(2, 5, 4);
//console.log(result);


//hotelCost


function hotelCost(hotelStayingDay) {
    var totalCost = 0;
    if (hotelStayingDay <= 10) {
        totalCost = hotelStayingDay * 100;
    }
    else if (hotelStayingDay <= 20) {
        var firstTenDay = 10 * 100;
        var remainingStayingDay = hotelStayingDay - 10;
        var secondTenDay = remainingStayingDay * 80;
        totalcost = firstTenday + secondTenDay;

    }
    else {
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remainingStayingDay = hotelStayingDay - 20;
        var remainingAllDay = remainingStayingDay * 50;
        totalCost = firstTenDay + secondTenDay + remainingAllDay;
    }
    return totalCost;
}
//var amount = hotelCost(32);
//console.log(amount)



//meagaFriend

var friendList = ["Anannya Nira", "Alamin Hossen", "Mohiudiin Anas", "Asif", "Nabil", "Shishir"];

function megaFriend(friendList) {
    var largestCharecter = 0;

    for (var i = 0; i < friendList.length; i++) {
        if (friendList[i].length > largestCharecter) {
            var largestCharecter = friendList[i].length;
            var largestCharecterHolder = friendList[i];
        }
    }
    return largestCharecterHolder;
}





