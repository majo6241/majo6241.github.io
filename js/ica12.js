const newButton = 
document.querySelector("#js-new-quote").addEventListener('click',getQuote);
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
async function getQuote() {
    try{
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);
        displayQuote(json['question']);
    } catch (err) {
        console.log(err)
        alert('');
    }
}
function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContext = quote;
}
getQuote();