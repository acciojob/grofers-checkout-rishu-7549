const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with the class 'price'
  const priceElements = document.querySelectorAll('.price');
  let total = 0;

  // Sum up all the prices
  priceElements.forEach(priceElement => {
    total += parseFloat(priceElement.textContent);
  });

  // Create a new row for the total
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2; // Span across two columns
  totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;
  totalRow.appendChild(totalCell);

  // Append the total row to the table
  document.querySelector('table').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);