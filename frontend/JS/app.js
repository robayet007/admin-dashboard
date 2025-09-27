// menu toggle
const toggleManu = document.querySelector('.hide-menu')
const aside = document.querySelector('aside')
let menu = "hide"

// menu buttons
const dashboard = document.querySelector("#dashboard")
const product = document.querySelector("#product")
const order = document.querySelector("#order")
const customer = document.querySelector("#customer")
const setting = document.querySelector("#setting")
// menu sections
const container = document.querySelector('.container')
const dashboardSection = document.querySelector('#dashboard-section')
const productSection = document.querySelector('#products-section')
const orderSection = document.querySelector('#order-section')
const customersSection = document.querySelector('#customers-section')
const settingsSection = document.querySelector('#setting-section')

toggleManu.addEventListener('click', (e)=>{
     e.stopPropagation();
     aside.classList.toggle('show')
   if(menu == 'hide'){
    aside.style.transform = "translateX(0)"
    toggleManu.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`
    menu = "showed"
   }else{
    aside.style.transform = "translateX(-250px)"
    toggleManu.innerHTML = `<i id="hide" class="fa-solid fa-bars">`
    menu = 'hide'
   }
})


document.addEventListener('click', (e) => {

  if (menu === 'showed' && !aside.contains(e.target) && !toggleManu.contains(e.target)) {
    aside.style.transform = "translateX(-250px)"
    toggleManu.innerHTML = `<i id="hide" class="fa-solid fa-bars"></i>`
    menu = 'hide'
  }
})


// show sections

// সবগুলো section list করে রাখা
const allSections = [
  dashboardSection,
  productSection,
  orderSection,
  customersSection,
  settingsSection
]

// helper function → আগে সব hide করে তারপর যেটা দরকার show করো
function showSection(section) {
  allSections.forEach(sec => sec.classList.add("section-hide"))
  section.classList.remove("section-hide")
}

// default load এ dashboard show হবে
showSection(dashboardSection)

// event listeners
dashboard.addEventListener("click", () => {
    showSection(dashboardSection)
    deleteActive()
})
product.addEventListener("click", () => showSection(productSection ))
order.addEventListener("click", () => showSection(orderSection))
customer.addEventListener("click", () => showSection(customersSection))
setting.addEventListener("click", () => showSection(settingsSection))


function deleteActive() {
  const activeElement = document.querySelector("#active")
  if (activeElement) {
    activeElement.removeAttribute("id")
  }
}