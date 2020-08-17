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
2. arrow function
함수를 정의할때 function이라는 키워드를 사용하지 않고 =>로 대체~

//ES5 함수 정의 방식
var sum=function(a,b){
    return a+b;
}

//ES6 함수 정의 방식
var sum=(a,b)=>{
    return a+b
}

//ES5 함수 정의 방식
var arr=["a","b","c"];
arr.forEach(funcgion(value){
    console.log(value);
})
//ES6 함수 정의 방식
var arr=["a","b","c"];
    console.log(value);
arr.forEach(value=>)

3. enhanced objected literals 향상된 객체 리터럴

객체의 속성을 메서드로 사용할 때 function예약어를 생략하고 생성가능

var dictionary={
    words:100,
    //es5
    lookup:function(){
    },
        conosole.log("find words");
    //es6
    lookup(){
        conosole.log("find words");

    }
}
modules