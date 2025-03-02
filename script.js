const quotes=[
    {text: "What stands in the way,becomes the way."},
    {text:"You are not even trying half of as hard you are capable for."},
    {text:"You didnt came this far to only come this far."},
    {text:"God didnt gives what you want , he gives what you want."},
    {text:"In the middle of difficulty,lies opportunity."},
    {text:"If you are not willing to do it for yourself,no one else gonna to do it for you."}
];
function generateQuote(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote);
      document.getElementById("quote").textContent = `"${randomQuote.text}"`;
}
