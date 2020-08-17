import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'
//use는 vue의 플러그인으로 vue를 사용하는 모든 영역에 전역 사용  하기 위해 
Vue.use(Vuex);


export const store=new Vuex.Store({
    modules:{
        todoApp
    }
});


