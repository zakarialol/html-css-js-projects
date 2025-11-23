
const menuItems=[
    {
        id:1,
        img:"./img-for-menu/cat-01.jpg",
        title:'buttermilk pancakes',
        price:'$ 15.99',
        subscription:'Lorem ipsum dolor sit amet consectetur adipis, architecto reiciendis quis ad sit.  ',
        category:'breakfast',
    },
    {
        id:2,
        img:"./img-for-menu/cat-02.jpg",
        title:'dinner double',
        price:'$ 13.99',
        subscription:' amet consectetur adipisicing elit. Similique rem labore optio',
        category:'lunch',
    },
    {
        id:3,
        img:"./img-for-menu/cat-03.jpg",
        title:'godzilla milkchaka',
        price:'$ 6.99',
        subscription:'Lorem ipsum dolor sit amet consectetur adipis, architecto reiciendis quis ad sit.  ',
        category:'breakfast',
    },
    {
        id: 4,
        img:"./img-for-menu/cat-04.jpg",
        title:'country delight',
        price:'$ 20.99',
        subscription:'Lorem ipsum dolor sit amet consectetur adipis, architecto reiciendis quis ad sit.  ',
        category:'breakfast',
    },
    {
        id:'5',
        img:"./img-for-menu/cat-05.jpg",
        title:'egg attack',
        price:'$ 22.99',
        subscription:'dolor sit amet consectetur adipisicing elit.  reiciendis quis ad sit.  ',
        category:'breakfast',
    },
    {
        id:'6',
        img:"./img-for-menu/cat-06.jpg",
        title:'derio dream',
        price:'$ 1.99',
        subscription:'sit amet consectetur adipisicing elit.  reiciendis quis ad sit.  ',
        category:'lunch',
    },
    {
        id:'7',
        img:"./img-for-menu/cat-07.jpg",
        title:'pank cake',
        price:'$ 3.99',
        subscription:'adipisicing elit. Similique rem labore optio voluptates, ',
        category:'shakes',
    },
    {
        id:'8',
        img:"./img-for-menu/cat-08.jpg",
        title:'bacon overfllow',
        price:'$ 99.99',
        subscription:'Lorem ipsum dolor sit. Similique rem labore optio   ',
        category:'lunch',
    },
    {
        id:'9',
        img:"./img-for-menu/features-01.jpg",
        title:'amercan classic',
        price:'$ 5.99',
        subscription:' dolor sit amet consectetur adipisicing elit. Similique rem labore .  ',
        category:'shakes',
    },
    {
        id:'10',
        img:"./img-for-menu/features-02.jpg",
        title:'morocan taggin',
        price:'$ 20.99',
        subscription:'tagin is the best sit amet consectetur .  ',
        category:'lunch',
    },
    {
        id:'11',
        img:"./img-for-menu/features-03.jpg",
        title:'irak milk',
        price:'$ 0.99',
        subscription:'consectetur adipisicing elit. Similique  voluptates, ',
        category:'shakes',
    },
    {
        id:'11',
        img:"./img-for-menu/features-03.jpg",
        title:'dinner milk',
        price:'$ 0.99',
        subscription:'consectetur adipisicing elit. Similique  voluptates, ',
        category:'dinner',
    },
    {
        id:'11',
        img:"./img-for-menu/features-01.jpg",
        title:'fottor milk',
        price:'$ 0.99',
        subscription:'consectetur adipisicing elit. Similique  voluptates, ',
        category:'fottor',
    },
    
]
// div where to store items
const itemsCountianer= document.querySelector('main .menu-items')
const navMenuDiv = document.querySelector('.nav-menu')
// let navButtons ;

// passing the items to the countainer
function renderElments(menu){
    let itemsHolder='';
    menu.forEach(function(item){
    itemsHolder+=`<div class='item-main-div' id=${item.id}>
                                    <div class='imgDiv'><img  src='${item.img}' alt='image'></div>
                                    <div class='item'>
                                        <div class='head'>
                                            <p class='item-title'>${item.title}</p><span class='item-price'>${item.price}</span>
                                        </div>
                                         <p class='item-info'>${item.subscription}</p>
                                    </div>
                                </div>`
})
    itemsCountianer.innerHTML= itemsHolder
}
renderElments(menuItems)

// get the buttons dinamicly
function addTextTobutton(){

    const categoryArr = [...new Set(menuItems.map(itm => itm.category))] 
    categoryArr.unshift('all')

    categoryArr.forEach(function(button){
        navMenuDiv.innerHTML +=`<div class="btn ${button}" data-categore="${button}">${button}</div>`
    })

    let btnAll= document.querySelector('.all')
    btnAll.classList.add('add-outline')
    let navButtons = document.querySelectorAll('.btn')

    navButtons.forEach(function(butN){
               butN.addEventListener('click',check)
    })

}
addTextTobutton()

// render elemnet inside the doom
function check(bt){
    let navButtons = document.querySelectorAll('.btn')
    navButtons.forEach(function(btn){
        btn.classList.remove('add-outline')
    })
    let currentButton= bt.currentTarget
    currentButton.classList.add('add-outline')
    catego=bt.currentTarget.getAttribute('data-categore')
    const mennu= catego === 'all' ? menuItems : menuItems.filter(function(fil){
       return fil.category === catego
    })
    renderElments(mennu)   
}

// testing the set how it works




