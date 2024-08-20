
const list=[]
function inputtask(){
     inputbox = document.getElementById("myInput").value
     listcontainer = document.getElementById("lists")
     if(inputbox===""){
        alert('You must write something')
     }else{
        list.push(inputbox)
        document.getElementById('myInput').value = '';
        newtodolist= document.createElement("li")
        newtodolist.innerHTML=inputbox
        listcontainer.appendChild(newtodolist)

        deletebtn=document.createElement('button')
        deletebtn.innerHTML="Delete"
        newtodolist.appendChild(deletebtn)
        deletebtn.onclick=function(){
         


        }
        
    }
    
}



    

