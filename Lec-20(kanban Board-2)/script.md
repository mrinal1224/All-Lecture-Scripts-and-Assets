# Full Stack LLD & Projects: JavaScript-8: Kanban Board-2(DOM Implementation & Manipulation)

---
title: Agenda
description: 
duration: 900
card_type: cue_card
---

**Agenda of this Lecture:**


* Modal Popup with Toggle 
* Ticket Generation
* Adding Task, colour, ID to generated ticket
* Ticket Removal
* Locking Mechanism
* Editing Ticket Content

---
title: Pop up modal Generation
description: 
duration: 900
card_type: cue_card
---

1. Whenever the (+) button is clicked we need to open the modal pop up box so that we can enter our Task and whenerver we click on the button (+) again the pop up closes.

How we will Implement this?

1. So to implement this we can use a very simple technique i.e we can set up a flag , 
2. by deafault we will keep it to `false`, so nothing will happen but as soon as we click the (+) button we will change the flag to `true` , and when it is true we will open the modal pop up
3. Again when you click on this now the flag will again turn back to `false` and the pop up will close


**Implementation**

**create a script.js file and link it with project's html and start wrting JS code**



```javascript
let addBtn = document.querySelector('.add-btn')
let modalCont = document.querySelector('.modal-cont')
let addTaskFlag = false

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
```
This code snippet is a simple JavaScript implementation for toggling the visibility of a modal container element on a web page when a button is clicked. Here's a step-by-step explanation of what each part of the code is doing:

1. `let addBtn = document.querySelector('.add-btn')`: This line selects the first HTML element with the class name `add-btn` and stores a reference to it in the variable `addBtn`. This element is intended to be a button that, when clicked, will trigger the display or hiding of the modal container.

2. `let modalCont = document.querySelector('.modal-cont')`: Similar to the first line, this selects the first HTML element with the class name `modal-cont` and stores a reference to it in the variable `modalCont`. This element is the modal container that will be shown or hidden.

3. `let addTaskFlag = false`: This line initializes a boolean flag named `addTaskFlag` to `false`. This flag will be used to keep track of the modal's visibility state—whether it is currently shown (`true`) or hidden (`false`).

4. `addBtn.addEventListener('click' , function(){ ... })`: This line adds an event listener to the `addBtn` element. The listener listens for `click` events, meaning it will execute the provided function every time the `addBtn` is clicked.

   Inside the event listener function:
   
   a. `addTaskFlag = !addTaskFlag`: This toggles the value of `addTaskFlag`. If it was `false`, it becomes `true`, and vice versa. This effectively changes the state of the modal's visibility each time the button is clicked.
   
   b. `if(addTaskFlag == true){`: This checks if `addTaskFlag` is `true`. If so, it means the modal should be displayed.
   
   - `modalCont.style.display = 'flex'`: This line changes the CSS `display` property of the `modalCont` element to `flex`, making it visible. Flexbox is a CSS layout model that allows items within a container to be laid out in a flexible, responsive manner.
   
   c. `else {`: If `addTaskFlag` is not `true` (i.e., it is `false`), this block will execute.
   
   - `modalCont.style.display = 'none'`: This sets the `display` property of `modalCont` to `none`, effectively hiding it from view.


---
title: Ticket Generation
description: 
duration: 900
card_type: cue_card
---

### Explanation 

Now , let's try to generate a task ticket, which involves creating a function to dynamically generate new task tickets.

In the file `script.js` we will add this function:

```javascript 
function createTicket() {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
}
```

Now we will add **class** to this particular div using the `setAttribute` : 

```javascript 
function createTicket() {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');

  // Set the class attribute of the ticket container
  ticketCont.setAttribute('class', 'ticket-cont'); // 
}
```

Whenever this function is called, a new ticket will be created with class `ticket-cont`.

As `ticketCont` contains 3 more divs inside, we will create them inside this function using `innerHTML` 

```javascript 
function createTicket() {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color"></div>
    <div class="ticket-id">12345/div>
    <div class="task-area">Random Task</div>`
  
  mainCont.appendChild(ticketCont)
```

Here we have created function named `createTicket()` that dynamically generates a new HTML element structure representing a "ticket" and appends it to an existing element in the DOM (Document Object Model). Here's a step-by-step explanation:

1. **Define a New Ticket Container Element**: 
   - `let ticketCont = document.createElement('div');`
   This line creates a new `<div>` element and stores it in the variable `ticketCont`. This `<div>` will serve as the container for the ticket content.

2. **Set a Class Attribute for the Ticket Container**:
   - `ticketCont.setAttribute('class', 'ticket-cont');`
   This line sets the `class` attribute of the `ticketCont` `<div>` to `'ticket-cont'`. This class can be used to apply specific CSS styles to the ticket container.

3. **Create the HTML Content for the Ticket Container**:
   - The `ticketCont.innerHTML = `...`` section assigns a string of HTML content to the `innerHTML` property of the `ticketCont` element. This HTML string includes the structure and content of the ticket, which is composed of three parts:
     - A `<div>` with a class of `"ticket-color"` which could be used to display a color indicator for the ticket.
     - A `<div>` with a class of `"ticket-id"` which contains a hardcoded ticket ID `12345`. There's a typo here: the closing tag should be `</div>` instead of `/div>`.
     - A `<div>` with a class of `"task-area"` which contains the text `Random Task`, representing the task or content of the ticket.

4. **Append the Ticket Container to the Main Container**:
   - `mainCont.appendChild(ticketCont)`
   This line adds the newly created `ticketCont` element as a child to an existing element in the DOM identified by the variable `mainCont`. The `mainCont` variable is presumed to reference an existing element on the page, acting as the main container for these tickets. This action effectively inserts the ticket into the webpage, making it visible to the user.

 the `createTicket()` function dynamically constructs a new ticket element with a specific structure and content, then adds this ticket to a parent container on the webpage.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/613/original/upload_ed6901a16250a577c26b8e2795b1f89d.png?1695229185)


---
title: Adding Event Listener to Generate Ticket
description: 
duration: 900
card_type: cue_card
---

### Explanation

The `addEventListener` method is used to attach an event listener to a DOM element, allowing you to respond to specific events like clicks, key presses, mouse movements, etc.

We add an event listener to the `modalCont` element for the 'keydown' event. This event occurs when a key on the keyboard is pressed and then released.

```javascript 
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    createTicket(); // Call the createTicket function to create a new ticket
    modalCont.style.display = 'none'; // Hide the modal
    textArea.value = ''; // Clear the textarea's content
  }
})
```
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/624/original/upload_55a8528debc5766a05e91dfe21a5cad8.png?1695232320)


---
title: Adding Task, Color, ID to the generated ticket
description: 
duration: 900
card_type: cue_card
---

### Explanation

As of now everything like Task, color and ID of the created task is static. In this we will be making it dynamic.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/625/original/1.png?1695232401)

So we can choose color, and the ticket will come with a randomly generated ID.

To identify and select these priority color divs, we will use `querySelectorAll` method

We want to select all elements with the class name 'priority-color' using `querySelectorAll` and then iterate through each of these elements using the forEach method. Here's how you can do that:

```javascript 
let allPriorityColors = document.querySelectorAll('.priority-color');

allPriorityColors.forEach(function(colorElem) {
  colorElem.addEventListener('click', function() {
    // Remove 'active' class from all priority colors
    allPriorityColors.forEach(function(priorityColorElem) {
      priorityColorElem.classList.remove('active');
    });

    // Add 'active' class to the clicked colorElem
    colorElem.classList.add('active');

    // Implement additional logic to assign the selected color to a task
    // For example, you can use this space to perform your task color assignment
  });
});
```

In this code, when a color element with the class 'priority-color' is clicked, the event listener:

* Iterates through all `allPriorityColors` and removes the 'active' class from each element.
* Adds the 'active' class to the clicked `colorElem`.
* Implements additional logic to assign the selected color to a task 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/626/original/2.png?1695232419)

So right now we have implemented such that we can select this color, but now we want to get the value of the particular color.

Now we will have a **color array**.

We define an array of colors and updates the modalPriorityColor variable based on the selected color when a color element is clicked. 

```javascript
let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; // Default to black

let allPriorityColors = document.querySelectorAll('.priority-color');

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
```

In this code:

* You define an array colors with color names.
* `modalPriorityColor` is initially set to the last color in the array ('black') as the default.
* The event listener loop iterates through each color element and adds a click event listener.
* When a color element is clicked, the 'active' class is toggled as before.
* Additionally, the `modalPriorityColor` is updated to match the class name of the clicked color element, indicating the selected color.



**Passing ticketColor to createTicket Function:**

In the `createTicket` function, you need to add a parameter `ticketColor` to the function signature. This parameter is intended to hold the selected color for the ticket. When calling the `createTicket` function inside the `modalCont` event listener, you're passing the `modalPriorityColor` as an argument to this function.

This change allows you to set the ticket color dynamically based on the selected priority color. You can use the ticketColor parameter to apply the selected color to the appropriate part of the ticket's HTML content.

```javascript 
function createTicket(ticketColor) {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};"></div>
    <div class="ticket-id">12345</div>
    <div class="task-area">Random Task</div>
  `;
  
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);
}

// Event listener for 'Shift' key press in modalCont
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    createTicket(modelPriorityColor); // Create a new ticket with the selected color
    modalCont.style.display = 'none'; // Hide the modal
    textArea.value = ''; // Clear the textarea's content
  }
});
```
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/628/original/4.png?1695232451)


Now we need to update the task details

* The `createTicket` function accepts two parameters: `ticketColor` for the color of the ticket and `ticketTask` for the content of the ticket's task.
* The `ticketTask` parameter is used to dynamically insert the task content into the task-area div element.
* In the modalCont event listener, the content of the `textAreaCont` element is retrieved using .value and assigned to taskContent.
* When the 'Shift' key is pressed, a new ticket is created with the selected color and task content, and then the modal is hidden.
* The content of the `textAreaCont` element is cleared for the next input.

```javascript 
function createTicket(ticketColor, ticketTask) {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};"></div>
    <div class="ticket-id">12345</div>
    <div class="task-area">${ticketTask}</div>
  `;
  
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);
}

// Event listener for 'Shift' key press in modalCont
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    let taskContent = textAreaCont.value; // Get the content from the textarea
    createTicket(modelPriorityColor, taskContent); // Create a new ticket with the selected color and task content
    modalCont.style.display = 'none'; // Hide the modal
    textAreaCont.value = ''; // Clear the textarea's content
  }
});
```

Now we need to uniquely generate ID for each task created:

We will be using an external library **shortID** for this

```javascript 
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

// Event listener for 'Shift' key press in modalCont
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    let taskContent = textAreaCont.value; // Get the content from the textarea
    let ticketID = shortid(); // Generate a unique ticket ID
    createTicket(modelPriorityColor, ticketID, taskContent); // Create a new ticket with the selected color, ticket ID, and task content
    modalCont.style.display = 'none'; // Hide the modal
    textAreaCont.value = ''; // Clear the textarea's content
  }
});
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/629/original/5.png?1695232474)

---
title: Ticket Removal from UI
description: 
duration: 900
card_type: cue_card
---

To remove the task, we can do similarly to what we did for adding task:

```javascript 
let removeTaskFlag = false;

let removeBtn = document.querySelector('.remove-btn'); // Replace with the actual class or ID selector
removeBtn.addEventListener('click', function() {
  removeTaskFlag = !removeTaskFlag; // Toggle the removeTaskFlag when the button is clicked
  
  if (removeTaskFlag) {
    alert('Delete button is activated.');
  }
});
```

---

