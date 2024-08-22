

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

                const editbtn = document.createElement('button');
                editbtn.innerHTML = "Edit";
                newtodolist.appendChild(editbtn);

                listcontainer.appendChild(newtodolist);
                document.getElementById('myInput').value = '';

                deletebtn.onclick = function() {
                    list = list.filter((item) => item.id !== id);
                    listcontainer.removeChild(newtodolist);
               };

               editbtn.onclick = function() {                
                document.getElementById('myInput').value = inputbox
                list = list.filter((item) => item.id !== id);
                listcontainer.removeChild(newtodolist);
            };

           
            }
        }
 
    

