
const inputbox = document.getElementById("myInput");
const listcontainer = document.getElementById("lists");
let list = [];
let id = 0;
let editid = null;
function inputtask() {
  if (inputbox.value === "") {
    alert("You must write something");
    return;
  }
  id = id + 1;
  const newItem = { id: id, name: inputbox.value };
  list.push(newItem);
  console.log(">>>", list);
  listcontainer.innerHTML = "";
  list.map((item) => {
    listcontainer.innerHTML += `<li class="item-list">${item.name}
                  <div>
                  <button onclick="DeleteTask(${item.id})">Delete</button>
                  <button onclick="Edit(${item.id})">Edit</button></div>`;
  });
  inputbox.value = "";
}
function DeleteTask(taskId) {
  list = list.filter((item) => item.id !== taskId);
  filterdata();
}
function filterdata() {
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
  let itemToEdit = list.find(item => item.id === taskId);
  editid=taskId;
  inputbox.value = itemToEdit.name;
}
function updatebtn(){
  if (inputbox.value === "") {
    alert("You must write something");
    return;
  }
  let edited = list.find(item => item.id === editid);
  edited.name=inputbox.value;
  filterdata();
  inputbox.value = "";
 

}







