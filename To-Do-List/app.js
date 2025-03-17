const inputBox = document.querySelector("#input-box");
const listItems = document.querySelector("#list-items");
const addBtn = document.querySelector("#btn");

addBtn.addEventListener("click", ()=>{
    if(inputBox.value === ""){
        alert("Enter your text then click on Add!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML=("\u00d7");
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
})

listItems.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData ();
    } else if (e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       saveData ();
    }
 
},false);


const saveData = () =>{
    localStorage.setItem("data", listItems.innerHTML);
}

const showData = () =>{
    listItems.innerHTML = localStorage.getItem("data");
}
showData();