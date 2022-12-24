const randQuote = [{
    Quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur sint iste optio placeat dolor labore, reprehenderit ipsum aspernatur blanditiis maiores.',
    Author: '- Author'
},
{
    Quote: 'God save me from my friends. I can protect myself from my enemies.',
    Author: 'Claude Louis Hector De Villars'
},
{
    Quote: 'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we have got',
    Author: 'life'
},
{
    Quote: 'The price of anything is the amount of life you exchange for it.',
    Author: 'David Thoreau'
},
{
    Quote: 'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
    Author: 'Charles Lindbergh'
},
{
    Quote: 'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
    Author: 'Tyne Daly'
},
{
    Quote: 'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
    Author: 'John Kenneth Galbraith'
}
]

const button = document.querySelector('button')
const pEl = document.querySelector('p')
pEl.textContent = randQuote[0].Quote

const authorEl = document.querySelector('.author')
authorEl.textContent = randQuote[0].Author

button.addEventListener(
    'click',
    () => {
        const random = Math.floor(Math.random() * randQuote.length)
        pEl.textContent = randQuote[random].Quote
        authorEl.textContent = randQuote[random].Author
    }
)