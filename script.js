let btn = document.getElementById('userBtn');
let text = document.getElementById('text');

function getUsers() {
  text.classList.remove('loading');
  setTimeout(function () {
    text.classList.add('loading');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => console.log('data received'))
      .catch((err) => console.log(err));
  }, 3000);
}

btn.addEventListener('click', getUsers);
