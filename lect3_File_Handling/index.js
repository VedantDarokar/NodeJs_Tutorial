import {readFile, writeFile, appendFile, mkdir } from 'fs/promises';       

//Read File
const read_File = async (fileName) => {
    const data = await readFile(fileName, 'utf-8');
    console.log(data);
}

read_File('sample.txt');

//Write File
const create_File = async (fileName, content) => {
    await writeFile(fileName, content);
    console.log("File created successfully");
}

create_File('ai.py', 'print("Hello World")');

//Append File
const append_File = async (fileName, content) => {          
    await appendFile(fileName, content, { flag: 'a' });
    console.log("File appended successfully");
} 
append_File('sample.txt', '\nWe are learning Node.js Mastery Course with 5 project and E-Commerce API with Full Authentication');

//Create Directory
const create_Directory = async (dirName) => {  
    try {
        await mkdir(dirName);
        console.log("Directory created successfully");
    } catch (error) {
        console.error("Error creating directory:", error);
    }
}   
create_Directory('new_directory');
