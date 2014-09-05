#!/usr/bin/node
/*
  This program outputs valid json of the csv input file 
*/

var TBR = require('./tuxedoBrosResult')
, fs = require('fs');

/* 
I was trying to use this stream method to read the file line by line but didn't know how to get the data out of the callback :(
var liner = require('./liner')
var arr = [];// [99,89];
var source = fs.createReadStream('./SprintJuly14ind.csv')
source.pipe(liner)
//liner.on('readable',linerCallback)

liner.on('readable', function(myArr) { 
//for (var i=0; i<myArr.length; i++) {
//console.log(myArr[i]);
//}
    var line 
    while (line = liner.read()) { 
	var result = new TBR(line)
//	myArr.push(result)

	result.JSON();
//result.print();
//	console.log('-===- ');
	//    console.log(line);
	//    parseRowIntoObjects(line);
    }
// console.log("[");
// console.log(arr.length);
// for (var i=0; i<arr.length; i++) {
// console.log(i);
// arr[i].JSON()
// if (i!==arr.length){ console.log(",") }
// }
// console.log("]")

} )//(arr)

var linerCallback=function(array){
    var line 
    while (line = liner.read()) { 
	var result = new TBR(line)
	array.push(result)
    }
}

*/

//This method will fail on a very large file as you'll run out of memory
var fileContentArray = fs.readFileSync('../data/SprintJuly14ind.csv').toString().split("\n");

var resultArray=[];

//for(i in fileContentArray) {
//    console.log(array[i]);
//var result = new TBR(fileContentArray[i])
for (var i=0; i<fileContentArray.length; i++) {
//console.log(fileContentArray[i]);
var test = fileContentArray[i].split(',');
//console.log(test.length)
//ensure therr is data to turn into an object
if (test.length === 19 ){
var result = new TBR(fileContentArray[i])

//var result = new TBR(i)
resultArray.push(result.JSONstring())
}
}

console.log("[");
//console.log(resultArray.length);
for (var i=0; i<resultArray.length; i++) {
//console.log(i);
//resultArray[i].JSON()
if (i!==resultArray.length-1){
 console.log(resultArray[i]+",") 
} else {
console.log(resultArray[i]);
}
}
console.log("]")

