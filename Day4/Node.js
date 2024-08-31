increment
const express = require('express');
const app = express();
const port =3000;

//middleware to parse the json body
app.use(express.json());

let count =0;

//route to increement the count
app.post('/increment' , (req,res)=>{
count+=1;
res.json({count});
});

//route to decrement the count


app.post('/decrement', (req,res)=>{
    if(count>0){
    count-=1;
    res.json({count});
    }else{
        res.status(400).json({error:"Count can not be negative"})
    }
});

//route to get current count
app.get('/count', (req,res)=>{
    res.json({count});
});

//start the server
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})



