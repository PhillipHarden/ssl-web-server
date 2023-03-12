// Imports the built-in Node.js fs (file system) module, which is used to read files from the local file system
let fs = require("fs");
// Imports the built-in Node.js http module, which is used to create an HTTP server
let http = require("http");
// Imports the built-in Node.js path module, which is used to parse the file paths in the requested URL
let path = require("path");
//  Imports the built-in Node.js url module, which is used to parse the requested URL
let url = require("url");
// Sets the hostname and port that the server will listen on
let hostname = "localhost";
let port = 8080;
// Creates an HTTP server and defines a callback function that will be called for each incoming request
http.createServer(function(req, res){
    // Parses the requested URL using the url.parse() method
    let parsed = url.parse(req.url);
    // Parses the file path from the requested URL using the path.parse() method
    let filename = path.parse(parsed.pathname);
    // Extracts the file name from the parsed file path, defaulting to "index" if no file name is specified
    // the "?" is a ternary operator, which is used as a shorthand for an if-else statement.
    // This line reads as: "f the filename.name is an empty string "", then set the file_name variable to "index". Otherwise, set file_name to filename.name.
    let file_name = filename.name==""?"index":filename.name;
    // Extracts the file extension from the parsed file path, defaulting to ".html" if no extension is specified
    let ext = filename.ext==""?".html":filename.ext;
    // Extracts the directory path from the parsed file path, defaulting to an empty string if no directory path is specified
    let dir = filename.dir=="/"?"":filename.dir+"/";
    // Sets the page to be served, defaulting to "index.html" if no page is specified
    // This is the variable that I will use in the html files to change the color of my navigation links
    let page = filename.name==""?"index.html":filename.name;
    // Constructs the full file path by concatenating the directory path, file name, and file extension, and removes any leading slashes
    f = (dir+file_name+ext).replace("/","");
    // Defines an object that maps file extensions to MIME types
    // MIME (Multipurpose Internet Mail Extensions) types are a way to specify the type of data that is being sent in an HTTP response
    let mimeTypes = {
        '.html':'text/html',
        '.js':'text/javascript',
        '.css':'text/css',
        '.png':'image/png',
        '.jpg':'image/jpg',
        '.gif':'image/gif',
    };    
    // Checks if a file path has been constructed for the requested URL
    if (f) {
        // Reads the file from the local file system using the constructed file path
        fs.readFile(f,function(err,data){
            // Checks if a page has been specified in the requested URL
            if(page){
                // Checks if the requested file extension is defined in the mimeTypes object
                if(mimeTypes.hasOwnProperty(ext)){
                    // Sets the response header with the appropriate MIME type for the requested file extension
                    res.writeHead(200, {'Content-Type': 'mimeTypes.'+ext});
                    // Writes a script tag to the response that sets a JavaScript variable named "page" to the requested file name
                    res.write("<script>let page=`" + file_name + "`;</script>");
                    // Sends the file data as the response body, with the UTF-8 character encoding
                    res.end(data, 'utf-8');
                }
            }
        })
    }
    //  The listen() method is used to start an HTTP server listening for incoming requests on a specified network address and port number
  }).listen(port, function(){
    console.log("info:",`Server is running at http://${hostname}:${port}/`);
  });
  