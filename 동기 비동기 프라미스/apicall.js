async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonres= await response.json()
    console.log(jsonres)
}

getData();