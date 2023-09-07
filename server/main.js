var express = require('express')
var app = express()
app.listen(9000, '0.0.0.0')
app.use('/api/', require('./api'))
app.use('/', express.static('../Plibrary/dist'));
app.all('*',(req,res)=>{
    res.send('404!');
})

console.log('http://127.0.0.1:9000')