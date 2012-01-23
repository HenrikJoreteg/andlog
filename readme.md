# &log

Super simple, but solves these pain points:
- Lets you leave log statements in production, client-side code.
- It won't log anything unless `localStorage.debug` is set.
- Uses native `console` rather than trying to wrap it in something (which makes the output ugly).
- Designed for CommonJS on the client (won't work otherwise, sorry).

## How to use it:

```javascript
var logger = require('&log');

logger.log('hello');
```

This is identical to:
```javascript
console.log('hello');
```

## License
MIT