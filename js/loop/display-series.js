var x=3
var n=5
 
function sum(x,y)
{
    total=1
    for (i=0; i<=n ;i++)
    total=total+((pow(x, i) / i))
    console.log(total)
        
    }
    console.log("Sum of the Series 1 + x/1 + x^2/2 + x^3/3 + .. + x^"+n+"<<n<<"/"<<n<<" is "setprecision(5)   calcSeriesSum(x, n))