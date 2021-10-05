let data = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => console.log(json))

setTimeout(() => {
    console.log(data);
}, 2000)

