// localStorage.clear()
// test data
let tranie1 = {"ID" : 1,
"Name" : "Talab yaseen",
"Tasks(accomplished/missed)" : "50/50",
"absence_days" : 100,
}
let tranie2 = {"ID" : 2,
"Name" : "Karam hatem",
"Tasks(accomplished/missed)" : "50/4",
"absence_days" : 5,
}
let tranie3 = {"ID" : 3,
"Name" : "Hanen",
"Tasks(accomplished/missed)" : "50/2",
"absence_days" : 4,
 }
 let tranie4 = {"ID" : 4,
"Name" : "Asem yaseen",
"Tasks(accomplished/missed)" : "50/1",
"absence_days" : 1,
 }
 let tranie5 = {"ID" : 5,
"Name" : "baraa abumatiq",
"Tasks(accomplished/missed)" : "50/0",
"absence_days" : 0,
 }


let tranies = JSON.parse(localStorage.getItem("tranies"))||[tranie1,tranie2,tranie3,tranie4,tranie5]

localStorage.setItem("tranies",(JSON.stringify(tranies)))

storege_tranies = JSON.parse(localStorage.getItem("tranies"))   


// document.getElementById("Some").innerHTML = FullData;


storege_tranies = JSON.parse(localStorage.getItem("tranies"))   
let selected = document.getElementById("selectStyle")
storege_tranies.map(function(tranie){

    selected+= `<option>${tranie.Name}</option>`
}
    )
document.getElementById("selectStyle").innerHTML = selected;

function textfunc(){
let textarr = []
let textobj={}
let textA = document.getElementById("textArea").value

textobj = {"TextArea":textA }
textarr.push(textobj)
localStorage.setItem ("Textarea" , (JSON.stringify(textarr)))

}
















//      setInterval (
//      function myTimer() {
             

//                 const randomColor = "#"+Math.floor(Math.random()*7824256).toString(16);
                

//                 // document.body.style.backgroundColor = randomColor;
//                 document.getElementById("feedTextHeader").style.color = randomColor;

//            } , 1000 )



// myTimer()


