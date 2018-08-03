var fs = require("fs");

fs.readFile("./node-modules.json", function read(err, data) {
  content = JSON.parse(data);

  console.log(content);

  var stream = fs.createWriteStream("bulk-api-data");

  stream.once("open", function(fd) {
    content.forEach(e => {
      stream.write(`{"index":{"_id":"${e.id}"}}\n`);
      const { id, ...doc } = e;
      stream.write(`${JSON.stringify(doc)}\n`);
    });
    stream.end();
  });
});
