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

let x =/\d/;
let re1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // nameMsg = document.getElementById(`text1`).innerHTML

        if (x.test(Fname)) {
            console.log('error')
            document.getElementById(`NameError`).innerHTML="Dont use numbers in you'r name"

        }else{
            fn=Fname;
            document.getElementById(`NameError`).innerHTML=""
            // document.getElementById(`Fname`).innerHTML="test"

        }
        
        if(Lname ==  `` || x.test(Lname)) {
            console.log('error')
            document.getElementById(`LNameError`).innerHTML="Dont use numbers in you'r last name"
        }else{
            ln=Lname
            document.getElementById(`LNameError`).innerHTML=""

        }

        if(Email ==  `` || re1.test(Email)) {

            
        }else{
            em=Email
            document.getElementById(`NameError`).innerHTML=""
            // obj={username:fn,lastName:ln,Email1:eu}
            // console.log(obj,"obj store"
        }

        if(Cemail ==  `` || x.test(Cemail)) {
       
            console.log(document.getElementById(`text2`).innerHTML = `error`)
        }else{

            ec=Cemail
            document.getElementById(`NameError`).innerHTML=""
        }

        if(MobileN ==  `` || x.test(MobileN)) {
   
            console.log(document.getElementById(`text2`).innerHTML = `error`)
        }else{

            po=MobileN
            document.getElementById(`NameError`).innerHTML=""
        }

        if(Pass ==  `` || x.test(Pass)) {
       
            console.log(document.getElementById(`text2`).innerHTML = `error`)
        }else{

            ps=Pass
            document.getElementById(`NameError`).innerHTML=""
        }

        if(Cpass ==  `` || x.test(Cpass)) {
        
            console.log(document.getElementById(`text2`).innerHTML = `error`)
        }else{

            pc=Cpass
            document.getElementById(`NameError`).innerHTML=""
            obj={username:fn,lastName:ln,Email:em,Cemail:ec,MobileN:po}
            users.push(obj)
       
        }


        



        }