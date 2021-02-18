
var n=5
var s=0
for(i=1;i<=n;i++)
{
  if (i < n) 
    {
        console.log( "1/" << i << " + ")
        s += 1 / i
    }
    if (i == n) 
    {
        console.log( "1/" << i)
        s += 1 / i
    }
}

console.log("1/1 + 1/2 + 1/3 + 1/4 + 1/5 + Sum of Series upto 5 terms :"+s)