document.getElementById("details").addEventListener("submit",postDataToBackend)
console.log('hey')

async function postDataToBackend()
{
   // e.preventDefault()
    let user={
        imageurl:document.getElementById('imageurl').value,
        price:document.getElementById('price').value,
        title:document.getElementById('title').value

    }
    console.log('hey')

    let waitForPostingDataToBackend=await axios.post('http://18.181.246.36:3500/add-user',user)
    console.log(waitForPostingDataToBackend)
}