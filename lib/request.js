const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

//makes a request to the Books to Scrape site and returns a promise that resolves with a document
const request = async () => {
    const response = await fetch('http://books.toscrape.com/catalogue/category/books_1/index.html');
    const html = await response.text();
    console.log(html);
    // const dom = new JSDOM(html);

};
