//A function that takes in a document, finds all books in the document and returns an array of those books. 
const parse = document => {
    const books = document.querySelectorAll('.product_pod');

    return [...books].map(book => ({
        title: book.querySelector('h3').textContent,
        coverImage: book.querySelector('img').src,
        rating: book.querySelector('p').classList[1],
        price: book.querySelector('.price_color').textContent.trim(),
        inStock: !book.querySelector('.instock').textContent
    }));
};

module.exports = parse;




