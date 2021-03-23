(function newQuote() {
    var quotes = [
    'A short stranger will soon enter your life with blessings to share.',
    'Serious trouble will bypass you.',
    'You learn from your mistakes... You will learn a lot today.',
    'People are naturally attracted to you.',
    'Wealth awaits you very soon.',
    'The man on the top of the mountain did not fall there.',
    'Everyone agrees. You are the best.',
    'There is no greater pleasure than seeing your loved ones prosper.',
    'You already know the answer to the questions lingering inside your head.',
    'If you have something good in your life, do not let it go.',
    'You will travel to many exotic places in your lifetime.',
    'There is no greater pleasure than seeing your loved ones prosper.',
    'What ever your goal is in life, embrace it visualize it, and for it will be yours.',
    'The love of your life is stepping into your planet this summer.',
    'You cannot love life until you live the life you love.'
];
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
})();