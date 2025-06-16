const inventory = {
  IVF: [
    { name: "IVF Injection X", stock: 20, price: "₹1,200" }
  ],
  Cryogenic: [
    { name: "Liquid Nitrogen Container", stock: 5, price: "₹15,000" }
  ],
  Diagnostics: [
    { name: "Glucose Monitor Kit", stock: 10, price: "₹850" }
  ]
};

function renderInventory() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = ""; // clear existing rows

  for (const category in inventory) {
    inventory[category].forEach(item => {
      const row = document.createElement("tr");
      row.className = "border-b hover:bg-gray-50";

      row.innerHTML = `
        <td class="py-2 px-4">${item.name}</td>
        <td class="py-2 px-4">${category}</td>
        <td class="py-2 px-4">${item.stock}</td>
        <td class="py-2 px-4">${item.price}</td>
      `;

      tableBody.appendChild(row);
    });
  }
}
