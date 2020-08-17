vue init webpack-simple vue-todo

es6의 특징 

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
arr.forEach(value=>console.log(value);)

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

4. modules
모듈은 특정 기능을 수행하는 단위 
재사용성이 뛰어난 묶음을 가져다 쓰기 위해서 
//libs/math.js
export funciton sum(x,y){
    return x+y;
}
export var pi=3.141593;

main.js
import {sum} from 'libs/math.js'
sum(1,2);


---------------------------------------------------------
vuex - 상태 관리 라이브러리 
복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 라이브러리
무수히 많은 컴포넌트의 데이터를 관리하기 위한 관리 패턴이자 라이브러리
react의 flux패턴에서 기인함 

1. mvc ==> flux패턴 vuex
mvc?
controller -> model <->view
- 기능 추가 및 변경에 따라 생기는 문제점을 예측할 수 없음 앱이 복잡해지면서 생기는 업데이트 루프
flux란 ? mvc패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴으로 unidirectional data flow
데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로만 처리 
acition -> dispatcher -> model -> view
(화면에서 발생하는 이벤트 또는 사용자 입력)-> (데이터를 변경하는 방법, 메서드) -> (화면에 표시할 데이터) -> (사용자에게 비춰지는 화면)

vuex가 왜 필요할까?
복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워진다. 
vuex를 사용하면 아래와 같은 문제를 해결할수 있다. 
1) mvc 패턴에서 발생하는 구조적 오류
2) 컴포넌트 간 데이터 전달 명시
3) 여러개의 컴포넌트에서 같은 데이터를 업데이트 할때 동기화 문제 

Vuex컨셉: 
view -> action -> state 
  ^-----------------'  
state: 컴포넌트 간에 공유하는 데이터 data()
view:데이터를 표시하는 화면 template
action: 사용자의 입력에 따라 데이터를 변경하는 methods

화면(view)에서 사용자가 add버튼(action)을 누르면 data가 변경됨(state)

vuex 구조
컴포넌트 --> 비동기 로직 --> 동기로직 --> 상태
인터넷에 사진으로 보기~ 


2.vuex기술요소
state, getters, mutations, actions
1) state(여러 컴포넌트에 공유되는 데이터)
    //vue
    data:{
        message: "Hello Vue.js!"
    }

    //vuex 
    state:{
        message: "Hello Vue.js!"
    }
    //vue
    <p>{{message}} </p>
    //vuex 
    <p>{{this.$store.state.message}}</p>
2) getters(state값을 접근하는 속성이자, computed() 처럼 미리 연산된 state값을 접근하는 속성 )
    //store.js
    state:{
        num: 10 
    },
    getters:{
        getNumber(state){
            return state.num
        },
        doubleNumber(state){
            return state.num*2;
        }
    }
    <p>{{this.$store.getters.getNumber}}</p>
    <p>{{this.$store.getters.doubleNumber}}</p>

    

3) mutations(state 값을 변경할 수 있는 유일한 방법이자 메서드)
commit()으로 동작시킨다. 
    //ex1
    //store.js
    state:{
        num: 10 
    },
    mutations:{
        printNumbers(state){
            return state.num
        },
        sumNumbers(state,anotherNum){
            return state.num+anotherNum;
        }
    }
    //app.vue
    this.$store.commit('printNumbers')
    this.$store.commit('sumNumbers')
    
    //ex2
    //store.js
    state:{
        storeNum: 10 
    },
    mutations:{
        modifyState(state,payload){
            console.log(payload.str);
            return state.storeNum+=payload.num;
        }
    }
    //app.vue
    this.$store.commit('modifyState',{
        str:'pass from payload',
        num: 20
    });

?state는 왜 직접 변경하지 않고 mutations으로 변경할까?
여러개의 컴포넌트에서 state값을 변경하는 경우 어느 컴포넌트에서 바꿨는지 추적하기 어렵다. 따라서 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행
페이스북 메신저를 예시로 복잡성을 설명함 

4) action(비동기 처리 로직을 선언하는 메서드, 비동기 로직을 담당하는 mutations)
- 데이터 요청, promise, ES6async과 같은 비동기 처리는 모두 actions에 선언
//ex1
    //store.js
    mutations:{
        accCounter(state){
            state.counter++
        }
    },
    actions:{
        delayedAddCounter(context){
            setTimerout(()=> context.commit('addCounter'),2000);
        }
    }
    //App.vue
    methods:{
        incrementCounter(){
            this.$store.dispatch('delayedAddCounter')
        }
    }
//ex2
    //sotre.js
    mutations:{
        setData(state,fetchedData){
            state.product=fetchedData;
        }
    },
    actions:{
        fetchProductData(context){
            return axios.get('https:~~')
                    .then(response => context.commit('setData',response));
        }
    }
    //App.vue
    mehtods:{
        getProduct(){
            this.$store.dispatch('fetchProductData')
        }
    }
? 왜 비동기 처리 로직은 actions에 선언해야 할까?
언제 어느 컴포넌트에서 해당 state를 호출하고, 변경햇는지 확인하기가 어려움.. 
만약 여러개의 컴포넌트에서 mutations로 시간 차를 두고 state를 변경하는 경우
state 값의 변화를 추적하기 어렵기 때문에 mutations속성에는 동기 처리 로직만 넣어야 함


3. vuex를 더 쉽게 코딩할수 있는 helper기능
각 속성들을 더 쉽게 사용하는 방법 - helper
state-> mapState
getters-> mapGetters
mutations -> mapMutations
actions -> mapActions

0) 사용법
핼퍼를 사용하고자 하는 vue 파일에서 핼퍼를 로딩
//App.vue
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default{
    conputed(){...mapState(['num']),...mapGetters(['countedNum'])},
    methods:{
        ...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn'])
    }
}
...은 ES6의 Object Spread Operator

1) mapState
    //App.vue
    import {mapState} from 'vuex'

    computed(){
        ...mapState(['num'])
        //num(){return this.$store.state.num;}
    }
    //store.js
    state:{
        num:10
    }
    <p>{{this.num}}</p>
    <!-- <p>{{this.$store.state.num}}</p> -->
2) mapGetters
    //App.vue
    import {mapGetters} from 'vuex'

    computed(){
        ...mapGetters(['reverseMessage'])
    }
    //store.js
    getters:{
       reverseMessage(state){
           return state.msg.split('').reverse().join('');
       }
    }
    <p>{{this.reverseMessage}}</p>
    <!-- <p>{{this.$store.getters.reverseMessage}}</p> -->
3) mapMutations
    //App.vue
    import {mapMutations} from 'vuex'

    mehtods:{
        ...mapMutations(['clickBtn']),
        authLogin(),
        dispalyTable(){}
    }
    //store.js
    mutations:{
        clickBtn(state){
            alert(state.msg)
        }
    }

    <button @click="clickBtn"></button>
4. vuex로 프로젝트를 구조화하는 방법과 모듈 구조화 방법

