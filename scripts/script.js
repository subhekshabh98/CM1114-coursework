
/* Login code */
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email === "" || password === "") {
        alert("Please enter your email and password to log in.");
      } else {
        // perform login logic here
        alert("Logged in successfully!");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      }
    }
/* Logout code */
    function logout() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      
      if(email === "" && password === "") {
        alert("You are not logged in.");
      } else {
        // perform logout logic here
        alert("Logged out successfully!");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      }
    }

/*Image event Listener*/
    document.getElementById("img-gallery1").addEventListener("mouseover", highlight);
        document.getElementById("img-gallery1").addEventListener("mouseout", delight);
            // Highlight function to make image stand out
                function highlight() {
                    document.getElementById("img-gallery1").style="border: solid blue 2px;"
                    }

                    form.addEventListener('blur', function( hover ) {
                        event.target.style.border = "solid white 2px";
                        event.target.style.boxShadow = "0 0 5px white";
                    }, true);
                function delight() {
                    document.getElementById("img-gallery1").style="border: none;"
                    }
    document.getElementById("img-gallery2").addEventListener("mouseover", highlight);
        document.getElementById("img-gallery2").addEventListener("mouseout", delight);                    
                        // Highlight function to make image stand out
                function highlight() {
                        document.getElementById("img-gallery2").style="border: solid red 2px;"
                        }
                    
                function delight() {
                        document.getElementById("img-gallery2").style="border: none;"
                        document.getElementById("img-gallery3").addEventListener("mouseover", highlight);
                        document.getElementById("img-gallery3").addEventListener("mouseout", delight);                    
                        // Highlight function to make image stand out
                function highlight() {
                        document.getElementById("img-gallery3").style="border: solid black 2px;"
                        }
                    
                function delight() {
                        document.getElementById("img-gallery3").style="border: none;"
                        }
                    }
                   
    document.getElementById("img-gallery4").addEventListener("mouseover", highlight);
                        document.getElementById("img-gallery4").addEventListener("mouseout", delight);                    
                        // Highlight function to make image stand out
                function highlight() {
                        document.getElementById("img-gallery4").style="border: solid green 2px;"
                        }
                                    
                function delight() {
                        document.getElementById("img-gallery4").style="border: none;"
                        }
    document.getElementById("img-gallery5").addEventListener("mouseover", highlight);
                        document.getElementById("img-gallery5").addEventListener("mouseout", delight);
                        // Highlight function to make image stand out
                function highlight() {
                        document.getElementById("img-gallery5").style="border: solid limegreen 2px;"
                        }
    
                function delight() {
                        document.getElementById("img-gallery5").style="border: none;"
                   
    document.getElementById("img-gallery6").addEventListener("mouseover", highlight);
                        document.getElementById("img-gallery6").addEventListener("mouseout", delight);                    
                        // Highlight function to make image stand out
                function highlight() {
                        document.getElementById("img-gallery6").style="border: solid brown 2px;"
                        }
                    
                function delight() {
                        document.getElementById("img-gallery6").style="border: none;"
                        }
                   
    document.getElementById("img-gallery7").addEventListener("mouseover", highlight);
                        document.getElementById("img-gallery7").addEventListener("mouseout", delight);                    
                        // Highlight function to make image stand out
                function highlight() {
                        document.getElementById("img-gallery7").style="border: solid grey 2px;"
                        }
                    
                function delight() {
                        document.getElementById("img-gallery7").style="border: none;"
                        }
               
    document.getElementById("img-gallery8").addEventListener("mouseover", highlight);
                        document.getElementById("img-gallery8").addEventListener("mouseout", delight);                    
                        // Highlight function to make image stand out
                function highlight() {
                        document.getElementById("img-gallery8").style="border: solid pink 2px;"
                        }
                                    
                function delight() {
                        document.getElementById("img-gallery8").style="border: none;"
                        }
                    
    document.getElementById("img-gallery9").addEventListener("mouseover", highlight);
                        document.getElementById("img-gallery9").addEventListener("mouseout", delight);
                        // Highlight function to make image stand out
                function highlight() {
                        document.getElementById("img-gallery9").style="border: solid violet 2px;"
                        }
    
                function delight() {
                        document.getElementById("img-gallery9").style="border: none;"
                        }


            /* Adding event Listener */
            const images = document.querySelectorAll('.image');
            const gallery = document.querySelector('.gallery');
    
            images.forEach(image => {
            image.addEventListener('click', function() {
                images.forEach(image => image.classList.remove('selected'));
                this.classList.add('selected');
            });
            });
    
            gallery.addEventListener('mouseleave', function() {
            images.forEach(image => image.classList.remove('selected'));
            });}


/*Login or Logged out*/
    var counter = 2;
        function login(){
            if(counter % 2 == 0){
        alert('You have been logged in!');
            }
            else {
        alert('You have been logged out!');
            }
        counter += 1;
            }


/* Homepage Login*/
            function login() {
                var email = document.getElementById("email").value;
                var password = document.getElementById("password").value;
  
                if(email === "" || password === "") {
                    alert("Please enter your email and password to log in.");
                  } else {
                    // perform login logic here
                    alert("Logged in successfully!");
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                  }
                }
  
                function logout() {
                  var email = document.getElementById("email").value;
                  var password = document.getElementById("password").value;
                  
                  if(email === "" && password === "") {
                    alert("You are not logged in.");
                  } else {
                    // perform logout logic here
                    alert("Logged out successfully!");
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                  }
                }



/* Suubmitting a form */
function submit_event() {
        var title = document.forms["event"]["event_title"].value;
        var date = document.forms["event"]["event_date"].value;
            if (title == "") {
                alert("An event must have a title!");
            }
            else {
            if (date.length == 0) {
                alert("An event must have a date!");
            }
            else {
                alert("Event submitted! The society will contact you soon!");
            }
             }
}



// Add a click event listener to each technology box
const technologies = document.querySelectorAll('.technology');
technologies.forEach(technology => {
  technology.addEventListener('click', () => {
    // Toggle the class 'active' on the clicked technology box
    technology.classList.toggle('active');
  });
});
