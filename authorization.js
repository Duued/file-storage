      function checkAuth(){
        if (document.getElementById("pass").value == "cyDDBPf"){
          document.getElementById("iframe").src = "https://teachers.beauty";
          document.getElementById("destroy").remove();
        }
        else{
          document.getElementById("destroy").remove()
          document.getElementById("iframe").remove();
          document.getElementById("hidden").innerText = "Unauthorized."
        }
      }
