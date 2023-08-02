const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next  = document.querySelector("#next")
const circles = document.querySelectorAll('.circle')

let current = 1
prev.addEventListener('click',()=>{
  current--;
  if(current<1){
    current = 1
  }
  update()
})
next.addEventListener('click',()=>{
  current++;
  if(current>circles.length){
    current = circles.length
  }
  update()
})

function update(){
  circles.forEach((ele, inx) => {
    if (inx < current) {
      ele.classList.add('active')
    } else {
      ele.classList.remove('active')
    }

    const active = document.querySelectorAll('.active')
    progress.style.width = (active.length-1)/(circles.length-1)*100+'%'
    if (current === 1) {
      prev.disabled = true
    } else if (current === circles.length) {
      next.disabled = true
    } else {
      prev.disabled = false
      next.disabled = false
    }
  });
}