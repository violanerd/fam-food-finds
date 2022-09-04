
const newFormHandler = async function (event) {
    event.preventDefault();
  
    const restaurant_name = document.querySelector('input[name="restaurant-name"]').value;
    const restaurant_url = document.querySelector('input[name="restaurant-url"]').value;
  
    await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        postTitle,
        postContent,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    document.location.replace("/dashboard");
  };
  
  
  document
    .querySelector("#edit-restaurant-form")
    .addEventListener("submit", newFormHandler);