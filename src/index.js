document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form =document.querySelector('#create-task-form');
  const input=document.getElementById('new-task-description')

  //delete li function using the x button
function Deletefunc(e){
e.target.parentNode.remove();
}
//
  const UlList=document.getElementById('tasks')

  
  form.addEventListener('submit',(e)=>{
    const DeleteBtn=document.createElement('button');
    DeleteBtn.addEventListener('click',Deletefunc)
    DeleteBtn.textContent=("X")
const content=input.value;
const mylist=document.createElement('li');
mylist.textContent=`${content}    `;
mylist.appendChild(DeleteBtn)
UlList.appendChild(mylist);
document.getElementById('new-task-description').value=''
e.preventDefault()
  })
 
});
