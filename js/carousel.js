var myIndex = 0;
        
        function carousel() {
        
            var x = document.getElementsByClassName("mySlides");

            for (var i = 0; i < x.length; i++) {
               x[i].style.display = "none";  
            }
            myIndex++;

            if (myIndex > x.length) {
                myIndex = 1;
            }    
            x[myIndex-1].style.display = "block";  
            setTimeout(carousel, 7000);    
        }
        carousel();