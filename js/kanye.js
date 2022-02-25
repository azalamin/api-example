const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));
}

const displayQuote = (data) => {
    const quoteDisplay = document.getElementById('show-quote');
    quoteDisplay.innerText = data.quote;
}