
document.querySelectorAll('.toggleMenu').forEach((x) => {
  if (x) {
    x.addEventListener('click', () => {
      document.querySelector(".menu").classList.toggle('-translate-x-full')
      document.body.classList.toggle('overflow-hidden');
      document.querySelector('.overlay').classList.toggle('hidden')
    })
  }
});


document.querySelector('.overlay').addEventListener('click', () =>{
  document.querySelector(".menu").classList.toggle('-translate-x-full');
  document.querySelector('.overlay').classList.toggle('hidden')
})


// Inputs
document.querySelectorAll('.dropdown').forEach((drop) => {
  if (drop) {
    drop.addEventListener('click', () => {
      drop.lastElementChild.classList.toggle('hidden')
      drop.firstElementChild.classList.toggle('rotate-180')
    })
  }
})


document.querySelectorAll('.options').forEach((option) => {
  if (option) {
    option.addEventListener('click', (e) => {
      e.target.parentElement.previousElementSibling.value = e.target.textContent
    })
  }
})


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  if (tab) {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    });
  }
});

