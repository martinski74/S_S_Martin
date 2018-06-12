
      var myIndex = 0;
      
      function carousel() {
          var i;
          var element = document.getElementsByClassName("mySlides");
          for (i = 0; i < element.length; i++) {
            element[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > element.length) {
              myIndex = 1
            }    
          element[myIndex-1].style.display = "block";  
          setTimeout(carousel, 7000);    
      }
      carousel();