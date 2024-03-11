var exec = require("child_process").exec;

function start(response) {
    console.log(`Request handler 'start' was called.`);

    // function sleep(ms) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + ms);
    // }

    // sleep(10000);
    var content = "empty";
    exec("ls -lah", function (err, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });

    // return "Hello Start";
    return content;
}

function upload(response) {
    console.log(`Request handler 'upload' was called.`);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;