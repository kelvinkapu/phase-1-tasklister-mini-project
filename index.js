document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector('form').addEventListener("submit", (e) => {
        console.log(e);
        e.preventDefault();
    });

    //calling input 'new-task-description'
 function callInput(){
    let callingInput=document.getElementById('new-task-description')
    //assigning addEventListener
    callingInput.addEventListener('input',handleClick)
    console.log(callingInput)
 }
 callInput();
 //logging in handleClick event
 function handleClick(event) {
    console.log('Input value:', event.target.value);
 }

 //calling submit button
 function callSubmit(){
    let callingSubmit= document.querySelector('type="submit"')
    callingSubmit.addEventListener('click',handleSubmit)
 console.log(callingSubmit)
}
callSubmit();

function handleSubmit(event){
    event.preventDefault();
    let form= event.target.form;
    let inputValue= form.elements['user'].value;
    console.log('Submitted value:',inputValue);
  }
})



//delete list
function deleteList(){
   let list= document.getElementById("list")
   list.remove()
   console.log(list)

}

// function priorityValue(){
//     let select= document.ent('select')
//    select.
//     console.log(value)
// }
// priorityValue();
// let priorityDropdown = document.getElementById("priorityDropdown");
//    let selectedPriority = priorityDropdown.value;
   
//    if (selectedPriority === "high") {
//       list.style.color = "red";
//    } else if (selectedPriority === "medium") {
//       list.style.color = "yellow";
//    } else if (selectedPriority === "low") {
//       list.style.color = "green";
//    }
   
//    console.log(list);


//calling form using querySelector
function makeChanges() {
    let handleUser = document.querySelector('form');
    console.log(handleUser);

  //creating a new element(input)
    let newInput = document.createElement('input');
    console.log(newInput);

  //setting Attribute type and text
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', 'user');
    handleUser.appendChild(newInput);
    
    //adding submit button
  let submitButton=document.createElement('input');
  submitButton.setAttribute('type','submit');
  submitButton.setAttribute('value','Submit');
  handleUser.appendChild(submitButton);

    //addEventListener which responds to a click
    newInput.addEventListener('input', handleClick);
    submitButton.addEventListener('submit',handleSubmit);
    console.log(newInput);
  }
  
  function handleClick(event) {
    console.log('Input value:', event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    let form= event.target;
    let inputValue= form.elements.user.value;
    console.log('Submitted value:',inputValue);
  }
  
  makeChanges();

  //As a user, I should be able to type a task into the input field.


  