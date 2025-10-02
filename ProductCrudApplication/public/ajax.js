let SearchProduct=(str)=>{

    let xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        
        if(this.readyState==4 && this.status==200){
            let result= JSON.parse(this.responseText);
            let tableBody= document.getElementById("bodydata");
            console.log("tableBody"+tableBody);
            tableBody.innerHTML="";

            result.forEach((element,index) => {
                let row= document.createElement("tr");
                let col= document.createElement("td");
                col.innerHTML=index+1;
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML=element.name;
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML=element.category;
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML=element.price;
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML=element.quantity;
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML= "<a href='/delProd?pid="+element.pid+"'>DELETE</a>";
                row.appendChild(col);
                col= document.createElement("td");
                col.innerHTML = "<a href='/updprod?name="+element.name+"&category="+element.category+"&price="+element.price+"&quantity="+element.quantity+"&pid="+element.pid+"'>UPDATE</a>";

                row.appendChild(col);
                tableBody.appendChild(row);
            
            });
            
        }
    }
    xhttp.open("get","/searchProdByName?name="+str,true);
xhttp.send();
     
}
