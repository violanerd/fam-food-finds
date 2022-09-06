 async function deleteRestaurantHandler(event){
     //event.preventDefault();
     let checkDelete = event.target.textContent.trim();
     let restaurant_id;
     if (checkDelete === "Delete"){
        restaurant_id = event.target.getAttribute("data-id")
     }
    
    const url = `/api/restaurant/${restaurant_id}`
    const response = await fetch(url, {
        method: "DELETE"
    })
    if (response.ok){
        alert("Post Deleted");
        document.location.replace('/dashboard');

    } else {
        alert(response.statusText)
    }

 }
document.addEventListener('click', deleteRestaurantHandler)  
