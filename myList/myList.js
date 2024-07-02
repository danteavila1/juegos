document.addEventListener('DOMContentLoaded', (event) => {
    function loadGames() {
        let selectedGames = JSON.parse(localStorage.getItem('selectedGames')) || [];
        if (selectedGames.length === 0) {
            noGamesMessage();
            return;
        }

        let myList = document.getElementById('myListContainer');
        if (!myList) {
            console.error('Element with id "myListContainer" not found.');
            return;
        }

        for (let game of selectedGames) {
            let card = document.createElement('div');
            card.classList.add('card', game.category);
            let imgContainer = document.createElement('div');
            imgContainer.classList.add("imageContainer");
            let image = document.createElement('img');
            image.setAttribute("src", game.image);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);

            let nameContainer = document.createElement('div');
            nameContainer.classList.add('nameContainer');
        
            let nameSubContainer = document.createElement('div');
        
            let name = document.createElement('h5');
            name.classList.add('gameName');
            name.innerText = game.gameName.toUpperCase();
            nameSubContainer.appendChild(name);
            let category = document.createElement("h6");
            category.innerText = game.category;
        
            let delBtn = document.createElement('button');
            delBtn.classList.add('delBtn');
            delBtn.onclick = () => deleteGame(game.id);
            delBtn.innerText = "-";
        
            nameSubContainer.appendChild(category);
            nameContainer.appendChild(nameSubContainer);
            nameContainer.appendChild(delBtn);
        
            card.appendChild(nameContainer);
            myList.appendChild(card);
        }
    }

    function deleteGame(id) {
        let selectedGames = JSON.parse(localStorage.getItem('selectedGames')) || [];
        selectedGames = selectedGames.filter(game => game.id !== id);
        localStorage.setItem('selectedGames', JSON.stringify(selectedGames));
        
        // Refresh the list to reflect the deletion
        let myList = document.getElementById('myListContainer');
        while (myList.firstChild) {
            myList.removeChild(myList.firstChild);
        }
        loadGames();
    }

    loadGames();
});

//parameter passed from button
let selectedCategories = [];

function toggleCategory(value) {
    if (value === "all") {
        selectedCategories = ["all"];
    } else {
        const index = selectedCategories.indexOf(value);
        if (index > -1) {
            selectedCategories.splice(index, 1);
        } else {
            selectedCategories.push(value);
            selectedCategories = selectedCategories.filter(cat => cat !== "all");
        }
    }
    updateActiveButtons();
    filterGames();
}

function updateActiveButtons() {
    let buttons = document.querySelectorAll(".buttonValue");
    buttons.forEach(button => {
        if (selectedCategories.includes(button.innerText.toLowerCase())) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}



function filterGames() {
    let elements = document.querySelectorAll(".card");
    let noGamesContainer = document.querySelector('.noGamesContainer');

    // Remove any existing noGamesContainer
    if (noGamesContainer) {
        noGamesContainer.remove();
    }

    let noGames = true;

    elements.forEach(element => {
        if (selectedCategories.includes("all")) {
            element.classList.remove("hide");
            noGames = false;
        } else {
            let show = false;
            for (let category of selectedCategories) {
                if (element.classList.contains(category.toUpperCase())) {
                    show = true;
                    break;
                }
            }
            if (show) {
                element.classList.remove("hide");
                noGames = false;
            } else {
                element.classList.add("hide");
            }
        }
    });

    if (noGames) {
        noGamesMessage();
    }
}

function noGamesMessage() {
    let gamesContainer = document.getElementById('myListContainer');
    let imgContainer = document.createElement('div');
    imgContainer.classList.add("noGamesContainer");
    let image = document.createElement('img');
    image.setAttribute("src", '/img/nog2.png');
    imgContainer.appendChild(image);

    gamesContainer.appendChild(imgContainer);
}


//seach btn
document.getElementById('search').addEventListener("click", () => {
    let searchInput = document.getElementById('searchInput').value;
    let elements = document.querySelectorAll(".gameName");
    let cards = document.querySelectorAll(".card");
    let noGamesContainer = document.querySelector('.noGamesContainer');

    // Remove any existing noGamesContainer
    if (noGamesContainer) {
        noGamesContainer.remove();
    }
    //loop through all elements
    elements.forEach((element, index) =>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })

});
