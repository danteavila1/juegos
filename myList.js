document.addEventListener('DOMContentLoaded', (event) => {
    function loadGames() {
        let selectedGames = JSON.parse(localStorage.getItem('selectedGames')) || [];
        if (selectedGames.length === 0) {
            console.error('No game data found in local storage.');
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
