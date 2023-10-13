var openShopping = document.querySelector('.shopping')
var closeShopping = document.querySelector('.closeShopping')
var list = document.querySelector('.list')
var listCard = document.querySelector('.listCard')
var body = document.querySelector('body')
var total = document.querySelector('.total ')
var quantity = document.querySelector('.quantity').innerHTML
// console.log("quantity",quantity.)
openShopping.addEventListener('click', ()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
})

var products = [
    {
        id: 1,
        name: 'spaghetti seafood',
        image: "spaghetti-aux-fruits.jpg",
        price: 60.000
    },
    {
        id: 2,
        name: 'spaghetti alla carbonara',
        image: "spaghetti.jpg",
        price: 50.000
    },
    {
        id: 3,
        name: 'spaghetti  Bolognese',
        image: 'boulou.jpg',
        price: 55.000
    },
    {
        id: 4,
        name: 'extra seafood dish',
        image: 'fruit.jpg',
        price: 100.000
    },
    {
        id: 5,
        name: 'special seafood dish',
        image: 'fruit1.jpg',
        price: 110.000
    },
    {
        id: 6,
        name: 'xxl seafood dish',
        image: 'fruit3.jpg',
        price: 130.000
    },{
        id: 7,
        name: 'steak house secret sauce',
        image: 'steak1.jpg',
        price: 130.000
    },{
        id: 8,
        name: 'steak house ginger sauce',
        image: 'Steak2.jpg',
        price: 80.000
    },{
        id: 9,
        name: 'American steak house',
        image: 'steak3.jpg',
        price: 80.000
    },{
        id: 10,
        name: 'Cheese bacon XXL',
        image: 'hamburger.jpg',
        price: 40.000
    },{
        id: 11,
        name: 'Big King burger',
        image: 'hamburger2.jpg',
        price: 45.000
    },{
        id: 12,
        name: 'Double SteakHouse',
        image: 'hamburger3.jpg',
        price: 50.000
    },{
        id: 13,
        name: 'Smokey BBQ',
        image: 'chiken.jpg',
        price: 50.000
    },{
        id: 14,
        name: 'Hickory BBQ',
        image: 'chiken2.jpg',
        price: 60.000
    },
    {
        id: 15,
        name: 'Chicken wings',
        image: 'chiken3.jpg',
        price: 50.000
    },
    {
        id: 16,
        name: 'Menu Chicken Box',
        image: 'box.jpg',
        price:50.000
    },
    {
        id: 17,
        name: 'Fried chicken Box',
        image: 'box2.jpg',
        price: 55.000
    },
    {
        id: 18,
        name: 'XXL Fried chicken Box',
        image: 'box3.jpg',
        price: 60.000
    },
    {
        id: 19,
        name: 'pizza',
        image: 'pizza.jpg',
        price: 20.000
    },
    {
        id: 20,
        name: 'pizza napolitano ',
        image: 'pizza2.jpg',
        price: 22.000
    },
    {
        id: 21,
        name: 'pizza Mami',
        image: 'pizza3.jpg',
        price: 25.000
    },
    {
        id: 22,
        name: 'Healthy Mami',
        image: 'healthy.jpg',
        price: 20.000
    },
    {
        id: 23,
        name: 'Healthy Mami 2',
        image: 'healthy2.jpg',
        price: 25.000
    },
    {
        id:24,
        name: 'Healthy fifty fifty',
        image: 'healthy3.jpg',
        price: 30.000
    },
    {
        id: 25,
        name: 'Red Wine',
        image: 'rouge.jpg',
        price: 80.000
    },
    {
        id: 26,
        name: 'rosé wine',
        image: 'rose.jpg',
        price: 90.000
    },{
        id: 27,
        name: 'White wine',
        image: 'blanc.jpg',
        price: 120.000
    },{
        id: 28,
        name: 'Tiramisu with speculoos',
        image: 'tiraa.jpg',
        price: 20.000
    },{
        id: 29,
        name: ' Tiramisu italiano',
        image: 'tiraa2.jpg',
        price: 26.000
    },{
        id: 30,
        name: 'Hazelnut tiramisu',
        image: 'tiraa3.jpg',
        price: 30.000
    },{
        id: 31,
        name: 'fruit tart',
        image: 'tarte.jpg',
        price: 15.000
    },{
        id: 32,
        name: 'nutella crepe',
        image: 'crepe.jpg',
        price: 16.000
    },{
        id: 33,
        name: 'nutella banana crepe',
        image: 'crepe3.jpg',
        price: 14.000
    },
]
var total = 0
var quantity = 0 
document.getElementById('total').innerHTML = total

    function addToCard(obj) {
         quantity++
    document.querySelector('.quantity').innerHTML = quantity

     $('.listCard').append(`<div class='itemAdded'>
        <img src=${obj.image} width="50px" height="50px"><span>${obj.name}</span> <span class='span3'>${obj.price} </span>
     <div/>`)
    var foodPrice = parseFloat(obj.price)
    total = total + foodPrice
    document.getElementById('total').innerHTML = total
}



function displayOne(obj){
    $('#list').append(`
    <div class="item" >
                <img src=${obj.image} alt="Fried chicken Box">
                <div class="title"> ${obj.name} </div>
                <div class="price">${obj.price}</div>
                <button id=${obj.id}>Add To Cart</button>
    </div>
    `)
}
products.forEach(function(elem){
    displayOne(elem)
    $(`#${elem.id}`).on('click',function(){
        addToCard(elem)
    })
})

$('.buyAllButton').on('click', function() {
    alert(`You bought all items for a total of $${total}`)
    })

    $("#but").on("click", function () {
        var value = $("#searchh").val();
        console.log(products);
        var filtered = products.filter(function (ele) {
          return ele.name.toLowerCase().includes(value.toLowerCase());
        });
        $("#list").empty();
        filtered.forEach(function (elem) {
          displayOne(elem);
        });
      });
    
    
    
    
    