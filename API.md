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

### .getSubtotal(total)

```javascript
gst.getSubtotal(total)
typeof total => number || string
```

### .getGST(total, subtotal)

```javascript
gst.getGST(total, subtotal)
typeof total && typeof subtotal => number || string
```

### .getPercent(total, subtotal)

```javascript
gst.getPercent(total, subtotal)
typeof total && typeof subtotal => number || string
```

### .formatter(total, currencySign)

```javascript
gst.formatter(total, currencySign)
typeof total => number || string
typeof currencySign => string
```

## Properties

### GST Percent