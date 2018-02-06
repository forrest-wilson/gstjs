# GST JS

### A Simple Vanilla JS Plugin for GST Calculation

https://forrest-wilson.github.io/gstjs/

## Basic Usage

### HTML

```html
<script src="js/gst.min.js"></script>
```

### JS

```javascript
// decimalPercent should be written as a decimal
// e.g. a 25% GST rate should be defined as 0.25
// Only decimalPercent's smaller than 1 will be accepted
var gst = new GST(decimalPercent);
```

## Methods

### .getTotal(subtotal)

Returns the GST inclusive number.

```javascript
gst.getTotal(subtotal)

typeof subtotal ? number : string
```

### .getSubtotal(total)

Returns the GST exclusive number.

```javascript
gst.getSubtotal(total)

typeof total ? number : string
```

### .getGST(total, subtotal)

Returns the GST component of a transaction.

```javascript
gst.getGST(total, subtotal)

typeof total && typeof subtotal ? number : string
```

### .getPercent(total, subtotal)

Returns the GST percentage of a transaction.

```javascript
gst.getPercent(total, subtotal)

typeof total && typeof subtotal ? number : string
```

### .formatter(total, currencySign)

Returns a formatted string with the currency sign of choice. Default return value is "$0.00".

```javascript
gst.formatter(total, currencySign)

typeof total ? number : string
typeof currencySign = string
```