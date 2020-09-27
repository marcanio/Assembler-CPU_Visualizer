//import {alu} from "./alu.js"
import * as http from 'http'; //ES 6
import fs from 'fs';
import * as path from 'path';

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = './src' + request.url;
    if (filePath == './src/') {
        filePath = './src/index.html';
    }
    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
    // // if(req.method == "GET" && req.url == '/'){
       
    // // res.writeHead(200, {"Content-Type":"text/html"});
    // //     fs.createReadStream("src/index.html").pipe(res);

       
    // // }
    // // else if(req.url.match("\.css$")){
    // //     var cssPath = path.join(__dirname, 'src', req.url);
    // //     var fileStream = fs.createReadStream(cssPath, "UTF-8");
    // //     res.writeHead(200, {"Content-Type": "text/css"});
    // //     fileStream.pipe(res);

    // // }
    // if(req.url === "/"){
    //     fs.readFile("./src/index.html", "UTF-8", function(err, html){
    //         res.writeHead(200, {"Content-Type": "text/html"});
    //         res.end(html);
    //     });
    // }else if(req.url.match("\.css$")){
    //     var cssPath = path.join(req.url);
    //     var fileStream = fs.createReadStream(cssPath, "UTF-8");
    //     res.writeHead(200, {"Content-Type": "text/css"});
    //     fileStream.pipe(res);

    // }/*else if(req.url.match("\.png$")){
    //     var imagePath = path.join(__dirname, 'src', req.url);
    //     var fileStream = fs.createReadStream(imagePath);
    //     res.writeHead(200, {"Content-Type": "image/png"});
    //     fileStream.pipe(res);
    // }*/else{
    //     res.writeHead(404, {"Content-Type": "text/html"});
    //     res.end("No Page Found");
    // }
}).listen(3000, "127.0.0.1");

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
            console.log(err);
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}

