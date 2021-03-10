$(function(){
    $('body').ready(function(){
        $('#usercheck').hide()
        $('#passcheck').hide()
        $('#concheck').hide()

        var user_err=true
        var mail_err=true
        var pass_err=true
        var conpass_err=true
        $('#username').keyup(function(){
            username_check()
        })

        function username_check(){
            var user_val=$('#username').val()
            
            if(user_val.length ==''){
                $('#usercheck').show()
                $('#usercheck').html("**please fill the username")
                $('#usercheck').focus()
                $('#usercheck').css("color","red")
                user_err=false
                return false


            }else{
                $('#usercheck').hide()
            }

            if((user_val.length<3)||(user_val.length>10)){
                $('#usercheck').show()
                $('#usercheck').html('**username length between 3 and 10')
                $('#usercheck').focus()
                $('#usercheck').css("color","red")
                user_err=false
                return false


            }else{
                $('#usercheck').hide()
            }

            
        }


        $('#email').keyup(function(){
            mail_check()
        })

        function mail_check(){
            var user_val=$('#email').val()
            
            if(user_val.length ==''){
                $('#emailcheck').show()
                $('#emailcheck').html("**please fill the email")
                $('#emailcheck').focus()
                $('#emailcheck').css("color","red")
                mail_err=false
                return false


            }else{
                $('#emailcheck').hide()
            }

            if((user_val.length<10)||(user_val.length>30)){
                $('#emailcheck').show()
                $('#emailcheck').html('**email length between 10 and 30')
                $('#emailcheck').focus()
                $('#emailcheck').css("color","red")
                mail_err=false
                return false


            }else{
                $('#emailcheck').hide()
            }

            
        }
        $('#password').keyup(function(){
            password_check()
        })
        function password_check(){
          var passwordstr=  $('#password').val()
          if(passwordstr.length==''){
            $('#passcheck').show()
            $('#passcheck').html("**please fill the password")
            $('#passcheck').focus()
            $('#passcheck').css("color","red")
            pass_err=false
            return false


        }else{
            $('#passcheck').hide()
          }


          if((passwordstr.length<5)||(passwordstr.length>10)){
            $('#passcheck').show()
            $('#passcheck').html('**password length between 5 and 10')
            $('#passcheck').focus()
            $('#passcheck').css("color","red")
            pass_err=false
            return false


        }else{
            $('#passcheck').hide()
        }
        }

        $('#Conform_password').keyup(function(){
            con_password()
        })

        function con_password(){
            var conpass_str=$('#Conform_password').val()
            var passwordstr=  $('#password').val()
            if(passwordstr!=conpass_str){

                $('#concheck').show()
                $('#concheck').html("**password are not matching")
                $('#concheck').focus()
                $('#concheck').css("color","red")
                conpass_err=false
                return false
    
    
            }else{
                $('#concheck').hide()
              }
            
        }

        $('body').on('click' ,'.submitbtn' , function(){
            user_err=true
            mail_err=true
            pass_err=true
            conpass_err=true

            username_check()
            mail_check()
            password_check()
            con_password()

            if((user_err==true) && (pass_err==true) && (conpass_err==true)){
                alert('form submited')
            }else{
                return false
            }

            
        })
    })
})