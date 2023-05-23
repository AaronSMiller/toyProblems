/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = []
    let currentWord = ''
    for(var i = 0 ; i < s.length; i++) {
        if(s[i] !== ' ') {
            currentWord += s[i]
            if(s[i+1] === ' ' || s[i+1] === undefined) {
                words.push(currentWord)
                currentWord = ''
            }
        }
    }
    return words[words.length-1].length
};