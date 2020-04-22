document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
/*
grab button element
.prevent default behavior
*/
document.addEventListener("DOMContentLoaded", addTask);

let taskForm = document.getElementById('create-task-form')
let input = document.getElementById('new-task-description')

function addTask(){
    taskForm.addEventListener('submit', function(e){
      e.preventDefault()

      let descr = e.target[0].value
      let ul = document.getElementById('tasks')
      let li = document.createElement('li')
      let priority = e.target.elements[1].value
      // let newBtn = document.createElement('button')
      // newBtn.innerHTML = 'Delete Task'
      li.textContent = descr
      li.type = priority
      
      deleteListEntry(li)
      ul.appendChild(li)
      // debugger
  })
}
// function createListEntry() {
//   let ul = document.getElementById('tasks')
//   let li = document.createElement("li")
// }

//delete a task : create a button -> appears on li, create when li is added -> add eventlisten to click -> .remove on that li

function deleteListEntry(li) {
  let newBtn = document.createElement('button')
  newBtn.innerHTML = 'Delete Task'
  li.appendChild(newBtn)
    newBtn.addEventListener('click', function(e){
      li.remove()
  })
}

function entryPriority() {
  let dropdown = document.createElement('select')
  let options = ['High', 'Medium', 'Low']
  options.forEach(option => {
   let optionTag = document.createElement('option')
   optionTag.textContent = option
   dropdown.appendChild(optionTag)
  })
  taskForm.insertBefore(dropdown, taskForm.children[2])
}
entryPriority()



/* -> create a variable with select tag ->
append select tag to form -> create a array of options -> high med low -> 
create logic that determines color of text, based on the value selected
*/
