// localStorage.clear()
// test data
// let tranie1 = {"ID" : 1,
// "Name" : "Talab yaseen",
// "Tasks(accomplished/missed)" : "50/50",
// "absence_days" : 100,
// }
// let tranie2 = {"ID" : 2,
// "Name" : "Karam hatem",
// "Tasks(accomplished/missed)" : "50/4",
// "absence_days" : 5,
// }
// let tranie3 = {"ID" : 3,
// "Name" : "Hanen",
// "Tasks(accomplished/missed)" : "50/2",
// "absence_days" : 4,
//  }
//  let tranie4 = {"ID" : 4,
// "Name" : "Asem yaseen",
// "Tasks(accomplished/missed)" : "50/1",
// "absence_days" : 1,
//  }
//  let tranie5 = {"ID" : 5,
// "Name" : "baraa abumatiq",
// "Tasks(accomplished/missed)" : "50/0",
// "absence_days" : 0,
//  }
// let tranies = JSON.parse(localStorage.getItem("tranies"))||[tranie1,tranie2,tranie3,tranie4,tranie5]
// // git data to local storge
// localStorage.setItem("tranies",(JSON.stringify(tranies)))
// // git data from local storge
// storege_tranies = JSON.parse(localStorage.getItem("tranies"))   




let opj1 = {
    "id":6,"Name":"Asem",
    "Feeds":"100"
 }
let traniess = [opj1]

localStorage.setItem("traniess",(JSON.stringify(traniess)))

theSelect = 

document.getElementById("table_container").innerHTML = html;
















// build the table 

function read_data(){
html =`<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Task<br><span class="Completed_green">Completed</span> / <span class="missd_red">missd</span></th><th>Attendance<br><span class="missd_red">absence days</span> </th></tr></thead><tr><td><input class="input" type="number"id="new_id"</td><td><input class="input"  type="text" id="new_name"</td><td><button class="input add_button" id="add_button" type="button" onclick="Add_traine_final()">+add</button></td></tr>`
//make a loop to get data from the array
storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
storege_tranies.map(function(tranie){
html+=`<tr><td>${tranie.ID}</td><td>${tranie.Name}</td><td>${tranie["Tasks(accomplished/missed)"]}</td><td>${tranie.absence_days}</td></tr>`
}) 
html+=`</table>`
// print the data from the table
document.getElementById("table_container").innerHTML = html;
}
read_data()
// add new triane
function Add_traine(){
    document.getElementById("new_id").style.display
    document.getElementById("new_id").style.display = "initial";
    document.getElementById("new_name").style.display = "initial";
    document.getElementById("add_button").style.display = "initial";


    // new_name = document.getElementById("new_name")
    // new_id = document.getElementById("new_id")
    // if (new_name.style.display =="none") {
    //     new_name.style.display =="none"
    //     new_id.style.display =="none"
    }
    function Add_traine_final(){
        storege_tranies = JSON.parse(localStorage.getItem("tranies"))  
        
        
        new_tranie = {"ID":document.getElementById("new_id").value,
        "Name":document.getElementById("new_name").value,
        "Tasks(accomplished/missed)" : 0,
        "absence_days" :0

    }
    storege_tranies.push(new_tranie)
    localStorage.setItem("tranies",(JSON.stringify(storege_tranies)))
    read_data()

    }
// storege_tranies = JSON.parse(localStorage.getItem("tranies"))
// let new_id = document.createElement('input') ;
// new_id.type = "text"
// let new_name = document.createElement('input') ;
// new_name.type = "text"
// html =`<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Task<br><span class="Completed_green">Completed</span> / <span class="missd_red">missd</span></th><th>Attendance<br><span class="missd_red">absence days</span> </th></tr></thead><tr><td>${new_id}</td><td>${new_name}</td></tr`
// storege_tranies.map(function(tranie){
// html+=`><tr><td>${tranie.ID}</td><td>${tranie.Name}</td><td>${tranie["Tasks(accomplished/missed)"]}</td><td>${tranie.absence_days}</td></tr>`
// }) 
// html+=`</table>`
// document.getElementById("table_container").innerHTML = html;

    // new_traine = "<table><tr><td></td><td></td></tr></table
