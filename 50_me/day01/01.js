const panels = document.querySelectorAll('.panel')

panels.forEach(ele=>{
  ele.addEventListener('click',()=>{
    panels.forEach(eles=>{
      eles.classList.remove('active')
    }
    )
    ele.classList.add('active')
  })
})