// console.log("connected")


const cards = document.querySelectorAll(".card");
let countDown = 1;
let totalPrice = 0;


for(let i = 0; i < cards.length; i++){
    const card = cards[i];
    // console.log(card)
    card.addEventListener('click', function(){
        // console.log('click mere do')
        // get the title & price

        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        console.log(price)

        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText =countDown + ". " + title;
        titleContainer.appendChild(p)
        countDown++;
        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2)
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    const inputField = document.getElementById('input-field').value;
    const couponCode = inputField.split(' ').join('').toUpperCase();
    if(totalPrice >= 200){
        if(couponCode === "SELL200"){
            // discount calculation
            const discountPrice = document.getElementById('discountPrice');
            const discount = totalPrice * 0.2;
            discountPrice.innerText = discount.toFixed(2)

            // rest total calculation
        const restTotal = document.getElementById('total');
        restTotal.innerText = totalPrice - discount.toFixed(2);
        
        }
        else{
            alert("invalid coupon code")
        }
    }
    else{
        alert("At first you need to spend $200")
    }
    document.getElementById('input-field').value = '';
})