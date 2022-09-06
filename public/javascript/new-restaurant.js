
const newFormHandler = async function (event) {
    event.preventDefault();
  
    const restaurant_name = document.querySelector('input[name="restaurant-name"]').value;
    const restaurant_url = document.querySelector('input[name="restaurant-url"]').value;
    const restaurant_description = document.querySelector('textarea[name="restaurant-description"]').value;
  
    if (restaurant_name, restaurant_url, restaurant_description){
      const response = await fetch("/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        restaurant_name,
        restaurant_url,
        restaurant_description,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok){
      alert("Your restaurant has been created!")
     document.location.replace("/dashboard");
    } else {
      alert(response.statusText)
    }
  } else {
    alert("Please make sure all fields are filled in")
  }
};

  
  
  document
    .querySelector("#new-restaurant-form")
    .addEventListener("submit", newFormHandler);