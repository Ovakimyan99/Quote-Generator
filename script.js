// Get Quote From API
async function getQuote () {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (e) {
        getQuote()
        throw new Error(e)
    }
}

// On load
getQuote();
