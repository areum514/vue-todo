vue init webpack-simple vue-todo

1. const& let
- const 한번 선언한값에 대해서 변경할 수 없음 (상수) 객체나 배열의 내부는 변경할수잇다~ const a={};
a.num=10;
const b={};
b.push(200)
- let 한번 선언한 값에 대해서 다시 선언할 수 없음

function sum(){
    //함수 statement
    return 10+20
}

var sum=function(){
    //function expression
    return 10+20
}
arrow function
enhanced objected literals
modules