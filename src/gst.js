"use strict";

var GST = {};

// Default GST Percentage of 15%
GST.gstPercent = 0.15;

// Round the number to 2dp
GST.round = function(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

// Get the total by passing in the subtotal and percentage
GST.getTotal = function(subtotal) {
    var sub = parseFloat(subtotal);
    var roundedSub = GST.round(sub, 2);

    var total = roundedSub * (1 + GST.gstPercent);
    var roundedTotal = GST.round(total, 2);

    return roundedTotal;
}

// Get the total by passing in the total and percentage
GST.getSubtotal = function(total) {
    var tot = parseFloat(total);
    var roundedTot = GST.round(tot, 2);

    var subtotal = roundedTot / (1 + GST.gstPercent);
    var roundedSubtotal = GST.round(subtotal, 2);

    return roundedSubtotal;
}