var myIndex = 0;
        
        function carousel() {
        
            var slide = document.getElementsByClassName("mySlides");

            for (var i = 0; i < x.length; i++) {
               slide[i].style.display = "none";  
            }
            myIndex++;

            if (myIndex > slide.length) {
                myIndex = 1;
            }    
            slide[myIndex-1].style.display = "block";  
            setTimeout(carousel, 7000);    
        }
        carousel();