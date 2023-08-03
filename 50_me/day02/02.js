const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const progress = document.querySelector("#progress")
const circles = document.querySelectorAll('.circle')

let current = 1

next.addEventListener('click',()=>{
  current++
  console.log("++",current)
  update()
})


prev.addEventListener('click', () => {
  current--
  console.log("--", current)
  update()
})

function update(){
  circles.forEach((ele, idx) => {
    if (idx < current) {
      ele.classList.add('active')
    } else {
      ele.classList.remove('active')
    }
    progress.style.width = (current-1)/(circles.length-1)*100+'%'
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

