// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

// Function to calculate and display the total price
const getSum = () => {
  // Select all elements with the class 'price'
  const priceElements = document.querySelectorAll('.price');
  let total = 0;

  // Sum up all the prices
  priceElements.forEach(priceElement => {
    total += parseFloat(priceElement.textContent);
  });

  // Check if the total row already exists and remove it if present
  const existingTotalRow = document.getElementById('total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for the total
  const totalRow = document.createElement('tr');
  totalRow.id = 'total-row'; // Assigning an ID to prevent duplicate rows
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2; // Span across two columns
   totalCell.id = 'ans';  
  totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;


  totalRow.appendChild(totalCell);

  // Append the total row to the table
  document.querySelector('table').appendChild(totalRow);
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);
