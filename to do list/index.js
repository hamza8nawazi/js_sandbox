// todolist
// const list=[]
// let id=0
// function inputtask(){
//      id++ 
//      inputbox = document.getElementById("myInput").value
//      listcontainer = document.getElementById("lists")
//      if(inputbox===""){
//         alert('You must write something')
//      }else{
//          task = {
//          id: id,
//          text: inputbox
//      };
//         list.push(task)
//         document.getElementById('myInput').value = '';
//         newtodolist= document.createElement("li")
//         newtodolist.innerHTML=inputbox
//         newtodolist.id= id
//         listcontainer.appendChild(newtodolist)

//         deletebtn=document.createElement('button')
//         deletebtn.innerHTML="Delete"
//         newtodolist.appendChild(deletebtn)
        
//         deletebtn.onclick= function(){
//          list = list.filter(task => task.id !== id);
//          listcontainer.removeChild(newtodolist)
//         }
        
//     }
    
// }

//make an id
//id+1
//add with the help of an id
//for deleting , find id, iterate.
//update 

    
let list = [];
        let id = 0; 

        function inputtask() {
            id++; 
            const inputbox = document.getElementById("myInput").value;
            const listcontainer = document.getElementById("lists");

            if (inputbox === "") {
                alert('You must write something');
            } else {
               

                list.push(inputbox);

                
                const newtodolist = document.createElement("li");
               
                newtodolist.innerHTML = inputbox; 

                
                const deletebtn = document.createElement('button');
                deletebtn.innerHTML = "Delete";
                newtodolist.appendChild(deletebtn);

               
                listcontainer.appendChild(newtodolist);

                
                document.getElementById('myInput').value = '';

                
                deletebtn.onclick = function() {
                    
                    list = list.filter((item) => item.id !== id);
                    
                    
                    listcontainer.removeChild(newtodolist);    
               };
            }
        }

