var GST = (function() {

    "use strict";

    var GST = {
        percent: 0.15,
        denom: function() {
            return this.percent + 1;
        },
        round: function(val, dec) {
            if (typeof dec === "undefined" || typeof dec === "string") dec = 2;
            
            return Number(Math.round(val + "e" + dec) + "e-" + dec);
        },
        getTotal: function(subtotal) {
            // Parses the string/number passed in to the function
            var sub = parseFloat(subtotal),
                roundSub = this.round(sub),
                total = roundSub * this.denom(),
                roundTotal = this.round(total);
    
            return roundTotal;
        },
        getSubtotal: function(total) {
            // Parses the string/number passed in to the function
            var tot = parseFloat(total),
                roundTot = this.round(tot),
                subtotal = roundTot / this.denom(),
                roundSub = this.round();
    
            return roundSub;
        },
        getGST: function(total, sub) {
            var roundGST = this.round(total - sub);
            return roundGST;
        }
    };

    return GST;

})();