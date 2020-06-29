var fs = require('fs');
var archiver = require('archiver');
let io = require("./io");
const path = require('path');

async function convert(sourceDir, destFile) {

    var output = fs.createWriteStream(__dirname + '/' + destFile);
    var archive = archiver('zip');

    output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error', function(err) {
        throw err;
    });

    archive.pipe(output);

    let files = await io.getFiles(sourceDir);

    console.log(sourceDir);

    files.forEach(function (file, index) {
        archive.file(file, { name: path.basename(file) });
        console.log("appended file '%s' to name '%s'.", file, path.basename(file));
    });

    //archive.directory(sourceDir, true, { date: new Date() });
    //archive.directory('uploads', true, { date: new Date() });

    archive.finalize();
  }



module.exports = {
    convert: convert
}