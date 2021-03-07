minutes=document.getElementById("minutes")
seconds=document.getElementById("seconds")
centiseconds=document.getElementById("centiseconds")
minutescount=0,secondcount=0,centisecondcount=0

function startWS(){
    $('.pausecount').removeAttr('disabled')
    $('.resetcount').removeAttr('disabled')
    $('.startcount').attr({'disabled':'disabled'})
    minutssetInterval= setInterval(function(){
        minutescount+=1
        minutes.innerHTML=minutescount
    },60000)
   secondssetInterval=setInterval(function(){
        secondcount+=1
        if(secondcount>59){
            secondcount=1
        }
        seconds.innerHTML=secondcount
    },1000)
   centisecondssetInterval= setInterval(function(){
        centisecondcount+=1
        if(centisecondcount>99){
            centisecondcount=1
        }
        centiseconds.innerHTML=centisecondcount
    },10)
    
}

function pauseWS(){
    $('.startcount').removeAttr('disabled')
    
    $('.pausecount').attr({'disabled':'disabled'})
    clearInterval(minutssetInterval)
    clearInterval(secondssetInterval)
    clearInterval(centisecondssetInterval)
}

function resetWS(){
    $('.startcount').removeAttr('disabled')
   
    $('.resetcount').attr({'disabled':'disabled'})
    $('.pausecount').attr({'disabled':'disabled'})
    clearInterval(minutssetInterval)
    clearInterval(secondssetInterval)
    clearInterval(centisecondssetInterval)
    minutescount=0,secondcount=0,centisecondcount=0
    minutes.innerHTML=minutescount
    seconds.innerHTML=secondcount
    centiseconds.innerHTML=centisecondcount

}



