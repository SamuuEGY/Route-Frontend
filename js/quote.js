originalQuotes = [
	{
		author: "― Jim Rohn",
		quote: "“Beware of what you become in pursuit of what you want.”",
	},
	{
		author: "― Albert Einstein",
		quote:
			"“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”",
	},
	{
		author: "― Mahatma Gandhi",
		quote: "“Be the change that you wish to see in the world.”",
	},
	{
		author: "― Mark Twain",
		quote: "“If you tell the truth, you dont have to remember anything.”",
	},
	{
		author: "― Mahatma Gandhi",
		quote:
			"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
	},
	{
		author: "― Stephen Chbosky",
		quote: "“We accept the love we think we deserve.”",
	},
	{
		author: "― Friedrich Nietzsche",
		quote: "“Without music, life would be a mistake.”",
	},
	{
		author: "― Oscar Wilde",
		quote:
			"“I am so clever that sometimes I dont understand a single word of what I am saying.”",
	},
	{
		author: "― Andre Gide",
		quote:
			"“It is better to be hated for what you are than to be loved for what you are not.”",
	},
	{
		author: "― Mark Twain",
		quote:
			"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
	},
	{
		author: "― J.K. Rowling",
		quote: "“It does not do to dwell on dreams and forget to live.”",
	},
	{
		author: "― William Shakespeare",
		quote:
			"“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
	},
	{
		author: "― Allen Saunders",
		quote: "“Life is what happens to us while we are making other plans.”",
	},
	{
		author: "― Thomas A. Edison",
		quote: "“I have not failed. Ive just found 10,000 ways that wont work.”",
	},
	{
		author: "― Friedrich Nietzsche",
		quote:
			"“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",
	},
	{
		author: "― Mark Twain",
		quote:
			"“The man who does not read has no advantage over the man who cannot read.”",
	},
	{
		author: "― Steve Martin",
		quote: "“A day without sunshine is like, you know, night.”",
	},
	{
		author: "― Lao Tzu",
		quote:
			"“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
	},
	{
		author: "― Mark Twain",
		quote:
			"“Never put off till tomorrow what may be done day after tomorrow just as well.”",
	},
	{
		author: "― Friedrich Nietzsche",
		quote: "“That which does not kill us makes us stronger.”",
	},
	{
		author: "― George Eliot",
		quote: "“It is never too late to be what you might have been.”",
	},
	{
		author: "― Ralph Waldo Emerson",
		quote:
			"“For every minute you are angry you lose sixty seconds of happiness.”",
	},
	{
		author: "― Joker (2019)",
		quote:
			"“The worst part of having a mental illness is people expect you to behave as if you dont.”",
	},
	{
		author: "― Joker (2019)",
		quote:
			"“I used to think that my life was a tragedy, but now I realize, its a comedy.”",
	},
	{
		author: "― Stan Lee",
		quote:
			"“If you have an idea that you genuinely think is good, dont let some idiot talk you out of it.”",
	},
	{
		author: "― Stan Lee",
		quote: "“I guess one person can make a difference.”",
	},
	{
		author: "― Mother Teresa",
		quote: "“If you judge people, you have no time to love them.”",
	},
	{
		author: "― Maya Angelou",
		quote:
			"“There is no greater agony than bearing an untold story inside you.”",
	},
	{
		author: "― Pablo Picasso",
		quote: "“Everything you can imagine is real.”",
	},
	{
		author: "― Cat",
		quote: "Meaw meaw, meaw... meaw",
	},
];

quotes = [].concat(originalQuotes);

function generateQuote() {
	if (quotes.length == 0) {
		resetQuotes();
	}
	random = Math.floor(Math.random() * quotes.length);
	selectedQuote = quotes.splice(random, 1)[0];
	document.getElementById("quoteOutput").innerHTML = selectedQuote.quote;
	document.getElementById("authorOutput").innerHTML = selectedQuote.author;
}
function resetQuotes() {
	quotes = [].concat(originalQuotes);
}
