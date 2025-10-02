function ValidEmail(str){
    let span= document.getElementById("s2");
    let index= str.indexOf("@");
    let index1= str.lastIndexOf("@");

    if(index<=0 || index!=index1){
        span.innerHTML="Invalid";
        span.style.color="red";
    }
    else{
        let as= str.substring(index+1);
        index= as.indexOf(".");
        index1= as.lastIndexOf(".");

        if((index==-1 || index!=index1) || (index!=(as.length-4) && (index!=(as.length-3))))
        {
            span.innerHTML="Invalid";
            span.style.color="red";
        }
        else{
            span.innerHTML="Valid";
            span.style.color="green";
        }
    }
}