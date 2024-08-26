

// let list = [];
//         let id = 0;
//         function inputtask() {
//             id++;
//             const inputbox = document.getElementById("myInput").value;
//             const listcontainer = document.getElementById("lists");
//             if (inputbox === "") {
//                 alert('You must write something');
//             } else {
//                 list.push(inputbox);
//                 const newtodolist = document.createElement("li");
//                 newtodolist.innerHTML = inputbox;

//                 const deletebtn = document.createElement('button');
//                 deletebtn.innerHTML = "Delete";
//                 newtodolist.appendChild(deletebtn);

//                 const editbtn = document.createElement('button');
//                 editbtn.innerHTML = "Edit";
//                 newtodolist.appendChild(editbtn);

//                 listcontainer.appendChild(newtodolist);
//                 document.getElementById('myInput').value = '';

//                 deletebtn.onclick = function() {
//                     list = list.filter((item) => item.id !== id);
//                     listcontainer.removeChild(newtodolist);
//                };

//                editbtn.onclick = function() {                
//                 document.getElementById('myInput').value = inputbox
                
//             };

           
//             }
//         }
const inputbox = document.getElementById("myInput").value;
const listcontainer = document.getElementById("lists");
let list = [];
let id = 0;
let editid= null
function inputtask() {
  const inputbox = document.getElementById("myInput").value;
  const listcontainer = document.getElementById("lists");
  // if (inputbox === "") {
  //   alert("You must write something");
  //   return;
  // }
    id = id + 1;
    const newItem = { id: id, name: inputbox };
    list.push(newItem);
    listcontainer.innerHTML = "";
    list.map((item) => {
    listcontainer.innerHTML += `<li class="item-list">${item.name}
                  <div>
                  <button onclick="DeleteTask(${item.id})">Delete</button>
                  <button onclick="Edit(${item.id})">Edit</button></div>`;
    });
  
    document.getElementById('myInput').value = '';
}

function DeleteTask(taskId) {
  list = list.filter(item => item.id !== taskId);
  filterdata();
}

function filterdata(){
  const listcontainer = document.getElementById("lists");
  listcontainer.innerHTML = ""; 
  list.map((item) => {
    listcontainer.innerHTML += `<li class="item-list">${item.name}
                  <div>
                  <button onclick="DeleteTask(${item.id})">Delete</button>
                  <button onclick="Edit(${item.id})">Edit</button></div>
                  `;
    });
}

function Edit(taskId) {
  const itemToEdit = list.find(item => item.id === taskId);
  document.getElementById('myInput').value = itemToEdit.name;
  editid=taskId;
  }

function updatebtn(){
  const edited = list.find(item => item.id === editid);
  console.log(edited.name)
  edited.name=inputbox
  listcontainer.innerHTML = "";
    list.map((item) => {
    listcontainer.innerHTML += `<li class="item-list">${item.name}
                  <div>
                  <button onclick="DeleteTask(${item.id})">Delete</button>
                  <button onclick="Edit(${item.id})">Edit</button></div>`;
    });
    document.getElementById('myInput').value = '';

}






