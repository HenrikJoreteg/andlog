# &log

Super simple, but solves these pain points:

- Lets you leave log statements in production, client-side code.
- It won't log anything unless `localStorage.debug` is set.
- Uses native `console` rather than trying to wrap it in something (which makes the output ugly).
- Designed for CommonJS on the client (won't work otherwise, sorry).
- It's just a selective alias for the `window.console` so the normal API applies.

## How to use it:

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