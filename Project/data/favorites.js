const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function loadFavorites() {
    const list = document.querySelector('#favoritesList');
    list.innerHTML = '';  // Clear the list before reloading
    favorites.forEach((affirmation, index) => {
        addFavoriteToList(affirmation, index);
    });
}

function addFavoriteToList(affirmation, index) {
    const list = document.querySelector('#favoritesList');
    const listItem = document.createElement('li');
    listItem.textContent = affirmation;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        loadFavorites();
    });

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
}

document.addEventListener('DOMContentLoaded', loadFavorites);
console.log(favorites);