let CloseBtn = document.querySelector("collapse-btn");
let OpenBtn = document.querySelector(".fa-graduation-cap");
let SideBar = document.querySelector(".sidebar");
let text = document.querySelectorAll(".text");
let collapseBtn = document.querySelector(".collapse-btn");
let navItem = document.querySelectorAll('.nav-item');


function toggleSidebar()
{
    // console.log("ok");
    SideBar.classList.toggle('show');

    if(SideBar.classList.contains('show')){
        text.forEach(item=>{
            console.log(item)
            item.style.display = 'none';
        })

        navItem.forEach(item=>{
            item.style.justifyContent = 'center';
        })
        collapseBtn.style.display = 'none';



    }   
    else {
        text.forEach(item=>{
            item.style.display = 'inline';
        })
        navItem.forEach(item=>{
            item.style.justifyContent = 'start';
        })
        collapseBtn.style.display = 'block';
    }
};