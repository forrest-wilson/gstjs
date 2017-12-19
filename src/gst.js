function GST() {
    this.__proto__ = {
        percent: 0.15,
        denom: () => {
            return this.percent + 1;
        },
        getTotal: (subtot) => {
            var roundSub = parseFloat(subtot).toFixed(2),
                tot = roundSub * this.denom(),
                roundTot = tot.toFixed(2);
    
            return roundTot;
        },
        getSubtotal: (tot) => {
            var roundTot = parseFloat(tot).toFixed(2),
                subtotal = roundTot / this.denom(),
                roundSub = subtotal.toFixed(2);
    
            return roundSub;
        },
        getGST: (tot, sub) => {
            return (tot - sub).toFixed(2);
        },
        getPercent: (tot, sub) => {
            return this.getGST(tot, sub) / tot;
        },
        formatter: (tot, sign) => {
            if (typeof sign === "undefined") sign = "$";
            if (typeof tot === "undefined") tot = "0.00";

            return sign + tot;
        }
    };
}