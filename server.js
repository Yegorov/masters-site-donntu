var express = require('express');
var serveStatic = require('serve-static');

var app = express();

function setHeaders(res, path) {
    if (serveStatic.mime.lookup(path) === 'text/html') {
        res.setHeader('Content-Type', "text/html; charset=windows-1251");
        // Custom Cache-Control for HTML files
        // res.setHeader('Cache-Control', 'public, max-age=0')
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    }
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
}

app.use(serveStatic('public', {
        'index': ['index.htm'],
        'setHeaders': setHeaders
    }));

app.listen(3000)