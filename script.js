const data = [
  { id: 101, user: "Alice", status: "OPEN" },
  { id: 102, user: "Bob", status: "CLOSED" },
  { id: 103, user: "Charlie", status: "OPEN" }
];

const tbody = document.getElementById("tickets");

function render(list) {
  tbody.innerHTML = "";
  list.forEach(t => {
    tbody.innerHTML += `
      <tr class="${t.status}">
        <td>${t.id}</td>
        <td>${t.user}</td>
        <td>${t.status}</td>
      </tr>
    `;
  });
}

function filter(status) {
  if (status === "ALL") render(data);
  else render(data.filter(t => t.status === status));
}

render(data);
