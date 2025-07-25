//load data from favorites localStorage
const favoritesData = JSON.parse(localStorage.getItem("favorites")) || [];
const favorites = document.getElementById("favorites");
const emptyListMessage = document.getElementById("empty-list");
if (favoritesData.length === 0) {
    emptyListMessage.style.display = "block"; // Show message
} else {
    emptyListMessage.style.display = "none";

    favorites.innerHTML = "";
    favoritesData.forEach((product) => {
        favorites.innerHTML += `
<div class='favorite-items' data-id="${product.id}">
<h2>${product.title}</h2>
<img src="${product.image}"/>
<p><strong>Inspiration: </strong>${product.inspiration}</p>
<p><strong>Artist: </strong>${product.artist}</p>
<p><strong>Category: </strong>${product.category}</p>
    <button class="delete-btn" id="${product.id}">DELETE</button>
</div>

`
    })
    favorites.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            //load favorites
            const favorites = JSON.parse(localStorage.getItem("favorites"))
            const productId = parseInt(e.target.id);
            const newData = favorites.filter((product) => product.id !== productId)
            const itemToRemove = e.target.closest(`.favorite-items[data-id="${productId}"`);
      
            if (itemToRemove) {
                itemToRemove.remove();
                alert("Item deleted");
                localStorage.setItem("favorites", JSON.stringify(newData));
            }
               // Check if list is now empty
    if (newData.length === 0) {
      emptyListMessage.style.display = "block";
    }
        }
    })


}