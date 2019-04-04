fetchURL();
var books;

function fetchURL() {
    let url = 'https://api.myjson.com/bins/udbm5';
    fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(function (result) {
            return result.json();
        })
        .then(function (data) {
            books = data.books;
            buildCards("", books);
            activateEvent(books)
        });
}

// erstellt alle Cards mit Bücher und fügt sie zum Container mit id 'cardList' (z. 48)
function buildCards(searchInput, books) {
    console.log(books);
    console.log(searchInput);
    console.log("search input" + searchInput)
    let filteredBooks = [];
    if (searchInput == "") {
        filteredBooks = books
    } else {
        console.log("ciao")
        filteredBooks = [];
        console.log(filteredBooks)
        filteredBooks = books.filter(function (book) {
            // wenn ein gesuchter String in der Beschreibung oder im Titel gefunden werden,
            // liefert indexOf eine Zahl größer als -1. In dem Fall muss dieses Buch ins
            // Ergebnis hinzugefügt werden.
            // bei der Filterfunktion gibt man true zurück wenn man z.b. den Titel zurückgeben möchte, false wenn man den Titel nicht zurückgeben möchte.   
            console.log(book.titulo.includes(searchInput))
            return book.titulo.includes(searchInput) || book.descripcion.includes(searchInput)
        });
    }
    
    console.log(filteredBooks)




    let cardContainer = document.getElementById("cardContainer");
        cardContainer.innerHtml = "";
    for (let i = 0; i < filteredBooks.length; i++) {
        console.log(filteredBooks[i])
        
        // erstellt für jedes Buch eine Spalte mit einer Karte drin.
        let cardList = document.createElement("div");
        cardList.addEventListener("touchstart", function () {
            this.classList.toggle('hover')
        })
        cardList.className = "card-list"

        let card = document.createElement("div");
        card.className = "my-card";


        let cardfront = document.createElement("div");
        cardfront.className = "cardfront";

        let image = document.createElement("img");
        image.setAttribute("src", filteredBooks[i].portada);
        image.className = "imageSize";


        let cardback = document.createElement("div");
        cardback.className = "cardback";


        let title = document.createElement("h3");
        let titleTextNode = document.createTextNode(filteredBooks[i].titulo);
        title.appendChild(titleTextNode);


        let description = document.createElement("p");

        let descriptionTextNode = document.createTextNode(filteredBooks[i].descripcion);


        let button = document.createElement("button");


        let buttonTextNode = document.createTextNode("More Info");


        //        let column = document.createElement("div");
        //        column.className = "column";


        // für jede Karte wird eine h3 mit Titel, p mit Beschreibung und ein Button erstellt (34 - 39)
        /**/

        //        column.appendChild(card);
        //        cardList.appendChild(column);
        cardContainer.appendChild(cardList);
        cardList.appendChild(card);
        card.appendChild(cardfront);
        card.appendChild(cardback);
        cardfront.appendChild(image);

        cardback.appendChild(title);
        cardback.appendChild(button);
        cardback.appendChild(description);
        description.appendChild(descriptionTextNode);
        button.appendChild(buttonTextNode)
    }
}
// wird aufgerufen, wenn der Button auf der Zeile 34 von der html-Datei geklickt wird
function searchByString(searchInput, books) {
    // ein Input auf der Zeile 29 wird gesucht und sein Wert gespeichert
//    let searchInput = document.getElementById("searchInput").value;
   
    // durch die Funktion Array.filter() werden nur die Bücher gefiltert,
    // die im Titel oder in der Beschreibung ein String aus der Variable searchInput beinhalten.
    // Die Funktion gibt true nur für die Bücher aus, bei denen die obengenannte Regel entspricht.

//    buildCards(searchInput, []);
    //    let filteredBooks = books.filter(function (book) {
    //        // wenn ein gesuchter String in der Beschreibung oder im Titel gefunden werden,
    //        // liefert indexOf eine Zahl größer als -1. In dem Fall muss dieses Buch ins
    //        // Ergebnis hinzugefügt werden.
    //        // bei der Filterfunktion gibt man true zurück wenn man z.b. den Titel zurückgeben möchte, false wenn man den Titel nicht zurückgeben möchte.   
    //        console.log(book.titulo.includes(searchInput))
    //        return book.titulo.includes(searchInput) || book.descripcion.includes(searchInput)
    //    });
//    console.log(searchInput);
//    console.log(filteredBooks)
    // wird versucht, die Cards zu ersetzen, aber funktioniert falsch
    //    buildCards(filteredBooks);
}

function activateEvent(books){
    let searchButton = document.getElementById("searchButton");
    console.log(searchInput)
    
    searchButton.addEventListener("click", function(){
        let searchInputValue = document.getElementById("searchInput").value;
        console.log(searchInputValue)
        buildCards(searchInputValue, books)
    })
}

//image.setAttribute("src", filteredBooks[i].portada)//
