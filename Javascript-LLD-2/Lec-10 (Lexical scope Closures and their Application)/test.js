// Sample data array
let dataArray = [
    { name: 'Adam', age: 23 },
    { name: 'Steve', age: 25 },
  ];
  
  // Function to fetch and display data asynchronously
  function getData() {
    setTimeout(function() {
      let output = '';
  
      dataArray.forEach(function(data) {
        output += `<li>${data.name}</li>`;
      });
  
      document.body.innerHTML = output;
    }, 2000);
  }
  
  // Invoke the getData function
  getData();