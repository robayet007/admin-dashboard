const hide = document.querySelector('#hide')
const aside = document.querySelector('.aside')

hide.addEventListener('click' , ()=>{
  aside.style.transform = "translateX(320px)"
})