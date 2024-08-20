

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


    

