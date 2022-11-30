function nav_button() {
  document.getElementById('navigation').classList.toggle('active');
}


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





