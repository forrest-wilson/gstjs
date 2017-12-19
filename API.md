# GST JS API

## Basic Usage

### HTML

```html
<script src="js/gst.min.js"></script>
```

### JS

```javascript
var gst = new GST;
```

## Methods

### .getTotal(subtotal)

```javascript
gst.getTotal(subtotal)

typeof subtotal => number || string
```

Returns the GST inclusive number.

### .getSubtotal(total)

```javascript
gst.getSubtotal(total)

typeof total => number || string
```

Returns the GST exclusive number.

### .getGST(total, subtotal)

```javascript
gst.getGST(total, subtotal)

typeof total && typeof subtotal => number || string
```

Returns the GST component of a transaction.

### .getPercent(total, subtotal)

```javascript
gst.getPercent(total, subtotal)

typeof total && typeof subtotal => number || string
```

Returns the GST percentage of a transaction.

### .formatter(total, currencySign)

```javascript
gst.formatter(total, currencySign)

typeof total => number || string
typeof currencySign => string
```

Returns a formatted string with the currency sign of choice. Default is "$".

## Properties

### GST Percent

Percentage is stored as a decimal (i.e. 15% is 0.15).

```javascript
gst.percent = number
```