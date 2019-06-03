var https = require('https'); 

function getAndPrintHTML () {
  var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    /* Add your code here */
    // notice that https.get takes a callback with one parameter -
    // response, which is a Stream that represents the HTTP response
    https.get(requestOptions, function (response) {

      // set encoding of received data to UTF-8
      response.setEncoding('utf8');

      // declare variable to append data to
      let myData = "";

      // the callback is invoked when a `data` chunk is received
      response.on('data', function (data) {
        myData += data;
        console.log('Chunk Received. Length:', data.length);
      });
      // the callback is invoked when all of the data has been received
      // (the `end` of the stream)
      response.on('end', function() {
        console.log(`This is my data: ${myData}`);
        console.log('Response stream complete.');
      });
  });
}

getAndPrintHTML();