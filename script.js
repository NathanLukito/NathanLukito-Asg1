/*navigation button*/

function nav_button() {
  document.getElementById('navigation').classList.toggle('active');
}

const acc_button = document.querySelector('.acc_button')

/*Sign up Form*/
acc_button.addEventListener('click', function(){
  document.querySelector('.acc_container').classList.add('appear')
  setTimeout(function(){
    document.querySelector('.acc_container').classList.add('extra')
  }, 200)
  setTimeout(function(){
    document.querySelector('.acc_desc').classList.add('down')
  }, 400)
})

const back = document.querySelector('.back')

back.addEventListener('click', function acc_back(){
  document.querySelector('.acc_desc').classList.remove('down')
  setTimeout(function(){
    document.querySelector('.acc_container').classList.remove('extra')
  }, 200)
  setTimeout(function(){
    document.querySelector('.acc_container').classList.remove('appear')
  }, 400)
})

/*Review Form*/
const next = document.querySelector('.next')

next.addEventListener('click', function(){
  event.preventDefault()
  next.classList.add('next_anim')
  while (true)
  {
    if(document.querySelector('.contact_input') == null)
    {
      break
    }
    else
    {
      document.querySelector('.contact_input').setAttribute('class','next_anim')
    }
  }
  document.querySelector('.drop').setAttribute('class', 'next_anim')
  document.querySelector('.text_message').classList.add("next_anim")
})

next.addEventListener('click', function(){
  event.preventDefault()
  next.classList.add('next_anim')
  while (true)
  {
    if(document.querySelector('.label') == null)
    {
      break
    }
    else
    {
      document.querySelector('.label').setAttribute('class', 'next_anim')
    }
  }
})

document.querySelector('.submit').addEventListener('click', function(){
  event.preventDefault()
  let message = document.querySelector('#message').value
  console.log(message)
  if (message == 0)
  {
    alert("Please enter your message in the box")
  }
  else
  {
    document.querySelector('.contact_header').innerHTML = "Thank you"
  }
})

/*Page 3 Cards*/

const cards = document.querySelectorAll('.card')

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      setTimeout(function(){
        entry.target.classList.add('show')
      }, 150)
    }
  })
}, {
  threshold: 0.7
})

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(! entry.isIntersecting){
      entry.target.classList.remove('show')
    }
  })
}, {
  threshold: 0.1
})

observer1.observe(cards[0])
observer1.observe(cards[1])
observer1.observe(cards[2])
  
observer2.observe(cards[0])
observer2.observe(cards[1])
observer2.observe(cards[2])

const footer = document.querySelectorAll('.footer')
console.log(footer)
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    console.log("test")
    if(entry.isIntersecting){
      setTimeout(function(){
        entry.target.classList.add('up')
        document.querySelector('.footer_header').classList.add('up')
      }, 500)
      setTimeout(function(){
        window.scrollTo(0, document.body.scrollHeight)
      }, 500)
    }
    else{
      entry.target.classList.remove('up')
      document.querySelector('.footer_header').classList.remove('up')
    }
  })
})

/*Footer*/

observer3.observe(footer[0])

document.querySelector('.acc_submit').addEventListener('click', function() {
  event.preventDefault()
  let username = document.querySelector('#username').value
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value

  if ((username != null && email != null && password != null) == true)
  {
    document.querySelector('.name').innerHTML = "Welcome, " + username
    document.querySelector('.desc').innerHTML = "We are pleased <br> To have you"
    

    document.querySelector('.acc_desc').classList.remove('down')
    setTimeout(function(){
      document.querySelector('.acc_container').classList.remove('extra')
    }, 200)
    setTimeout(function(){
      document.querySelector('.acc_container').classList.remove('appear')
    }, 400)
  }

  else
  {
    alert("Please enter in the required fields")
  }
  
})




