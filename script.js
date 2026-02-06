// 1️⃣ WhatsApp button alert
const waButton = document.querySelector('a');
waButton.addEventListener('click', function(event){
    alert('You will be redirected to WhatsApp to place your order!');
});

// 2️⃣ Hover effect for menu items
const menuItems = document.querySelectorAll('ul li');

menuItems.forEach(function(item){
    item.addEventListener('mouseenter', function(){
        item.style.backgroundColor = '#ffe0b2'; // light highlight
        item.style.transform = 'scale(1.05)';
        item.style.transition = '0.3s';
    });
    item.addEventListener('mouseleave', function(){
        item.style.backgroundColor = '#fff'; // back to original
        item.style.transform = 'scale(1)';
    });
});
