let addBtn = document.querySelector('.add-btn')
let addTaskFlag = false
let removeBtn = document.querySelector('.remove-btn')
let removeTaskFlag = false
let modalCont = document.querySelector('.modal-cont')
let mainCont = document.querySelector('.main-cont')
let textAreaCont = document.querySelector('.textArea-cont')

let allPriorityColors = document.querySelectorAll('.priority-color')
let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length-1]







addBtn.addEventListener('click' , function(){
    // Display the model
    addTaskFlag = !addTaskFlag
    
    if(addTaskFlag == true){
        modalCont.style.display = 'flex'
    }
    else{
        modalCont.style.display = 'none'
    }

})


function createTicket(ticketColor, ticketID, ticketTask) {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};"></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
  `;
  
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);
}

//Selecting a color and setting it for the task
allPriorityColors.forEach(function(colorElem) {
  colorElem.addEventListener('click', function() {
    // Remove 'active' class from all priority colors
    allPriorityColors.forEach(function(priorityColorElem) {
      priorityColorElem.classList.remove('active');
    });

    // Add 'active' class to the clicked colorElem
    colorElem.classList.add('active');

    modalPriorityColor = colorElem.classList[0]; // Update modalPriorityColor
  });
});

// Event listener for 'Shift' key press in modalCont
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    let taskContent = textAreaCont.value; // Get the content from the textarea
    let ticketID = shortid(); // Generate a unique ticket ID
    createTicket(modalPriorityColor, ticketID, taskContent); // Create a new ticket with the selected color, ticket ID, and task content
    modalCont.style.display = 'none'; // Hide the modal
    textAreaCont.value = ''; // Clear the textarea's content
  }
});