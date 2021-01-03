$('document').ready(function(){
    const url = 'http://hn.algolia.com/api/v1/search?query=javascript'

    $.getJSON(url, (data) => {

let currentQuote = ''
const quotes = data.hits

if (currentQuote === '') {
    $('quoteUrl').css('display', 'none')   
} else{

}

$('.read').on('click', () => {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
    console.log(currentQuote)

    $('.quoteAuthor').html(currentQuote.author)
    $('.quoteBody').html(currentQuote.title)

    $('.read').html('<i class="far fa-newspaper mr-2"></i>Show Me One More')
    $('.tweetQuote').attr({href: 'https://twitter.com/intent/tweet?text= ' + currentQuote.title + ' - ' + currentQuote , 
        target: '_blank'
        })

    $('.tweetQuote').props('disabled', false)

    $('.quoteUrl').css('display', 'block')

    $('.quoteUrl').on('click', () =>{

        $('.quoteUrl').attr({href: currentQuote.url, 
    target: '_blank'
    })


    })
})




})


})