document.body.querySelector('#buttonGet').addEventListener('click', () => {
  fetch('http://localhost:3000')
    .then(response => response.json())
    .then(arr => console.log(arr));
});

document.body.querySelector('#buttonPost').addEventListener('click', () => {
  fetch('http://localhost:3000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ endPoindID: 'ddd', apiVersion: 3, bulkMode: true })
  });
});

document.body.querySelector('#buttonPut').addEventListener('click', () => {
  fetch('http://localhost:3000', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ endPoindID: 'aaa', apiVersion: 4, bulkMode: true })
  });
});

document.body.querySelector('#buttonDelete').addEventListener('click', () => {
  fetch('http://localhost:3000', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ endPoindID: 'bbb' })
  });
});
