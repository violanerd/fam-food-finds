const starWrapper = document.querySelector("#stars");
const stars = document.querySelectorAll("#stars a");
const overallRating = document.getElementById("overall-rating");

//leaving a review

stars.forEach((star, clickedIndex) => {
  star.addEventListener("click", () => {
    starWrapper.classList.add("disabled");
    stars.forEach((otherStar, otherIndex) => {
      if (otherIndex <= clickedIndex) {
        otherStar.classList.add("active");
        ratingReview = clickedIndex + 1;
      }
    });
    console.log(`star of index ${clickedIndex + 1} was clicked`);
    console.log(`star of index ${ratingReview} was clicked`);
  });
  // POST to backend your star
});

//dynamically pull in average of raatings
let avgRating = 4;

const starSelect = function () {
  if (avgRating === 1) {
    overallRating.outerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (avgRating === 2) {
    overallRating.outerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (avgRating === 3) {
    overallRating.outerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (avgRating === 4) {
    overallRating.outerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (avgRating === 5) {
    overallRating.outerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li></ul>`;
  } else {
    overallRating.outerHTML = `No reviews collected yet`;
  }
};

starSelect();
