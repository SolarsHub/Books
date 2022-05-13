export const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

export const getSearchUrl = (searchTerm) => {
    return urlBase + searchTerm;
};

