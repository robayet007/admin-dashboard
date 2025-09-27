// menu toggle
const toggleManu = document.querySelector(".hide-menu");
const aside = document.querySelector("aside");
let open = false;
let theme = document.querySelector('#theme-dark-light')
let darkMode = false

// menu buttons
const dashboard = document.querySelector("#dashboard");
const product = document.querySelector("#product");
const order = document.querySelector("#order");
const customer = document.querySelector("#customer");
const setting = document.querySelector("#setting");
// menu sections
const container = document.querySelector(".container");
const dashboardSection = document.querySelector("#dashboard-section");
const productSection = document.querySelector("#products-section");
const orderSection = document.querySelector("#order-section");
const customersSection = document.querySelector("#customers-section");
const settingsSection = document.querySelector("#setting-section");

toggleManu.addEventListener('click', () => {
    if (!open) {
        aside.style.transform = 'translateX(0)'; // Menu visible
        toggleManu.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`; // icon change
        open = true;
    } else {
        aside.style.transform = 'translateX(-250px)'; // Menu hide
        toggleManu.innerHTML = `<i class="fa-solid fa-bars"></i>`; // icon change
        open = false;
    }
});

theme.addEventListener('click', () => {
    if (!darkMode) {
        // Dark Mode
        document.documentElement.style.setProperty('--bg-color', '#121212'); // dark background
        document.documentElement.style.setProperty('--text-color', '#FFFFFF'); // normal text white
        document.documentElement.style.setProperty('--text-bold', '#FFFFFF'); // bold text white
        darkMode = true;
    } else {
        // Light Mode
        document.documentElement.style.setProperty('--bg-color', '#FFFFFF'); // light background
        document.documentElement.style.setProperty('--text-color', 'rgba(128,128,128,0.979)'); // normal text dark
        document.documentElement.style.setProperty('--text-bold', '#020817'); // bold text dark
        darkMode = false;
    }
});

// show sections

const allSection = [
  dashboardSection,
  orderSection,
  productSection,
  settingsSection,
  customersSection,
];


function showSection(section){
  allSection.forEach(sec => sec.classList.add('section-hide'))
  section.classList.remove('section-hide')
}

dashboard.addEventListener('click' , ()=> showSection(dashboardSection))
product.addEventListener('click' , ()=> showSection(productSection))
order.addEventListener('click' , ()=> showSection(orderSection))
customer.addEventListener('click' , ()=> showSection(customersSection))
setting.addEventListener('click' , ()=> showSection(settingsSection))


