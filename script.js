// Initial inventory with Pen & Book
let inventory = [
  { item: "Pen", quantity: 50, supplier: "ABC Store" },
  { item: "Book", quantity: 500, supplier: "XYZ Store" }
];

// DOM references
const tableBody = document.getElementById("tableBody");
const form = document.getElementById("inventoryForm");
const message = document.getElementById("message");

// Display inventory in table
function displayData() {
  tableBody.innerHTML = "";
  inventory.forEach((data, index) => {
    let row = `
      <tr>
        <td>${data.item}</td>
        <td>${data.quantity}</td>
        <td>${data.supplier}</td>
        <td>
          <button onclick="editItem(${index})">Edit</button>
          <button onclick="deleteItem(${index})">Delete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Add or Update item
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const item = document.getElementById("itemName").value;
  const quantity = document.getElementById("quantity").value;
  const supplier = document.getElementById("supplier").value;
  const editIndex = document.getElementById("editIndex").value;

  if (editIndex === "") {
    inventory.push({ item, quantity, supplier });
    message.innerText = "Record Added Successfully";
  } else {
    inventory[editIndex] = { item, quantity, supplier };
    message.innerText = "Record Updated Successfully";
    document.getElementById("editIndex").value = "";
  }

  form.reset();
  displayData();
});

// Edit item
function editItem(index) {
  document.getElementById("itemName").value = inventory[index].item;
  document.getElementById("quantity").value = inventory[index].quantity;
  document.getElementById("supplier").value = inventory[index].supplier;
  document.getElementById("editIndex").value = index;
}

// Delete item
function deleteItem(index) {
  inventory.splice(index, 1);
  message.innerText = "Record Deleted Successfully";
  displayData();
}

// Show initial inventory
displayData();