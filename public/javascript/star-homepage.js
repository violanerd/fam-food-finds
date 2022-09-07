window.addEventListener("load", function () {
    let starRating = document.querySelectorAll("#avgRated");
    starRating.forEach((i) => {
        i.innerHTML = Math.round(parseInt(i.innerHTML));
    
        if (i.innerHTML === "1") {
        i.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
        } else if (i.innerHTML === "2") {
        i.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
        } else if (i.innerHTML === "3") {
        i.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
        } else if (i.innerHTML === "4") {
        i.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
        } else if (i.innerHTML === "5") {
        i.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li></ul>`;
        } else {
        i.innerHTML = `N/A`;
        }
    });
});
