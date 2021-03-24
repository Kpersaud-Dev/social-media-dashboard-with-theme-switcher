const toggleBtn = document.getElementById('toggle');

// Dark Elements Variables
const heading = document.querySelector('.heading');
const cards = document.querySelectorAll('.card');
const bigNumber = document.querySelector('.big-number');
const miniCards = document.querySelectorAll('.mini-card');
const overviewHeader = document.querySelector('.overview-header');



toggleBtn.addEventListener('change', function() {
  if(toggleBtn.checked) {
    document.body.classList.add('dark');
    heading.classList.add('dark');
  
    cards.forEach(card => {
      card.classList.add('dark')
    })

    bigNumber.classList.add('dark');
    
    miniCards.forEach(miniCard => {
      miniCard.classList.add('dark');
    })

    overviewHeader.classList.add('dark');

  } else {
    document.body.classList.remove('dark');

    heading.classList.remove('dark');
  
    cards.forEach(card => {
      card.classList.remove('dark')
    })

    bigNumber.classList.remove('dark');
    
    miniCards.forEach(miniCard => {
      miniCard.classList.remove('dark');
    })

    overviewHeader.classList.remove('dark');
  }
})
