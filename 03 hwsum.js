          var event1 = document.getElementById("button1");
            event1.addEventListener('click', myFirst, false);
            function myFirst (){
                
          var userinput1 = parseInt(document.getElementById("intput1").value);
          var userinput2 = parseInt(document.getElementById("intput2").value);      
          var answer = userinput1 + userinput2;
                
                
          document.getElementById("answer").innerHTML = answer; 
           

            }

