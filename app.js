

let url = "https://icanhazdadjoke.com/"
let btn = document.querySelector('button')
let h5 = document.querySelector('h5')


btn.addEventListener('click', async ()=>{
   await  getJokes()
})


let config = {headers:{Accept:'Application/json'}}

async function getJokes(){

    let res =  await axios.get(url,config)
    h5.innerText = res.data.joke
    return res.data.joke
}