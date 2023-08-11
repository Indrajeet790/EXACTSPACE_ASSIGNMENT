const fs=require("fs");
const path=require("path");

//  sytem path directory 
const systemPath="C:\\Windows";

// finding  full path to the log file 
const filePath=path.join(systemPath,"System32","Winevt","Logs");

// READING THE FILE
fs.readFile(filePath,"utf-8",(error,result)=>{
    if(error){
        console.log(error)
        return;
    }else{
        console.log(result)
    }
    const line=result.split(" ");
    if(line.length >100){
        const turncateData =line.slice(-100).join(" ");
        console.log(turncateData);
        fs.writeFile(filePath,turncateData,"utf-8",(error)=>{
            if(error){
                console.log(error)
            }else{
                console.log("log file turncate successfully")
            }
        })
    }
})


