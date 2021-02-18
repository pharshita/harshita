function generatevarcharOTP()
{
    var string='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var OTP='  '
    var len=string.length
    for(i=0; i<9; i++)
    {
        OTP+=string[Math.floor(Math.random ()* len)]
    }
 return OTP
}
console.log(generatevarcharOTP())