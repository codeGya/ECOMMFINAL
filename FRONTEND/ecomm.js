document.addEventListener('DOMContentLoaded',dispalyAfterRefreshingPage)

async function dispalyAfterRefreshingPage()
{
    const page= 1
    //e.preventDefault()
    let waitForGettingDataFromBackend=await axios.get(`http://18.181.246.36:3500/get-user-data/?page=${page}`)
   //  let dataFromBackend=waitForGettingDataFromBackend.data
//     //console.log(dataFromBackend)
//console.log(waitForGettingDataFromBackend,'i want to debug my error')
    let elementToPresentData=document.getElementById('gadgets')
    //let output=""

    // for(let i=0;i<dataFromBackend.products.length;i=i+1)
    // {
    //     output=output+
        
    //     `<div ><h4>${dataFromBackend.products[i].title}</h4><img src=${dataFromBackend.products[i].imageurl}>
    //        <label for=shoes>Rs-${dataFromBackend.products[i].price}</label><button id=${dataFromBackend.products[i].id} type=button>ADD TO CART</button>
    //        </div>`

    //        //pagination(waitForGettingDataFromBackend.data)
        
         
        
    
        
    //}
   const dataFromBackend=waitForGettingDataFromBackend.data.products
   let output=""
   for(let i=0;i<waitForGettingDataFromBackend.data.products.length;i=i+1)
   {
    output=output+`<div ><h4>${dataFromBackend[i].title}</h4><img src=${dataFromBackend[i].imageurl}>
           <label for=shoes>Rs-${dataFromBackend[i].price}</label><button id=${dataFromBackend[i].id} type=button>ADD TO CART</button>
           </div>`

   }

   
    
    
            


    



    
    elementToPresentData.innerHTML=output
    paginationPage(waitForGettingDataFromBackend.data.key)
    

}
document.getElementById('gadgets').addEventListener('click',cartItems)
async function cartItems(e)
{
    //console.log(e.target.id)
    const whichButtonGotClicked=e.target.id
    

    
    //displayCartProducts('hey i am added to cart')
    //console.log(e.target.id)
    //const waitForGettingData=await axios.get(`http://localhost:3500/get-user/${whichButtonGotClicked}`)
    //displayCartProducts(whichButtonGotClicked)
    let waitForGettingData=await axios.get(`http://18.181.246.36:3500/get-user/${whichButtonGotClicked}`)
    //console.log(waitForGettingData)
    createNotification(waitForGettingData.data.title)
    
    //document.getElementById('list').innerHTML=document.getElementById('list').innerHTML+`<li>Price-${waitForGettingData.data.price} Title-${waitForGettingData.data.title}<img src=${waitForGettingData.data.imageurl}></li>`
    
    
}

// document.getElementById('cart').addEventListener('click',displayCartProducts)

// async function displayCartProducts(a)
// {
//     //if(a.id===)
//     //console.log('hey i am in cart section')
    
    
// }
//setTimeout(()=>{document.getElementById('notification').innerText='ADDED TO CART'},0)

function createNotification(a)
{
    const createElement=document.createElement('div')
    createElement.classList.add('toast')
    createElement.innerText=`${a} ADDED TO CART`

    document.getElementById('notif').appendChild(createElement)

    setTimeout(()=>{
        createElement.remove()

    },3000)
}

document.getElementById("cart").addEventListener('click',displayingCartButton)

function displayingCartButton()
{
    document.getElementById("cart").classList.toggle('active')
    document.getElementById("nav").classList.toggle('active')



}

// async function addToCart(a,b,c,d)
// {
//     const user={
//         id:a,
//         title:b,
//         imageurl:c,
//         price:d

//     }
//     const waitForPostingToCartDataBase=await axios.post(`http://localhost:3500/post-cart`,user)
//     console.log(waitForPostingToCartDataBase)
// }

document.getElementById('cart').addEventListener('click',getDataFromBackend)

async function  getDataFromBackend()
{
    const page=1
    let waitForGettingDataOfCart=await axios.get(`http://18.181.246.36:3500/get-user/?page=${page}`)
    //console.log(waitForGettingDataOfCart)
    //document.getElementById('list').innerHTML=`<li>Price-${waitForGettingDataOfCart.data.price} Title-${waitForGettingDataOfCart.data.title}</li>`
    let output=""
   //console.log(waitForGettingDataOfCart)
    
    for(let i=0;i<waitForGettingDataOfCart.data.data.length;i=i+1)
    {
       output=output+`<li>Price-${waitForGettingDataOfCart.data.data[i].price} Title-${waitForGettingDataOfCart.data.data[i].title}<img src=${waitForGettingDataOfCart.data.data[i].imageurl}><label for='quantity'>Quantity:</label><input value=${waitForGettingDataOfCart.data.data[i].cartItem.quantity} type=number></li>`

    }
    console.log(output)


   //document.getElementById('list').innerHTML=""
   document.getElementById('list').innerHTML=output
   cartPaginationFunction(waitForGettingDataOfCart.data.key)

}
document.getElementById('gadgets').addEventListener('click',storeDataInCartDataBase)

async function storeDataInCartDataBase(e)
{
   const whichButtonGotClicked=e.target.id

    const user={
        id:whichButtonGotClicked
    }

    const waitForPostingDataToCartDataBase=await axios.post('http://18.181.246.36:3500/post-cart',user)
    //console.log(waitForPostingDataToCartDataBase)
}


async function paginationPage(a)
{
   console.log(a,'whether i reached here or not')
   //let currentPage=a.currentPage
   //console.log(a)
    
    
    //document.getElementById('a').appendChild(createButtons)

    if(a.hasPreviouPage  &&  a.currentPage!=a.lastPage)
    {
        console.log('i am 1')
        //let currentPage=+a.currentPage
        //let createButtons=document.createElement('button')
        //createButtons.innerText=currentPage 
       //console.log(currentPage)

    //let createButtons=document.createElement('button')
        //console.log('i am here')
        //const previousPage=currentPage-1

       // const previousPageButton=document.createElement('button')

       // previousPageButton.innerText=previousPage
        //document.getElementById('a').appendChild(previousPageButton)

        // if(currentPage!=a.lastPage)
        // {
        //     const lastPageButton=document.createElement('button')
        //     lastPageButton.innerText=a.lastPage
        //     //document.getElementById('a').appendChild(lastPageButton)
        //     //document.getElementById('a').innerHTML=`<button id=currentPage onclick=routeToBackend("${currentPage}")>currentPage</button>  <button id=previousPage onclick=routeToBackend("${previousPage}")>previousPage</button>
        //     //document.getElementById('a').innerHTML=`<button id=${currentPage} onclick=routeToBackend("${currentPage}")>currentPage</button>  <button id=${previousPage} onclick=routeToBackend("${previousPage}")>previousPage</button>


        // }
        document.getElementById('a').innerHTML=`<button id=${a.previousPage} onclick=routeToBackend("${a.previousPage}")>${a.previousPage}</button> <button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button>....<button id=${a.lastPage} onclick=routeToBackend("${a.lastPage}")>${a.lastPage}</button> `
    }

    else if(a.hasNextPage && a.currentPage!=a.lastPage && a.hasPreviouPage && a.nextPage!==a.lastPage)
    {
        console.log('i am 2')
        document.getElementById('a').innerHTML=`<button id=${a.previousPage} onclick=routeToBackend("${a.previousPage}")>${a.previousPage}</button> <button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackend("${a.nextPage}")>${a.nextPage}</button>... <button id=${a.lastPage} onclick=routeToBackend("${a.lastPage}")>${a.lastPage}</button> `

    }
    else if(a.hasNextPage && a.currentPage!=a.lastPage && a.hasPreviouPage )
    {
        console.log('i am 3')
        document.getElementById('a').innerHTML=`<button id=${a.previousPage} onclick=routeToBackend("${a.previousPage}")>${a.previousPage}</button>  <button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackend("${a.nextPage}")>${a.nextPage}</button>  <button id=${a.lastPage} onclick=routeToBackend("${a.lastPage}")>${a.lastPage}</button> `

    }
    else if(a.hasNextPage && a.currentPage!=a.lastPage && +a.currentPage+1 ==a.lastPage && a.hasPreviouPage)
    {
        console.log('i am 4')
        document.getElementById('a').innerHTML=`<button id=${a.previousPage} onclick=routeToBackend("${a.previousPage}")>${a.previousPage}</button> <button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackend("${a.nextPage}")>${a.nextPage}</button>`

    }
    else if(a.hasNextPage && a.currentPage!=a.lastPage && +a.currentPage+1 ==a.lastPage)
    {
        console.log('i am 5')
        document.getElementById('a').innerHTML=`<button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackend("${a.nextPage}")>${a.nextPage}</button>`

    }
    else if(a.hasNextPage && a.currentPage!=a.lastPage )
    {
        console.log('i am 6')
        document.getElementById('a').innerHTML=`<button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackend("${a.nextPage}")>${a.nextPage}</button>  <button id=${a.lastPage} onclick=routeToBackend("${a.lastPage}")>${a.lastPage}</button> `

    }
    else if(a.currentPage==a.lastPage && a.hasPreviouPage)
    {
        console.log('i am 7')
        document.getElementById('a').innerHTML=`<button id=${a.previousPage} onclick=routeToBackend("${a.previousPage}")>${a.previousPage}</button>  <button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button>`

    }
    // document.getElementById('a').innerHTML=` <button id=1 onclick=routeToBackend("1")>1</button>`
    // if(a.currentPage!==1 && a.previousPage!==1)
    // {
    //     //document
    //     document.getElementById('a').innerHTML=` <button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button>`
    // }
    // if(a.hasPreviouPage)
    // {
    //     document.getElementById('a').innerHTML=` <button id=${a.previousPage} onclick=routeToBackend("${a.previousPage}")>${a.previousPage}</button>`

    // }
    // if(a.hasNextPage)
    // {
    //     document.getElementById('a').innerHTML=` <button id=${a.nextPage} onclick=routeToBackend("${a.nextPage}")>${a.nextPage}</button>`



    // }
    // if(a.lastPage!==a.currentPage && a.nextPge!==a.lastPage)
    // {
    //     document.getElementById('a').innerHTML=` <button id=${a.lastPage} onclick=routeToBackend("${a.lastPage}")>${a.lastPage}</button>`


    // }
    // const b=1

    // document.getElementById('a').innerHTML=`<button id=${b} onclick=routeToBackend("${b}")>${b}</button>`

    // if(a.currentPage!==1 && a.hasPreviouPage && a.previousPage!==1  && a.hasNextPage )
    // {
    //     //<button id=${a.lastPage} onclick=routeToBackend("${a.lastPage}")>${a.lastPage}</button>`

    //   document.getElementById('a').innerHTML=` <button id=${a.previousPage} onclick=routeToBackend("${a.previousPage}")>${a.previousPage}</button> <button id=${a.currentPage} onclick=routeToBackend("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackend("${a.currentPage}")>${a.nextPage}</button>`
    // }

    // //const c=2
    // document.getElementById('a').innerHTML=`<button id=${a.lastPage} onclick=routeToBackend("${a.lastPage}")>${a.lastPage}</button>`







    


}

async function routeToBackend(a)
{
    const elementToPresentData=document.getElementById('gadgets')
    const waitForGettingDataFromBackend=await axios.get(`http://18.181.246.36:3500/get-user-data/?page=${a}`)

   const dataFromBackend=waitForGettingDataFromBackend.data.products
   let output=""
   for(let i=0;i<waitForGettingDataFromBackend.data.products.length;i=i+1)
   {
    output=output+`<div ><h4>${dataFromBackend[i].title}</h4><img src=${dataFromBackend[i].imageurl}>
           <label for=shoes>Rs-${dataFromBackend[i].price}</label><button id=${dataFromBackend[i].id} type=button>ADD TO CART</button>
           </div>`

   }
   elementToPresentData.innerHTML=output
   paginationPage(waitForGettingDataFromBackend.data.key)
   //console.log(waitForGettingDataFromBackend.data.key,'i am again checking')
}

async function cartPaginationFunction(a)
{
    //if(a.hasPreviouPage )
    console.log(a,'i am in cart pagination function')

    if(a.hasPreviouPage  &&  a.currentPage!=a.lastPage)
    {
        console.log('i am cart 1')
        //let currentPage=+a.currentPage
        //let createButtons=document.createElement('button')
        //createButtons.innerText=currentPage 
       //console.log(currentPage)

    //let createButtons=document.createElement('button')
        //console.log('i am here')
        //const previousPage=currentPage-1

       // const previousPageButton=document.createElement('button')

       // previousPageButton.innerText=previousPage
        //document.getElementById('a').appendChild(previousPageButton)

        // if(currentPage!=a.lastPage)
        // {
        //     const lastPageButton=document.createElement('button')
        //     lastPageButton.innerText=a.lastPage
        //     //document.getElementById('a').appendChild(lastPageButton)
        //     //document.getElementById('a').innerHTML=`<button id=currentPage onclick=routeToBackend("${currentPage}")>currentPage</button>  <button id=previousPage onclick=routeToBackend("${previousPage}")>previousPage</button>
        //     //document.getElementById('a').innerHTML=`<button id=${currentPage} onclick=routeToBackend("${currentPage}")>currentPage</button>  <button id=${previousPage} onclick=routeToBackend("${previousPage}")>previousPage</button>


        
        document.getElementById('buttons').innerHTML=`<button id=${a.previousPage} onclick=routeToBackendOfCart("${a.previousPage}")>${a.previousPage}</button> <button id=${a.currentPage} onclick=routeToBackendOfCart("${a.currentPage}")>${a.currentPage}</button>....<button id=${a.lastPage} onclick=routeToBackendOfCart("${a.lastPage}")>${a.lastPage}</button> `
    }

    else if(a.hasNextPage && a.currentPage!=a.lastPage && a.hasPreviouPage)
    {
        console.log('i am cart 2')
        document.getElementById('buttons').innerHTML=`<button id=${a.previousPage} onclick=routeToBackendOfCart("${a.previousPage}")>${a.previousPage}</button> <button id=${a.currentPage} onclick=routeToBackendOfCart("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackendOfCart("${a.nextPage}")>${a.nextPage}</button>... <button id=${a.lastPage} onclick=routeToBackendOfCart("${a.lastPage}")>${a.lastPage}</button> `

    }
    else if(a.hasNextPage && a.currentPage!=a.lastPage && a.hasPreviouPage )
    {
        console.log('i am cart 3')
        document.getElementById('buttons').innerHTML=`<button id=${a.previousPage} onclick=routeToBackendOfCart("${a.previousPage}")>${a.previousPage}</button>  <button id=${a.currentPage} onclick=routeToBackendOfCart("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackendOfCart("${a.nextPage}")>${a.nextPage}</button>  <button id=${a.lastPage} onclick=routeToBackendOfCart("${a.lastPage}")>${a.lastPage}</button> `

    }
    else if(a.hasNextPage && a.currentPage!=a.lastPage && +a.currentPage+1 ==a.lastPage && a.hasPreviouPage)
    {
        console.log('i am cart  4')
        document.getElementById('buttons').innerHTML=`<button id=${a.previousPage} onclick=routeToBackendOfCart("${a.previousPage}")>${a.previousPage}</button> <button id=${a.currentPage} onclick=routeToBackendOfCart("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackendOfCart("${a.nextPage}")>${a.nextPage}</button>`

    }
    else if(a.hasNextPage && a.currentPage!=a.lastPage && +a.currentPage+1 ==a.lastPage)
    {
        console.log('i am  cart 5')
        document.getElementById('buttons').innerHTML=`<button id=${a.currentPage} onclick=routeToBackendOfCart("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackendOfCart("${a.nextPage}")>${a.nextPage}</button>`

    }
    else if(a.hasNextPage && a.currentPage!=a.lastPage )
    {
        console.log('i am cart  6')
        document.getElementById('buttons').innerHTML=`<button id=${a.currentPage} onclick=routeToBackendOfCart("${a.currentPage}")>${a.currentPage}</button> <button id=${a.nextPage} onclick=routeToBackendOfCart("${a.nextPage}")>${a.nextPage}</button>  <button id=${a.lastPage} onclick=routeToBackendOfCart("${a.lastPage}")>${a.lastPage}</button> `

    }
    else if(a.currentPage==a.lastPage && a.hasPreviouPage)
    {
        console.log('i am cart 7')
        document.getElementById('buttons').innerHTML=`<button id=${a.previousPage} onclick=routeToBackendOfCart("${a.previousPage}")>${a.previousPage}</button>  <button id=${a.currentPage} onclick=routeToBackendOfCart("${a.currentPage}")>${a.currentPage}</button>`

    }
    


    
 }

async function routeToBackendOfCart(a)
{
    //let waitForGettingCartParticularData=await axios.get()

    let waitForGettingDataOfCart=await axios.get(`http://18.181.246.36:3500/get-user/?page=${a}`)
    //console.log(waitForGettingDataOfCart.data)
    //document.getElementById('list').innerHTML=`<li>Price-${waitForGettingDataOfCart.data.price} Title-${waitForGettingDataOfCart.data.title}</li>`
    let output=""
    //console.log(waitForGettingDataOfCart)
    
    for(let i=0;i<waitForGettingDataOfCart.data.data.length;i=i+1)
    {
       output=output+`<li>Price-${waitForGettingDataOfCart.data.data[i].price} Title-${waitForGettingDataOfCart.data.data[i].title}<img src=${waitForGettingDataOfCart.data.data[i].imageurl}></li>`

    }
    //console.log(output)
    document.getElementById('list').innerHTML=output

    cartPaginationFunction(waitForGettingDataOfCart.data.key)
}

document.getElementById('order').addEventListener('click',orderfunction)

async function orderfunction()
{
    let waitForContactingToBackend=await axios.get('http://18.181.246.36:3500/create-order')
   window.alert(`Order Id-${waitForContactingToBackend.data.orderId} was placed successfully`)

    //console.log(waitForContactingToBackend)
}





