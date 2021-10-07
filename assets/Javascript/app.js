const tableBody = document.querySelector('tbody');

const createRow = (user) => {
  let newRow = document.createElement('tr');
  let template = `  
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>`
  newRow.innerHTML = template;
  return newRow;
}

const response = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    data.forEach(data => {
      tableBody.appendChild(createRow(data))
    });
  })