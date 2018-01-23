var form = document.querySelector('#form');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    var string = document.querySelector('#text').value;

    var pElement = document.querySelector("#output");

    pElement.textContent = "the longest palindrome is " + longestPalindrome(document.querySelector('#text').value).name;
    console.log(longestPalindrome(document.querySelector('#text').value));
});