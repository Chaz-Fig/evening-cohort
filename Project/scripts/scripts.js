import { affirmations, generateAffirmation } from '../data/affirmations.js';

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let dataList = document.querySelector('#dataList');

function displayData() {
    dataList.innerHTML = '';
    affirmations.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteItem(index));

        listItem.appendChild(deleteBtn);
        dataList.appendChild(listItem);
    });
}

function deleteItem(index) {
    affirmations.splice(index, 1);
    displayData();
}

document.querySelector('#generateBtn').addEventListener('click', generateAffirmation);
document.querySelector('#favoriteBtn').addEventListener('click', addFavorite);

function addFavorite() {
    const affirmation = document.querySelector('#affirmations').textContent;
    if (affirmation && !favorites.includes(affirmation)) {
        favorites.push(affirmation);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayFeedback("Affirmation added to favorites!");
    }
}

function displayFeedback(message) {
    alert(message); 
}
console.log(favorites);