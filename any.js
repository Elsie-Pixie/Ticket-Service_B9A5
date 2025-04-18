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

function handleSelectSeat(event){
    // for double clicking same button alert 
    const value = event.innerText;
    if(seatConfirm.includes(value)){
        return alert("Seat already booked")
    }

    else if(seatConfirm.length < 4){
        event.classList.add('bg-lime-500');
    event.classList.add('text-white');

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



