const input = document.querySelector('input')
const search = document.querySelector('button')
const textArea = document.querySelector('.image')


const getData = async (result) => {
  const url = `https://api.edamam.com/search?app_id=6f512d38&app_key=19cf2c2a87f4c383a65e181519481aa4&q=${result}`
  const res = await fetch(url)
  const data = await res.json()
  return data.hits[1].recipe.image;
}


search.addEventListener('click', async (e) => {
  let image = await getData(input.value);
  console.log(image);
  let img = ` <img src="${image}" alt="">`
  textArea.innerHTML = img;
})
