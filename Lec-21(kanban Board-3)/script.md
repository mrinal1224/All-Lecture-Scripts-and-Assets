# Full Stack LLD & Projects: JavaScript-9: Kanban Board-3(Bussiness Logics & Local Storage)

---
title: Agenda
description: 
duration: 900
card_type: cue_card
---

**Agenda of this Lecture:**

* Locking Mechanism
* Changing the Priority color of the Task
* Filtering out Task with using the priority color filter
* Showing All Tasks on db click

---
title: Locking Mechanism
description: 
duration: 900
card_type: cue_card
---

### Explanation

Currently we have implemented Ticket geneartion and removal from the modal pop up with ID color and Task, Now we will be adding a lock so that a task can be edited of a ticket if it needs to be updated and we can lock it again


Hence, we will be implementing the lock in this section

We can use the **font-awesome** Icon libray again  and get a lock icon for our tasks.


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
    // Lock Icon div added below
    <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>
  `;
  
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);

  handleRemoval(ticketCont);
}
```

* We have added an additional `div` element with the class `ticket-lock` to represent the lock icon for each ticket.
* Inside the `ticket-lock` div, we are using Font Awesome's icon syntax to include the lock icon using the fa-lock class from the `fa-solid` style.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/638/original/1.png?1695233411)


Now we have added the lock, but we need to make it functional now:

```javascript 
let lockClose = 'fa-lock';
let lockOpen = 'fa-lock-open';

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector('.ticket-lock');
  let ticketLockIcon = ticketLockElem.children[0];

  ticketLockIcon.addEventListener('click', function() {
    console.log('Lock Selected'); // Added single quotes around the log message
    if (ticketLockIcon.classList.contains(lockClose)) {
      ticketLockIcon.classList.remove(lockClose);
      ticketLockIcon.classList.add(lockOpen);
      
    } else {
      ticketLockIcon.classList.remove(lockOpen);
      ticketLockIcon.classList.add(lockClose);
      
    }
  });
}
```

This code snippet is designed to toggle the lock status of a ticket in a web application, changing its visual representation by switching icons. 

point-by-point explanation of what each part of the code is doing:

1. **Variable Declarations:**
   - `let lockClose = 'fa-lock';` declares a variable `lockClose` and assigns it the string `'fa-lock'`. This string corresponds to a CSS class used to display a "locked" icon  from the FontAwesome icon library
   - `let lockOpen = 'fa-lock-open';` declares another variable `lockOpen` and assigns it the string `'fa-lock-open'`. Similarly, this string is expected to represent a CSS class for an "unlocked" icon.

2. **Function Definition - `handleLock(ticket)`:**
   This section defines a function named `handleLock` that takes a single `ticket`. The function is designed to add interactive functionality to a lock icon within a ticket element in the DOM (Document Object Model).

   - **Finding the Ticket's Lock Element:**
     - `let ticketLockElem = ticket.querySelector('.ticket-lock');` uses the `querySelector` method on the `ticket` element to find the first child element with the class `.ticket-lock`. This child element is stored in the `ticketLockElem` variable.


     - `let ticketLockIcon = ticketLockElem.children[0];` accesses the first child element of `ticketLockElem` and assigns it to `ticketLockIcon`. This child  the icon that visually represents the lock's current status (locked or unlocked).

   - **Adding an Event Listener to the Lock Icon:**
     - `ticketLockIcon.addEventListener('click', function() {...});` adds a click event listener to `ticketLockIcon`. When the icon is clicked, the anonymous function provided as the second argument to `addEventListener` is executed.

   - **Inside the Event Listener Function:**
     - `console.log('Lock Selected');` logs the message "Lock Selected" to the console whenever the lock icon is clicked. This serves as a simple way to confirm that the click event is being registered.

     - The `if` statement checks if `ticketLockIcon` currently has the class corresponding to a closed lock (`lockClose`):
       - If true (`ticketLockIcon.classList.contains(lockClose)`), it means the lock is currently shown as closed. The code then removes the `lockClose` class and adds the `lockOpen` class, visually changing the icon to an open lock.

       - If false, it implies the lock is shown as open. The code removes the `lockOpen` class and adds the `lockClose` class, changing the icon back to a closed lock.

This code toggles the visual state of a lock icon on a ticket between an open and closed lock each time the icon is clicked, utilizing CSS classes to change the icon's appearance. The use of `classList.contains`, `classList.add`, and `classList.remove` allows for this dynamic change in class assignments, which in turn changes the icon displayed to the user based on the ticket's lock status.


Now to make the content editable inside the task section whenever the lock is open, we will make the following changes:

```javascript 
let lockClose = 'fa-lock';
let lockOpen = 'fa-lock-open';

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector('.ticket-lock');
  let ticketLockIcon = ticketLockElem.children[0];

  let ticketTaskArea = ticket.querySelector('.task-area'); // Corrected selector

  ticketLockIcon.addEventListener('click', function() {
    console.log('Lock Selected');
    if (ticketLockIcon.classList.contains(lockClose)) {
      ticketLockIcon.classList.remove(lockClose);
      ticketLockIcon.classList.add(lockOpen);
      ticketTaskArea.setAttribute('contenteditable', 'true'); // Changed 'contenteditable', 'true'
    } else {
      ticketLockIcon.classList.remove(lockOpen);
      ticketLockIcon.classList.add(lockClose);
      ticketTaskArea.setAttribute('contenteditable', 'false'); // Changed 'contenteditable', 'false'
    }
  });
}
```

Now let's add functionality related to a "task area" within a ticket, allowing it to become editable or non-editable based on the lock status:

1. **New Variable Declaration for the Ticket Task Area:**
   - `let ticketTaskArea = ticket.querySelector('.task-area');` is a new line of code that finds and assigns the first element within the `ticket` that matches the `.task-area` selector.
   
   - This element, stored in `ticketTaskArea`, represents an area within the ticket that  contains task-related content that can be edited.

2. **Adjustments Within the Event Listener Function:**
   The functionality to make the task area editable or non-editable based on the lock status is introduced with the following lines inside the `if` statement's branches:

   - When the lock is opened (`if` branch):
     - `ticketTaskArea.setAttribute('contenteditable', 'true');` is a new line that sets the `contenteditable` attribute of the `ticketTaskArea` to `'true'`. This makes the task area editable, allowing users to modify its content directly in the browser. This change is applied when the lock icon is clicked and the lock is transitioning from closed to open.
   
   - When the lock is closed (`else` branch):
     - `ticketTaskArea.setAttribute('contenteditable', 'false');` replaces the task area's `contenteditable` attribute value with `'false'`. This action reverses the editability of the task area, making it non-editable to the user. This occurs when the lock icon is clicked and the lock transitions from open to closed.
     
   - This allows for a more interactive and secure way to manage content within each ticket, preventing unintended edits when the ticket is "locked".

 This is how we have implemented the Lock Mechanism for the ticket

---
title: Changing the Priority color of the Task
description: 
duration: 900
card_type: cue_card
---

### Explanation
Now , We have created the Ticket and have implemented the Lock Functionality.

Now , Suppose you want to change the priority of the task as well , Suppose a ticket is in lightpink color and you want to change it to lightblue , lightgreen or black , (you just want to move a particlular task from one status to another)

How will you do it?

In this section we will handle the color of the tasks



```javascript 
function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector('.ticket-color'); // Corrected selector
  ticketColorBand.addEventListener('click', function() {
    let currentColor = ticketColorBand.classList[0]; // Changed index to 0

    let currentColorIdx = colors.findIndex(function(color) {
      return currentColor === color;
    });

    currentColorIdx++; // Increment the index

    let newTicketColorIdx = currentColorIdx % colors.length; // Corrected variable name
    let newTicketColor = colors[newTicketColorIdx]; // Corrected variable name
    
    ticketColorBand.classList.remove(currentColor); // Corrected spelling
    ticketColorBand.classList.add(newTicketColor); // Corrected spelling
  });
}
```


function `handleColor` is designed to change the color of a specific element within a "ticket" based on user interaction (a click). 


Here's a step-by-step explanation of what the code does:

1. **Function Definition (`handleColor`)**: The function `handleColor` is defined to take a single parameter, `ticket`, which is expected to be a DOM element that represents a ticket on the webpage.

2. **Selecting the `.ticket-color` Element**: Inside the function, `ticket.querySelector('.ticket-color')` is called to select the first element with the class `.ticket-color` that is a descendant of the `ticket` element. This element is stored in the variable `ticketColorBand`.

3. **Adding an Event Listener**: An event listener for the "click" event is added to `ticketColorBand`. This means that the function provided as the second argument to `addEventListener` will be executed whenever `ticketColorBand` is clicked.

4. **Inside the Click Event Listener Function**:
   - **Getting the Current Color**: The current color class of `ticketColorBand` is assumed to be stored in its first class, which is accessed with `ticketColorBand.classList[0]`. This current color is stored in the variable `currentColor`.
   
   - **Finding the Index of the Current Color**: The index of `currentColor` within the `colors` array is found using `colors.findIndex()`. This method takes a function that returns `true` for the element that matches the current color. The index of this color in the `colors` array is stored in `currentColorIdx`.
   
   - **Incrementing the Color Index**: The color index (`currentColorIdx`) is incremented by 1 to move to the next color in the `colors` array. If this increment makes the index equal to the length of the `colors` array, it will wrap around to 0 in the next step due to the modulo operation.
   
   - **Calculating the New Color Index**: The new color index is calculated using `currentColorIdx % colors.length`. This ensures that if the incremented index is beyond the last index of the `colors` array, it wraps around to the beginning (cyclic behavior).
   
   - **Getting the New Color**: The new color class to be applied is retrieved from the `colors` array using the new index (`newTicketColorIdx`) and stored in `newTicketColor`.
   
   - **Updating the Element’s Class**: The current color class is removed from `ticketColorBand` using `classList.remove(currentColor)`, and the new color class is added using `classList.add(newTicketColor)`. This changes the visual appearance of the `ticketColorBand` element to reflect the new color.

In summary, this function allows a user to cycle through a predefined list of color classes for an element within a ticket by clicking on it, changing its visual appearance each time it's clicked.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/639/original/2.png?1695233433)

---
title: Filtering out Task with using the priority color filter
description: 
duration: 900
card_type: cue_card
---

### Explanation

In this feature, we need to filter the task according to the priority color.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/640/original/3.png?1695233456)

```javascript 
let toolboxColors = document.querySelectorAll('.color');

for (let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener('click', function() {
    let selectedToolboxColor = toolboxColors[i].classList[0];

    let allTickets = document.querySelectorAll('.ticket-cont'); // Corrected selector
    for (let j = 0; j < allTickets.length; j++) {
      allTickets[j].remove(); // Removed square brackets and added j to index

      let filteredTickets = ticketsArr.filter(function(ticket) {
        return selectedToolboxColor === ticket.ticketColor;
      });

      filteredTickets.forEach(function(filteredTicket) {
        createTicket(
          filteredTicket.ticketColor,
          filteredTicket.ticketTask,
          filteredTicket.ticketID
        );
      });
    }
  });
}
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/641/original/4.png?1695233480)



