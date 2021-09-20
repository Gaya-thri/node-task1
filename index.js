const fs = require("fs");
const path = require('path');

const dir = path.dirname(__filename);
console.log(dir);

const d = new Date();
const date = d.toString().split(" ");
fs.writeFile(`${date[2]}-${date[1]}-${date[3]}.txt`,`${d}`,function(err){
    if(err){
        return err;
    }
    else {
        console.log("file created");
    }
})

fs.readdir(dir, function(err,files){
    if(err){
         return err;
    }
    const textfiles = files.forEach(file =>{
        if(path.extname(file) == ".txt"){
            console.log(file);
        }
    })
})
