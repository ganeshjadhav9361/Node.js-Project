function ValidName(str){
    let span= document.getElementById("s1");
    str= str.trim().toLowerCase();
    // let flag= true;

     if (str.length == 0) {
        span.innerHTML = "Name required";
        span.style.color = "red";
       
    }


    for(var i=0;i<str.length;i++){
        if(!((str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122) || str.charCodeAt(i)==32))
        {
            return false;
            // break;
        }
    }
        if(flag){
            span.innerHTML="Valid";
            span.style.color="green";
        }
        else{
            span.innerHTML="InValid";
            span.style.color="red";
        }
}