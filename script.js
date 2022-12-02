function nav_button() {
  document.getElementById('navigation').classList.toggle('active');
}

const acc_button = document.querySelector('.acc_button')


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

back.addEventListener('click', function(){
  document.querySelector('.acc_desc').classList.remove('down')
  setTimeout(function(){
    document.querySelector('.acc_container').classList.remove('extra')
  }, 200)
  setTimeout(function(){
    document.querySelector('.acc_container').classList.remove('appear')
  }, 400)
})


const next = document.querySelector('.next')

next.addEventListener('click', function(){
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
  document.querySelector('.message_label').classList.add("next_anim")
})

next.addEventListener('click', function(){
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



const cards = document.querySelectorAll('.card')

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
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





