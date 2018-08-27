// Dependencies
var http = require("http");
var fs = require("fs");

// Set port
var PORT = 8080;

// Create server
var server = http.createServer(handleReqest);

// Function to handle requests and responses coming into server
// When we get a request, we send back...
function handleReqest(req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        // Status code if there's an error
        if(err){
            res.writeHead(200);
            res.end("Something went wrong (could not read html file).");
        }
        // Respond to client with HTML page and tell the browser
        res.writeHead(500, {"Content-Type": "text/html" });
        res.end(data);
    });
}

// Starts our server
server.listen(PORT, function() {
    console.log(`Server is listening on http://localhost:${PORT}`);
})