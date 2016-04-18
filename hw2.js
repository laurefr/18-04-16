
            // Event Listener
            var event1 = document.getElementById("button1");
            event1.addEventListener ('click',myFirst,false);
            function myFirst (){
                //alert("event listener is working!");
           
                // storing the users into a local variable called userinput1
          var userinput1 = document.getElementById("intput1").value;
                
                // writing the local variable back to the HTML dom where element has an id of demo
                document.getElementById("demo").innerHTML = userinput1;
           
            }
