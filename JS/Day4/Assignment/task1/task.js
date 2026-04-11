let button=document.getElementById("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

button.addEventListener('click',()=>{
    let li=document.createElement("li");
    let inputText=input.value;
    let taskContent=document.createElement("div");
    let taskText=document.createElement("span");
    taskContent.classList.add("task-content");
    taskText.classList.add("task-text");
    taskText.textContent=inputText;
    taskContent.append(taskText);
    li.append(taskContent);
    ul.append(li);

    delbutton=document.createElement("button");
    delbutton.textContent="Delete";
    taskContent.append(delbutton);
    delbutton.addEventListener('click',()=>{
        li.remove();
    });
    
    donetask=document.createElement("button");
    donetask.textContent="Done";
    taskContent.append(donetask);
    donetask.addEventListener('click',()=>{
        taskText.classList.add("textstrike");
    });
});
