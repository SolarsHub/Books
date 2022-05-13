const main = document.createElement("main");
main.classList.add("main");
document.body.appendChild(main);
import { urlBase, getSearchUrl } from "./attempted-doms.js";


const displayBooks = (volume) => {

    const output = {};
    output.title = volume.volumeInfo.title;
    output.authors = volume.volumeInfo.authors;
    output.description = volume.volumeInfo.description;
    output.image = volume.volumeInfo.imageLinks.thumbnail;

    const div = document.createElement("div");
    div.classList.add("cards");
    document.body.appendChild(div);

    const image = document.createElement("img");
    image.src = `${output.image}`;
    div.append(document.body.appendChild(image));

    const newBooks = (key, element) => {
        const textInfo = document.createElement(element);
        textInfo.appendChild(document.createTextNode(key));
        div.append(document.body.appendChild(textInfo));
    };

    if (output.description.length > 20) {
        output.description = `${output.description.slice(0, 50)}...`;
    }

    if (output.authors.length) {
        output.authors = output.authors[0];
    } else return "Obliviate!"

    newBooks(output.title, "h3");
    newBooks(output.authors, "li");
    newBooks(output.description, "p");

    main.append(div);

    return output;
};

const search = async (searchTerm) => {
    let results = "";
    const requestPromise = fetch(getSearchUrl(searchTerm));
    const response = await requestPromise;
    const responseData = await response.json();
    results = responseData.items.map(displayBooks);
};


const searchButton = document.getElementById("submitButton");
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const textbox = document.getElementById("textInput").value;
    search(textbox);
});
