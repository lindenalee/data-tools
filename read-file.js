"use strict"
const fs = require("fs");
function read(fileUrl) {
  return new Promise((resolve,reject)=> {
    fs.readFile(fileUrl,"utf8", function(err,data){
      if(err) {
        reject(err);
        return;
      }
      resolve(data);

    })
  } );
}
module.exports= {
  read: read,
};
