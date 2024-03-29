var https = require('https');
module.exports = function getHTML (options, callback) {
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
    setTimeout(() => callback(myData), 5000);

    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
};