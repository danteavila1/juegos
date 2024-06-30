let games = {
    data:[
    {
        id: 1,
        gameName: "Half-Life 2",
        category: "FPS",
        image:"img/cards/hl2.jpg",
    },
    {
        id: 2,
        gameName: "Battlefield 1",
        category: "FPS",
        image:"img/cards/bf1.jpg",
    },
    {
        id: 3,
        gameName: "Helldivers 2",
        category: "COOP",
        image:"img/cards/helldivers.jpeg",
    },
    {
        id: 4,
        gameName: "Team Fortress 2",
        category: "FPS",
        image:"img/cards/tf2.jpg",
    },
    {
        id: 5,
        gameName: "World of warcraft",
        category: "MMORPG",
        image:"img/cards/wow.jpg",
    },
    {
        id: 6,
        gameName: "Genshin Impact",
        category: "ARPG",
        image:"img/cards/genshin.jpg",
    }]
};

function loadExploreGames(){
    for (let game of games.data){
        let card = document.createElement('div');
        card.classList.add('card', game.category);
        let imgContainer = document.createElement('div');
        imgContainer.classList.add("imageContainer");
        let image = document.createElement('img');
        image.setAttribute("src", game.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);

        let gamesContainer = document.getElementById('gamesContainer');
        
        let nameContainer = document.createElement('div');
        nameContainer.classList.add('nameContainer');

        let nameSubContainer = document.createElement('div');

        let name = document.createElement('h5');
        name.classList.add('gameName');
        name.innerText = game.gameName.toUpperCase();
        nameSubContainer.appendChild(name);
        let category = document.createElement("h6");
        category.innerText = game.category;

        let addBtn = document.createElement('button');
        addBtn.classList.add('addBtn');
        addBtn.innerText = "+";
        addBtn.onclick = () => {
            addGame(game.id);
            addBtnEffect(addBtn);
        };

        nameSubContainer.appendChild(category);
        nameContainer.appendChild(nameSubContainer);
        nameContainer.appendChild(addBtn);

        card.appendChild(nameContainer);
        gamesContainer.appendChild(card);
    }
}

function addBtnEffect(button) {
    // Remove the effect from all buttons first
    let buttons = document.querySelectorAll('.addBtn');
    buttons.forEach(btn => btn.classList.remove('hoverEffect'));

    // Add the effect to the clicked button
    button.classList.add('hoverEffect');

     // Remove the hover effect after a delay (e.g., 0.3 seconds)
     setTimeout(() => {
        button.classList.remove('hoverEffect');
    }, 200);
}

//parameter passed from button
function filterGame(value){
    let buttons = document.querySelectorAll(".buttonValue");
    buttons.forEach(button => {
        //check if value equals innetText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    })

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach(element => {
        //display all cards on 'all' btn click
        if(value == "all"){
            element.classList.remove("hide");
        } else{
            //check if element contains category
            if(element.classList.contains(value.toUpperCase())){
                //display element based on category
                element.classList.remove("hide");
            }
            else{
                //hide the others elements
                element.classList.add("hide");
            }
        }
    });
}


//seach btn
document.getElementById('search').addEventListener("click", () => {
    let searchInput = document.getElementById('searchInput').value;
    let elements = document.querySelectorAll(".gameName");
    let cards = document.querySelectorAll(".card");
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

function addGame (id){
    console.log(id);
    for (let game of games.data) {
        if (id == game.id) {
            // Retrieve the current list of games from local storage
                let selectedGames = JSON.parse(localStorage.getItem('selectedGames')) || [];
                
                // Check if the game is already in the list to avoid duplicates
                let gameExists = selectedGames.some(g => g.id === game.id);
                if (!gameExists) {
                    // Add the new game to the list
                    selectedGames.push(game);
                    
                    // Save the updated list back to local storage
                    localStorage.setItem('selectedGames', JSON.stringify(selectedGames));
                    console.log('Game added to local storage:', game);
                } else {
                    console.log('Game already exists in local storage:', game);
                }
            
                break;
        }
    }
}



loadExploreGames();

//all filter by default

window.onload = () => {
    filterGame("all");
};

