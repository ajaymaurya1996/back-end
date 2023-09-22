const express = require('express')
const app = express()
const path = require('path')
const port = 5000;
app.use(express.urlencoded({ extended: true })); app.get('/',(req,res)=> {
res.sendFile(path.join( dirname,'index.html'));
});

app.post('/',(req,res)=> {

const {hourly, average, daily} = req.body

res.send(`<h1>The total Monthly Income is ${hourly*average*daily} $</h1>`)

});
app.listen(port, ()=> {
console.log(`<h1>Server started on the port ${port} Rupee</h1>`);
})
