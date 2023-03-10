const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button")
const todo = document.querySelector(".todoList")
const deletAllBtn = document.querySelector(".footer button")

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim()!=0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}
showTasks();
addBtn.onclick = () =>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
    addBtn.classList.remove("active");
}

document.body.addEventListener('keypress', (e) =>{
    let userData = inputBox.value;
    if(e.key == 'Enter' && userData.trim() != 0){

        let userData = inputBox.value;
        let getLocalStorage = localStorage.getItem("New Todo"); 
        if(getLocalStorage == null){
            listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage); 
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr)); 
    showTasks();
    addBtn.classList.remove("active");
    }
});


function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNum = document.querySelector(".pendingNum");
    pendingNum.textContent = listArr.length;
    if(listArr.length >0){
        deletAllBtn.classList.add("active");
    }else{
        deletAllBtn.classList.remove("active");
    }
    let newLiTag ='';
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element} <span onclick ="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todo.innerHTML = newLiTag;
    inputBox.value = '';
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

deletAllBtn.onclick = ()=>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}