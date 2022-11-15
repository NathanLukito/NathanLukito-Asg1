const btn = document.getElementById('nav_button');

btn.addEventListener('click', function onClick(event) {
  const container = document.getElementById('navigation');

  container.style.backgroundColor = 'black';
  btn.style.width = 919;
});

