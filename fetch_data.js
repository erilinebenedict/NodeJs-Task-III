const fs = require("fs");
const fetch = require('node-fetch');

const url = "http://jsonplaceholder.typicode.com/posts";

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    
    fs.writeFile("./result/posts.json", JSON.stringify(json,null,6), function (err){
        if(err) throw err;
        console.log("Success!");   
    })   
  } catch (e) {
    console.log("Error creating file!");
  }
};

getData(url);
