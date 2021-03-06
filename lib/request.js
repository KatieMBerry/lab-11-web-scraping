const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

//makes a request to the Books to Scrape site and returns a promise that resolves with a document
const request = async () => {
    const response = await fetch('http://books.toscrape.com/');
    const html = await response.text();

    //puts response in format we can query
    const dom = new JSDOM(html);
    //where document represents html that we can query using vanilla JS
    return dom.window.document;
};

request();

module.exports = request;
