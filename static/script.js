function deleteColumn(index) {
    var table = document.getElementById("csvTable");
    Array.from(table.rows).forEach(row => row.deleteCell(index));
  }
  
  function addColumn(index, side) {
    var table = document.getElementById("csvTable");
    Array.from(table.rows).forEach(row => {
      var cell = row.insertCell(side === 'left' ? index : index + 1);
      cell.innerHTML = ""; // Empty cell or input for new values, depending on requirements
      cell.contentEditable = "true"; // Make the new cell editable if needed
    });
  }
  
  function showColumnOptions(event, index) {
    // Prevent the click from reaching the table
    event.stopPropagation();
  
    // You can replace this with a proper context menu or modal
    const action = prompt("Enter action: 1 for delete column, 2 for add column to the left, 3 for add column to the right");
    switch(action) {
      case "1":
        deleteColumn(index);
        break;
      case "2":
        addColumn(index, 'left');
        break;
      case "3":
        addColumn(index, 'right');
        break;
      default:
        alert("Invalid action.");
    }
  }
  
  // Close the menu when clicking outside
  document.addEventListener('click', function () {
    // Logic to close your custom menu goes here, if applicable
  });
  