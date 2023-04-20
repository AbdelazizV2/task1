import express from 'express';
const app = express();
const students =[
    "ahmed",
    "ismail",
    "mohammed",
    "yasser",
];
const studentlist =(req,res) =>{
    let output ="<ul>";
    for (let i=0; i< 4 ;i++){
        output+= "<li>"+students[i]+"</li>";
    }
    output+="</ul>"
    res.send(output);
};
app.get('/students',studentlist);
app.listen(3000);