"use strict";

var GST = {};

// Default GST Percentage of 15%
GST.gstPercent = 0.15;

// Round the number to 2dp
GST.round = function(value, decimals) {
    if (typeof decimals === "undefined" || typeof decimals === "string") decimals = 2;

    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

// Get the total by passing in the subtotal and percentage
GST.getTotal = function(subtotal) {
    // Parses the string/number passed in to the function
    var sub = parseFloat(subtotal),
        roundedSub = GST.round(sub),
        total = roundedSub * (1 + GST.gstPercent),
        roundedTotal = GST.round(total);

    return roundedTotal;
}

// Get the total by passing in the total and percentage
GST.getSubtotal = function(total) {
    // Parses the string/number passed in to the function
    var tot = parseFloat(total),
        roundedTot = GST.round(tot),
        subtotal = roundedTot / (1 + GST.gstPercent),
        roundedSubtotal = GST.round(subtotal);

    return roundedSubtotal;
}

// Get the GST percentage by passing in the total and subtotal
GST.getGST = function(total, subtotal) {
    return total - subtotal;
}