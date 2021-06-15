
function openForm(id, boton,id2) {
    document.getElementById(id).style.display = "block";
    document.cookie = "idBook = "+encodeURIComponent(id2);
    if (id == "myForm") {
        var label = document.getElementById("edicion")
        label.innerHTML = `
       
              <option class="form-option" value="${boton.name}">${boton.name}</option>
            `
    }

}


function closeForm(id) {
    document.getElementById(id).style.display = "none";
    document.cookie = "idBook = "+encodeURIComponent(id2);

}