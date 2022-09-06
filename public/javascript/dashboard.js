// async function deleteRestaurantHandler(event) {
//   event.preventDefault(); //we ha to use this for url refresh page got error.
//   let restaurant_id;
//   restaurant_id = event.target.getAttribute("data-id");
//   console.log(restaurant_id)
//   const url = `/api/restaurant/${restaurant_id}`
//   const response = await fetch(url, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//   })
//   if (response.ok){
//       alert("Post Deleted");
//       document.location.replace('/dashboard');

//   } else {
//       alert(response.statusText)
//   }
// }
// document.getElementById("btn-delete").addEventListener("click", deleteRestaurantHandler);
// delete post

async function deleteRestaurant (event) {
  // event.preventDefault();
  const restaurant_id = event.target.getAttribute("data-id");
  const response = await fetch(`/api/restaurant/${restaurant_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document.getElementById("btn-delete").addEventListener("click", deleteRestaurant);
