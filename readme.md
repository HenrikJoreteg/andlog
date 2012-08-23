[![build status](https://secure.travis-ci.org/HenrikJoreteg/andlog.png)](http://travis-ci.org/HenrikJoreteg/andlog)
# &log

Super simple, but solves these pain points:

- Lets you leave log statements in production, client-side code.
- It won't log anything unless `localStorage.debug` is set.
- Uses native `console` rather than trying to wrap it in something (which makes the output ugly).
- Works with CommonJS.
- It's just a selective alias for the `window.console` so the normal API applies.

## How to use it:


Step 1. include it:

```html
<script src="andlog.js"></script>
```

Step 2. Use the `console` in your code as usual:

```javascript
console.log("hello");
```

Step 3. If you want to see log output set a value called `debug` in `localStorage` by doing typing this in console:

```javascript
localStorage.debug = true
```

Step 4. Refresh the page, you should now see logs.

Step 5. To turn off console, just delete the localStorage flag:

```javascript
delete localStorage.debug
```

Step 6. Feel free to deploy to production with console stuff in there.


## CommonJS Version

If you're using this on the client but your project is in node.js you can install this with: https://github.com/henrikjoreteg/clientmodules and npm. 

```javascript
var logger = require('&log');

logger.log('hello');
```

This is identical to:

```javascript
console.log('hello');
```

You *could* even get fancy and call it `console`. However by doing this you take the risk that you'll forget to `require` it and it'll still work and you'll ship it to production. However, obviously this would work as well:

```javascript
var console = require('&log');

console.log('hello');
```

## License

MIT

If you like this, follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on the twitterwebz.