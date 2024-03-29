var https = require('https'); 

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {

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
    setTimeout(() => console.log(myData), 5000);

    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
  
}
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  
  getAndPrintHTML(requestOptions);