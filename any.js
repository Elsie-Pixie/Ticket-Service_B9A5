console.log('hello');

const selectedSeat= document.getElementById('selected-seat');
let seatConfirm = [];
const totalBooked = document.getElementById('total-Booked');
const availableSeat = document.getElementById('available-seat');
let totalPrice= 0;
const finalTotalPrice = document.getElementById('total-price');

// for btn and field enable
const couponField= document.getElementById('coupon-field');
const couponBtn= document.getElementById('coupon-btn');

// for remove no seat booked 
const defaultTextEL = document.getElementById('default-text');

// for grand total prize 
const grandTotalEL= document.getElementById('grand-total-prize');

// for phone number to enable next button 
const phoneNumberEL = document.getElementById('phone-number');
const nextBtnEL = document.getElementById('next-btn');


function handleSelectSeat(event){
    // for double clicking same button alert 
    const value = event.innerText;
    if(seatConfirm.includes(value)){
        return alert("Seat already booked")
    }

    else if(seatConfirm.length < 4){


        event.style.backgroundColor='#1DD100';
    event.classList.add('text-white');

// for remove no seat booked 
defaultTextEL.classList.add('hidden');

    selectedSeat.innerHTML +=`<li class="text-base font-normal flex justify-between">
                                <span>${event.innerText}</span>
                                <span>Economy</span>
                                <span>550</span>
                                </li>`;

    
    seatConfirm.push(event.innerText);
    console.log(selectedSeat);

    

    totalBooked.innerText = seatConfirm.length;
    const availableSeatCount = parseInt(availableSeat.innerText);
    const newAvailableSeatCount = availableSeatCount-1;
    availableSeat.innerText = newAvailableSeatCount;



    // total price 
   
     totalPrice += 550;
     finalTotalPrice.innerText = totalPrice.toFixed(2);



    //  btn and field enable

    if(seatConfirm.length >3){
        couponField.removeAttribute('disabled');  
        couponBtn.removeAttribute('disabled');  
    }
    
    }

    else{
        return alert('Maximum seat booked');
    }

    

}


//coupon button function 
document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponInputValue = couponField.value;
    let couponSave= 0;
    if(couponInputValue!== 'NEW15' && couponInputValue!=='Couple 20' && couponInputValue!=='Pujo20' && couponInputValue!=='Star_50' && couponInputValue!=='Foreign15' && couponInputValue!=='Eid25'){
        alert('Your coupon is not correct');
    }

    if (couponInputValue == 'NEW15'){
        couponSave= totalPrice*.15;
    }
    else if (couponInputValue == 'Couple 20'){
        couponSave= totalPrice*.20;
    }
    else if (couponInputValue == 'Pujo20'){
        couponSave= totalPrice*.20;
    }
    else if (couponInputValue == 'Star_50'){
        couponSave= totalPrice*.50;
    }
    else if (couponInputValue == 'Foreign15'){
        couponSave= totalPrice*.15;
    }
    else if (couponInputValue == 'Eid25'){
        couponSave= totalPrice*.25;
    }

    // to show discount price after applying coupon 
    const discountDetails = document.getElementById('discount-details');
    discountDetails.innerHTML = `
                                <p>Discount</p>
                                <p>
                                    <span>-BDT</span>
                                    <span>${couponSave.toFixed(2)}</span>
                                </p>`

  const grandTotalValue = totalPrice - couponSave;
  grandTotalEL.innerText= grandTotalValue.toFixed(2);

})



phoneNumberEL.addEventListener('input', function(e){
    const inputValue = e.target.value;
    console.log(inputValue);
    if(inputValue.length >= 11){
        nextBtnEL.removeAttribute('disabled');
        nextBtnEL.style.backgroundColor='#1DD100';
    }
})
   




