var http = require('http');

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write('hello, i know nodejitsu.')
   res.end();
}).listen(8000);

function watchFile(filepath, oncreate, ondelete) {
    var
      fs = require('fs'),
      path = require('path'),
      filedir = path.dirname(filepath),
      filename = path.basename(filepath);
  
    fs.watch(filedir, function(event, who) {
      if (event === 'rename' && who === filename) {
        if (fs.existsSync(filepath)) {
          oncreate();
        } else {
          ondelete();
        }
      }
    })
};

const mailboxFileName = `${process.env.HOSTNAME}_mailboxes.json`;
const path = `/usr/src/app/shared/${mailboxFileName}`;
console.log(`WATCH on ${path}`);
watchFile(
    path,
    () => console.log("file created!"),
    () => console.log("file deleted!")
);