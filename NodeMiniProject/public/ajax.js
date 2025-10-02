let searchDept=(str)=>{
    let xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            let jsonobj= JSON.parse(this.responseText);
            let tableBody= document.getElementById("tblBody");
            tableBody.innerHTML="";
            jsonobj.forEach((element,index) => {
                let row= document.createElement("tr");
                let col= document.createElement("td");
                col.innerHTML= index+1;
                row.appendChild(col);
                col= document.createElement("td");
                col.innerHTML= element.deptname;
                row.appendChild(col);
                col= document.createElement("td");
                col.innerHTML= "<a href='/deldept?did="+element.deptid+"'>DELETE</a>";
                row.appendChild(col);
                col= document.createElement("td");
                col.innerHTML= "<a href='/upddept?dn="+element.deptname+"&did="+element.deptid+"'>UPDATE</a>";
                row.appendChild(col);

                tableBody.appendChild(row);
            });
        }
    };
    xhttp.open("get","/searchDeptByName?dn="+str,true);
    xhttp.send();
}

let checkEmailExistance=(str)=>{
    let xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            if(this.responseText.length>0)
            {
                document.getElementById("labelmsg").innerHTML=this.responseText;
                document.getElementById("uemail").focus();
            }
            else{
                document.getElementById("labelmsg").innerHTML="";
            }
        }
    }

    xhttp.open("get","/searchEmail?e="+str,true);
    xhttp.send();
}

let getElementByDept=()=>{
    let deptid=parseInt(document.getElementById("did").value);
    let xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
           let jsonArr=JSON.parse(this.responseText);
           document.getElementById("tblBody").innerHTML="";
           let tableBody= document.getElementById("tblBody");
           let str="";
           for(let i=0;i<jsonArr.length;i++){
                str=str+"<tr>";
                str=str+"<td>"+(i+1)+"</td>";
                str=str+"<td>"+jsonArr[i].name+"<td>";
                str=str+"<td>"+jsonArr[i].email+"<td>";
                str=str+"<td>"+jsonArr[i].contact+"<td>";
                str=str+"<td><img src='images/"+jsonArr[i].photo+"' width='60px' height='60px' alt='img not found' /><td>";
                str=str+"<td>"+jsonArr[i].deptname+"<td>";
                str=str+"<td><a href='/delemp?eid=<%=jsonArr[i].eid%>'></a><td>";
                // str=str+"<td>"+<a href="/updemp"></a>+"<td>";
           }
           tableBody.innerHTML=str;
                
        }
        }
    
    xhttp.open("get","/getEmpByDeptId?deptId="+deptid,true);
    xhttp.send();
}



