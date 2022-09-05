async function newFormHandler(event) {
  event.preventDefault();

  const rating = document.querySelector('input[name="rating"]').value;
  const review_text = document.querySelector('input[name="review-text"]').value;

  const response = await fetch(`/api/review`, {
    method: "POST",
    body: JSON.stringify({
      rating,
      review_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-review-form")
  .addEventListener("submit", newFormHandler);
