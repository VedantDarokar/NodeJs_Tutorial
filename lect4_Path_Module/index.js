// console.log("This is the index.js file in the lect4_Path_Module directory.");

const path = require('path');

//join two or more file
const fullPath = path.join('/path', 'index.py', 'test.java')
// console.log("files join = ", fullPath);

//index.py,test.java

//absolute path
const absolutePath = path.resolve()
// console.log("Absolute path = ", absolutePath)

//extension name
const extName = path.extname('resume.pdf')
console.log("Extension name = ", extName)

if(
    extName === '.pdf'
) {
    console.log("This is a PDF file.")
}
else {
    console.log("This is not a PDF file.")
}