
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
         const index = list.indexOf(inputbox);
         if (index > -1) {
         list.splice(index, 1); // Remove the task from the list array
}
         listcontainer.removeChild(newtodolist); // Remove the task from the DOM


        }
        
    }
    
}



    

