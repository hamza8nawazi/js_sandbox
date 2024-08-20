// const inputbox = document.getElementById("myInput")
// const listcontainer = document.getElementById("lists")
// function inputtask(){
//     if(inputbox.value === ''){
//         alert('you must write something')
//     }
//     else{
//         newtodolist= document.createElement("newtodolist")
//         newtodolist.innerHTML=inputbox.value 
//         listcontainer.appendChild(newtodolist)
//     }
//     inputbox.value=''
    
// }

// const list = [];
// function inputtask() {
//     task = document.getElementById('myInput').value;
//     list.push(task);
//     if (task == "") {
//         alert("Please enter a task")
//         return true;
//     }
    
//     document.getElementById('lists').innerHTM +=`<li> ${task} <button type='button' onclick='removeItem()'>delete</button>    </li>`
// }


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



    

