var http = require("http");
var url = require("url");

function start(route, handle) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received.`);

        //route(handle, pathname);

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // //response.write("Hello World");
        // var content = route(handle, pathname);
        // response.write(content);
        // response.end();
        route(handle, pathname, response);
    }).listen(8888);
    
    console.log(`Server has started.`)
}

exports.start = start;