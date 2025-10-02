function ValidContact(str){
    let span= document.getElementById("s3");
    str= document.getElementById("c").value;

    let flag= true;
    if(str.length!=10){
        flag= false;
    }
    else{
        for(let i=0;i<str.length;i++){
            if(str.charCodeAt(i)<48 && str.charCodeAt(i)>57)
            {
                flag= false;
                break;
            }
        }
    }

    if(flag)
    {
        span.innerHTML="Valid";
        span.style.color="green";
    }
    else{
        span.innerHTML="InValid";
        span.style.color="red";
    }
}