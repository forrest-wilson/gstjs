var GST = {};

GST.gstPercent = 0.15;

GST.round = function(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

GST.getTotal = function(subtotal) {
    var sub = parseFloat(subtotal);
    var roundedSub = GST.round(sub, 2);

    var total = roundedSub * (1 + GST.gstPercent);
    var roundedTotal = GST.round(total, 2);

    return roundedTotal;
}

GST.getSubtotal = function(total) {
    var tot = parseFloat(total);
    var roundedTot = GST.round(tot, 2);

    var subtotal = roundedTot / (1 + GST.gstPercent);
    var roundedSubtotal = GST.round(subtotal, 2);

    return roundedSubtotal;
}