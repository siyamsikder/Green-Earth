const allCategoriesContaainer = document.getElementById("all-categories")
// console.log(allCategoriesContaainer)
const allPlantsContainer = document.getElementById("all-plants")
// console.log(allPlantsContainer)
const allTreesButton = document.getElementById("all-trees");

// categories secrion start
const loodcatagoris = () => {
  const url = fetch("https://openapi.programming-hero.com/api/categories")
    // console.log(url)
    .then((res) => res.json())
    .then((data) => {
      const categories = data.categories
      // console.log(categories)
      shoCategorys(categories);
    })
}
const shoCategorys = (categories) => {
  categories.forEach(cat => {
    // console.log(cat.category_name)
    allCategoriesContaainer.innerHTML += `
         <button id="${cat.id}" class="btn btn-wide mt-3 border-2 border-gray-50">${cat.category_name}</button></div>
         `
  });
  allCategoriesContaainer.addEventListener('click', (e) => {
    const allButton = document.querySelectorAll('button')
    allButton.forEach(button => {
      button.classList.remove('bg-[#15803D]')
    })
    if (e.target.localName === 'button') {
      // console.log(e.target)
      e.target.classList.add('bg-[#15803D]')
      loadClickByCat(e.target.id)
    }
  })
}
const loadClickByCat = (categoryid) => {
  console.log(categoryid)
  const url = fetch(`https://openapi.programming-hero.com/api/category/${categoryid}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.plants)
      shoProductBYCategorysby(data.plants)
    })
}
const shoProductBYCategorysby = (products) => {
  //  console.log(products)
    allPlantsContainer.innerHTML = "";
  products.forEach(p => {
    // console.log(onebyone)
   allPlantsContainer.innerHTML += `
              <div class="bg-white shadow-sm rounded-xl p-4">
             <img class="rounded-xl h-[190px] w-full" src="${p.image}" alt="" />
            <h1 class="text-xl font-bold mt-2">${p.name}</h1>
            <p class="text-gray-500 mb-3 mt-1">${p.description}</p>
            <div class="flex justify-between mb-5">
              <div>
                <button class="btn bg-[#DCFCE7] text-[#15803D] rounded-2xl p-5">${p.category}</button>
                </div>
              <h2>৳ <span>${p.price}</span></h2>
            </div>
            <div class="w-full"><button class="btn btn-wide bg-[#15803D] text-white">Add to Cart</button></div>
          </div>    
         `
  })
}
loadClickByCat()
loodcatagoris()

allTreesButton.addEventListener('click', () => {
  const allButtons = allCategoriesContaainer.querySelectorAll('button');
  allButtons.forEach(btn => btn.classList.remove('bg-[#15803D]'));
  allTreesButton.classList.add('bg-[#15803D]');
  loodplant();
});


// All Plants secriom srart hear

const loodplant = () => {
  const url = fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      const plants = (data.plants)
      // console.log(plants)
      shoPlants(plants)
    })
}
const shoPlants = (plants) => {
  plants.forEach(dta => {
    // console.log(dta.image)
    allPlantsContainer.innerHTML += `
              <div class="bg-white shadow-sm rounded-xl p-4">
             <img class="rounded-xl h-[190px] w-full" src="${dta.image}" alt="" />
            <h1 class="text-xl font-bold mt-2">${dta.name}</h1>
            <p class="text-gray-500 mb-3 mt-1">${dta.description}</p>
            <div class="flex justify-between mb-5">
              <div>
                <button class="btn bg-[#DCFCE7] text-[#15803D] rounded-2xl p-5">${dta.category}</button>
                </div>
              <h2>৳ <span>${dta.price}</span></h2>
            </div>
            <div class="w-full"><button class="btn btn-wide bg-[#15803D] text-white">Add to Cart</button></div>
          </div>    
         `
  })
}
loodplant()
