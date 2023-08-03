const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('#progress')


let current = 1

prev.addEventListener('click', ()=>{
  current--;
  if(current<1){
    current = 1
  }
 update()
})

next.addEventListener('click', ()=>{
  current++;
  if(current>circles.length){
    current = circles.length
  }
  update()
})

function update(){
  circles.forEach((ele, index) => {
    if (index < current) {
      ele.classList.add('active')
    } else {
      ele.classList.remove('active')
    }
    progress.style.width = (current - 1) / (circles.length - 1) * 100 + '%'
    if (current == 1) {
      prev.disabled = true
    } else if (current == circles.length) {
      next.disabled = true
    } else {
      prev.disabled = false
      next.disabled = false
    }
  });
}