document.getElementById('porder').addEventListener('click',getoldorderdata)

async function getoldorderdata()
{
    console.log('hey baby')
    let waitForGettingPreviousOrderData=await axios.get('http://18.181.246.36:3500/get-previous-order-data')
    console.log(waitForGettingPreviousOrderData)
    
   let output=""
   for(let i=0;i<waitForGettingPreviousOrderData.data.length;i=i+1)
   {
    output=output+`<li class=liimages><h4>${waitForGettingPreviousOrderData.data[i].dataValues.title}</h4><img class=image src=${waitForGettingPreviousOrderData.data[i].dataValues.imageurl}>
           <label for=shoes>Rs-${waitForGettingPreviousOrderData.data[i].dataValues.price}</label><label>${waitForGettingPreviousOrderData.data[i].orderId}</label></li>`
           

   }
   console.log(output)
   document.getElementById('porderofuser').innerHTML=output

}


