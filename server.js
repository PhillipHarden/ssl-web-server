let fs = require("fs");
let http = require("http");
let path = require("path");
let url = require("url");
let hostname = "localhost";
let port = 8080;
http.createServer(function(req, res){
    let parsed = url.parse(req.url);
    let filename = path.parse(parsed.pathname);
    let file_name = filename.name==""?"index":filename.name;
    let ext = filename.ext==""?".html":filename.ext;
    let dir = filename.dir=="/"?"":filename.dir+"/";
    let page = filename.name==""?"index.html":filename.name;
    f = (dir+file_name+ext).replace("/","");
    let mimeTypes = {
        '.html':'text/html',
        '.js':'text/javascript',
        '.css':'text/css',
        '.png':'image/png',
        '.jpg':'image/jpg',
        '.gif':'image/gif',
    };    
    if (f) {
        fs.readFile(f,function(err,data){
            if(page){
                if(mimeTypes.hasOwnProperty(ext)){
                    res.writeHead(200, {'Content-Type': 'mimeTypes.'+ext});
                    res.write("<script>let page=`" + file_name + "`;</script>");
                    res.end(data, 'utf-8');
                }
            }
        })
    }
  }).listen(port, function(){
    console.log("info:",`Server is running at http://${hostname}:${port}/`);
  });