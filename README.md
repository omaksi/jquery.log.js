jquery.log.js
=============

jQuery Log Plugin - chainable console.log replacement

- chainable
- can be enabled/disabled in code or runtime

###Usage:

As a chainable jQuery command 

```
$('body').log().css('backgroundColor', 'red').log();
```

As a standalone command

```
$.log($('body'));
```

To enable/disable

```
$.log.enable();
$.log.disable();
```


###API:

*.enable*

enables logging

*.disable*

disables logging

*.setOptions({})*

sets specified options passed as an object

###Options 

*enabled*

boolean - self explanatory 

default: true

*loopArrays*

boolean - if set to true, when logging an array, iterates the array and logs each array element individually

default: false

###Author:



###License:

MIT License