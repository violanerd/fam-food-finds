
const newFormHandler = async function (event) {
  event.preventDefault();

  const restaurant_name = document.querySelector('input[name="restaurant-name"]').value;
  const restaurant_url = document.querySelector('input[name="restaurant-url"]').value;
  const restaurant_description = document.querySelector('textarea[name="restaurant-description"]').value;

  await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({
      restaurant_name,
      restaurant_url,
      restaurant_description,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};


document
  .querySelector("#btn-edit")
  .addEventListener("click", newFormHandler);