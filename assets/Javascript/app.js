let data = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())



let list = setTimeout(() => {
    data = (json) => { console.log(json) }
}, 2000)

console.log(list);