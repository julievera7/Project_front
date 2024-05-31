const form = document.getElementById("formmain");
const email = document.getElementById("email");

form.addEventListener("submit", (e)=> {
    if(form.checkValidity()===false) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
      validateInput();
      return false;
    }
  });

const isValidEmail = email => {
    const correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return correo.test(String(email).toLowerCase());
}

if (typeof form !== "undefined") {
 
}

function consultar(){
  document.getElementById('bookmatch').innerHTML="";
  fetch("https://openlibrary.org/search.json?q="+document.getElementById("buscar").value+"&fields=*,availability&limit=1").then(a=>a.json()).then(response =>{
    for(var i=0; i<3; i++){
      document.getElementById("bookmatch").innerHTML+="<h3>"+response.docs[i].title+"</h3>"+response.docs[i].author_name[0]+"<br><img src='https://covers.openlibrary.org/a/olid/"+response.docs[i].key[0]+"-M.jpg'><br>";
    }
  });
}

function reiniciar(){
  fetch("https://julievera7.github.io/Project_front/index.html")
}