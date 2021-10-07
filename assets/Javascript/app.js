const input = document.querySelector('.input_box')
const search = document.querySelector('.search_button')
const textArea = document.querySelector('.container')


const getData = async (result) => {
  const url = `https://api.edamam.com/search?app_id=6f512d38&app_key=19cf2c2a87f4c383a65e181519481aa4&q=${result}`
  const res = await fetch(url)
  const data = await res.json()
  let image = data.hits[0].recipe.image
  return image;
}


search.addEventListener('click', async (e) => {
  let image = await getData(input.value);;
  let data = `<div class="card">
        <img src="${image}" alt="" />
        <div class="content">
          <h1 class="heading">${input.value}</h1>
          <p class="description">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, totam!
          </p>
        </div>
        <button>Yummy ${input.value}</button>
      </div>`
  textArea.innerHTML = data;

})
