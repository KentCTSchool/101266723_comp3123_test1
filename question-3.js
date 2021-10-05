//Author: Kent Pedrocha


// Question 3: File Module
// ● Create a script that will do the following:
// 1. Remove Log files
// o remove all the files from the Logs directory, if exists
// o output the file names to delet
// o remove the Logs directory
// 2. Create Log files
// o create a Logs directory, if it does not exist
// o change the current process to the new Logs directory
// o create 10 log files and write some text into the file
// o output the files names to console
// o Hint: use the fs module and path module, and the process current working directory to
// build directory path. It is acceptable, to have a remove.js script and separate add.js
// script

const fs = require('fs')
const dir = './Logs'

const createLogs = () => {
    //creating file if does not exist
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    //changing file dir
    //with the help of path module
    process.chdir(dir);
    //some text inside the file
    author = 'Kent Pedrocha'
    //quantity of files
    for(let i = 0; i < 10 ; i++){
        //creating files based on iteration
        fs.writeFile(`./log${i}.txt`, author, err => {
            //di ko alam
            if (err) {
                console.error(err)
                return
              }
          })
          //displaying created files
        console.log(`log${i}.txt created.`)
    }
}

const removeLogs = () => {
    //checking tpoo
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    //changing file dir
    process.chdir(dir);
    //quantity of files
    for(let i = 0; i < 10 ; i++){
        //deleting files if exist

        if (fs.existsSync(`log${i}.txt`)){
            fs.unlink(`./log${i}.txt`, err => {
                //di ko alam
                if (err) {
                    console.error(err)
                    return
                }
            })
            //displaying the deleted files
            console.log(`Deleting   log${i}.txt!`)
        }
    }
}



// createLogs()
removeLogs()