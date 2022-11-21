let users=[]
        function func() {
            let fn,ln,em,ec,ps,pc,po;
            let obj={}
        let Fname =document.getElementById(`Fname`).value
        let Lname =document.getElementById(`Lname`).value
        let Email =document.getElementById(`Email`).value
        let Cemail =document.getElementById(`Cemail`).value
        let MobileN =document.getElementById(`MobileN`).value
        let Pass =document.getElementById(`Pass`).value
        let Cpass =document.getElementById(`Cpass`).value


let wordVal = /^[a-zA-Z]+$/;
let mailVal =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let MobileVal = /^([+]\d{2})?\d{10}$/;
let passVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        // nameMsg = document.getElementById(`text1`).innerHTML

        if (!wordVal.test(Fname)) {
            console.log('error')
            document.getElementById(`NameError`).innerHTML="Dont use numbers, or leave field empty!!"

            // let doc= document.getElementById(`NameError`).innerHTML="Dont use numbers in you'r name"
            // console.log(doc);

        }else{
            fn=Fname;
            document.getElementById(`NameError`).innerHTML=""
            console.log(fn)
            // document.getElementById(`Fname`).innerHTML="test"

        }
        
        if(!wordVal.test(Lname)) {
            console.log('error')
            document.getElementById(`LNameError`).innerHTML="Dont use numbers, or leave field empty!"
        }else{
            ln=Lname
            document.getElementById(`LNameError`).innerHTML=""

        }

        if(!mailVal.test(Email)) {

            document.getElementById(`EmailError`).innerHTML="Enter a valid Email! ()"
        }else{
            em=Email
            document.getElementById(`EmailError`).innerHTML=""
            // obj={username:fn,lastName:ln,Email1:eu}
            // console.log(obj,"obj store"
        }
        console.log(Email)
        console.log(Cemail)
        if(!(Email == Cemail)) {
         
            document.getElementById(`EmailConError`).innerHTML = `Email does not match!`
        }else{

            ec=Cemail
            document.getElementById(`EmailConError`).innerHTML=""
        }

        if(!MobileVal.test(MobileN)) {
   
            console.log(document.getElementById(`MobileError`).innerHTML = `Enter a valid phone number (077 .../+962 ...)`)
        }else{

            po=MobileN
            document.getElementById(`MobileError`).innerHTML=""
        }

        if(!passVal.test(Pass)) {
       
            console.log(document.getElementById(`PassError`).innerHTML = `Min 8 characters, at least 1 upper
             1 lower and one number`)
        }else{

            ps=Pass
            document.getElementById(`PassError`).innerHTML=""
        }

        if(!(Pass == Cpass)) {
        
            console.log(document.getElementById(`PassConError`).innerHTML = `password does not match!`)
        }else{

            pc=Cpass
            document.getElementById(`PassConError`).innerHTML=""

            obj={"username":fn,
            "lastName":ln,
            "Email":em,
            "Cemail":ec,
            "MobileN":po,
             "password":ps,

        }
            users.push(obj)

            localStorage.setItem("users", JSON.stringify(users))
            window.location.href = '';
        }
    }


  

function LogIn() {
    window.location.href = 'index3.html';
//     let emailLog =document.getElementById(`emailLog`).value
//     let logPass =document.getElementById(`logPass`).value



//     let regInfo = JSON.parse(localStorage.getItem("users"))
// // console.log(LogIn()) 

//     regInfo.forEach(
//     function(obj) {
//         if (obj.Email== emailLog && obj.password
//             ==logPass) {
//             console.log(`EveryThing is Ok`)
//             window.location.href = 'http://www.google.com';
//             return (`EveryThing is Ok`)
//         }else{
//             console.log(`Error`)

//             return(`Error`)
//         }
        
//     }
// )
  
}


       

// console.log(LogIn())