
let fname;
let mname;
let lname;
let pnum=document.getElementById("pnum");
let email;
let pass;
let rpass;
let college;
let male;
let fmale;
let oth;
let flag=1;
let gen;
let button;

let n=document.querySelector(".name");
let p=document.querySelector(".phone");
let e=document.querySelector(".emailid");
let a=document.querySelector(".authenticate");
let c=document.querySelector(".collegedata");
let g=document.querySelector(".gender");
let done=document.querySelector(".done");
done.style.visibility="hidden";
function Disp()
{
    fname=document.getElementById("fname");
    mname=document.getElementById("mname");
    lname=document.getElementById("lname");
    pnum=document.getElementById("pnum");
    email=document.getElementById("email");
    pass=document.getElementById("pass");
    rpass=document.getElementById("rpass");
    college=document.getElementById("college");
    male=document.getElementById("male");
    fmale=document.getElementById("fmale");
    oth=document.getElementById("oth");
    let phone=Number(pnum.value);
    flag=1;
    button=document.getElementById("createaccount");
    if(fname.value=="")
    {
        fname.value="First Name Not Filled";
        fname.style="color:red";
        flag=0;
        
    }
    if(lname.value=="")
    {
        lname.value="Last Name Not Filled";
        lname.style="color:red";
        flag=0;
        

    }
    if(isNaN(phone))
    {
        pnum.value="Invalid Phone Number";
        pnum.style="color:red";
        flag=0;
        


    }
    if(typeof(phone)=="number")
    {
        phone=String(phone);
        if(phone.length!=10)
        {
            pnum.value="Please Enter 10 digits";
            pnum.style="color:red";
            flag=0;
            
        }
    }
    if(email.value.length=="")
    {
        {
            email.value="Please Enter Email ID";
            email.style="color:red";
            flag=0;
            
        }
    }
    else if(email.value.length<11)
    {
        {
            email.value="Invalid Email ID";
            email.style="color:red";
            flag=0;
            
        }
    }
    else
    {
        let email_end="";
        let x=email.value.length-1;
        while(email.value[x]!="@")
        {
            email_end+=email.value[x];
            x--;
        }
        email_end+=email.value[x];
        if(email_end!="moc.liamg@")
        {
                email.value="Invalid Email ID";
                email.style="color:red";
                flag=0;
                
        }
    }
    if(pass.value=="" && rpass.value=="")
    {
        pass.setAttribute("type","text");
        pass.value="Enter Password";
        pass.style="color:red";
        flag=0;
        
        rpass.setAttribute("type","text");
        rpass.value="Enter Password";
        rpass.style="color:red";
    }
    else if(pass.value!="" && rpass.value=="")
    {
        rpass.setAttribute("type","text");
        rpass.value="Re-Enter Password";
        rpass.style="color:red";
        flag=0;
        
    }
    else if(rpass.value!="" && pass.value=="")
    {
        pass.setAttribute("type","text");
        pass.value="Enter Password";
        pass.style="color:red";
        flag=0;
        
        rpass.setAttribute("type","text");
        rpass.value="";
    }
    else if(pass.value!="" && rpass.value!="" && pass.value!=rpass.value)
    {
        pass.setAttribute("type","text");
        pass.value="Password Mismatched";
        pass.style="color:red";
        flag=0;
        
        rpass.setAttribute("type","text");
        rpass.value="Password Mismatched";
        rpass.style="color:red";
    }
    if(college.value=="Select College")
    {
        college.style="color:red";
        flag=0;
    }
    if(male.checked==false && fmale.checked==false && oth.checked==false)
    {
        console.log("Gender not selectesd");
        male=document.querySelector(".male");
        fmale=document.querySelector(".fmale");
        oth=document.querySelector(".oth");
        male.style="color:red";
        fmale.style="color:red";
        oth.style="color:red";
        flag=0;
    }
    if(flag==1)
    {
        Hide();    
    }
}

function Hide()
{
    n.style.visibility="hidden";
    p.style.visibility="hidden";
    e.style.visibility="hidden";
    a.style.visibility="hidden";
    c.style.visibility="hidden";
    g.style.visibility="hidden";
    button.style.visibility="hidden";
    done.style.visibility="visible";

}
function CheckRed()
{
    if(fname.style.color==="red")
    {
        fname.value="";
        fname.style.color="black";
    }
    if(lname.style.color==="red")
    {
        lname.value="";
        lname.style.color="black";
    }
    if(pnum.style.color==="red")
    {
        pnum.value="";
        pnum.style.color="black";
    }
    if(email.style.color==="red")
    {
        email.value="";
        email.style.color="black";
    }
    if(pass.style.color==="red")
    {
        pass.value="";
        pass.setAttribute("type","password");
        pass.style.color="black";
    }
    if(rpass.style.color==="red")
    {
        rpass.value="";
        rpass.setAttribute("type","password");
        rpass.style.color="black";
    }
    if(college.style.color==="red")
        college.style.color="black";
    if(male.style.color=="red")
    {
        male.style="color:black";
        fmale.style="color:black";
        oth.style="color:black";
    }
}
let f=0;
function CheckNum()
{
    pnum.addEventListener('keyup',(e)=>
    {
        if(e.key=='e')
            pnum.value="";
        else
        {
            f=f+1;
            let num=Number(pnum.value);
            if(f>1)
            {
                if(String(num).length==10)
            {
                pnum.value=num;
                pnum.disabled=true;
                pnum.disabled=false;
            }
    }
        }
    });
}