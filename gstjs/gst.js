function GST(percent) {
    if (percent >= 1) { throw "Please enter a number smaller that 1"; }
    this.percent = percent ? percent : 0.15;
    this.denom = function() {
        return this.percent + 1;
    };
    this.getTotal = function(subtot) {
        var roundSub = parseFloat(subtot).toFixed(2),
            tot = roundSub * this.denom(),
            roundTot = tot.toFixed(2);

        return roundTot;
    };
    this.getSubtotal = function(tot) {
        var roundTot = parseFloat(tot).toFixed(2),
            subtotal = roundTot / this.denom(),
            roundSub = subtotal.toFixed(2);

        return roundSub;
    };
    this.getGST = function(tot, sub) {
        return (tot - sub).toFixed(2);
    };
    this.getPercent = function(tot, sub) {
        return (this.getGST(tot, sub) / sub).toFixed(2);
    };
    this.formatter = function(tot, sign) {
        if (typeof sign === "undefined") sign = "$";
        if (typeof tot === "undefined") tot = "0.00";

        return sign + tot.toFixed(2);
    };
}