const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
});

if (document.querySelector('#category')){// change to check if the categories drop down is there
    document.querySelector("#category").addEventListener("mousedown", selectCategoryHandler);
}


async function selectCategoryHandler(event){
    //document.reload();
    let category = event.target.textContent;
    let categoryName = category.trim().replace(" ", "-")
    //console.log(categoryName)
    window.location.replace(`/category/${categoryName}`);
}
