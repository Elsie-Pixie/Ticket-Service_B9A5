document.getElementById('buy-tickets').addEventListener('click',function(){
    document.getElementById('seat-section').scrollIntoView({ behavior: 'smooth' });
})

document.getElementById('button-seeOffer').addEventListener('click', function(){
    document.getElementById('after-click').classList.remove('hidden');
    document.getElementById('button-seeOffer').classList.add('hidden');
    document.getElementById('button-hideOffer').classList.remove('hidden');
})

document.getElementById('button-hideOffer').addEventListener('click', function(event){
    document.getElementById('after-click').classList.add('hidden');
    document.getElementById('button-hideOffer').classList.add('hidden');

    document.getElementById('button-seeOffer').classList.remove('hidden');
})


document.getElementById('terms').addEventListener('click', function(){
    document.getElementById('terms-des').scrollIntoView({behavior: 'smooth'});
})

