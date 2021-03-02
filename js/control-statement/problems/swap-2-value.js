var a=10
var b=20

//using 3rd variable
var c=a
a=b
b=c

//using without 3rd variable 

a = a + b
b = a - b
a = a - b
console.log(a,b)