# JSendie

**JSendie** is an [Express](http://expressjs.com) middleware to provide structured JSON reponses 
with 3 new methods - `res.success`, `res.fail`, and `res.error`.
It is based on JSend specification ([http://labs.omniti.com/labs/jsend](http://labs.omniti.com/labs/jsend)).

## Installation

```
npm install jsendie
```

Setup the middleware in your [Express](http://expressjs.com) app. Before any routes.
```javascript
var express = require('express')
  , JSendie = require('jsendie')
  , app = express()
  , PORT = 3000;

// Remmeber to use it before any routes
app.use(jsendie());

app.get('/success', function (req, res){
  res.success({
    message: 'Hi, JSendie!'
  });
});

app.listen(PORT, function(){
    console.log('JSendie listen to port: ' + PORT)
});

// http://localhost:3000/success response body
// {
//   "status": "success",
//   "data": {
//     "notice": "Hi, JSendie!"
//   }
// }
```
## Sample

https://github.com/kahwooi/jsendie/blob/master/test/server.js

## API

**JSendie** adds the following methods to the `res` methods:

### res.success(data)
* __data__: _Required_ success data.

### res.fail(data)
* __data__: _Required_ failure data. If the reasons for failure correspond to POST values, the response object's keys SHOULD correspond to those POST values.

### res.error(message, code, data)
* __message__: _Required_ error message.
* __data__: _Optional_ error data.
* __code__: _Optional_ error code.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.