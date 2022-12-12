let express = require('express')
let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.post('/notify',(req,res)=>{
    console.log(req.body)
})
app.get('/',(req,res)=>{
    console.log('return url')
    res.json(req.body)
})
app.listen(80)