const newFormHandler = async function (event) {
  event.preventDefault();

  const restaurant_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]
  const restaurant_name = document.querySelector('input[name="restaurant-name"]').value;
  const restaurant_url = document.querySelector('input[name="restaurant-url"]').value;
  const restaurant_description = document.querySelector('textarea[name="restaurant-description"]').value;
  console.log(restaurant_id, restaurant_name, restaurant_url, restaurant_description)
  // grab id from the window
  if (restaurant_name, restaurant_url, restaurant_description){
    const response = await fetch(`/api/restaurant/${restaurant_id}`, {
      method: "PUT",
      body: JSON.stringify({
        restaurant_name,
        restaurant_url,
        restaurant_description,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok){
      alert("Your restaurant post has been edited!")
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText)
    }
  } else {
    alert("Please make sure all fields are filled in")
  }
};



document.querySelector("#btn-edit").addEventListener("click", newFormHandler)