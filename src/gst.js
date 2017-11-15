var GST = (function() {

    var _ = {
        percent: 0.15,
        denom: function() {
            return this.percent + 1;
        },
        getTotal: function(subtot) {
            var sub = parseFloat(subtot),
                roundSub = sub.toFixed(2),
                tot = roundSub * this.denom(),
                roundTotal = tot.toFixed(2);
    
            return roundTotal;
        },
        getSubtotal: function(total) {
            var tot = parseFloat(total),
                roundTot = tot.toFixed(2),
                subtotal = roundTot / this.denom(),
                roundSub = subtotal.toFixed(2);
    
            return roundSub;
        },
        getGST: function(tot, sub) {
            var roundGST = (tot - sub).toFixed(2);
            return roundGST;
        }
    };

    return _;

})();