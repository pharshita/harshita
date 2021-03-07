
//.........element selectore.......

// $('body').on('click','#div-1',()=>{
//     alert('hiii')
// })

//..........text..........
// $('body').on('click','h1',function(){
// $("h1").text("hello world")

//  })


//..........html..........

// $('body').ready(function(){
    // $(".btn-save ").click(function(){
//    $('p').prepend('hii')
//     $('p').prepend('hiii ')
//$('p').remove()
   // $('p').html('')

// })
// })

//.............attribute.........
// $('body').ready(function(){
//     $('input').attr('password')
    
// })

 //$('body').on('click','button',function(){
// if($('input').attr('type') == 'password'){
//          $('input').attr('type', 'text')
//          $(this).text('hide password')
//         }else{
            
//      $('input').attr('type', 'password')
//        $(this).text('show password')
    
//     }

// var inpVal = $(this).val()
// console.log(inpVal)
// if(inpVal.length >= 3){
//     $('button').removeAttr('disabled')
// }else{
//     $('button').attr('disabled','')

// }
// var exihisting=$('p').css('font-size')
// exihisting=parseint(exihisting.replace('px',''))
// newFS=exihisting+2
// $('p').css('font-size', newFS+'px')
// $('p').css('font-size', '+=2px')

// $('p').css('font-size','+=2px')


 //})

 $('body').on('click','btn-save',function(){
     var name=$('input').val()
     var len=$('tbody').children().length+1
     console.log(len)
     var row = `<tr>
     <td class="count">${len}</td>
     <td class="name">${name}</td>
     <td>
         <button class="btn-remove">x</button>
     </td>
 </tr>
 `
 
 
 $('tbody').append(row)
 })
 
 $('body').on('click', '.btn-remove', function(){
     $(this).parent().parent().remove()
     resetCount()
 })
 
 function resetCount(){
    var count = 1
    $('tbody tr').each(function(){
        $(this).find('.count').text(count++)
    })
}

setTimeout(function(){
    alert("Time out")
}, 5000)

setInterval(function(){
    console.log("hello")
}, 3000)

 





