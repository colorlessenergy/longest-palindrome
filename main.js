// Longest Palindrome

// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, return value must be 0.
// Example:

// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// pseudo code

// 1. cut the string into substrings
// 2. start from 0 and end is 2
// 3. keep looping and adding 1 to the end through string and cut the string into substrings
// 4. check each substring and see if it is a palindrome by reversing it and seeing if it is equal to it.
// 4. until you reached the length of the string.
// 5. then move the start from 0 to 1.. keep doing this until it reached
//    the length;


var longestPalindrome=function(s){
    var string = s;
    var allPalindromes = [];

    // basic checks
    if (s.length === 0) {
        return 0;
    } else if (s.length === 1) {
        return 1;
    } else if (s.length == 2) {
        return 2;
    }

    // checks the string starting from zero..

    // every time its goes through the whole string
    // it removes the first char and repeats the for loop

    // to check if it is palindrome all you do is
    // reverse the string and check if it is the same as the
    //  original string
    while(string.length !== 0) {
        for (let i = 1; i < string.length; i++) {
            if (string.substring(0, i+1) === string.substring(0,i+1).split("").reverse("").join("")) {
                allPalindromes.push(string.substring(0, i+1));
            }
        }
        string = string.substring(1);
    }

    // return one since one letter can be considered a palindrome
    if (allPalindromes.length === 0) {
        return 1;
    }

    // sorts the list by length smallest to biggest and gets the last
    // item in the array.
    return {
        name: allPalindromes.sort(function (a,b) {
            return a.length - b.length;
        })[allPalindromes.length-1]
    };
}

