localStorage.clear()
// test data
loged_in = {"name":"alaa",
"email":"alaa@gmail.com",
"phone_num":"0777777777"}
alaa_feedback = JSON.parse(localStorage.getItem("alaa_feedback"))||
[{"traine":"Talab yaseen",
"feddbacktext":"you are great"},
{"traine":"Asem yaseen",
"feddbacktext":"you are suck"}]
mona_feedback = JSON.parse(localStorage.getItem("mona_feedback"))||
[{"traine":"Talab yaseen",
"feddbacktext":"you are lazy"},
{"traine":"Asem yaseen",
"feddbacktext":"you are cool"}]
salama_feedback = JSON.parse(localStorage.getItem("salama_feedback"))||
[{"traine":"Talab yaseen",
"feddbacktext":"Good job keep going"},
{"traine":"Asem yaseen",
"feddbacktext":"you are cool"}]
hadeel_feedback = JSON.parse(localStorage.getItem("hadeel_feedback"))||
[{"traine":"Talab yaseen",
"feddbacktext":"Dont be late again"},
{"traine":"Asem yaseen",
"feddbacktext":"you are cool"}]
localStorage.setItem("loged_in",JSON.stringify(loged_in))
localStorage.setItem("alaa_feedback",JSON.stringify(alaa_feedback))
localStorage.setItem("mona_feedback",JSON.stringify(mona_feedback))
localStorage.setItem("salama_feedback",JSON.stringify(salama_feedback))
localStorage.setItem("hadeel_feedback",JSON.stringify(hadeel_feedback))



///////////////////////////////////////////////////
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

function funcselectchange(valu) {
    mona = (JSON.parse(localStorage.getItem("mona_feedback")))
    mona.forEach(element => {
        if (element.traine == valu) {
            document.getElementById("mona_feedback").innerHTML =element.feddbacktext
            console.log("hi")
        }
    });
    alaa = (JSON.parse(localStorage.getItem("alaa_feedback")))
    alaa.forEach(element => {
        if (element.traine == valu) {
            document.getElementById("alaa_feedback").innerHTML =element.feddbacktext
            console.log("hi")
        }
    });
    hadeel = (JSON.parse(localStorage.getItem("hadeel_feedback")))
    hadeel.forEach(element => {
        if (element.traine == valu) {
            document.getElementById("hadeel_feedback").innerHTML =element.feddbacktext
            console.log("hi")
        }
    });
    salama = (JSON.parse(localStorage.getItem("salama_feedback")))
    salama.forEach(element => {
        if (element.traine == valu) {
            document.getElementById("salama_feedback").innerHTML =element.feddbacktext
            console.log("hi")
        }
    });
}
function textfunc() {
    traine_name = document.getElementById("selectStyle").value
    text = document.getElementById("textArea").value
    namee = JSON.parse(localStorage.getItem("loged_in")).name
    // console.log(namee)
    feedback_update = JSON.parse(localStorage.getItem(`${namee}_feedback`))
    // console.log(alaa_feedback_update)
    feedback_update_final=feedback_update.map(function(ele){
        if(traine_name ==ele.traine){
            ele.feddbacktext = text
            return ele
        }else{return ele}
    })
    localStorage.setItem(`${namee}_feedback`,JSON.stringify(feedback_update_final) )
    funcselectchange(traine_name)
    document.getElementById("textArea").innerHTML =""

}



let textarea = document.querySelector("textarea");

textarea.addEventListener("input", event => {
    let target = event.currentTarget;
    let maxLength = target.getAttribute("maxlength");
    let currentLength = target.value.length;

    if (currentLength >= maxLength) {
        document.getElementById("redCounter").innerHTML = "You have reached the maximum number of characters."
    }else{ document.getElementById("redCounter").innerHTML =""

    }
    
    console.log(`${maxLength - currentLength}/ chars left`);
    document.getElementById("lettersCounter").innerHTML =`${maxLength - currentLength}/30`
});














//      setInterval (
//      function myTimer() {
             

//                 const randomColor = "#"+Math.floor(Math.random()*7824256).toString(16);
                

//                 // document.body.style.backgroundColor = randomColor;
//                 document.getElementById("feedTextHeader").style.color = randomColor;

//            } , 1000 )



// myTimer()


