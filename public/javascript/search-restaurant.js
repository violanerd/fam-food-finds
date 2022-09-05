const listItemsEl = document.getElementById("list-items");
const editItemsEl = document.getElementById("restaurant-container");



const searchHandler = async function (event) {
  event.preventDefault();

  const restaurant_name = document.querySelector("#restaurant_name").value;
  await fetch(`/api/restaurant/${restaurant_name}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

const focusHandler = async function (event) {
  event.preventDefault();
  listItemsEl.classList.remove("hidden");
  editItemsEl.classList.toggle("flex");
}

const focusoutHandler = async function (event) {
  event.preventDefault();
  listItemsEl.classList.add("hidden");
  editItemsEl.classList.remove("hidden");
}

const searchEl = document.querySelector("#restaurant_name");
searchEl.addEventListener("focusin", focusHandler);
searchEl.addEventListener("focusout", focusoutHandler);

// document.querySelector("#restaurant_name").addEventListener("focus", inputHandler);
document.querySelector("#btn-search").addEventListener("click", searchHandler);
