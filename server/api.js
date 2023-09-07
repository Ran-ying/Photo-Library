const express = require('express');
const router = express.Router();
const fs = require("fs");
const mime = require('mime')

let data = require("./data.json")
// changes: 
//     "position"
//     "text"
//     "img"
//     "like"
const changeData = (year, month, day, index, changes)=>{
    for(let i in changes){
        data[year][month][data][index][i] = changes[i];
    }
    fs.writeFileSync("./data.json", JSON.stringify(data));
}

const addData = (year, month, day, index, news)=>{

}

const deleteData = (year, month, day, index)=>{

}
router.post('/addCard', (req, res)=>{

})
router.get('/changeCard', (req, res)=>{

})
router.get('/deletaCard', (req, res)=>{

})
router.get('/like', (req, res)=>{
    // req.query.id
})

router.get('/getList', (req, res) => {
    res.send(data)
})

router.get('/images/*', (req, res) => {
    let path = `.${decodeURI(req._parsedUrl.pathname.substring(0))}`
    fs.exists(path, (exists) => {
        if (exists) {
            console.log("True")
            res.setHeader('Content-Type', mime.getType(path))
            res.end(fs.readFileSync(path))
        }
        else {
            res.sendStatus(404)
        }
    })
})
module.exports = router;