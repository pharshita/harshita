var a=10
var b=200
var c=30

var big
if(a>b){
    if(a>c){
        big=a
    }
    else{
        big=c
    }
}else{
    if(b > c){
        big = b
    }else{
        big = c
    }
}
console.log(big)


//using conditional operatore

var big = a>b ? (a>c ? a : c) : (b>c ? b : c)  
console.log(big)