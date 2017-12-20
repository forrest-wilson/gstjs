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
var gst = new GST();
```

## Methods

### .getTotal(subtotal)

Returns the GST inclusive number.

```javascript
gst.getTotal(subtotal)

typeof subtotal => number || string
```

### .getSubtotal(total)

Returns the GST exclusive number.

```javascript
gst.getSubtotal(total)

typeof total => number || string
```

### .getGST(total, subtotal)

Returns the GST component of a transaction.

```javascript
gst.getGST(total, subtotal)

typeof total && typeof subtotal => number || string
```

### .getPercent(total, subtotal)

Returns the GST percentage of a transaction.

```javascript
gst.getPercent(total, subtotal)

typeof total && typeof subtotal => number || string
```

### .setPercent(decimal)

Sets the constructors' .percent property

```javascript
gst.setPercent(decimal)

typeof decimal => number || string
```

### .formatter(total, currencySign)

Returns a formatted string with the currency sign of choice. Default return value is "$0.00".

```javascript
gst.formatter(total, currencySign)

typeof total => number || string
typeof currencySign => string
```

## Properties

### GST Percent

Percentage is stored as a decimal (i.e. 15% is 0.15).

```javascript
gst.percent
```