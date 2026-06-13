// Conditions
let age = 20;

if( age >= 18){
    console.log('Adult');
    
}else{
    console.log('Minor');   
}

let marks = 70;

if(marks >= 80){
    console.log('Grade A+');
    
}else if(marks >= 60){
    console.log('Grade A');
    
}else if (marks >= 40){
    console.log('Just Passed');
    
}else{
    console.log('Fail');
    
}

let isMale = true;
age = 11;

if(isMale && age >= 18){
    console.log('Adult Male');
    
}else{
    console.log('Child');
    
}

let a = 10;
let b = '10'
if(a == b) console.log('equal');
if(a === b) console.log(' Not equal');
