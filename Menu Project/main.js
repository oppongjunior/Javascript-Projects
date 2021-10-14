const menu = [
    {
        id:1,
        name:"Pancakes",
        category:"Breakfast",
        price:60,
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aspernatur deserunt magnam. Unde, sit dolorem!",
        Image:"resources/images/menu_1.jpg",
    },
    {
        id:2,
        name:"Tea and Bread",
        category:"Lunch",
        price:60,
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aspernatur deserunt magnam. Unde, sit dolorem!",
        Image:"resources/images/menu_2.jpg",
    },
    {
        id:3,
        name:"Fufu and Groundnut",
        category:"Super",
        price:60,
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aspernatur deserunt magnam. Unde, sit dolorem!",
        Image:"resources/images/menu_3.jpg",
    },
    {
        id:4,
        name:"Ampesie",
        category:"Lunch",
        price:60,
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aspernatur deserunt magnam. Unde, sit dolorem!",
        Image:"resources/images/menu_4.jpg",
    },
    {
        id:5,
        name:"Pizza",
        category:"Lunch",
        price:70,
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aspernatur deserunt magnam. Unde, sit dolorem!",
        Image:"resources/images/menu_5.jpg",
    },
    {
        id:6,
        name:"Banku",
        category:"Super",
        price:20,
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aspernatur deserunt magnam. Unde, sit dolorem!",
        Image:"resources/images/menu_6.jpg",
    },
]

const filterContainer = document.querySelector(".filters");
const body = document.getElementById("body");
const mainContent = document.querySelector(".menu-main-content");
let filterBtns = "";

//get filters
const getFilters = ()=>{
    let filters = menu.map((item)=>{
        return item.category;
    })
    let newFilters = [];
    filters.forEach((item)=>{
        if(!newFilters.includes(item)){
            newFilters.push(item);
        }
    })
    renderFilters(newFilters);
    filterBtns = document.querySelectorAll(".btn");
}

//render filters
const renderFilters = (filters)=>{
    filterContainer.innerHTML =  `<button class="all btn btn-outline-dark text-uppercase" id="all">all</button>`;
    filters.forEach((item)=>{
        filterContainer.innerHTML +=` <button class="${item} btn btn-outline-dark text-uppercase" id="${item}">${item}</button>`;
    })
    
    
}



//get menu
const getMenu = (category)=>{
    let menuToLoad = [];
    if(category === "all"){
        menuToLoad = menu;
    }else{
        menuToLoad = menu.filter((item)=>item.category === category);
    }

    renderMenu(menuToLoad);
}
//render menu
const renderMenu = (menuTorender)=>{
    mainContent.innerHTML = ""
    menuTorender.forEach((item)=>{
        mainContent.innerHTML+=`<div class="col-md-10 col-lg-6 mt-3">
                                    <div class="menu-item-container d-lg-flex justify-content-between">
                                        <img src="${item.Image}" class="menu-image img-thumbnail" alt="">
                                        <div class="menu-item-details ms-lg-3">
                                            <div class="menu-header d-flex px-md-2 px-lg-0 py-md-3 py-lg-3 justify-content-between w-100">
                                                <h5 class="menu-name">${item.name}</h5>
                                                <h6 class="text-warning">$${item.price}.00</h6>
                                            </div>
                                            <hr>
                                            <p class="info">${item.info}</p>
                                        </div>
                                    </div>
                                </div>`;
    })
}

//filterBtn on click

//load on body load
body.onload=()=>{
    getFilters();
    getMenu("all")
    console.log(filterBtns)

    filterBtns.forEach((filterBtn)=>{
        filterBtn.onclick = ()=>{
            getMenu(filterBtn.id)
        }
    })
}
console.log(filterBtns)