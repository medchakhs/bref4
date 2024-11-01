function Myajoute() {
    var ajout = document.getElementById("ajo");
    ajout.style.display = "table";
    var row = document.createElement("tr");
    row.style.textAlign = "center";
    let Name = document.getElementById("name").value;
    let Date = document.getElementById("date-time").value;
    let Descri = document.getElementById("Description").value;
    let Etas = document.getElementById("etas").value;
    row.innerHTML = `<td>${Name}</td><td>${Date}</td><td>${Descri}</td><td>${Etas}</td> <td> <button onclick="Mymodifier(event)" type="button" class="btn btn-warning">Modifier</button> <button type="button" onclick="suprimer(event)" class="btn btn-danger">Supprimer</button> </td>`;
    ajout.appendChild(row);
    document.getElementById("ajote").reset();
}
let tr = undefined;

function Mymodifier(event) {
    var ajout = document.getElementById("md");
    var button = event.currentTarget;
    tr = button.parentElement.parentElement;
    document.getElementById("name").value= tr.getElementsByTagName("td")[0].textContent;
    document.getElementById("date-time").value = tr.getElementsByTagName("td")[1].textContent;
    document.getElementById("Description").value = tr.getElementsByTagName("td")[2].textContent;
    document.getElementById("etas").value = tr.getElementsByTagName("td")[3].textContent;
    ajout.innerHTML = 'update';
    ajout.setAttribute('onclick' , 'modif()');
    
}
function modif(){
    if(tr !== undefined)[
        tr.getElementsByTagName("td")[0].textContent = document.getElementById("name").value ,
        tr.getElementsByTagName("td")[1].textContent = document.getElementById("date-time").value ,
        tr.getElementsByTagName("td")[2].textContent =document.getElementById("Description").value ,
        tr.getElementsByTagName("td")[3].textContent = document.getElementById("etas").value 
    ]
    var ajout = document.getElementById("md");
    ajout.setAttribute('onclick' , 'Myajoute()');
    ajout.innerHTML = 'Ajouter';
    document.getElementById("ajote").reset();
}
function suprimer(event) {
    var button = event.currentTarget;
    var trr = button.parentElement.parentElement;
    trr.remove();
}
