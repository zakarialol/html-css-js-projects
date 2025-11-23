let email='e@@@g...com 0@gmail.com 0zkaria@yaho.net A@Y.com 0-g.com o@s.org 1@dadi.com';

let pattern_one= /\w+@\w{3,5}.(com|net)/ig

console.log(email.match(pattern_one))