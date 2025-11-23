/*regaler exprission challenge */
let url1='elzero.og'
let url2='http://elzero.org'
let url3='https://elzero.org'
let url4='https://www.elzero.org'
let url5='https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let regex= /(https?:\/\/www.)?\elzero.\w{2,3}:?(\d\/article.php\?id=100$cat=topics)?/ig
console.log(regex.test(url5))
