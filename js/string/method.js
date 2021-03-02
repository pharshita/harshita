var username="harshita"
var greetmsg=`good morning ${username}`
console.log(greetmsg,greetmsg.length)


var str1="harshita"
var str2="harshu"
function strcmp(str1,str2){
    if(str1.length!=str2.length){
        return str1.length-str2.length
    }

    for(var i=0;i<str1.length;i++){
        var diff =  str1.charCodeAt(i) - str2.charCodeAt(i)
       if(diff != 0 ){
           return diff
       }
    }

    return 0

    
}

console.log(strcmp("harshita", "harshu"))

var str = "harshita patidar"
var search = "harshi"

console.log(str.includes(search))