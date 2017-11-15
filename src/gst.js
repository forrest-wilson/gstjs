var GST = (function() {

    var _ = {
        percent: 0.15,
        denom: function() {
            return this.percent + 1;
        },
        round: function(val, dec) {
            if (typeof dec === "undefined" || typeof dec === "string") dec = 2;
            
            return Number(Math.round(val + "e" + dec) + "e-" + dec);
        },
        getTotal: function(subtot) {
            // Parses the string/number passed in to the function
            var sub = parseFloat(subtot),
                roundSub = this.round(sub),
                tot = roundSub * this.denom(),
                roundTotal = this.round(tot);
    
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

    return _;

})();