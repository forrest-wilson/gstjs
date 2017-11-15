var GST = (function() {

    var _ = {
        percent: 0.15,
        denom: function() {
            return this.percent + 1;
        },
        getTotal: function(subtot) {
            var roundSub = parseFloat(subtot).toFixed(2),
                tot = roundSub * this.denom(),
                roundTotal = tot.toFixed(2);
    
            return roundTotal;
        },
        getSubtotal: function(total) {
            var roundTot = parseFloat(tot).toFixed(2),
                subtotal = roundTot / this.denom(),
                roundSub = subtotal.toFixed(2);
    
            return roundSub;
        },
        getGST: function(tot, sub) {
            return (tot - sub).toFixed(2);
        },
        formatter: function(tot, sign) {
            if (typeof sign === "undefined") sign = "$";
            if (typeof tot === "undefined") tot = "0.00";

            return sign + tot;
        }
    };

    return _;

})();